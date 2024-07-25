const battleRoyale =
  "/assets/images/Home/GameBattles/BattleRoyale/gameBattleRoyale1.jpg";
const battleRoyale2 =
  "/assets/images/Home/GameBattles/BattleRoyale/gameBattleRoyale2.jpg";
const battleRoyale3 =
  "/assets/images/Home/GameBattles/BattleRoyale/gameBattleRoyale3.jpg";
const bossFight1 = "/assets/images/Home/GameBattles/BossFights/bossFight1.jpg";
const bossFight2 = "/assets/images/Home/GameBattles/BossFights/bossFight2.jpg";
const bossFight3 = "/assets/images/Home/GameBattles/BossFights/bossFight3.jpg";
const teamFight1 =
  "/assets/images/Home/GameBattles/TeamBattles/Team Fight 01.jpg";
const teamFight2 =
  "/assets/images/Home/GameBattles/TeamBattles/Team Fight 02.jpg";
const teamFight3 =
  "/assets/images/Home/GameBattles/TeamBattles/Team Fight 03.jpg";

export const BLOG_PAGING = 6;

export const listBattleImg = [
  {
    id: 1,
    image: [
      { id: 0, img: bossFight1 },
      { id: 1, img: bossFight2 },
      { id: 2, img: bossFight3 },
    ],
    title: "Boss fights",
    content:
      "Watch your backs from jumpscare boss attacks, which make you over the moon to defeat.",
  },
  {
    id: 2,
    image: [
      { id: 0, img: teamFight1 },
      { id: 1, img: teamFight2 },
      { id: 2, img: teamFight3 },
    ],
    title: "Team Battles",
    content:
      "Best recommended for a groups of friends or you thrilled to meet new soulmates.",
  },
  {
    id: 3,
    image: [
      { id: 0, img: battleRoyale },
      { id: 1, img: battleRoyale2 },
      { id: 2, img: battleRoyale3 },
    ],
    title: "Survival battles",
    content:
      "Discover your heart of courage to remain the last in spectacular Open world fights full of tricky suprises.",
  },
];

export const timeLines = [
  {
    id: 1,
    title: "Quarter 4",
    time: "Quarter 4 2021",
    texts: [
      { value: "Game Design", isDone: true },
      { value: "Landing Page", isDone: true },
      { value: "Whitepaper", isDone: true },
    ],
    value: 4,
    year: 2021,
  },
  {
    id: 2,
    title: "Quarter 1",
    time: "Quarter 1 2022",
    texts: [
      { value: "Game teaser", isDone: true },
      { value: "Beta PvE whitelist test 01", isDone: true },
      { value: "Marketing events", isDone: true },
    ],
    value: 1,
    year: 2022,
  },
  {
    id: 3,
    title: "Quarter 2",
    time: "Quarter 2 2022",
    texts: [
      { value: "Beta test 01", isDone: true },
      { value: "Game trailer", isDone: true },
      { value: "Launchpad partnership", isDone: true },
    ],
    value: 2,
    year: 2022,
  },
  {
    id: 4,
    title: "Quarter 3",
    time: "Quarter 3 2022",
    texts: [
      { value: "IGO", isDone: false },
      { value: "Beta test 02 & 03", isDone: false },
      { value: "Marketplace", isDone: false },
    ],
    value: 3,
    year: 2022,
  },
  {
    id: 5,
    title: "Quarter 4",
    time: "Quarter 4 2022",
    texts: [
      { value: "Beta feedback", isDone: false },
      { value: "Mainnet", isDone: false },
      { value: "Esport tournaments", isDone: false },
    ],
    value: 4,
    year: 2022,
  },
  {
    id: 6,
    title: "2023 - 2024",
    time: "2023 - 2024",
    texts: [
      { value: "Network/Marketplace optimization", isDone: false },
      { value: "PC-VR gameplay", isDone: false },
      { value: "Multichain", isDone: false },
    ],
    value: 4,
    year: 2024,
  },
];

export const quarterSelectData = [
  { title: "Quarter 4", value: 4, year: 2021 },
  { title: "Quarter 1", value: 1, year: 2022 },
  { title: "Quarter 2", value: 2, year: 2022 },
  { title: "Quarter 3", value: 3, year: 2022 },
  { title: "Quarter 4", value: 4, year: 2022 },
  { title: "2023 - 2024", value: 4, year: 2024 },
];

const handeActionSlider = (page) => {
  if (!page) {
    return;
  }
  window.open(page, "_blank");
};

const handeActionSliderFBQ = (page) => {
  if (!page) {
    return;
  }
  fbq("init", "5236573753075681");
  fbq("track", "JoinTwitter");
  window.open(page, "PlayandEarn");
};

export const eventSlider = [
  {
    title: (
      <h1>
        ALWAYS ON
        <br />
        PROGRAM
      </h1>
    ),
    content: "Easy Earning $KEP",
    page: "https://guide.epicwar.io/always-on-program",
    buttonTitle: "Join now!",
    action: handeActionSlider,
  },
];

export const comicList = [
  {
    id: 1,
    title: "THE WAR BEGINS",
    chapter: "Chapter 1",
    cover: "/assets/images/FlipBook/chapter_1/cover-compressed-small.jpg",
    isReady: true,
  },
  {
    id: 2,
    title: "WAR REQUIEM",
    chapter: "Chapter 2",
    cover: "/assets/images/FlipBook/chapter_2/cover-min-small.png",
    isReady: true,
  },
  {
    id: 3,
    title: "THE TRAP",
    chapter: "Chapter 3",
    cover: "/assets/images/FlipBook/chapter_3/chapter_3_cover_small.png",
    isReady: true,
  },
  {
    id: 4,
    title: "COMING SOON",
    chapter: "Chapter 4",
    cover: "/assets/images/FlipBook/Noah Warrior - Falcon Force.jpg",
    isReady: false,
  },
  {
    id: 5,
    title: "COMING SOON",
    chapter: "Chapter 5",
    cover: "/assets/images/FlipBook/Boss Fight 02.png",
    isReady: false,
  },
];
