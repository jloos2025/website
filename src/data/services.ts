// Content for each service page. One page per service is what local search
// rewards; each needs its own H1, real explanation, and FAQs.
export type ServicePage = {
  slug: string;
  h1: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  signs: { heading: string; items: string[] };
  process: { heading: string; steps: { title: string; body: string }[] };
  faqs: { q: string; a: string }[];
  gallery: string[];
  // Optional standalone notice rendered directly under the intro, for terms a
  // customer must see before booking rather than find later.
  notice?: { heading: string; body: string };
};

export const servicePages: ServicePage[] = [
  {
    slug: 'ac-repair',
    h1: 'AC Repair in Longmont, Colorado',
    title: 'AC Repair in Longmont, CO | Same-Day Air Conditioning Service',
    description:
      'Air conditioning repair in Longmont and across the Front Range. We find the fault, quote the price before we start, and get the cool air back on. Call (303) 536-8922.',
    eyebrow: 'Air conditioning repair',
    intro:
      'When the air conditioning quits in the middle of a Front Range summer, the house heats up fast. We troubleshoot the whole system, not just the part that failed, so you are not calling us back about the same problem in two weeks.',
    signs: {
      heading: 'Call us when you notice any of this',
      items: [
        'The air coming out of the vents is warm or barely moving',
        'The outdoor unit hums but the fan does not spin',
        'The system runs constantly and never reaches the thermostat setting',
        'Ice on the refrigerant lines or the indoor coil',
        'Water pooling around the indoor unit or a full condensate pan',
        'A breaker that trips every time the air conditioning starts',
      ],
    },
    process: {
      heading: 'How an AC repair visit goes',
      steps: [
        {
          title: 'You tell us what it is doing',
          body: 'On the phone we ask a few questions about the symptoms and the age of the system. Sometimes we can tell you a fix to try yourself before we drive out.',
        },
        {
          title: 'We diagnose the whole system',
          body: 'We check refrigerant charge, electrical components, the blower, the coil, and the drain. A capacitor is a common failure, but we make sure it is the cause and not a symptom.',
        },
        {
          title: 'You get the price before we start',
          body: 'We explain what failed, what it takes to fix it, and what it costs. You approve the price before any work begins.',
        },
        {
          title: 'We fix it and test it',
          body: 'We complete the repair, run the system, and confirm it is cooling correctly and draining properly before we pack up.',
        },
      ],
    },
    faqs: [
      {
        q: 'How fast can you get here?',
        a: 'Most repair calls in Longmont and the surrounding towns get a same-day or next-day visit, depending on how the schedule looks when you call. Call the shop and we will tell you honestly when we can be there.',
      },
      {
        q: 'Should I repair my air conditioner or replace it?',
        a: 'It depends on the age of the system, the cost of the repair, and whether the compressor is involved. We give you both numbers and the honest tradeoff, then you decide. We do not push a replacement on a system that has good years left.',
      },
      {
        q: 'My AC is frozen. What do I do right now?',
        a: 'Turn the cooling off at the thermostat and set the fan to on. That lets the ice melt off the coil. Then check whether your air filter is dirty, because restricted airflow is the most common cause. If it freezes again after that, call us.',
      },
      {
        q: 'Do you work on any brand?',
        a: 'Yes. We service and repair every major brand of residential air conditioning, including systems we did not install.',
      },
    ],
    gallery: ['ac-install-new-condenser', 'ac-condenser-green-home', 'ac-condenser-blue-home'],
  },
  {
    slug: 'ac-installation',
    h1: 'Air Conditioning Installation in Longmont, Colorado',
    title: 'AC Installation in Longmont, CO | New Air Conditioning Systems',
    description:
      'New air conditioning installation in Longmont, Colorado. Right-sized systems, clean installs, and a written price before the work starts. Call (303) 536-8922.',
    eyebrow: 'Air conditioning installation',
    intro:
      'Most of the comfort problems people blame on their equipment come from a system that was never sized for the house. We measure first, install it clean, and walk you through what we did. A correctly sized system cycles less and keeps the temperature even from room to room.',
    signs: {
      heading: 'Signs it is time for a new system',
      items: [
        'The system is fifteen years or older and needs regular repairs',
        'The compressor has failed',
        'Repair costs are climbing toward the cost of a replacement',
        'The system uses R-22 refrigerant, which is no longer produced',
        'Some rooms never get cool no matter what the thermostat says',
        'Cooling bills keep rising while comfort keeps dropping',
      ],
    },
    process: {
      heading: 'How an installation goes',
      steps: [
        {
          title: 'We look at the house, not a chart',
          body: 'We measure and account for square footage, windows, insulation, ductwork, and how your home actually gets used. Oversized equipment short cycles and leaves the house clammy.',
        },
        {
          title: 'You get options and a written price',
          body: 'We show you what fits your house and your budget, and we put the price in writing before anything is ordered.',
        },
        {
          title: 'We install it clean',
          body: 'Level pad, tidy line set, proper electrical disconnect, and a correct refrigerant charge. Look at our gallery and you can see the standard we hold.',
        },
        {
          title: 'We start it up and walk you through it',
          body: 'We test the system, confirm the airflow and temperature split, and register the warranty. Then we show you how to run it.',
        },
      ],
    },
    faqs: [
      {
        q: 'How long does an install take?',
        a: 'Most residential air conditioning replacements are finished in one day. A more involved job, like adding a system where there was none, can run into a second day.',
      },
      {
        q: 'What size air conditioner do I need?',
        a: 'That depends on your specific house. Bigger is not better with air conditioning. An oversized unit cools the air fast, shuts off before it removes humidity, and leaves the house cold and damp. We size it properly and explain the number we land on.',
      },
      {
        q: 'Can you add air conditioning if I only have a furnace?',
        a: 'Usually yes. If you have existing ductwork we can add a condenser and an indoor coil. If you have no ductwork at all, a ductless mini-split system is often the better answer.',
      },
      {
        q: 'Do new systems come with a warranty?',
        a: 'Yes. New equipment carries a manufacturer warranty, and we register it for you at install. We will explain exactly what the warranty covers before you buy.',
      },
    ],
    gallery: ['ac-condenser-landscaped', 'ac-condenser-beige-home', 'ac-two-condensers'],
  },
  {
    slug: 'furnace-repair',
    h1: 'Furnace Repair in Longmont, Colorado',
    title: 'Furnace Repair in Longmont, CO | No Heat? Call Now',
    description:
      'Furnace repair in Longmont, Colorado. No heat is an emergency in a Colorado winter. We carry common parts on the truck so most repairs finish in one visit. Call (303) 536-8922.',
    eyebrow: 'Furnace repair',
    intro:
      'No heat in a Colorado January is not something that waits until next week. We stock the parts that fail most often right on the truck, which means most furnace repairs get finished on the first visit instead of after a parts order.',
    signs: {
      heading: 'Call us when you notice any of this',
      items: [
        'The furnace blows cold air, or blows nothing at all',
        'It starts, runs briefly, then shuts off again and again',
        'Banging, screeching, or rumbling when it fires',
        'The blower runs constantly and never shuts off',
        'A burning smell that does not clear after the first burn of the season',
        'Your carbon monoxide alarm has gone off, which means leave the house and call from outside',
      ],
    },
    process: {
      heading: 'How a furnace repair visit goes',
      steps: [
        {
          title: 'We ask the right questions on the phone',
          body: 'Sometimes it is a tripped breaker, a switch, or a thermostat setting. We will tell you what to check before we charge you for a visit.',
        },
        {
          title: 'We find the actual cause',
          body: 'We check the ignition system, flame sensor, gas valve, blower, limit switches, and venting. A furnace that shuts off early usually has an airflow or safety problem, not a broken burner.',
        },
        {
          title: 'You approve the price first',
          body: 'We explain what failed and what the repair costs before the work starts, and the invoice matches that number.',
        },
        {
          title: 'We repair and verify it is safe',
          body: 'We complete the repair, cycle the furnace, and confirm safe combustion and proper venting before we leave.',
        },
      ],
    },
    faqs: [
      {
        q: 'My furnace will not turn on at all. What should I check first?',
        a: 'Check that the thermostat is set to heat and the temperature is above the room reading, that the furnace switch on the wall or unit is on, that the breaker has not tripped, and that the furnace door panel is fully seated. A loose door panel presses a safety switch and stops the furnace from running.',
      },
      {
        q: 'Why does my furnace keep shutting off before the house warms up?',
        a: 'That pattern is called short cycling. The most common causes are a dirty filter choking airflow, a dirty flame sensor, or a blocked exhaust. Replace the filter first. If it continues, the furnace is protecting itself and needs a technician.',
      },
      {
        q: 'Is it worth repairing an old furnace?',
        a: 'If the heat exchanger is cracked, the answer is replace, because that is a safety issue. Otherwise it comes down to age and repair cost. We give you the numbers and the honest recommendation and let you decide.',
      },
      {
        q: 'Do you handle emergency no-heat calls?',
        a: 'Yes. Call the shop and tell us you have no heat. See our emergency page for what to do while you wait.',
      },
    ],
    gallery: ['furnace-new-install', 'furnace-basement-install', 'furnace-and-water-heater'],
  },
  {
    slug: 'furnace-installation',
    h1: 'Furnace Installation and Replacement in Longmont, Colorado',
    title: 'Furnace Installation in Longmont, CO | New Furnace Replacement',
    description:
      'New furnace installation and replacement in Longmont, Colorado. Properly sized equipment, clean installs, straight advice on repair versus replace. Call (303) 536-8922.',
    eyebrow: 'Furnace installation',
    intro:
      'A furnace is a fifteen to twenty year decision, so it is worth getting right. We size the equipment for your house, install it to code, and tell you honestly when your current furnace still has life left in it.',
    signs: {
      heading: 'Signs it is time to replace',
      items: [
        'The furnace is fifteen years or older',
        'A cracked heat exchanger, which is a safety issue and not a repair',
        'Repair bills that keep stacking up season after season',
        'Rooms that never get warm while others cook',
        'Rising gas bills with no change in how you run the heat',
        'The furnace is loud enough that you hear it in every room',
      ],
    },
    process: {
      heading: 'How a furnace installation goes',
      steps: [
        {
          title: 'We measure your house',
          body: 'Square footage, insulation, windows, and duct layout all change the answer. We size the furnace to the load, not to whatever was there before.',
        },
        {
          title: 'You see the options and the price in writing',
          body: 'Efficiency ratings and staging matter less than most sales pitches suggest, and we will tell you which parts apply to your house. You get the number before you commit.',
        },
        {
          title: 'We remove the old unit and install the new one',
          body: 'New furnace, correct venting, proper gas and electrical connections, and sheet metal that fits. We protect your floors and clean up the work area.',
        },
        {
          title: 'We start it up and hand it over',
          body: 'We test the full heat cycle, verify safe combustion, set up the thermostat, register the warranty, and show you how to maintain it.',
        },
      ],
    },
    faqs: [
      {
        q: 'How long does a furnace replacement take?',
        a: 'Most straight replacements are done in one day. If the venting or ductwork needs rework, it can take longer, and we will tell you that up front rather than discovering it mid-install.',
      },
      {
        q: 'What efficiency furnace should I buy in Colorado?',
        a: 'Higher efficiency equipment costs more up front and saves on gas over time. Given how long the heating season runs here, the higher efficiency option usually pays back, but it depends on your home and how long you plan to stay. We will walk you through the math for your house.',
      },
      {
        q: 'Can I replace just the furnace and keep my air conditioner?',
        a: 'Often yes. If your air conditioner is in good shape we can replace only the furnace. We will check that the indoor coil and the blower are a good match for the equipment you are keeping.',
      },
      {
        q: 'Do you handle the permit?',
        a: 'Yes. Furnace replacements require a permit and inspection, and we take care of that as part of the job.',
      },
    ],
    gallery: ['furnace-insulated-space', 'furnace-install-tech', 'furnace-bosch-pair'],
  },
  {
    slug: 'heat-pumps',
    h1: 'Heat Pump Installation and Repair in Longmont, Colorado',
    title: 'Heat Pump Installation & Repair in Longmont, CO | Mini-Splits',
    description:
      'Heat pump and ductless mini-split installation and repair in Longmont, Colorado. Cold climate systems that heat and cool from one unit. Call (303) 536-8922.',
    eyebrow: 'Heat pumps and mini-splits',
    intro:
      'A heat pump moves heat instead of burning fuel to make it, so one system handles both heating and cooling. The cold climate models made in the last few years hold their capacity far below freezing, which is what makes them work here and not just in mild states. We are NATE certified in heat pump installation and an Xcel Energy rebate partner, so ask what the rebate takes off the price before you decide.',
    signs: {
      heading: 'A heat pump is worth looking at when',
      items: [
        'You have a room or an addition with no ductwork running to it',
        'You heat with electric baseboard and the bills are punishing',
        'You want air conditioning in a house that has never had it',
        'Your furnace and your AC are both near the end of their lives',
        'You have a garage, shop, or finished basement that stays uncomfortable',
        'You want to cut how much gas the house burns',
      ],
    },
    process: {
      heading: 'How we approach a heat pump job',
      steps: [
        {
          title: 'We figure out what the house needs',
          body: 'A single ductless head handles one room. A multi-zone system covers several. A ducted heat pump can replace a furnace and air conditioner together. The right answer depends on your layout and where the discomfort actually is.',
        },
        {
          title: 'We size for a Colorado winter',
          body: 'This is where heat pump installs go wrong. A unit sized for cooling load alone will disappoint you in January. We size for the heating design temperature and tell you honestly whether you want backup heat.',
        },
        {
          title: 'The install is most of the quality',
          body: 'Line sets pulled tight and covered, a proper vacuum on the refrigerant lines, level pads, and mounts that keep the outdoor unit above the snow. Our gallery shows what we hand back.',
        },
        {
          title: 'We commission it and show you the controls',
          body: 'We verify the charge, run it in both heating and cooling, and walk you through the remote or thermostat so it does not get left on one setting forever.',
        },
      ],
    },
    faqs: [
      {
        q: 'Do heat pumps actually work in Colorado winters?',
        a: 'Cold climate models do. They keep useful capacity well below zero, which covers the large majority of our heating hours. What matters is that the system is sized for the heating load and that you have a plan for the coldest handful of nights, either backup heat or an existing furnace.',
      },
      {
        q: 'What is the difference between a mini-split and a heat pump?',
        a: 'A ductless mini-split is a heat pump. The name just describes how it delivers the air, through wall or ceiling heads instead of ductwork. A ducted heat pump uses the duct system you already have.',
      },
      {
        q: 'Can I keep my furnace and add a heat pump?',
        a: 'Yes, and that pairing is called a dual fuel or hybrid system. The heat pump handles most of the season at lower cost and the furnace takes over when it gets truly cold. For a lot of Front Range homes it is the most practical setup.',
      },
      {
        q: 'Are there rebates on heat pumps?',
        a: 'Yes, and this is worth asking about before you buy anything. We are an Xcel Energy rebate partner, so we handle the paperwork and we make sure the equipment we quote actually qualifies. Rebate amounts change, so we will tell you what is available when you call rather than quote a number that has since expired. Federal and state incentives have also been available in recent years and can sometimes stack.',
      },
    ],
    gallery: ['minisplit-outdoor-twin-fan', 'minisplit-living-room', 'minisplit-outdoor-pair'],
  },
  {
    slug: 'boilers',
    h1: 'Boiler Repair and Installation in Longmont, Colorado',
    title: 'Boiler Repair & Installation in Longmont, CO | Hot Water Boilers',
    description:
      'Boiler repair, replacement, and installation in Longmont, Colorado. Hot water boilers, combi units, and the near-boiler piping done right. Call (303) 536-8922.',
    eyebrow: 'Boilers',
    intro:
      'Boilers are their own trade inside this trade, and plenty of heating companies will not touch them. We repair and replace hot water boilers and combi units, and we redo the near-boiler piping when the last installer got it wrong.',
    signs: {
      heading: 'Call us when you notice any of this',
      items: [
        'Radiators or baseboard staying cold while the boiler runs',
        'The boiler short cycles, firing and shutting off over and over',
        'Pressure that climbs too high or drops and needs constant refilling',
        'Water on the floor around the boiler or the expansion tank',
        'Banging or knocking in the pipes when a zone calls for heat',
        'A boiler over twenty years old with rising repair costs',
      ],
    },
    process: {
      heading: 'How a boiler job goes',
      steps: [
        {
          title: 'We read the whole system, not just the boiler',
          body: 'Most boiler complaints trace back to circulation, air in the loops, a failed zone valve, or an expansion tank that lost its charge. Replacing the boiler without fixing those buys you the same problem with a newer label.',
        },
        {
          title: 'We tell you if a repair is the better buy',
          body: 'A boiler that has been maintained can run a long time. If a control or a circulator is the failure, that is a repair, and we will say so.',
        },
        {
          title: 'The near-boiler piping gets done properly',
          body: 'This is where boiler installs live or die. Correct primary and secondary piping, real air elimination, and an expansion tank sized for the system. It is the part you can see in a photo and the part that decides whether the system is quiet.',
        },
        {
          title: 'We purge, balance, and verify every zone',
          body: 'Air comes out, each zone gets checked for heat, and we set the controls before we leave.',
        },
      ],
    },
    faqs: [
      {
        q: 'How long does a boiler last?',
        a: 'A cast iron boiler that has been maintained often runs twenty to thirty years. Modern high efficiency condensing boilers generally run shorter, closer to fifteen to twenty, and they are more sensitive to water quality and to being piped correctly.',
      },
      {
        q: 'Why are some of my radiators cold?',
        a: 'Usually air trapped in the loop, a zone valve that failed, or a circulator that is not moving water. It is rarely the boiler itself, which is why we look at the distribution side first.',
      },
      {
        q: 'What is a combi boiler?',
        a: 'A combi unit provides both your space heating and your domestic hot water from one wall mounted appliance, so there is no separate water heater tank. They save space and work well for the right household, though a large family drawing several showers at once may be better served by a separate tank.',
      },
      {
        q: 'My boiler pressure keeps dropping. Is that serious?',
        a: 'It means water is leaving the system somewhere, which is worth finding rather than topping off every few weeks. It can be a relief valve, a leaking fitting, or a failed expansion tank. Call us before it becomes a floor problem.',
      },
    ],
    gallery: ['boiler-combi-copper', 'boiler-basement-copper', 'boiler-room-expansion-tank'],
  },
  {
    slug: 'radiant-heating',
    h1: 'Radiant Floor and Hydronic Heating in Longmont, Colorado',
    title: 'Radiant Floor & Hydronic Heating in Longmont, CO | Zones and Manifolds',
    description:
      'In-floor radiant heat, baseboard, and zoned hydronic systems in Longmont, Colorado. New manifolds, zone repairs, and system rework. Call (303) 536-8922.',
    eyebrow: 'Radiant and hydronic heat',
    intro:
      'Hydronic heat moves warmth through water instead of blowing air around, which is why a radiant floor feels different from a furnace. When it is built right it is the most comfortable heat there is. When it is built wrong you get cold zones and a system nobody wants to touch.',
    signs: {
      heading: 'What we work on',
      items: [
        'In-floor radiant heat, including slab and staple up',
        'Hot water baseboard and radiators',
        'Zone manifolds, actuators, and thermostats that stopped controlling anything',
        'Circulators, mixing valves, and air elimination',
        'Snowmelt loops for drives and walks',
        'Systems a previous contractor left half finished',
      ],
    },
    process: {
      heading: 'How we handle a hydronic system',
      steps: [
        {
          title: 'We map the zones',
          body: 'Before touching anything we find out what each loop is supposed to heat, because the labels are often wrong or missing. This alone solves a surprising number of complaints.',
        },
        {
          title: 'We find why a zone went cold',
          body: 'Air in the loop, a stuck actuator, a failed circulator, or water temperature set too low for the floor covering. Each has a different fix and only one of them is expensive.',
        },
        {
          title: 'We build manifolds that can be serviced',
          body: 'Labeled loops, isolation valves, balancing, and room to get a wrench in. The next person to work on it should be able to read it, even if that person is not us.',
        },
        {
          title: 'We balance the system',
          body: 'Radiant is a slow, steady heat, and it only feels right when the loops are balanced and the water temperature suits the floor. We set it and explain how to run it.',
        },
      ],
    },
    faqs: [
      {
        q: 'Why is one room on my radiant floor always cold?',
        a: 'Most often that loop has air in it or its actuator is not opening. Both are ordinary repairs. Occasionally the loop was run too long during construction, which limits how much heat it can deliver, and that is a harder conversation.',
      },
      {
        q: 'Can I add radiant heat to an existing house?',
        a: 'Sometimes. A basement slab, an addition, or a bathroom is usually workable. Retrofitting an entire finished house is a large project, and we will tell you plainly when a different approach makes more sense for the money.',
      },
      {
        q: 'Is radiant floor heat expensive to run?',
        a: 'It runs at lower water temperatures than baseboard, which suits a condensing boiler and helps efficiency. Comfort at a lower thermostat setting is part of the appeal, since warm floors make a room feel warmer than the air temperature suggests.',
      },
      {
        q: 'Do you work on snowmelt systems?',
        a: 'Yes. They are hydronic loops with their own controls and sensors, and they need proper glycol protection. We service them and we install them.',
      },
    ],
    gallery: ['radiant-manifold-long', 'radiant-manifold-zones', 'boiler-circulator'],
  },
  {
    slug: 'geothermal',
    h1: 'Geothermal Heating and Cooling in Longmont, Colorado',
    title: 'Geothermal Heat Pump Service in Longmont, CO | Ground Source Systems',
    description:
      'Geothermal heat pump service, repair, and installation in Longmont, Colorado. Ground source systems, flow centers, and loop work. Call (303) 536-8922.',
    eyebrow: 'Geothermal',
    intro:
      'A geothermal system pulls heat from the ground instead of the outdoor air, which is why it holds its efficiency on the coldest night of the year. The systems are excellent and the equipment is uncommon, so most homeowners with one struggle to find anybody willing to work on it. We work on them.',
    signs: {
      heading: 'What we do with ground source systems',
      items: [
        'Diagnose and repair geothermal heat pumps',
        'Service flow centers, loop pumps, and pressure problems',
        'Track down loop flow issues and air in the ground loop',
        'Replace failed circulators and controls',
        'Annual maintenance for ground source equipment',
        'Replace aging units while keeping the existing ground loop',
      ],
    },
    process: {
      heading: 'How a geothermal call goes',
      steps: [
        {
          title: 'We separate the loop from the equipment',
          body: 'A geothermal system has two halves: the heat pump inside and the loop in the ground. Most problems are on the inside half, and knowing which side is failing saves you from an unnecessary excavation conversation.',
        },
        {
          title: 'We check flow before we check refrigerant',
          body: 'Poor loop flow looks like a dozen other faults. We check the flow center, the circulators, and the loop pressure first, because a pump or a slug of air explains most of what people assume is a dead compressor.',
        },
        {
          title: 'You get the price and the reasoning',
          body: 'These systems are unfamiliar to most homeowners, so we explain what failed and why in terms you can repeat to somebody else. Then you approve the price.',
        },
        {
          title: 'We verify performance in the mode you need',
          body: 'We run the system and confirm it is actually moving heat, in heating or cooling depending on the season, before we call it fixed.',
        },
      ],
    },
    faqs: [
      {
        q: 'My geothermal system was installed years ago and nobody will service it. Can you help?',
        a: 'That is a common call for us. The ground loop typically outlives several generations of equipment, so an old system is usually worth servicing rather than abandoning. Call the shop and tell us what brand is on the cabinet.',
      },
      {
        q: 'How long does a ground loop last?',
        a: 'The buried loop is the durable part of the system and is generally expected to last for decades, far longer than the heat pump connected to it. That is why replacing the indoor unit while keeping the existing loop is often the sensible move.',
      },
      {
        q: 'Is geothermal worth it in Colorado?',
        a: 'The efficiency case is strongest where winters are long, which describes it here. The tradeoff is the up front cost of putting loops in the ground. If the loop already exists on your property, the math changes completely in geothermal favor.',
      },
      {
        q: 'Do you install new geothermal systems, or only service them?',
        a: 'Call the shop and tell us about your property and what you are trying to do. New ground loop work involves drilling or excavation partners, and we will be straight with you about scope before anyone commits.',
      },
    ],
    gallery: ['geothermal-heat-pump-unit', 'geothermal-flow-center', 'geothermal-loop-pumps'],
  },
  {
    slug: 'swamp-coolers',
    h1: 'Swamp Cooler Start-Up and Shutdown in Longmont, Colorado',
    title: 'Swamp Cooler Service in Longmont, CO | Start-Up and Shutdown',
    description:
      'Evaporative cooler start-up, shutdown, and service in Longmont, Colorado. We will work on them, but we do not recommend them and we carry no liability for water damage. Call (303) 536-8922.',
    eyebrow: 'Swamp coolers',
    notice: {
      heading: 'Please read: no liability for water damage',
      body: 'Loos & Sons HVAC LLC does not recommend swamp coolers and accepts no liability whatsoever for flooding or water damage arising from a swamp cooler, including damage caused by equipment failure. This applies to any unit we start up, shut down, service, or repair. Booking swamp cooler work means accepting this condition.',
    },
    intro:
      'We service evaporative coolers, and we do the seasonal start-up in spring and the shutdown in fall. We are also going to be straight with you about them, because you deserve to hear it from somebody who is not selling you one.',
    signs: {
      heading: 'What we do with evaporative coolers',
      items: [
        'Spring start-up, including pads, pump, and water line',
        'Fall shutdown and winterizing so lines do not freeze and split',
        'Pump, float, and belt replacement',
        'Diagnosing units that will not cool or will not hold water',
        'Advice on replacing a swamp cooler with refrigerated air conditioning',
      ],
    },
    process: {
      heading: 'Read this before you book',
      steps: [
        {
          title: 'We do not recommend swamp coolers',
          body: 'They add moisture to the house, they struggle on humid days, they need water running through equipment sitting on or near your roof, and they are far more prone to leaks and flooding than refrigerated air conditioning. We will tell you this every time you ask.',
        },
        {
          title: 'We carry no liability for water damage',
          body: 'Loos & Sons HVAC LLC accepts no liability whatsoever for flooding or water damage arising from a swamp cooler, including damage from equipment failure. This applies to units we have started up, shut down, or serviced. If you want work done on a swamp cooler, this is the condition of the work.',
        },
        {
          title: 'We will still do the work properly',
          body: 'None of the above means we cut corners. If you have a swamp cooler and you want it running, we will service it and we will do a careful job of it.',
        },
        {
          title: 'Ask us about the alternative',
          body: 'If you are tired of the water, the maintenance, and the risk, ask what it would take to move to refrigerated air conditioning or a heat pump. Sometimes the answer is cheaper than people expect.',
        },
      ],
    },
    faqs: [
      {
        q: 'Why do you not recommend swamp coolers?',
        a: 'They rely on running water through equipment that is usually on or beside the roof, which makes leaks and flooding a real and common failure mode. They also add humidity indoors and lose effectiveness on the muggiest days, which are exactly the days you want cooling most.',
      },
      {
        q: 'Will you still work on mine?',
        a: 'Yes. We do start-ups, shutdowns, and repairs. We just do them on the clear condition that Loos & Sons HVAC LLC carries no liability for any flooding or water damage from the unit.',
      },
      {
        q: 'What does winterizing involve and why does it matter?',
        a: 'We shut off and drain the water supply, clear the lines, and cover or seal the unit. Skipping it means water left in a line can freeze, split the line, and flood when the thaw comes.',
      },
      {
        q: 'What would it cost to switch to refrigerated air?',
        a: 'It depends on whether you have ductwork and what your electrical service can support. Call the shop and describe your house, and we will give you an honest picture of the options, including a ductless system if running ducts is not practical.',
      },
    ],
    gallery: ['ac-condenser-landscaped', 'ac-install-new-condenser', 'ac-condenser-blue-home'],
  },
  {
    slug: 'water-heaters',
    h1: 'Water Heater Repair and Replacement in Longmont, Colorado',
    title: 'Water Heater Repair & Installation in Longmont, CO | Tank and Tankless',
    description:
      'Water heater repair and replacement in Longmont, Colorado. Tank and tankless, usually swapped out the same day you call. Call (303) 536-8922.',
    eyebrow: 'Water heaters',
    intro:
      'No hot water is the kind of problem that stops a household cold. We repair and replace both tank and tankless water heaters, and in most cases we can get a replacement in the same day you call.',
    signs: {
      heading: 'Call us when you notice any of this',
      items: [
        'No hot water, or hot water that runs out much faster than it used to',
        'Water pooling around the base of the tank',
        'Rusty or discolored hot water',
        'Popping or rumbling sounds from the tank, which is sediment buildup',
        'The tank is over ten years old',
        'A pilot light or burner that will not stay lit',
      ],
    },
    process: {
      heading: 'How a water heater job goes',
      steps: [
        {
          title: 'We find out whether it is a repair',
          body: 'A thermocouple, a heating element, or a gas valve can often be replaced for far less than a new unit. A leaking tank cannot be repaired and needs replacement.',
        },
        {
          title: 'We tell you tank or tankless honestly',
          body: 'Tankless costs more up front, saves space, and gives endless hot water. A conventional tank is simpler and cheaper. We tell you which one actually fits your household.',
        },
        {
          title: 'You approve the price first',
          body: 'The number comes before the work, including any code upgrades the job requires such as venting or an expansion tank.',
        },
        {
          title: 'We install it and haul the old one away',
          body: 'New unit, correct venting, proper connections, and the old tank goes with us. We test for leaks and confirm you have hot water before we leave.',
        },
      ],
    },
    faqs: [
      {
        q: 'How long does a water heater last?',
        a: 'A conventional tank water heater usually lasts eight to twelve years. Tankless units often run twenty years or more with maintenance. Hard water shortens both, which matters here.',
      },
      {
        q: 'Is a tankless water heater worth it?',
        a: 'It usually makes sense if you run out of hot water regularly or you plan to stay in the house long enough to earn back the higher install cost. For a small household with a tank that still works, it often is not worth the change.',
      },
      {
        q: 'My water heater is leaking. What do I do?',
        a: 'Shut off the water supply valve at the top of the tank, and shut off the gas or the breaker to the unit. Then call us. A leaking tank means the tank itself has failed and it will not repair.',
      },
      {
        q: 'Can you replace it the same day?',
        a: 'In most cases yes, for standard tank replacements. Call the shop in the morning and we will tell you honestly whether we can get to it that day.',
      },
    ],
    gallery: ['tankless-navien-manifold', 'water-heaters-twin', 'tankless-mechanical-room'],
  },
  {
    slug: 'seasonal-tune-ups',
    h1: 'Furnace and AC Tune-Ups in Longmont, Colorado',
    title: 'Seasonal HVAC Tune-Ups in Longmont, CO | Furnace & AC Maintenance',
    description:
      'Seasonal furnace and air conditioning maintenance in Longmont, Colorado. A fall heat check and a spring cooling check so the breakdown never happens. Call (303) 536-8922.',
    eyebrow: 'Seasonal tune-ups',
    intro:
      'Most of the no-heat calls we take in January could have been caught in October. A tune-up is the cheapest visit we make, and it is the one that keeps you from making the expensive call at the worst possible time.',
    signs: {
      heading: 'What a tune-up covers',
      items: [
        'Clean and inspect the burners, the flame sensor, and the ignition system',
        'Check the blower wheel and motor, and clean the blower where needed',
        'Test safety controls, limit switches, and the thermostat',
        'Check refrigerant charge and clean the condenser coil on cooling visits',
        'Inspect venting and check for combustion problems',
        'Replace or check the filter and the humidifier pad',
      ],
    },
    process: {
      heading: 'How maintenance works',
      steps: [
        {
          title: 'Heat check in the fall',
          body: 'Before the first cold night, we make sure the furnace fires reliably, vents safely, and is not about to fail on the coldest day of the year.',
        },
        {
          title: 'Cooling check in the spring',
          body: 'Before the first hot week, we check the charge, clean the outdoor coil, and confirm the system is moving air and dropping temperature the way it should.',
        },
        {
          title: 'We show you what we found',
          body: 'If something is wearing out, you hear about it while it is still a small repair and not an emergency. If everything is fine, we tell you that too.',
        },
      ],
    },
    faqs: [
      {
        q: 'How often should I have my system serviced?',
        a: 'Once a year for each system. A heat check in the fall and a cooling check in the spring. If you have one system that does both, that is still two visits a year.',
      },
      {
        q: 'How often should I change my filter?',
        a: 'For a standard one-inch filter, every one to three months. Sooner if you have pets or run the fan constantly. A dirty filter is the single most common cause of the service calls we get.',
      },
      {
        q: 'Does a tune-up actually save money?',
        a: 'It lowers the odds of an emergency repair, keeps the system running at the efficiency you paid for, and helps the equipment reach its full service life. It also keeps most manufacturer warranties valid, since they require documented annual maintenance.',
      },
      {
        q: 'What is the best time of year to schedule?',
        a: 'Early fall for heating and early spring for cooling. Those are the seasons before the rush, so scheduling is easier and you find problems before you need the system.',
      },
    ],
    gallery: ['maintenance-clean-blower', 'maintenance-humidifier-pad', 'lineset-clean-work'],
  },
];
