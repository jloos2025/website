export const comfortClub = {
  standardPrice: 99,
  benefits: [
    { title: 'Priority Service', body: 'Comfort Club members receive priority scheduling and service over non-members, subject to technician availability, emergencies, weather, and existing commitments.' },
    { title: '10% Off Service & Repairs', body: 'Active members receive 10% off qualifying HVAC service and repair work.', note: 'The discount does not apply to maintenance-plan pricing, previously completed work, equipment replacement, or other discounts and offers unless Loos & Sons specifically approves stacking.' },
    { title: '$500 Equipment Replacement Benefit', body: 'After 12 consecutive months of active Comfort Club membership, members receive $500 off one qualifying new piece of HVAC equipment installed by Loos & Sons HVAC.', note: 'Membership must be active and in good standing. The benefit cannot be redeemed for cash, applied retroactively, or stacked with another equipment-replacement discount unless Loos & Sons HVAC approves it.' },
  ],
  pricing: [
    { title: 'Standard residential equipment', price: '$99', unit: 'per unit, per visit', items: ['Furnace', 'Air conditioner', 'Heat pump', 'Boiler', 'Air handler'] },
    { title: 'Mini-splits', price: '$99', unit: 'up to 3 indoor heads plus 1 outdoor unit, per visit', items: ['Each indoor head over 3: +$30 per head, per visit', '4 heads plus outdoor unit: $129', '5 heads plus outdoor unit: $159'] },
    { title: 'Geothermal', price: '$198', unit: 'geothermal plus separate air handler, per visit', items: ['Combination or packaged geothermal: $149 per visit'] },
    { title: 'Swamp coolers', price: '$249', unit: 'startup', items: ['Shutdown: $249'] },
    { title: 'Commercial', price: '$249', unit: 'standard equipment, per piece, per visit', items: ['RTU Comfort Club maintenance: $199 per rooftop unit, per visit'] },
  ],
  inspections: [
    { name: 'Furnace', price: '$99 per furnace, per visit', groups: [
      { title: 'Performance & Airflow', items: ['Airflow testing', 'Temperature rise', 'Ductwork sizing compatibility'] },
      { title: 'Burners & Flame Sensor', items: ['Burner cleanliness and condition', 'Flame sensor cleaning', 'Flame sensor testing'] },
      { title: 'Blower & Induced Draft Motors', items: ['Cleanliness and condition', 'Amp draw', 'Capacitor testing, when applicable'] },
      { title: 'Venting, Condensate & Coil', items: ['Inspect accessible exhaust and venting for leaks, improper connections, deterioration, or visible safety concerns', 'Condensate drain cleaning and operation', 'Accessible evaporator coil inspection for buildup, debris, or airflow restrictions'] },
      { title: 'Surge Protection', items: ['Check whether a surge protector is installed', 'Visually inspect accessible device and status', 'Record installed Yes or No and recommendation needed Yes or No'] },
    ] },
    { name: 'Air Conditioning', price: '$99 per A/C system, per visit', groups: [
      { title: 'Indoor', items: ['Airflow testing and temperature drop or Delta T', 'Overall system and blower cleanliness', 'Blower motor amp draw and capacitor testing', 'Accessible evaporator coil cleanliness'] },
      { title: 'Outdoor', items: ['Unit cleanliness and condition', 'Contactor inspection', 'Compressor operation and amp draw', 'Outdoor capacitor testing', 'Standard spray-off or wash of the accessible outdoor coil and unit'] },
      { title: 'Surge Protection', items: ['Check accessible surge protection device and status', 'Record installed Yes or No and recommendation needed Yes or No'] },
    ], note: 'If proper outdoor cleaning requires partial or full disassembly, additional charges apply based on difficulty, accessibility, condition, buildup, equipment design, and labor. Full condenser disassembly is not included in the $99 maintenance.' },
    { name: 'Heat Pump', price: '$99 per heat pump, per visit', groups: [
      { title: 'Heating & Cooling', items: ['Test heating and cooling modes when operating conditions allow', 'Temperature rise in heating and temperature drop in cooling', 'Indoor airflow evaluation', 'Indoor air coil and blower cleanliness'] },
      { title: 'Motors & Outdoor Unit', items: ['Blower motor amp draw and capacitor testing when applicable', 'Outdoor unit cleanliness', 'Compressor and outdoor fan operation and amp draw'] },
      { title: 'Electrical & Protection', items: ['Inspect electrical components and connections', 'Tighten applicable accessible connections as needed', 'Contactor inspection and capacitor testing', 'Surge protector check'] },
    ], note: 'A standard accessible outdoor unit and coil wash is included. Disassembly is not included and is charged separately when needed based on difficulty and labor.' },
    { name: 'Mini-Split', price: '$99 up to 3 indoor heads plus 1 outdoor unit, per visit. Each head over 3 is +$30.', groups: [
      { title: 'Indoor Units', items: ['Clean washable filters', 'Check indoor Delta T', 'Inspect electrical connections and condensate drain', 'Clean accessible drains during cooling inspection only', 'Inspect indoor unit cleanliness'] },
      { title: 'Outdoor Unit', items: ['Compressor and outdoor fan amp draw', 'Wash or spray off outdoor unit', 'Record refrigerant-line temperatures', 'Inspect electrical connections', 'Check surge protection status'] },
    ], note: 'Evaporator-coil and blower-wheel deep cleaning are not included. Additional pricing depends on the number of heads, accessibility, equipment design, buildup, disassembly, and labor.' },
    { name: 'Water-to-Air Geothermal', price: 'Pricing depends on system configuration', groups: [
      { title: 'Air Side', items: ['Blower wheel and air coil cleanliness', 'Air-side Delta T and airflow evaluation', 'Blower motor amp draw and capacitor testing when applicable'] },
      { title: 'Compressor & Electrical', items: ['Capacitor testing', 'Compressor operation and amp draw', 'Inspect electrical connections and tighten applicable accessible connections', 'Check for overheating, deterioration, loose connections, or arcing concerns'] },
      { title: 'Source Side & Ground Loop', items: ['Ground-loop Delta P and Delta T', 'Ground-loop pump amp draw and pressure', 'Flow-center and pump inspection'] },
      { title: 'Surge Protection', items: ['Check whether a surge protector is installed', 'Record status'] },
    ], note: 'Pressure checking is included. Adding water is $248.62 per loop and requires customer authorization. Repeated low pressure, diagnostics, and repairs are quoted separately.' },
    { name: 'Water-to-Water Geothermal', price: 'Pricing depends on system configuration', groups: [
      { title: 'Ground Loop & Flow Center', items: ['Flow center and ground-loop pump inspection', 'Pump amp draw and ground-loop flow', 'Entering and leaving temperature and Delta T'] },
      { title: 'System & Load Side', items: ['System-side circulation pumps and amp draw', 'System flow evaluation', 'Supply and return-water temperatures and differential'] },
      { title: 'Desuperheater & Compressor', items: ['Inspect desuperheater pump and amp draw when equipped', 'Verify operation when conditions allow', 'Compressor operation and amp draw'] },
      { title: 'Electrical, Protection & General', items: ['Inspect accessible components and connections', 'Tighten applicable accessible connections', 'Capacitor testing and contactor or relay inspection', 'Record surge protector status and recommendation', 'Overall condition, visible leak inspection, and final operation review'] },
    ], note: 'Repairs, replacement components, deep cleaning, flushing, water treatment, ground-loop repairs, pump replacement, and corrective work are quoted separately.' },
  ],
  includedCleaning: ['Routine inspection', 'Light cleaning where specifically listed', 'Flame sensor cleaning', 'Accessible condensate drain cleaning where listed', 'Mini-split washable filter cleaning', 'Standard outdoor A/C, heat-pump, and mini-split coil spray-off or wash'],
  extraWork: ['Deep cleaning', 'Major disassembly', 'Blower-wheel removal', 'Evaporator-coil deep cleaning', 'Outdoor-unit disassembly', 'Refrigerant corrections', 'Repairs and replacement parts', 'System flushing and water treatment'],
  deepCleaning: ['Blower wheel deep cleaning starts at $400 for applicable standard systems.', 'Accessible evaporator coil deep cleaning starts at $500 for applicable standard systems.'],
} as const;
