# Beitragen zur Göc Fenster Website

Danke für dein Interesse, zur Website beizutragen! 🙌

Diese Richtlinien helfen uns, Qualität und Konsistenz zu wahren.

---

## Development Workflow

### 1. Feature Branch erstellen

```bash
git checkout -b feature/description-of-feature
```

**Branch Namen Convention:**
- `feature/new-feature-name` — Neue Features
- `fix/bug-description` — Bug Fixes  
- `docs/update-documentation` — Dokumentation
- `style/update-css` — Design/CSS Änderungen
- `content/update-leistungen` — Content-Updates

### 2. Lokale Änderungen testen

```bash
# Hugo Server starten
hugo server

# Browser öffnen: http://localhost:1313
# Änderungen werden live angezeigt (Ctrl+Shift+R zum Hard-Reload)
```

**Überprüf:**
- [ ] Hugo build hat keine Fehler
- [ ] Seite lädt schnell
- [ ] Mobile sieht gut aus (iPhone / iPad)
- [ ] Links funktionieren
- [ ] Bilder zeigen korrekt

### 3. Commits erstellen

```bash
git add .
git commit -m "feat: Brief description of changes"
```

**Commit Message Convention:**
- `feat: ` — Neue Features
- `fix: ` — Bug Fixes
- `docs: ` — Dokumentation
- `style: ` — Design/CSS
- `refactor: ` — Code-Umstrukturierung
- `test: ` — Tests

**Beispiele:**
```
✅ feat: Add blog section with 3 SEO articles
✅ fix: Correct phone number formatting in footer
✅ docs: Add GA4 event tracking guide
❌ update stuff
❌ fixes
```

### 4. Pushen und Pull Request erstellen

```bash
git push origin feature/description-of-feature
```

Dann auf GitHub:
- Gehe zu deinem Fork/Branch
- Klicke "Create Pull Request"
- Fülle das Template aus
- Beschreibe was du geändert hast

### 5. Code Review abwarten

Der Maintainer wird:
- ✅ Hugo Build überprüfen
- ✅ Links validieren
- ✅ Code-Qualität checken
- ✅ Feedback geben (falls nötig)

**Bei Feedback:**
```bash
# Änderungen lokal machen
git add .
git commit -m "fix: Address feedback from review"
git push origin feature/...
```

Der PR wird automatisch aktualisiert.

### 6. Merge & Deploy

Nach Genehmigung:
- PR wird gemergt zu `main`
- GitHub Pages baut automatisch
- 5 Minuten später: Live auf `goc-fenster.de`

---

## Wichtige Regeln

### ✅ Bitte mache:

- **Hugo testen:** `hugo` command vor Push
- **Kleine PRs:** 1-3 Commits, nicht 20+ Änderungen
- **Aussagekräftige Commits:** "fix typo" nicht besser als "fix typo in Leistungen page"
- **Deutsche Rechtschreibung:** Content muss fehlerfrei sein
- **Bilder optimieren:** JPG/PNG <200KB per Datei
- **Links testen:** Alle internen Links müssen funktionieren

### ❌ Bitte nicht:

- ❌ Direkt auf `main` pushen (wird abgelehnt)
- ❌ Kundendaten / Passwörter committen
- ❌ Große Dateien ohne Kompression (>5MB)
- ❌ Alte Bilder löschen (archivieren stattdessen)
- ❌ HTML hardcoden (Hugo templates verwenden)
- ❌ Force push nach PR-Erstellung (rewrite history)

---

## Hilfreiches Setup

### VSCode Extensions (empfohlen):
- Hugo Language Support
- Markdown All in One
- German Spell Checker
- Prettier Code Formatter

### Git Aliases (optional):
```bash
# Kurzcuts für häufige Befehle
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
```

### Hugo Build überprüfen:
```bash
# Voll Build mit Fehler-Checking
hugo --verbose --debug

# Nur Struktur überprüfen
hugo

# Build mit Minification (Prod)
hugo --minify
```

