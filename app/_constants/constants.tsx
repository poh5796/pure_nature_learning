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

import {
  eventPoster0,
  eventImage0_0,
  eventImage0_1,
  eventImage0_10,
  eventImage0_11,
  eventImage0_12,
  eventImage0_13,
  eventImage0_14,
  eventImage0_15,
  eventImage0_16,
  eventImage0_17,
  eventImage0_18,
  eventImage0_19,
  eventImage0_2,
  eventImage0_20,
  eventImage0_21,
  eventImage0_22,
  eventImage0_23,
  eventImage0_24,
  eventImage0_25,
  eventImage0_26,
  eventImage0_3,
  eventImage0_4,
  eventImage0_5,
  eventImage0_6,
  eventImage0_7,
  eventImage0_8,
  eventImage0_9,
  eventPoster1,
  eventImage1_0,
  eventImage1_1,
  eventImage1_2,
  eventImage1_3,
  eventImage1_4,
  eventImage1_5,
  eventImage1_6,
  eventImage1_7,
  eventImage1_8,
  eventImage1_9,
  eventImage1_10,
  eventImage1_11,
  eventImage1_12,
  eventImage1_13,
  eventImage1_14,
  eventImage1_15,
  eventImage1_16,
  eventImage1_17,
  eventImage1_18,
  eventImage1_19,
  eventImage1_20,
  eventImage1_21,
  eventImage1_22,
  eventImage1_23,
  eventImage1_24,
  eventImage1_25,
  eventImage1_26,
  eventImage1_27,
  eventImage1_28,
  eventImage1_29,
  eventImage1_30,
  eventImage1_31,
  eventImage1_32,
  eventImage1_33,
  eventImage1_34,
  eventImage1_35,
  eventImage1_36,
  eventImage1_37,
  eventImage1_38,
  eventImage1_39,
  eventImage1_40,
  eventImage1_41,
  eventImage1_42,
  eventPoster2,
  eventImage2_0,
  eventImage2_1,
  eventImage2_2,
  eventImage2_3,
  eventImage2_4,
  eventImage2_5,
  eventImage2_6,
  eventImage2_7,
  eventImage2_8,
  eventImage2_9,
  eventImage2_10,
  eventImage2_11,
  eventImage2_12,
  eventImage2_13,
  eventImage2_14,
  eventImage2_15,
  eventImage2_16,
  eventImage2_17,
  eventImage2_18,
  eventImage2_19,
  eventImage2_20,
  eventImage2_21,
  eventImage2_22,
  eventImage2_23,
  eventImage2_24,
  eventImage2_25,
  eventImage2_26,
  eventImage2_27,
  eventImage2_28,
  eventImage2_29,
  eventImage2_30,
  eventImage2_31,
  eventImage2_32,
  eventImage2_33,
  eventImage2_34,
  eventImage2_35,
  eventImage2_36,
  eventImage2_37,
  eventImage2_38,
  eventImage2_39,
  eventImage2_40,
  eventImage2_41,
  eventImage2_42,
  eventImage2_43,
  eventImage2_44,
  eventImage2_45,
  eventImage2_46,
  eventImage2_47,
  eventImage2_48,
  eventImage2_49,
  eventImage2_50,
  eventImage2_51,
  eventImage2_52,
  eventImage2_53,
  eventImage2_54,
  eventImage2_55,
  eventImage2_56,
  eventImage2_57,
  eventImage2_58,
  eventImage2_59,
  eventImage2_60,
  eventImage2_61,
  eventImage2_62,
  eventImage2_63,
  eventImage2_64,
  eventImage2_65,
  eventImage2_66,
  eventImage2_67,
  eventImage2_68,
  eventImage2_69,
  eventImage2_70,
  eventImage2_71,
  eventImage2_72,
  eventImage2_73,
  eventImage2_74,
  eventImage2_75,
  eventImage2_76,
  eventImage2_77,
  eventImage2_78,
  eventImage2_79,
} from "..";

