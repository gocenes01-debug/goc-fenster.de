# Göc Fenster Rheinfelden — Website

Dies ist die Hugo-basierte Website für [Göc Fenster Rheinfelden](https://www.goc-fenster.de), einen Meisterbetrieb für Fenster, Türen und Rollläden im Dreiländereck (Rheinfelden, Lörrach, Bad Säckingen).

## 🚀 Quick Start

### Voraussetzungen
- Hugo Extended v0.157.0+ ([Download](https://github.com/gohugoio/hugo/releases))
- Git

### Installation & Development

```bash
# Repository klonen
git clone https://github.com/gocenes01-debug/goc-fenster.de.git
cd goc-fenster.de

# Submodule initialisieren (Theme)
git submodule update --init --recursive

# Lokale Entwicklung starten
hugo server

# Website öffnet sich unter http://localhost:1313
```

### Build für Production
```bash
hugo --minify --baseURL "https://www.goc-fenster.de/"
```

Die statische Website wird in den `/public` Verzeichnis generiert.

---

## 📁 Projektstruktur

```
goc-fenster.de/
├── content/               # Hauptinhalte (Markdown)
│   ├── _index.md         # Homepage (wenn vorhanden)
│   ├── leistungen/       # Services (Fenster, Türen, Rollläden)
│   ├── referenzen/       # Kundenstimmen und Projekte
│   ├── ueber-uns/        # Über den Betrieb und Team
│   ├── angebot/          # Angebots-Anfrage
│   ├── kontakt/          # Kontaktseite
│   ├── datenschutz.md    # Datenschutzerklärung (GDPR)
│   └── impressum.md      # Rechtliches Impressum
│
├── layouts/              # Hugo-Templates
│   ├── 404.html          # 404-Fehlerseite
│   └── partials/         # Wiederverwendbare Komponenten
│       ├── seo.html      # Meta-Tags, OpenGraph, Schema.org
│       ├── ga4.html      # Google Analytics 4 (Platzhalter)
│       └── custom_headers.html # Zusätzliche Header + GA4
│
├── static/               # Statische Assets
│   ├── img/              # Bilder (Hero, Logo, Social Preview)
│   ├── css/              # Custom CSS (Responsive, Mobile)
│   └── robots.txt        # SEO: Suchmaschinen-Anweisungen
│
├── data/                 # Dynamische Daten (YAML)
│   ├── features/         # Features/Selling Points
│   ├── carousel/         # Bild-Carousel-Konfiguration
│   └── testimonials/     # Kundenbewertungen
│
├── themes/               # Hugo-Theme (Git Submodule)
│   └── hugo-universal/   # Responsive Bootstrap-Theme
│
├── hugo.toml             # Hugo-Konfiguration
├── .gitmodules          # Git Submodule-Konfiguration
└── README.md            # Dieses Dokument
```

---

## 📝 Inhalte bearbeiten

### Seite bearbeiten
Alle Seiteninhalte sind Markdown-Dateien im `content/` Verzeichnis. Beispiel:

```markdown
+++
title = "Fenster"
type = "page"
description = "Unsere Fenster-Leistungen"
+++

# Fenster vom Fachmann

Beschreibung der Fenster-Leistungen...
```

**Frontmatter-Parameter:**
- `title` — Seitentitel (wird auch in Meta-Tags verwendet)
- `type` — Seiten-Layout (normalerweise `"page"`)
- `description` — Meta-Description für Suchmaschinen (max. 155 Zeichen)

### Kundenbewertungen hinzufügen
Bewertungen sind in `data/testimonials/` als YAML-Dateien gespeichert:

```yaml
# data/testimonials/mueller.yaml
name: "Familie Müller"
quote: "Tolle Arbeit, sehr zufrieden!"
rating: 5
date: "2026-04"
```

### Features anpassen
Features (Selling Points) sind in `data/features/` konfiguriert:

```yaml
# data/features/qualitaet.yaml
title: "Qualität"
description: "Meisterbetrieb seit 20+ Jahren"
icon: "fa fa-star"
```

---

## 🔍 SEO & Meta-Tags

Die Website nutzt Hugo-Templates für automatisierte SEO:

### Meta-Tags
Definiert in `layouts/partials/seo.html`:
- `<title>` — Seitentitel
- `<meta name="description">` — Seiten-Beschreibung
- `<meta name="keywords">` — Keywords
- OpenGraph-Tags für Social Media
- Twitter Cards für besseres Sharing
- Schema.org LocalBusiness-Markup

### Anpassen der Meta-Tags
In `hugo.toml` die Standardwerte setzen:
```toml
[params]
  author = "Göc Fenster Rheinfelden"
  defaultKeywords = ["Fenster Rheinfelden", "Fensterbau", ...]
  defaultDescription = "Fenster und Türen vom Meisterbetrieb..."
  default_sharing_image = "img/social-preview.jpg"
```

---

## 📊 Google Analytics 4

Die Website ist GA4-ready. Um Analytics zu aktivieren:

1. **GA4 Property erstellen:**
   - Google Analytics Account
   - Neue Property für `goc-fenster.de` erstellen
   - Measurement ID kopieren (Format: `G-XXXXXXXXXX`)

2. **In `hugo.toml` eintragen:**
```toml
[services]
  [services.googleAnalytics]
    id = "G-XXXXXXXXXX"  # Deine GA4 Measurement ID
```

3. **Testen:**
```bash
hugo server
# Website öffnen und prüfen ob GA4-Code geladen wird
# (Browser Console → Network → suchen nach "google-analytics")
```

---

## 🚀 Deployment

### GitHub Pages (automatisch)

Die Website wird automatisch deployed wenn Sie auf `main` pushen:

```bash
git add .
git commit -m "fix: GA4 Duplikation entfernt"
git push origin main
```

**GitHub Action** (`.github/workflows/deploy.yml`):
- Hugo bauen mit Minification
- Nach `gh-pages` Branch pushen
- GitHub Pages deployed automatisch

### Manuell testen
```bash
hugo --minify --baseURL "https://www.goc-fenster.de/"
cd public/
# Site lokal prüfen oder auf GitHub Pages pushen
```

---

## 📋 Checkliste für neue Inhalte

Bevor Sie Inhalte veröffentlichen:

- [ ] **Rechtschreibung** — Deutsche Rechtschreibung korrekt?
- [ ] **Meta-Description** — Vorhanden und unter 155 Zeichen?
- [ ] **Bilder** — Alt-Text auf allen Bildern?
- [ ] **Links** — Alle Links funktionieren (keine 404)?
- [ ] **Mobil** — Responsive auf Handy getestet?
- [ ] **SEO** — Keywords sinnvoll eingebaut (kein Keyword-Stuffing)?
- [ ] **CTAs** — Call-to-Action Links (Tel, Kontakt) vorhanden?

---

## 🔧 Technische Konfiguration

### Kontaktformular
Placeholder in `hugo.toml` ausfüllen:
```toml
formspree_action = ""  # Formspree Action-URL eintragen
```

### Google Maps
Google Maps API Key in `hugo.toml`:
```toml
googleMapsApiKey = ""  # TODO: API Key eintragen
```

### Custom CSS
Custom Styles in `static/css/custom.css`:
- Mobile-First Responsive Design
- Sticky Topbar (Tel auf Mobil)
- WhatsApp-CTA-Button
- Hero-Bildoptimierung

---

## 🐛 Troubleshooting

### Hugo startet nicht
```bash
# Submodule sicher laden
git submodule update --init --recursive

# Hugo-Cache löschen
rm -rf resources/_gen/

# Neu starten
hugo server
```

### Bilder werden nicht angezeigt
- Bilder müssen in `static/img/` sein
- In Markdown: `![Beschreibung](/img/filename.jpg)`
- Alt-Text immer eintragen!

### GitHub Pages zeigt alte Version
- `public/` Verzeichnis lokal löschen
- `hugo --minify` neu bauen
- In GitHub Actions warten bis Deploy fertig

---

## 📚 Weitere Ressourcen

- [Hugo Dokumentation](https://gohugo.io/documentation/)
- [Hugo-Universal Theme Docs](https://github.com/devcows/hugo-universal-theme)
- [Markdown Guide](https://www.markdownguide.org/)
- [Schema.org LocalBusiness](https://schema.org/LocalBusiness)
- [Google Analytics 4 Setup](https://support.google.com/analytics)

---

## ✉️ Support

Bei Fragen zur Website kontaktieren Sie den Entwickler oder:
- **Tel:** 07623 9995
- **WhatsApp:** 0151 11628974
- **E-Mail:** gocfensterbau@hotmail.de

---

**Zuletzt aktualisiert:** 2026-05-19

© 2026 Göc Fenster Rheinfelden
