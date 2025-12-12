import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

function ImageTitle({ displayClass }: QuartzComponentProps) {
  return (
<div class={classNames(displayClass, "img-title")}>
  <a href={"/"}>
    <img alt="Startseite Ethisches Marketing Jetzt" src="https://from-scratch.net/wp-content/uploads/2025/12/ethisches-marketing-jetzt-start.svg" />
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