export const events: Event[] = [
  {
    id: 0,
    title: "纸飞机 Paper Plane",
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
    poster: eventPoster0,
    agenda: "",
    images: [
      eventImage0_0,
      eventImage0_1,
      eventImage0_2,
      eventImage0_3,
      eventImage0_4,
      eventImage0_5,
      eventImage0_6,
      eventImage0_7,
      eventImage0_8,
      eventImage0_9,
      eventImage0_10,
      eventImage0_11,
      eventImage0_12,
      eventImage0_13,
      eventImage0_14,
      eventImage0_15,
      eventImage0_16,
      eventImage0_17,
      eventImage0_18,
      eventImage0_19,
      eventImage0_20,
      eventImage0_21,
      eventImage0_22,
      eventImage0_23,
      eventImage0_24,
      eventImage0_25,
      eventImage0_26,
    ],
    booking: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 1,
    title: "追风 Chasing Winds",
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
    poster: eventPoster1,
    agenda: "",
    images: [
      eventImage1_0,
      eventImage1_1,
      eventImage1_2,
      eventImage1_3,
      eventImage1_4,
      eventImage1_5,
      eventImage1_6,
      eventImage1_7,
      eventImage1_8,
      eventImage1_9,
      eventImage1_10,
      eventImage1_11,
      eventImage1_12,
      eventImage1_13,
      eventImage1_14,
      eventImage1_15,
      eventImage1_16,
      eventImage1_17,
      eventImage1_18,
      eventImage1_19,
      eventImage1_20,
      eventImage1_21,
      eventImage1_22,
      eventImage1_23,
      eventImage1_24,
      eventImage1_25,
      eventImage1_26,
      eventImage1_27,
      eventImage1_28,
      eventImage1_29,
      eventImage1_30,
      eventImage1_31,
      eventImage1_32,
      eventImage1_33,
      eventImage1_34,
      eventImage1_35,
      eventImage1_36,
      eventImage1_37,
      eventImage1_38,
      eventImage1_39,
      eventImage1_40,
      eventImage1_41,
      eventImage1_42,
    ],
    booking: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "小小云朵收藏家 Little Cloud Experts",
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
    poster: eventPoster2,
    agenda: "",
    images: [
      eventImage2_0,
      eventImage2_1,
      eventImage2_2,
      eventImage2_3,
      eventImage2_4,
      eventImage2_5,
      eventImage2_6,
      eventImage2_7,
      eventImage2_8,
      eventImage2_9,
      eventImage2_10,
      eventImage2_11,
      eventImage2_12,
      eventImage2_13,
      eventImage2_14,
      eventImage2_15,
      eventImage2_16,
      eventImage2_17,
      eventImage2_18,
      eventImage2_19,
      eventImage2_20,
      eventImage2_21,
      eventImage2_22,
      eventImage2_23,
      eventImage2_24,
      eventImage2_25,
      eventImage2_26,
      eventImage2_27,
      eventImage2_28,
      eventImage2_29,
      eventImage2_30,
      eventImage2_31,
      eventImage2_32,
      eventImage2_33,
      eventImage2_34,
      eventImage2_35,
      eventImage2_36,
      eventImage2_37,
      eventImage2_38,
      eventImage2_39,
      eventImage2_40,
      eventImage2_41,
      eventImage2_42,
      eventImage2_43,
      eventImage2_44,
      eventImage2_45,
      eventImage2_46,
      eventImage2_47,
      eventImage2_48,
      eventImage2_49,
      eventImage2_50,
      eventImage2_51,
      eventImage2_52,
      eventImage2_53,
      eventImage2_54,
      eventImage2_55,
      eventImage2_56,
      eventImage2_57,
      eventImage2_58,
      eventImage2_59,
      eventImage2_60,
      eventImage2_61,
      eventImage2_62,
      eventImage2_63,
      eventImage2_64,
      eventImage2_65,
      eventImage2_66,
      eventImage2_67,
      eventImage2_68,
      eventImage2_69,
      eventImage2_70,
      eventImage2_71,
      eventImage2_72,
      eventImage2_73,
      eventImage2_74,
      eventImage2_75,
      eventImage2_76,
      eventImage2_77,
      eventImage2_78,
      eventImage2_79,
    ],
    booking: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];
