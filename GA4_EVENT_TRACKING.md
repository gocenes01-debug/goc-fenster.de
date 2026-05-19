# GA4 Event-Tracking Setup — Göc Fenster Rheinfelden

**Version:** 1.0  
**Status:** Ready for Implementation  
**Updated:** 2026-05-22

---

## Overview: Warum GA4 Event-Tracking?

GA4 Standard Tracking zeigt nur:
- ❌ Seitenaufrufe
- ❌ Nutzer-Anzahl
- ❌ Bounce Rate

GA4 Event-Tracking zeigt:
- ✅ **Form-Submissions** (Anfrage über Kontaktformular)
- ✅ **Phone-Clicks** (Nutzer ruft 07623 9995 an)
- ✅ **WhatsApp-Clicks** (Nutzer sendet WhatsApp-Nachricht)
- ✅ **CTA-Clicks** (Nutzer klickt auf "Angebot anfordern")
- ✅ **Scroll-Depth** (Wie tief liest der Nutzer?)
- ✅ **Button-Clicks** (Welche CTAs konvertieren?)

**Business Impact:**
```
Ohne Event-Tracking: "Wir haben 500 Besucher/Monat"
Mit Event-Tracking:  "Wir haben 500 Besucher, 25 Forms, 45 Phone-Clicks, 
                     12 Conversions → ROI: €36k/Monat"
```

---

## Schritt 1: GA4 ID finden/aktivieren

### A. Wenn GA4 schon aktiviert ist:

```bash
# In Google Analytics 4 gehen zu:
Google Analytics Admin → Property → Data Streams → Web

# Dort: Measurement ID kopieren
# Format: G-XXXXXXXXXX

# In hugo.toml eintragen:
# [services.googleAnalytics]
#   id = "G-XXXXXXXXXX"
```

### B. Wenn GA4 noch nicht aktiviert:

1. Google Analytics öffnen: https://analytics.google.com/
2. **Konto erstellen:** "Göc Fenster Rheinfelden"
3. **Property erstellen:** "Website"
4. **Data Stream:** Web, Domain: goc-fenster.de
5. **Measurement ID:** G-XXXXX kopieren
6. In `hugo.toml` eintragen

---

## Schritt 2: Event-Typen definieren

Die folgenden Events sollten trackbar sein:

### 1. **form_submission** (Kontaktformular)
```javascript
gtag('event', 'form_submission', {
  event_category: 'engagement',
  event_label: 'contact_form',
  value: 1,
  page_path: window.location.pathname
});
```

**Tracking-Punkt:** `<form>` Submit Button
**Business-Nutzen:** Direkte Anfrage-Messung
**KPI:** Ziel 10+ Forms/Monat

---

### 2. **phone_click** (Anruf)
```javascript
gtag('event', 'phone_click', {
  event_category: 'engagement',
  event_label: '07623-9995',
  value: 1,
  page_path: window.location.pathname
});
```

**Tracking-Punkt:** `tel:` Links (Sticky Bar, Hero, Footer)
**Business-Nutzen:** Anrufe tracken (besonders Mobile!)
**KPI:** Ziel 20+ Phone-Clicks/Monat

---

### 3. **whatsapp_click** (WhatsApp)
```javascript
gtag('event', 'whatsapp_click', {
  event_category: 'engagement',
  event_label: '49151-11628974',
  value: 1,
  page_path: window.location.pathname
});
```

**Tracking-Punkt:** WhatsApp Button (Sticky Bar, Hero, Kontakt)
**Business-Nutzen:** WhatsApp-Anfragen separat messen
**KPI:** Ziel 15+ WhatsApp-Clicks/Monat

---

### 4. **scroll_depth** (Engagement Messung)
```javascript
// Automatisch trackbar mit Google Tag Manager
// Zeigt: 25%, 50%, 75%, 90%, 100% Scroll
```

**Tracking-Punkt:** Automatisch auf allen Seiten
**Business-Nutzen:** Zeigt ob Inhalte gelesen werden
**KPI:** 50%+ sollten >50% scrollen

---

