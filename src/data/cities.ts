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
