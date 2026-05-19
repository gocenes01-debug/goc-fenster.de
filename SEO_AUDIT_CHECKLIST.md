# SEO Audit Checklist — Göc Fenster Rheinfelden

Dieses Dokument ist ein praktisches Audit-Tool zum regelmäßigen Überprüfen der SEO-Performance.

**Empfohlen:** Monatlich durchführen (30 Minuten) oder Quarterly (2 Stunden für tiefere Analyse)

---

## 🔍 TECHNICAL SEO

### Indexierung & Crawling

- [ ] **Google Search Console**: https://search.google.com/search-console/
  - [ ] Keine Fehler in "Abdeckung" (Coverage)
  - [ ] "Entdeckte - nicht indexiert" Seiten prüfen
  - [ ] Core Web Vitals: Alle grün?
  - [ ] Sitemaps submittiert & gültig?
  - [ ] Mobile-Usability: Keine Fehler?

- [ ] **Robots.txt Test**: https://www.seobility.net/en/robotstxt-checker/
  - [ ] robots.txt ist vorhanden
  - [ ] Wichtige Seiten erlaubt
  - [ ] Keine unerwünschten Block-Rules

- [ ] **Meta-Robots Tags**:
  - [ ] Homepage: `index, follow` (oder nicht vorhanden)
  - [ ] Dienste-Seiten: `index, follow`
  - [ ] Kontakt/Impressum: `index, follow`
  - [ ] Keine `noindex` Tags auf Seiten die indexiert sein sollen

### Core Web Vitals

- [ ] **Largest Contentful Paint (LCP)**: < 2.5s
- [ ] **Cumulative Layout Shift (CLS)**: < 0.1
- [ ] **First Input Delay (FID)**: < 100ms (oder Interaction to Next Paint)

**Tools zum Testen:**
- Google PageSpeed Insights: https://pagespeed.web.dev/
- WebVitals.dev: https://webvitals.dev/

```bash
# Lokal testen:
hugo server
# Dann: https://pagespeed.web.dev/ → Website eingeben
```

### Lighthouse Score

- [ ] **Desktop Score**: 90+ (grün)
- [ ] **Mobile Score**: 90+ (grün)
- [ ] Alle Kategorien überprüft:
  - [ ] Performance (Geschwindigkeit)
  - [ ] Accessibility (Barrierefreiheit)
  - [ ] Best Practices (Web Best Practices)
  - [ ] SEO (Suchmaschinen-Optimierung)

**Tools:**
- Google Lighthouse: (eingebaut in Chrome DevTools)
- WebAIM: https://webaim.org/resources/contrastchecker/

### Sitemap & Robots

- [ ] **sitemap.xml existiert**: https://www.goc-fenster.de/sitemap.xml
- [ ] **Sitemap ist gültig**: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- [ ] **robots.txt existiert**: https://www.goc-fenster.de/robots.txt
- [ ] **robots.txt verweist auf Sitemap**
- [ ] **Alle Seiten in Sitemap** (außer Kontakt/Impressum optional)

### Security (HTTPS & SSL)

- [ ] **SSL-Zertifikat gültig**: https://www.sslshopper.com/ssl-checker.html
- [ ] **Alle Links sind HTTPS** (nicht HTTP gemischt)
- [ ] **Keine Mixed Content Warnings** (Browser DevTools)
- [ ] **HSTS Header vorhanden** (Security Best Practice)

### Mobile Optimization

- [ ] **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
  - [ ] Mobile-Friendly: JA
  - [ ] Kein "Not Mobile-Friendly"

- [ ] **Responsive Design**:
  - [ ] Mobile (375px): Lesbar, kein Horizontal-Scroll
  - [ ] Tablet (768px): Richtige Layout
  - [ ] Desktop (1920px): Optimaler Abstand

- [ ] **Touch-Targets**: Min. 44x44 Pixel (Mobile-Standard)

---

## 📄 ON-PAGE SEO

### Meta-Tags

- [ ] **Title Tags**:
  - [ ] Unter 60 Zeichen
  - [ ] Keyword vorne
  - [ ] Unique auf jeder Seite
  - [ ] Ansprechend formuliert

- [ ] **Meta-Descriptions**:
  - [ ] 155-160 Zeichen
  - [ ] Keyword im Text
  - [ ] Call-to-Action erwähnt
  - [ ] Unique auf jeder Seite

**Test-Tool**: https://www.internetmarketingninjas.com/tools/title-tag-preview-tool/

