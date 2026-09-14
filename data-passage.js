// Passage Planning — TEC-25 Passage Plan workbook + NMM Ch 7 (7.2 Appraisal, 7.3 Planning,
// 7.4 UKC) + NMM 10.1. Priority: 1 = MUST (mandatory//regulatory), 2 = SHOULD, 3 = GOOD TO HAVE.
const PASSAGE = [

{ id:"pp-flow", name:"Plan At A Glance", sec:"Overview", icon:"🧾", r:"2/O", pri:1,
  groups:[
    {t:"The Four Legs — Split The Plan This Way", pri:1, items:[
      "Berth to open sea (e.g. to the pilot station).",
      "Open sea transit.",
      "Transit through restricted waters (e.g. Singapore Strait transit).",
      "Pilot station to berth."]},
    {t:"Order Of Work", pri:1, items:[
      "APPRAISAL — start on receipt of voyage orders; gather charts, publications, updates (NMM 7.2).",
      "Consult Master on preferred routes, clearances, restricted waters, concerns.",
      "Master defines the general route plan.",
      "PLANNING — berth to berth, all four legs, with markings (NMM 7.3).",
      "UKC calculation for every restricted leg (NMM 7.4 / TEC-25 UKC Proforma).",
      "Bridge Team Meeting before arrival/departure and restricted waters.",
      "Master approves and signs. Navigating Officer and Master both sign the Appraisal sheet."]},
    {t:"Forms", pri:1, items:[
      "FORM TEC-25 — Passage Plan workbook (this app mirrors its Appraisal, MWL and UKC sheets).",
      "CL D/01 — Passage Planning Checklist. Retain 1 year (PAM 19.6).",
      "Passage Plan TEC-25 — retain 1 year."]}
  ]},

{ id:"pp-arrival", name:"Arrival Port Checks", sec:"TEC-25 + NMM 10.1", icon:"⚓", r:"2/O", pri:1,
  groups:[
    {t:"Before Arrival", pri:1, items:[
      "Vessel meets Company UKC Policy for the entire voyage, using applicable relative density.",
      "UKC calculated for berth / CBM / SBM / anchorage using the UKC Proforma.",
      "CATZOC compliance check carried out for the approach.",
      "Largest scale charts published are available and corrected for the port and approaches.",
      "Pre-arrival checks completed per vessel-specific checklist, in safe open waters.",
      "Bridge team meeting held within 24 hours of arrival.",
      "Engines tried out ahead and astern 12-15 NM before arrival or in safe open waters.",
      "Steering gear tested per CL D/02, clear of traffic and restricted areas.",
      "Master/Pilot exchange documents ready (D/07); Pilot Card (D/06) prepared."]},
    {t:"Restrictions To Confirm", pri:1, items:[
      "Any draft or air draft restrictions identified.",
      "Any navigation equipment defective or limited — logged and Office informed.",
      "Ship position reporting requirements (AMVER, JASREP, AUSREP, BRAZILIAN).",
      "Navigation limitations — Load line zones, IWL.",
      "Port of refuge identified for the approach."]},
    {t:"Approach Planning", pri:2, items:[
      "Approach per sailing directions and port information recommendations.",
      "Safe speed for port approach decided — traffic, vessels at anchor, available depths.",
      "Pilot may not board at the charted boarding ground — plan for it.",
      "Plan an alternate passage to the berth.",
      "Plan for diverting to anchorage without notice or without pilot assistance.",
      "Contact port authorities when within VHF range for pre-arrival information.",
      "Verify operating condition and performance of required machinery."]},
    {t:"Environmental & Ops", pri:2, items:[
      "ECA fuel changeover and/or scrubber use planned prior arrival (C/E).",
      "Ballast water management requirement confirmed (C/O).",
      "Hold/tank washings disposal restrictions checked against MARPOL Special Areas and local rules.",
      "Bunker transfers for trim and stability planned.",
      "Sufficient provisions, water, bunkers and reserves per Company requirements."]},
    {t:"Situational", pri:3, items:[
      "Preview expected traffic using AIS tracking sites for arrival and anchorage areas.",
      "Local regulations and previous port experiences discussed at the bridge team meeting.",
      "Cross-check CRITICAL agent/shipper information (depths, berth info) against Sailing Directions and Guide to Port Entry."]}
  ]},

{ id:"pp-departure", name:"Departure Port Checks", sec:"TEC-25 + NMM 10.1", icon:"🚀", r:"2/O", pri:1,
  groups:[
    {t:"12 To 2 Hours Before Departure", pri:1, items:[
      "OOW conducts the pre-departure check 12 to 2 hours prior departure — time to rectify anything found.",
      "Comply with vessel-specific checklist (CL D/03).",
      "Departure draft forward and aft recorded; passage and arrival drafts entered.",
      "ETD in local time, after accounting for DST.",
      "Clocks change / no change in clocks confirmed for the passage."]},
    {t:"Before Testing Main Engines", pri:1, items:[
      "OOW on the bridge; deck watch monitoring gangways and moorings.",
      "Propeller clear and mooring lines tight, especially the SPRINGS.",
      "Tankers/gas carriers: cargo connections disconnected and clear of the rail.",
      "Other vessels: shore loaders, gantries and berth facilities clear.",
      "Gangway or accommodation ladder clear."]},
    {t:"Charts & Publications Current", pri:1, items:[
      "Voyage ENC/charts updated to the last weekly update received.",
      "Voyage eNPs/ASDs updated to the last weekly update received.",
      "Voyage ADP/ALLFS and ADP/ALRS updated to last weekly update.",
      "Latest T&P / AIO updates applied by manual correction AND verified in ECDIS.",
      "All ENC / ADP / eNP licences and permits valid for the voyage.",
      "NAVTEX messages received and applied; NAVAREA/EGC received and applied.",
      "Latest AVCS base and update DVD week recorded."]},
    {t:"Departure Planning", pri:2, items:[
      "Full Away given only when well clear of port approaches and outer anchorages.",
      "Weather routed — service confirmed and route received.",
      "Expected weather conditions checked (storms, freak waves, severe cold, ice edge).",
      "Any navigational information from Charterers' voyage orders reviewed."]},
    {t:"CAUTION", pri:1, warn:true, items:[
      "Some ports (Port Hedland, Dampier) do not allow main engine test or propeller operation without Pilot on board and tugs in attendance."]}
  ]},

{ id:"pp-marking", name:"Route Markings", sec:"NMM 7.3", icon:"✏️", r:"2/O", pri:1,
  groups:[
    {t:"Mark On Chart / ECDIS", pri:1, items:[
      "NO-GO AREAS — all depths less than maximum dynamic draft + minimum UKC required, plus underwater obstructions near and around the course.",
      "ABORT POINT — the final point at which the ship can still avoid passing the point of no return.",
      "POINT OF NO RETURN — after which the vessel is committed to a constrained area and cannot turn or re-trace.",
      "Position fixing / verification intervals marked per leg.",
      "Parallel index lines and clearing bearings.",
      "Wheel-over positions for each course alteration.",
      "Safety contour, safety depth and XTD/XTL set per leg."]},
    {t:"Marking Discipline", pri:1, warn:true, items:[
      "Do NOT obscure chart detail or overcrowd the working areas of the chart.",
      "Record information AWAY from the track, drawing attention toward it.",
      "On paper charts do NOT use ink to mark courses or highlight information.",
      "Erase all previous courses and unnecessary information.",
      "No-go areas vary with draft and tide — they change with the time of passage."]},
    {t:"Never Do This", pri:1, warn:true, items:[
      "Do NOT use platforms or installations as waypoints.",
      "Never direct a course line toward an installation — aim for a safe position outside the 500 m safety zone.",
      "Give platforms and installations a wide berth as far as safe to do so."]},
    {t:"Per-Waypoint Data (TEC-25 MWL Sheet)", pri:2, items:[
      "Waypoint number, latitude, longitude, course, distance, distance to go.",
      "Planned speed and expected current / tidal stream.",
      "Maximum position fixing interval for that leg.",
      "Position verification/fixing methods in order (primary-secondary-third).",
      "Bridge Watch Level (B1-B5) and Engine Room Watch Level (E1/E2/UMS).",
      "Bridge status — Normal or Red.",
      "VHF channels to monitor.",
      "NAVTEX station / NAVAREA / Wx Fax for the leg.",
      "Security level.",
      "Master's remarks — speed restrictions, high traffic, security issues, HRA transit."]},
    {t:"Contingency Marks", pri:2, items:[
      "Abort points for each leg.",
      "Alternate routes.",
      "Available anchorages and waiting areas.",
      "Emergency berths.",
      "Consider loss of propulsion or power on each leg."]}
  ]},

{ id:"pp-fixing", name:"Position Fixing Intervals", sec:"NMM 7.3", icon:"📐", r:"2/O", pri:1,
  groups:[
    {t:"Maximum Intervals (Never Exceed)", pri:1, items:[
      "OPEN WATERS — ECDIS verification 4 hours; paper chart fixing 2 hours.",
      "COASTAL WATERS — ECDIS 1 hour; paper 30 minutes.",
      "PILOTAGE, CHANNELS, FAIRWAYS, RIVERS — ECDIS 30 minutes; paper 15 minutes.",
      "Coastal = within 25 NM from nearest land, where navigational aids and terrestrial objects are available.",
      "Interval must be such that the vessel cannot run into danger between fixes."]},
    {t:"Verification Methods", pri:1, items:[
      "GLONASS or second GPS.",
      "Visual / radar observations.",
      "Parallel indexing and clearing bearings.",
      "Radar overlay — verify coastal features coincide with radar echoes.",
      "Mark the verification on the ENC at stated intervals (Entering Position, Event Mark, User Map Editor)."]},
    {t:"Paper As Backup", pri:1, items:[
      "Where ECDIS is primary and paper is backup: at the start of each watch have relevant paper charts and plotting tools ready on the chart table.",
      "Plot the vessel's position within 30 minutes of taking over the watch, and on each change of paper chart."]},
    {t:"Open Sea GNSS Accuracy", pri:2, items:[
      "Dilution of Precision (DOP) checking.",
      "Signal or Carrier to Noise Ratio (SNR / CNR).",
      "Receiver Autonomous Integrity Monitoring (RAIM)."]}
  ]},

{ id:"pp-ukc", name:"UKC Policy", sec:"NMM 7.4", icon:"📏", r:"2/O", pri:1,
  groups:[
    {t:"Minimum UKC While Underway", pri:1, items:[
      "Pilotage waters, channels, fairways, rivers — 10% of static draft.",
      "Coastal waters (transiting less than 25 NM from coastline) — 20% of static draft.",
      "Open waters (25 NM or more from coastline) — 50% of static draft.",
      "All after allowance for squat, swell, change of water density, list, heel and prevailing weather."]},
    {t:"Minimum UKC In Port & At Anchor", pri:1, items:[
      "Alongside, or engaged in mooring/unmooring — 1.5% of extreme breadth or 0.3 m, whichever is GREATER.",
      "CBM / SBM (tankers only) — not less than 20% of static draft.",
      "At anchor, unprotected waters — 20% of static draft.",
      "At anchor, protected/sheltered waters — 10% of static draft.",
      "Sheltered = shorelines not subject to direct action of undiminished ocean waves."]},
    {t:"Rules Of Application", pri:1, warn:true, items:[
      "In any doubt, comply with the HIGHER of the applicable UKC allowances.",
      "If charterers, port or canal rules are stricter, adhere to the higher allowance.",
      "VLCCs in Malacca/Singapore Straits — minimum static UKC 4.0 m at Eastern Bank, 3.5 m for the rest of the straits.",
      "Available Depth = lowest charted datum depth plus tide. Available UKC = Available Depth − Dynamic Draft.",
      "For tide-restricted passages, if the passage is delayed, UPDATE the UKC calculation for the new time."]},
    {t:"When To Inform Office", pri:1, items:[
      "Non-compliance with UKC requirements.",
      "Non-compliance after addressing CATZOC depth uncertainty.",
      "Difficulty obtaining actual or controlling depths from agents or local authorities."]},
    {t:"CATZOC Check", pri:1, items:[
      "All vessels carry out CATZOC compliance check at the passage planning stage.",
      "Zones A1, A2, B, C — compliant if available dynamic UKC exceeds the depth uncertainty.",
      "Zones D and U — compliant when UKC is greater than 50% of the ship's draft.",
      "UKC compliance is INDEPENDENT of CATZOC compliance — both must be satisfied."]},
    {t:"Variables To Allow For", pri:2, items:[
      "Sea state — swell and wave.",
      "Changes in predicted tidal height from wind and barometric pressure.",
      "Barometric pressure: allow 1 cm per 1 mb change from mean/standard pressure (take 1013 mb if unavailable). Higher pressure LOWERS the water level.",
      "Local anomalies; reduced depths over pipelines and other obstructions."]}
  ]},

{ id:"pp-watch", name:"Bridge Manning Matrix", sec:"TEC-25 WatchLevel", icon:"👥", r:"Master", pri:1,
  groups:[
    {t:"Minimum Watch Levels", pri:1, items:[
      "OPEN WATERS, daylight, clear — B1. OOW; lookout optional; E1/UMS; autopilot.",
      "OPEN WATERS, darkness, clear — B2. OOW + lookout; E1/UMS; autopilot.",
      "OPEN WATERS, restricted visibility — B3. MASTER + OOW + lookout; helm optional; E1.",
      "COASTAL, clear weather — B2. OOW + lookout; helm optional; E1/UMS.",
      "COASTAL, restricted visibility — B4. MASTER + OOW + lookout + helm; E1/E2; HAND steering.",
      "RESTRICTED WATERS, all times — B4. MASTER + OOW + lookout + helm; E1/E2; HAND steering.",
      "ENTERING/LEAVING PORT, port limits & approaches — B4. Master + OOW + lookout + helm; E2; HAND.",
      "PILOTAGE — B5. MASTER + OOW + lookout + helm + PILOT; E2; HAND steering.",
      "AT ANCHOR, day — B1. At anchor, night — B2."]},
    {t:"Rules", pri:1, warn:true, items:[
      "Bridge Watch Level 4 and 5 are RED STATE OF ALERTNESS.",
      "Master may raise watch levels as necessary.",
      "Record any change in bridge watch level in the Deck Logbook / movement logbook.",
      "B1 is permitted ONLY during daylight hours — refer Sole Lookout chapter.",
      "Non-navigational duties (escorting the pilot, admin tasks) must NOT degrade bridge levels."]},
    {t:"Engine Watch Levels", pri:2, items:[
      "E1 — EEOW + Duty Oiler.",
      "E2 (4 certified engineers) — C/E or 2/E + EEOW + EO + Duty Oiler.",
      "E2 (3 certified engineers) — C/E or 2/E + EO + Duty Oiler + additional engineer as required.",
      "Helmsperson, when not steering, performs lookout duties.",
      "At anchor, lookout duties include rounds of deck, accommodation and checking the anchor chain."]}
  ]},

{ id:"pp-appraisal", name:"Appraisal Checklist", sec:"NMM 7.2 + TEC-25", icon:"📚", r:"2/O", pri:1,
  groups:[
    {t:"Charts & Notices", pri:1, items:[
      "Navigational charts — paper / ENC / raster, appropriate scale.",
      "Routing charts, passage planning charts, load line charts.",
      "Maritime security charts; International Navigating Limits.",
      "Company circulars — regulation updates and port circulars.",
      "Notices to Mariners weekly updates; NAVAREA warnings; T&P notices.",
      "Local notices and local port information from agents.",
      "Largest scale charts published must be available, including for Ports of Refuge."]},
    {t:"Publications", pri:1, items:[
      "Ocean Passages of the World; Ship's Routeing.",
      "Sailing Directions; List of Radio Signals; List of Lights.",
      "Tide tables and tidal stream atlases; Guide to Port Entry.",
      "Port circulars and port entry guides."]},
    {t:"Passage Information (TEC-25 Section 4)", pri:1, items:[
      "Departure, passage and arrival drafts — forward and aft.",
      "ETD and ETA in local time after accounting for DST; clock changes noted.",
      "Ordered steaming condition; charter speed and estimated speed.",
      "Weather conditions expected — storms, freak waves, severe cold, ice edge.",
      "Weather routed — yes/no.",
      "Vessel meets Company UKC Policy for entire voyage.",
      "Sufficient provisions, water, bunkers and reserves.",
      "Port of refuge identified; Go-Home charts available."]},
    {t:"Special Areas To Flag", pri:2, items:[
      "High Risk Area per ITF/IBF circulars.",
      "MARPOL Special Areas, Nearest Land, PSSA, NDZ.",
      "Ban on discharge of washwater from EGCS open-loop scrubber.",
      "Great Barrier Reef, Chinese Base Line, Bohai Sea, ECA limits.",
      "Right Whale Areas, Belle Isle Strait, Polar Waters.",
      "IALA buoyage system — Region A or B.",
      "Time zones including DST for departure port, destination and transit."]},
    {t:"Additional Factors", pri:2, items:[
      "Status of machinery — limitations or defects.",
      "Anchoring and contingency options; pilotage requirements.",
      "Ship manoeuvring characteristics; availability and reliability of navigation aids.",
      "Communications including MSI and GMDSS.",
      "Security documents — SSP, BMP.",
      "Bridge manning; bunker calculations; cargo, commercial and charter considerations.",
      "Mooring and tug operations; helicopter operations; strength and stability."]},
    {t:"Sign Off", pri:3, items:[
      "Navigating Officer signs and dates the Appraisal sheet.",
      "Master signs and dates the Appraisal sheet.",
      "Master informs Office if routing differs significantly from the recommended route, or if hazards may be encountered."]}
  ]},

{ id:"pp-meeting", name:"Bridge Team Meeting", sec:"TEC-25", icon:"🗣️", r:"Master", pri:1,
  groups:[
    {t:"Hold A Meeting Within 24 Hours Of", pri:1, items:[
      "Port arrivals and departures.",
      "Prior entering restricted waters.",
      "Encountering hazards to navigation or heavy weather.",
      "Whenever Master deems necessary, and when required by Office."]},
    {t:"Who Attends", pri:1, items:[
      "All watchkeeping officers, navigation ratings and the Chief Engineer.",
      "Signed by Master, C/O, 2/O, 3/O, additional officer, C/E and nav ratings."]},
    {t:"Discuss At Least These 11 Points", pri:1, items:[
      "1. Passage plan.",
      "2. Navigational requirements — hazards, traffic, pilotage, restricted waters, tides and currents.",
      "3. Expected weather conditions and visibility.",
      "4. Watch arrangements, areas of Red Alert status, and management of fatigue.",
      "5. Status of engine room machinery and engine requirements.",
      "6. Local regulations and experiences.",
      "7. Port information and requirements.",
      "8. Contingency plans.",
      "9. MARPOL special area, ECA and PSSA.",
      "10. Any security related concerns.",
      "11. Position where to call Master, test engines and test steering."]}
  ]},

{ id:"pp-coastal", name:"Coastal & Ocean Legs", sec:"NMM 7.3", icon:"🌊", r:"2/O", pri:2,
  groups:[
    {t:"Distance Off The Coast", pri:2, items:[
      "Tankers / gas carriers — more than 50 miles, if no increase in voyage distance.",
      "Dry cargo vessels — more than 25 miles, if no increase in voyage distance.",
      "Getting close to land for position fixing is not required when GNSS is available."]},
    {t:"Coastal Planning Factors", pri:2, items:[
      "Do not go too close to land or hazards when allowing for favourable current or weather.",
      "Follow applicable rules through TSS and recommended routes.",
      "Use conspicuous lights, beacons and landmarks for position fixing.",
      "Allow sufficient margin of safety both sides of the track for manoeuvring and traffic.",
      "Plan the track to transit on the STARBOARD side of the fairway for collision avoidance."]},
    {t:"Ocean Legs", pri:2, items:[
      "Use routing charts and Ocean Passages for the World to select the optimum route.",
      "Evaluate great circle against rhumb line tracks.",
      "A great circle track tends to route into high latitudes — check forecast for bad weather, strong winds, heavy swell, poor visibility and ice.",
      "Request weather routing advice when deemed necessary."]},
    {t:"CAUTION", pri:1, warn:true, items:[
      "Maintain extra vigilance when navigating within 25 miles of the coast.",
      "In shallow water allow for increased draft due to squat and effects on steering. Squat increases with speed.",
      "Master must not compromise safety of life, vessel and environment for economic reasons.",
      "Charterers, weather routing services or any other person CANNOT force the Master onto a route the Master deems unsafe."]},
    {t:"Light Draft Transit", pri:3, items:[
      "Risk of propeller shaft bearing damage if the propeller is not fully immersed.",
      "Do not exceed speeds in the RPM/Draft table or graph; inform Office.",
      "If no RPM/Draft table available, inform Office immediately before transit and proceed at minimum safe speed.",
      "Post minimum draft for full propeller immersion and the RPM/Draft graph on Bridge and ECR."]}
  ]}
];
