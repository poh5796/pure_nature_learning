import { Benefit, Event, Social } from "./interface";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiFillBook,
  AiOutlineBook,
  AiOutlineFire,
} from "react-icons/ai";

const payment = {
  payment: `Payment Methods & Account Numbers
  Bank Transfer
  Bank : MAYBANK
  Account Number : 0102 9106 9692
  Name : Teh Ee Fang 
  References: Kid's Name(s) Pure NL
  
  E-Wallet
  Platform : Touch 'N Go eWallet 
  Account Number : 0126553963
  Name : Teh Ee Fang 
  References: Kid's Name(s) Pure NL`,
};

export const contact = {
  eefang: "+6012 - 655 3963",
};

export const daysInWeek: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const operatingSystems = {
  IOS: "iOS",
  ANDROID: "Android",
};

export const socials: Social[] = [
  {
    title: "Facebook",
    link: "https://www.facebook.com/purenaturelearning",
    image: <AiFillFacebook className="w-[25px] h-[25px]" />,
  },
  {
    title: "WhatsApp",
    link: "https://wa.me/60189591312",
    image: <AiOutlineWhatsApp className="w-[25px] h-[25px]" />,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/purenaturelearning",
    image: <AiOutlineInstagram className="w-[25px] h-[25px]" />,
  },
  {
    title: "Xiaohongshu",
    link: "https://tinyurl.com/5n8z62hr",
    image: <AiFillBook className="w-[25px] h-[25px]" />,
  },
];

export const benefits: Benefit[] = [
  {
    title: "Benefits Children With Multiple Intellectual Benefits",
    description:
      "Sparks creativity & problem solving, curiosity, increases judgement skills, memory functions and greatly reduces symptoms of ADHD & ADD.",
    icon: <AiOutlineFire className="" />,
  },
  {
    title: "Greatly Improves Children's Emotional Health",
    description:
      "Reduces stress & anxiety, enhances self-expression, patience, compassion, empathy and improves overall mental well-being.",
    icon: <AiOutlineFire className="" />,
  },
  {
    title: "Helps Kids Grow Into Better Social Beings",
    description:
      "Helps children to interact with each other, learning collectively the values of collaboration, teamwork, communication and empathy.",
    icon: <AiOutlineFire className="" />,
  },
  {
    title: "Develops Kids Into Stronger Human Beings",
    description:
      "Being outside offers endless possibilities for physical movements, helping kids build more resilient bodies. Also, being around nature also contributes to better immune systems.",
    icon: <AiOutlineFire className="" />,
  },
  {
    title: "Teaches Children To Appreciate Our Natural Environments",
    description:
      "As children grow with nature, they develop deep love and passion for nature, and eventually they become advocates for our planet in protecting and preserving our nature environment",
    icon: <AiOutlineFire className="" />,
  },
];

