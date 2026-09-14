// Second Officer — consolidated from PAM 9.4 (Job Responsibilities) and NMM 4.2
// (Navigating Officer's Responsibilities), plus routine tasks drawn from NMM Ch 13.
const DUTIES = [
{ id:"role", name:"The Role", icon:"⚓", src:"PAM 9.4.1 / NMM 4.2",
  groups:[
    {t:"General", items:[
      "Officer in charge of navigational duties, under the supervision and direction of the Master.",
      "The 2nd Officer is the designated NAVIGATING OFFICER.",
      "Keep the Master fully informed about any concerns regarding your responsibilities.",
      "Understudy the Chief Officer in all aspects, and assist specifically in: security, structural inspection, general maintenance.",
      "Must be able to handle cargo operations in the absence of the Chief Officer.",
      "Responsible to the Master for the duties in this chapter."]},
    {t:"Watches", items:[
      "Keep navigational watches as instructed by Master — generally 0000-0400 and 1200-1600.",
      "As OOW, manage the bridge team and remain accountable to the Master for safe navigation."]},
    {t:"Also Known As", items:[
      "Under the applicable CBA the rank may be called Watchkeeping Officer, Officer of the Watch (OOW), Navigation Watch Officer or Second Mate."]}
  ]},

{ id:"nav", name:"Navigation", icon:"🧭", src:"NMM 4.2",
  groups:[
    {t:"Passage Planning", items:[
      "Carry out appraisal and planning of voyages under the Master's instructions and guidance.",
      "Perform UKC calculations and assessment for the passage; discuss with Master, including any non-compliance, BEFORE the voyage commences.",
      "Advise the Master well in time about charts, ENCs and publications required for the voyage.",
      "Prepare the passage plan berth to berth."]},
    {t:"Charts & Publications", items:[
      "Update all charts, ENCs and nautical publications.",
      "Correct all voyage charts for relevant T&P corrections.",
      "Keep ADP and e-NPs updated using the prescribed instructions.",
      "Inform the Master, with reasons, when unable to correct/update charts.",
      "Maintain all other nautical publications, mandatory and recommended."]},
    {t:"Warnings & MSI", items:[
      "Set and monitor receivers capable of receiving MSI at least twice daily.",
      "Before entering a new Navarea, check the warnings in force for that area.",
      "On receiving warnings, check that all are accounted for and acted upon.",
      "Select the appropriate NAVTEX station at least 1 day prior to entering a new area."]},
    {t:"Records", items:[
      "Maintain all navigational reports and records."]}
  ]},

{ id:"equip", name:"Equipment & Spares", icon:"🔧", src:"NMM 4.2 / 13.1",
  groups:[
    {t:"Maintenance", items:[
      "Carry out planned maintenance of bridge equipment (PMS).",
      "Perform GMDSS and navigation equipment checks and tests.",
      "Comply with the vessel-specific checklist for bridge daily checks at sea (CL D-04).",
      "Daily lamp and buzzer test of the bridge console and equipment."]},
    {t:"Spares — Keep Above Minimum", items:[
      "Keep spare parts as per the list of minimum and critical spare parts.",
      "Min 2 sets chart plotting instruments (1 set if dual ECDIS).",
      "Min 1 spare window wiper of each type.",
      "Sufficient bulbs and fuses; spare paper rolls for at least 3 months.",
      "Spare echo sounder stylus (if stylus type); spare NAVTEX printer head.",
      "2/O, 3/O and C/E or E/O jointly responsible for maintaining and ordering spares."]},
    {t:"Batteries", items:[
      "Maintain a list of all equipment using batteries/UPS with expiry dates and renewal frequency; inform the Electrical Officer."]},
    {t:"KPI", warn:true, items:[
      "No overdue maintenance or testing of critical equipment in own areas of responsibility.",
      "No spares below minimum and critical spares requirement in own areas of responsibility."]}
  ]},

{ id:"medical", name:"Medical Officer", icon:"⚕️", src:"PAM 9.4.3",
  groups:[
    {t:"Duties", items:[
      "Perform duties as the designated Medical Officer on board — must hold a valid Medical Care certificate.",
      "Maintain the medical locker according to Flag state / U.K. regulations.",
      "Prepare medical requisitions as required.",
      "Provide medication and first aid, and maintain the medical log."]},
    {t:"Note", items:[
      "The Master may designate another officer as Medical Officer if the 2/O lacks a valid Medical Care certificate."]},
    {t:"KPI", warn:true, items:[
      "No lack of medicines and no expired medicines on board, as per the required scale."]}
  ]},

{ id:"cargo", name:"Cargo, Ballast & Deck", icon:"📦", src:"PAM 9.4.4",
  groups:[
    {t:"Duties", items:[
      "Assist the Chief Officer in cargo and ballast operations.",
      "Maintain port watches as decided by the Master and Chief Officer.",
      "Assist in mooring and unmooring operations.",
      "Maintain and calibrate fixed and portable gas detection equipment (as applicable).",
      "Inform about any shore servicing or calibration due for gas detection equipment.",
      "On gas carriers — assist and understudy the Gas Engineer for cargo plant operations and maintenance."]}
  ]},

{ id:"admin", name:"Administration", icon:"📋", src:"PAM 9.4.5",
  groups:[
    {t:"Monthly", items:[
      "Prepare the monthly radio traffic accounts."]},
    {t:"Inventory & Requisitions", items:[
      "Technical library and cadets' library (if applicable).",
      "All stationery on board.",
      "Catering stores.",
      "Gas detection equipment spares and calibration gas cylinders."]},
    {t:"Maintain & Update", items:[
      "Flag state circulars file.",
      "SMS manuals — assisting the Master.",
      "Safety data sheets for cargo chemicals, paints, and any other products used in deck and catering departments."]}
  ]},

{ id:"other", name:"Other Appointments", icon:"🛡️", src:"PAM 9.4.6-9.4.7",
  groups:[
    {t:"Garbage Management Compliance Officer", items:[
      "Manage garbage as per the Garbage Management Plan.",
      "Maintain the Garbage Record Books.",
      "Train vessel staff on garbage management."]},
    {t:"Cyber Security Officer (CySO)", items:[
      "In the absence of an Electrical Officer or ETO, perform the duties of designated Cyber Security Officer on board."]}
  ]},

{ id:"kpi", name:"Key Performance Goals", icon:"🎯", src:"PAM 9.4.8",
  groups:[
    {t:"In Addition To Common Goals", items:[
      "No uncorrected or outdated voyage charts and publications.",
      "No overdue maintenance or testing of critical equipment in own areas of responsibility.",
      "No lack of medicines or expired medicines on board as per the required scale.",
      "No spares below minimum and critical spares requirement in own areas of responsibility."]},
    {t:"Forms & Checklists", items:[
      "CL: D-17, D-32A, D-35, D-41.",
      "FORM: TEC-51A, MHR-07.",
      "Reference: Garbage Management Plan."]}
  ]},

{ id:"routine", name:"Routine At A Glance", icon:"🔁", src:"NMM Ch 13 consolidated",
  groups:[
    {t:"DAILY", items:[
      "GMDSS: VHF/MF/HF/DSC self-test (no radiation); batteries ON/OFF load test and full charge; console emergency lights; printers and paper.",
      "Lamp and buzzer test of bridge console and equipment.",
      "Bridge daily checks at sea per vessel checklist.",
      "NAVTEX in port: sight and manage messages at least once a day."]},
    {t:"EVERY WATCH", items:[
      "Radar: check performance monitor and RECORD the value.",
      "Speed log: record the distance log reading in the Deck Logbook.",
      "VDR: check for proper functioning.",
      "GNSS: record position hourly, on change of watch and after alteration of course.",
      "ECDIS: check display modes on taking over the watch."]},
    {t:"WEEKLY", items:[
      "GMDSS: MF/HF DSC test call on 2187.5 kHz (HF if no acknowledgement) — log both in GMDSS logbook.",
      "GMDSS: reserve source of energy (if not a battery); survival craft two-way VHF radios.",
      "Whistle: test auto fog signalling system with manoeuvring light (3/O).",
      "Sound powered telephones from all locations (E/O)."]},
    {t:"MONTHLY", items:[
      "GMDSS: EPIRB test mode, battery, HRU, stowage; SART test; battery load test; aerials and insulators; Sat-C PV test.",
      "NAVTEX: self-test.",
      "AIS: verify static data; check the pilot plug.",
      "GNSS: alternate the receiver in use and record the changeover.",
      "Course recorder (digital): take back-ups.",
      "Whistle: manual operation, wire and roller guide (3/O). Morse light check (3/O + E/O)."]},
    {t:"EVERY 3 MONTHS", items:[
      "BNWAS: function test of stage alarms, emergency call facility, main power failure alarm, backup power.",
      "Navigation light failure alarm test.",
      "Daylight signalling lamp battery function test.",
      "Manual foghorn, gong and mallet inspection (3/O). Horns check (E/O).",
      "Emergency steering drill (include direct control from steering compartment)."]},
    {t:"ANNUAL / 12 MONTHS", items:[
      "S/VDR, AIS and EPIRB annual testing within the Cargo Ship Safety Certificate survey window.",
      "GMDSS reserve battery capacity test — not at sea; enter date on front pages of GMDSS logbook.",
      "Barometer comparison with shore standard.",
      "Firmware/software version check with makers; include in Master's Review."]},
    {t:"RETAIN 7 YEARS", warn:true, items:[
      "Echo sounder printer records.",
      "Course recorder traces.",
      "Data logger printer records.",
      "Weather facsimile records.",
      "Label all of the above; retain 7 years or as instructed by Office for claims/incidents."]}
  ]}
];