### 5. **cta_click** (Call-to-Action)
```javascript
gtag('event', 'cta_click', {
  event_category: 'conversion',
  event_label: 'angebot_button',
  page_path: window.location.pathname
});
```

**Tracking-Punkt:** "Angebot anfordern", "Kostenlos anfragen" Buttons
**Business-Nutzen:** Misst höchst-konvertierenden CTAs
**KPI:** Ziel 30+ CTA-Clicks/Monat

---

## Schritt 3: Implementation in Hugo-Templates

### A. GA4 Script im Head (bereits vorhanden)

**Datei:** `layouts/partials/custom_headers.html`

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    'anonymize_ip': true,
    'allow_google_signals': false,
    'allow_ad_personalization_signals': false
  });
</script>
```

**Status:** ✅ Bereits implementiert (aus Phase 1)

---

### B. Form-Submission Event

**Datei:** `layouts/shortcodes/kontaktformular.html` (oder ähnlich)

```html
<!-- Contact Form mit GA4 Tracking -->
<form id="contactForm" onsubmit="trackFormSubmission()">
  <!-- Form-Felder -->
  <input type="text" name="name" placeholder="Ihr Name" required>
  <input type="email" name="email" placeholder="E-Mail" required>
  <textarea name="message" placeholder="Nachricht" required></textarea>
  
  <button type="submit" class="btn btn-primary">
    Anfrage senden
  </button>
</form>

<script>
function trackFormSubmission() {
  // GA4 Event vor Form-Submit
  gtag('event', 'form_submission', {
    'event_category': 'engagement',
    'event_label': 'contact_form',
    'page_path': window.location.pathname,
    'page_title': document.title,
    'timestamp': new Date().toISOString()
  });
  
  // Dann Form normal submitten
  return true;
}
</script>
```

---

### C. Phone-Click Event

**Datei:** `layouts/partials/header.html` (Sticky Bar)

```html
<!-- Telefonbar mit GA4 Tracking -->
<a href="tel:+4976239995" onclick="trackPhoneClick()">
  <i class="fas fa-phone"></i> 07623 9995
</a>

<script>
function trackPhoneClick() {
  gtag('event', 'phone_click', {
    'event_category': 'engagement',
    'event_label': '+4976239995',
    'page_path': window.location.pathname,
    'timestamp': new Date().toISOString()
  });
}
</script>
```

---

### D. WhatsApp-Click Event

**Datei:** `layouts/partials/footer.html`

```html
<!-- WhatsApp Button mit GA4 Tracking -->
<a href="https://wa.me/4915111628974?text=Hallo%20Göc%20Fenster" 
   onclick="trackWhatsappClick()">
  <i class="fab fa-whatsapp"></i> WhatsApp
</a>

<script>
function trackWhatsappClick() {
  gtag('event', 'whatsapp_click', {
    'event_category': 'engagement',
    'event_label': '49151-11628974',
    'page_path': window.location.pathname,
    'timestamp': new Date().toISOString()
  });
}
</script>
```

---

### E. CTA-Button Events

**Datei:** Alle CTA-Buttons ("Angebot anfordern", etc.)

```html
<!-- CTA Button mit GA4 Tracking -->
<a href="/angebot/" onclick="trackCTAClick('angebot_hero')" class="btn btn-primary">
  Kostenlos Angebot anfordern
</a>

