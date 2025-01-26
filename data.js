const artistData = [
  {
    name: "ɴʏx",
    data: [null, null, null, null, null, null, null, null, 7500],
    current: 7500,
    noHistory: true
  },
  {
    name: "Bojian",
    data: [70, 697, 1200, 1200, 1500, 1900, 1900, 1900, 7100],
    current: 7100,
    growth: 5200
  },
  {
    name: "brutus",
    data: [null, null, null, null, null, null, null, null, 6200],
    current: 6200,
    noHistory: true
  },
  {
    name: "Walking with AI",
    data: [null, null, null, null, null, null, null, null, 1600],
    current: 1600,
    noHistory: true
  },
  {
    name: "二月",
    data: [732, 932, 1000, 1000, 1100, 1200, 1200, 1200, 2700],
    current: 2700,
    growth: 1968
  },
  {
    name: "酒愛花",
    data: [710, 949, 1000, 1000, 1100, 1100, 1100, 1100, 2400],
    current: 2400,
    growth: 1690
  },
  {
    name: "GameIsHere",
    data: [804, 886, 982, 982, 1100, 1200, 1200, 1200, 2300],
    current: 2300,
    growth: 1496
  },
  {
    name: "coft",
    data: [249, 447, 599, 599, 808, 808, 1000, 1000, 2200],
    current: 2200,
    growth: 1951
  },
  {
    name: "桂花巷子",
    data: [233, 404, 435, 435, 459, 471, 471, 471, 1200],
    current: 1200,
    growth: 967
  },
  {
    name: "iLoveSuno",
    data: [null, null, null, null, null, null, null, null, 883],
    current: 883,
    noHistory: true
  },
  {
    name: "Maybe",
    data: [56, 108, 127, 127, 130, 142, 142, 142, 730],
    current: 730,
    growth: 674
  },
  {
    name: "ChillVibeCircuits",
    data: [217, 320, 341, 341, 385, 398, 398, 398, 649],
    current: 649,
    growth: 432
  },
  {
    name: "AIMusicMoonMan",
    data: [40, 71, 76, 76, 92, 103, 103, 103, 638],
    current: 638,
    growth: 598
  },
  {
    name: "林原惠",
    data: [null, null, null, null, null, null, null, null, 620],
    current: 620,
    noHistory: true
  },
  {
    name: "senchago",
    data: [null, null, null, null, null, null, null, null, 366],
    current: 366,
    noHistory: true
  },
  {
    name: "豬羊",
    data: [null, null, null, null, null, null, null, null, 243],
    current: 243,
    noHistory: true
  },
  {
    name: "麥客官 (MicroGuan)",
    data: [null, null, null, null, null, null, null, null, 237],
    current: 237,
    noHistory: true
  },
  {
    name: "老頭",
    data: [null, null, null, null, null, null, null, null, 214],
    current: 214,
    noHistory: true
  },
  {
    name: "CYAN [青幻]",
    data: [181, 205, 207, 207, 209, 209, 209, 209, 219],
    current: 219,
    growth: 38
  },
  {
    name: "球球",
    data: [72, 86, 96, 96, 106, 124, 124, 124, 228],
    current: 228,
    growth: 156
  },
  {
    name: "Gazeriel",
    data: [null, null, null, null, null, null, null, null, 113],
    current: 113,
    noHistory: true
  },
  {
    name: "台灣力量",
    data: [null, null, null, null, null, null, null, null, 77],
    current: 77,
    noHistory: true
  },
  {
    name: "Novia",
    data: [null, null, null, null, null, null, null, null, 62],
    current: 62,
    noHistory: true
  }
].sort((a, b) => b.current - a.current);