---

## Content-Richtlinien

### Schreiben in Deutsch:
- Meister Betrieb (nicht "Master Craftsman")
- Fenster (nicht "windows")
- Beratung (nicht "consultation")
- Konsistent mit CONTENT_GUIDE.md

### SEO-Anforderungen:
- Mindestens 150 Wörter pro Seite
- H1 hat primäres Keyword
- Meta-Description unter 160 Zeichen
- Images haben Alt-Text
- Internal Links zu anderen Seiten

### Bilder-Anforderungen:
- Format: JPG (Fotos) oder PNG (Icons)
- Größe: Max 200KB pro Datei
- Mindestgröße: 800x600px
- Dateinamen: `fenster-montage-rheinfelden.jpg` (Keyword)
- Alt-Text: Aussagekräftig, 8-15 Wörter

---

## Hugo Struktur verstehen

```
content/
├── _index.md          ← Homepage
├── leistungen/
│   ├── _index.md      ← Services Übersicht
│   └── fenster/       ← Einzelne Services
├── referenzen/        ← Testimonials
├── ueber-uns/         ← About Page
├── faq/               ← FAQ Page
├── blog/              ← Blog Artikel
├── angebot/           ← Angebot/Quote
└── kontakt/           ← Contact

layouts/
├── _default/          ← Default Template
│   └── baseof.html    ← Main Layout (mit GA4 tracking)
└── partials/          ← Reusable Components
    ├── header.html
    ├── footer.html
    ├── seo.html       ← Meta Tags
    └── schema*.html   ← Schema Markup

static/
├── img/               ← Bilder (nicht komprimiert)
├── css/               ← Styles
└── js/                ← JavaScript (z.B. GA4 tracking)
```

### Hugo Shortcodes verwenden:

```hugo
<!-- Zitat -->
{{ shortcode "blockquote" "text=Dies ist ein wichtiger Text" }}

<!-- Button -->
{{ shortcode "button" "text=Klick mich" "url=/kontakt/" "class=btn-primary" }}

<!-- Warnung -->
{{ shortcode "warning" "text=Wichtige Nachricht" }}
```

---

## Performance Best Practices

### Bilder optimieren:
```bash
# TinyPNG online: https://tinypng.com/
# Oder lokal:
convert large-image.jpg -quality 85 -resize 1200x optimized.jpg
```

### CSS/JS Dateien:
- Hugo minifiziert automatisch mit `hugo --minify`
- Keine großen External Libraries ohne Grund
- CSS inline für kritischen Above-the-Fold Content

### Lighthouse Score (Performance):
- Ziel: 90+ auf Mobil & Desktop
- Test: `https://pagespeed.web.dev/`
- Regressions sollten < 5 Punkte sein

---

## Testing vor Push

### Automatisches Checklist:

```bash
# 1. Hugo Build
hugo

# 2. Link-Check (wenn installiert)
npm install -g broken-link-checker
hugo && blc "file://$(pwd)/public" --recursive

# 3. HTML Validation (wenn installiert)
npm install -g html-validate
html-validate "public/**/*.html"

# 4. Spell Check (Deutsch)
# Manuell via VSCode German Spell Checker
```

### Manuelle Überprüfungen:

- [ ] Homepage lädt fehlerfrei
- [ ] Alle Seiten im Menu vorhanden
- [ ] Keine 404 Fehler
- [ ] Mobile sieht gut aus (iPhone 375px)
- [ ] Desktop sieht gut aus (1920px)
- [ ] Tablet sieht gut aus (768px)
- [ ] Sticky Phone-Bar funktioniert
- [ ] WhatsApp Button funktioniert
- [ ] Kontaktformular funktioniert
- [ ] Keine Console Errors (F12)
- [ ] Bilder zeigen alle
- [ ] Links funktionieren
- [ ] Rechtschreibung korrekt

