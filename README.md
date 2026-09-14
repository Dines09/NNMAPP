# 2/O Bridge Reference

Offline web app (PWA) built from the **Navigation and Mooring Manual (NMM, Rev 17)**
and the **Policy and Administration Manual (PAM, Rev 21)**.

Static reference only — no data entry, no tick boxes. Tap an item, get the checks.

## Four sections

| Tab | Source | Contents |
|---|---|---|
| **Equipment** | NMM Ch 13 | 22 bridge equipments — use, settings, markings, tests, spares, record retention |
| **Passage** | TEC-25 + NMM Ch 7 | Appraisal, route markings, position-fixing intervals, UKC policy, bridge manning matrix, bridge team meeting, arrival & departure port checks |
| **Duties** | PAM 9.4 + NMM 4.2 | Role, navigation, equipment/spares, medical, cargo, admin, KPIs, and a consolidated **Routine at a Glance** (daily / watch / weekly / monthly / 3-monthly / annual) |
| **Arr / Dep** | NMM 10.1 | Preparations, prior arrival, engines & standby, steering tests, pilotage, berthing, prior departure, full away, drifting, filing |

714 reference points in total. Every card names its manual section.

### Priority coding (Passage tab)

Each group is tagged so the important things read first:

- **MUST** — mandatory / regulatory / Company policy
- **SHOULD** — expected practice
- **GOOD** — best practice, nice to have

## Interface

- **Light and dark themes** — follows the phone's setting, with a manual toggle (◐ / ☀) that is remembered.
- **Compact clock pills** top-right: UTC and local time, no date, no seconds.
- **Floating dock** at the bottom with a gliding pill that slides to the active tab.

## Clocks

- Two compact pills in the top-right: **UTC** and **local time** (hh:mm, no date).
- Tap the local pill to change zone.
- Search **418 IANA zones** by country, city or **port name** — "fujairah", "rotterdam",
  "port hedland", "santos" all resolve. Each row shows its live time and UTC offset.
- Choice is remembered between sessions; DST and half-hour zones (+5:30, +5:45, +12:45)
  are handled by the browser's own time-zone database, so it stays correct offline.

## Running it

Open `index.html` — it works straight from the file system.

To install on iPhone: serve the folder over HTTPS (e.g. GitHub Pages), open in Safari,
then **Share → Add to Home Screen**. The service worker caches everything on first load,
so it runs with no network afterwards.

Local test server:

```
python -m http.server 8000
```

## Files

```
index.html          shell + clock pills + floating dock
styles.css          light/dark themes, iPhone safe-area aware
app.js              rendering, accordions, zone picker, clocks
data-equipment.js   NMM Ch 13 — 22 equipments
data-passage.js     TEC-25 + NMM Ch 7 — passage planning
data-duties.js      PAM 9.4 / NMM 4.2 — 2/O duties
data-arrdep.js      NMM 10.1 — arrival & departure
data-zones.js       418 time zones with port aliases (generated)
sw.js               offline cache — bump CACHE after editing any file
manifest.json       PWA metadata
```

## Editing content

All content is plain JavaScript arrays. Each card:

```js
{ id:"echo", name:"Echo Sounder", sec:"13.6", icon:"📡", r:"2/O",
  groups:[
    { t:"Switch On / Use", pri:1, items:[ "…", "…" ] },  // pri: 1=MUST 2=SHOULD 3=GOOD
    { t:"Caution", warn:true, items:[ "…" ] }            // warn:true = amber styling
  ]}
```

Add or reword items freely; the first group starts expanded. **After any edit, bump
`CACHE` in `sw.js`** (e.g. `oo-bridge-v2`) or phones will keep serving the old copy.

## Note on sources

Passage planning content is compiled from the **TEC-25 Passage Plan workbook** (Appraisal,
Bridge Team Meeting, WatchLevel and UKC Proforma sheets) together with **NMM 7.2 Appraisal**,
**7.3 Planning** and **7.4 Underkeel Clearance**. The source workbook and the manuals are
**not** included in this repository.

Bridge equipment is **NMM Chapter 13** ("Navigation Equipment – Use and Limitations").
NMM Chapter 8 is "Voyage Execution and Monitoring". The 2/O job responsibilities are
**PAM 9.4**. The 7-year record retention for echo sounder, course recorder, data logger
and weather fax records is stated in NMM Ch 13 itself; PAM 19.6 carries the 1-year
bridge-file retention for checklists.

Content is a condensed reference. Always verify against the current manual revision and
your vessel-specific checklists.
