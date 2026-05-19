# Image Alt-Text Guide — Göc Fenster Website

Dieses Dokument beschreibt wie Alt-Text auf Bildern richtig gesetzt wird für SEO und Barrierefreiheit.

## Warum Alt-Text wichtig ist

1. **Barrierefreiheit** — Blinde/sehbehinderte Nutzer können Bilder verstehen (Screenreader)
2. **SEO** — Google nutzt Alt-Text um Bilder-Suche zu verbessern
3. **User Experience** — Wenn Bild nicht lädt, wird Alt-Text als Fallback angezeigt
4. **Google Images** — Besseres Ranking in der Google-Bildersuche

## Aktuelle Bilder & Alt-Text

### 1. Hero-Bild (Homepage)
- **Datei:** `static/img/hero.jpg`
- **Aktuelle Nutzung:** Hero-Slideshow oben auf Homepage
- **Bestehender Alt-Text:** *(nicht vorhanden — MUSS HINZUGEFÜGT WERDEN)*
- **Empfohlener Alt-Text:** 
  ```
  "Moderne Kunststoff-Fenster in zeitgemäßer Wohnanlage — Göc Fenster Rheinfelden"
  ```

### 2. Social Preview Bild
- **Datei:** `static/img/social-preview.jpg`
- **Aktuelle Nutzung:** OpenGraph-Bild für Social Media (Facebook, LinkedIn, etc.)
- **Bestehender Alt-Text:** *(nicht vorhanden)*
- **Empfohlener Alt-Text:**
  ```
  "Göc Fenster Rheinfelden — Meisterbetrieb für Fenster, Türen und Rollläden"
  ```

### 3. Team-Platzhalter
- **Datei:** `static/img/team-placeholder.jpg`
- **Aktuelle Nutzung:** Team-Sektion auf "Über uns" Seite
- **Bestehender Alt-Text:** *(nicht vorhanden)*
- **Empfohlener Alt-Text:** (wird nach echtem Team-Foto ersetzt)
  ```
  "Team von Göc Fenster Rheinfelden"
  ```

### 4. Logo
- **Datei:** `static/img/logo.png` oder `logo.svg`
- **Aktuelle Nutzung:** Header-Logo (normalerweise nicht braucht Alt-Text wenn nur Brand)
- **Empfohlener Alt-Text:** (wenn verwendet)
  ```
  "Göc Fenster Rheinfelden Logo"
  ```

---

## Wie man Alt-Text hinzufügt

### In Markdown-Content

```markdown
# Richtig: Mit aussagekräftigem Alt-Text
![Kunststoff-Fenster in modernem Wohnzimmer](/img/example.jpg)

# Falsch: Leerer oder vager Alt-Text
![image](/img/example.jpg)
![Fenster](/img/example.jpg)
```

### In HTML/Theme-Templates

```html
<!-- Richtig -->
<img src="/img/hero.jpg" alt="Kunststoff-Fenster mit perfektem Wärmeschutz — Göc Rheinfelden">

<!-- Falsch -->
<img src="/img/hero.jpg" alt="">
<img src="/img/hero.jpg">
```

---

## Alt-Text Best Practices

### Was ein guter Alt-Text hat:

✅ **Beschreibung des Bildes** — Was ist auf dem Bild zu sehen?
✅ **Kontext** — Warum ist das Bild hier relevant?
✅ **Relevant Keywords** — Aber NICHT erzwungen
✅ **Prägnante Länge** — 8-15 Wörter idealerweise
✅ **Keine Redundanz** — Nicht "Bild von..." oder "Screenshot..."

### Was vermeiden:

❌ Leerer Alt-Text
❌ Vager Text wie "image" oder "foto123"
❌ Keyword-Stuffing ("Fenster Rheinfelden Türen Rollläden Meister...")
❌ Zu lange Beschreibungen (>125 Zeichen)
❌ Nur Dateinamen ("DSC_12345.jpg")

### Beispiele guter Alt-Texte:

| Bild | Schlechter Alt-Text | Guter Alt-Text |
|------|-------------------|-----------------|
| Installierte Fenster in Wohnzimmer | image1.jpg | Moderne Kunststoff-Fenster mit 3-fach Verglasung in stilvollem Wohnzimmer |
| Teamfoto | team | Das Team von Göc Fenster Rheinfelden mit Inhaber Davut Göc |
| Kunststoff-Fenster Detailansicht | fenster.jpg | Detailansicht von Kunststoff-Fenstern mit ergonomischen Griffen |
| Logo | logo | Göc Fenster Rheinfelden Logo |

---

## Wo Alt-Text hinzufügen (Checkliste)

- [ ] **Hero-Bild** (Homepage) — In Theme-Template
- [ ] **Testimonial-Bilder** — Wenn Kundenfotos hinzugekommen
- [ ] **Projekt-Referenzen** — Before/After Bilder mit Beschreibung
- [ ] **Team-Fotos** — Mit Namen und Position
- [ ] **Social Media Preview** — OpenGraph-Bild (nicht sichtbar, aber wichtig)
- [ ] **Icon-Bilder** — SVGs brauchen `<title>` oder Aria-Labels

---

## SEO Alt-Text Tipps für Göc Fenster

Bei Bildern immer lokale Keywords einbauen:

```
❌ "Fenster"
✅ "Kunststoff-Fenster Rheinfelden"

❌ "Haustür"
✅ "Sichere Aluminium-Haustür in Lörrach"

❌ "Rollläden"
✅ "Elektrische Rollläden zur Energieeinsparung in Bad Säckingen"
```

---

## Barrierefreiheit Prüfen

### Mit WAVE Browser Extension testen
1. https://wave.webaim.org/extension/ installieren
2. Website öffnen
3. WAVE Extension aktivieren → Fehler prüfen
4. Fehlender Alt-Text wird rot markiert

### Mit Lighthouse testen
```bash
hugo server
# Browser öffnen: http://localhost:1313
# DevTools: Lighthouse → Accessibility überprüfen
```

---

## Zukünftige Bilder hinzufügen

Bei neuen Bildern IMMER:

1. **Bild speichern:** `static/img/BESCHREIBUNG.jpg` (z.B. `fenster-anthrazit.jpg`)
2. **Alt-Text schreiben:** Aussagekräftig & SEO-optimiert (8-15 Wörter)
3. **In Content einbinden:** Mit korrektem Alt-Text in Markdown oder HTML
4. **Testen:** Lokale Website prüfen ob Bild & Alt angezeigt wird
5. **Validieren:** WAVE oder Lighthouse überprüfen

---

## Technische Implementierung

### Im Theme (hugo-universal anpassen)

Die Hugo-Universal-Theme nutzt für Hero-Bilder einen Carousel. Um Alt-Text dort hinzuzufügen:

```toml
# In hugo.toml oder data-Dateien
[[data.carousel.items]]
image = "img/hero.jpg"
alt = "Kunststoff-Fenster mit perfekter Wärmeleitung"
title = "Qualitäts-Fenster seit 2003"
```

---

## Kontakt für Fragen

Bei Fragen zum Alt-Text oder SEO:
- **E-Mail:** gocfensterbau@hotmail.de
- **Tel:** 07623 9995
- **Dokumentation:** Siehe README.md

---

**Version:** 1.0  
**Zuletzt aktualisiert:** 2026-05-19