---

## Pull Request Beschreibung schreiben

**Gutes Beispiel:**
```markdown
## Description
Adds new blog section with 3 SEO-optimized articles on:
- KfW funding for energy-efficient windows
- Material comparison (plastic vs aluminum vs wood)
- Window installation step-by-step guide

## Type of Change
- [x] ✨ New feature
- [ ] 🐛 Bug fix
- [x] 📝 Documentation

## Related Issues
Implements Phase 3 of GitHub feedback roadmap

## Changes Made
- Added /blog directory structure
- Created 3 blog articles (2500+ words each)
- Updated navigation menu with "Blog" link
- Added GA4 event tracking for blog pages
- Optimized for long-tail keywords

## Testing
- [x] Tested locally: `hugo server`
- [x] All internal links working
- [x] Mobile responsive (tested on iPhone)
- [x] No console errors
- [x] German spelling checked

## Screenshots
![Homepage with new Blog link](screenshot.png)

## Additional Context
Blog articles target German local market keywords for window services
Expected SEO impact: +150-200 potential ranking keywords
```

**Schlechtes Beispiel:**
```markdown
added stuff
```

---

## Häufige Fragen

### F: Wie ändere ich eine bestehende Seite?

```bash
git checkout -b fix/update-leistungen
# Bearbeite content/leistungen/_index.md
hugo server  # Test
git commit -m "fix: Update Leistungen page with new services"
git push origin fix/update-leistungen
# Erstelle PR auf GitHub
```

### F: Wie füge ich ein neues Bild hinzu?

```bash
# 1. Optimize Bild
# TinyPNG: https://tinypng.com/
# Oder: convert old.jpg -quality 85 optimized.jpg

# 2. In static/img/ ablegen
cp optimized.jpg static/img/neue-fenster.jpg

# 3. In Content referenzieren
![Neue Fenster](img/neue-fenster.jpg)
# ODER
{{< img src="neue-fenster.jpg" alt="Neue Fenster" >}}

# 4. Commit
git add static/img/neue-fenster.jpg content/...
git commit -m "feat: Add new window installation photos"
```

### F: Wie teste ich Hugo Fehler?

```bash
# Verbose Mode für Details
hugo --verbose --debug

# Spezifischen Content überprüfen
hugo --source content/blog --verbose

# Clear cache
rm -rf resources
hugo
```

### F: Wer kann PRs mergen?

Nur **Maintainers** können mergen:
- Göc Fenster Rheinfelden Eigentümer
- Autorisierte Entwickler

Normale Team-Mitglieder können:
- PRs erstellen
- Code Review geben
- Feedback hinzufügen

### F: Wie lange dauert Genehmigung?

- Kleine Changes: 1-2 Stunden
- Normale PRs: 24 Stunden
- Große Changes: Bis zu 1 Woche (mit Review-Feedback)

---

## Support

### Fragen?

- **GitHub Issues:** https://github.com/gocenes01-debug/goc-fenster.de/issues
- **Team Slack:** #website-development
- **Telefon:** 07623 9995

### Hilfreiche Ressourcen:

- **Hugo Docs:** https://gohugo.io/documentation/
- **Git Guide:** https://git-scm.com/doc
- **Markdown:** https://www.markdownguide.org/
- **SEO Guide:** Siehe `SEO_AUDIT_CHECKLIST.md`
- **Content Guide:** Siehe `CONTENT_GUIDE.md`

---

## Code of Conduct

- 🤝 Sei respektvoll und höflich
- 💡 Gute Ideen willkommen (auch Kritik)
- 🔒 Keine Kundendaten/Secrets committen
- 🚀 Quality über Geschwindigkeit
- 📚 Dokumentation ist wichtig

---

## Danke für deinen Beitrag! 🎉

Dein Einsatz hilft, die Website von Göc Fenster besser zu machen.

**Viel Erfolg!** 👍
