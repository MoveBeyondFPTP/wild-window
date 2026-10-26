/*
 * Wild Window — the built-in catalog of free, public animal livestreams.
 *
 * Every entry is a YouTube live stream that allows embedding, so it plays
 * right inside the app. Live stream links sometimes change when a broadcaster
 * restarts a stream. If one stops working, replace its `yt` value with the new
 * video ID (the part after "watch?v=" or "/live/" in the YouTube link).
 *
 * Fields
 *   id     unique short name (letters, numbers, dashes)
 *   title  the name shown on the card
 *   place  where the camera is
 *   tz     the camera's time zone (shows the local time there)
 *   cat    birds | ocean | safari | zoo | cuddly
 *   tags   extra words people might search for
 *   yt     YouTube video ID of the live stream   (use this…)
 *   channel YouTube channel ID that is always live (…or this)
 *   tone   pastel color behind the thumbnail
 *   blurb  a sentence or two for the watch screen
 */
window.WW_CAMS = [
  {
    id: "barn-owl-jezreel", title: "Barn Owl Nest", place: "Jezreel Valley, Israel",
    tz: "Asia/Jerusalem", cat: "birds", tags: ["owl", "owls", "nest", "night", "nocturnal", "chicks"],
    yt: "u_4FJ4M7gGE", tone: "#d9c7e8",
    blurb: "A barn owl nest box in farm country, where owls are welcome pest control. Busiest after dark."
  },
  {
    id: "owl-forest-taiwan", title: "Owl Forest", place: "Hutoushan, Taoyuan, Taiwan",
    tz: "Asia/Taipei", cat: "birds", tags: ["owl", "owls", "forest", "night", "nocturnal"],
    yt: "yQSmajHyMhU", tone: "#c9d6e8",
    blurb: "A quiet patch of forest watched over by resident owls."
  },
  {
    id: "bald-eagle-catalina", title: "Bald Eagle Nest", place: "Two Harbors, Catalina Island, CA",
    tz: "America/Los_Angeles", cat: "birds", tags: ["eagle", "eagles", "raptor", "nest", "island", "ocean view"],
    yt: "E5T2eHM8tcI", tone: "#f3cdb8",
    blurb: "A cliffside eagle nest high above the Pacific. Chicks hatch in spring."
  },
  {
    id: "albatross-taiaroa", title: "Royal Albatross Nest", place: "Taiaroa Head, New Zealand",
    tz: "Pacific/Auckland", cat: "birds", tags: ["albatross", "seabird", "nest", "chick", "ocean"],
    yt: "fDhIv9iBzWk", tone: "#cfe0d6",
    blurb: "The only mainland royal albatross colony in the world. One fluffy chick, raised over most of a year."
  },
  {
    id: "aviary-monterey", title: "Shorebird Aviary", place: "Monterey Bay Aquarium, California",
    tz: "America/Los_Angeles", cat: "birds",
    tags: ["shorebird", "stilt", "plover", "sandpiper", "oystercatcher", "turnstone", "phalarope", "sandy shore", "aviary", "aquarium", "beach", "crane"],
    yt: "0L6ZCRHNjXY", tone: "#e8dcc6",
    blurb: "The Sandy Shore & Aviary exhibit: rescued shorebirds like black-necked stilts and western snowy plovers, wading and splashing up close. Live during aquarium hours; after closing it plays a recording."
  },
  {
    id: "feeder-nuuksio", title: "Forest Feeder", place: "Nuuksio National Park, Finland",
    tz: "Europe/Helsinki", cat: "birds", tags: ["feeder", "songbird", "tit", "forest", "squirrel", "snow"],
    yt: "JWta8Urznhw", tone: "#d6e4cc",
    blurb: "A Finnish forest feeder that draws tits, woodpeckers, jays and the occasional squirrel."
  },
  {
    id: "penguins-calacademy", title: "African Penguins", place: "California Academy of Sciences, San Francisco",
    tz: "America/Los_Angeles", cat: "zoo", tags: ["penguin", "penguins", "aquarium", "swim"],
    yt: "FqlbLvuln-M", tone: "#c9e0ec",
    blurb: "A busy colony of African penguins waddling, swimming and squabbling over the best rocks."
  },
  {
    id: "blue-penguins-oamaru", title: "Little Blue Penguins", place: "Oamaru, New Zealand",
    tz: "Pacific/Auckland", cat: "ocean", tags: ["penguin", "penguins", "little", "blue", "colony", "night"],
    yt: "IKhGWZeCns8", tone: "#bcd3e6",
    blurb: "The world's smallest penguins. They come ashore in rafts just after dusk."
  },
  {
    id: "reef-steinhart", title: "Coral Reef", place: "Steinhart Aquarium, San Francisco",
    tz: "America/Los_Angeles", cat: "ocean", tags: ["reef", "coral", "fish", "aquarium", "underwater", "colorful"],
    yt: "3NAplOMQ5pU", tone: "#f6d58e",
    blurb: "A living Philippine coral reef, full of bright fish drifting past."
  },
  {
    id: "moon-jellies", title: "Moon Jellies", place: "Monterey Bay, California",
    tz: "America/Los_Angeles", cat: "ocean", tags: ["jelly", "jellies", "jellyfish", "aquarium", "underwater", "calm", "relaxing"],
    yt: "IEGYa3FlY1s", tone: "#d9c7e8",
    blurb: "Translucent moon jellies pulsing slowly through blue water. Very calming."
  },
  {
    id: "sea-nettles", title: "Sea Nettle Jellies", place: "Aquarium cam, California",
    tz: "America/Los_Angeles", cat: "ocean", tags: ["jelly", "jellies", "jellyfish", "nettle", "aquarium", "underwater", "calm"],
    yt: "vUL-RX_aoOg", tone: "#f3cdb8",
    blurb: "Golden Pacific sea nettles trailing long ribbony tentacles."
  },
  {
    id: "jelly-drift", title: "Jellyfish Drift", place: "Monterey Bay, California",
    tz: "America/Los_Angeles", cat: "ocean", tags: ["jelly", "jellies", "jellyfish", "aquarium", "underwater", "calm"],
    yt: "gswNWtJlUco", tone: "#c9d6e8",
    blurb: "Another dreamy jelly tank for when one isn't enough."
  },
  {
    id: "orcas-bc", title: "Orca Rubbing Beach", place: "Knight Inlet, British Columbia",
    tz: "America/Vancouver", cat: "ocean", tags: ["orca", "orcas", "whale", "whales", "killer whale", "underwater"],
    yt: "vwCXZeswQKY", tone: "#bcd3e6",
    blurb: "An underwater cam on a pebble beach where orcas come to rub their bellies. Mostly summer and fall."
  },
  {
    id: "otters-calvert", title: "River Otters", place: "Calvert Marine Museum, Maryland",
    tz: "America/New_York", cat: "cuddly", tags: ["otter", "otters", "river", "swim", "play"],
    yt: "zIvtJ05k-bI", tone: "#bfd8c8",
    blurb: "Playful river otters splashing, napping in piles and begging for snacks."
  },
  {
    id: "seals-pieterburen", title: "Seal Rescue Pool", place: "Pieterburen, Netherlands",
    tz: "Europe/Amsterdam", cat: "ocean", tags: ["seal", "seals", "pup", "rescue", "rehab"],
    yt: "aXAsMcmtJTc", tone: "#ebe2d2",
    blurb: "Young seals recovering at a rescue center before heading back to the Wadden Sea."
  },
  {
    id: "pandas-chengdu", title: "Giant Pandas", place: "Chengdu Panda Base, China",
    tz: "Asia/Shanghai", cat: "cuddly", tags: ["panda", "pandas", "bear", "bamboo", "zoo"],
    yt: "gnEuhfyZPPQ", tone: "#e6e1d8",
    blurb: "Pandas munching bamboo, tumbling off logs and sleeping in trees."
  },
  {
    id: "pandas-gengda", title: "Panda Valley", place: "Gengda Valley, Wolong, China",
    tz: "Asia/Shanghai", cat: "cuddly", tags: ["panda", "pandas", "bear", "mountain", "bamboo"],
    yt: "DP9hbJmwbNU", tone: "#d6e4cc",
    blurb: "A wilder panda enclosure in the misty mountains of Sichuan."
  },
  {
    id: "capybaras-taronga", title: "Capybaras", place: "Taronga Zoo, Sydney",
    tz: "Australia/Sydney", cat: "cuddly", tags: ["capybara", "capybaras", "rodent", "chill", "zoo"],
    yt: "6j7pqjym1EE", tone: "#f3cdb8",
    blurb: "The world's most relaxed rodents, doing very little, very well."
  },
  {
    id: "giraffes-melbourne", title: "Giraffes", place: "Melbourne Zoo, Australia",
    tz: "Australia/Melbourne", cat: "zoo", tags: ["giraffe", "giraffes", "zoo", "safari"],
    yt: "hNexlUkTTuc", tone: "#f6d58e",
    blurb: "Tall friends browsing, strolling and peering over the fence."
  },
  {
    id: "lions-werribee", title: "Lions", place: "Werribee Open Range Zoo, Australia",
    tz: "Australia/Melbourne", cat: "zoo", tags: ["lion", "lions", "big cat", "cat", "savanna", "safari"],
    yt: "gTz_7tKUfYM", tone: "#e8dcc6",
    blurb: "A pride lounging on open grassland. Expect lots of napping."
  },
  {
    id: "waterhole-mpala", title: "Savanna Waterhole", place: "Mpala, Kenya",
    tz: "Africa/Nairobi", cat: "safari", tags: ["waterhole", "elephant", "zebra", "giraffe", "antelope", "africa", "savanna"],
    yt: "KyQAB-TKOVA", tone: "#f3cdb8",
    blurb: "A Kenyan waterhole where elephants, zebras, giraffes and more stop for a drink."
  },
  {
    id: "explore-africa", title: "Africa Wildlife Cam", place: "Southern Africa · explore.org",
    tz: "Africa/Johannesburg", cat: "safari", tags: ["africa", "elephant", "rhino", "lion", "waterhole", "safari", "explore"],
    channel: "UCiGOIXjFqy5_mUNxQNOMfHw", tone: "#e8dcc6",
    blurb: "explore.org's main African wildlife stream, at a waterhole or river depending on the season."
  },
  {
    id: "monkeys-awaji", title: "Monkey Center", place: "Awaji Island, Japan",
    tz: "Asia/Tokyo", cat: "zoo", tags: ["monkey", "monkeys", "macaque", "primate", "japan"],
    yt: "lsxYH2XQQCg", tone: "#bfd8c8",
    blurb: "A troop of Japanese macaques grooming, squabbling and sunbathing."
  },
  {
    id: "foxes-dublin", title: "Urban Red Foxes", place: "Dublin, Ireland",
    tz: "Europe/Dublin", cat: "cuddly", tags: ["fox", "foxes", "garden", "night", "city"],
    yt: "V-MaZaLBBr0", tone: "#f3cdb8",
    blurb: "City foxes visiting a Dublin garden, mostly at dawn and dusk."
  },
  {
    id: "kittens-langley", title: "Kitten Rescue", place: "Fort Langley, British Columbia",
    tz: "America/Vancouver", cat: "cuddly", tags: ["kitten", "kittens", "cat", "cats", "rescue", "foster"],
    yt: "X7wHup1Be70", tone: "#d9c7e8",
    blurb: "A foster room full of tiny rescue kittens. Maximum cuteness, minimal sleep."
  },
  {
    id: "shark-lagoon-calacademy",
    title: "Shark Lagoon",
    place: "California Academy of Sciences, San Francisco",
    tz: "America/Los_Angeles",
    cat: "ocean",
    tags: ["shark", "sharks", "ray", "rays", "reef", "aquarium", "fish"],
    yt: "ubwxOJ7LBPA",
    tone: "#d9c7e8",
    blurb: "Sharks and rays cruise over a reef in the academy's lagoon tank."
  },
  {
    id: "spider-crabs-monterey",
    title: "Giant Spider Crabs",
    place: "Monterey Bay Aquarium, California",
    tz: "America/Los_Angeles",
    cat: "ocean",
    tags: ["crab", "crabs", "spider crab", "aquarium", "underwater"],
    yt: "dzmJXWmA2EM",
    tone: "#bfd8c8",
    blurb: "Leggy Japanese spider crabs, the biggest crabs on Earth, creeping across the sea floor."
  },
  {
    id: "farm-sanctuary-wisconsin",
    title: "Sanctuary Pasture",
    place: "Farm sanctuary, Wisconsin",
    tz: "America/Chicago",
    cat: "cuddly",
    tags: ["farm", "sanctuary", "rescue", "cow", "cows", "pasture"],
    yt: "dqcCOYtHtes",
    tone: "#f3cdb8",
    blurb: "Rescued farm animals grazing and lazing in a Wisconsin pasture."
  },
  {
    id: "sharks-haus-des-meeres",
    title: "Shark Tank",
    place: "Haus des Meeres, Vienna, Austria",
    tz: "Europe/Vienna",
    cat: "ocean",
    tags: ["shark", "sharks", "fish", "aquarium", "tropical"],
    yt: "JWaAzI6ryHY",
    tone: "#f6d58e",
    blurb: "Sharks glide among schools of tropical fish in a Vienna aquarium."
  },
  {
    id: "ash-wood-yorkshire",
    title: "Woodland Wildlife",
    place: "Ash Wood, Malton, England",
    tz: "Europe/London",
    cat: "safari",
    tags: ["owl", "tawny owl", "kestrel", "buzzard", "badger", "woodland", "forest"],
    yt: "z-lG3ro832c",
    tone: "#c9d6e8",
    blurb: "A Yorkshire wood visited by tawny owls, kestrels, buzzards and badgers."
  },
  {
    id: "sharks-monterey",
    title: "Monterey Shark Tank",
    place: "Monterey Bay Aquarium, California",
    tz: "America/Los_Angeles",
    cat: "ocean",
    tags: ["shark", "sharks", "fish", "aquarium", "underwater"],
    yt: "tEtg5Kg3voQ",
    tone: "#e8dcc6",
    blurb: "Sharks circling with big schools of silvery fish."
  },
  {
    id: "shark-lagoon-pacific",
    title: "Pacific Shark Lagoon",
    place: "Aquarium of the Pacific, Long Beach, California",
    tz: "America/Los_Angeles",
    cat: "ocean",
    tags: ["shark", "sharks", "aquarium", "underwater"],
    yt: "BLvr4K2eiRE",
    tone: "#d6e4cc",
    blurb: "A deep lagoon full of sharks gliding past the glass."
  },
  {
    id: "trevor-zoo-pond",
    title: "Zoo Pond",
    place: "Trevor Zoo, Millbrook, New York",
    tz: "America/New_York",
    cat: "zoo",
    tags: ["duck", "ducks", "pond", "fish", "zoo"],
    yt: "N8E8JIZFaS0",
    tone: "#bcd3e6",
    blurb: "Ducks paddle the pond while fish drift below and zoo animals wander by."
  },
  {
    id: "storks-brenz-castle",
    title: "Castle Storks",
    place: "Brenz Castle, Sontheim, Germany",
    tz: "Europe/Berlin",
    cat: "birds",
    tags: ["stork", "storks", "nest", "castle"],
    yt: "PrBoZJIW2pI",
    tone: "#d9c7e8",
    blurb: "White storks raising a family on top of an old castle."
  },
  {
    id: "parrots-yorkshire",
    title: "Parrot Aviary",
    place: "Yorkshire Parrot Aviary, Ripon, England",
    tz: "Europe/London",
    cat: "birds",
    tags: ["parrot", "parrots", "macaw", "aviary", "colorful"],
    yt: "SvFLoSuhSVI",
    tone: "#bfd8c8",
    blurb: "A noisy, colorful flock of parrots chattering and feeding."
  },
  {
    id: "reef-pennekamp",
    title: "Florida Keys Reef",
    place: "John Pennekamp Coral Reef State Park, Florida",
    tz: "America/New_York",
    cat: "ocean",
    tags: ["reef", "coral", "fish", "underwater", "tropical"],
    yt: "3knAgXMh-Ig",
    tone: "#f3cdb8",
    blurb: "A real coral reef off Key Largo, busy with tropical fish."
  },
  {
    id: "tarpon-robbies",
    title: "Tarpon Feeding Dock",
    place: "Robbie's Marina, Islamorada, Florida",
    tz: "America/New_York",
    cat: "ocean",
    tags: ["tarpon", "fish", "dock", "pelican"],
    yt: "zfSst64NFcE",
    tone: "#f6d58e",
    blurb: "Huge silver tarpon crowd the dock, waiting for snacks."
  },
  {
    id: "peregrines-csu",
    title: "Campus Peregrines",
    place: "Charles Sturt University, Orange, Australia",
    tz: "Australia/Sydney",
    cat: "birds",
    tags: ["peregrine", "falcon", "falcons", "nest", "chicks"],
    yt: "yv2RtoIMNzA",
    tone: "#c9d6e8",
    blurb: "A famous peregrine falcon family nesting on a university tower. Chicks hatch around October."
  },
  {
    id: "ospreys-port-lincoln",
    title: "Seaside Ospreys",
    place: "Port Lincoln, South Australia",
    tz: "Australia/Adelaide",
    cat: "birds",
    tags: ["osprey", "ospreys", "nest", "ocean", "chicks"],
    yt: "5SQd6QkBbc0",
    tone: "#e8dcc6",
    blurb: "Ospreys nesting on a barge by the sea, bringing in fish for their chicks."
  },
  {
    id: "sharks-vienna-aquazoo",
    title: "Vienna Shark Aquarium",
    place: "Vienna, Austria",
    tz: "Europe/Vienna",
    cat: "ocean",
    tags: ["shark", "sharks", "fish", "aquarium", "underwater"],
    yt: "5W3j79XsPOk",
    tone: "#d6e4cc",
    blurb: "Sharks and colorful fish sharing a big underwater tank."
  },
  {
    id: "goats-ontario",
    title: "Lakeside Goats",
    place: "Georgian Bluffs, Ontario",
    tz: "America/Toronto",
    cat: "cuddly",
    tags: ["goat", "goats", "farm", "lake", "pasture"],
    yt: "gHnLiseAFcU",
    tone: "#bcd3e6",
    blurb: "Bouncy goats grazing and leaping around a lakeside pasture."
  },
  {
    id: "guinea-pigs-bakkeveen",
    title: "Guinea Pig Village",
    place: "Cavia Foundation, Bakkeveen, Netherlands",
    tz: "Europe/Amsterdam",
    cat: "cuddly",
    tags: ["guinea pig", "guinea pigs", "rescue", "small pets"],
    yt: "sJneaURbVu4",
    tone: "#d9c7e8",
    blurb: "Rescued guinea pigs munching, popcorning and squeaking in their village."
  },
  {
    id: "backyard-ohio",
    title: "Backyard Feeders",
    place: "Ohio",
    tz: "America/New_York",
    cat: "birds",
    tags: ["feeder", "bird", "birds", "squirrel", "rabbit", "backyard"],
    yt: "QhxCVRJrVHs",
    tone: "#bfd8c8",
    blurb: "Backyard feeders that draw songbirds, squirrels and the odd rabbit."
  },
  {
    id: "kestrels-ramat-hanadiv",
    title: "Lesser Kestrel Nest",
    place: "Ramat Hanadiv, Israel",
    tz: "Asia/Jerusalem",
    cat: "birds",
    tags: ["kestrel", "kestrels", "falcon", "nest"],
    yt: "ZiGVPn79Xm0",
    tone: "#f3cdb8",
    blurb: "Lesser kestrels, tiny falcons, nesting in a nature park."
  },
  {
    id: "sheep-texel-dunes",
    title: "Dune Sheep",
    place: "De Waddel farm, Texel, Netherlands",
    tz: "Europe/Amsterdam",
    cat: "cuddly",
    tags: ["sheep", "lamb", "lambs", "farm", "island"],
    yt: "uAFVMFWHAZU",
    tone: "#f6d58e",
    blurb: "Texel sheep grazing among the dunes of a Dutch island."
  },
  {
    id: "barn-owls-even-yehuda",
    title: "Even Yehuda Barn Owls",
    place: "Even Yehuda, Israel",
    tz: "Asia/Jerusalem",
    cat: "birds",
    tags: ["owl", "owls", "barn owl", "nest", "night", "nocturnal"],
    yt: "FefBhyyUo60",
    tone: "#c9d6e8",
    blurb: "Another barn owl nest box, busiest after sunset."
  },
  {
    id: "hula-valley-birds",
    title: "Wetland Birds",
    place: "Hula Valley, Israel",
    tz: "Asia/Jerusalem",
    cat: "birds",
    tags: ["owl", "kestrel", "myna", "wetland", "migration"],
    yt: "h4OHj17aPck",
    tone: "#e8dcc6",
    blurb: "A wetland perch visited by barn owls, kestrels and mynas."
  },
  {
    id: "de-gavers-hide",
    title: "Bird Hide",
    place: "De Gavers, Harelbeke, Belgium",
    tz: "Europe/Brussels",
    cat: "birds",
    tags: ["grebe", "duck", "ducks", "waterfowl", "lake", "wetland"],
    yt: "hiehEzucOYM",
    tone: "#d6e4cc",
    blurb: "A lakeside bird hide with grebes and ducks paddling past."
  },
  {
    id: "reef-predators-pacific",
    title: "Reef Predators",
    place: "Aquarium of the Pacific, Long Beach, California",
    tz: "America/Los_Angeles",
    cat: "ocean",
    tags: ["shark", "sharks", "eel", "ray", "reef", "aquarium"],
    yt: "kkYybcn5VoM",
    tone: "#bcd3e6",
    blurb: "Sharks, eels and rays prowling a tropical reef tank."
  },
  {
    id: "griffon-vultures-israel",
    title: "Griffon Vulture Nest",
    place: "Judean Hills, Israel",
    tz: "Asia/Jerusalem",
    cat: "birds",
    tags: ["vulture", "vultures", "griffon", "nest", "cliff"],
    yt: "8mi2qdmUVmI",
    tone: "#d9c7e8",
    blurb: "Enormous griffon vultures nesting on a rocky cliff ledge."
  },
  {
    id: "donana-marshes",
    title: "Doñana Marshes",
    place: "Doñana National Park, Spain",
    tz: "Europe/Madrid",
    cat: "birds",
    tags: ["wetland", "flamingo", "birds", "deer", "marsh", "migration"],
    yt: "wq4JPwX5v2I",
    tone: "#bfd8c8",
    blurb: "One of Europe's great wetlands, a stopover for huge flocks of migrating birds."
  },
  {
    id: "peregrines-wakefield",
    title: "Cathedral Peregrines",
    place: "Wakefield Cathedral, England",
    tz: "Europe/London",
    cat: "birds",
    tags: ["peregrine", "falcon", "falcons", "nest", "city"],
    yt: "pIcc9WLm5as",
    tone: "#f3cdb8",
    blurb: "Peregrine falcons nesting high on a cathedral spire."
  },
  {
    id: "kitten-nursery-california",
    title: "Kitten Nursery",
    place: "Rescue nursery, California",
    tz: "America/Los_Angeles",
    cat: "cuddly",
    tags: ["kitten", "kittens", "cat", "cats", "rescue", "foster"],
    yt: "o8YhyLb__cI",
    tone: "#f6d58e",
    blurb: "Tiny rescue kittens being bottle-fed and cared for."
  },
  {
    id: "red-sea-reef-kaust",
    title: "Red Sea Reef",
    place: "KAUST, Red Sea coast, Saudi Arabia",
    tz: "Asia/Riyadh",
    cat: "ocean",
    tags: ["reef", "coral", "fish", "turtle", "underwater", "tropical"],
    yt: "ebb-esDdjVw",
    tone: "#c9d6e8",
    blurb: "A Red Sea coral reef with tropical fish and the occasional sea turtle."
  },
  {
    id: "reef-bergeggi",
    title: "Mediterranean Reef",
    place: "Pelagos Sanctuary, Bergeggi, Italy",
    tz: "Europe/Rome",
    cat: "ocean",
    tags: ["reef", "fish", "underwater", "sea", "mediterranean"],
    yt: "yhWvA-1LmDg",
    tone: "#e8dcc6",
    blurb: "An underwater view of fish weaving through a Mediterranean reef."
  },
  {
    id: "kestrels-berlin",
    title: "Berlin Kestrels",
    place: "Corbusierhaus, Berlin, Germany",
    tz: "Europe/Berlin",
    cat: "birds",
    tags: ["kestrel", "kestrels", "falcon", "nest", "city"],
    yt: "2DMOgZSmuMc",
    tone: "#d6e4cc",
    blurb: "Kestrels nesting on the side of a Berlin apartment tower."
  },
  {
    id: "garden-sheffield",
    title: "Garden Feeder",
    place: "Sheffield, England",
    tz: "Europe/London",
    cat: "birds",
    tags: ["feeder", "bird", "birds", "squirrel", "badger", "fox", "garden"],
    yt: "sJYcgL18FGQ",
    tone: "#bcd3e6",
    blurb: "An English garden feeder visited by birds by day and badgers and foxes by night."
  },
  {
    id: "eagles-catalina-west-end",
    title: "West End Eagles",
    place: "Catalina Island, California",
    tz: "America/Los_Angeles",
    cat: "birds",
    tags: ["eagle", "eagles", "bald eagle", "nest", "island"],
    yt: "kad6O4nF6bg",
    tone: "#d9c7e8",
    blurb: "A second bald eagle nest on Catalina, perched above the Pacific."
  },
  {
    id: "hula-lake",
    title: "Hula Lake Birds",
    place: "Hula Nature Reserve, Israel",
    tz: "Asia/Jerusalem",
    cat: "birds",
    tags: ["crane", "cranes", "pelican", "migration", "wetland", "lake"],
    yt: "3xlgKYolPY4",
    tone: "#bfd8c8",
    blurb: "A lake on one of the world's busiest bird migration routes."
  },
  {
    id: "masai-mara",
    title: "Masai Mara",
    place: "Narok, Kenya",
    tz: "Africa/Nairobi",
    cat: "safari",
    tags: ["cheetah", "elephant", "wildebeest", "savanna", "africa", "kenya"],
    yt: "xXZqU5vnEug",
    tone: "#f3cdb8",
    blurb: "The open plains of the Masai Mara, home to elephants, cheetahs and wildebeest."
  },
  {
    id: "booted-eagles-ports",
    title: "Booted Eagle Nest",
    place: "Els Ports Natural Park, Spain",
    tz: "Europe/Madrid",
    cat: "birds",
    tags: ["eagle", "eagles", "booted eagle", "nest", "mountains"],
    yt: "mzVXskxm-gQ",
    tone: "#f6d58e",
    blurb: "A pair of booted eagles nesting in Spanish mountain forest."
  },
  {
    id: "peregrines-oudenaarde",
    title: "Tower Peregrines",
    place: "Oudenaarde, Belgium",
    tz: "Europe/Brussels",
    cat: "birds",
    tags: ["peregrine", "falcon", "falcons", "nest", "tower"],
    yt: "nxf7jZWtAO8",
    tone: "#c9d6e8",
    blurb: "Peregrine falcons nesting on a historic Belgian church tower."
  },
  {
    id: "vultures-hai-bar",
    title: "Vulture Feeding Station",
    place: "Hai-Bar Carmel Reserve, Israel",
    tz: "Asia/Jerusalem",
    cat: "birds",
    tags: ["vulture", "vultures", "feeding", "raptor"],
    yt: "3Cq9kfMqXu4",
    tone: "#e8dcc6",
    blurb: "Vultures swooping in to a feeding station in a wildlife reserve."
  },
  {
    id: "storks-nowy-kamien",
    title: "Village Storks",
    place: "Nowy Kamień, Poland",
    tz: "Europe/Warsaw",
    cat: "birds",
    tags: ["stork", "storks", "nest", "village"],
    yt: "edyyxfirLZU",
    tone: "#d6e4cc",
    blurb: "A stork family nesting high above a Polish village."
  },
  {
    id: "lions-riga",
    title: "Riga Lions",
    place: "Riga Zoo, Latvia",
    tz: "Europe/Riga",
    cat: "zoo",
    tags: ["lion", "lions", "cubs", "big cat", "cat", "zoo"],
    yt: "-T1fw0_tKkM",
    tone: "#bcd3e6",
    blurb: "A pride of lions, sometimes with cubs, in their zoo home."
  },
  {
    id: "lambs-texel",
    title: "Lamb Barn",
    place: "Den Burg, Texel, Netherlands",
    tz: "Europe/Amsterdam",
    cat: "cuddly",
    tags: ["lamb", "lambs", "sheep", "barn", "farm"],
    yt: "MISnFBGyLYQ",
    tone: "#d9c7e8",
    blurb: "A cozy barn full of lambs, busiest in spring."
  },
  {
    id: "seals-ecomare",
    title: "Seal Sanctuary",
    place: "Ecomare, Texel, Netherlands",
    tz: "Europe/Amsterdam",
    cat: "ocean",
    tags: ["seal", "seals", "rescue", "pool"],
    yt: "6nQgzl3jXY4",
    tone: "#bfd8c8",
    blurb: "Rescued seals basking and splashing in a sanctuary pool."
  },
  {
    id: "golden-eagles-latvia",
    title: "Golden Eagle Nest",
    place: "Latvia",
    tz: "Europe/Riga",
    cat: "birds",
    tags: ["eagle", "eagles", "golden eagle", "nest", "forest"],
    yt: "sYBI8iRZbQU",
    tone: "#f3cdb8",
    blurb: "Golden eagles tending a huge nest deep in the Latvian forest."
  },
  {
    id: "sharks-budapest",
    title: "Budapest Sharks",
    place: "Budapest Zoo, Hungary",
    tz: "Europe/Budapest",
    cat: "ocean",
    tags: ["shark", "sharks", "aquarium", "fish"],
    yt: "bo6yE8iIpNE",
    tone: "#f6d58e",
    blurb: "Sharks and reef fish in the Budapest Zoo aquarium."
  },
  {
    id: "storks-bohuslavice",
    title: "Chimney Storks",
    place: "Bohuslavice, Czech Republic",
    tz: "Europe/Prague",
    cat: "birds",
    tags: ["stork", "storks", "nest", "chimney", "village"],
    yt: "ABJTbc2tOc4",
    tone: "#c9d6e8",
    blurb: "Storks nesting on top of an old village chimney."
  },
  {
    id: "donkeys-ipswich",
    title: "Donkey Barn",
    place: "Goldy's Farm, Ipswich, Massachusetts",
    tz: "America/New_York",
    cat: "cuddly",
    tags: ["donkey", "donkeys", "farm", "barn"],
    yt: "9fOxyCxpCDU",
    tone: "#e8dcc6",
    blurb: "Fuzzy donkeys hanging out in their barn."
  },
  {
    id: "black-storks-parnu",
    title: "Black Stork Nest",
    place: "Pärnu, Estonia",
    tz: "Europe/Tallinn",
    cat: "birds",
    tags: ["stork", "storks", "black stork", "nest", "forest"],
    yt: "4-v_C_lCdU0",
    tone: "#d6e4cc",
    blurb: "A rare black stork family nesting in the Estonian woods."
  },
  {
    id: "penguins-pacific",
    title: "Penguin Habitat",
    place: "Aquarium of the Pacific, Long Beach, California",
    tz: "America/Los_Angeles",
    cat: "ocean",
    tags: ["penguin", "penguins", "aquarium", "swim"],
    yt: "eXfpXKP6qVE",
    tone: "#bcd3e6",
    blurb: "Magellanic penguins swimming, diving and waddling about."
  },
  {
    id: "goshawks-riga",
    title: "Goshawk Nest",
    place: "Riga, Latvia",
    tz: "Europe/Riga",
    cat: "birds",
    tags: ["goshawk", "hawk", "raptor", "nest", "forest"],
    yt: "Culkof-YIcw",
    tone: "#d9c7e8",
    blurb: "Northern goshawks raising chicks in a forest nest."
  },
  {
    id: "plains-kenya",
    title: "Kenyan Plains",
    place: "Laikipia, Kenya",
    tz: "Africa/Nairobi",
    cat: "safari",
    tags: ["zebra", "zebras", "giraffe", "giraffes", "savanna", "africa", "kenya"],
    yt: "O8xVFhgEv6Q",
    tone: "#bfd8c8",
    blurb: "Zebras and giraffes wandering across the Kenyan savanna."
  },
  {
    id: "seals-budapest",
    title: "Budapest Seals",
    place: "Budapest Zoo, Hungary",
    tz: "Europe/Budapest",
    cat: "zoo",
    tags: ["seal", "seals", "pool", "zoo"],
    yt: "KwiMj0VvQpg",
    tone: "#f3cdb8",
    blurb: "Seals swimming laps and lounging around their pool."
  },
  {
    id: "storks-makov",
    title: "Rescue Stork Nest",
    place: "Makov Animal Rescue, Czech Republic",
    tz: "Europe/Prague",
    cat: "birds",
    tags: ["stork", "storks", "nest", "rescue"],
    yt: "S46DdA8Mc4I",
    tone: "#f6d58e",
    blurb: "Storks nesting at an animal rescue center in South Bohemia."
  },
  {
    id: "storks-lindheim",
    title: "Lindheim Storks",
    place: "Altenstadt, Germany",
    tz: "Europe/Berlin",
    cat: "birds",
    tags: ["stork", "storks", "nest", "chicks"],
    yt: "JhajwzEv1Fo",
    tone: "#c9d6e8",
    blurb: "A German stork nest, full of chicks in early summer."
  },
  {
    id: "eagles-duke-farms",
    title: "Duke Farms Eagles",
    place: "Duke Farms, Hillsborough, New Jersey",
    tz: "America/New_York",
    cat: "birds",
    tags: ["eagle", "eagles", "bald eagle", "nest", "chicks"],
    yt: "w_j90TWXti0",
    tone: "#e8dcc6",
    blurb: "A long-running bald eagle nest in New Jersey. Eggs usually arrive in February."
  },
  {
    id: "fish-wall-cape-marina",
    title: "Fish Wall",
    place: "Cape Marina, Port Canaveral, Florida",
    tz: "America/New_York",
    cat: "ocean",
    tags: ["fish", "underwater", "marina", "manatee"],
    yt: "gVRuXGw8p8A",
    tone: "#d6e4cc",
    blurb: "An underwater camera on a marina wall where fish swarm the pilings."
  },
  {
    id: "elephants-budapest",
    title: "Budapest Elephants",
    place: "Budapest Zoo, Hungary",
    tz: "Europe/Budapest",
    cat: "zoo",
    tags: ["elephant", "elephants", "zoo"],
    yt: "UEFEjZHxNh8",
    tone: "#bcd3e6",
    blurb: "Elephants wandering, dusting and playing in their zoo home."
  },
  {
    id: "eagles-big-bear",
    title: "Big Bear Eagles",
    place: "Big Bear Lake, California",
    tz: "America/Los_Angeles",
    cat: "birds",
    tags: ["eagle", "eagles", "bald eagle", "nest", "snow", "mountains"],
    yt: "B4-L2nfGcuE",
    tone: "#d9c7e8",
    blurb: "Jackie and Shadow's famous bald eagle nest in the San Bernardino Mountains."
  },
  {
    id: "lynx-sierra-morena",
    title: "Iberian Lynx",
    place: "Sierra Morena, Andújar, Spain",
    tz: "Europe/Madrid",
    cat: "safari",
    tags: ["lynx", "cat", "big cat", "wild cat", "endangered", "mountains"],
    yt: "RQ0oJke2fg8",
    tone: "#bfd8c8",
    blurb: "A rare chance to spot the endangered Iberian lynx in the wild."
  },
  {
    id: "penguin-beach-pacific",
    title: "Penguin Beach",
    place: "Aquarium of the Pacific, Long Beach, California",
    tz: "America/Los_Angeles",
    cat: "ocean",
    tags: ["penguin", "penguins", "beach", "aquarium"],
    yt: "ULoT2kODKlY",
    tone: "#f3cdb8",
    blurb: "Penguins waddling across their beach and diving into the pool."
  },
  {
    id: "storks-kirchzarten",
    title: "Treetop Storks",
    place: "Kirchzarten, Germany",
    tz: "Europe/Berlin",
    cat: "birds",
    tags: ["stork", "storks", "nest", "tree"],
    yt: "RNKg_XD84UM",
    tone: "#f6d58e",
    blurb: "A stork nest perched in the treetops of the Black Forest valley."
  },
  {
    id: "hummingbirds-simi",
    title: "Hummingbird Feeder",
    place: "Simi Valley, California",
    tz: "America/Los_Angeles",
    cat: "birds",
    tags: ["hummingbird", "hummingbirds", "feeder", "backyard"],
    yt: "pXe8MpU7uzk",
    tone: "#c9d6e8",
    blurb: "Hummingbirds zipping in and out of a backyard feeder."
  },
  {
    id: "kittens-connecticut",
    title: "Kitten Playroom",
    place: "Connecticut",
    tz: "America/New_York",
    cat: "cuddly",
    tags: ["kitten", "kittens", "cat", "cats", "play"],
    yt: "r3YdBqqDLQk",
    tone: "#e8dcc6",
    blurb: "Young kittens tumbling, pouncing and napping in a playroom."
  },
  {
    id: "bears-libearty",
    title: "Bear Sanctuary",
    place: "Libearty Bear Sanctuary, Zărnești, Romania",
    tz: "Europe/Bucharest",
    cat: "safari",
    tags: ["bear", "bears", "brown bear", "rescue", "sanctuary", "forest"],
    yt: "V3aTpIxIGDg",
    tone: "#d6e4cc",
    blurb: "Rescued brown bears roaming forest enclosures at Europe's largest bear sanctuary."
  },
  {
    id: "kittens-kitkat",
    title: "KitKat Kitten Room",
    place: "New Jersey",
    tz: "America/New_York",
    cat: "cuddly",
    tags: ["kitten", "kittens", "cat", "cats", "play"],
    yt: "VXBkOnop1-o",
    tone: "#bcd3e6",
    blurb: "A playroom of named kittens with big personalities."
  },
  {
    id: "woodland-pantry-maine",
    title: "Woodland Pantry",
    place: "Brownville, Maine",
    tz: "America/New_York",
    cat: "safari",
    tags: ["deer", "feeder", "birds", "woods", "forest", "snow"],
    yt: "47dcM4M16Ic",
    tone: "#d9c7e8",
    blurb: "A North Woods feeder where birds drop by and deer come to visit."
  },
  {
    id: "alpacas-marthas-vineyard",
    title: "Alpaca Pasture",
    place: "Martha's Vineyard, Massachusetts",
    tz: "America/New_York",
    cat: "cuddly",
    tags: ["alpaca", "alpacas", "farm", "pasture"],
    yt: "a_WjWhIsVVU",
    tone: "#bfd8c8",
    blurb: "Fluffy alpacas grazing in island pastures."
  },
  {
    id: "tigers-turpentine-creek",
    title: "Tiger Refuge",
    place: "Turpentine Creek, Eureka Springs, Arkansas",
    tz: "America/Chicago",
    cat: "zoo",
    tags: ["tiger", "tigers", "big cat", "cat", "rescue", "sanctuary"],
    yt: "PcAOecvAh1U",
    tone: "#f3cdb8",
    blurb: "Rescued tigers lounging in their habitat at a big cat refuge."
  },
  {
    id: "storks-reussenkoege",
    title: "Marsh Storks",
    place: "Reußenköge, Germany",
    tz: "Europe/Berlin",
    cat: "birds",
    tags: ["stork", "storks", "nest", "marsh", "coast"],
    yt: "XndXbnjdth0",
    tone: "#f6d58e",
    blurb: "White storks nesting on the windswept North Sea marshes."
  },
  {
    id: "elk-refuge-jackson",
    title: "Elk Refuge",
    place: "National Elk Refuge, Jackson Hole, Wyoming",
    tz: "America/Denver",
    cat: "safari",
    tags: ["elk", "herd", "snow", "mountains", "wyoming"],
    yt: "_2rvoH5oDcg",
    tone: "#c9d6e8",
    blurb: "Thousands of elk gather here each winter below the Tetons."
  },
  {
    id: "polar-bears-kansas-city",
    title: "Kansas City Polar Bears",
    place: "Kansas City Zoo, Missouri",
    tz: "America/Chicago",
    cat: "zoo",
    tags: ["polar bear", "polar bears", "bear", "bears", "zoo", "swim"],
    yt: "BSUnBPvX9K4",
    tone: "#e8dcc6",
    blurb: "Polar bears swimming and playing in their pool."
  },
  {
    id: "feeder-sierra-norte",
    title: "Mountain Bird Feeder",
    place: "Sierra Norte, Ávila, Spain",
    tz: "Europe/Madrid",
    cat: "birds",
    tags: ["feeder", "bird", "birds", "mountains"],
    yt: "FmBaEiG_KR8",
    tone: "#d6e4cc",
    blurb: "A mountain feeder that attracts colorful Spanish songbirds."
  },
  {
    id: "puppies-ecad",
    title: "Service Dog Puppies",
    place: "ECAD, Winchester, Connecticut",
    tz: "America/New_York",
    cat: "cuddly",
    tags: ["puppy", "puppies", "dog", "dogs", "service dog"],
    yt: "Xx8fMrU8d6E",
    tone: "#bcd3e6",
    blurb: "Newborn puppies who will grow up to be service dogs."
  },
  {
    id: "squirrels-dc",
    title: "Baby Squirrel Nest",
    place: "Washington, DC",
    tz: "America/New_York",
    cat: "cuddly",
    tags: ["squirrel", "squirrels", "baby", "nest", "tree"],
    yt: "6Gf23W0fUb4",
    tone: "#d9c7e8",
    blurb: "Baby squirrels snuggled in a nest high in a city tree."
  },
  {
    id: "alligators-st-augustine",
    title: "Alligator Swamp",
    place: "St. Augustine Alligator Farm, Florida",
    tz: "America/New_York",
    cat: "zoo",
    tags: ["alligator", "alligators", "spoonbill", "swamp", "reptile"],
    yt: "M4P_GzA6H80",
    tone: "#bfd8c8",
    blurb: "Alligators lurking below while roseate spoonbills nest above."
  },
  {
    id: "polar-bears-alaska",
    title: "Alaska Polar Bears",
    place: "Alaska Zoo, Anchorage",
    tz: "America/Anchorage",
    cat: "zoo",
    tags: ["polar bear", "polar bears", "bear", "bears", "zoo", "snow"],
    yt: "hWbt2eVCEe8",
    tone: "#f3cdb8",
    blurb: "Polar bears roaming and swimming at the Alaska Zoo."
  },
  {
    id: "fruit-feeder-panama",
    title: "Jungle Fruit Feeder",
    place: "Canopy Lodge, El Valle, Panama",
    tz: "America/Panama",
    cat: "birds",
    tags: ["feeder", "toucan", "tanager", "tropical", "jungle", "bird", "birds"],
    yt: "VfFfS64rtZE",
    tone: "#f6d58e",
    blurb: "A rainforest fruit feeder that brings in toucans and bright tanagers."
  },
  {
    id: "ospreys-charlo",
    title: "Montana Ospreys",
    place: "Charlo, Montana",
    tz: "America/Denver",
    cat: "birds",
    tags: ["osprey", "ospreys", "nest", "chicks"],
    yt: "gYkci0rH8Ac",
    tone: "#c9d6e8",
    blurb: "An osprey family nesting in western Montana. Busy from April to August."
  },
  {
    id: "giraffes-animal-adventure",
    title: "Giraffe Barn",
    place: "Animal Adventure Park, Harpursville, New York",
    tz: "America/New_York",
    cat: "zoo",
    tags: ["giraffe", "giraffes", "zoo", "barn"],
    yt: "Be9T8zdidS8",
    tone: "#e8dcc6",
    blurb: "The giraffe family made famous by April the giraffe."
  },
  {
    id: "eagles-kenai",
    title: "Kenai Eagles",
    place: "Kenai Peninsula, Alaska",
    tz: "America/Anchorage",
    cat: "birds",
    tags: ["eagle", "eagles", "bald eagle", "nest", "alaska"],
    yt: "yHCBdLHfg5E",
    tone: "#d6e4cc",
    blurb: "Bald eagles nesting on Alaska's Kenai Peninsula."
  },
  {
    id: "sheep-farm-sanctuary",
    title: "Sanctuary Sheep",
    place: "Farm Sanctuary, Watkins Glen, New York",
    tz: "America/New_York",
    cat: "cuddly",
    tags: ["sheep", "farm", "sanctuary", "rescue", "barn"],
    yt: "SnHke968zAA",
    tone: "#bcd3e6",
    blurb: "Rescued sheep snoozing and socializing in their barn."
  },
  {
    id: "feeder-gettysburg",
    title: "Gettysburg Feeder",
    place: "Gettysburg, Pennsylvania",
    tz: "America/New_York",
    cat: "birds",
    tags: ["feeder", "bird", "birds", "finch", "woodpecker", "hawk"],
    yt: "X1b271kOSfA",
    tone: "#d9c7e8",
    blurb: "A feeder visited by more than 30 kinds of birds, and the occasional hawk."
  },
  {
    id: "ospreys-hog-island",
    title: "Hog Island Ospreys",
    place: "Hog Island, Maine",
    tz: "America/New_York",
    cat: "birds",
    tags: ["osprey", "ospreys", "nest", "ocean", "chicks"],
    yt: "O6Ir_sMsTtc",
    tone: "#bfd8c8",
    blurb: "Audubon's famous osprey nest on the Maine coast. Back each spring."
  },
  {
    id: "feeder-carolina",
    title: "Carolina Feeder",
    place: "Southeastern North Carolina",
    tz: "America/New_York",
    cat: "birds",
    tags: ["feeder", "bird", "birds", "cardinal", "finch"],
    yt: "Hu0zIGBCOsI",
    tone: "#f3cdb8",
    blurb: "Cardinals, finches and friends at a Carolina feeder."
  },
  {
    id: "wolves-ely",
    title: "Wolf Pack",
    place: "International Wolf Center, Ely, Minnesota",
    tz: "America/Chicago",
    cat: "safari",
    tags: ["wolf", "wolves", "forest", "snow", "pack"],
    yt: "DRxYSIoBusQ",
    tone: "#f6d58e",
    blurb: "A pack of gray wolves in the northern Minnesota woods."
  },
  {
    id: "eagles-decorah",
    title: "Decorah Eagles",
    place: "Decorah, Iowa",
    tz: "America/Chicago",
    cat: "birds",
    tags: ["eagle", "eagles", "bald eagle", "nest", "chicks"],
    yt: "IVmL3diwJuw",
    tone: "#c9d6e8",
    blurb: "One of the most-watched bald eagle nests in the world."
  },
  {
    id: "foals-montesano",
    title: "Foaling Stall",
    place: "Little Hooves farm, Montesano, Washington",
    tz: "America/Los_Angeles",
    cat: "cuddly",
    tags: ["horse", "horses", "pony", "ponies", "foal", "farm"],
    yt: "MbTK1XpyMog",
    tone: "#e8dcc6",
    blurb: "Mini horses and ponies in a foaling stall, where spring brings new foals."
  },
  {
    id: "hedgehog-feeder-recke",
    title: "Hedgehog Feeder",
    place: "Recke, Germany",
    tz: "Europe/Berlin",
    cat: "cuddly",
    tags: ["hedgehog", "hedgehogs", "feeder", "birds", "night", "garden"],
    yt: "4kRzwJXaeIM",
    tone: "#d6e4cc",
    blurb: "Songbirds by day and hedgehogs by night at a German garden feeder."
  },
  {
    id: "cats-ohio-feline-rescue",
    title: "Cat Sanctuary",
    place: "Ohio Feline Rescue",
    tz: "America/New_York",
    cat: "cuddly",
    tags: ["cat", "cats", "rescue", "sanctuary"],
    yt: "kikFDudufQs",
    tone: "#bcd3e6",
    blurb: "Rescued cats napping, playing and waiting for adoption."
  },
  {
    id: "eagles-danube-ipoly",
    title: "White-tailed Eagles",
    place: "Danube-Ipoly National Park, Hungary",
    tz: "Europe/Budapest",
    cat: "birds",
    tags: ["eagle", "eagles", "white-tailed eagle", "nest", "river"],
    yt: "A_UkLH4zyZU",
    tone: "#d9c7e8",
    blurb: "Huge white-tailed eagles raising chicks near the Danube."
  },
  {
    id: "ospreys-rutland",
    title: "Rutland Ospreys",
    place: "Manton Bay, Rutland Water, England",
    tz: "Europe/London",
    cat: "birds",
    tags: ["osprey", "ospreys", "nest", "lake"],
    yt: "zxN8Sb_xHp0",
    tone: "#bfd8c8",
    blurb: "England's best-known osprey nest, overlooking Rutland Water. Spring to late summer."
  },
  {
    id: "storks-suwalki",
    title: "Suwałki Storks",
    place: "Suwałki Landscape Park, Poland",
    tz: "Europe/Warsaw",
    cat: "birds",
    tags: ["stork", "storks", "nest", "countryside"],
    yt: "7zEW-SvzliM",
    tone: "#f3cdb8",
    blurb: "Storks nesting in the green hills of northeastern Poland."
  },
  {
    id: "pigs-ruhr",
    title: "Riverside Pigs",
    place: "Ruhr valley, Essen, Germany",
    tz: "Europe/Berlin",
    cat: "cuddly",
    tags: ["pig", "pigs", "farm", "river"],
    yt: "xfI9EyFRidU",
    tone: "#f6d58e",
    blurb: "Free-range pigs rooting and wallowing by the river."
  },
  {
    id: "storks-fulltofta",
    title: "Fulltofta Storks",
    place: "Hörby, Sweden",
    tz: "Europe/Stockholm",
    cat: "birds",
    tags: ["stork", "storks", "nest", "sweden"],
    yt: "paLJSse35_k",
    tone: "#c9d6e8",
    blurb: "Storks building nests and raising young in southern Sweden."
  },
  {
    id: "storks-madrigal",
    title: "Tower Storks",
    place: "Madrigal de las Altas Torres, Spain",
    tz: "Europe/Madrid",
    cat: "birds",
    tags: ["stork", "storks", "nest", "tower", "village"],
    yt: "m2Jtoigg-PY",
    tone: "#e8dcc6",
    blurb: "White storks nesting on medieval towers in a Spanish village."
  },
  {
    id: "ospreys-spean-bridge",
    title: "Highland Ospreys",
    place: "Spean Bridge, Scotland",
    tz: "Europe/London",
    cat: "birds",
    tags: ["osprey", "ospreys", "nest", "forest", "scotland"],
    yt: "--l_qKzu2kE",
    tone: "#d6e4cc",
    blurb: "Ospreys nesting in an ancient Caledonian pine forest."
  },
  {
    id: "feeders-cornell",
    title: "Cornell Feeders",
    place: "Sapsucker Woods, Ithaca, New York",
    tz: "America/New_York",
    cat: "birds",
    tags: ["feeder", "bird", "birds", "cardinal", "finch", "woodpecker", "cornell"],
    yt: "x10vL6_47Dw",
    tone: "#bcd3e6",
    blurb: "The Cornell Lab of Ornithology's famous feeders, busy all year."
  },
  {
    id: "chickens-kipster",
    title: "Chicken Farm",
    place: "Kipster farm, Indiana",
    tz: "America/Indiana/Indianapolis",
    cat: "cuddly",
    tags: ["chicken", "chickens", "hen", "hens", "farm"],
    yt: "87c8UTQacO4",
    tone: "#d9c7e8",
    blurb: "Hens scratching, dust-bathing and gossiping on a free-range farm."
  },
  {
    id: "deer-nordfjord",
    title: "Fjord Deer Meadow",
    place: "Bryggja, Norway",
    tz: "Europe/Oslo",
    cat: "safari",
    tags: ["deer", "meadow", "fjord", "norway"],
    yt: "0fTmFyQCxqc",
    tone: "#bfd8c8",
    blurb: "Red deer grazing a meadow by a Norwegian fjord, mostly at dawn and dusk."
  }
];
