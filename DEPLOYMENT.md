# Deployment Guide — Göc Fenster Website

Dieses Dokument beschreibt wie die Website deployed wird und wie Notfall-Rollbacks erfolgen.

---

## 🚀 Deployment-Prozess

### Automatisches Deployment (Standard)

Die Website wird **automatisch deployed** wenn Sie auf den `main` Branch pushen:

```bash
# 1. Änderungen vornehmen
# ... (Dateien bearbeiten) ...

# 2. Änderungen staged-n
git add .

# 3. Commit mit beschreibender Message
git commit -m "feat: Neue Testimonials hinzugefügt"

# 4. Zu GitHub pushen
git push origin main
```

**Was passiert dann automatisch:**

1. **GitHub Actions** wird ausgelöst (`.github/workflows/deploy.yml`)
2. Hugo wird mit `hugo --minify` gebaut
3. Minifizierter Code wird in `public/` generiert
4. Content wird zu `gh-pages` Branch gepusht
5. **GitHub Pages** deployed die Website automatisch
6. Neue Version ist in ~2-3 Minuten live auf `https://www.goc-fenster.de/`

### Deploy-Status prüfen

Im GitHub Repository unter **Actions** können Sie den Status sehen:

```
gocenes01-debug/goc-fenster.de → Actions → Letzter Workflow
```

- ✅ **Grün** = Erfolgreich deployed
- 🔴 **Rot** = Build fehlgeschlagen (siehe Error-Log)
- 🟡 **Gelb** = In Bearbeitung

---

## 🔍 Pre-Deployment Checkliste

**Vor dem Pushen testen:**

```bash
# 1. Lokale Server starten
hugo server

# 2. Im Browser prüfen
# → http://localhost:1313
# → Alle Links funktionieren?
# → Responsive auf Handy?
# → Keine Fehler in der Console?

# 3. Build testen
hugo --minify

# 4. Öffentliche Version prüfen
# → Firefox/Chrome DevTools
# → Mobile Emulation
# → Performance Check
```

**Wichtig:** Immer lokal testen bevor Sie pushen!

---

## 🆘 Notfall: Website ist kaputt

### Schneller Rollback (Letzte Version)

Wenn die neue Version broken ist:

```bash
# 1. Letzten Commit rückgängig machen
git revert HEAD --no-edit

# 2. Zu GitHub pushen
git push origin main

# GitHub Actions wird neu ausgelöst
# Alte Version wird in ~2-3 Min deployed
```

### Manueller Rollback (zu älterer Version)

```bash
# 1. Git-Log anschauen
git log --oneline

# 2. Zum alten Commit zurück (z.B. abc123)
git revert abc123 --no-edit

# 3. Pushen
git push origin main
```

---

## 📋 Häufige Deployment-Probleme

### Problem: GitHub Actions schlägt fehl
**Grund:** Hugo-Build-Fehler (meist Markdown-Syntax)

**Lösung:**
```bash
# 1. Lokal bauen um Error zu sehen
hugo

# 2. Error beheben (z.B. fehlende Frontmatter-Klammern)

# 3. Wieder pushen
git add .
git commit -m "fix: Markdown-Fehler korrigiert"
git push origin main
```

### Problem: Website zeigt alte Version
**Grund:** Browser-Cache ist alt

**Lösung:**
```bash
# Hard Refresh im Browser
# Windows/Linux: Ctrl + Shift + R
# Mac: Cmd + Shift + R

# Oder:
# 1. Browser-DevTools öffnen (F12)
# 2. Network Tab → "Disable cache" aktivieren
# 3. Seite neu laden
```

### Problem: Bilder laden nicht
**Grund:** Falscher Bildpfad oder fehlende Datei

**Lösung:**
```bash
# 1. Datei existiert?
ls -la static/img/hero.jpg

# 2. In Markdown korrekt referenziert?
# ✅ ![Hero](/img/hero.jpg)
# ❌ ![Hero](img/hero.jpg)
# ❌ ![Hero](/img/hero.jpg) (von außerhalb /static)
```

---

## 🔐 Git Best Practices

### Commit Messages schreiben

**Format:** `type: Description` (auf Deutsch)

```
feat: Neue Testimonials hinzugefügt
fix: GA4 Duplikation entfernt
refactor: CSS-Struktur vereinfacht
docs: README.md aktualisiert
chore: Dependencies aktualisiert
```

**Beispiele:**
```bash
git commit -m "feat: 3 neue Kundenbewertungen eingefügt"
git commit -m "fix: Broken Links in Referenzen entfernt"
git commit -m "docs: Deployment-Guide hinzugefügt"
```

### Saubere Git-Historie

**Immer einzelne, fokussierte Commits machen:**

```bash
# ✅ Gut: Kleine, fokussierte Commits
git commit -m "feat: Neue Testimonials hinzugefügt"
git commit -m "fix: Alt-Text zu Bildern hinzugefügt"

# ❌ Schlecht: Zu viele Änderungen in einem Commit
git commit -m "verschiedene Fixes und Updates"
```

---

## 📊 Deployment Monitoring

### Website-Health prüfen

Nach dem Deployment diese Punkte prüfen:

1. **Erreichbarkeit**
   ```bash
   curl -I https://www.goc-fenster.de/
   # Sollte HTTP 200 zurückgeben
   ```

2. **Responsive Design**
   - Desktop: https://www.goc-fenster.de/
   - Mobil: Developer Tools → iPhone X emulieren

3. **Funktionality**
   - [ ] Alle Menü-Links klickbar?
   - [ ] Hero-Bild lädt?
   - [ ] Testimonials-Carousel funktioniert?
   - [ ] Kontaktformular erreichbar?
   - [ ] Google Maps API funktioniert?

4. **Performance**
   - Google PageSpeed: https://pagespeed.web.dev/
   - Target: Lighthouse Score 90+

5. **SEO**
   - Schema.org Validator: https://schema.org/validate
   - Meta-Tags vorhanden? (Inspect HTML)

---

## 🚨 Emergency Contacts

Bei Website-Problemen:

- **Tel:** 07623 9995
- **WhatsApp:** 0151 11628974
- **E-Mail:** gocfensterbau@hotmail.de

---

## 📋 Deployment Checkliste

Bevor Sie ein größeres Update deployen:

- [ ] Lokal getestet mit `hugo server`
- [ ] Build erfolgreich mit `hugo --minify`
- [ ] Alle Seiten responsive überprüft
- [ ] Links funktionieren alle
- [ ] Bilder laden korrekt
- [ ] Keine Konsolen-Fehler (DevTools)
- [ ] Meta-Descriptions vorhanden
- [ ] Git-Commit mit aussagekräftiger Message
- [ ] Auf GitHub gepusht
- [ ] Deploy-Status grün in Actions
- [ ] Neue Version live überprüft
- [ ] Mobile Version funktioniert

---

**Version:** 1.0  
**Zuletzt aktualisiert:** 2026-05-19