### Überschriften-Struktur

- [ ] **Pro Seite nur 1x H1** (Hauptüberschrift)
- [ ] **H1-Hierarchie**: H1 > H2 > H3 (keine Sprünge)
- [ ] **Alle H2/H3 mit Content** (keine leeren Überschriften)
- [ ] **Keyword in H1 oder H2**
- [ ] **Aussagekräftige Überschriften** (beschreibend, nicht vage)

**Audit-Tool**: https://www.seobility.net/en/seocheck/

### Content Quality

- [ ] **Wortanzahl**:
  - [ ] Homepage: 300+ Wörter
  - [ ] Dienste-Seiten: 500-1500 Wörter
  - [ ] FAQ: 2000+ Wörter (gesamt)

- [ ] **Keyword-Dichte** (1-2% ideal):
  - [ ] Primary Keyword: 1-2x pro 100 Wörter
  - [ ] Long-Tail Varianten: 2-3x per Seite
  - [ ] Kein Keyword-Stuffing (>3% ist zu viel)

- [ ] **Readability** (Schreibstil):
  - [ ] Kurze Sätze (max. 15-20 Wörter)
  - [ ] Kurze Absätze (2-3 Sätze)
  - [ ] Bullet Points / Listen verwendet
  - [ ] Deutsche Grammatik & Rechtschreibung korrekt

- [ ] **Aktualität**:
  - [ ] Inhalte sind nicht älter als 1 Jahr
  - [ ] Aktuelle Preise & Informationen
  - [ ] Veraltete Informationen aktualisiert

### Images & Multimedia

- [ ] **Alt-Text auf allen Bildern**:
  - [ ] Keine leeren `alt=""`
  - [ ] Aussagekräftig (nicht nur "Bild")
  - [ ] Keyword-relevant (wo passend)
  - [ ] 8-15 Wörter ideal

- [ ] **Image Optimization**:
  - [ ] JPG/PNG komprimiert (unter 200KB pro Bild)
  - [ ] Responsive Bilder (nicht zu große für Mobile)
  - [ ] Modern Format (WebP wenn möglich)

- [ ] **Image SEO**:
  - [ ] Dateinamen sind aussagekräftig (nicht "IMG_12345.jpg")
  - [ ] Captions auf wichtigen Bildern
  - [ ] Strukturierte Bilddaten (wenn relevant)

**Tools:**
- TinyPNG: https://tinypng.com/ (Kompression)
- ImageOptim (Mac) oder FileOptimizer (Windows)

### Internal Linking

- [ ] **Mindestens 1 interner Link pro Seite** (außer Kontakt)
- [ ] **Links sind aussagekräftig** (Anchor-Text beschreibt Ziel)
  - [ ] ✅ "Kostenlose Beratung anfragen"
  - [ ] ❌ "Klicken Sie hier"

- [ ] **Wichtige Seiten** sind häufig verlinkt:
  - [ ] Homepage (von vielen Seiten)
  - [ ] Kontakt (von vielen Seiten)
  - [ ] Leistungen (von Home & Referenzen)

- [ ] **Keine Broken Links** (404 Fehler):
  - [ ] Testen mit: https://www.brokenlinkcheck.com/
  - [ ] Oder GitHub Actions Link-Checker läuft automatisch

### Keywords & Entity Optimization

- [ ] **Primary Keyword**:
  - [ ] In Title Tag
  - [ ] In Meta-Description
  - [ ] In H1 oder First H2
  - [ ] 1-2x im Content

- [ ] **LSI Keywords** (Semantisch verwandte Begriffe):
  - [ ] Synonyme verwendet
  - [ ] Variationen des Keywords
  - [ ] Verwandte Begriffe

- [ ] **Entity Optimization** (für Knowledge Graph):
  - [ ] Business Name konsistent
  - [ ] Branche/Kategorie klar
  - [ ] Location konsistent
  - [ ] Kontaktdaten vollständig

---

## 🔗 OFF-PAGE SEO

### Backlinks & Link Profile

- [ ] **Backlink-Anzahl**: Min. 10-20 local citations
- [ ] **Backlink-Qualität** (nicht Quantität):
  - [ ] Von relevanten Seiten (z.B. Handwerk, Lokal)
  - [ ] Keine Spam-Links (überprüfen mit Ahrefs/SEMrush)
  - [ ] Keine käuflichen Links

- [ ] **Anchor-Text Verteilung**:
  - [ ] Mix aus verschiedenen Anchors
  - [ ] Nicht alle "Click here" oder unnatürlich
  - [ ] Branded Anchors enthalten

