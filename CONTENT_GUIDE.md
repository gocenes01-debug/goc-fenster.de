# Content Guide — Göc Fenster Website

Dieses Dokument beschreibt wie Content für die Website geschrieben wird — mit SEO, Benutzerfreundlichkeit und Brand-Konsistenz im Auge.

## 📝 Content-Grundsätze

### 1. **Tone of Voice**
- **Professionell aber persönlich** — Wir sind ein Meisterbetrieb, nicht nur eine Agentur
- **Deutsch, natürlich und klar** — Keine Marketingblabla
- **Hilfreich & lösungsorientiert** — Wir beantworten Kundenfragen
- **Vertrauensaufbau** — 20+ Jahre Erfahrung, Meister-Status, Garantie

### 2. **Kern-Messaging**
Jede Seite sollte eines dieser Kernargumente vermitteln:
- ✅ **Meisterbetrieb seit 2003** — Lange Erfahrung & Vertrauenswürdigkeit
- ✅ **Persönliche Beratung** — Direkter Kontakt zum Chef, nicht zum Vertriebsteam
- ✅ **Fachgerechte Montage** — Handwerk & Qualität
- ✅ **5 Jahre Garantie** — Sicherheit & Rückgratstand
- ✅ **Kostenlose Beratung** — Keine Einstiegshürde

### 3. **Zielgruppe**
- **Eigenheim-Besitzer** (30-65 Jahre) in Rheinfelden, Lörrach, Bad Säckingen
- **Mieter** mit Modernisierungsfragen
- **Unternehmen** mit Büro-Modernisierung
- **Handwerker** suchen nach lokalen Zulieferern

---

## ✍️ Seiten richtig schreiben

### Header & Title
```markdown
# Gute Überschrift: Sprechend, nicht zu lang

❌ "Fenster"
✅ "Hochwertige Fenster für Neubau und Sanierung"

❌ "Alles über unsere Services"
✅ "Das machen wir für Sie"
```

### Meta-Description (155-160 Zeichen)
Dies ist die Beschreibung in Google-Suchergebnissen:

```
❌ Zu kurz: "Fenster"
❌ Zu lang: "Willkommen auf der Website von Göc Fenster Rheinfelden, wir machen viele Sachen mit Fenstern und Türen und anderen Produkten seit vielen Jahren"
✅ Optimal: "Kunststoff-, Alu- & Holz-Fenster vom Meisterbetrieb Göc Rheinfelden. Kostenlose Beratung, fachgerechte Montage, 5 Jahre Garantie."
```

**Tool zum Testen:** https://www.internetmarketingninjas.com/tools/title-tag-preview-tool/

### Keywords
```markdown
+++
keywords = ["Fenster Rheinfelden", "Fensterbauer Rheinfelden", "Haustüren"]
+++
```

**Regel:** 3-5 Keywords, Long-Tail (nicht "Fenster" allein, sondern "Kunststoff-Fenster Rheinfelden")

---

## 📖 Content-Strukturen

### Service-Seite (z.B. Leistungen)
```markdown
# [Service] für [Region]

Kurze Intro (2-3 Sätze): Wer wir sind, was wir tun

## [Unterservice 1]
- Kurze Beschreibung
- Optionen/Varianten
- Besonderheit unseres Angebotes

## [Unterservice 2]
- ...

## CTAs
[Anrufen / Kontakt / Angebot]
```

### Seite mit Testimonials
```markdown
# [Seitentitel]

Intro mit Kernargument

## Kundenstimmen

[Automatisch aus data/testimonials geladen]

Aufforderung für Feedback
```

### Kontakt-ähnliche Seite
```markdown
# [Aktion]

Was der Nutzer bekommen
- Punkt 1
- Punkt 2
- Punkt 3

## Wie es funktioniert
1. Schritt 1
2. Schritt 2
3. Schritt 3

CTA: Telefon oder Kontaktformular
```

---

## 🔍 SEO Best Practices beim Schreiben

### 1. **Keyword in Title & Überschriften**
```markdown
# Kunststoff-Fenster: Preiswert und langlebig

[Keyword "Kunststoff-Fenster" in H1]
```

### 2. **Keyword in Meta-Description**
```
"Kunststoff-Fenster vom Meisterbetrieb Göc Rheinfelden. Preiswert, pflegeleicht..."
[Keyword am Anfang]
```

### 3. **Keyword natürlich im Content verteilen**
```markdown
✅ "Unsere Kunststoff-Fenster mit 3-fach Verglasung bieten..."
❌ "Kunststoff-Fenster Kunststoff-Fenster Kunststoff-Fenster bieten..." [Keyword-Stuffing]
```

### 4. **Internal Links**
```markdown
[Erfahren Sie mehr über unsere Kunststoff-Fenster →](/leistungen/#kunststoff)

[Jetzt kostenlos anfragen →](/angebot/)

[Kontaktieren Sie uns →](/kontakt/)
```

### 5. **Überschriften-Hierarchie**
```markdown
# H1: Hauptüberschrift (nur 1x pro Seite)

## H2: Abschnitte
Inhalt

### H3: Unterabschnitte (sparend verwenden)
Inhalt
```

---

