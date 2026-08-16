// Single source of truth for business facts. Everything here is DESIGN-REVIEW
// PLACEHOLDER data until John confirms the real details.
export const business = {
  name: 'Loos & Sons',
  fullName: 'Loos & Sons HVAC',
  place: 'Heating · Cooling · Comfort · Longmont, CO',
  city: 'Longmont',
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
  services: [
    {
      slug: 'ac-repair',
      title: 'AC Repair',
      blurb: 'Warm air, strange noises, or nothing at all. We find the cause and give you the price before we touch a wrench.',
      go: 'AC repair details',
    },
    {
      slug: 'ac-installation',
      title: 'AC Installation',
      blurb: 'Systems sized for Front Range summers, installed clean and explained before you buy.',
      go: 'AC installation details',
    },
    {
      slug: 'furnace-repair',
      title: 'Furnace Repair',
      blurb: 'No heat is an emergency in January. We carry the common parts on the truck so most fixes happen in one visit.',
      go: 'Furnace repair details',
    },
    {
      slug: 'furnace-installation',
      title: 'Furnace Installation',
      blurb: 'Straight advice on repair versus replace, and installs sized for how Longmont homes are actually built.',
      go: 'Furnace installation details',
    },
    {
      slug: 'water-heaters',
      title: 'Water Heaters',
      blurb: 'Repair and replacement for tank and tankless, usually swapped out the same day you call.',
      go: 'Water heater details',
    },
    {
      slug: 'seasonal-tune-ups',
      title: 'Seasonal Tune-Ups',
      blurb: 'A fall furnace check and a spring AC check, so you find the problem before you need the system.',
      go: 'Tune-up details',
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
  // Reviews stay empty until John has real ones to quote. Invented
  // testimonials are illegal under the FTC rule on fake reviews.
  reviews: [] as { quote: string; name: string; detail: string }[],
} as const;
