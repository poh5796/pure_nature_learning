import { Benefit, Contact, Event } from "./model";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiFillBook,
  AiOutlineBook,
  AiOutlineFire,
} from "react-icons/ai";

export const contacts: Contact[] = [
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
      "Nature learning sparks creativity & problem solving, curiosity, increases judgement skills, memory functions and greatly reduces symptoms of ADHD & ADD.",
    icon: <AiOutlineFire className="" />,
  },
  {
    title: "Greatly Improves Children's Emotional Health",
    description:
      "Nature Learning reduces stress & anxiety, enhances self-expression, patience, compassion, empathy and improves overall mental well-being.",
    icon: <AiOutlineFire className="" />,
  },
  {
    title: "Helps Kids Grow Into Better Social Beings",
    description:
      "Nature Learning helps children to interact with each other, learning collectively the values of collaboration, teamwork, communication and empathy.",
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
    title: "纸飞机 Paper Plane",
    day: "星期日 Sunday",
    start: new Date(2022, 7, 7, 16, 30),
    end: new Date(2022, 7, 7, 19, 30),
    location: {
      name: "Taman Metropolitan, Kepong",
      lat: "3.227339779268691",
      long: "101.64888942875902",
    },
    description:
      "Join us for a thrilling nature learning adventure titled '纸飞机 Paper Plane' designed for curious minds aged 3 to 12 years old, along with their enthusiastic parents, in the scenic landscapes of Selangor, Malaysia. Embrace the wonders of the outdoors as we embark on an interactive journey, unfolding the mysteries of local flora and fauna. Engaging activities include guided nature walks, bird-watching, and crafting paper planes inspired by our feathered friends. Through games and storytelling, we'll discover the importance of conservation and appreciation for Mother Nature. This unforgettable weekend event promises laughter, discovery, and a stronger bond with our natural world.",
    age: "3 - 12 years old",
    fee: 0,
    theme: "https://source.unsplash.com/2c9ffiPlD9Q",
    poster: "https://source.unsplash.com/6kajEqr84iY",
    agenda: "",
    images: [
      "https://tinyurl.com/3ym5dub3",
      "https://tinyurl.com/2ez2r88n",
      "https://tinyurl.com/3mbbwrxk",
      "https://tinyurl.com/yc5ney3v",
      "https://tinyurl.com/4uh7j5at",
      "https://tinyurl.com/345scb8h",
      "https://tinyurl.com/4nkhy3ky",
      "https://tinyurl.com/9rbrk7wv",
      "https://tinyurl.com/4m37sxxu",
      "https://tinyurl.com/2s3xptbj",
      "https://tinyurl.com/23e2ch93",
      "https://tinyurl.com/27vpe62y",
      "https://tinyurl.com/2p9dt3vr",
      "https://tinyurl.com/yn2bay3b",
      "https://tinyurl.com/ytpnju9n",
      "https://tinyurl.com/4ey9xcvm",
      "https://tinyurl.com/2n4w8dcc",
      "https://tinyurl.com/2ve96k3h",
      "https://tinyurl.com/bde78zxs",
      "https://tinyurl.com/4bk2usm7",
      "https://tinyurl.com/ujunm6a9",
      "https://tinyurl.com/54ys2rx6",
      "https://tinyurl.com/h85zvfzn",
      "https://tinyurl.com/35cuss2n",
      "https://tinyurl.com/3ebkwenu",
    ],
    booking: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 1,
    title: "追风 Chasing Winds",
    day: "星期日 Sunday",
    start: new Date(2022, 7, 21, 14, 0),
    end: new Date(2022, 7, 21, 18, 0),
    location: {
      name: "Taman Metropolitan, Kepong",
      lat: "3.227339779268691",
      long: "101.64888942875902",
    },
    description:
      "Join us for an enchanting nature learning experience titled '追风 Chasing Winds' specially crafted for children aged 3 to 12 years old, accompanied by their enthusiastic parents, in the breathtaking landscapes of Selangor, Malaysia. This weekend event invites young explorers to embrace the wonders of the great outdoors. Engage in guided nature walks to uncover the region's diverse flora and fauna, while indulging in interactive workshops on wind-powered crafts and kite-making. Through storytelling and eco-games, kids will learn about the importance of wind energy and its role in sustaining our environment. Prepare for an unforgettable adventure that ignites curiosity and fosters a love for nature.",
    age: "4 - 12 years old",
    fee: 298,
    theme: "https://source.unsplash.com/D0tD6n3Ao8E",
    poster: "https://source.unsplash.com/6kajEqr84iY",
    agenda: "",
    images: [],
    booking: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "小小云朵收藏家 Little Cloud Experts",
    day: "星期六 Saturday",
    start: new Date(2023, 8, 24, 14, 0),
    end: new Date(2023, 8, 24, 18, 0),
    location: {
      name: "Anjung Floria, Putrajaya",
      lat: "2.913005533935713",
      long: "101.67891240027235",
    },
    description:
      "Join us for an exciting nature learning adventure 《小小云朵收藏家 Little Cloud Experts》! This event is specially designed for children aged 3-12 years old, along with their parents, to explore the wonders of nature. Held on weekends in the beautiful Selangor, Malaysia, our engaging activities will spark curiosity and foster a deeper appreciation for the environment. Embark on nature walks, where our expert guides will unveil the secrets of local flora and fauna. Enjoy hands-on activities like cloud-watching, plant identification, and creating nature crafts. Together, let's nurture a love for nature and create lasting memories with your little ones. Don't miss this educational and fun-filled experience!",
    age: "3 - 12 years old",
    fee: 298,
    theme: "https://source.unsplash.com/PEm_sLmJT-w",
    poster: "https://source.unsplash.com/6kajEqr84iY",
    agenda: "",
    images: [
      "https://tinyurl.com/jm3jdj56",
      "https://tinyurl.com/3d5pd4ds",
      "https://tinyurl.com/y7hbfj4b",
      "https://tinyurl.com/3vfbr2bp",
      "https://tinyurl.com/79vjrpzr",
      "https://tinyurl.com/bdea5hzj",
      "https://tinyurl.com/upxfu32y",
      "https://tinyurl.com/34yteh27",
      "https://tinyurl.com/yjw4hrvs",
      "https://tinyurl.com/2wcb8y2b",
    ],
    booking: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];
