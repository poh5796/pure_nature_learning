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
    image: <AiFillFacebook className="w-[25px] h-[25px] text-blue-600" />,
  },
  {
    title: "WhatsApp",
    link: "https://wa.me/60189591312",
    image: <AiOutlineWhatsApp className="w-[25px] h-[25px] text-emerald-500" />,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/purenaturelearning",
    image: (
      <AiOutlineInstagram className="w-[25px] h-[25px] text-fuchsia-500" />
    ),
  },
  {
    title: "Xiaohongshu",
    link: "https://tinyurl.com/5n8z62hr",
    image: <AiFillBook className="w-[25px] h-[25px] text-rose-500" />,
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
    date: "7/8/2022",
    time: "4:30pm(华) 5:30pm(英) 6:30pm(华)",
    location: {
      name: "Taman Metropolitan, Kepong",
      lat: "3.227339779268691",
      long: "101.64888942875902",
    },
    description: "绘本解说与活动",
    age: "3 - 12 years old",
    fee: "Free Admission",
    theme: "https://source.unsplash.com/2c9ffiPlD9Q",
    poster: "",
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
    date: "21/8/2022",
    time: "2:00pm - 6:00pm",
    location: {
      name: "Taman Metropolitan, Kepong",
      lat: "3.227339779268691",
      long: "101.64888942875902",
    },
    description: "绘本解说与活动",
    age: "4 - 12 years old",
    fee: "RM 298 ++",
    theme: "https://source.unsplash.com/D0tD6n3Ao8E",
    poster: "",
    agenda: "",
    images: [],
    booking: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "小小云朵收藏家 Little Cloud Experts",
    day: "星期六 Saturday",
    date: "24/9/2023",
    time: "2:00pm - 6:00pm",
    location: {
      name: "Anjung Floria, Putrajaya",
      lat: "2.913005533935713",
      long: "101.67891240027235",
    },
    description:
      "Join us for an exciting nature learning adventure 《小小云朵收藏家 Little Cloud Experts》! This event is specially designed for children aged 3-12 years old, along with their parents, to explore the wonders of nature. Held on weekends in the beautiful Selangor, Malaysia, our engaging activities will spark curiosity and foster a deeper appreciation for the environment. Embark on nature walks, where our expert guides will unveil the secrets of local flora and fauna. Enjoy hands-on activities like cloud-watching, plant identification, and creating nature crafts. Together, let's nurture a love for nature and create lasting memories with your little ones. Don't miss this educational and fun-filled experience!",
    age: "3 - 12 years old",
    fee: "RM 298 ++",
    theme: "https://source.unsplash.com/PEm_sLmJT-w",
    poster: "",
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