**Tools:**
- Ahrefs Backlink Checker: https://ahrefs.com/backlink-checker
- SEMrush Backlink Audit: https://www.semrush.com/

### Local Citations & Directories

- [ ] **Google Business Profile**: Aktiv & optimiert
- [ ] **Bing Places**: Registriert & aktuell
- [ ] **Yelp**: Profil exists
- [ ] **Local Directories**: 5+ Einträge
- [ ] **Alle mit einheitlicher NAP**: (Name, Adresse, Telefon)

**Siehe auch:** LOCAL_SEO_GUIDE.md (ausführliche Anleitung)

### Social Signals (optioniert)

- [ ] **Social Media Präsenz**:
  - [ ] Facebook: Seite exists & aktiv
  - [ ] Instagram: Profil exists (optional)
  - [ ] LinkedIn: Unternehmen-Seite (optional)

- [ ] **Engagement**:
  - [ ] Monatliche Posts (min. 1x pro Woche)
  - [ ] Kommentare auf Posts
  - [ ] Engagement Rate > 1%

---

## 🔍 SEARCH PERFORMANCE

### Google Search Console

- [ ] **Average Position**:
  - [ ] Primary Keywords: Top 10
  - [ ] Target Keywords: Top 20
  - [ ] Trend: Postzahl sollte steigen (nicht sinken)

- [ ] **Click-Through Rate (CTR)**:
  - [ ] Industry Average: 2-5%
  - [ ] Target: Über dem Average

- [ ] **Impressions**:
  - [ ] Trend: Sollte monatlich wachsen
  - [ ] Target: +30% über 6 Monate

- [ ] **Search Performance**:
  - [ ] Keine neuen Error-Messages
  - [ ] Coverage: >90% indexed
  - [ ] Exclusions korrekt (z.B. Kontakt nicht indexed ist OK)

### Keyword Rankings

- [ ] **Tracking Tools aktiviert**:
  - [ ] SEMrush Rank Tracking
  - [ ] Ahrefs Rank Tracker
  - [ ] Google Search Console (manual)

- [ ] **Primary Keywords**:
  - [ ] "Fenster Rheinfelden": Position tracking
  - [ ] "Fensterbauer Rheinfelden": Position tracking
  - [ ] "Haustüren Rheinfelden": Position tracking

- [ ] **Long-Tail Keywords**:
  - [ ] Min. 10 Keywords trackbar
  - [ ] Monatlich überprüft
  - [ ] Trend analysiert (up/down)

### Organic Traffic

- [ ] **Google Analytics 4**:
  - [ ] Organic Sessions: Steigender Trend
  - [ ] Organic Users: Bestandsaufbau
  - [ ] Bounce Rate: <50% (ideal <40%)
  - [ ] Avg. Session Duration: >2 Min.

- [ ] **Conversion Tracking**:
  - [ ] Form Submissions: Tracked
  - [ ] Phone Clicks: Tracked (GA4 Events)
  - [ ] Scroll Depth: 50%+ of users scroll
  - [ ] Goal Completion Rate: >2%

---

## 🏗️ TECHNICAL SCHEMA MARKUP

### Implemented Schemas

- [ ] **LocalBusiness Schema**:
  - [ ] Name, Address, Telephone korrekt
  - [ ] Geo-Coordinates vorhanden
  - [ ] Opening Hours aktuell
  - [ ] Website URL korrekt

- [ ] **Review Schema** (Testimonials):
  - [ ] AggregateRating vorhanden
  - [ ] Individual Reviews vorhanden
  - [ ] Rating korrekt (1-5 Sterne)

- [ ] **FAQPage Schema**:
  - [ ] 10+ FAQs strukturiert
  - [ ] Q&A Pairs korrekt formatiert
  - [ ] Google Rich Results Test: OK

- [ ] **Service Schema**:
  - [ ] Alle Services gelistet
  - [ ] Area Served korrekt
  - [ ] Price Range vorhanden

- [ ] **BreadcrumbList Schema**:
  - [ ] Auf allen Seiten vorhanden
  - [ ] Breadcrumbs korrekt formatiert
  - [ ] Navigation logisch

### Schema Validation

- [ ] **Google Rich Results Test**: https://search.google.com/test/rich-results
  - [ ] Keine Errors
  - [ ] Rich Results korrekt angezeigt

- [ ] **Schema.org Validator**: https://schema.org/validate
  - [ ] Keine kritischen Fehler
  - [ ] All properties valid

