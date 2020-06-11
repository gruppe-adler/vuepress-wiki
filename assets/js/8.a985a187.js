(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{113:function(e,s,t){},250:function(e,s,t){e.exports=t.p+"assets/img/github-commits.5aebe9e1.jpg"},251:function(e,s,t){e.exports=t.p+"assets/img/travis-status.a0a35589.jpg"},252:function(e,s,t){e.exports=t.p+"assets/img/edit-link.cbaa9764.jpg"},253:function(e,s,t){e.exports=t.p+"assets/img/create-file.f101f1ba.jpg"},254:function(e,s,t){"use strict";var a=t(113);t.n(a).a},292:function(e,s,t){"use strict";t.r(s);t(254);var a=t(2),i=Object(a.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"wiki-how-to"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wiki-how-to"}},[e._v("#")]),e._v(" ❓ Wiki How-To")]),e._v(" "),a("h2",{attrs:{id:"einleitung"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#einleitung"}},[e._v("#")]),e._v(" Einleitung")]),e._v(" "),a("p",[e._v("Dieses Wiki baut auf "),a("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress"),a("OutboundLink")],1),e._v(" auf und liegt auf "),a("a",{attrs:{href:"https://github.com/"+e.$site.themeConfig.repo,target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub "),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Die VuePress Dokumentation ("),a("a",{attrs:{href:"https://vuepress.vuejs.org/guide",target:"_blank",rel:"noopener noreferrer"}},[e._v("hier zu finden"),a("OutboundLink")],1),e._v(") gilt also im Allgemeinen auch für dieses Wiki.")]),e._v(" "),a("p",[e._v("Der folgende Guide soll alles Nötige vermitteln um Seiten bearbeiten und erstellen zu können.")]),e._v(" "),a("h2",{attrs:{id:"github-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-action"}},[e._v("#")]),e._v(" GitHub Action")]),e._v(" "),a("p",[e._v("Da dieses Wiki auf VuePress aufbaut müssen die Wiki-Seiten nach jeder Änderung neu generiert werden. "),a("strong",[e._v("Das bedeutet Änderungen durch Commits sind nicht sofort im Wiki zu sehen.")])]),e._v(" "),a("p",[e._v("GitHub Actions ist so eingerichtet, dass nach jedem Commit im "),a("code",[e._v("master")]),e._v(" Branch, der Build und Deployment Prozess neu angestoßen wird. So sind Änderungen bereits nach ein bis zwei Minuten zu sehen.")]),e._v(" "),a("p",[e._v("Auf GitHub unter "),a("em",[e._v("commits")]),e._v(" ist zu sehen ob der Build für den aktuellen Commit fertiggestellt ist:"),a("br"),e._v(" "),a("img",{attrs:{src:t(250),alt:"github-commits"}})]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Gelber Punkt")]),e._v(" = Build Prozess noch in Arbeit")]),e._v(" "),a("li",[a("em",[e._v("Grüner Haken")]),e._v(" = Build und Deployment Prozess erfolgreich")]),e._v(" "),a("li",[a("em",[e._v("Rotes Kreuz")]),e._v(" = Fehler beim Build Prozess")])])]),e._v(" "),a("p",[a("img",{attrs:{src:t(251),alt:"travis-status"}})]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Falls das Wiki-Seite trotzdem erfolgreichem Build nicht aktualisiert sollte der Cache deaktiviert werden.")])]),e._v(" "),a("h2",{attrs:{id:"aufbau-der-github-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aufbau-der-github-repository"}},[e._v("#")]),e._v(" Aufbau der GitHub Repository")]),e._v(" "),a("h3",{attrs:{id:"verzeichnisse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verzeichnisse"}},[e._v("#")]),e._v(" Verzeichnisse")]),e._v(" "),a("p",[e._v("Alle Dateien befinden sich im "),a("code",[e._v("docs")]),e._v(" Unterverzeichnis, welches im groben wie folgt aufgebaut ist:")]),e._v(" "),a("pre",{staticClass:"vue-container"},[a("code",[a("p",[e._v("docs\n├── .vuepress "),a("em",[e._v("Hier befinden sich die Wiki Konfiguration")]),e._v("\n│\n├── "),a("code",[e._v("assets")]),e._v(" "),a("em",[e._v("Hier befinden sich alle Assets. Also Bilder, Code-Schnipsel, etc.")]),e._v("\n│     ├── "),a("em",[e._v("[...]")]),e._v("\n│     └── gruppe-adler-modset "),a("em",[e._v("Alle Assets für die Wiki-Seite gruppe-adler-modset.md")]),e._v("\n│           ├── "),a("em",[e._v("[...]")]),e._v("\n│           └── create-profile.jpg\n│\n├── "),a("code",[e._v("de")]),e._v(" "),a("em",[e._v("Hier befinden sich alle deutschsprachigen Wiki-Seiten")]),e._v("\n│     ├── bastelstube\n│     ├── infrastruktur\n│     │     ├── "),a("em",[e._v("[...]")]),e._v("\n│     │     ├── gruppe-adler-modset.md "),a("em",[e._v('Wiki-Seite "Gruppe Adler Modset"')]),e._v("\n│     │     └── README.md "),a("em",[e._v('Hauptseite für Kategorie "Infrastruktur"')]),e._v("\n│     │\n│     ├── organisatorisches\n│     ├── taktik\n│     ├── README.md\n│     └── wiki-index.md\n│\n└── "),a("code",[e._v("en")]),e._v(" "),a("em",[e._v("Hier befinden sich alle englischsprachigen Wiki-Seiten")])]),e._v("\n")])]),a("h3",{attrs:{id:"assets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assets"}},[e._v("#")]),e._v(" Assets")]),e._v(" "),a("p",[e._v("Alle Assets (Bilder, Code-Schnipsel, etc.) befinden sich im Verzeichnis "),a("code",[e._v("docs/assets")]),e._v("."),a("br"),e._v("\nFür jede Wiki-Seite befindet sich dort ein eigenes Verzeichnis."),a("br"),e._v("\nZum Beispiel existiert für die Seite "),a("code",[e._v("docs/de/infrastruktur/gruppe-adler-modset.md")]),e._v(" ein Verzeichnis "),a("code",[e._v("docs/assets/gruppe-adler-modsets")]),e._v(" in dem sich alle Bilder für die Wiki-Seite befinden.")]),e._v(" "),a("p",[e._v("Innerhalb der Wiki-Seite kann auf diese Dateien mit dem Pfad "),a("strong",[a("code",[e._v("~@assets/gruppe-adler-modset/")])]),e._v(" zugegriffen werden, also wird das Bild "),a("code",[e._v("docs/assets/gruppe-adler-modsets/create-profile.jpg")]),e._v(" folgendermaßen geladen:")]),e._v(" "),a("pre",[a("code",[e._v("![create-profile](~@assets/gruppe-adler-modset/create-profile.jpg)\n")])]),e._v(" "),a("h2",{attrs:{id:"markdown"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown"}},[e._v("#")]),e._v(" Markdown")]),e._v(" "),a("p",[e._v("VuePress Wiki Seiten werden in Markdown geschrieben. Markdown sollte den Meisten schon von GitHub, unserem Forum oder Discord, welches eine ähnliche Syntax hat, bekannt sein. Im Anschluss aber nochmal alles wichtige:")]),e._v(" "),a("h3",{attrs:{id:"zeilenumbruche"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zeilenumbruche"}},[e._v("#")]),e._v(" Zeilenumbrüche")]),e._v(" "),a("p",[e._v("Um in Markdown einen Zeilenumbruch zu machen reicht eine neue Zeile allein nicht aus. Zusätzlich dazu muss am Ende der Zeile zwei Leerzeichen stehen.")]),e._v(" "),a("grad-md-preview",[a("div",{staticClass:"grad-md-preview__preview"},[a("p",[e._v("Zeile 1\nebenfalls Zeile 1 (nach dieser Klammer sind zwei Leerzeichen)"),a("br"),e._v("\nZeile 2")])]),e._v(" "),a("div",{staticClass:"grad-md-preview__code"},[a("div",{staticClass:"language-markdown extra-class"},[a("pre",[a("code",{staticClass:"hljs language-markdown"},[e._v("Zeile 1\nebenfalls Zeile 1 (nach dieser Klammer sind zwei Leerzeichen)  \nZeile 2\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"uberschriften"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uberschriften"}},[e._v("#")]),e._v(" Überschriften")]),e._v(" "),a("grad-md-preview",[a("div",{staticClass:"grad-md-preview__preview"},[a("h1",{attrs:{id:"grosse-uberschrift"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grosse-uberschrift"}},[e._v("#")]),e._v(" Große Überschrift")]),e._v(" "),a("h2",{attrs:{id:"fast-so-grosse-uberschfit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fast-so-grosse-uberschfit"}},[e._v("#")]),e._v(" Fast so große Überschfit")]),e._v(" "),a("h3",{attrs:{id:"kleinere-uberschrift"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kleinere-uberschrift"}},[e._v("#")]),e._v(" Kleinere Überschrift")]),e._v(" "),a("h4",{attrs:{id:"kleine-uberschrift"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kleine-uberschrift"}},[e._v("#")]),e._v(" Kleine Überschrift")])]),e._v(" "),a("div",{staticClass:"grad-md-preview__code"},[a("div",{staticClass:"language-markdown extra-class"},[a("pre",[a("code",{staticClass:"hljs language-markdown"},[a("span",{staticClass:"hljs-section"},[e._v("# Große Überschrift")]),e._v("\n"),a("span",{staticClass:"hljs-section"},[e._v("## Fast so große Überschfit")]),e._v("\n"),a("span",{staticClass:"hljs-section"},[e._v("### Kleinere Überschrift")]),e._v("\n"),a("span",{staticClass:"hljs-section"},[e._v("#### Kleine Überschrift")]),e._v("\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"hervorhebung"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hervorhebung"}},[e._v("#")]),e._v(" Hervorhebung")]),e._v(" "),a("grad-md-preview",[a("div",{staticClass:"grad-md-preview__preview"},[a("p",[a("em",[e._v("kursiver Text")]),a("br"),e._v(" "),a("strong",[e._v("fetter Text")]),a("br"),e._v(" "),a("em",[e._v("ebenfalls kursiver Text")]),a("br"),e._v(" "),a("strong",[e._v("ebenfalls fetter Text")]),a("br"),e._v(" "),a("em",[a("strong",[e._v("fetter und kursiver Text")])])])]),e._v(" "),a("div",{staticClass:"grad-md-preview__code"},[a("div",{staticClass:"language-markdown extra-class"},[a("pre",[a("code",{staticClass:"hljs language-markdown"},[a("span",{staticClass:"hljs-emphasis"},[e._v("*kursiver Text*")]),e._v("  \n"),a("span",{staticClass:"hljs-strong"},[e._v("**fetter Text**")]),e._v("  \n"),a("span",{staticClass:"hljs-emphasis"},[e._v("_ebenfalls kursiver Text_")]),e._v("  \n"),a("span",{staticClass:"hljs-strong"},[e._v("__ebenfalls fetter Text__")]),e._v("  \n"),a("span",{staticClass:"hljs-strong"},[e._v("_**fetter und kursiver Text**")]),e._v("_  \n")])])])])]),e._v(" "),a("h3",{attrs:{id:"listen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#listen"}},[e._v("#")]),e._v(" Listen")]),e._v(" "),a("h4",{attrs:{id:"unsortierte-listen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unsortierte-listen"}},[e._v("#")]),e._v(" Unsortierte Listen:")]),e._v(" "),a("grad-md-preview",[a("div",{staticClass:"grad-md-preview__preview"},[a("ul",[a("li",[e._v("Eins")]),e._v(" "),a("li",[e._v("Zwei")]),e._v(" "),a("li",[e._v("Drei")])])]),e._v(" "),a("div",{staticClass:"grad-md-preview__code"},[a("div",{staticClass:"language-markdown extra-class"},[a("pre",[a("code",{staticClass:"hljs language-markdown"},[a("span",{staticClass:"hljs-bullet"},[e._v("* ")]),e._v("Eins\n"),a("span",{staticClass:"hljs-bullet"},[e._v("* ")]),e._v("Zwei\n"),a("span",{staticClass:"hljs-bullet"},[e._v("* ")]),e._v("Drei\n")])])])])]),e._v(" "),a("h4",{attrs:{id:"sortierte-listen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sortierte-listen"}},[e._v("#")]),e._v(" Sortierte Listen")]),e._v(" "),a("grad-md-preview",[a("div",{staticClass:"grad-md-preview__preview"},[a("ol",[a("li",[e._v("Eins")]),e._v(" "),a("li",[e._v("Zwei")]),e._v(" "),a("li",[e._v("Drei")])])]),e._v(" "),a("div",{staticClass:"grad-md-preview__code"},[a("div",{staticClass:"language-markdown extra-class"},[a("pre",[a("code",{staticClass:"hljs language-markdown"},[a("span",{staticClass:"hljs-bullet"},[e._v("1. ")]),e._v("Eins\n"),a("span",{staticClass:"hljs-bullet"},[e._v("2. ")]),e._v("Zwei\n"),a("span",{staticClass:"hljs-bullet"},[e._v("3. ")]),e._v("Drei\n")])])])])]),e._v(" "),a("h4",{attrs:{id:"verschachtelte-listen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verschachtelte-listen"}},[e._v("#")]),e._v(" Verschachtelte Listen")]),e._v(" "),a("grad-md-preview",[a("div",{staticClass:"grad-md-preview__preview"},[a("ol",[a("li",[e._v("Eins\n"),a("ul",[a("li",[e._v("Zweite")]),e._v(" "),a("li",[e._v("Ebene")])])]),e._v(" "),a("li",[e._v("Zwei")])])]),e._v(" "),a("div",{staticClass:"grad-md-preview__code"},[a("div",{staticClass:"language-markdown extra-class"},[a("pre",[a("code",{staticClass:"hljs language-markdown"},[a("span",{staticClass:"hljs-bullet"},[e._v("1. ")]),e._v("Eins\n"),a("span",{staticClass:"hljs-bullet"},[e._v("    - ")]),e._v("Zweite\n"),a("span",{staticClass:"hljs-bullet"},[e._v("    - ")]),e._v("Ebene\n"),a("span",{staticClass:"hljs-bullet"},[e._v("2. ")]),e._v("Zwei\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"bilder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bilder"}},[e._v("#")]),e._v(" Bilder")]),e._v(" "),a("grad-md-preview",[a("div",{staticClass:"grad-md-preview__preview"},[a("p",[a("img",{attrs:{src:"https://forum.gruppe-adler.de/assets/uploads/system/site-logo.png",alt:"Adlerkopp"}})])]),e._v(" "),a("div",{staticClass:"grad-md-preview__code"},[a("div",{staticClass:"language-markdown extra-class"},[a("pre",[a("code",{staticClass:"hljs language-markdown"},[e._v("!["),a("span",{staticClass:"hljs-string"},[e._v("Adlerkopp")]),e._v("]("),a("span",{staticClass:"hljs-link"},[e._v("https://forum.gruppe-adler.de/assets/uploads/system/site-logo.png")]),e._v(")\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"links"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#links"}},[e._v("#")]),e._v(" Links")]),e._v(" "),a("grad-md-preview",[a("div",{staticClass:"grad-md-preview__preview"},[a("p",[e._v("Link zu externen Seiten\n"),a("a",{attrs:{href:"http://forum.gruppe-adler.de",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gruppe Adler Forum"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Link zu interner Seiten\n"),a("router-link",{attrs:{to:"/de/infrastruktur/gruppe-adler-modset.html"}},[e._v("Modset")])],1),e._v(" "),a("p",[e._v("Link zu Abschnitt auf gleicher Seite:\n"),a("a",{attrs:{href:"#aufbau-der-github-repository"}},[e._v("Aufbau der GitHub Repository")])])]),e._v(" "),a("div",{staticClass:"grad-md-preview__code"},[a("div",{staticClass:"language-markdown extra-class"},[a("pre",[a("code",{staticClass:"hljs language-markdown"},[e._v("Link zu externen Seiten\n["),a("span",{staticClass:"hljs-string"},[e._v("Gruppe Adler Forum")]),e._v("]("),a("span",{staticClass:"hljs-link"},[e._v("http://forum.gruppe-adler.de")]),e._v(")  \n\nLink zu interner Seiten\n["),a("span",{staticClass:"hljs-string"},[e._v("Modset")]),e._v("]("),a("span",{staticClass:"hljs-link"},[e._v("gruppe-adler-modset.html")]),e._v(")\n\nLink zu Abschnitt auf gleicher Seite:\n["),a("span",{staticClass:"hljs-string"},[e._v("Aufbau der GitHub Repository")]),e._v("]("),a("span",{staticClass:"hljs-link"},[e._v("#aufbau-der-github-repository")]),e._v(")\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"zitate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zitate"}},[e._v("#")]),e._v(" Zitate")]),e._v(" "),a("grad-md-preview",[a("div",{staticClass:"grad-md-preview__preview"},[a("p",[e._v("DerZade sagte:")]),e._v(" "),a("blockquote",[a("p",[e._v("Oida ... Ganz Ehrlich")])])]),e._v(" "),a("div",{staticClass:"grad-md-preview__code"},[a("div",{staticClass:"language-markdown extra-class"},[a("pre",[a("code",{staticClass:"hljs language-markdown"},[e._v("DerZade sagte:\n"),a("span",{staticClass:"hljs-quote"},[e._v("> Oida ... Ganz Ehrlich")]),e._v("\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code"}},[e._v("#")]),e._v(" Code")]),e._v(" "),a("h4",{attrs:{id:"im-fliesstext-eingebetteter-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#im-fliesstext-eingebetteter-code"}},[e._v("#")]),e._v(" Im Fließtext eingebetteter Code")]),e._v(" "),a("grad-md-preview",[a("div",{staticClass:"grad-md-preview__preview"},[a("p",[e._v("Hast du es schon einmal mit "),a("code",[e._v("setUnitLoadout")]),e._v(" probiert?")])]),e._v(" "),a("div",{staticClass:"grad-md-preview__code"},[a("div",{staticClass:"language-markdown extra-class"},[a("pre",[a("code",{staticClass:"hljs language-markdown"},[e._v("Hast du es schon einmal mit "),a("span",{staticClass:"hljs-code"},[e._v("`setUnitLoadout`")]),e._v(" probiert?\n")])])])])]),e._v(" "),a("h4",{attrs:{id:"code-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-block"}},[e._v("#")]),e._v(" Code Block")]),e._v(" "),a("grad-md-preview",[a("div",{staticClass:"grad-md-preview__preview"},[a("p",[e._v("Das hier ist ein Paragraph.")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",[a("code",{staticClass:"hljs language-javascript"},[a("span",{staticClass:"hljs-built_in"},[e._v("console")]),e._v(".log("),a("span",{staticClass:"hljs-string"},[e._v('"Gruppe Adler Rulez!"')]),e._v("):\n\n"),a("span",{staticClass:"hljs-built_in"},[e._v("module")]),e._v(".exports = "),a("span",{staticClass:"hljs-string"},[e._v('"test123"')]),e._v(";\n\n"),a("span",{staticClass:"hljs-built_in"},[e._v("console")]),e._v(".log("),a("span",{staticClass:"hljs-string"},[e._v('"Hello"')]),e._v(");\n")])])]),a("p",[e._v("Das hier ist auch ein Paragraph.")])]),e._v(" "),a("div",{staticClass:"grad-md-preview__code"},[a("div",{staticClass:"language-markdown extra-class"},[a("pre",[a("code",{staticClass:"hljs language-markdown"},[e._v("Das hier ist ein Paragraph.\n"),a("span",{staticClass:"hljs-code"},[e._v('```javascript \nconsole.log("Gruppe Adler Rulez!"):\n\nmodule.exports = "test123";\n\nconsole.log("Hello");\n```')]),e._v("\nDas hier ist auch ein Paragraph.\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"custom-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-container"}},[e._v("#")]),e._v(" Custom Container")]),e._v(" "),a("grad-md-preview",[a("div",{staticClass:"grad-md-preview__preview"},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Dies ist ein Tipp")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Dies ist eine Warnung")])]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Jetzt wirds aber gefährlich")])])]),e._v(" "),a("div",{staticClass:"grad-md-preview__code"},[a("div",{staticClass:"language-markdown extra-class"},[a("pre",[a("code",{staticClass:"hljs language-markdown"},[e._v("::: tip\nDies ist ein Tipp\n:::\n\n::: warning\nDies ist eine Warnung\n:::\n\n::: danger\nJetzt wirds aber gefährlich\n:::\n")])])])])]),e._v(" "),a("p",[e._v("Es lässt sich ebenfalls eine eigene Überschrift festlegen:")]),e._v(" "),a("grad-md-preview",[a("div",{staticClass:"grad-md-preview__preview"},[a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Gruppe Adler rulez")]),e._v(" "),a("p",[e._v("Aufgepasst! Wir sind die besten 😛")])])]),e._v(" "),a("div",{staticClass:"grad-md-preview__code"},[a("div",{staticClass:"language-markdown extra-class"},[a("pre",[a("code",{staticClass:"hljs language-markdown"},[e._v("::: warning Gruppe Adler rulez\nAufgepasst! Wir sind die besten :P\n:::\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"tabellen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tabellen"}},[e._v("#")]),e._v(" Tabellen")]),e._v(" "),a("p",[e._v("Tabellen funktioniert ähnlich wie auf GitHub. Ein genauen Guide dazu gibt es "),a("a",{attrs:{href:"https://help.github.com/articles/organizing-information-with-tables/",target:"_blank",rel:"noopener noreferrer"}},[e._v("hier"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("grad-md-preview",[a("div",{staticClass:"grad-md-preview__preview"},[a("table",[a("thead",[a("tr",[a("th",[e._v("Tabellen")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("Sind")]),e._v(" "),a("th",{staticStyle:{"text-align":"right"}},[e._v("Cool")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Spalte 3 ist")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("rechtsbündig")]),e._v(" "),a("td",{staticStyle:{"text-align":"right"}},[e._v("GRAD")])]),e._v(" "),a("tr",[a("td",[e._v("Spalte 2 ist")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("zentriert")]),e._v(" "),a("td",{staticStyle:{"text-align":"right"}},[e._v("rulez")])]),e._v(" "),a("tr",[a("td",[e._v("zebra stripes")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("are neat")]),e._v(" "),a("td",{staticStyle:{"text-align":"right"}})])])])]),e._v(" "),a("div",{staticClass:"grad-md-preview__code"},[a("div",{staticClass:"language-markdown extra-class"},[a("pre",[a("code",{staticClass:"hljs language-markdown"},[e._v("| Tabellen      | Sind          | Cool  |\n| ------------- |:-------------:| -----:|\n| Spalte 3 ist  | rechtsbündig  |  GRAD |\n| Spalte 2 ist  | zentriert     | rulez |\n| zebra stripes | are neat      |       |\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"emojis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#emojis"}},[e._v("#")]),e._v(" Emojis")]),e._v(" "),a("grad-md-preview",[a("div",{staticClass:"grad-md-preview__preview"},[a("p",[e._v("🎉 💯")])]),e._v(" "),a("div",{staticClass:"grad-md-preview__code"},[a("div",{staticClass:"language-markdown extra-class"},[a("pre",[a("code",{staticClass:"hljs language-markdown"},[e._v(":tada: :100:\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"hervorhebung-von-zeilen-in-code-blocken"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hervorhebung-von-zeilen-in-code-blocken"}},[e._v("#")]),e._v(" Hervorhebung von Zeilen in Code Blöcken")]),e._v(" "),a("grad-md-preview",[a("div",{staticClass:"grad-md-preview__preview"},[a("div",{staticClass:"language-javascript extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br")]),a("span",{staticClass:"hljs-comment"},[e._v("// Hervorgehoben")]),e._v(" "),a("span",{staticClass:"hljs-comment"},[e._v("// Durch Zeilenzahlen in geschweiften Klammern")]),e._v(" "),a("span",{staticClass:"hljs-comment"},[e._v("// am Anfang der Code-Blocks")]),e._v(" "),a("span",{staticClass:"hljs-comment"},[e._v("// Diese Zeile ist auch hervorgehoben")]),e._v(" "),a("span",{staticClass:"hljs-built_in"},[e._v("console")]),e._v(".log("),a("span",{staticClass:"hljs-string"},[e._v('"Yo"')]),e._v(");\n")])]),e._v(" "),a("div",{staticClass:"grad-md-preview__code"},[a("div",{staticClass:"language-markdown extra-class"},[a("pre",[a("code",{staticClass:"hljs language-markdown"},[a("span",{staticClass:"hljs-code"},[e._v('```javascript{1,4}\n// Hervorgehoben\n// Durch Zeilenzahlen in geschweiften Klammern\n// am Anfang der Code-Blocks\n// Diese Zeile ist auch hervorgehoben\nconsole.log("Yo");\n```')]),e._v("\n")])])])])]),e._v(" "),a("h3",{attrs:{id:"html-in-markdown"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-in-markdown"}},[e._v("#")]),e._v(" HTML in Markdown")]),e._v(" "),a("p",[e._v("HTML lässt sich ebenfalls direkt in die Markdown Datei schreiben. Dies gilt auch für "),a("code",[e._v("<style>")]),e._v(" und "),a("code",[e._v("<script>")]),e._v(" Tags.")]),e._v(" "),a("h2",{attrs:{id:"markdown-sandbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown-sandbox"}},[e._v("#")]),e._v(" Markdown Sandbox")]),e._v(" "),a("p",[e._v("Es ist eine Markdown Sandbox in Arbeit, in der man Markdown mit allen Erweiterungen ausprobieren kann. Nerv einfach solange Zade bis sie endlich fertig ist.")]),e._v(" "),a("h2",{attrs:{id:"eine-seite-bearbeiten"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eine-seite-bearbeiten"}},[e._v("#")]),e._v(" Eine Seite bearbeiten")]),e._v(" "),a("p",[e._v("Dieses Wiki liegt auf GitHub, dementsprechend kann man die einzelnen Seiten direkt auf GitHub bearbeiten. Dazu befindet sich am Ende jeder Seite ein Link um die dementsprechende Seite auf GitHub zu editieren:\n"),a("img",{attrs:{src:t(252),alt:"edit-link"}})]),e._v(" "),a("p",[e._v("Falls du keinen Zugriff auf das Repository habt, wende dich an einen Admin der "),a("a",{attrs:{href:"https://github.com/gruppe-adler/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gruppe Adler Organisation auf GitHub"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"eine-seite-erstellen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eine-seite-erstellen"}},[e._v("#")]),e._v(" Eine Seite erstellen")]),e._v(" "),a("p",[e._v("Neue Wiki Seiten lassen sich ebenfalls GitHub erstellen.")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("HALT STOP!")]),e._v(" "),a("p",[e._v("Aber nicht so schnell!"),a("br"),e._v("\nBitte erst den Punkt "),a("a",{attrs:{href:"#eine-seite-erstellen"}},[e._v("Eine Seite erstellen")]),e._v(" zu Ende lesen bevor du mit Erstellen anfängst.")])]),e._v(" "),a("p",[a("img",{attrs:{src:t(253),alt:"create-file"}})]),e._v(" "),a("p",[e._v("Hier sind Links um eine Seite direkt in der jeweiligen Kategorie zu erstellen:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/gruppe-adler/vuepress-wiki/new/master/docs/de/bastelstube",target:"_blank",rel:"noopener noreferrer"}},[e._v("Seite erstellen: Bastelstube"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/gruppe-adler/vuepress-wiki/new/master/docs/de/infrastruktur",target:"_blank",rel:"noopener noreferrer"}},[e._v("Seite erstellen: Infrastruktur"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/gruppe-adler/vuepress-wiki/new/master/docs/de/organisatorisches",target:"_blank",rel:"noopener noreferrer"}},[e._v("Seite erstellen: Organisatorisches"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/gruppe-adler/vuepress-wiki/new/master/docs/de/taktik",target:"_blank",rel:"noopener noreferrer"}},[e._v("Seite erstellen: Taktik"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"nomenklatur"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nomenklatur"}},[e._v("#")]),e._v(" Nomenklatur")]),e._v(" "),a("p",[e._v("Einen kurzen aussagekräftigen Titel verweden, da unsere Suchfunktion primär die Titel durchsucht!")]),e._v(" "),a("p",[e._v("Neue Seiten sind bitte wie folgt zu benennen:")]),e._v(" "),a("ul",[a("li",[e._v("Alles in Kleinbuchstaben")]),e._v(" "),a("li",[e._v("Leerzeichen durch "),a("code",[e._v("-")]),e._v(" ersetzten")])]),e._v(" "),a("p",[a("strong",[e._v("Beispiele:")]),a("br"),e._v("\nGruppe Adler Modset → "),a("code",[e._v("gruppe-adler-modset")]),a("br"),e._v("\nWiki How-To → "),a("code",[e._v("wiki-how-to")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Da es sich um eine markdown Datei handelt sollte die neue Datei natürlich mit der Dateierweiterung "),a("code",[e._v(".md")]),e._v(" enden.")])]),e._v(" "),a("h3",{attrs:{id:"titel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titel"}},[e._v("#")]),e._v(" Titel")]),e._v(" "),a("p",[e._v("Die erste Zeile einer neuen Seite sollte immer eine große Überschrift sein und den Titel der Seite enthalten."),a("br"),e._v("\nz.B.: "),a("code",[e._v("# Wiki How-To")]),a("br"),e._v("\nDieser Titel wird zum Beispiel für die Sidebar gebraucht. Alle übrigen Überschriften sollten maximal die Größe 2 ("),a("code",[e._v("##")]),e._v(") haben.")]),e._v(" "),a("h3",{attrs:{id:"tabellen-md-editor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tabellen-md-editor"}},[e._v("#")]),e._v(" Tabellen / MD Editor")]),e._v(" "),a("p",[e._v("Ein guter Editor, der das Arbeiten insbesondere mit Tabellen deutlich erleichtert findet sich hier: "),a("a",{attrs:{href:"https://typora.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Typora"),a("OutboundLink")],1)])],1)}),[],!1,null,null,null);s.default=i.exports}}]);