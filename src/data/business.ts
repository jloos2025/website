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
  // Service area business. We deliberately publish city and region only, with
  // no street address. The mailing address is a mailbox center, and listing one
  // publicly is both a privacy problem and grounds for a Google Business
  // Profile suspension.
  address: {
    city: 'Longmont',
    state: 'CO',
    region: 'Colorado',
  },
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
      slug: 'heat-pumps',
      title: 'Heat Pumps',
      blurb: 'Ductless mini-splits and whole-home heat pumps that heat and cool from one system, including cold climate models built for Colorado winters.',
      go: 'Heat pump details',
    },
    {
      slug: 'boilers',
      title: 'Boilers',
      blurb: 'Repair and replacement for hot water boilers and combi units, including the near-boiler piping most companies would rather not touch.',
      go: 'Boiler details',
    },
    {
      slug: 'radiant-heating',
      title: 'Radiant & Hydronic Heat',
      blurb: 'In-floor radiant, baseboard, and zoned hydronic systems. We build the manifolds and we fix the ones that were built wrong.',
      go: 'Radiant heating details',
    },
    {
      slug: 'geothermal',
      title: 'Geothermal',
      blurb: 'Ground source heat pumps, flow centers, and loop work. Very few companies on the Front Range service these. We do.',
      go: 'Geothermal details',
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
