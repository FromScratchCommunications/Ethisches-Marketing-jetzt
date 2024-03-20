---
title: Wie diese Seite gebaut ist
draft: false
enableToc: true
tags: 
description: „Ethisches Marketing Jetzt“ basiert auf der Philosophie des „digitalen Gartens“. Hier veröffentlichen wir mit dem Open-Source-Programm Quartz unsere Notizen direkt aus Obsidian heraus.
date: 2024-03-11
---

## Willkommen in unserem digitalen Garten.

Diese Seite basiert auf der Philosophie des „digitalen Gartens“. [Der MIT Technology Review erklärt (auf Englisch), was dahinter steckt.](https://www.technologyreview.com/2020/09/03/1007716/digital-gardens-let-you-cultivate-your-own-little-bit-of-the-internet/)

Zur Domain hat uns übrigens Gerrit Schuster mit seiner Ressource [Nachhaltiges Webdesign Jetzt](https://nachhaltiges-webdesign.jetzt/) inspiriert. Wir sehen diese Website als Geschwister-Angebot und hoffen, dass du beide gemeinsam nutzt.

## Ein Blick ins Backend

Anfang 2022 hat Sabine das Open-Source-Tool [Obsidian](https://obsidian.md/) entdeckt – und damit die Praxis des persönlichen Wissensmanagements (englisch: Personal Knowledge Management, PKM). 
(Danke für den Tipp bei unserem Zoom-Bierchen, Philipp von [Das Gute Ruft](https://dasguteruft.de/)!)

Zwei Jahre später veröffentlichen wir hier unsere Notizen direkt aus Obsidian heraus. Dazu nutzen wir das Open-Source-Programm [Quartz](https://quartz.jzhao.xyz/). Quartz ist ein Static Site Builder, der aus unseren Obsidian-Notizen eine Website erstellt. (Beim Veröffentlichen war [Nicole van der Hoevens Tutorial](https://notes.nicolevanderhoeven.com/How+to+publish+Obsidian+notes+with+Quartz+on+GitHub+Pages) und Mastodon-Support unschätzbar wertvoll für uns. Danke noch mal, Nicole!)

### – Was Obsidian ausmacht: Technologie & Informations-Architektur

Obsidian-Notizen sind für die Ewigkeit gemacht – und zugleich immer nur Momentaufnahmen.

#### Technologie für die Ewigkeit

Mit Obsidian ist es super easy, ein System aus miteinander verbundenen Notizen zu erschaffen. Das Schöne daran: Alle Inhalte werden standardmäßig auf dem eigenen Gerät gespeichert, und zwar als Markdown-Dateien. Die wird man auch in vielen Jahren noch mit einem simplen Text-Editor öffnen und lesen können. Selbst wenn es Obsidian irgendwann nicht mehr geben sollte.

#### Surfen auf Ideen

Anders als in Google Docs, MS Word, WordPress oder Notion sind in Obsidian alle Notizen (Dateien) auf Augenhöhe.

Klar, ich kann Ordner anlegen – das tun wir hier für verschiedene Kapitel, zur Vereinfachung der Navigation.

Aber das wichtigste Strukturelement in Obsidian sind Links. Verbindungen zwischen Notizen. Mit anderen Worten: Gedankenverbindungen, Zusammenhänge zwischen Ideen und Konzepten. Diese Verbindungen werden automatisch in Form von Backlinks und einer grafischen Ansicht abgebildet. 

Das ermöglicht das Surfen auf Ideen. Und passt viel besser zu einem komplexen Thema wie ethischem Marketing als ein lineares Buch.

(Wenn du tiefer in vernetzte Notizen einsteigen willst, empfiehlt Sabine [Linking Your Thinking](https://www.linkingyourthinking.com/) von Nick Milo. Der Newsletter ist absolut lesenswert – und die Kursangebote sind transformativ.)

#### Philosophie der inhaltlichen Evolution

PKM allgemein und die Obsidian-Community im Besonderen verfolgen einen überaus sympathischen Ansatz: Unser Denkprozess ist nie abgeschlossen, und das sollte sich in unseren Notizen spiegeln. Hier verarbeiten wir unsere Gedanken und halten fest, was wir lernen. 

Das passt ideal zu einem zentralen [[Werte und Prinzipien |Wert]] von From Scratch: mit offener Garagentür arbeiten – bzw. „Learning in the Open“. Bei diesem Ansatz geht es darum, eigene Erkenntnisse mit anderen zu teilen – egal, ob man den Wissenserwerb bereits abgeschlossen hat. (In Zeiten des lebenslangen Lernens ist dieser Punkt ja sowieso nie erreicht.)

Deswegen wird diese Ressource auch niemals völlig „fertig“ sein. Wer Websites baut, weiß: Der Prozess der iterativen Anpassungen ist nie abgeschlossen. Hier gilt dies noch mehr. Immer, wenn wir neue Aha-Erlebnisse zum Thema ethisches Marketing haben, finden die ihren Eingang in unsere Obsidian-Notizen. Und damit entwickelt sich dieser Leitfaden stetig weiter.

Einige [[Updates & in Planung |Updates]] haben wir bereits geplant. [**Melde dich hier für E-Mail-Updates an**](https://subscribepage.io/E2vu4J) und erfahre, wenn es was Neues gibt.
### – Warum wir uns für Quartz entschieden haben

Wer seine Obsidian-Notizen veröffentlichen will, hat – Stand März 2024 – drei große Optionen:

1. [Obsidian Publish](https://obsidian.md/publish) – quasi direkt von der Quelle
2. Das [Digital Garden Plugin](https://dg-docs.ole.dev/) für Obsidian. Damit baust du eine [Eleventy](https://www.11ty.dev/)-Website, die über [GitHub](https://github.com/) & [Netlify](https://www.netlify.com/) veröffentlicht wird.
3. [Quartz](https://quartz.jzhao.xyz/). Damit erstellt man eine statische Website, die über GitHub Pages veröffentlicht wird.

Ursprünglich fiel unsere Wahl auf [Obsidian Publish](https://obsidian.md/publish). Nicht nur, weil es super bequem ist – sondern auch, weil wir gerne das Unternehmen finanziell unterstützen wollen, das uns diese zentrale Notiz-Infrastruktur ermöglicht. Schnell stellte sich allerdings heraus, dass sich die Nutzer-Oberfläche in Obsidian Publish nicht übersetzen lässt. Eine englisch-deutsch-gemischte Ressource bringt einige Probleme mit sich, von mangelnder Barrierefreiheit bis hin zum qualitativ mangelhaften Eindruck. Also mussten wir uns leider nach Alternativen umsehen, zumal Internationalisierung derzeit nicht auf der [Obsidian-Roadmap](https://obsidian.md/roadmap/) steht.

Die nächst einfachere Option schien das [Digital Garden Plugin](https://dg-docs.ole.dev/) zu sein. Doch eine kurze Nachfrage im deutschen [Obsidian-Forum auf Discord](https://discord.com/invite/obsidianmd) zeigte: Auch mit diesem Plugin bekommen wir keine deutschsprachige Nutzeroberfläche hin.

Und das brachte uns zu Option 3: [Quartz](https://quartz.jzhao.xyz/). Technisch bei weitem die anspruchsvollste Option, denn ohne Plugin veröffentlichen wir hier alles via Terminal auf Sabines MacBook. Aber Quartz ermöglicht uns mehr Anpassungen – darunter auch eine deutschsprachige Nutzeroberfläche.

Wie gesagt: 
## Diese Ressource ist für immer „Work in Progress“

Noch haben wir uns nicht in alle technischen Details reingefuchst, und es gibt noch einiges Verbesserungspotenzial.

Doch bekanntermaßen ist Perfektionismus der größte Feind des Fortschritts. Daher gehen wir lieber offen mit unseren [[Updates & in Planung |Baustellen]] um – ohne dir vorzuenthalten, was wir bereits haben.