// City pages only earn their place if each one says something true and
// different. Templated pages that swap the town name are doorway pages under
// Google's spam policy, so every entry here gets its own angle.
export type CityPage = {
  slug: string;
  name: string;
  county: string;
  intro: string;
  local: string;
  services: string[];
};

export const cityPages: CityPage[] = [
  {
    slug: 'niwot',
    name: 'Niwot',
    county: 'Boulder County',
    intro:
      'Niwot sits about ten minutes southwest of our shop, so it is one of the closer towns we cover and usually one of the easier ones to reach on a same-day call.',
    local:
      'Niwot is unincorporated Boulder County, and the housing runs from older homes around the historic district to the larger newer builds in the subdivisions off Niwot Road. Those two groups bring us very different work. The older places call about aging furnaces and boilers and about adding cooling to a house that never had it, which is where ductless heat pumps do well. The newer, larger homes tend to be zoned, so the calls are about one floor never matching the other.',
    services: ['furnace-repair', 'ac-repair', 'heat-pumps', 'boilers'],
  },
  {
    slug: 'gunbarrel',
    name: 'Gunbarrel',
    county: 'Boulder County',
    intro:
      'Gunbarrel is a straight shot down from Longmont, and we work there regularly on both single family homes and the townhome and condo stock.',
    local:
      'A lot of Gunbarrel was built from the 1970s onward, which means we see plenty of original-era systems reaching the end of their lives, along with the additions and remodels people have layered on since. Attached homes bring their own constraint: limited space for equipment and shared walls that make quiet operation matter. That is a large part of why ductless mini-splits come up so often here, since they solve a comfort problem without demanding a mechanical room.',
    services: ['furnace-installation', 'heat-pumps', 'ac-installation', 'water-heaters'],
  },
  {
    slug: 'lyons',
    name: 'Lyons',
    county: 'Boulder County',
    intro:
      'Lyons is up against the foothills northwest of us, and heating work there is genuinely different from heating work on the flats.',
    local:
      'Elevation and canyon exposure make Lyons colder than Longmont on the same night, so a system sized off a chart instead of the actual house will leave people short in January. The older housing stock near town includes homes that were heated by boilers and radiators long before forced air arrived, and some still are. We also see propane out where natural gas does not reach, which changes what equipment makes sense. If you are in Lyons and someone quoted you a system without asking about your elevation or your fuel, get a second opinion.',
    services: ['boilers', 'furnace-repair', 'radiant-heating', 'heat-pumps'],
  },
  {
    slug: 'berthoud',
    name: 'Berthoud',
    county: 'Larimer County',
    intro:
      'Berthoud is north of us in Larimer County, and it has grown enough in recent years that we work on both the old town core and the new subdivisions around it.',
    local:
      'The contrast is sharp here. In older Berthoud we are repairing and replacing systems that have been in place for decades, often in homes with small mechanical spaces and ductwork that was added after the fact. In the newer neighborhoods we are servicing builder-grade equipment that is now old enough to need attention, which tends to mean the same failures showing up house after house on the same street. Being on the north end of our range, Berthoud is also where we are most likely to talk with you about scheduling rather than promising an hour.',
    services: ['furnace-repair', 'ac-repair', 'water-heaters', 'seasonal-tune-ups'],
  },
  {
    slug: 'mead',
    name: 'Mead',
    county: 'Weld County',
    intro:
      'Mead is a short run east of Longmont, and it has gone from a small town to a steadily building one, which shows up in the work.',
    local:
      'Much of what we see in Mead is newer construction, and newer construction has its own pattern of problems. Builder-installed equipment is sized to a budget, the upstairs bedrooms often run hot in summer, and the first real repairs start landing once the warranty is done. There are also properties outside town on larger lots where a shop or an outbuilding needs heating and cooling that the house system was never going to reach. That is heat pump territory.',
    services: ['ac-repair', 'heat-pumps', 'furnace-repair', 'ac-installation'],
  },
  {
    slug: 'firestone',
    name: 'Firestone',
    county: 'Weld County',
    intro:
      'Firestone is part of the Carbon Valley just east of us, and between it, Frederick, and Dacono we spend a lot of time in that corner of Weld County.',
    local:
      'Firestone grew fast, so a large share of the homes are close in age and built to similar plans. That works in your favor when you call us, because equipment that is common in one Firestone neighborhood is common in the next one, and the parts that fail on it are usually already on the truck. The heat out there is real, with a lot of open exposure and little mature shade, so summers put cooling systems under more load than an older, tree-lined street in Longmont.',
    services: ['ac-repair', 'ac-installation', 'furnace-repair', 'seasonal-tune-ups'],
  },
  {
    slug: 'frederick',
    name: 'Frederick',
    county: 'Weld County',
    intro:
      'Frederick sits next to Firestone in the Carbon Valley, and we cover both on the same trips out east.',
    local:
      'Frederick mixes an older original town with a large amount of newer development around it, so we go from servicing a decades-old furnace in a small older home to diagnosing a builder system in a house barely out of warranty, sometimes on the same day. The newer homes tend to be tighter and better insulated, which is good for bills but makes any equipment problem show up faster as a comfort complaint. Tune-ups pay off more here than people expect, because these systems are still young enough that catching a small fault keeps them young.',
    services: ['furnace-repair', 'ac-repair', 'seasonal-tune-ups', 'water-heaters'],
  },
  {
    slug: 'dacono',
    name: 'Dacono',
    county: 'Weld County',
    intro:
      'Dacono is the third of the Carbon Valley towns we serve, and it is a regular stop rather than an occasional one.',
    local:
      'Dacono is smaller than its neighbors and has a good amount of older housing alongside the newer building, so we see genuinely old equipment out there, the kind where finding parts is part of the job and replacement is often the honest recommendation. It is also a town where people tend to stay put, and homeowners who plan to stay make different equipment decisions than someone flipping in two years. If that is you, tell us, because it changes what we would advise you to buy.',
    services: ['furnace-installation', 'water-heaters', 'furnace-repair', 'ac-repair'],
  },
  {
    slug: 'boulder',
    name: 'Boulder',
    county: 'Boulder County',
    intro:
      'Boulder is a short run southwest of the shop, and it has more rules around heating and cooling equipment than anywhere else we work.',
    local:
      'Two things make Boulder its own animal. First, the city has pushed hard on electrification, and under the current energy code new construction is no longer permitted to use natural gas for equipment that used to default to it. That moves the conversation toward heat pumps whether or not you came in wanting one. Second, a large share of the housing is rental, and Boulder rentals have to meet the city SmartRegs efficiency standard, which landlords often discover at the worst possible moment. On top of the regulatory side, plenty of older Boulder homes were built with no cooling at all, and adding it without tearing up a finished house is exactly what ductless systems are for.',
    services: ['heat-pumps', 'furnace-repair', 'boilers', 'ac-installation'],
  },
  {
    slug: 'louisville',
    name: 'Louisville',
    county: 'Boulder County',
    intro:
      'Louisville is a straight shot south of Longmont, and a lot of the work there now involves homes that are only a few years old for a reason nobody wanted.',
    local:
      'The Marshall Fire took a large part of this town in December 2021, and the rebuild reshaped what is in Louisville basements. Rebuild incentives were tied to high efficiency electric equipment, with the state grant for rebuilt homes requiring heat pumps for space heating and cooling, air source or ground source, and Xcel added its own rebates on top. The result is a concentration of newer all-electric and heat pump homes here that you will not find in most Front Range towns. We work on that equipment, including the ground source systems, which matters because the pool of companies that will service a geothermal heat pump is small. The older parts of Louisville that were untouched still run conventional gas systems, so we cover both.',
    services: ['heat-pumps', 'geothermal', 'furnace-repair', 'ac-repair'],
  },
  {
    slug: 'superior',
    name: 'Superior',
    county: 'Boulder County',
    intro:
      'Superior sits next to Louisville and shares the same recent history, which shows up in the equipment we find there.',
    local:
      'Like Louisville, Superior lost a large number of homes in the Marshall Fire and rebuilt under green building incentives that pushed toward all-electric equipment and heat pumps. That means an unusual share of the town runs on systems that many heating companies still treat as unfamiliar. We are comfortable with them. Superior also has its older subdivision stock from before the fire, where we do ordinary furnace, air conditioning, and water heater work. When you call, tell us whether your home is a rebuild, because it tells us immediately what we are likely walking into.',
    services: ['heat-pumps', 'geothermal', 'ac-repair', 'water-heaters'],
  },
  {
    slug: 'lafayette',
    name: 'Lafayette',
    county: 'Boulder County',
    intro:
      'Lafayette is close enough that we are there often, and it splits cleanly between the old town core and everything built around it since.',
    local:
      'Old Town Lafayette has small, older houses where the mechanical room is a corner of a basement and there is no easy path for new ductwork. That is where mini-splits and careful boiler work earn their keep. The subdivisions further out are newer and mostly forced air, so the work there looks like the rest of the growth corridor: builder equipment reaching the age where it needs real service. Lafayette also has a fair amount of older hydronic heat, and we are one of the shops that will still take those calls.',
    services: ['boilers', 'heat-pumps', 'furnace-repair', 'radiant-heating'],
  },
  {
    slug: 'broomfield',
    name: 'Broomfield',
    county: 'City and County of Broomfield',
    intro:
      'Broomfield sits between us and the north metro, and it is one of the more consistently newer housing markets we cover.',
    local:
      'Much of Broomfield was master planned and built in waves, so entire neighborhoods share an equipment vintage. When one furnace or condenser model starts failing on a street, we usually see several. The larger two story homes out toward the newer developments bring the familiar complaint that the upstairs never matches the main floor, which is a zoning and distribution problem before it is an equipment problem. Broomfield also has enough attached and higher density housing that space for equipment is tight, which changes what we can install.',
    services: ['ac-repair', 'furnace-repair', 'heat-pumps', 'seasonal-tune-ups'],
  },
  {
    slug: 'westminster',
    name: 'Westminster',
    county: 'Adams and Jefferson Counties',
    intro:
      'Westminster is a regular run for us down the US 36 corridor, and it covers a wide spread of housing ages.',
    local:
      'East Westminster holds a lot of housing from the 1960s through the 1980s, which is prime territory for full system replacement rather than another repair on equipment that has already been patched twice. Those homes also tend to have ductwork that was designed for a furnace and had cooling added later, so the airflow is rarely balanced. Newer west Westminster is a different job entirely, mostly builder equipment aging into its first real service calls. We handle both, and the honest recommendation is usually different on each side of town.',
    services: ['furnace-installation', 'ac-installation', 'furnace-repair', 'water-heaters'],
  },
  {
    slug: 'arvada',
    name: 'Arvada',
    county: 'Jefferson County',
    intro:
      'Arvada is a longer drive from the shop than our Boulder County towns, and we plan the schedule around that rather than pretending otherwise.',
    local:
      'Arvada has an enormous stock of mid-century ranch homes, especially around Olde Town and the older neighborhoods east of it. Those houses were built for a furnace and a chimney, and everything since has been added on: central air, a bigger water heater, sometimes a finished basement with no return air. That history is why an Arvada job often turns into a conversation about the whole system instead of the one part that failed. West Arvada is newer and more conventional. If you are in Arvada, call earlier in the day when you can, since it helps us route the truck properly.',
    services: ['furnace-repair', 'ac-installation', 'water-heaters', 'furnace-installation'],
  },
  {
    slug: 'wheat-ridge',
    name: 'Wheat Ridge',
    county: 'Jefferson County',
    intro:
      'Wheat Ridge is at the south end of what we cover, and it is almost entirely older housing, which suits the kind of work we like.',
    local:
      'This is brick ranch country, much of it built in the 1950s and 1960s on generous lots with mature trees. A lot of these homes have original ductwork, undersized returns, and cooling that was added decades after the house was finished. Some still have boilers and radiators, and those we are glad to take. The mature shade actually helps in summer, which means a properly sized system here does not need to be as large as a builder in an open new subdivision would spec. Oversizing an old Wheat Ridge house is a common and expensive mistake.',
    services: ['boilers', 'furnace-installation', 'ac-installation', 'radiant-heating'],
  },
  {
    slug: 'golden',
    name: 'Golden',
    county: 'Jefferson County',
    intro:
      'Golden is up against the foothills at the southwest edge of our range, and the terrain changes what the heating system has to do.',
    local:
      'Golden shares something with Lyons: elevation and canyon exposure make it colder than the flats on the same night, so equipment sized off a generic assumption comes up short in deep winter. The older homes in and around downtown are small and tightly built with limited mechanical space, and some are heated by boilers. Homes further up carry the same considerations as any foothills property, including whether you are on natural gas at all. Tell us your fuel and your elevation when you call, because both change the recommendation.',
    services: ['boilers', 'furnace-repair', 'heat-pumps', 'radiant-heating'],
  },
  {
    slug: 'lakewood',
    name: 'Lakewood',
    county: 'Jefferson County',
    intro:
      'Lakewood is the furthest south we regularly go, so it is worth calling early and being flexible on timing.',
    local:
      'Lakewood is large and its housing spans decades, but a great deal of it is post-war and mid-century, with the same pattern we see across the older metro: a furnace at the center of the house, cooling added later, and ductwork that was never rebalanced afterward. Green Mountain and the newer pockets are different, generally more conventional forced air of a later vintage. Because of the drive from Longmont, we are straight with Lakewood callers about scheduling. If you need somebody in the next hour, we will tell you rather than leave you waiting on a truck that is forty minutes out.',
    services: ['furnace-repair', 'ac-repair', 'furnace-installation', 'water-heaters'],
  },
  {
    slug: 'thornton',
    name: 'Thornton',
    county: 'Adams County',
    intro:
      'Thornton sits east of the US 36 corridor and covers a wide age range of housing, from 1960s tract homes to recent construction up north.',
    local:
      'South Thornton is older, and those homes are now well past the point where original equipment survives, so a lot of what we do there is replacement rather than repair. North Thornton has grown steadily and looks like the rest of the newer Front Range: builder-grade systems, tight envelopes, and upstairs rooms that run warm. The open exposure on the newer north side means summer load is higher than in an older, shaded neighborhood, and cooling systems there work harder for it.',
    services: ['ac-repair', 'furnace-installation', 'furnace-repair', 'seasonal-tune-ups'],
  },
  {
    slug: 'erie',
    name: 'Erie',
    county: 'Boulder and Weld Counties',
    intro:
      'Erie sits south and east of Longmont and straddles two counties, and it has been one of the faster growing towns in our service area.',
    local:
      'Erie is dominated by newer subdivisions, many of them large two story homes, and the single most common complaint we hear there is that the upstairs will not stay cool while the main floor is fine. That is a distribution and sizing problem more than an equipment problem, and it is fixable without replacing everything. We also get calls about finished basements that were never properly tied into the system, which is a good use for a ductless head rather than a duct renovation.',
    services: ['ac-repair', 'heat-pumps', 'ac-installation', 'furnace-repair'],
  },
];