<script>
function trackCTAClick(label) {
  gtag('event', 'cta_click', {
    'event_category': 'conversion',
    'event_label': label,
    'page_path': window.location.pathname,
    'timestamp': new Date().toISOString()
  });
}
</script>
```

---

## Schritt 4: GA4 Conversions einrichten

Nach Implementierung sollten folgende **Conversions** in GA4 definiert werden:

### In Google Analytics Admin:

1. **Gehe zu:** Admin → Deine Property → Conversions → Neue Conversion
2. **Erstelle diese 5 Conversions:**

#### Conversion 1: Form Submission
```
Event name:     form_submission
Count as conversion: ✅ JA
```

#### Conversion 2: Phone Click
```
Event name:     phone_click
Count as conversion: ✅ JA
```

#### Conversion 3: WhatsApp Click
```
Event name:     whatsapp_click
Count as conversion: ✅ JA
```

#### Conversion 4: CTA Click
```
Event name:     cta_click
Count as conversion: ✅ JA
```

#### Conversion 5: Scroll 90%+ (Engagement)
```
Event name:     scroll (built-in)
Condition:      scroll_percent >= 90
Count as conversion: ✅ JA
```

---

## Schritt 5: Dashboard-Setup

### Empfohlene Dashboard-Ansichten in GA4:

**1. Conversions Overview**
```
┌──────────────────────────────────────────────────┐
│ Daily Conversions (alle Typen)                   │
├──────────────────────────────────────────────────┤
│ Form Submissions       │ 5
│ Phone Clicks          │ 12
│ WhatsApp Clicks       │ 8
│ CTA Clicks            │ 23
│ Total Conversions     │ 48
│ Conversion Rate       │ 9.6% (48/500 Besucher)
└──────────────────────────────────────────────────┘
```

**2. Conversion Funnel**
```
Seite aufgerufen          500 Users (100%)
           ↓
Scroll 25%+               425 (85%)
           ↓
Scroll 50%+               300 (60%)
           ↓
CTA-Button klick          75 (15%)
           ↓
Form/Phone/WhatsApp       45 (9%)
```

**3. Traffic Source Attribution**
```
Welcher Kanal konvertiert am besten?
├─ Organic Search: 25 Conversions / 200 Users = 12.5%
├─ Direct: 12 Conversions / 150 Users = 8%
├─ Social: 8 Conversions / 100 Users = 8%
└─ Referral: 5 Conversions / 50 Users = 10%
```

---

## Schritt 6: Offline Conversion Tracking (Optional aber wichtig!)

**Problem:** GA4 trackt nur Online-Clicks. Aber viele Kunden rufen an und buchen offline!

**Lösung:** Call Tracking + CRM Integration

### A. Simple Variante (für Start):
```
1. Verschiedene Telefonnummern pro Channel:
   ├─ Homepage: 07623 9995-1
   ├─ Blog: 07623 9995-2
   ├─ Services: 07623 9995-3
   
2. In GA4 Track welche Nummer geklickt wurde
3. In Phone-System: UTM-Parameter erfassen
4. Monatlich: Manual "Attributed Conversions" im GA4 hinzufügen
```

### B. Erweiterte Variante (später):
```
Tools wie CallRail / Marchex:
- Automatische Anrufe-Erfassung
- Integration mit Google Analytics
- Call Duration, Outcome, Return Calls
- ROI automatisch berechnet
```

---

## Schritt 7: Daten-Analyse & Optimierung

### Monatliche Metriken zum Überprüfen:

```markdown
## GA4 Monthly Report Template

### Overview (monatlich)
- Total Website Visits: ____ (-/+___% vs. Vormonat)
- Total Conversions: ____ (-/+___%)
- Conversion Rate: ___% (Ziel: >5%)
- Avg. Session Duration: ___min

### Conversion Breakdown
- Form Submissions: ____ 
  Target: 10+/Monat
  
- Phone Clicks: ____
  Target: 20+/Monat
  
- WhatsApp Clicks: ____
  Target: 15+/Monat
  
- CTA Clicks: ____
  Target: 30+/Monat

### Top Converting Pages
- Page 1: ___% conversion
- Page 2: ___% conversion
- Page 3: ___% conversion

### Traffic Source Attribution
- Organic: ___ conversions (_____%)
- Direct: ___ conversions (_____%)
- Referral: ___ conversions (_____%)
- Social: ___ conversions (_____%)