const songData = {
  "ɴʏx": {
    topSong: {
      title: "𝗟𝗼𝘃𝗲 𝗣𝗶𝗿𝗮𝘁𝗲𝘀",
      url: "https://suno.com/song/6a61fa8c-70a9-47ed-aaad-1bbdadc82ea6"
    },
    popularSongs: [
      {
        title: "nyx特別要放的歌",
        url: "https://suno.com/song/6b4a55ad-d3a2-4fc1-9090-ded104290553"
      }
    ]
  },
  "GameIsHere": {
    topSong: {
      title: "space",
      url: "https://suno.com/song/f434929e-a6b2-4437-a597-45ffece514b1"
    },
    popularSongs: [
      {
        title: "closer",
        url: "https://suno.com/song/d5ea20ee-2fc4-4e34-b8a1-c5d4b0bc2ea8"
      },
      {
        title: "runaway",
        url: "https://suno.com/song/f43d8bd8-2a9b-4dcb-8f90-f444530b6870"
      },
      {
        title: "daydream",
        url: "https://suno.com/song/742e0527-7ee4-4d78-bc98-3905a291d300"
      }
    ]
  },
  "二月": {
    topSong: {
      title: "醉舞江湖",
      url: "https://suno.com/song/c6bc45aa-db4e-4c47-a0f9-8f9e865cc9c0"
    },
    popularSongs: [
      {
        title: "play",
        url: "https://suno.com/song/b0e54323-24b3-4be0-aec8-ac9156a95f45"
      }
    ]
  },
  "酒愛花": {
    topSong: {
      title: "I am separated from the world",
      url: "https://suno.com/song/682349a7-fc02-46f1-8fbd-aed67dee2c6e"
    },
    popularSongs: [
      {
        title: "daily社畜✨",
        url: "https://suno.com/song/64c90565-7e48-4e35-9a36-61e1bd9befda"
      },
      {
        title: "青い光の波紋希望✨",
        url: "https://suno.com/song/033383f2-7187-4339-870f-c02397cc8cfc"
      }
    ]
  },
  "桂花巷子": {
    topSong: {
      title: "Kung Fu鴨",
      url: "https://suno.com/song/20e4acb5-a9ec-43ab-bf0a-41a35db63686"
    },
    popularSongs: []
  },
  "coft": {
    topSong: {
      title: "Anna",
      url: "https://suno.com/song/f3e5812f-f80f-4137-93fe-66c2c2b47985"
    },
    popularSongs: [
      {
        title: "Unknown (feat. TongMick)",
        url: "https://suno.com/song/90942ca1-2769-418b-bcc2-037c1f47e6b9"
      },
      {
        title: "天才 - Perfect God",
        url: "https://suno.com/song/cc659ffb-3f40-49b4-947c-2645ccec64fb"
      }
    ]
  },
  "Bojian": {
    topSong: {
      title: "無法救贖",
      url: "https://suno.com/song/39cdfc9d-f718-4658-8f04-03aa34cf979b"
    },
    popularSongs: [
      {
        title: "孤獨",
        url: "https://suno.com/song/7a52e0b6-3024-423b-ac2b-4f882ccda59f"
      },
      {
        title: "Love Again | Mandarin",
        url: "https://suno.com/song/14bf4315-c6c1-48b3-9100-e0617f157faf"
      },
      {
        title: "漂泊上班族",
        url: "https://suno.com/song/f77be4af-ca82-409e-8718-5ccc33512d05"
      },
      {
        title: "想你",
        url: "https://suno.com/song/39a05fa9-0f8c-4242-abdc-7fb0b398ef11"
      },
      {
        title: "5678",
        url: "https://suno.com/song/d899be69-eb06-4628-bac7-88cf284685d0"
      }
    ]
  },
  "brutus": {
    topSong: {
      title: "Under the Moon",
      url: "https://suno.com/song/04440f12-078f-434c-837e-4fac9990713d"
    },
    popularSongs: [
      {
        title: "Lingering Shades of Rain",
        url: "https://suno.com/song/1dc71ed6-4d3c-43ab-b864-ccdaf7700ad7"
      },
      {
        title: "Schrödinger's Cat: Schrödinge",
        url: "https://suno.com/song/017da934-aed3-4f5f-900e-8100df79bac6"
      },
      {
        title: "Embers",
        url: "https://suno.com/song/9ed68c45-f49b-427c-b334-8d462fee98a3"
      },
      {
        title: "Congratulations You Found Me",
        url: "https://suno.com/song/96a5c913-7990-49f5-88bf-10bfc0498bc1"
      },
      {
        title: "Red Star Panda",
        url: "https://suno.com/song/3ba6929f-1dbc-43c1-af01-40476edc1e9f"
      }
    ]
  },
  "老頭": {
    topSong: {
      title: "日系電音菩薩🎼",
      url: "https://suno.com/song/8f7f6f3c-8b17-4c36-b5ab-f76a5fdc1370"
    },
    popularSongs: []
  },
  "iLoveSuno": {
    topSong: {
      title: "醉打蔣門神",
      url: "https://suno.com/song/f5a86119-2283-4e9a-86ae-9c96476f1450"
    },
    popularSongs: [
      {
        title: "宮保雞丁",
        url: "https://suno.com/song/1ec6fa32-0b8a-4156-aa7d-a7735d2ca2e3"
      },
      {
        title: "剁椒魚頭",
        url: "https://suno.com/song/0722576b-ff11-4074-a461-57b06f9282bd"
      },
      {
        title: "我抄你的筆",
        url: "https://suno.com/song/04a61e9a-08d5-4b89-815b-5d8c45f43b4f"
      },
      {
        title: "豉汁蒸排骨",
        url: "https://suno.com/song/06468baf-9e62-40df-95df-741ccf6b0584"
      }
    ]
  }
};

const artistTags = {
  "GameIsHere": ["SSC6決賽", "AMC"],
  "酒愛花": ["SSC6決賽"],
  "二月": ["SSC6"],
  "桂花巷子": ["SSC6"],
  "ChillVibeCircuits": ["SSC6"],
  "AIMusicMoonMan": ["SSC6"],
  "coft": ["AMC"]
};

const calculateAverageGrowth = () => {
  const validData = artistData.filter(artist => !artist.noHistory);
  const growthData = new Array(9).fill(0);
  
  validData.forEach(artist => {
    artist.data.forEach((value, index) => {
      if (value) growthData[index] += value;
    });
  });
  
  return growthData.map(sum => sum / validData.length);
};

const averageGrowth = calculateAverageGrowth();