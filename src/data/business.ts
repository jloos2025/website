// Single source of truth for business facts. Everything here is DESIGN-REVIEW
// PLACEHOLDER data until John confirms the real details.
export const business = {
  name: 'Loos & Sons',
  fullName: 'Loos & Sons HVAC',
  place: 'Heating · Cooling · Comfort · Longmont, CO',
  city: 'Longmont',
  foundingYear: 1974,
  phoneDisplay: '(303) 536-8922',
  phoneE164: '+13035368922',
  email: 'loosandsons@gmail.com',
  address: {
    street: '1751 Hover St, Unit B4',
    mail: 'PO Box 46',
    city: 'Longmont',
    state: 'CO',
    zip: '80501',
  },
  license: 'Colorado Mechanical Contractor License #000000 (placeholder)',
  hoursTable: [
    ['Mon–Fri', '7am – 6pm'],
    ['Saturday', '8am – 4pm'],
    ['Sunday', 'Emergencies only'],
    ['After hours', 'Call the same number'],
  ],
  hoursShort: 'Mon–Sat 7am–6pm',
  afterHoursLine: 'Emergency line after hours',
  // 0=Sunday … 6=Saturday, [openHour, closeHour) local time
  schedule: {
    1: [7, 18],
    2: [7, 18],
    3: [7, 18],
    4: [7, 18],
    5: [7, 18],
    6: [8, 16],
  } as Record<number, [number, number]>,
  timezone: 'America/Denver',
  services: [
    {
      slug: 'ac-repair',
      title: 'AC Repair',
      blurb: 'Warm air, weird noises, or nothing at all — we diagnose it and give you the price before we touch a wrench.',
      go: 'AC repair details →',
    },
    {
      slug: 'ac-installation',
      title: 'AC Installation',
      blurb: 'Right-sized systems for Front Range summers, installed clean and explained in plain English.',
      go: 'AC installation details →',
    },
    {
      slug: 'furnace-repair',
      title: 'Furnace Repair',
      blurb: 'No heat is an emergency in January. We carry the common parts on the truck so most fixes happen in one visit.',
      go: 'Furnace repair details →',
    },
    {
      slug: 'furnace-installation',
      title: 'Furnace Installation',
      blurb: 'Honest advice on repair vs. replace, and installs sized for how Longmont homes are actually built.',
      go: 'Furnace installation details →',
    },
    {
      slug: 'water-heaters',
      title: 'Water Heaters',
      blurb: 'Repair and replacement for tank and tankless — usually swapped out the same day you call.',
      go: 'Water heater details →',
    },
    {
      slug: 'seasonal-tune-ups',
      title: 'Seasonal Tune-Ups',
      blurb: 'A fall furnace check and a spring AC check, so the breakdown never happens in the first place.',
      go: 'Tune-up details →',
    },
  ],
  towns: [
    'Longmont',
    'Niwot',
    'Gunbarrel',
    'Lyons',
    'Berthoud',
    'Mead',
    'Firestone',
    'Frederick',
    'Dacono',
    'Erie',
  ],
  reviews: [
    {
      quote:
        '“Furnace quit the coldest night in January. Dan was at our place by 8 the next morning with the part already on the truck. Heat back on before lunch, and the bill matched the quote to the dollar.”',
      name: 'Margaret H.',
      detail: 'Old Town Longmont · Furnace repair',
    },
    {
      quote:
        '“Their sticker was on the furnace when we bought the house, with dates going back to the nineties. Called the number on it and Jake showed up. Now they do our tune-ups every year, same as the last owners.”',
      name: 'Marcus & Elena T.',
      detail: 'Prospect · Seasonal tune-ups',
    },
    {
      quote:
        '“AC died at 98 degrees with a newborn in the house. Roy talked me through what to do on the phone before the truck even left the shop. These folks treat you like a neighbor, because you are one.”',
      name: 'Priya S.',
      detail: 'Firestone · AC repair',
    },
  ],
} as const;