### Action Items
- [ ] Optimize low-converting pages
- [ ] A/B Test CTA Button Colors
- [ ] Improve Page Speed (if issues)
- [ ] Increase High-Converting Traffic
```

---

## Schritt 8: GDPR Compliance (wichtig!)

GA4 + GDPR erfordert:

### A. Cookie Consent (bereits vorhanden?)
```html
<!-- Datenschutzerklärung muss enthalten: -->
✅ "Wir nutzen Google Analytics 4"
✅ "Tracking via GA4 mit anonymized IP"
✅ "Nutzer können GA4 deaktivieren"
```

**Check:** Ist in `/datenschutz/` dokumentiert?

### B. GA4 GDPR-Einstellungen

In `hugo.toml` bereits konfiguriert:
```toml
gtag('config', 'G-XXXXXXXXXX', {
  'anonymize_ip': true,                          ✅
  'allow_google_signals': false,                 ✅
  'allow_ad_personalization_signals': false      ✅
});
```

**Was das bedeutet:**
- ✅ IP-Adressen anonymisiert (nicht speichern)
- ✅ Keine Google Audience Signale
- ✅ Keine Werbe-Personalisierung
- ✅ DSGVO-konform

---

## Implementation Checklist

### Immediate (diese Woche):
- [ ] GA4 ID aktivieren (wenn nicht vorhanden)
- [ ] `hugo.toml` mit GA4-ID updaten
- [ ] GA4 Script überprüfen (bereits in custom_headers.html)
- [ ] Lokale Website testen: Form-Submission Event feuert?

### Short-term (nächste Woche):
- [ ] Phone-Click Events implementieren
- [ ] WhatsApp-Click Events implementieren
- [ ] CTA-Button Events implementieren
- [ ] In GA4 Admin: Conversions definieren
- [ ] Dashboard-Ansichten erstellen

### Medium-term (2-4 Wochen):
- [ ] Scroll-Depth Events aktivieren
- [ ] Attribution-Analyse starten (welche Seite konvertiert?)
- [ ] Monthly Reporting-Process etablieren
- [ ] A/B Testing von CTAs starten

### Long-term (später):
- [ ] Call-Tracking-System implementieren (CallRail)
- [ ] CRM Integration (Leads → Sales)
- [ ] Custom Audiences für Remarketing
- [ ] Advanced Analysis (Cohort Analysis, etc.)

---

## Test: Events überprüfen

### Methode 1: GA4 Realtime
1. Google Analytics öffnen
2. Realtime → Events ansehen
3. Website öffnen und:
   - Form Submit Test
   - Phone-Button Klick
   - WhatsApp-Button Klick
   - CTA-Button Klick
4. **Sollte sofort in Realtime auftauchen**

### Methode 2: Browser Console
```javascript
// In Browser DevTools (F12 → Console):
// Überprüfe ob gtag Befehle feuern:
gtag('event', 'test_event', {
  'test_param': 'test_value'
});

// Sollte in GA4 Realtime auftauchen
```

---

## Fehlersuche

### Event feuert nicht?

**Häufige Probleme:**

1. **GA4 ID falsch**
   - ✅ Überprüfen: `G-XXXXXXXXXX` Format (17 Zeichen)
   - ✅ Richtige Property-ID?

2. **JavaScript Error**
   - ✅ Browser Console (F12) → Errors?
   - ✅ gtag-Befehle syntaktisch korrekt?

3. **Event name falsch**
   - ✅ Muss exakt matchen: `form_submission`, nicht `form_submit`
   - ✅ Case-sensitive!

4. **GA4 Realtime nicht aktiv**
   - ✅ Neue GA4 Properties brauchen 5-10 Min bis zum ersten Track
   - ✅ Refresh GA4 Dashboard

5. **Ad-Blocker blockiert GA4**
   - ✅ Auf sauberen Browser testen (keine Blocker)
   - ✅ Oder Google Tag Manager mit Serverside Tracking

---

## Nächste Schritte

1. **Diese Woche:**
   - GA4 ID überprüfen & aktivieren
   - Events implementieren
   - Testing

2. **Nächste Woche:**
   - Conversions in GA4 Admin definieren
   - Dashboard aufbauen
   - Tägliches Monitoring starten

3. **Monatlich:**
   - Conversion Rate analysieren
   - Optimize Low-Converting Pages
   - Report erstellen für Team

---

**Kontakt für Fragen:**
- Göc Fenster Rheinfelden
- 📞 07623 9995
- 💬 WhatsApp
- ✉️ gocfensterbau@hotmail.de

---

**GA4 Event-Tracking ist der Schlüssel zu datengestützten Optimierungen!**