**Tools:**
- Google Rich Results Test: https://search.google.com/test/rich-results
- https://schema.org/validate

---

## ♿ ACCESSIBILITY (WCAG 2.1 AA)

### Color Contrast

- [ ] **Text Contrast**: Min. 4.5:1 für Normal-Text
- [ ] **Large Text**: Min. 3:1 für 18pt+ oder 14pt+ Bold
- [ ] **Test-Tool**: https://webaim.org/resources/contrastchecker/

### Alt Text & Images

- [ ] **Alle Nicht-Dekoration Bilder**: Alt-Text
- [ ] **Alt-Text aussagekräftig**: Nicht nur "Image"
- [ ] **Decorative Images**: `alt=""`

### Keyboard Navigation

- [ ] **Tab-Order logisch**: Links in sinnvoller Reihenfolge
- [ ] **Focus-States sichtbar**: Keyboard-Nutzer können sehen wo sie sind
- [ ] **Alle Funktionen**: Via Keyboard erreichbar (kein Hover-only)

### Form Labels

- [ ] **Label-Elemente vorhanden**: Auf allen Inputs
- [ ] **Labels explizit linked**: `<label for="fieldname">`
- [ ] **Error Messages**: Deutlich gekennzeichnet

### Semantic HTML

- [ ] **Richtige HTML-Tags**: `<nav>`, `<main>`, `<article>`, etc.
- [ ] **Kein leeres alt=""**: Auf funktionalen Elementen
- [ ] **Headings korrekt**: H1 > H2 > H3 (keine Sprünge)

---

## 📊 MONTHLY AUDIT TEMPLATE

### Quick Check (15 min)

```markdown
## Mai 2026 SEO Audit

### Indexierung
- [ ] GSC: 0 Errors
- [ ] Sitemap gültig: ✓
- [ ] Mobile-Friendly: ✓

### Performance
- [ ] Lighthouse Score: 92 (Desktop), 88 (Mobile)
- [ ] LCP: 2.2s (grün)
- [ ] CLS: 0.08 (grün)

### Rankings
- "Fenster Rheinfelden": Position 4 (↑2 since April)
- "Haustüren Lörrach": Position 8 (→)

### Traffic
- Organic Sessions: 543 (+12% vs. April)
- Bounce Rate: 42% (↓3%)
- Conversions: 12 Forms + 23 Calls

### Issues Found
- [ ] None

### Next Month Actions
- [ ] Publish 1 new Blog Article
- [ ] Add 3 more testimonials
- [ ] Update GBP with March projects
```

### Deep Analysis (2 hours)

**Zusätzlich zu Quick Check:**
- Backlink Profile überprüfen
- Konkurrenz-Analyse
- Content Gap Analysis
- Keyword Rankings detailliert
- User Experience Feedback sammeln
- Technische Schulden identifizieren

---

## 🎯 Quarterly SEO Audit Schedule

```
Q1 (Jan-Mar): Winter SEO Audit
- Deep Backlink Analysis
- Competitor Benchmarking
- Content Strategy Review
- New Year Goal Setting

Q2 (Apr-Jun): Spring Growth
- Local SEO Optimization
- Content Refresh
- Link Building Campaign
- Performance Baseline

Q3 (Jul-Sep): Summer Peak
- Traffic Analysis & Optimization
- Conversion Rate Optimization
- New Service Page Creation
- Mid-Year Goal Review

Q4 (Oct-Dec): Year-End Review
- Annual Performance Report
- Goal Achievement Analysis
- Next Year Strategy Planning
- Holiday Campaign Setup
```

---

## 📋 Red Flags — Sofort überprüfen wenn:

- 🚩 Google Search Console zeigt plötzliche Drop
- 🚩 Organic Traffic sinkt >20% in einem Monat
- 🚩 Neue Errors in Indexierung (Coverage)
- 🚩 Wichtige Rankings verschwinden (Position >50)
- 🚩 Lighthouse Score sinkt unter 80
- 🚩 Core Web Vitals: Eines wird rot
- 🚩 Broken Links in Sitemap
- 🚩 No mobile-responsive pages
- 🚩 Google Business Profile hacked/missing
- 🚩 Viele neue 404 Fehler

---

**Version:** 1.0  
**Zuletzt aktualisiert:** 2026-05-19  
**Nächster Check fällig:** 2026-06-19 (monatlich)

© 2026 Göc Fenster Rheinfelden
