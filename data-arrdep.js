// Arrival & Departure — NMM 10.1 Arrival and Departure Port (Rev 13, 01-Sep-2024)
// Filing/retention rows from PAM 19.6 Shipboard Filing – Bridge.
const ARRDEP = [
{ id:"prep", name:"Preparations", icon:"📝", phase:"ARRIVAL", src:"NMM 10.1",
  groups:[
    {t:"Before Anything Else", items:[
      "Obtain port information from agents as per vessel-specific work instructions.",
      "Comply with the vessel-specific checklist for certain countries — USA, Canada, Australia, China.",
      "Check and comply with relevant local regulations.",
      "Conduct passage planning, monitoring and execution as per Company procedures."]}
  ]},

{ id:"prearr", name:"Prior Arrival", icon:"⚓", phase:"ARRIVAL", src:"NMM 10.1",
  groups:[
    {t:"Checks", items:[
      "Conduct a bridge team meeting (see Voyage Execution and Monitoring).",
      "Perform pre-arrival checks per vessel-specific checklist — IN SAFE OPEN WATERS.",
      "Verify the operating condition and performance of the required machinery.",
      "Contact port authorities when within VHF range for pre-arrival information.",
      "Keep documents ready for the Master-Pilot information exchange."]},
    {t:"Defects", warn:true, items:[
      "Report any defects to the Master and record in the Deck Logbook.",
      "Inform Office and request assistance as required."]}
  ]},

{ id:"engines", name:"Engines & Standby", icon:"⚙️", phase:"ARRIVAL", src:"NMM 10.1",
  groups:[
    {t:"Testing", items:[
      "Give the required notices to prepare main engines for manoeuvring.",
      "Try out main engines AHEAD and ASTERN 12-15 NM before arrival, or in safe open waters, whichever is greater.",
      "Keep engines ready for manoeuvring (SBE) 12-15 NM before entry into restricted waters, anchorage areas or pilot boarding positions.",
      "Master reassesses the SBE position once traffic or anchored vessels appear on radar/AIS (about 24-36 NM) and per port control information.",
      "If engines are needed before the notice period, Master discusses with Chief Engineer to have them ready."]},
    {t:"When On Standby, Keep", items:[
      "Minimum TWO generators running in parallel.",
      "TWO or more steering gear units running simultaneously.",
      "Vessel on HAND STEERING — record time and location in Deck Logbook.",
      "Bridge manning at the required level (see Composition of the Bridge Team)."]},
    {t:"Caution", warn:true, items:[
      "To avoid load on engines, test astern at minimum steerage way and after RPM is zero."]}
  ]},

{ id:"steering", name:"Steering Gear Tests", icon:"🎚️", phase:"BOTH", src:"NMM 10.1",
  groups:[
    {t:"Testing", items:[
      "Test steering gear per vessel-specific checklist (CL D/02) — clear of traffic and restricted areas.",
      "Maintain records of all steering gear tests and checks including the emergency steering drill."]},
    {t:"3-Monthly Emergency Steering Drill", items:[
      "Include testing of direct control from within the steering gear compartment.",
      "Include communications with the bridge.",
      "Where applicable, include operation of alternative power supplies."]},
    {t:"US Waters — 33 CFR 164.25", warn:true, items:[
      "Within 12 HOURS prior arrival or prior getting underway: check and test steering and navigation equipment.",
      "Within 48 HOURS prior arrival: conduct emergency steering drill, if not done within the last three months."]}
  ]},

{ id:"pilotage", name:"Navigating In Port Waters", icon:"🚢", phase:"ARRIVAL", src:"NMM 10.1",
  groups:[
    {t:"Bridge", items:[
      "Master must be on the bridge in good time prior to SBE and verify vessel-specific checklists are completed.",
      "In consultation with the Pilot, determine manning of anchor stations, calling of mooring stations, and local/navigational requirements.",
      "In addition to the Master, at least one OOW remains on the bridge until the vessel is all fast and FWE.",
      "Masters are strongly encouraged to have the Chief Officer on the bridge for arrivals and departures — mentoring opportunity."]},
    {t:"Tugs & Thrusters", items:[
      "Master employs tugs in compliance with customary port regulations and as deemed necessary.",
      "Use bow thrusters to breast onto or off a berth, move the head from a jetty, or turn in limited space.",
      "Bow thruster loses effectiveness as speed increases — normally between 2 and 5 knots."]},
    {t:"Speed In Confined Waters", items:[
      "Proceed at safe speed complying with regulatory speed limits.",
      "Reduce speed gradually and in good time.",
      "Monitor speed and inform Master and Pilot of any non-compliance.",
      "Wash or wake in confined waters can damage vessels at berth, small craft and the shoreline."]},
    {t:"Caution", warn:true, items:[
      "Slow-speed manoeuvring in anchorages with strong current or wind is a HIGH-RISK operation.",
      "A 'kick ahead' with full rudder can initiate and maintain a turn at low speed — plan even short passages.",
      "When in anchoring depths, keep BOTH anchors ready for emergency use."]}
  ]},

{ id:"berthing", name:"Berthing & Unberthing", icon:"🛟", phase:"BOTH", src:"NMM 10.1 / 10.3",
  groups:[
    {t:"Unsafe Manoeuvre — Watch For", items:[
      "Non-compliance with Company or local UKC requirements.",
      "Insufficient space at berth or at the turning basin.",
      "Unfavourable weather conditions.",
      "Berth incompatible with the vessel's size.",
      "Poor visibility.",
      "Inadequacy or unavailability of tugs necessary for the berth.",
      "Inadequate or no chart coverage for the berth."]},
    {t:"Authority", warn:true, items:[
      "The Master has FULL AUTHORITY to abort an unsafe berthing or unberthing manoeuvre."]}
  ]},

{ id:"predep", name:"Prior Departure", icon:"🚀", phase:"DEPARTURE", src:"NMM 10.1",
  groups:[
    {t:"Timing", items:[
      "OOW conducts the pre-departure check 12 TO 2 HOURS prior departure — enough time to rectify anything found.",
      "Comply with the vessel-specific checklist (CL D/03)."]},
    {t:"Before Testing Main Engines, Ensure", items:[
      "OOW is on the bridge and a deck watch is monitoring gangways and moorings.",
      "Propeller is clear and mooring lines are tight, especially the SPRINGS.",
      "On tankers/gas carriers: cargo connections disconnected and clear of the vessel's rail.",
      "On other vessels: shore loaders, gantries and other berth facilities are clear.",
      "Gangway or accommodation ladder is clear."]},
    {t:"Caution", warn:true, items:[
      "Some ports (e.g. Port Hedland, Dampier) do not allow testing of main engine or operation of the propeller without Pilot on board and tugs in attendance. Check port regulations."]}
  ]},

{ id:"fullaway", name:"Full Away", icon:"🌊", phase:"DEPARTURE", src:"NMM 10.1",
  groups:[
    {t:"Commencing Sea Passage", items:[
      "Master gives 'Full Away' orders ONLY when well clear of port approaches and outer anchorages, and no further immediate manoeuvring is required.",
      "On Master's orders, increase main engine rpm to required sea speed and secure the vessel for sea."]}
  ]},

{ id:"drifting", name:"Drifting Off Port", icon:"💤", phase:"ARRIVAL", src:"NMM 10.1",
  groups:[
    {t:"When Anchoring Is Impracticable", items:[
      "Master may decide to steam or drift off port limits, keeping Office informed.",
      "Maintain position well clear of navigational hazards and traffic — especially port approaches, anchorages and pilot boarding areas.",
      "While drifting, always keep engines ready for immediate use.",
      "Maintain bridge manning level per prevailing navigational and weather circumstances.",
      "Update the AIS status accordingly."]},
    {t:"Caution", warn:true, items:[
      "A vessel drifting with engines deliberately shut down is NOT a 'vessel not under command' under COLREGs rule 3(f) — do NOT display NUC lights and shapes.",
      "Do not anchor or drift in territorial waters without permission. Some states (e.g. Indonesia, Malaysia) penalise this. Verify territorial limits on ECDIS by proper interrogation."]}
  ]},

{ id:"filing", name:"Records & Filing", icon:"🗂️", phase:"BOTH", src:"PAM 19.6 / NMM 10.1",
  groups:[
    {t:"Arrival / Departure File (3BR_03)", items:[
      "Steering Gear Checklist — D/02 — retain 1 Yr, then destroy.",
      "Pre-arrival / Pre-departure Checklist — D/03 — retain 1 Yr, then destroy.",
      "Pilot Card — D/06 — retain 1 Yr, then destroy.",
      "Master/Pilot Exchange Information — D/07 — retain 1 Yr, then destroy."]},
    {t:"Passage Planning File (3BR_02)", items:[
      "Passage Planning Checklist — D/01 — retain 1 Yr.",
      "Passage Plan — TEC-25 — retain 1 Yr."]},
    {t:"Handover File (3BR_01)", items:[
      "2nd Officer's Changeover Familiarisation with Hand Over Notes — D/35 — retain 1 Yr.",
      "Important Circulars / Notices / Instructions — retain PERMANENTLY."]},
    {t:"NMM 10.1 References", items:[
      "CL: D/0, D/03, D/27, D/40.  WI: D/113.  Training Material 34."]}
  ]}
];
