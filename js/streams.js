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
    "id": "barn-owl-jezreel",
    "title": "Barn Owl Nest",
    "place": "Jezreel Valley, Israel",
    "tz": "Asia/Jerusalem",
    "cat": "birds",
    "tags": [
      "owl",
      "owls",
      "nest",
      "night",
      "nocturnal",
      "chicks"
    ],
    "yt": "u_4FJ4M7gGE",
    "channelId": "UCzbydNAcB7jeJGssRFb_dCA",
    "tone": "#d9c7e8",
    "blurb": "A barn owl nest box in farm country, where owls are welcome pest control. Busiest after dark.",
    "ytTitle": "LIVE Barn Owl/Pigeon Israel Cam 2| תנשמת | The Charter Group of Wildlife Ecology"
  },
  {
    "id": "owl-forest-taiwan",
    "title": "Owl Forest",
    "place": "Hutoushan, Taoyuan, Taiwan",
    "tz": "Asia/Taipei",
    "cat": "birds",
    "tags": [
      "owl",
      "owls",
      "forest",
      "night",
      "nocturnal"
    ],
    "yt": "yQSmajHyMhU",
    "channelId": "UCARB8y6PuoOBjZXJKIG-LDw",
    "tone": "#c9d6e8",
    "blurb": "A quiet patch of forest watched over by resident owls.",
    "ytTitle": "Hutoushan Owl Forest School Live Cam 虎頭山奧爾森林學堂即時影像"
  },
  {
    "id": "bald-eagle-catalina",
    "title": "Bald Eagle Nest",
    "place": "Two Harbors, Catalina Island, CA",
    "tz": "America/Los_Angeles",
    "cat": "birds",
    "tags": [
      "eagle",
      "eagles",
      "raptor",
      "nest",
      "island",
      "ocean view"
    ],
    "yt": "E5T2eHM8tcI",
    "channelId": "UC8NnosPOvXnm0O1u5YnLQiw",
    "tone": "#f3cdb8",
    "blurb": "A cliffside eagle nest high above the Pacific. Chicks hatch in spring.",
    "ytTitle": "Two Harbors Bald Eagle Cam powered by EXPLORE.org"
  },
  {
    "id": "albatross-taiaroa",
    "title": "Royal Albatross Nest",
    "place": "Taiaroa Head, New Zealand",
    "tz": "Pacific/Auckland",
    "cat": "birds",
    "tags": [
      "albatross",
      "seabird",
      "nest",
      "chick",
      "ocean"
    ],
    "yt": "J7HO0dkkomE",
    "channelId": "UCZXZQxS3d6NpR-eH_gdDwYA",
    "tone": "#cfe0d6",
    "blurb": "The only mainland royal albatross colony in the world. One fluffy chick, raised over most of a year.",
    "ytTitle": "Hellgate Ospreys Nest Cam | Cornell Lab | University of Montana"
  },
  {
    "id": "aviary-monterey",
    "title": "Shorebird Aviary",
    "place": "Monterey Bay Aquarium, California",
    "tz": "America/Los_Angeles",
    "cat": "birds",
    "tags": [
      "shorebird",
      "stilt",
      "plover",
      "sandpiper",
      "oystercatcher",
      "turnstone",
      "phalarope",
      "sandy shore",
      "aviary",
      "aquarium",
      "beach",
      "crane"
    ],
    "yt": "AWJi0LgyA28",
    "channelId": "UCnM5iMGiKsZg-iOlIO2ZkdQ",
    "tone": "#e8dcc6",
    "blurb": "The Sandy Shore & Aviary exhibit: rescued shorebirds like black-necked stilts and western snowy plovers, wading and splashing up close. Live during aquarium hours; after closing it plays a recording.",
    "ytTitle": "Live Aviary Cam | Monterey Bay Aquarium"
  },
  {
    "id": "feeder-nuuksio",
    "title": "Forest Feeder",
    "place": "Nuuksio National Park, Finland",
    "tz": "Europe/Helsinki",
    "cat": "birds",
    "tags": [
      "feeder",
      "songbird",
      "tit",
      "forest",
      "squirrel",
      "snow"
    ],
    "yt": "JWta8Urznhw",
    "channelId": "UC-bEmTUibiby67vliNPscBA",
    "tone": "#d6e4cc",
    "blurb": "A Finnish forest feeder that draws tits, woodpeckers, jays and the occasional squirrel.",
    "ytTitle": "Meanwhile in Nuuksio Forest - live - Nyt Nuuksiossa - with binaural sound 🎧"
  },
  {
    "id": "penguins-calacademy",
    "title": "African Penguins",
    "place": "California Academy of Sciences, San Francisco",
    "tz": "America/Los_Angeles",
    "cat": "zoo",
    "tags": [
      "penguin",
      "penguins",
      "aquarium",
      "swim"
    ],
    "yt": "bV4EiHr53ek",
    "channelId": "UCZvXaNYIcapCEcaJe_2cP7A",
    "tone": "#c9e0ec",
    "blurb": "A busy colony of African penguins waddling, swimming and squabbling over the best rocks.",
    "ytTitle": "Live Penguin Cam (Colony View) | California Academy of Sciences"
  },
  {
    "id": "blue-penguins-oamaru",
    "title": "Little Blue Penguins",
    "place": "Oamaru, New Zealand",
    "tz": "Pacific/Auckland",
    "cat": "ocean",
    "tags": [
      "penguin",
      "penguins",
      "little",
      "blue",
      "colony",
      "night"
    ],
    "yt": "Vf0i2uv4c58",
    "channelId": "UCSlIi8WXERrJUce_les6V6w",
    "tone": "#bcd3e6",
    "blurb": "The world's smallest penguins. They come ashore in rafts just after dusk.",
    "ytTitle": "Otago Shag Colony , Sumpter Wharf Ōamaru"
  },
  {
    "id": "reef-steinhart",
    "title": "Coral Reef",
    "place": "Steinhart Aquarium, San Francisco",
    "tz": "America/Los_Angeles",
    "cat": "ocean",
    "tags": [
      "reef",
      "coral",
      "fish",
      "aquarium",
      "underwater",
      "colorful"
    ],
    "yt": "je7nCiZhEJE",
    "channelId": "UCZvXaNYIcapCEcaJe_2cP7A",
    "tone": "#f6d58e",
    "blurb": "A living Philippine coral reef, full of bright fish drifting past.",
    "ytTitle": "Live Coral Reef Cam | California Academy of Sciences"
  },
  {
    "id": "moon-jellies",
    "title": "Moon Jellies",
    "place": "Monterey Bay, California",
    "tz": "America/Los_Angeles",
    "cat": "ocean",
    "tags": [
      "jelly",
      "jellies",
      "jellyfish",
      "aquarium",
      "underwater",
      "calm",
      "relaxing"
    ],
    "yt": "zL68biE6wAs",
    "channelId": "UCnM5iMGiKsZg-iOlIO2ZkdQ",
    "tone": "#d9c7e8",
    "blurb": "Translucent moon jellies pulsing slowly through blue water. Very calming.",
    "ytTitle": "Live Moon Jelly Cam | Monterey Bay Aquarium"
  },
  {
    "id": "sea-nettles",
    "title": "Sea Nettle Jellies",
    "place": "Aquarium cam, California",
    "tz": "America/Los_Angeles",
    "cat": "ocean",
    "tags": [
      "jelly",
      "jellies",
      "jellyfish",
      "nettle",
      "aquarium",
      "underwater",
      "calm"
    ],
    "yt": "uWiJ9qCYxoo",
    "channelId": "UCSyg9cb3Iq-NtlbxqNB9wGw",
    "tone": "#f3cdb8",
    "blurb": "Golden Pacific sea nettles trailing long ribbony tentacles.",
    "ytTitle": "Silver Springs 180 Degree Underwater Manatee Cam powered by EXPLORE.org"
  },
  {
    "id": "jelly-drift",
    "title": "Jellyfish Drift",
    "place": "Monterey Bay, California",
    "tz": "America/Los_Angeles",
    "cat": "ocean",
    "tags": [
      "jelly",
      "jellies",
      "jellyfish",
      "aquarium",
      "underwater",
      "calm"
    ],
    "yt": "eQ_foBERmzA",
    "channelId": "UCnM5iMGiKsZg-iOlIO2ZkdQ",
    "tone": "#c9d6e8",
    "blurb": "Another dreamy jelly tank for when one isn't enough.",
    "ytTitle": "Live Jelly Cam | Monterey Bay Aquarium"
  },
  {
    "id": "orcas-bc",
    "title": "Orca Rubbing Beach",
    "place": "Knight Inlet, British Columbia",
    "tz": "America/Vancouver",
    "cat": "ocean",
    "tags": [
      "orca",
      "orcas",
      "whale",
      "whales",
      "killer whale",
      "underwater"
    ],
    "yt": "vwCXZeswQKY",
    "channelId": "UCSyg9cb3Iq-NtlbxqNB9wGw",
    "tone": "#bcd3e6",
    "blurb": "An underwater cam on a pebble beach where orcas come to rub their bellies. Mostly summer and fall.",
    "ytTitle": "Strider Rubbing Beach - Underwater powered by EXPLORE.org",
    "retired": "2026-10-27"
  },
  {
    "id": "otters-calvert",
    "title": "River Otters",
    "place": "Calvert Marine Museum, Maryland",
    "tz": "America/New_York",
    "cat": "cuddly",
    "tags": [
      "otter",
      "otters",
      "river",
      "swim",
      "play"
    ],
    "yt": "zIvtJ05k-bI",
    "channelId": "UCHd0t7pYsO2BaTnJEGndRpQ",
    "tone": "#bfd8c8",
    "blurb": "Playful river otters splashing, napping in piles and begging for snacks.",
    "ytTitle": "Otter Outdoor Cam"
  },
  {
    "id": "seals-pieterburen",
    "title": "Seal Rescue Pool",
    "place": "Pieterburen, Netherlands",
    "tz": "Europe/Amsterdam",
    "cat": "ocean",
    "tags": [
      "seal",
      "seals",
      "pup",
      "rescue",
      "rehab"
    ],
    "yt": "aXAsMcmtJTc",
    "channelId": "UCaqwCONkIsKkpMK2UlU_B4g",
    "tone": "#ebe2d2",
    "blurb": "Young seals recovering at a rescue center before heading back to the Wadden Sea.",
    "ytTitle": "Seals live | Phase 3 @ WEC Lauwersoog, Netherlands (Stichting Zeehondencentrum Pieterburen)"
  },
  {
    "id": "pandas-chengdu",
    "title": "Giant Pandas",
    "place": "Chengdu Panda Base, China",
    "tz": "Asia/Shanghai",
    "cat": "cuddly",
    "tags": [
      "panda",
      "pandas",
      "bear",
      "bamboo",
      "zoo"
    ],
    "yt": "gnEuhfyZPPQ",
    "channelId": "UCtEgLf0_j1vJLz0aNEdO2SQ",
    "tone": "#e6e1d8",
    "blurb": "Pandas munching bamboo, tumbling off logs and sleeping in trees.",
    "ytTitle": "Panda 24/7 HD Live At Chengdu Panda Base",
    "retired": "2026-10-27"
  },
  {
    "id": "pandas-gengda",
    "title": "Panda Valley",
    "place": "Gengda Valley, Wolong, China",
    "tz": "Asia/Shanghai",
    "cat": "cuddly",
    "tags": [
      "panda",
      "pandas",
      "bear",
      "mountain",
      "bamboo"
    ],
    "yt": "vu7I315gQpU",
    "channelId": "UC2Sk0aXLq3ADkH_USGPKT_Q",
    "tone": "#d6e4cc",
    "blurb": "A wilder panda enclosure in the misty mountains of Sichuan.",
    "ytTitle": "LIVE Underwater Salmon Cam - Katmai National Park, Alaska | explore.org"
  },
  {
    "id": "capybaras-taronga",
    "title": "Capybaras",
    "place": "Taronga Zoo, Sydney",
    "tz": "Australia/Sydney",
    "cat": "cuddly",
    "tags": [
      "capybara",
      "capybaras",
      "rodent",
      "chill",
      "zoo"
    ],
    "yt": "RzasUXCTStM",
    "channelId": "UCB4RSGRBhM670UlcG-oCxeA",
    "tone": "#f3cdb8",
    "blurb": "The world's most relaxed rodents, doing very little, very well.",
    "ytTitle": "Capybara Live stream"
  },
  {
    "id": "giraffes-melbourne",
    "title": "Giraffes",
    "place": "Melbourne Zoo, Australia",
    "tz": "Australia/Melbourne",
    "cat": "zoo",
    "tags": [
      "giraffe",
      "giraffes",
      "zoo",
      "safari"
    ],
    "yt": "hNexlUkTTuc",
    "channelId": "UCS9UBqaUtoIXUhX0J1BnxwQ",
    "tone": "#f6d58e",
    "blurb": "Tall friends browsing, strolling and peering over the fence.",
    "ytTitle": "Giraffe Cam"
  },
  {
    "id": "lions-werribee",
    "title": "Lions",
    "place": "Werribee Open Range Zoo, Australia",
    "tz": "Australia/Melbourne",
    "cat": "zoo",
    "tags": [
      "lion",
      "lions",
      "big cat",
      "cat",
      "savanna",
      "safari"
    ],
    "yt": "gTz_7tKUfYM",
    "channelId": "UCS9UBqaUtoIXUhX0J1BnxwQ",
    "tone": "#e8dcc6",
    "blurb": "A pride lounging on open grassland. Expect lots of napping.",
    "ytTitle": "Lion cam at Werribee Open Range Zoo"
  },
  {
    "id": "waterhole-mpala",
    "title": "Savanna Waterhole",
    "place": "Mpala, Kenya",
    "tz": "Africa/Nairobi",
    "cat": "safari",
    "tags": [
      "waterhole",
      "elephant",
      "zebra",
      "giraffe",
      "antelope",
      "africa",
      "savanna"
    ],
    "yt": "-7GOA9KIWcs",
    "channelId": "UCiGOIXjFqy5_mUNxQNOMfHw",
    "tone": "#f3cdb8",
    "blurb": "A Kenyan waterhole where elephants, zebras, giraffes and more stop for a drink.",
    "ytTitle": "LIVE Main Crossing: Masai Mara Great Migration River Crossing - Africam | explore.org"
  },
  {
    "id": "explore-africa",
    "title": "Africa Wildlife Cam",
    "place": "Southern Africa · explore.org",
    "tz": "Africa/Johannesburg",
    "cat": "safari",
    "tags": [
      "africa",
      "elephant",
      "rhino",
      "lion",
      "waterhole",
      "safari",
      "explore"
    ],
    "channel": "UCiGOIXjFqy5_mUNxQNOMfHw",
    "tone": "#e8dcc6",
    "blurb": "explore.org's main African wildlife stream, at a waterhole or river depending on the season."
  },
  {
    "id": "monkeys-awaji",
    "title": "Monkey Center",
    "place": "Awaji Island, Japan",
    "tz": "Asia/Tokyo",
    "cat": "zoo",
    "tags": [
      "monkey",
      "monkeys",
      "macaque",
      "primate",
      "japan"
    ],
    "yt": "lsxYH2XQQCg",
    "channelId": "UCujrqnm0oqm_cF3AV1128Sw",
    "tone": "#bfd8c8",
    "blurb": "A troop of Japanese macaques grooming, squabbling and sunbathing.",
    "ytTitle": "淡路島モンキーセンター"
  },
  {
    "id": "foxes-dublin",
    "title": "Urban Red Foxes",
    "place": "Dublin, Ireland",
    "tz": "Europe/Dublin",
    "cat": "cuddly",
    "tags": [
      "fox",
      "foxes",
      "garden",
      "night",
      "city"
    ],
    "yt": "wbfdBrITU7Y",
    "channelId": "UCTkfwW5CMZjlx2R4_iCAZ_w",
    "tone": "#f3cdb8",
    "blurb": "City foxes visiting a Dublin garden, mostly at dawn and dusk.",
    "ytTitle": "Foxheaven Dublin Ireland Livestream"
  },
  {
    "id": "kittens-langley",
    "title": "Kitten Rescue",
    "place": "Fort Langley, British Columbia",
    "tz": "America/Vancouver",
    "cat": "cuddly",
    "tags": [
      "kitten",
      "kittens",
      "cat",
      "cats",
      "rescue",
      "foster"
    ],
    "yt": "tbuRTSnDUS8",
    "channelId": "UCeL2LSl91k2VccR7XEh5IKg",
    "tone": "#d9c7e8",
    "blurb": "A foster room full of tiny rescue kittens. Maximum cuteness, minimal sleep.",
    "ytTitle": "LIVE INTAKE: New kitten who needs our help! 🐾🙀"
  },
  {
    "id": "shark-lagoon-calacademy",
    "title": "Shark Lagoon",
    "place": "California Academy of Sciences, San Francisco",
    "tz": "America/Los_Angeles",
    "cat": "ocean",
    "tags": [
      "shark",
      "sharks",
      "ray",
      "rays",
      "reef",
      "aquarium",
      "fish"
    ],
    "yt": "eFak1bHw6Us",
    "channelId": "UCZvXaNYIcapCEcaJe_2cP7A",
    "tone": "#d9c7e8",
    "blurb": "Sharks and rays cruise over a reef in the academy's lagoon tank.",
    "ytTitle": "Live Penguin Cam (Underwater View) | California Academy of Sciences"
  },
  {
    "id": "spider-crabs-monterey",
    "title": "Giant Spider Crabs",
    "place": "Monterey Bay Aquarium, California",
    "tz": "America/Los_Angeles",
    "cat": "ocean",
    "tags": [
      "crab",
      "crabs",
      "spider crab",
      "aquarium",
      "underwater"
    ],
    "yt": "dzmJXWmA2EM",
    "channelId": "UCnM5iMGiKsZg-iOlIO2ZkdQ",
    "tone": "#bfd8c8",
    "blurb": "Leggy Japanese spider crabs, the biggest crabs on Earth, creeping across the sea floor.",
    "ytTitle": "Live Spider Crab Cam | Monterey Bay Aquarium"
  },
  {
    "id": "farm-sanctuary-wisconsin",
    "title": "Sanctuary Pasture",
    "place": "Farm sanctuary, Wisconsin",
    "tz": "America/Chicago",
    "cat": "cuddly",
    "tags": [
      "farm",
      "sanctuary",
      "rescue",
      "cow",
      "cows",
      "pasture"
    ],
    "yt": "dqcCOYtHtes",
    "channelId": "UCMWAvusUV2eeVVHZDKiMKrw",
    "tone": "#f3cdb8",
    "blurb": "Rescued farm animals grazing and lazing in a Wisconsin pasture.",
    "ytTitle": "Wisconsin Pasture Cam at Farm Sanctuary powered by EXPLORE.org"
  },
  {
    "id": "sharks-haus-des-meeres",
    "title": "Shark Tank",
    "place": "Haus des Meeres, Vienna, Austria",
    "tz": "Europe/Vienna",
    "cat": "ocean",
    "tags": [
      "shark",
      "sharks",
      "fish",
      "aquarium",
      "tropical"
    ],
    "yt": "lin8TLZfuks",
    "channelId": "UCzK4mZybYjXr6kiPcSNwWJg",
    "tone": "#f6d58e",
    "blurb": "Sharks glide among schools of tropical fish in a Vienna aquarium.",
    "ytTitle": "Haus des Meeres Aqua Terra Zoo: Dachkamera Nord"
  },
  {
    "id": "ash-wood-yorkshire",
    "title": "Woodland Wildlife",
    "place": "Ash Wood, Malton, England",
    "tz": "Europe/London",
    "cat": "safari",
    "tags": [
      "owl",
      "tawny owl",
      "kestrel",
      "buzzard",
      "badger",
      "woodland",
      "forest"
    ],
    "yt": "bnQloTGd3OY",
    "channelId": "UCU0LJ9et5Tb3m7COFzShgLg",
    "tone": "#c9d6e8",
    "blurb": "A Yorkshire wood visited by tawny owls, kestrels, buzzards and badgers.",
    "ytTitle": "🔴 LIVE Tawny Owls, Kestrels , Buzzards, Badgers & More | From Ash Wood, Yorkshire, UK"
  },
  {
    "id": "sharks-monterey",
    "title": "Monterey Shark Tank",
    "place": "Monterey Bay Aquarium, California",
    "tz": "America/Los_Angeles",
    "cat": "ocean",
    "tags": [
      "shark",
      "sharks",
      "fish",
      "aquarium",
      "underwater"
    ],
    "yt": "tEtg5Kg3voQ",
    "channelId": "UCnM5iMGiKsZg-iOlIO2ZkdQ",
    "tone": "#e8dcc6",
    "blurb": "Sharks circling with big schools of silvery fish.",
    "ytTitle": "Live Shark Cam | Monterey Bay Aquarium"
  },
  {
    "id": "shark-lagoon-pacific",
    "title": "Pacific Shark Lagoon",
    "place": "Aquarium of the Pacific, Long Beach, California",
    "tz": "America/Los_Angeles",
    "cat": "ocean",
    "tags": [
      "shark",
      "sharks",
      "aquarium",
      "underwater"
    ],
    "yt": "BLvr4K2eiRE",
    "channelId": "UCSyg9cb3Iq-NtlbxqNB9wGw",
    "tone": "#d6e4cc",
    "blurb": "A deep lagoon full of sharks gliding past the glass.",
    "ytTitle": "Shark Lagoon Cam powered by EXPLORE.org",
    "retired": "2026-10-27"
  },
  {
    "id": "trevor-zoo-pond",
    "title": "Zoo Pond",
    "place": "Trevor Zoo, Millbrook, New York",
    "tz": "America/New_York",
    "cat": "zoo",
    "tags": [
      "duck",
      "ducks",
      "pond",
      "fish",
      "zoo"
    ],
    "yt": "yidNBEOdQUY",
    "channelId": "UCQv8IYkfj8RAPDHGHivaQIA",
    "tone": "#bcd3e6",
    "blurb": "Ducks paddle the pond while fish drift below and zoo animals wander by.",
    "ytTitle": "Trevor-Lovejoy Zoo Red Wolf Den LIVE"
  },
  {
    "id": "storks-brenz-castle",
    "title": "Castle Storks",
    "place": "Brenz Castle, Sontheim, Germany",
    "tz": "Europe/Berlin",
    "cat": "birds",
    "tags": [
      "stork",
      "storks",
      "nest",
      "castle"
    ],
    "yt": "PrBoZJIW2pI",
    "channelId": "UCEF-HLhcmsuYPGm7AJYridA",
    "tone": "#d9c7e8",
    "blurb": "White storks raising a family on top of an old castle.",
    "ytTitle": "Storchencam Brenzer Schloß",
    "retired": "2026-10-27"
  },
  {
    "id": "parrots-yorkshire",
    "title": "Parrot Aviary",
    "place": "Yorkshire Parrot Aviary, Ripon, England",
    "tz": "Europe/London",
    "cat": "birds",
    "tags": [
      "parrot",
      "parrots",
      "macaw",
      "aviary",
      "colorful"
    ],
    "yt": "SvFLoSuhSVI",
    "channelId": "UCt1u19k2n2IsNUHXVr9Dofg",
    "tone": "#bfd8c8",
    "blurb": "A noisy, colorful flock of parrots chattering and feeding.",
    "ytTitle": "Live bird feeder cam",
    "retired": "2026-10-27"
  },
  {
    "id": "reef-pennekamp",
    "title": "Florida Keys Reef",
    "place": "John Pennekamp Coral Reef State Park, Florida",
    "tz": "America/New_York",
    "cat": "ocean",
    "tags": [
      "reef",
      "coral",
      "fish",
      "underwater",
      "tropical"
    ],
    "yt": "3knAgXMh-Ig",
    "channelId": "UCQKoiVCXARDS_dZauT-BwlA",
    "tone": "#f3cdb8",
    "blurb": "A real coral reef off Key Largo, busy with tropical fish.",
    "ytTitle": "Friends of John Pennekamp Coral Cam",
    "retired": "2026-10-27"
  },
  {
    "id": "tarpon-robbies",
    "title": "Tarpon Feeding Dock",
    "place": "Robbie's Marina, Islamorada, Florida",
    "tz": "America/New_York",
    "cat": "ocean",
    "tags": [
      "tarpon",
      "fish",
      "dock",
      "pelican"
    ],
    "yt": "zfSst64NFcE",
    "channelId": "UC87uKTXV7je0G6h3eUqMaNQ",
    "tone": "#f6d58e",
    "blurb": "Huge silver tarpon crowd the dock, waiting for snacks.",
    "ytTitle": "Tarpon Feeding Dock at Robbie's Marina in Islamorada - LIVE"
  },
  {
    "id": "peregrines-csu",
    "title": "Campus Peregrines",
    "place": "Charles Sturt University, Orange, Australia",
    "tz": "Australia/Sydney",
    "cat": "birds",
    "tags": [
      "peregrine",
      "falcon",
      "falcons",
      "nest",
      "chicks"
    ],
    "yt": "gnF7_gRHHMQ",
    "channelId": "UCNMulUCdUibAMPnaR1e0kEw",
    "tone": "#c9d6e8",
    "blurb": "A famous peregrine falcon family nesting on a university tower. Chicks hatch around October.",
    "ytTitle": "Box Camera - FalconCam Project LIVE"
  },
  {
    "id": "ospreys-port-lincoln",
    "title": "Seaside Ospreys",
    "place": "Port Lincoln, South Australia",
    "tz": "Australia/Adelaide",
    "cat": "birds",
    "tags": [
      "osprey",
      "ospreys",
      "nest",
      "ocean",
      "chicks"
    ],
    "yt": "_gIf6CYeDG8",
    "channelId": "UCK_BLeXdJeHqA1SlC79CruQ",
    "tone": "#e8dcc6",
    "blurb": "Ospreys nesting on a barge by the sea, bringing in fish for their chicks.",
    "ytTitle": "Port Lincoln Osprey Live Stream WIDE"
  },
  {
    "id": "sharks-vienna-aquazoo",
    "title": "Vienna Shark Aquarium",
    "place": "Vienna, Austria",
    "tz": "Europe/Vienna",
    "cat": "ocean",
    "tags": [
      "shark",
      "sharks",
      "fish",
      "aquarium",
      "underwater"
    ],
    "yt": "GelCrPQeUtg",
    "channelId": "UCzK4mZybYjXr6kiPcSNwWJg",
    "tone": "#d6e4cc",
    "blurb": "Sharks and colorful fish sharing a big underwater tank.",
    "ytTitle": "Haus des Meeres Aqua Terra Zoo: Dachkamera West"
  },
  {
    "id": "goats-ontario",
    "title": "Lakeside Goats",
    "place": "Georgian Bluffs, Ontario",
    "tz": "America/Toronto",
    "cat": "cuddly",
    "tags": [
      "goat",
      "goats",
      "farm",
      "lake",
      "pasture"
    ],
    "yt": "DDhbzuQpSsY",
    "channelId": "UCPresk6FCncOSvqZIq3iLgA",
    "tone": "#bcd3e6",
    "blurb": "Bouncy goats grazing and leaping around a lakeside pasture.",
    "ytTitle": "Live Goats - Syman Says Farms Cam 3"
  },
  {
    "id": "guinea-pigs-bakkeveen",
    "title": "Guinea Pig Village",
    "place": "Cavia Foundation, Bakkeveen, Netherlands",
    "tz": "Europe/Amsterdam",
    "cat": "cuddly",
    "tags": [
      "guinea pig",
      "guinea pigs",
      "rescue",
      "small pets"
    ],
    "yt": "sJneaURbVu4",
    "channelId": "UCMuBZXmPvGSgN_xAQz3iFQA",
    "tone": "#d9c7e8",
    "blurb": "Rescued guinea pigs munching, popcorning and squeaking in their village.",
    "ytTitle": "Cavia Cam",
    "retired": "2026-10-27"
  },
  {
    "id": "backyard-ohio",
    "title": "Backyard Feeders",
    "place": "Ohio",
    "tz": "America/New_York",
    "cat": "birds",
    "tags": [
      "feeder",
      "bird",
      "birds",
      "squirrel",
      "rabbit",
      "backyard"
    ],
    "yt": "b6-zNf3BGy0",
    "channelId": "UCuL60_Ko4m9xCaa4QDNgJrw",
    "tone": "#bfd8c8",
    "blurb": "Backyard feeders that draw songbirds, squirrels and the odd rabbit.",
    "ytTitle": "🔴 LIVE Backyard Wildlife in Ohio (Birds, Squirrels, Rabbits)"
  },
  {
    "id": "kestrels-ramat-hanadiv",
    "title": "Lesser Kestrel Nest",
    "place": "Ramat Hanadiv, Israel",
    "tz": "Asia/Jerusalem",
    "cat": "birds",
    "tags": [
      "kestrel",
      "kestrels",
      "falcon",
      "nest"
    ],
    "yt": "MeKqyV8Hpn4",
    "channelId": "UCzbydNAcB7jeJGssRFb_dCA",
    "tone": "#f3cdb8",
    "blurb": "Lesser kestrels, tiny falcons, nesting in a nature park.",
    "ytTitle": "6 Live Birdcams | One Stream • Real Wildlife 24/7 – Charter Group Birdcams"
  },
  {
    "id": "sheep-texel-dunes",
    "title": "Dune Sheep",
    "place": "De Waddel farm, Texel, Netherlands",
    "tz": "Europe/Amsterdam",
    "cat": "cuddly",
    "tags": [
      "sheep",
      "lamb",
      "lambs",
      "farm",
      "island"
    ],
    "yt": "uAFVMFWHAZU",
    "channelId": "UCne6b1whLLhDRJ-IXWNWZbQ",
    "tone": "#f6d58e",
    "blurb": "Texel sheep grazing among the dunes of a Dutch island.",
    "ytTitle": "Live Webcam Texel: Hogeberg | Landschap & Schapen (Livecam Landschaft & Schafe)",
    "retired": "2026-10-27"
  },
  {
    "id": "barn-owls-even-yehuda",
    "title": "Even Yehuda Barn Owls",
    "place": "Even Yehuda, Israel",
    "tz": "Asia/Jerusalem",
    "cat": "birds",
    "tags": [
      "owl",
      "owls",
      "barn owl",
      "nest",
      "night",
      "nocturnal"
    ],
    "yt": "FefBhyyUo60",
    "channelId": "UCzbydNAcB7jeJGssRFb_dCA",
    "tone": "#c9d6e8",
    "blurb": "Another barn owl nest box, busiest after sunset.",
    "ytTitle": "LIVE Barn Owl/ Pigeon Israel 4K Cam 1| WBAIS GAIA |The Charter Group of Wildlife Ecology"
  },
  {
    "id": "hula-valley-birds",
    "title": "Wetland Birds",
    "place": "Hula Valley, Israel",
    "tz": "Asia/Jerusalem",
    "cat": "birds",
    "tags": [
      "owl",
      "kestrel",
      "myna",
      "wetland",
      "migration"
    ],
    "yt": "h4OHj17aPck",
    "channelId": "UCzbydNAcB7jeJGssRFb_dCA",
    "tone": "#e8dcc6",
    "blurb": "A wetland perch visited by barn owls, kestrels and mynas.",
    "ytTitle": "LIVE Pigeon/Kestrel/Barn Owl/Myna Israel Cam 4|תנשמות| The Charter Group of Wildlife Ecology",
    "retired": "2026-10-27"
  },
  {
    "id": "de-gavers-hide",
    "title": "Bird Hide",
    "place": "De Gavers, Harelbeke, Belgium",
    "tz": "Europe/Brussels",
    "cat": "birds",
    "tags": [
      "grebe",
      "duck",
      "ducks",
      "waterfowl",
      "lake",
      "wetland"
    ],
    "yt": "hiehEzucOYM",
    "channelId": "UCSCv53vrDR46L0K8OpHPa4A",
    "tone": "#d6e4cc",
    "blurb": "A lakeside bird hide with grebes and ducks paddling past.",
    "ytTitle": "Gavers: Kijkhut Fuut",
    "retired": "2026-10-27"
  },
  {
    "id": "reef-predators-pacific",
    "title": "Reef Predators",
    "place": "Aquarium of the Pacific, Long Beach, California",
    "tz": "America/Los_Angeles",
    "cat": "ocean",
    "tags": [
      "shark",
      "sharks",
      "eel",
      "ray",
      "reef",
      "aquarium"
    ],
    "yt": "kkYybcn5VoM",
    "channelId": "UCSyg9cb3Iq-NtlbxqNB9wGw",
    "tone": "#bcd3e6",
    "blurb": "Sharks, eels and rays prowling a tropical reef tank.",
    "ytTitle": "Coral Predators Cam powered by EXPLORE.org",
    "retired": "2026-10-27"
  },
  {
    "id": "griffon-vultures-israel",
    "title": "Griffon Vulture Nest",
    "place": "Judean Hills, Israel",
    "tz": "Asia/Jerusalem",
    "cat": "birds",
    "tags": [
      "vulture",
      "vultures",
      "griffon",
      "nest",
      "cliff"
    ],
    "yt": "8mi2qdmUVmI",
    "channelId": "UCzbydNAcB7jeJGssRFb_dCA",
    "tone": "#d9c7e8",
    "blurb": "Enormous griffon vultures nesting on a rocky cliff ledge.",
    "ytTitle": "LIVE Griffon Vulture Nest Israel CAM|Israel Nat. and Parks Auth|The Charter Group of Wild. Ecol.",
    "retired": "2026-10-27"
  },
  {
    "id": "donana-marshes",
    "title": "Doñana Marshes",
    "place": "Doñana National Park, Spain",
    "tz": "Europe/Madrid",
    "cat": "birds",
    "tags": [
      "wetland",
      "flamingo",
      "birds",
      "deer",
      "marsh",
      "migration"
    ],
    "yt": "wq4JPwX5v2I",
    "channelId": "UCg6OElsAGYmkuSySkZpaNGw",
    "tone": "#bfd8c8",
    "blurb": "One of Europe's great wetlands, a stopover for huge flocks of migrating birds.",
    "ytTitle": "Parque Nacional de Doñana (marisma), Andalucía; España",
    "retired": "2026-10-27"
  },
  {
    "id": "peregrines-wakefield",
    "title": "Cathedral Peregrines",
    "place": "Wakefield Cathedral, England",
    "tz": "Europe/London",
    "cat": "birds",
    "tags": [
      "peregrine",
      "falcon",
      "falcons",
      "nest",
      "city"
    ],
    "yt": "y2wUAK1yvQE",
    "channelId": "UCpVaKjo5ISas-o6Hiy-HVMg",
    "tone": "#f3cdb8",
    "blurb": "Peregrine falcons nesting high on a cathedral spire.",
    "ytTitle": "The Wakefield Peregrine Project - Live Spire Cam"
  },
  {
    "id": "kitten-nursery-california",
    "title": "Kitten Nursery",
    "place": "Rescue nursery, California",
    "tz": "America/Los_Angeles",
    "cat": "cuddly",
    "tags": [
      "kitten",
      "kittens",
      "cat",
      "cats",
      "rescue",
      "foster"
    ],
    "yt": "gBdqOuhj2P4",
    "channelId": "UC6B91hbZkdiDjWdu00QCcew",
    "tone": "#f6d58e",
    "blurb": "Tiny rescue kittens being bottle-fed and cared for.",
    "ytTitle": "Kitten Rescue - Baby Kittens Cam powered by EXPLORE.org"
  },
  {
    "id": "red-sea-reef-kaust",
    "title": "Red Sea Reef",
    "place": "KAUST, Red Sea coast, Saudi Arabia",
    "tz": "Asia/Riyadh",
    "cat": "ocean",
    "tags": [
      "reef",
      "coral",
      "fish",
      "turtle",
      "underwater",
      "tropical"
    ],
    "yt": "ebb-esDdjVw",
    "channelId": "UCEW8MTxM-IMSj1LF0lTsamw",
    "tone": "#c9d6e8",
    "blurb": "A Red Sea coral reef with tropical fish and the occasional sea turtle.",
    "ytTitle": "FISHKAM live from KAUST"
  },
  {
    "id": "reef-bergeggi",
    "title": "Mediterranean Reef",
    "place": "Pelagos Sanctuary, Bergeggi, Italy",
    "tz": "Europe/Rome",
    "cat": "ocean",
    "tags": [
      "reef",
      "fish",
      "underwater",
      "sea",
      "mediterranean"
    ],
    "yt": "JlP0LBP8jak",
    "channelId": "UCoKYxeDmpM4xm3om9X6Zgqg",
    "tone": "#e8dcc6",
    "blurb": "An underwater view of fish weaving through a Mediterranean reef.",
    "ytTitle": "AMP Isola Bergeggi Live Video"
  },
  {
    "id": "kestrels-berlin",
    "title": "Berlin Kestrels",
    "place": "Corbusierhaus, Berlin, Germany",
    "tz": "Europe/Berlin",
    "cat": "birds",
    "tags": [
      "kestrel",
      "kestrels",
      "falcon",
      "nest",
      "city"
    ],
    "yt": "2DMOgZSmuMc",
    "channelId": "UCR2CLso5tZOHwkFDXPuuKHw",
    "tone": "#d6e4cc",
    "blurb": "Kestrels nesting on the side of a Berlin apartment tower.",
    "ytTitle": "Live - Turmfalken - Webcam - Corbusierhaus - Berlin (außen)"
  },
  {
    "id": "garden-sheffield",
    "title": "Garden Feeder",
    "place": "Sheffield, England",
    "tz": "Europe/London",
    "cat": "birds",
    "tags": [
      "feeder",
      "bird",
      "birds",
      "squirrel",
      "badger",
      "fox",
      "garden"
    ],
    "yt": "sJYcgL18FGQ",
    "channelId": "UCJRCb1mgl8GkgCZSMIwQGYw",
    "tone": "#bcd3e6",
    "blurb": "An English garden feeder visited by birds by day and badgers and foxes by night.",
    "ytTitle": "Wildlife in a Garden in Sheffield. Stream now Finished 🧘🏻‍♂️🐦😊👋",
    "retired": "2026-10-27"
  },
  {
    "id": "eagles-catalina-west-end",
    "title": "West End Eagles",
    "place": "Catalina Island, California",
    "tz": "America/Los_Angeles",
    "cat": "birds",
    "tags": [
      "eagle",
      "eagles",
      "bald eagle",
      "nest",
      "island"
    ],
    "yt": "wDgZkzkOP-s",
    "channelId": "UCUtGnX65osNPQ98Y3-SSgpg",
    "tone": "#d9c7e8",
    "blurb": "A second bald eagle nest on Catalina, perched above the Pacific.",
    "ytTitle": "Mission Mountain Range powered by Explore.org"
  },
  {
    "id": "hula-lake",
    "title": "Hula Lake Birds",
    "place": "Hula Nature Reserve, Israel",
    "tz": "Asia/Jerusalem",
    "cat": "birds",
    "tags": [
      "crane",
      "cranes",
      "pelican",
      "migration",
      "wetland",
      "lake"
    ],
    "yt": "3xlgKYolPY4",
    "channelId": "UCzbydNAcB7jeJGssRFb_dCA",
    "tone": "#bfd8c8",
    "blurb": "A lake on one of the world's busiest bird migration routes.",
    "ytTitle": "LIVE Hula Nature Reserve Bird CAM 1|Israel Nature & Parks Auth.|Charter Group of Wildlife Ecology",
    "retired": "2026-10-27"
  },
  {
    "id": "masai-mara",
    "title": "Masai Mara",
    "place": "Narok, Kenya",
    "tz": "Africa/Nairobi",
    "cat": "safari",
    "tags": [
      "cheetah",
      "elephant",
      "wildebeest",
      "savanna",
      "africa",
      "kenya"
    ],
    "yt": "xXZqU5vnEug",
    "channelId": "UCpYmJpK_TSk8imQsZ8A9LNA",
    "tone": "#f3cdb8",
    "blurb": "The open plains of the Masai Mara, home to elephants, cheetahs and wildebeest.",
    "ytTitle": "LIVE Safari Webcam | Maasai Mara, Kenya | African Wildlife at Mara Bushtops"
  },
  {
    "id": "booted-eagles-ports",
    "title": "Booted Eagle Nest",
    "place": "Els Ports Natural Park, Spain",
    "tz": "Europe/Madrid",
    "cat": "birds",
    "tags": [
      "eagle",
      "eagles",
      "booted eagle",
      "nest",
      "mountains"
    ],
    "yt": "mzVXskxm-gQ",
    "channelId": "UCh46WRbfVTfCWoRFJgrcJYQ",
    "tone": "#f6d58e",
    "blurb": "A pair of booted eagles nesting in Spanish mountain forest.",
    "ytTitle": "Emissió en directe d'un niu d'àguila calçada al PN Ports.",
    "retired": "2026-10-27"
  },
  {
    "id": "peregrines-oudenaarde",
    "title": "Tower Peregrines",
    "place": "Oudenaarde, Belgium",
    "tz": "Europe/Brussels",
    "cat": "birds",
    "tags": [
      "peregrine",
      "falcon",
      "falcons",
      "nest",
      "tower"
    ],
    "yt": "nxf7jZWtAO8",
    "channelId": "UCPH1SsIWbdm59B0YVoqw8gQ",
    "tone": "#c9d6e8",
    "blurb": "Peregrine falcons nesting on a historic Belgian church tower.",
    "ytTitle": "Slechtvalken Oudenaarde Walburga overzicht"
  },
  {
    "id": "vultures-hai-bar",
    "title": "Vulture Feeding Station",
    "place": "Hai-Bar Carmel Reserve, Israel",
    "tz": "Asia/Jerusalem",
    "cat": "birds",
    "tags": [
      "vulture",
      "vultures",
      "feeding",
      "raptor"
    ],
    "yt": "3Cq9kfMqXu4",
    "channelId": "UCzbydNAcB7jeJGssRFb_dCA",
    "tone": "#e8dcc6",
    "blurb": "Vultures swooping in to a feeding station in a wildlife reserve.",
    "ytTitle": "LIVE Vulture Feeding Station CAM 1|Israel Nat. and Parks Auth.| Charter Group of Wildlife Ecol.",
    "retired": "2026-10-27"
  },
  {
    "id": "storks-nowy-kamien",
    "title": "Village Storks",
    "place": "Nowy Kamień, Poland",
    "tz": "Europe/Warsaw",
    "cat": "birds",
    "tags": [
      "stork",
      "storks",
      "nest",
      "village"
    ],
    "yt": "edyyxfirLZU",
    "channelId": "UCfcD4JE1-oe3t6o4aODXBEA",
    "tone": "#d6e4cc",
    "blurb": "A stork family nesting high above a Polish village.",
    "ytTitle": "Transmisja  z bocianiego gniazda w Nowym Kamieniu",
    "retired": "2026-10-27"
  },
  {
    "id": "lions-riga",
    "title": "Riga Lions",
    "place": "Riga Zoo, Latvia",
    "tz": "Europe/Riga",
    "cat": "zoo",
    "tags": [
      "lion",
      "lions",
      "cubs",
      "big cat",
      "cat",
      "zoo"
    ],
    "yt": "lbon7ER65L0",
    "channelId": "UCB-zCeE3hpdWcnVaZePAwFQ",
    "tone": "#bcd3e6",
    "blurb": "A pride of lions, sometimes with cubs, in their zoo home.",
    "ytTitle": "Rīgas Zoodārza lauvas"
  },
  {
    "id": "lambs-texel",
    "title": "Lamb Barn",
    "place": "Den Burg, Texel, Netherlands",
    "tz": "Europe/Amsterdam",
    "cat": "cuddly",
    "tags": [
      "lamb",
      "lambs",
      "sheep",
      "barn",
      "farm"
    ],
    "yt": "MISnFBGyLYQ",
    "channelId": "UCne6b1whLLhDRJ-IXWNWZbQ",
    "tone": "#d9c7e8",
    "blurb": "A cozy barn full of lambs, busiest in spring.",
    "ytTitle": "Live Webcam Texel: Schapenboerderij | Lammetjes in de Stal (Livecam Schafe & Lämmer)",
    "retired": "2026-10-27"
  },
  {
    "id": "seals-ecomare",
    "title": "Seal Sanctuary",
    "place": "Ecomare, Texel, Netherlands",
    "tz": "Europe/Amsterdam",
    "cat": "ocean",
    "tags": [
      "seal",
      "seals",
      "rescue",
      "pool"
    ],
    "yt": "6nQgzl3jXY4",
    "channelId": "UCne6b1whLLhDRJ-IXWNWZbQ",
    "tone": "#bfd8c8",
    "blurb": "Rescued seals basking and splashing in a sanctuary pool.",
    "ytTitle": "【4Kライブ】オランダ・エコマーレのかわいいアザラシ | 癒やしの定点カメラ"
  },
  {
    "id": "golden-eagles-latvia",
    "title": "Golden Eagle Nest",
    "place": "Latvia",
    "tz": "Europe/Riga",
    "cat": "birds",
    "tags": [
      "eagle",
      "eagles",
      "golden eagle",
      "nest",
      "forest"
    ],
    "yt": "UDulXGgIfQ8",
    "channelId": "UC8M9n-AqtbJm75xsKhWZk9w",
    "tone": "#f3cdb8",
    "blurb": "Golden eagles tending a huge nest deep in the Latvian forest.",
    "ytTitle": "LVM Klinšu ērglis - Golden Eagle"
  },
  {
    "id": "sharks-budapest",
    "title": "Budapest Sharks",
    "place": "Budapest Zoo, Hungary",
    "tz": "Europe/Budapest",
    "cat": "ocean",
    "tags": [
      "shark",
      "sharks",
      "aquarium",
      "fish"
    ],
    "yt": "bo6yE8iIpNE",
    "channelId": "UCzE4PjV4gHoDAsN6BXwsLQw",
    "tone": "#f6d58e",
    "blurb": "Sharks and reef fish in the Budapest Zoo aquarium.",
    "ytTitle": "Állatkert Budapest szívében - Cápasuli ÉLŐ"
  },
  {
    "id": "storks-bohuslavice",
    "title": "Chimney Storks",
    "place": "Bohuslavice, Czech Republic",
    "tz": "Europe/Prague",
    "cat": "birds",
    "tags": [
      "stork",
      "storks",
      "nest",
      "chimney",
      "village"
    ],
    "yt": "ABJTbc2tOc4",
    "channelId": "UCKBI6TjMyNmDuuJpXeDL-bg",
    "tone": "#c9d6e8",
    "blurb": "Storks nesting on top of an old village chimney.",
    "ytTitle": "Živě z čapího komína firmy KARA v Bohuslavicích u Trutnova"
  },
  {
    "id": "donkeys-ipswich",
    "title": "Donkey Barn",
    "place": "Goldy's Farm, Ipswich, Massachusetts",
    "tz": "America/New_York",
    "cat": "cuddly",
    "tags": [
      "donkey",
      "donkeys",
      "farm",
      "barn"
    ],
    "yt": "79DfDsVJ67U",
    "channelId": "UCGb_c0j3vHX1cJNYhhiAKYA",
    "tone": "#e8dcc6",
    "blurb": "Fuzzy donkeys hanging out in their barn.",
    "ytTitle": "Goldy's Farm Arena"
  },
  {
    "id": "black-storks-parnu",
    "title": "Black Stork Nest",
    "place": "Pärnu, Estonia",
    "tz": "Europe/Tallinn",
    "cat": "birds",
    "tags": [
      "stork",
      "storks",
      "black stork",
      "nest",
      "forest"
    ],
    "yt": "fN8mOsm4_Jw",
    "channelId": "UCCvBXTVqksM0wSaqd19N0Sg",
    "tone": "#d6e4cc",
    "blurb": "A rare black stork family nesting in the Estonian woods.",
    "ytTitle": "Must toonekurg 4"
  },
  {
    "id": "penguins-pacific",
    "title": "Penguin Habitat",
    "place": "Aquarium of the Pacific, Long Beach, California",
    "tz": "America/Los_Angeles",
    "cat": "ocean",
    "tags": [
      "penguin",
      "penguins",
      "aquarium",
      "swim"
    ],
    "yt": "wfuqjSNXZ14",
    "channelId": "UC8NnosPOvXnm0O1u5YnLQiw",
    "tone": "#bcd3e6",
    "blurb": "Magellanic penguins swimming, diving and waddling about.",
    "ytTitle": "West End Bald Eagle Nest Low Cam powered by EXPLORE.org"
  },
  {
    "id": "goshawks-riga",
    "title": "Goshawk Nest",
    "place": "Riga, Latvia",
    "tz": "Europe/Riga",
    "cat": "birds",
    "tags": [
      "goshawk",
      "hawk",
      "raptor",
      "nest",
      "forest"
    ],
    "yt": "Culkof-YIcw",
    "channelId": "UCIcQwgP2i-fEshMBclDJENw",
    "tone": "#d9c7e8",
    "blurb": "Northern goshawks raising chicks in a forest nest.",
    "ytTitle": "Vistu vanags 2",
    "retired": "2026-10-27"
  },
  {
    "id": "plains-kenya",
    "title": "Kenyan Plains",
    "place": "Laikipia, Kenya",
    "tz": "Africa/Nairobi",
    "cat": "safari",
    "tags": [
      "zebra",
      "zebras",
      "giraffe",
      "giraffes",
      "savanna",
      "africa",
      "kenya"
    ],
    "yt": "O8xVFhgEv6Q",
    "channelId": "UCiGOIXjFqy5_mUNxQNOMfHw",
    "tone": "#bfd8c8",
    "blurb": "Zebras and giraffes wandering across the Kenyan savanna.",
    "ytTitle": "African Animal Lookout  Camera powered by EXPLORE.org",
    "retired": "2026-10-27"
  },
  {
    "id": "seals-budapest",
    "title": "Budapest Seals",
    "place": "Budapest Zoo, Hungary",
    "tz": "Europe/Budapest",
    "cat": "zoo",
    "tags": [
      "seal",
      "seals",
      "pool",
      "zoo"
    ],
    "yt": "ZXwT563tbf4",
    "channelId": "UCzE4PjV4gHoDAsN6BXwsLQw",
    "tone": "#f3cdb8",
    "blurb": "Seals swimming laps and lounging around their pool.",
    "ytTitle": "Állatkert Budapest szívében - Fóka medence ÉLŐ"
  },
  {
    "id": "storks-makov",
    "title": "Rescue Stork Nest",
    "place": "Makov Animal Rescue, Czech Republic",
    "tz": "Europe/Prague",
    "cat": "birds",
    "tags": [
      "stork",
      "storks",
      "nest",
      "rescue"
    ],
    "yt": "S46DdA8Mc4I",
    "channelId": "UCFgH1S3UesjjQypQ-g5OB8Q",
    "tone": "#f6d58e",
    "blurb": "Storks nesting at an animal rescue center in South Bohemia.",
    "ytTitle": "Záchranná stanice živočichů Makov - hnízdění čápů"
  },
  {
    "id": "storks-lindheim",
    "title": "Lindheim Storks",
    "place": "Altenstadt, Germany",
    "tz": "Europe/Berlin",
    "cat": "birds",
    "tags": [
      "stork",
      "storks",
      "nest",
      "chicks"
    ],
    "yt": "JhajwzEv1Fo",
    "channelId": "UC-5KEb0CO0SvEDqGFcQscEA",
    "tone": "#c9d6e8",
    "blurb": "A German stork nest, full of chicks in early summer.",
    "ytTitle": "Storchennest Lindheim"
  },
  {
    "id": "eagles-duke-farms",
    "title": "Duke Farms Eagles",
    "place": "Duke Farms, Hillsborough, New Jersey",
    "tz": "America/New_York",
    "cat": "birds",
    "tags": [
      "eagle",
      "eagles",
      "bald eagle",
      "nest",
      "chicks"
    ],
    "yt": "TA6vV8bkhc8",
    "channelId": "UC53e-XZICuGPeFg63ozsieA",
    "tone": "#e8dcc6",
    "blurb": "A long-running bald eagle nest in New Jersey. Eggs usually arrive in February.",
    "ytTitle": "Duke Farms Eagle Cam"
  },
  {
    "id": "fish-wall-cape-marina",
    "title": "Fish Wall",
    "place": "Cape Marina, Port Canaveral, Florida",
    "tz": "America/New_York",
    "cat": "ocean",
    "tags": [
      "fish",
      "underwater",
      "marina",
      "manatee"
    ],
    "yt": "gVRuXGw8p8A",
    "channelId": "UCv3YkEJyYR5-RZ2BCugrodg",
    "tone": "#d6e4cc",
    "blurb": "An underwater camera on a marina wall where fish swarm the pilings.",
    "ytTitle": "Cape Marina - Live Fish Wall"
  },
  {
    "id": "elephants-budapest",
    "title": "Budapest Elephants",
    "place": "Budapest Zoo, Hungary",
    "tz": "Europe/Budapest",
    "cat": "zoo",
    "tags": [
      "elephant",
      "elephants",
      "zoo"
    ],
    "yt": "i3kmj2b8zkA",
    "channelId": "UCzE4PjV4gHoDAsN6BXwsLQw",
    "tone": "#bcd3e6",
    "blurb": "Elephants wandering, dusting and playing in their zoo home.",
    "ytTitle": "Állatkert Budapest szívében - Elefánt kifutó ÉLŐ"
  },
  {
    "id": "eagles-big-bear",
    "title": "Big Bear Eagles",
    "place": "Big Bear Lake, California",
    "tz": "America/Los_Angeles",
    "cat": "birds",
    "tags": [
      "eagle",
      "eagles",
      "bald eagle",
      "nest",
      "snow",
      "mountains"
    ],
    "yt": "B4-L2nfGcuE",
    "channelId": "UCsFgbVuhRrPV5FqyN7kOD8g",
    "tone": "#d9c7e8",
    "blurb": "Jackie and Shadow's famous bald eagle nest in the San Bernardino Mountains.",
    "ytTitle": "Big Bear Bald Eagle Live Nest - Cam 1"
  },
  {
    "id": "lynx-sierra-morena",
    "title": "Iberian Lynx",
    "place": "Sierra Morena, Andújar, Spain",
    "tz": "Europe/Madrid",
    "cat": "safari",
    "tags": [
      "lynx",
      "cat",
      "big cat",
      "wild cat",
      "endangered",
      "mountains"
    ],
    "yt": "ps-D-RJvPQ8",
    "channelId": "UCKqAJfYEVCPLbdgOm8QqSQg",
    "tone": "#bfd8c8",
    "blurb": "A rare chance to spot the endangered Iberian lynx in the wild.",
    "ytTitle": "Lince ibérico 🔴 DIRECTO Sierra Morena (Cámara 36 | Jaén)"
  },
  {
    "id": "penguin-beach-pacific",
    "title": "Penguin Beach",
    "place": "Aquarium of the Pacific, Long Beach, California",
    "tz": "America/Los_Angeles",
    "cat": "ocean",
    "tags": [
      "penguin",
      "penguins",
      "beach",
      "aquarium"
    ],
    "yt": "QoKy-rn66og",
    "channelId": "UC8NnosPOvXnm0O1u5YnLQiw",
    "tone": "#f3cdb8",
    "blurb": "Penguins waddling across their beach and diving into the pool.",
    "ytTitle": "Philippine Eagles Cam powered by EXPLORE.org"
  },
  {
    "id": "storks-kirchzarten",
    "title": "Treetop Storks",
    "place": "Kirchzarten, Germany",
    "tz": "Europe/Berlin",
    "cat": "birds",
    "tags": [
      "stork",
      "storks",
      "nest",
      "tree"
    ],
    "yt": "W2CicgFq5oo",
    "channelId": "UC7tC23i2En73AIIUjYWVQ-g",
    "tone": "#f6d58e",
    "blurb": "A stork nest perched in the treetops of the Black Forest valley.",
    "ytTitle": "Live Storchennest Kirchzarten: Jungstörche Mars, Saturn und Jupiter besendert | Webcam Schwarzwald"
  },
  {
    "id": "hummingbirds-simi",
    "title": "Hummingbird Feeder",
    "place": "Simi Valley, California",
    "tz": "America/Los_Angeles",
    "cat": "birds",
    "tags": [
      "hummingbird",
      "hummingbirds",
      "feeder",
      "backyard"
    ],
    "yt": "pXe8MpU7uzk",
    "channelId": "UCK9WO9hqKmaAccZqCgeOw4w",
    "tone": "#c9d6e8",
    "blurb": "Hummingbirds zipping in and out of a backyard feeder.",
    "ytTitle": "Live Hummingbird Feeder Cam, Bird Feeder, Simi Valley, California"
  },
  {
    "id": "kittens-connecticut",
    "title": "Kitten Playroom",
    "place": "Connecticut",
    "tz": "America/New_York",
    "cat": "cuddly",
    "tags": [
      "kitten",
      "kittens",
      "cat",
      "cats",
      "play"
    ],
    "yt": "r3YdBqqDLQk",
    "channelId": "UC83RKJs4eKHVE9v0YUyqzgg",
    "tone": "#e8dcc6",
    "blurb": "Young kittens tumbling, pouncing and napping in a playroom.",
    "ytTitle": "Kitten Academy Live Stream",
    "retired": "2026-10-27"
  },
  {
    "id": "bears-libearty",
    "title": "Bear Sanctuary",
    "place": "Libearty Bear Sanctuary, Zărnești, Romania",
    "tz": "Europe/Bucharest",
    "cat": "safari",
    "tags": [
      "bear",
      "bears",
      "brown bear",
      "rescue",
      "sanctuary",
      "forest"
    ],
    "yt": "V3aTpIxIGDg",
    "channelId": "UCNWeIMAJbSt1skNb0GSPn2A",
    "tone": "#d6e4cc",
    "blurb": "Rescued brown bears roaming forest enclosures at Europe's largest bear sanctuary.",
    "ytTitle": "Sanctuarul de ursi Libearty Zarnesti"
  },
  {
    "id": "kittens-kitkat",
    "title": "KitKat Kitten Room",
    "place": "New Jersey",
    "tz": "America/New_York",
    "cat": "cuddly",
    "tags": [
      "kitten",
      "kittens",
      "cat",
      "cats",
      "play"
    ],
    "yt": "cswFQYam8Ic",
    "channelId": "UCrNicqyCSAUuxSzUi6VChvw",
    "tone": "#bcd3e6",
    "blurb": "A playroom of named kittens with big personalities.",
    "ytTitle": "Kitkat Playroom LIVE: ⭐ Meet the Acronyms! Six wonderfully playful 7 week old kittens ⭐"
  },
  {
    "id": "woodland-pantry-maine",
    "title": "Woodland Pantry",
    "place": "Brownville, Maine",
    "tz": "America/New_York",
    "cat": "safari",
    "tags": [
      "deer",
      "feeder",
      "birds",
      "woods",
      "forest",
      "snow"
    ],
    "yt": "47dcM4M16Ic",
    "channelId": "UCdmPhiIJ-s7MJG2WtM7nbUw",
    "tone": "#d9c7e8",
    "blurb": "A North Woods feeder where birds drop by and deer come to visit.",
    "ytTitle": "Ryan's Bird Buffet at Brownville's Food Pantry For Deer"
  },
  {
    "id": "alpacas-marthas-vineyard",
    "title": "Alpaca Pasture",
    "place": "Martha's Vineyard, Massachusetts",
    "tz": "America/New_York",
    "cat": "cuddly",
    "tags": [
      "alpaca",
      "alpacas",
      "farm",
      "pasture"
    ],
    "yt": "a_WjWhIsVVU",
    "channelId": "UCGfre1YJATN850wNq-jzgEw",
    "tone": "#bfd8c8",
    "blurb": "Fluffy alpacas grazing in island pastures.",
    "ytTitle": "🟢 GOMV.COM Martha's Vineyard Alpaca Farm Live Webcam"
  },
  {
    "id": "tigers-turpentine-creek",
    "title": "Tiger Refuge",
    "place": "Turpentine Creek, Eureka Springs, Arkansas",
    "tz": "America/Chicago",
    "cat": "zoo",
    "tags": [
      "tiger",
      "tigers",
      "big cat",
      "cat",
      "rescue",
      "sanctuary"
    ],
    "yt": "PcAOecvAh1U",
    "channelId": "UC6B91hbZkdiDjWdu00QCcew",
    "tone": "#f3cdb8",
    "blurb": "Rescued tigers lounging in their habitat at a big cat refuge.",
    "ytTitle": "Max the Tiger Cam at Turpentine Creek powered by EXPLORE.org"
  },
  {
    "id": "storks-reussenkoege",
    "title": "Marsh Storks",
    "place": "Reußenköge, Germany",
    "tz": "Europe/Berlin",
    "cat": "birds",
    "tags": [
      "stork",
      "storks",
      "nest",
      "marsh",
      "coast"
    ],
    "yt": "XndXbnjdth0",
    "channelId": "UCDodnv0cfstAmZRszqa-Xnw",
    "tone": "#f6d58e",
    "blurb": "White storks nesting on the windswept North Sea marshes.",
    "ytTitle": "🔴 NABU Weißstorch-Webcam Hamburg",
    "retired": "2026-10-27"
  },
  {
    "id": "elk-refuge-jackson",
    "title": "Elk Refuge",
    "place": "National Elk Refuge, Jackson Hole, Wyoming",
    "tz": "America/Denver",
    "cat": "safari",
    "tags": [
      "elk",
      "herd",
      "snow",
      "mountains",
      "wyoming"
    ],
    "yt": "_2rvoH5oDcg",
    "channelId": "UCEpDjqeFIGTqHwk-uULx72Q",
    "tone": "#c9d6e8",
    "blurb": "Thousands of elk gather here each winter below the Tetons.",
    "ytTitle": "National Museum of Wildlife Art - Live Elk Refuge"
  },
  {
    "id": "polar-bears-kansas-city",
    "title": "Kansas City Polar Bears",
    "place": "Kansas City Zoo, Missouri",
    "tz": "America/Chicago",
    "cat": "zoo",
    "tags": [
      "polar bear",
      "polar bears",
      "bear",
      "bears",
      "zoo",
      "swim"
    ],
    "yt": "BSUnBPvX9K4",
    "channelId": "UC_pPFW2jn1pUT1O5D1m3brg",
    "tone": "#e8dcc6",
    "blurb": "Polar bears swimming and playing in their pool.",
    "ytTitle": "KC Zoo Polar Bear Cam"
  },
  {
    "id": "feeder-sierra-norte",
    "title": "Mountain Bird Feeder",
    "place": "Sierra Norte, Ávila, Spain",
    "tz": "Europe/Madrid",
    "cat": "birds",
    "tags": [
      "feeder",
      "bird",
      "birds",
      "mountains"
    ],
    "yt": "RMjn5B5X3xo",
    "channelId": "UCKqAJfYEVCPLbdgOm8QqSQg",
    "tone": "#d6e4cc",
    "blurb": "A mountain feeder that attracts colorful Spanish songbirds.",
    "ytTitle": "Aves de Segovia 🔴 DIRECTO (Cámara 91 | Acueducto de Segovia)"
  },
  {
    "id": "puppies-ecad",
    "title": "Service Dog Puppies",
    "place": "ECAD, Winchester, Connecticut",
    "tz": "America/New_York",
    "cat": "cuddly",
    "tags": [
      "puppy",
      "puppies",
      "dog",
      "dogs",
      "service dog"
    ],
    "yt": "Qeq2Kax0v64",
    "channelId": "UCfC0RcYzDQcFtHrce2mpvbA",
    "tone": "#bcd3e6",
    "blurb": "Newborn puppies who will grow up to be service dogs.",
    "ytTitle": "Full House Puppy Cam at Warrior Canine Connection powered by EXPLORE.org"
  },
  {
    "id": "squirrels-dc",
    "title": "Baby Squirrel Nest",
    "place": "Washington, DC",
    "tz": "America/New_York",
    "cat": "cuddly",
    "tags": [
      "squirrel",
      "squirrels",
      "baby",
      "nest",
      "tree"
    ],
    "yt": "Ml8go-qfGqg",
    "channelId": "UCgGmACGEil_QEVQOKOBPJrg",
    "tone": "#d9c7e8",
    "blurb": "Baby squirrels snuggled in a nest high in a city tree.",
    "ytTitle": "Replay of Lily and Jelly Bean - baby squirrel"
  },
  {
    "id": "alligators-st-augustine",
    "title": "Alligator Swamp",
    "place": "St. Augustine Alligator Farm, Florida",
    "tz": "America/New_York",
    "cat": "zoo",
    "tags": [
      "alligator",
      "alligators",
      "spoonbill",
      "swamp",
      "reptile"
    ],
    "yt": "OY4V_AppZ6s",
    "channelId": "UC8NnosPOvXnm0O1u5YnLQiw",
    "tone": "#bfd8c8",
    "blurb": "Alligators lurking below while roseate spoonbills nest above.",
    "ytTitle": "Fraser Point Bald Eagle Nest 2 powered by EXPLORE.org"
  },
  {
    "id": "polar-bears-alaska",
    "title": "Alaska Polar Bears",
    "place": "Alaska Zoo, Anchorage",
    "tz": "America/Anchorage",
    "cat": "zoo",
    "tags": [
      "polar bear",
      "polar bears",
      "bear",
      "bears",
      "zoo",
      "snow"
    ],
    "yt": "hWbt2eVCEe8",
    "channelId": "UC_k7L8TjlKqy_NQKta0OfTQ",
    "tone": "#f3cdb8",
    "blurb": "Polar bears roaming and swimming at the Alaska Zoo.",
    "ytTitle": "Alaska Zoo Polar Bear Habitat"
  },
  {
    "id": "fruit-feeder-panama",
    "title": "Jungle Fruit Feeder",
    "place": "Canopy Lodge, El Valle, Panama",
    "tz": "America/Panama",
    "cat": "birds",
    "tags": [
      "feeder",
      "toucan",
      "tanager",
      "tropical",
      "jungle",
      "bird",
      "birds"
    ],
    "yt": "aT1adgYSfbc",
    "channelId": "UC8NnosPOvXnm0O1u5YnLQiw",
    "tone": "#f6d58e",
    "blurb": "A rainforest fruit feeder that brings in toucans and bright tanagers.",
    "ytTitle": "LIVE West End Bald Eagle Nest Cam: Catalina Island - IWS | explore.org"
  },
  {
    "id": "ospreys-charlo",
    "title": "Montana Ospreys",
    "place": "Charlo, Montana",
    "tz": "America/Denver",
    "cat": "birds",
    "tags": [
      "osprey",
      "ospreys",
      "nest",
      "chicks"
    ],
    "yt": "_xhLV-TJpd8",
    "channelId": "UC8NnosPOvXnm0O1u5YnLQiw",
    "tone": "#c9d6e8",
    "blurb": "An osprey family nesting in western Montana. Busy from April to August.",
    "ytTitle": "LIVE Black Eagle Nest Cam: South Africa - Africam | explore.org"
  },
  {
    "id": "giraffes-animal-adventure",
    "title": "Giraffe Barn",
    "place": "Animal Adventure Park, Harpursville, New York",
    "tz": "America/New_York",
    "cat": "zoo",
    "tags": [
      "giraffe",
      "giraffes",
      "zoo",
      "barn"
    ],
    "yt": "oufxM2Rxh-0",
    "channelId": "UClnQCgFa9lCBL-KXZMOoO9Q",
    "tone": "#e8dcc6",
    "blurb": "The giraffe family made famous by April the giraffe.",
    "ytTitle": "Giraffe Deck Cam - Animal Adventure Park"
  },
  {
    "id": "eagles-kenai",
    "title": "Kenai Eagles",
    "place": "Kenai Peninsula, Alaska",
    "tz": "America/Anchorage",
    "cat": "birds",
    "tags": [
      "eagle",
      "eagles",
      "bald eagle",
      "nest",
      "alaska"
    ],
    "yt": "yHCBdLHfg5E",
    "channelId": "UCLomfQTJ5sg9WuPpAf5TkYw",
    "tone": "#d6e4cc",
    "blurb": "Bald eagles nesting on Alaska's Kenai Peninsula.",
    "ytTitle": "EagleCam",
    "retired": "2026-10-27"
  },
  {
    "id": "sheep-farm-sanctuary",
    "title": "Sanctuary Sheep",
    "place": "Farm Sanctuary, Watkins Glen, New York",
    "tz": "America/New_York",
    "cat": "cuddly",
    "tags": [
      "sheep",
      "farm",
      "sanctuary",
      "rescue",
      "barn"
    ],
    "yt": "SnHke968zAA",
    "channelId": "UCMWAvusUV2eeVVHZDKiMKrw",
    "tone": "#bcd3e6",
    "blurb": "Rescued sheep snoozing and socializing in their barn.",
    "ytTitle": "Sheep Barn Cam at Farm Sanctuary powered by EXPLORE.org"
  },
  {
    "id": "feeder-gettysburg",
    "title": "Gettysburg Feeder",
    "place": "Gettysburg, Pennsylvania",
    "tz": "America/New_York",
    "cat": "birds",
    "tags": [
      "feeder",
      "bird",
      "birds",
      "finch",
      "woodpecker",
      "hawk"
    ],
    "yt": "y9t1g8Ike6g",
    "channelId": "UCx8KaDsE0B4HsQdNBCsvyaA",
    "tone": "#d9c7e8",
    "blurb": "A feeder visited by more than 30 kinds of birds, and the occasional hawk.",
    "ytTitle": "LIVE Bird Feeder & Wildlife Cam - Gettysburg, PA"
  },
  {
    "id": "ospreys-hog-island",
    "title": "Hog Island Ospreys",
    "place": "Hog Island, Maine",
    "tz": "America/New_York",
    "cat": "birds",
    "tags": [
      "osprey",
      "ospreys",
      "nest",
      "ocean",
      "chicks"
    ],
    "yt": "O6Ir_sMsTtc",
    "channelId": "UC8NnosPOvXnm0O1u5YnLQiw",
    "tone": "#bfd8c8",
    "blurb": "Audubon's famous osprey nest on the Maine coast. Back each spring.",
    "ytTitle": "Audubon Osprey Nest powered by EXPLORE.org"
  },
  {
    "id": "feeder-carolina",
    "title": "Carolina Feeder",
    "place": "Southeastern North Carolina",
    "tz": "America/New_York",
    "cat": "birds",
    "tags": [
      "feeder",
      "bird",
      "birds",
      "cardinal",
      "finch"
    ],
    "yt": "zjwJ7sqOJ8Y",
    "channelId": "UCG1uo50XHSYJXArjRdENvfA",
    "tone": "#f3cdb8",
    "blurb": "Cardinals, finches and friends at a Carolina feeder.",
    "ytTitle": "🔴North Carolina Bird Feeder Daily Live Stream 🐦The Most Cardinals on YouTube"
  },
  {
    "id": "wolves-ely",
    "title": "Wolf Pack",
    "place": "International Wolf Center, Ely, Minnesota",
    "tz": "America/Chicago",
    "cat": "safari",
    "tags": [
      "wolf",
      "wolves",
      "forest",
      "snow",
      "pack"
    ],
    "yt": "DRxYSIoBusQ",
    "channelId": "UC-2KSeUU5SMCX6XLRD-AEvw",
    "tone": "#f6d58e",
    "blurb": "A pack of gray wolves in the northern Minnesota woods.",
    "ytTitle": "International Wolf Center South Camera powered by EXPLORE.org",
    "retired": "2026-10-27"
  },
  {
    "id": "eagles-decorah",
    "title": "Decorah Eagles",
    "place": "Decorah, Iowa",
    "tz": "America/Chicago",
    "cat": "birds",
    "tags": [
      "eagle",
      "eagles",
      "bald eagle",
      "nest",
      "chicks"
    ],
    "yt": "IVmL3diwJuw",
    "channelId": "UC8NnosPOvXnm0O1u5YnLQiw",
    "tone": "#c9d6e8",
    "blurb": "One of the most-watched bald eagle nests in the world.",
    "ytTitle": "Decorah Eagles powered by EXPLORE.org"
  },
  {
    "id": "foals-montesano",
    "title": "Foaling Stall",
    "place": "Little Hooves farm, Montesano, Washington",
    "tz": "America/Los_Angeles",
    "cat": "cuddly",
    "tags": [
      "horse",
      "horses",
      "pony",
      "ponies",
      "foal",
      "farm"
    ],
    "yt": "WvEDJPPb5I8",
    "channelId": "UChImhh3aWdr4OcD2I1s_pvA",
    "tone": "#e8dcc6",
    "blurb": "Mini horses and ponies in a foaling stall, where spring brings new foals.",
    "ytTitle": "The Foaling Show • Stall 1 • Horse and Pony Live Cam"
  },
  {
    "id": "hedgehog-feeder-recke",
    "title": "Hedgehog Feeder",
    "place": "Recke, Germany",
    "tz": "Europe/Berlin",
    "cat": "cuddly",
    "tags": [
      "hedgehog",
      "hedgehogs",
      "feeder",
      "birds",
      "night",
      "garden"
    ],
    "yt": "l0nT3wSnxEo",
    "channelId": "UC-HQ-oPvL148RmDxpV4jzlQ",
    "tone": "#d6e4cc",
    "blurb": "Songbirds by day and hedgehogs by night at a German garden feeder.",
    "ytTitle": "LIVE 4K Bird Feeder Cam (day time) & Hedgehog Feeder Cam (at night) - Uplengen"
  },
  {
    "id": "cats-ohio-feline-rescue",
    "title": "Cat Sanctuary",
    "place": "Ohio Feline Rescue",
    "tz": "America/New_York",
    "cat": "cuddly",
    "tags": [
      "cat",
      "cats",
      "rescue",
      "sanctuary"
    ],
    "yt": "tEsfi0xZzUs",
    "channelId": "UClB2FZ7Qvwq0Ons_6jN1lAQ",
    "tone": "#bcd3e6",
    "blurb": "Rescued cats napping, playing and waiting for adoption.",
    "ytTitle": "Friends of Felines Rescue Center Kabana Cam"
  },
  {
    "id": "eagles-danube-ipoly",
    "title": "White-tailed Eagles",
    "place": "Danube-Ipoly National Park, Hungary",
    "tz": "Europe/Budapest",
    "cat": "birds",
    "tags": [
      "eagle",
      "eagles",
      "white-tailed eagle",
      "nest",
      "river"
    ],
    "yt": "A_UkLH4zyZU",
    "channelId": "UC7AiqN6-H0HxVcyW4qjhtnw",
    "tone": "#d9c7e8",
    "blurb": "Huge white-tailed eagles raising chicks near the Danube.",
    "ytTitle": "🦅 Rétisas Élő Közvetítés – Egy Királyi Ragadozó Fészke",
    "retired": "2026-10-27"
  },
  {
    "id": "ospreys-rutland",
    "title": "Rutland Ospreys",
    "place": "Manton Bay, Rutland Water, England",
    "tz": "Europe/London",
    "cat": "birds",
    "tags": [
      "osprey",
      "ospreys",
      "nest",
      "lake"
    ],
    "yt": "RwfrtNaznW4",
    "channelId": "UCJ8DHJ5VCVLm-o_Wo65VBaA",
    "tone": "#bfd8c8",
    "blurb": "England's best-known osprey nest, overlooking Rutland Water. Spring to late summer.",
    "ytTitle": "LRWT - Rutland Water Ospreys Lagoon 4 Live Webcam (Wide Angle)"
  },
  {
    "id": "storks-suwalki",
    "title": "Suwałki Storks",
    "place": "Suwałki Landscape Park, Poland",
    "tz": "Europe/Warsaw",
    "cat": "birds",
    "tags": [
      "stork",
      "storks",
      "nest",
      "countryside"
    ],
    "yt": "7zEW-SvzliM",
    "channelId": "UCsXNCikvhJ2HawrZ5eywpGg",
    "tone": "#f3cdb8",
    "blurb": "Storks nesting in the green hills of northeastern Poland.",
    "ytTitle": "Sidorówka bociany – transmisja na żywo (Storks live video broadcast)",
    "retired": "2026-10-27"
  },
  {
    "id": "pigs-ruhr",
    "title": "Riverside Pigs",
    "place": "Ruhr valley, Essen, Germany",
    "tz": "Europe/Berlin",
    "cat": "cuddly",
    "tags": [
      "pig",
      "pigs",
      "farm",
      "river"
    ],
    "yt": "xfI9EyFRidU",
    "channelId": "UCVDPWsGVjCXgnX4GC0Iqv3g",
    "tone": "#f6d58e",
    "blurb": "Free-range pigs rooting and wallowing by the river.",
    "ytTitle": "Live Camera Axis P1435-LE",
    "retired": "2026-10-27"
  },
  {
    "id": "storks-fulltofta",
    "title": "Fulltofta Storks",
    "place": "Hörby, Sweden",
    "tz": "Europe/Stockholm",
    "cat": "birds",
    "tags": [
      "stork",
      "storks",
      "nest",
      "sweden"
    ],
    "yt": "lvIdpN-oF40",
    "channelId": "UCIUsuJRycEwBhxqYkOjwyhg",
    "tone": "#c9d6e8",
    "blurb": "Storks building nests and raising young in southern Sweden.",
    "ytTitle": "Storkar i Fulltofta storkhägn"
  },
  {
    "id": "storks-madrigal",
    "title": "Tower Storks",
    "place": "Madrigal de las Altas Torres, Spain",
    "tz": "Europe/Madrid",
    "cat": "birds",
    "tags": [
      "stork",
      "storks",
      "nest",
      "tower",
      "village"
    ],
    "yt": "3BZ-rgidYyU",
    "channelId": "UCg6OElsAGYmkuSySkZpaNGw",
    "tone": "#e8dcc6",
    "blurb": "White storks nesting on medieval towers in a Spanish village.",
    "ytTitle": "🆕 NOVEDAD 🆕 Lechuza común · [Exterior] · Reserva Natural Riet Vell -🔴DIRECTO Delta del Ebro"
  },
  {
    "id": "ospreys-spean-bridge",
    "title": "Highland Ospreys",
    "place": "Spean Bridge, Scotland",
    "tz": "Europe/London",
    "cat": "birds",
    "tags": [
      "osprey",
      "ospreys",
      "nest",
      "forest",
      "scotland"
    ],
    "yt": "--l_qKzu2kE",
    "channelId": "UCJONGed182uY9_TVRp1qiMg",
    "tone": "#d6e4cc",
    "blurb": "Ospreys nesting in an ancient Caledonian pine forest.",
    "ytTitle": "Loch Arkaig Osprey camera 1"
  },
  {
    "id": "feeders-cornell",
    "title": "Cornell Feeders",
    "place": "Sapsucker Woods, Ithaca, New York",
    "tz": "America/New_York",
    "cat": "birds",
    "tags": [
      "feeder",
      "bird",
      "birds",
      "cardinal",
      "finch",
      "woodpecker",
      "cornell"
    ],
    "yt": "x10vL6_47Dw",
    "channelId": "UCZXZQxS3d6NpR-eH_gdDwYA",
    "tone": "#bcd3e6",
    "blurb": "The Cornell Lab of Ornithology's famous feeders, busy all year.",
    "ytTitle": "🔴 Live Cornell Lab FeederWatch Cam 🔴 at Sapsucker Woods"
  },
  {
    "id": "chickens-kipster",
    "title": "Chicken Farm",
    "place": "Kipster farm, Indiana",
    "tz": "America/Indiana/Indianapolis",
    "cat": "cuddly",
    "tags": [
      "chicken",
      "chickens",
      "hen",
      "hens",
      "farm"
    ],
    "yt": "87c8UTQacO4",
    "channelId": "UC6OFMtjlgAOAq5kJwmt-lpA",
    "tone": "#d9c7e8",
    "blurb": "Hens scratching, dust-bathing and gossiping on a free-range farm.",
    "ytTitle": "Kipster Cam 7 NL",
    "retired": "2026-10-27"
  },
  {
    "id": "deer-nordfjord",
    "title": "Fjord Deer Meadow",
    "place": "Bryggja, Norway",
    "tz": "Europe/Oslo",
    "cat": "safari",
    "tags": [
      "deer",
      "meadow",
      "fjord",
      "norway"
    ],
    "yt": "0fTmFyQCxqc",
    "channelId": "UCagckRRHeGkG7iwPl91hUpg",
    "tone": "#bfd8c8",
    "blurb": "Red deer grazing a meadow by a Norwegian fjord, mostly at dawn and dusk.",
    "ytTitle": "Nordfjordhjort Live"
  },
  {
    "id": "auto-cincinnati-zoo-giraffe-birth-wat-2pyrm4",
    "title": "Cincinnati Zoo Giraffe Birth Watch",
    "place": "The Cincinnati Zoo & Botanical Garden",
    "cat": "safari",
    "tags": [
      "giraffe",
      "zoo"
    ],
    "yt": "2PYRm4vIwN0",
    "channelId": "UCE3VoxyYmyQCReOXk2ogsVg",
    "tone": "#d9c7e8",
    "blurb": "Giraffe yard outdoor live stream: Tessa is due to give birth any day now.",
    "ytTitle": "Cincinnati Zoo Giraffe Birth Watch - Indoor",
    "auto": true,
    "added": "2026-10-27"
  },
  {
    "id": "auto-moody-gardens-penguin-cam-hhp4rj",
    "title": "Moody Gardens Penguin Cam",
    "place": "Moody Gardens",
    "cat": "ocean",
    "tags": [
      "aquarium",
      "reef",
      "sharks",
      "penguin",
      "penguins",
      "animal",
      "animals"
    ],
    "yt": "HHp4rjhJsWI",
    "channelId": "UCKDM9GYy91kKpNOGZVS0ZFg",
    "tone": "#bfd8c8",
    "blurb": "Plan your trip: More LIVE Webcams: Learn more about the Aquarium Pyramid: 🐧 Watch our penguins live 24/7 from the Aquarium Pyramid at Moody Gardens in Galveston, Texas.",
    "ytTitle": "Moody Gardens Penguin Cam LIVE | Penguin Habitat Stream at the Aquarium in Galveston, Texas",
    "auto": true,
    "added": "2026-10-27"
  },
  {
    "id": "auto-the-best-aquarium-kcl3bh",
    "title": "The Best Aquarium",
    "place": "Ocean Relaxation Film",
    "cat": "ocean",
    "tags": [
      "aquarium",
      "reef",
      "coral",
      "jellyfish",
      "fish",
      "underwater"
    ],
    "yt": "kCl3bHPcw1I",
    "channelId": "UC0GhshjHVIjGf39EWsvlagQ",
    "tone": "#f3cdb8",
    "blurb": "The Best 4K Aquarium - Dive Into The Mesmerizing Underwater Realm, Sea Jellyfish, Coral Reefs #9 The Best 4K Aquarium - Dive Into The Mesmerizing Underwater…",
    "ytTitle": "The Best 4K Aquarium - Dive Into The Mesmerizing Underwater Realm, Sea Jellyfish, Coral Reefs #9",
    "auto": true,
    "added": "2026-10-27"
  },
  {
    "id": "auto-wildlife-xsou8j",
    "title": "Wildlife",
    "place": "Africam",
    "cat": "safari",
    "tags": [
      "safari",
      "wildlife",
      "animals"
    ],
    "yt": "XsOU8JnEpNM",
    "channelId": "UCuoNAKa3P0QR1Lw9QdpmoVg",
    "tone": "#f6d58e",
    "blurb": "ol Donyo Lodge is located on over 111,000 hectares of private land in the heart of the Chyulu Hills, between Kenya’s Tsavo and Amboseli National Parks.",
    "ytTitle": "ol Donyo Lodge | Wildlife Live Stream – Kenya",
    "auto": true,
    "added": "2026-10-27"
  },
  {
    "id": "auto-cat-tv-no-ads-unlimited-wild-bir-pwjidu",
    "title": "CAT TV NO ADS Unlimited Wild Birds and",
    "place": "Red Squirrel Studios",
    "cat": "cuddly",
    "tags": [
      "cat",
      "cats",
      "dogs",
      "bird",
      "birds",
      "feeder",
      "woodpecker",
      "wildlife"
    ],
    "yt": "PWJiDUUSNvs",
    "channelId": "UC-DqJ54Dx0a5SzANKdTKwPg",
    "tone": "#c9d6e8",
    "blurb": "🔴24/7 LIVE CAT TV NO ADS😺Unlimited Wild Birds and Squirrels at Autumn Festival 😻All Day Uninterrupted Nature Fun for Everyone 4K HDR TV for cats, dogs, parrots, budgies and all nature lovers.",
    "ytTitle": "🔴24/7 LIVE CAT TV NO ADS😺 Unlimited Wild Birds and Squirrels at Autumn Festival",
    "auto": true,
    "added": "2026-10-27"
  },
  {
    "id": "auto-friends-of-felines-rescue-center-vrpbvo",
    "title": "Friends of Felines Rescue Center (FFRC)",
    "place": "FOFRescueCenter",
    "cat": "cuddly",
    "tags": [
      "cat",
      "cats",
      "rescue"
    ],
    "yt": "VRpB_vOKbgw",
    "channelId": "UClB2FZ7Qvwq0Ons_6jN1lAQ",
    "tone": "#e8dcc6",
    "blurb": "The Rescue has multiple camera streams.",
    "ytTitle": "Friends of Felines Rescue Center (FFRC)",
    "auto": true,
    "added": "2026-10-27"
  }
];
