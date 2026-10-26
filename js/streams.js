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
    id: "cranes-rowe", title: "Sandhill Cranes", place: "Rowe Sanctuary, Nebraska",
    tz: "America/Chicago", cat: "birds", tags: ["crane", "cranes", "river", "migration", "sandhill"],
    yt: "wDYrRVUPWRo", tone: "#e8dcc6",
    blurb: "The Platte River, where hundreds of thousands of cranes gather each March on their way north."
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
  }
];
