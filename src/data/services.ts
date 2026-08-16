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
      'A new air conditioner is a system, not a box. We size it for your house, install it clean, and explain what we did in plain English. A system sized correctly runs less, lasts longer, and keeps the house even from room to room.',
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
          body: 'We show you what fits your house and your budget, explain the difference between the options, and put the price in writing before anything is ordered.',
        },
        {
          title: 'We install it clean',
          body: 'Level pad, tidy line set, proper electrical disconnect, and a correct refrigerant charge. Look at our gallery and you can see the standard we hold.',
        },
        {
          title: 'We start it up and walk you through it',
          body: 'We test the system, confirm the airflow and temperature split, register the warranty, and show you how to run it.',
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
          body: 'We explain the failure, the repair, and the cost before the work starts. No surprises on the invoice.',
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
          body: 'We explain efficiency ratings and staging in plain English, tell you what actually matters for your home, and give you the number before you commit.',
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
        a: 'It is worth it if you run out of hot water regularly, want the floor space back, or plan to stay in the house long enough to earn back the higher install cost. For a small household with a working tank, it is often not worth the change.',
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