export const events: Event[] = [
  {
    id: 0,
    enTitle: "Paper Plane",
    chsTitle: "纸飞机",
    start: new Date(2022, 7, 7, 16, 30),
    end: new Date(2022, 7, 7, 19, 30),
    location: {
      name: "Taman Metropolitan, Kepong",
      lat: "3.227339779268691",
      long: "101.64888942875902",
      placeId: "ChIJ-_b6sbNHzDEREODfF0Yg2VQ",
    },
    description:
      "Join us for a thrilling nature learning adventure titled '纸飞机 Paper Plane' designed for curious minds aged 3 to 12 years old, along with their enthusiastic parents, in the scenic landscapes of Selangor, Malaysia. Embrace the wonders of the outdoors as we embark on an interactive journey, unfolding the mysteries of local flora and fauna. Engaging activities include guided nature walks, bird-watching, and crafting paper planes inspired by our feathered friends. Through games and storytelling, we'll discover the importance of conservation and appreciation for Mother Nature. This unforgettable weekend event promises laughter, discovery, and a stronger bond with our natural world.",
    age: "3 - 12 years old",
    fee: 0,
    theme: "https://source.unsplash.com/2c9ffiPlD9Q",
    poster:
      "https://drive.google.com/file/d/1iCqR2TOxGtKNdaJKKOmo4XkGzXyXulvE/view",
    agendas: [],
    images: [],
    url: "https://www.google.com",
  },
  {
    id: 1,
    enTitle: "Chasing Winds",
    chsTitle: "追风",
    start: new Date(2022, 7, 21, 14, 0),
    end: new Date(2022, 7, 21, 18, 0),
    location: {
      name: "Taman Metropolitan, Kepong",
      lat: "3.227339779268691",
      long: "101.64888942875902",
      placeId: "ChIJ-_b6sbNHzDEREODfF0Yg2VQ",
    },
    description:
      "Join us for an enchanting nature learning experience titled '追风 Chasing Winds' specially crafted for children aged 3 to 12 years old, accompanied by their enthusiastic parents, in the breathtaking landscapes of Selangor, Malaysia. This weekend event invites young explorers to embrace the wonders of the great outdoors. Engage in guided nature walks to uncover the region's diverse flora and fauna, while indulging in interactive workshops on wind-powered crafts and kite-making. Through storytelling and eco-games, kids will learn about the importance of wind energy and its role in sustaining our environment. Prepare for an unforgettable adventure that ignites curiosity and fosters a love for nature.",
    age: "4 - 12 years old",
    fee: 198,
    theme: "https://source.unsplash.com/D0tD6n3Ao8E",
    poster:
      "https://drive.google.com/file/d/1cKd-eHWClXF4lq-sxkO7cOL1jB0iGa3U/view",
    agendas: [
      "https://drive.google.com/uc?id=1_qw-NDPVW2Nxt4pZfRPlzzQ9BDrTyMc6&export=view",
    ],
    images: [
      "https://drive.google.com/uc?id=1fv0iWlIyohjXGdnuBMzMjJcwDBVcaGYS&export=view",
      "https://drive.google.com/uc?id=1bAMBZD6msDF4jU0KxPMMb4Ugs5kcmyJ4&export=view",
      "https://drive.google.com/uc?id=1EdnO2ARCbxD-2UAf9Ybg3cak9PrNzHTd&export=view",
      "https://drive.google.com/uc?id=1rJIaLtl6Qw6mP5n94S-66mSZEb80JoE5&export=view",
      "https://drive.google.com/uc?id=1KpoQZ09--drtH1vmMhSeVF4Q_AfYG4Vb&export=view",
      "https://drive.google.com/uc?id=1RKIVC0QOdQJogH0ShdTZOduD50D1pl_0&export=view",
      "https://drive.google.com/uc?id=1BBXHq3B8niobCwTmQVgJI3G-bpdtsZ9k&export=view",
      "https://drive.google.com/uc?id=15yNo_cRE1PiCg67G351Fv3sQc_AHdVv3&export=view",
      "https://drive.google.com/uc?id=1_je3M4NIXRMwAO8CRT3GQOnARc2s_G7p&export=view",
      "https://drive.google.com/uc?id=1nM0PHi6iMobd87TamBTitKAlZjgZWNVV&export=view",
      "https://drive.google.com/uc?id=1RXhDlAFW5rTU1GVapRaz9GGHimaizJNL&export=view",
      "https://drive.google.com/uc?id=15A_0fWuPhmjMR7tepIptUcVxvL6R7lnw&export=view",
      "https://drive.google.com/uc?id=1SkADyivGhK5S7xhI_Bv1E5ZUwCjk6WnG&export=view",
      "https://drive.google.com/uc?id=1H5LJKCFwHc_npZ_-_LoHP529Mij5Y_Id&export=view",
      "https://drive.google.com/uc?id=1rNng83Qh_agepJVHB6aQHvzYbXpNIpDp&export=view",
      "https://drive.google.com/uc?id=1evCZM3rPDKOTtbyGbmh_55yfDTTeloiR&export=view",
      "https://drive.google.com/uc?id=1xt-N2AZGbBGkOs9xB7vE1TN41HjS6SlA&export=view",
      "https://drive.google.com/uc?id=12kQNeqj8j0grSyG8u1l6CFqQHRmBeqZK&export=view",
      "https://drive.google.com/uc?id=19O1-oPkoWTBYQSrGCbTBDwtCw9doj7VA&export=view",
      "https://drive.google.com/uc?id=1E_sIGpyaaI5OkonZhPITMGrBdkOKI4wy&export=view",
      "https://drive.google.com/uc?id=1TGh7NSDhIAdgCNV7iz97njxIq9dmsuMe&export=view",
      "https://drive.google.com/uc?id=164EBYweD2ylJW377qodnwRoErvv2s9mU&export=view",
      "https://drive.google.com/uc?id=12iCSuA2y60aTDLknNXk6so8V4ovPWfc8&export=view",
      "https://drive.google.com/uc?id=1ue4AVrTyHkdu8B8fRfPR9dl-ckprgPUu&export=view",
      "https://drive.google.com/uc?id=1flkz2FhbP07XornFL4uV9eAlBH46qJqg&export=view",
      "https://drive.google.com/uc?id=1fCHiweec3BnvzOVY1l9uh_LunQRsElvo&export=view",
      "https://drive.google.com/uc?id=1rrwnLAkK773FsJgm8x-BkrFRI9ubtoW4&export=view",
      "https://drive.google.com/uc?id=1niRnlYudC9Txy_z_M2ChSthwQlS-ZW-R&export=view",
      "https://drive.google.com/uc?id=1n5actfwIMK367uqIu9b9ZvMztdwUU6md&export=view",
      "https://drive.google.com/uc?id=1AC8yGGsytUjGIP2k2fR3-duDFjKnoJMi&export=view",
      "https://drive.google.com/uc?id=1-yOZmJ_rtJ3aIOUR1uCx4SS_38Eg2yCm&export=view",
      "https://drive.google.com/uc?id=1ImbsvEo5PpBerCHkD5gwbrrCF94j-J1m&export=view",
      "https://drive.google.com/uc?id=1CryOS5vKqg4AsF5tCYjmKMjhiD-kGv94&export=view",
      "https://drive.google.com/uc?id=1KUvgkQgT_uFS5zD01-kzUi7DJK87jTEh&export=view",
      "https://drive.google.com/uc?id=1p_ufEGURXHhevjsK_B1M1Sb9lBw2m6eO&export=view",
      "https://drive.google.com/uc?id=1m-gcYHtQ9IjNIDM6OwlwxAipin9SxcWs&export=view",
      "https://drive.google.com/uc?id=15HU68OXWruWnyL2p2wC3iKfJumHyVRMB&export=view",
      "https://drive.google.com/uc?id=162vXfi16AsUNK7zz4buLWhQIh65YZ4ES&export=view",
      "https://drive.google.com/uc?id=1l814Iev5KNess3RUG4TzW0AUt4SW4K4k&export=view",
      "https://drive.google.com/uc?id=11o0wlaYftT4dc7mp5D3cbT2WkNz52rc3&export=view",
      "https://drive.google.com/uc?id=1OD5SbLX7h3b3XBAK77Qb3xX1bKBEG26L&export=view",
      "https://drive.google.com/uc?id=1RmY_jyhqGE4hyQq8V76kJoEMfpYyhHGr&export=view",
      "https://drive.google.com/uc?id=1zuC9eil2NxnnB0XDLfvMGQSKdRwxEKGc&export=view",
      "https://drive.google.com/uc?id=1mYdnUCokPCREOiOpQ5yzgw6oqzH7nMSL&export=view",
      "https://drive.google.com/uc?id=1jzmrnc9_hCEBGMVISdHlhu8T5HJ5ev1c&export=view",
      "https://drive.google.com/uc?id=1WyHn6yGkN161e36PRT6iVHqu-ttNtpZD&export=view",
      "https://drive.google.com/uc?id=1sP4WYw6NrAgB85581flU5ONounGWKE06&export=view",
      "https://drive.google.com/uc?id=12IMFMYcuTJhtXeR8tPN9Y10VdtwU-okR&export=view",
      "https://drive.google.com/uc?id=121lOMcNwRhWvMc5bg59UaSxNNwVtE-Gr&export=view",
      "https://drive.google.com/uc?id=1M7QPAZpxBZrSCr6oNx1QyTG7fTgD7ycX&export=view",
    ],
    url: "https://www.google.com",
  },
  {
    id: 2,
    enTitle: "Little Cloud Experts",
    chsTitle: "小小云朵收藏家",
    start: new Date(2023, 9, 24, 14, 0),
    end: new Date(2023, 9, 24, 18, 0),
    location: {
      name: "Anjung Floria, Putrajaya",
      lat: "2.913005533935713",
      long: "101.67891240027235",
      placeId: "ChIJ_UiE6zS2zTERsVUghGMD1KY",
    },
    description:
      "Join us for an exciting nature learning adventure 《小小云朵收藏家 Little Cloud Experts》! This event is specially designed for children aged 3-12 years old, along with their parents, to explore the wonders of nature. Held on weekends in the beautiful Selangor, Malaysia, our engaging activities will spark curiosity and foster a deeper appreciation for the environment. Embark on nature walks, where our expert guides will unveil the secrets of local flora and fauna. Enjoy hands-on activities like cloud-watching, plant identification, and creating nature crafts. Together, let's nurture a love for nature and create lasting memories with your little ones. Don't miss this educational and fun-filled experience!",
    age: "3 - 12 years old",
    fee: 198,
    theme: "https://source.unsplash.com/PEm_sLmJT-w",
    poster:
      "https://drive.google.com/file/d/17vVoiJEAo6hxqEDjnY4nlpGxR1B6Xtsc/view",
    agendas: [],
    images: [],
    url: "https://www.google.com",
  },
  {
    id: 3,
    enTitle: "The Moody Dinosaur",
    chsTitle: "爱发脾气的小恐龙",
    start: new Date(2024, 10, 23, 9, 0),
    end: new Date(2024, 10, 23, 18, 0),
    location: {
      name: "Taman Eko Rimba Komanwel, Rawang",
      lat: "3.289296102643686",
      long: "101.6162239567184",
      placeId: "mrbAUhcRdrbx8x929",
    },
    description: "",
    age: "7 - 12 years old",
    fee: 198,
    theme: "https://source.unsplash.com/hYKG311mff8",
    poster:
      "https://drive.google.com/file/d/1UrPCyOczKL7kVaA2_2xk4OH4C1gCbiRi/view",
    agendas: [],
    images: [],
    url: "https://www.google.com",
  },
  {
    id: 4,
    enTitle: "haha",
    chsTitle: "小小探险家指南",
    start: new Date(2024, 2, 16, 9, 0),
    end: new Date(2024, 2, 16, 12, 0),
    location: {
      name: "Taman Eko Rimba Komanwel, Rawang",
      lat: "3.2972853373055977",
      long: "101.61373942895814",
      placeId: "ChIJjxPp0dhDzDERFibn2Q215Lk",
    },
    description:
      "Join us for an exciting nature learning adventure 《小小云朵收藏家 Little Cloud Experts》! This event is specially designed for children aged 3-12 years old, along with their parents, to explore the wonders of nature. Held on weekends in the beautiful Selangor, Malaysia, our engaging activities will spark curiosity and foster a deeper appreciation for the environment. Embark on nature walks, where our expert guides will unveil the secrets of local flora and fauna. Enjoy hands-on activities like cloud-watching, plant identification, and creating nature crafts. Together, let's nurture a love for nature and create lasting memories with your little ones. Don't miss this educational and fun-filled experience!",
    age: "3 - 12 years old",
    fee: 198,
    theme: "https://source.unsplash.com/PEm_sLmJT-w",
    poster: "",
    agendas: [],
    images: [],
    url: ""
  }
]