## 🎯 CTAs (Call-to-Action) richtig setzen

### Wo CTAs stehen sollten:
- Am Ende der Service-Beschreibung
- Oben auf Kontakt-Seiten
- Nach Testimonials-Sektion
- In der Topbar (sticky)
- Im Footer

### CTA-Formulierungen:
```markdown
❌ "Klicken Sie hier"
✅ "Jetzt anrufen: 07623 9995"

❌ "Mehr erfahren"
✅ "Kostenlose Beratung anfragen"

❌ "Submit"
✅ "Unverbindliches Angebot erhalten"
```

---

## 📸 Bilder & Visual Content

### Bild-Beschreibung (Alt-Text)
```markdown
![Kunststoff-Fenster mit Blick ins grüne Tal](/img/fenster-garten.jpg)

[nicht: ![image](/img/...)]
```

### Bild-Einbindung:
```markdown
# Unsere Fenster

Beschreibung

![Kunststoff-Fenster modern Wohnzimmer](/img/modern-living.jpg)

Weitere Beschreibung
```

Siehe [IMAGE_ALT_TEXT_GUIDE.md](./IMAGE_ALT_TEXT_GUIDE.md) für Details.

---

## 🗣️ Häufige Content-Fehler vermeiden

| Fehler | Richtig |
|--------|---------|
| "Fenster" als Keyword | "Kunststoff-Fenster Rheinfelden" |
| Zu technisch/kompliziert | Einfach & verständlich |
| Viel Text, wenig Struktur | Kurze Absätze, Überschriften, Listen |
| Zu viele Keywords | Natural, 3-5 pro Seite |
| Kein CTA | Immer eine Handlungsaufforderung |
| Nur Text | Text + Bilder + List + Videos wenn passend |
| Zu lang (>3000 Wörter) | 800-1500 Wörter ideal |
| Kein Bezug zu Region | "Rheinfelden, Lörrach, Bad Säckingen" erwähnen |

---

## 📝 Content Checkliste vor Veröffentlichung

- [ ] **Title/H1** — Sprechend & SEO-optimiert
- [ ] **Meta-Description** — 155-160 Zeichen, mit Keyword
- [ ] **Keywords** — 3-5 Long-Tail Keywords
- [ ] **Überschrift-Hierarchie** — H1 > H2 > H3 (keine Sprünge)
- [ ] **Absätze** — Kurz & prägnant (max 3-4 Sätze)
- [ ] **Listen** — Verwendet für Übersichtlichkeit
- [ ] **Links** — Interne Links wo relevant
- [ ] **Bilder** — Mit aussagekräftigem Alt-Text
- [ ] **CTA** — Mindestens 1x pro Seite
- [ ] **Rechtschreibung** — Deutsche Orthografie korrekt
- [ ] **Mobile-Test** — In Handy-Browser getestet
- [ ] **Ton** — Passt zu "persönlich, professionell, hilfreich"

---

## 🔄 Regelmäßige Content Updates

Mindestens halbjährlich aktualisieren:
- [ ] Kundenstimmen (neue Bewertungen hinzufügen)
- [ ] Preise/Garantien (wenn sich geändert)
- [ ] Öffnungszeiten (falls aktualisiert)
- [ ] Team-Informationen
- [ ] Dienstleistungs-Details

---

## 🌐 Local SEO Content-Tipps

Da wir eine lokale Service ist, immer diese Angaben einfügen:

### Orte & Regionen erwähnen
```
✅ "Rheinfelden, Lörrach, Bad Säckingen, Schopfheim, Basel und Dreiländereck"
❌ "Deutschland", "Baden-Württemberg" zu generisch
```

### Lokale Keywords
```
✅ "Fensterbauer Rheinfelden"
✅ "Fenster Lörrach"
✅ "Haustüren Bad Säckingen"
❌ "Fenster Deutschland"
```

### Adresse & Kontakt
```
Göc Fenster Rheinfelden
Jacob-Kaiser-Weg 3
79618 Rheinfelden
07623 9995
gocfensterbau@hotmail.de
```

[Sollte auf jeder Seite im Footer vorhanden sein]

---

## 📊 Content-Performance messen

Nach Veröffentlichung regelmäßig prüfen:

1. **Google Search Console**
   - Impressionen: Wie oft erscheint die Seite?
   - Klicks: Wie oft wird sie angeklickt?
   - Position: Bei welchen Keywords?

2. **Google Analytics 4**
   - Organic Traffic: Wie viel kommt von Google?
   - Bounce Rate: Verlassen Nutzer schnell?
   - Time on Page: Lesen Sie den Content?

3. **Ranking überprüfen**
   - SEO-Tools: SERPstat, SEMrush, Ahrefs
   - Manuell: "Fenster Rheinfelden" in Google suchen

---

## 📞 Content-Hilfe & Kontakt

Bei Fragen zum Content:
- **Telefon:** 07623 9995
- **E-Mail:** gocfensterbau@hotmail.de
- **Dokumentation:** README.md, DEPLOYMENT.md, IMAGE_ALT_TEXT_GUIDE.md

---

**Version:** 1.0  
**Zuletzt aktualisiert:** 2026-05-19

© 2026 Göc Fenster Rheinfelden
