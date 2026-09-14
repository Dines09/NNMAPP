// NMM Chapter 13 - Navigation Equipment: Use and Limitations
// Source: Navigation and Mooring Manual, Rev 17, 01-Aug-2026
// Each equipment: what to check, when, and any record/retention rule.
const EQUIPMENT = [
{ id:"general", name:"General Guidelines", sec:"13.1", icon:"⚙️", r:"2/O",
  groups:[
    {t:"Daily", items:[
      "Lamp and buzzer test of bridge console and all equipment — 2/O, daily.",
      "Bridge daily checks at sea as per vessel-specific checklist (CL D-04)."]},
    {t:"Every 12 Months", items:[
      "Check with makers that latest firmware/software version is in use; include in Master's Review.",
      "Annual testing of S/VDR, AIS, EPIRB by authorised personnel — within window of Cargo Ship Safety Certificate survey, no later than date of completion of previous survey. Keep test report on board."]},
    {t:"Spares To Keep", items:[
      "Min 2 sets chart plotting instruments (parallel rulers, dividers). Dual-ECDIS vessels: 1 set only.",
      "Min 1 spare window wiper of each type.",
      "Sufficient spare bulbs and fuses for the equipment.",
      "Spare paper rolls to last at least 3 months.",
      "Critical spare parts list must include bridge equipment spares.",
      "Responsible for maintaining/ordering spares: 2/O, 3/O and C/E or E/O."]},
    {t:"Alarm Rules", items:[
      "Equipment/Power failure alarms: Master or OOW must NOT override, mute, adjust or alter.",
      "Setting alarms (ECDIS safety contour, Radar CPA/TCPA, GNSS HDOP, Echo sounder shallow, Off-course, BNWAS): OOW needs Master's permission before overriding/muting/altering — limited period only.",
      "Record in logbook: time, reasons, and re-setting back to normal.",
      "All bridge team must know the adjustment and status of the alarm.",
      "Never leave alarms muted or disabled. Watch for alarm fatigue and alarm normalisation."]},
    {t:"Records", items:[
      "Maintenance records must be part of PMS.",
      "Write ACTUAL observed parameters in PMS — never 'Satisfactory' or 'Voltages checked'.",
      "Keep service reports for Navigation and Radio equipment filed for ready reference.",
      "Maintain list of all equipment on batteries/UPS with expiry dates and renewal frequency (2/O); inform E/O.",
      "Post list of nav equipment on emergency power and emergency batteries."]}
  ]},

{ id:"echo", name:"Echo Sounder", sec:"13.6", icon:"📡", r:"2/O",
  groups:[
    {t:"Switch On / Use", items:[
      "Switch ON and monitor depths when crossing the 100 m contour or making landfall.",
      "Keep running in coastal and pilotage waters, and wherever deemed necessary (e.g. unreliable charted depths).",
      "At anchor and alongside — monitor UKC at frequent intervals.",
      "Check performance on ALL ranges and scales; compare soundings against charted depths allowing for tidal height.",
      "Check errors against hand lead line sounding when in port. Maintain records of such comparisons."]},
    {t:"Alarm Settings", items:[
      "Select the same unit of sounding as on the chart in use.",
      "Alarm must warn of shallow water well before running into danger.",
      "Do NOT set shallow water alarm less than expected UKC for the transducer in use. Expected UKC is not the same as Minimum Required UKC."]},
    {t:"Markings On Printer Chart", items:[
      "Date and time of switching on the echo sounder.",
      "Date and time of passing significant land or seamarks.",
      "Transducer in use, if more than one fitted."]},
    {t:"Records — Retain 7 Years", items:[
      "Label printer records and retain 7 YEARS (or as instructed by Office for claims/incidents).",
      "Deck Logbook: the above markings, where there is no printer feed.",
      "Deck Logbook: records of soundings when in depths less than 50 m."]},
    {t:"Maintenance & Spares", items:[
      "2/O must maintain the echo sounder.",
      "If recorder uses a stylus — keep a spare stylus on board."]},
    {t:"Caution", warn:true, items:[
      "UKC shown depends on transducer in use and may not be actual UKC — caution when not on even keel.",
      "On vessels with fwd and aft transducers, OOW must know which is in use."]}
  ]},

{ id:"radar", name:"Radar & ARPA", sec:"13.4", icon:"📶", r:"2/O (PMS) / OOW",
  groups:[
    {t:"Use", items:[
      "Keep at least 1 radar running at all times while underway or at anchor.",
      "Use 2 or more radars: sunset to sunrise; within range of land; heavy traffic; restricted visibility, heavy weather, ice; whenever OOW deems fit.",
      "X-band: high discrimination, better tracking, good sensitivity. S-band: better penetration in heavy rain, fog, sea clutter.",
      "OOW must know function of the inter-switching unit, if provided."]},
    {t:"Range Scales", items:[
      "Approaching port or straits — 3-6 NM.",
      "Coastal navigation — 6-12 NM.",
      "Open water — 12-24 NM.",
      "If two radars in use: set one long range, one short. Switch frequently between long and short."]},
    {t:"Settings To Check", items:[
      "Correct data input from gyro, GNSS/GPS and speed log.",
      "Tuning adequate and in AUTO mode.",
      "Optimum gain, sea and rain clutter — show some clutter, mainly to windward. Do not use AUTO clutter for long stretches.",
      "Pulse length changes automatically with range scale; in manual, select optimum.",
      "North-Up in Relative Motion preferred. ALWAYS sea-stabilised for collision avoidance — do not use SOG for anti-collision.",
      "Heading marker aligned with gyro and fore-and-aft line.",
      "Vectors/trails consistent with range: for 12 NM range, 12 min vector and 6 min trail recommended.",
      "Audible alarm volume at appropriate level and not muted."]},
    {t:"Post Beside The Radar", items:[
      "Blind and shadow sector diagram.",
      "PM values obtained after changing the magnetron or an overhaul.",
      "Company QA Poster — Radar-ARPA Setup Guidance (QA-49)."]},
    {t:"Performance Monitor — Every Watch", items:[
      "OOW must check radar performance and RECORD the value once every watch using the performance monitor, if fitted.",
      "Compare with initial readings for maker's tolerance; if outside, inform Office.",
      "Maintain the radar log in the Deck Logbook."]},
    {t:"Targets & Alarms", items:[
      "Set CPA/TCPA alarm limits per Company requirements (see Collision Avoidance chapter and safety card SC-05).",
      "Set Bow Crossing Range (BCR) alarm, where fitted, same or higher than set CPA limits.",
      "Treat targets with CPA less than 1 NM with extreme caution.",
      "Do not cancel CPA/TCPA alarm without investigating the cause.",
      "On target association, set priority for RADAR targets."]},
    {t:"Maintenance", items:[
      "Tests and maintenance as per vessel's PMS in line with maker's guidelines.",
      "Record the running hours of the magnetron and check for deterioration.",
      "Before any magnetron replacement: obtain Office approval and conduct a risk assessment. RA NAV 030."]}
  ]},

{ id:"ecdis", name:"ECDIS", sec:"13.2", icon:"🗺️", r:"2/O",
  groups:[
    {t:"Carriage & Training", items:[
      "IMO type-approved ECDIS with official vector charts (ENCs).",
      "Generic training must be on the same make and model as installed on board.",
      "Company structured 'ECDIS – Onboard Training Program' available in the Training Manual."]},
    {t:"Safety Settings", items:[
      "Where ECDIS has both Safety Frame and Safety Sector, apply the same values to both.",
      "To avoid excessive alerts in narrow channels, the Safety Frame/Sector length may be reduced.",
      "Manual table values are MINIMUM settings — Master may increase based on circumstances.",
      "For tide-restricted areas, subtract the minimum height of tide required for safe passage.",
      "Where ECDIS limitations prevent these minimum values, set to the nearest possible value."]},
    {t:"Watch Handover", items:[
      "OOW must check the display modes each time when taking over the watch."]},
    {t:"Note", items:[
      "Full section is NMM 13.2 (pp. 157-176) — the longest equipment section in the manual. Refer to it for Auto Track Control (ATC), route check and chart update detail."]}
  ]},

{ id:"gnss", name:"GNSS / GPS", sec:"13.3", icon:"🛰️", r:"2/O",
  groups:[
    {t:"Use", items:[
      "All vessels must have 2 working GNSS receivers, preferably 1 with DGPS capability.",
      "Every MONTH alternate the GNSS in use, keeping a record of changeovers.",
      "Post antenna offset data near each receiver; verify it is correctly entered in the configuration.",
      "Post the inter-switch instructions for switching output from one receiver to another.",
      "OOW to verify GNSS positions by alternative methods where possible."]},
    {t:"Quality & Alarms", items:[
      "HDOP — lower is more accurate. SET THE ALARM to 4 or less.",
      "RAIM: detects failed satellites and deselects them; configure per maker's manual.",
      "SBAS: keep this function ENABLED.",
      "A difference between expected and observed COG/SOG may indicate GNSS failure."]},
    {t:"Datum", items:[
      "Keep GNSS referenced to WGS-84 datum.",
      "If chart datum is not WGS-84, manually apply datum shift corrections to GNSS positions.",
      "Caution with large-scale port plans that may carry no datum information."]},
    {t:"GNSS Log", items:[
      "Record GNSS positions in Deck Logbook EVERY HOUR, on change of watch, and after alteration of course."]},
    {t:"Jamming & Spoofing", warn:true, items:[
      "Jamming causes the receiver to die; spoofing causes the receiver to lie.",
      "Spoofing is harder to detect — it feeds fake position and speed into both primary and secondary ECDIS.",
      "Spoofed data may create false echoes or 'ghost targets' on AIS, unsupported by radar or visual.",
      "Monitor navigational warnings for signal disruptions; practise dead-reckoning during ECDIS failure drills.",
      "On loss of signal the set may default to Dead Reckoning — post a caution note next to the receiver."]},
    {t:"Maintenance", items:["2/O maintains the equipment per maker's instructions. Emergency checklist: CL EMRG/13."]}
  ]},

{ id:"compass", name:"Compass & Steering", sec:"13.5", icon:"🧭", r:"2/O",
  groups:[
    {t:"Autopilot", items:[
      "All officers must know autopilot operation: rudder control, counter-rudder, permanent helm/leeway settings.",
      "Use the course recorder trace to verify the best autopilot settings.",
      "Use the off-course alarm — in fair weather set to 5 DEGREES.",
      "Provide an independent off-course alarm: magnetic off-course alarm, transmitting magnetic compass with heading comparison unit, or second gyro with heading comparison unit.",
      "Set the independent/heading monitor alarm a little HIGHER than the autopilot off-course alarm."]},
    {t:"Maintenance", items:[
      "2/O must perform the checks and tests on the bridge steering system. Checklist CL D/02, WI D/108."]},
    {t:"Track Control", items:[
      "When track monitoring is used, OOW must ensure the autopilot is performing track keeping.",
      "Preferably alter course AFTER disabling the track keeping function."]},
    {t:"Caution", warn:true, items:[
      "The off-course alarm does not relieve OOW from frequently checking the course being steered.",
      "Bridge team must know immediate actions for steering failure per ship-specific emergency checklist."]}
  ]},

{ id:"bnwas", name:"BNWAS", sec:"13.8", icon:"⏰", r:"2/O",
  groups:[
    {t:"Mode Of Operation", items:[
      "Manual ON — at all times, except alongside, in dry dock or at a repair facility.",
      "Manual OFF — when alongside, in dry dock or at a repair facility.",
      "AUTO MODE — DO NOT USE.",
      "Master activates/deactivates and records ON and OFF timings in the Deck Logbook.",
      "Master retains control of the equipment key/password — OOW must not be able to switch off or change settings."]},
    {t:"Settings", items:[
      "Dormant period must be set between 3 and 12 MINUTES, at Master's discretion.",
      "Post equipment-specific alarm criteria close to the BNWAS console.",
      "The means of resetting must be physically located only in lookout areas of the bridge.",
      "Where Auto mode exists, post notice: 'DO NOT USE THE BNWAS IN AUTO MODE'."]},
    {t:"Every 3 Months — Function Test", items:[
      "Function test of the different stage alarms.",
      "Emergency call facility, if provided.",
      "Main power failure alarm.",
      "Operation on backup power."]},
    {t:"Alarm Response", warn:true, items:[
      "Stage 2 remote alarm — back-up officer(s) and/or Master must immediately go to the bridge.",
      "Stage 3 remote alarm — any crew member hearing it must immediately go to the bridge; call Master if not already there.",
      "BNWAS powered from main supply; malfunction indication and emergency call facility from a battery-maintained supply."]}
  ]},

{ id:"ais", name:"AIS", sec:"13.9", icon:"📍", r:"2/O",
  groups:[
    {t:"Use", items:[
      "Always keep AIS in operation while underway or at anchor. In port, operate per port requirement.",
      "Reduce to LOW POWER (1 W): when bunkering; and on tankers/gas carriers during loading, discharging, gas freeing, purging and bunkering.",
      "On any AIS failure: enter in Deck Logbook, report to Office, notify Flag. Keep a record of all such notifications.",
      "Switch off only where local regulations require or where it compromises safety/security — record times and reasons, inform Office."]},
    {t:"Monthly Checks", items:[
      "Verify accuracy of STATIC data once per voyage or per month, whichever is less.",
      "Keep voyage-related data updated; use UN/LOCODE for port names.",
      "Check the Pilot Plug monthly for proper condition and connections."]},
    {t:"Annual", items:[
      "Annual testing of AIS — see General Guidelines (13.1), within the Cargo Ship Safety Certificate survey window."]},
    {t:"Messages", items:[
      "Monitor and maintain a record of short safety related messages received and transmitted."]},
    {t:"AtoN Types", items:[
      "Physical AIS AtoN — signal transmitted from an actual navigation mark.",
      "Synthetic AIS AtoN — signal transmitted from a base station for an actual mark.",
      "Virtual AIS AtoN — signal for an aid that does not physically exist; used for temporary marking of a hazard.",
      "AIS-SART shows as a circle with an X (newer displays) or a normal AIS triangle (older). Identity format 970xxyyyy."]},
    {t:"Limitations", warn:true, items:[
      "Some vessels may have AIS switched off; small craft, fishing boats and warships may not be fitted.",
      "Accuracy depends on data transmitted by the other station; poorly calibrated sensors send wrong information.",
      "No provision in COLREGs for use of AIS — decide primarily on visual and/or radar information.",
      "Automatic polling by another station can cause own equipment to transmit at high power even when set to low."]}
  ]},

{ id:"gmdss", name:"GMDSS Equipment", sec:"13.10", icon:"🆘", r:"2/O",
  groups:[
    {t:"DAILY Tests", items:[
      "VHF, MF, HF, DSC — self-test WITHOUT radiation of signals.",
      "Batteries — ON/OFF load test, and bring up to full charge.",
      "Emergency lights on the GMDSS console and equipment illumination.",
      "Printer(s) and paper.",
      "In heavy traffic, 3/O assists — but never neglect lookout and navigational duties."]},
    {t:"WEEKLY Tests", items:[
      "MF/HF DSC test call within MF range of a coast station — mandatorily on 2187.5 kHz.",
      "If no acknowledgement, test on HF (4207.5 / 6312 / 12577 / 16804.5 kHz) and log BOTH tests in the GMDSS logbook.",
      "Where HF is marked 'Provided' in Form R (item 1.3), test on the HF frequencies mandatorily.",
      "Reserve source of energy, when it is not a battery (e.g. a motor generator).",
      "Each survival-craft two-way VHF radio, on a frequency other than Ch 16. Keep primary lithium batteries near the radios; check battery seal integrity.",
      "Inspect clothing attachment clips, wrist/neck straps and the weak link."]},
    {t:"MONTHLY Tests", items:[
      "EPIRB on Test mode plus its battery, HRU and stowage fittings. If it transmits a burst on 121.5 MHz, test in the FIRST 5 MINUTES of the hour.",
      "SART — in-built test facility and X-band radar, in no-traffic conditions, incl. battery and stowage fittings.",
      "Load testing of batteries and live test on battery power; inspect general condition and connections.",
      "Check emergency source of power for all GMDSS equipment.",
      "Inspect and clean aerials and insulators.",
      "Sat-C — Performance Verification (PV) test and live telex to another Sat-C or email to office/vessel.",
      "E/O: check and record specific gravity of lead acid batteries monthly."]},
    {t:"EVERY 12 MONTHS", items:[
      "Battery capacity test at intervals not exceeding 12 months, when the vessel is NOT at sea — fully discharge and recharge at normal operating current/period (e.g. 10 hours) in port or at anchorage.",
      "Enter the date of test on the front pages of the current GMDSS logbook."]},
    {t:"Post Near The Equipment", items:[
      "Ship-specific operating procedures (work instructions).",
      "Vessel's call sign, MMSI number and Designated Emergency Communication Officer.",
      "Poster: GMDSS Operating Guidance for Masters of Ships in Distress Situations.",
      "Poster: Cancellation of false alerts.",
      "Copy of vessel Radio Licence from flag, and the shore-based maintenance certificate."]},
    {t:"Records", items:[
      "GMDSS logbook maintained by all officers.",
      "PAM 19.6 filing: Weekly / Monthly / Yearly check records — retain 1 Yr, then destroy.",
      "Checklists D/03, D/04. WI D/105. RA NAV 027."]}
  ]},

{ id:"navtex", name:"NAVTEX", sec:"13.11", icon:"📨", r:"2/O",
  groups:[
    {t:"Use", items:[
      "Keep NAVTEX ON at all times, except when the vessel is laid up for repairs.",
      "If no printer, check the message memory on the dedicated display or integrated navigation system.",
      "IN PORT — sight and manage messages at least ONCE A DAY; bring relevant warnings to Master's notice.",
      "Meteorological forecast messages must NEVER be deselected.",
      "Auto station selection mode is encouraged where available."]},
    {t:"Monthly", items:[
      "2/O must carry out the monthly SELF-TESTS."]},
    {t:"Printer & Spares", items:[
      "If the printout is not legible, check the printer head and replace if required.",
      "Keep a SPARE PRINTER HEAD on board."]},
    {t:"Caution", warn:true, items:[
      "Countries without a NAVTEX network (e.g. Australia, New Zealand, Brazil) — configure Sat-C for coastal MSI. See ALRS Vol 5.",
      "In auto mode you may receive messages outside your area of interest — manage so own-vessel messages are not missed."]}
  ]},

{ id:"vhf", name:"VHF Receivers", sec:"13.12", icon:"📻", r:"2/O",
  groups:[
    {t:"Use", items:[
      "At sea or anchorage maintain a listening watch on VHF Ch 16 and other local channels as required.",
      "Use Ch 16 for distress, urgency and safety only. For ship-to-ship, establish on 16 then switch to a working channel.",
      "Avoid personal communication on watch; restrict communication to short periods.",
      "Use phonetic expression of letters/figures and Standard Marine Communication Phrases (SMCP).",
      "Record important VHF communications with shore authorities, agents or other vessels in the Deck Logbook."]},
    {t:"Identify & Mark", items:[
      "Identify and MARK any VHF receiver not connected to the VDR — do not use it for critical communications.",
      "During critical operations, disable automatic channel switching to Ch 16; re-enable immediately on completion."]},
    {t:"Maintenance", items:["2/O must maintain the VHF as per maker's instructions."]}
  ]},

{ id:"vdr", name:"VDR / S-VDR", sec:"13.13", icon:"💾", r:"2/O / Master",
  groups:[
    {t:"Use", items:[
      "Always keep the VDR ON, except during annual survey.",
      "Check the S/VDR prior departure and EACH WATCH for proper functioning; attend alarms immediately.",
      "In port, regularly check that the alarm triggers when a connected equipment is switched off.",
      "Data retention varies from 12 hours to 30 days depending on year of installation.",
      "All officers must know how to save, download and play back the data."]},
    {t:"When To Save / Back Up", items:[
      "Any extraordinary navigational or maritime occurrence, incident or near miss.",
      "Abandonment of the vessel, if time and circumstances permit without risk to life.",
      "When Master deems the information would aid an incident investigation.",
      "For any unannounced remote navigational audits or assessments.",
      "When instructed by the Office.",
      "Back up from sufficiently before the event until the situation is under control; take successive backups if the system only allows limited periods."]},
    {t:"Testing", items:[
      "Test per maker's instruction after ANY upgrade, maintenance or repair of the VDR itself OR of any equipment feeding it data.",
      "Annual testing — see General Guidelines (13.1)."]},
    {t:"Post & Handle", items:[
      "Post a vessel-specific work instruction for data recovery adjacent to the S/VDR (WI D/114).",
      "Do not release backed-up information to anyone without the Company's proper advice and authorisation.",
      "RA NAV 040."]}
  ]},

{ id:"speedlog", name:"Speed & Distance Log", sec:"13.14", icon:"🚀", r:"E/O or C/E",
  groups:[
    {t:"Types", items:[
      "Electromagnetic (EM) log — speed through water.",
      "Doppler log — speed through water and over ground when the seabed is within 200 m.",
      "Satellite log — SOG and distance via GPS compass sensor.",
      "Single axis (fore-and-aft) or twin axis (fore-and-aft plus athwartships)."]},
    {t:"Use", items:[
      "Keep the speed/distance log ON whenever practical.",
      "AT THE END OF EACH WATCH record the distance log reading in the Deck Logbook and monitor for errors.",
      "Cross-check anomalies by comparing distance travelled with GNSS data.",
      "Frequently check the speed/distance input to ARPA and other navigation equipment during the watch.",
      "If the sensitive element extends below the keel, the duty officer must know the extension length; inform engine room in good time before very shallow areas."]},
    {t:"Rule Of Thumb", warn:true, items:[
      "Use SPEED THROUGH WATER for radar collision avoidance; SPEED OVER GROUND for navigation.",
      "Caution with EM log in strong tides/currents — speeds may be inaccurate."]},
    {t:"Maintenance", items:["Electrical Officer / Chief Engineer are responsible for maintenance."]}
  ]},

{ id:"courserec", name:"Course Recorder", sec:"13.15", icon:"📈", r:"2/O",
  groups:[
    {t:"Use", items:[
      "Keep the course recorder ON at all times while the vessel is underway or at anchor."]},
    {t:"Setting", items:[
      "Set the clock on the course recorder to UTC.",
      "Check heading and time are set correctly — pay particular attention to the QUADRANT when checking heading.",
      "Ensure the trace is legible."]},
    {t:"Mark The Trace", items:[
      "Each NOON.",
      "Prior ARRIVAL and DEPARTURE.",
      "At Finished With Engines (FWE)."]},
    {t:"Records — Retain 7 Years", items:[
      "Label the records and retain 7 YEARS (or as instructed by Office for claims/incidents).",
      "For DIGITAL course recorders — take back-ups MONTHLY, or per maker's instructions, whichever is earlier."]},
    {t:"Maintenance", items:[
      "2/O must check and clean the pens on ink-type recorders and maintain the equipment."]}
  ]},

{ id:"wxrecv", name:"Weather Receiving", sec:"13.16", icon:"🌦️", r:"2/O",
  groups:[
    {t:"Systems", items:[
      "Weather facsimile, EGC, NAVTEX, office reports, coast radio stations (VHF/MF/HF), private providers (FOS, SPOS, StormGeo, AWT).",
      "Office/provider information does NOT substitute reports via EGC and NAVTEX."]},
    {t:"Every 6 Hours — Monitor", items:[
      "Surface analysis at synoptic hours.",
      "Surface forecasts for 12, 24, 48, 72 and 96 hours.",
      "Wave height forecast for 24, 48, 72 and 96 hours.",
      "Sea state analysis.",
      "Storm warnings, when required.",
      "Monitor reports at least TWICE A DAY. Seek office assistance if unable to receive."]},
    {t:"Records — Retain 7 Years", items:[
      "Label weather facsimile records, if fitted, and retain 7 YEARS or as instructed by Office."]},
    {t:"Maintenance", items:["2/O must maintain the weather facsimile and/or equivalent digital programme. QA Poster 18."]}
  ]},

{ id:"wxmon", name:"Weather Monitoring", sec:"13.17", icon:"🌡️", r:"3/O",
  groups:[
    {t:"Barometer", items:[
      "Take the reading with bridge wing doors OPEN.",
      "Height correction: ADD 1 mb for every 10 metres of height above sea level.",
      "Index correction: instrument error — changes over time, requires comparison with a shore barometer.",
      "Compare ship's barometer with the nearest shore observatory standard ANNUALLY or more often as required.",
      "Master can request assistance from local agents and/or the Port Meteorological Officer (PMO)."]},
    {t:"Dry & Wet Bulb Thermometer", items:[
      "Keep clean and easily readable inside the Stevenson's screen.",
      "Regularly clean the lint of the wet bulb and maintain the water level in the pot."]},
    {t:"Anemometer", items:["Check condition of the anemometer vanes and its fitting."]},
    {t:"Maintenance", items:["3rd Officer must maintain the weather monitoring systems."]}
  ]},

{ id:"datalogger", name:"Data Logger", sec:"13.18", icon:"🖨️", r:"E/O",
  groups:[
    {t:"Use", items:["Keep the data logger ON at all times."]},
    {t:"Records — Retain 7 Years", items:[
      "Label printer records and retain 7 YEARS or as instructed by Office for claims/incidents.",
      "A separate log of engine movements is NOT required if the data logger is fitted and operational."]},
    {t:"Maintenance", items:["Electrical Officer maintains the data logger per manufacturer's instruction."]}
  ]},

{ id:"lrit", name:"LRIT", sec:"13.19", icon:"🌐", r:"2/O / Master",
  groups:[
    {t:"Requirements", items:[
      "Transmit identity, date, time and position at least once every 360 MINUTES (6 hours).",
      "Governments may receive information on vessels within 1000 NM off their coast."]},
    {t:"Use", items:[
      "Keep LRIT ON at all times.",
      "All officers must know the location and functions of the LRIT equipment.",
      "Maintain a record of the LRIT Conformance Test Report with correct information.",
      "Inform Office to issue a new certificate on change of registry or replacement of equipment."]},
    {t:"Switching Off", warn:true, items:[
      "Only if permitted by flag state — in exceptional circumstances, shortest duration, where operation would compromise safety/security.",
      "In dry dock, in port or laid up long-term: Master may reduce to one transmission per 24 hours or temporarily stop.",
      "Enter in the OFFICIAL Logbook the time and date of switching off and of restarting transmission.",
      "Notify local Port State Authorities and confirm receipt of flag state permission.",
      "Failure of LRIT reporting is a non-compliance with SOLAS statutory requirements."]}
  ]},

{ id:"comms", name:"Onboard Communication", sec:"13.20", icon:"📞", r:"3/O",
  groups:[
    {t:"Walkie-Talkies", items:[
      "Maintain a minimum of 8 WORKING walkie-talkies for routine communications.",
      "Do not use emergency channels or designated port operational channels for shipboard operations.",
      "Do not use GMDSS VHF portable radios for routine communication.",
      "On tankers and gas tankers use only INTRINSICALLY SAFE sets; change batteries in a NON-HAZARDOUS area.",
      "Label and distribute each radio with its charger. Charge only when fully discharged; do not use until fully recharged.",
      "Use manufacturer approved covers. Lithium-ion batteries/devices must be UL or equivalent certified.",
      "3/O must maintain the walkie-talkies."]},
    {t:"PA & Talkback", items:[
      "Staff must know use and operation of the PA and talkback system.",
      "Check talkback per arrival/departure checklist; keep rigged at fore and aft stations prior arrival/departure.",
      "Where available near emergency muster stations, test during drills. 3/O maintains."]},
    {t:"Sound Reception System", items:[
      "Keep ON at all times at sea or anchorage, correctly adjusted to hear all audible sounds. 3/O maintains."]},
    {t:"Telephones", items:[
      "E/O must WEEKLY test sound powered telephones and accessories (head sets) from ALL locations.",
      "Auto telephone system maintained as per PMS."]},
    {t:"Caution", warn:true, items:[
      "Lithium-ion battery cells may undergo thermal runaway — a reaction that can ignite and explode."]}
  ]},

{ id:"lights", name:"Nav Lights & Signals", sec:"13.7", icon:"🚦", r:"3/O + E/O",
  groups:[
    {t:"Navigation Lights", items:[
      "Keep primary AND secondary systems in working order.",
      "Light fittings and mounting brackets in good condition; lenses clear and free of paint.",
      "Watertight integrity of lights and electrical fittings.",
      "Side light inboard screens fitted correctly and painted MATT BLACK.",
      "Stern light and mast light displaying the required arc.",
      "Portable navigation lights in good order with lanyards to permit hoisting.",
      "E/O is responsible for bulb replacement and physical/electrical maintenance."]},
    {t:"Every 3 Months", items:[
      "Test individual navigation light failure alarm per vessel-specific work instruction.",
      "Function test of the daylight signalling lamp batteries.",
      "Inspect manual foghorn, gong and mallet (3/O).",
      "Check the horns (E/O)."]},
    {t:"Spares", items:[
      "Spare lamps sufficient for 6 MONTHS, meeting maker's spec for size, luminosity/wattage and focal plane.",
      "Minimum 3 spare lamps with the daylight signalling lamp.",
      "Sufficient spare bulbs for the Morse signalling light."]},
    {t:"Whistle", items:[
      "WEEKLY (circumstances permitting) — 3/O tests auto fog signalling system with manoeuvring light.",
      "MONTHLY — 3/O tries out manual operation and inspects the wire and roller guide assembly.",
      "Overhaul: air horn at 60 MONTHS, piston horn at 24 MONTHS (E/O)."]},
    {t:"Shapes", items:[
      "3/O inspects and maintains shapes per PMS: 3 BALLS, 1 CYLINDER, 1 DIAMOND.",
      "Immediately available to OOW; all bridge team must know their location.",
      "For NUC display keep 2 black balls attached with a line NOT LESS THAN 1.5 m."]},
    {t:"Morse Light", items:[
      "MONTHLY — 3/O with E/O checks functioning of the Morse signalling light."]},
    {t:"Caution", warn:true, items:[
      "LED luminous intensity decreases with time and may fall below COLREGs levels — use only where the maker gives usable lifespan and intensity. Keep records of in-use and replacement due dates.",
      "Painting lenses to meet a local requirement causes non-compliance with COLREGs.",
      "Daylight signalling lamp must not depend solely on main/emergency power — portable battery max 7.5 kg, min 2 hours capacity."]}
  ]},

{ id:"binos", name:"Binoculars & Sextants", sec:"13.21", icon:"🔭", r:"3/O",
  groups:[
    {t:"Binoculars", items:[
      "Vessel must have AT LEAST THREE binoculars in good condition.",
      "Maintain night vision binoculars, where available, per maker's requirements."]},
    {t:"Sextants", items:[
      "Proper handling and maintenance is important; officers must know the errors of the sextant.",
      "Master must encourage officers to practise celestial observations frequently.",
      "If the vessel has no sextant, discuss with the Vessel Manager for supply."]},
    {t:"Maintenance", items:["3rd Officer must maintain the binoculars and sextants."]}
  ]},

{ id:"flags", name:"Flags", sec:"13.22", icon:"🚩", r:"3/O",
  groups:[
    {t:"Where To Display", items:[
      "National ensign — stern flagstaff.",
      "Courtesy flag — outer STARBOARD yardarm of signal mast; displayed in territorial waters of the port.",
      "Company flag — outer PORT yardarm of signal mast.",
      "Code flag — inner starboard and port yardarm."]},
    {t:"Maintenance", items:[
      "3/O maintains the inventory of flags, checks condition, and ensures courtesy flags for the voyage are available.",
      "Raise requisitions in a timely manner. REPLACE torn or frayed flags."]},
    {t:"Caution", warn:true, items:[
      "Strictly comply with local regulations for quarantine and courtesy flags; check special requirements with agents.",
      "Some countries (e.g. Saudi Arabia) require the courtesy flag at the foremast day AND night.",
      "If a courtesy flag is unavailable, request agents to deliver it by pilot boat."]}
  ]}
];
