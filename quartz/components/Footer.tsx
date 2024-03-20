import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <p>
          Ein Projekt von
          <a href="https://from-scratch.net"> From Scratch Communications</a> (CC) {year}
        </p>
        <p>
        <a href="https://ethischesmarketing.jetzt/Hilfe--and--Kontakt">Hilfe & Kontakt</a> | <a href="https://ethischesmarketing.jetzt/Updates--and--in-Planung">Updates & in Planung</a> | <a href="https://ethischesmarketing.jetzt/Wie-diese-Seite-gebaut-ist">Wie diese Seite gebaut ist</a>
        </p>
        <p>
        <a href="https://ethischesmarketing.jetzt/Impressum--and--Datenschutz">Impressum & Datenschutz</a> | <a href="https://ethischesmarketing.jetzt/Lizenz--and--Urheberrecht">Lizenz & Urheberrecht</a> | <a href="https://ethischesmarketing.jetzt/Sitemap">Sitemap</a>
        </p>
        <p>
        Wir gendern mit Unterstrich, weil diese Seite in Markdown geschrieben ist – und Sternchen würden hier alles kursiv setzen.
        </p>
        <p>
        <div id="wcb" class="carbonbadge"></div>
<script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer></script>
</p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
