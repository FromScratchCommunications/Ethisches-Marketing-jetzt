import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

function ImageTitle({ displayClass }: QuartzComponentProps) {
  return (
<div class={classNames(displayClass, "img-title")}>
  <a href={"/"}>
    <img src="/static/Ethisches Marketing Jetzt – Startseite.svg" />
  </a>
</div>
)
}

ImageTitle.css = `
.img-title {
  margin: 0rem 0rem 0 0; 
}
`

export default (() => ImageTitle) satisfies QuartzComponentConstructor