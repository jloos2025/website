// Gallery photos are John's own job-site photos. `category` drives the filter
// on /gallery; `alt` is what a screen reader and Google Images both read.
export const categories = [
  { id: 'all', label: 'All work' },
  { id: 'cooling', label: 'Air conditioning' },
  { id: 'ductless', label: 'Ductless mini-splits' },
  { id: 'heating', label: 'Furnaces' },
  { id: 'water', label: 'Water heaters' },
  { id: 'service', label: 'Service & tune-ups' },
] as const;

export const photos = [
  { file: 'ac-install-new-condenser', category: 'cooling', alt: 'New air conditioning condenser installed on a level pad beside a Longmont home' },
  { file: 'ac-condenser-landscaped', category: 'cooling', alt: 'Air conditioner condenser set in fresh landscaping with tidy line set and disconnect box' },
  { file: 'ac-condenser-green-home', category: 'cooling', alt: 'Outdoor AC unit installed beside a green sided home' },
  { file: 'ac-condenser-blue-home', category: 'cooling', alt: 'Rheem air conditioner condenser installed at a blue sided house' },
  { file: 'ac-condenser-beige-home', category: 'cooling', alt: 'Air conditioner condenser and electrical disconnect on the side of a beige home' },
  { file: 'ac-two-condensers', category: 'cooling', alt: 'Two air conditioning condensers installed side by side along a home walkway' },

  { file: 'minisplit-outdoor-mitsubishi', category: 'ductless', alt: 'Mitsubishi ductless mini-split outdoor unit mounted on stands beside a home' },
  { file: 'minisplit-outdoor-twin-fan', category: 'ductless', alt: 'Twin fan Mitsubishi mini-split condenser mounted against green shingle siding' },
  { file: 'minisplit-outdoor-pair', category: 'ductless', alt: 'Pair of ductless mini-split outdoor units installed at the corner of a home' },
  { file: 'minisplit-outdoor-duo', category: 'ductless', alt: 'Two mini-split condensers set on stands over landscaping rock' },
  { file: 'minisplit-outdoor-lg', category: 'ductless', alt: 'LG mini-split outdoor unit installed beside a home with finished landscaping' },
  { file: 'minisplit-living-room', category: 'ductless', alt: 'Ductless mini-split head mounted high on a living room wall' },
  { file: 'minisplit-vaulted-room', category: 'ductless', alt: 'Mini-split indoor head installed in a room with a vaulted ceiling and ceiling fan' },
  { file: 'minisplit-bedroom', category: 'ductless', alt: 'Mini-split head mounted above a bedroom window' },
  { file: 'minisplit-office', category: 'ductless', alt: 'Ductless mini-split head installed in a home office' },
  { file: 'minisplit-bright-room', category: 'ductless', alt: 'Mini-split indoor unit installed beside a window in a bright room' },

  { file: 'furnace-basement-install', category: 'heating', alt: 'New high efficiency furnace and sheet metal plenum installed in a basement' },
  { file: 'furnace-install-tech', category: 'heating', alt: 'Technician finishing a basement furnace and ductwork installation' },
  { file: 'furnace-new-install', category: 'heating', alt: 'Newly installed furnace with fresh venting and gas piping' },
  { file: 'furnace-insulated-space', category: 'heating', alt: 'Furnace installed in an insulated mechanical space with new venting' },
  { file: 'furnace-and-water-heater', category: 'heating', alt: 'Bosch furnace installed next to a gas water heater in a utility room' },
  { file: 'furnace-bosch-pair', category: 'heating', alt: 'Bosch furnace and water heater installed together with new venting' },

  { file: 'tankless-navien-manifold', category: 'water', alt: 'Wall mounted tankless water heater with a clean copper manifold and expansion tank' },
  { file: 'water-heaters-twin', category: 'water', alt: 'Two water heaters installed side by side with copper piping and new venting' },
  { file: 'water-heaters-twin-angle', category: 'water', alt: 'Pair of gas water heaters with copper supply lines in a mechanical room' },
  { file: 'tankless-mechanical-room', category: 'water', alt: 'Tankless water heater and storage tank installed in a finished mechanical room' },
  { file: 'tankless-copper-manifold', category: 'water', alt: 'Tankless water heater with copper manifold piping in a utility space' },

  { file: 'maintenance-clean-blower', category: 'service', alt: 'Clean furnace blower wheel after a maintenance service' },
  { file: 'maintenance-humidifier-pad', category: 'service', alt: 'Technician holding a used humidifier pad removed during a tune-up' },
  { file: 'lineset-clean-work', category: 'service', alt: 'Refrigerant line set routed and covered neatly against exterior siding' },
  { file: 'tech-on-ladder', category: 'service', alt: 'Technician working from an extension ladder on a multi story home' },

  { file: 'truck-side', category: 'service', alt: 'Loos and Sons HVAC service truck with company logo on the door' },
  { file: 'truck-rear', category: 'service', alt: 'Loos and Sons HVAC service truck parked at a job site' },
] as const;
