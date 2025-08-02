import kanak from "@/assets/team/kanak.webp";
import Vivek from "@/assets/team/vivek.webp";
import Pulkit from "@/assets/team/pulkit.webp";
import KK from "@/assets/team/kk.webp";
import Ayush from "@/assets/team/ayush.webp";
import Deepika from "@/assets/team/deepika.webp";
import Diksha from "@/assets/team/diksha.webp";
import Vidushi from "@/assets/team/vidushi.webp";
import Manas from "@/assets/team/manas.webp";
import Kunal from "@/assets/team/kunal.webp";
import Tanmay from "@/assets/team/tanmay.webp";
import Pooja from "@/assets/team/pooja.webp";
import Dipti from "@/assets/team/dipti.webp";
import Divyansh from "@/assets/team/divyansh.webp";
import Saurabh from "@/assets/team/saurabh.webp";
import Yash from "@/assets/team/yash.webp";
import Bhavya from "@/assets/team/bhavya.webp";
import Aditya from "@/assets/team/aditya.webp";

import { StaticImageData } from "next/image";

const team: {
  name: string;
  roles: string[];
  intro: string;
  urls: {
    github: string;
    linkedin: string;
    twitter?: string;
    portfolio?: string;
  };
  image: StaticImageData;
  keywords: string[];
}[] = [
  {
    name: "Kanak Tanwar",
    roles: ["Club Lead", "AI Lead", "DSA Team"],
    intro: "Can code in any language (if ChatGPT is accessible).",
    urls: {
      github: "https://github.com/kanakOS01",
      linkedin: "https://www.linkedin.com/in/kanak-tanwar",
      twitter: "https://x.com/kanaktwts",
    },
    image: kanak,
    keywords: ["founder", "ai", "lead", "dsa"],
  },
  {
    name: "Vivek Chahal",
    roles: ["Co-Lead", "iOS Lead"],
    intro: "Interested in technology that no one uses.",
    urls: {
      github: "https://github.com/Vivek09Chahal",
      linkedin: "https://www.linkedin.com/in/vivekchahal09/",
      twitter: "https://x.com/vivekchahal09",
    },
    image: Vivek,
    keywords: ["ios", "web", "founder", "lead"],
  },
  {
    name: "Pulkit",
    roles: ["Chairperson", "Web Lead"],
    intro: "Born to be CEO of Google, forced to be chairperson of Deviators.",
    urls: {
      github: "https://github.com/pulkitxm",
      linkedin: "https://www.linkedin.com/in/pulkit-dce",
      twitter: "https://x.com/devpulkitt",
      portfolio: "https://pulkitxm.com",
    },
    image: Pulkit,
    keywords: ["chairperson", "founder", "lead", "web"],
  },
  {
    name: "Krishna Kartikay Bhatt",
    roles: ["Cyber Security Lead", "Event Management"],
    intro: "Likes to put the computer aside and talk about national duty.",
    urls: {
      github: "https://github.com/kkbhatt07",
      linkedin: "https://www.linkedin.com/in/krishna-kartikay-bhatt/",
    },
    image: KK,
    keywords: ["cyber", "lead", "founder", "event"],
  },
  {
    name: "Ayush Goyal",
    roles: ["Event Management Lead", "Team Coordinator", "Web Team"],
    intro: "Recruiter and intern at the same company.",
    urls: {
      github: "https://github.com/agayushh",
      linkedin: "https://www.linkedin.com/in/ayush-goyal-b4491324b",
      twitter: "https://x.com/agayushh",
      portfolio: "https://agayush.me/",
    },
    image: Ayush,
    keywords: ["event", "lead", "founder", "web"],
  },
  {
    name: "Deepika Anand",
    roles: ["Women in Tech Lead", "Event Management"],
    intro: "Member of Dead Poets Society…until the alarm goes off.",
    urls: {
      github: "https://github.com/deepikaa0402",
      linkedin: "https://www.linkedin.com/in/deepika-anand-4a371a26b",
    },
    image: Deepika,
    keywords: ["women", "lead", "event"],
  },
  {
    name: "Diksha Sharma",
    roles: ["UI/UX Lead", "Women in Tech"],
    intro:
      "An engineering student by profession, a cat whisperer by obsession.",
    urls: {
      github: "https://github.com/diksha1504",
      linkedin: "https://www.linkedin.com/in/diksha-sharma-6b43a5213/",
    },
    image: Diksha,
    keywords: ["ui", "women", "lead"],
  },
  {
    name: "Pooja Goel",
    roles: ["Web Team", "UI/UX Team", "Women in Tech"],
    intro: "Likes to keep her glasses foggy to ignore the world.",
    urls: {
      github: "https://github.com/Freya2005",
      linkedin: "https://www.linkedin.com/in/pooja-goel-19a9b2241/",
    },
    image: Pooja,
    keywords: ["web", "ui", "women"],
  },
  {
    name: "Vidushi Anand",
    roles: ["AI Team", "Women in Tech"],
    intro: "Pray for my delulus to come true.",
    urls: {
      github: "https://github.com/Vidushi2709",
      linkedin: "https://www.linkedin.com/in/vidushi-anand-49420928a",
      twitter: "https://x.com/Vidushi_Anand_",
    },
    image: Vidushi,
    keywords: ["ai", "women"],
  },
  {
    name: "Manas Thakur",
    roles: ["AI Team"],
    intro: "Prefers work over sleep and sleep over coffee.",
    urls: {
      github: "https://github.com/Manas-thakur",
      linkedin: "https://www.linkedin.com/in/manasthakur30/",
      twitter: "https://x.com/Menace_thakur",
    },
    image: Manas,
    keywords: ["ai"],
  },
  {
    name: "Kunal Verma",
    roles: ["Social Media", "Web Team"],
    intro: "A unique fusion of dancer and coder.",
    urls: {
      github: "https://github.com/kunalverma06",
      linkedin: "https://www.linkedin.com/in/kunal-verma-528431291",
    },
    image: Kunal,
    keywords: ["social", "web"],
  },
  {
    name: "Tanmay Verma",
    roles: ["Social Media", "Cyber Security Team", "Blockchain Team"],
    intro:
      "I'm like a bug in the matrix, but instead of being fixed, I add more bugs (and caffeine)!",
    urls: {
      github: "https://github.com/Tanmay1906",
      linkedin: "https://www.linkedin.com/in/tanmayverma190605",
    },
    image: Tanmay,
    keywords: ["social", "cyber", "blockchain"],
  },
  {
    name: "Yash Kumar",
    roles: ["DSA Team", "Event Management"],
    intro: "Lost a staring competition with his dog once.",
    urls: {
      github: "https://github.com/Hero-Alpha",
      linkedin: "https://www.linkedin.com/in/yash-kumar-4a936426b/",
    },
    image: Yash,
    keywords: ["dsa", "event"],
  },
  {
    name: "Saurabh Singh",
    roles: ["DSA Team"],
    intro: "Call for DSA help... or if your car breaks down.",
    urls: {
      github: "https://github.com/sa1-1rabh",
      linkedin: "https://www.linkedin.com/in/sa1-1rabh",
    },
    image: Saurabh,
    keywords: ["dsa"],
  },
  {
    name: "Dipti Chahar",
    roles: ["DSA Team", "Women in Tech"],
    intro: "Smashes DSA problems and shuttles with equal flair.",
    urls: {
      github: "https://github.com/DiptiChahar",
      linkedin: "https://www.linkedin.com/in/dipti-chahar-948a26247/",
    },
    image: Dipti,
    keywords: ["dsa", "women"],
  },
  {
    name: "Divyansh Sethi",
    roles: ["DSA Team", "Event Management"],
    intro: "Lives in Choomantar Gali and has applied to Hogwarts 235 times.",
    urls: {
      github: "https://github.com/coderizzz",
      linkedin: "https://www.linkedin.com/in/divyansh-sethi-035b7b25b",
    },
    image: Divyansh,
    keywords: ["dsa", "event"],
  },
  {
    name: "Bhavya Kataria",
    roles: ["Social Media", "Designer", "Editor"],
    intro: "Not on Tinder, but you can find me on Discord.",
    urls: {
      github: "https://github.com/damnbhavya",
      linkedin: "https://www.linkedin.com/in/katariabhavya",
    },
    image: Bhavya,
    keywords: ["social", "editor", "design"],
  },
  {
    name: "Aditya Yadav",
    roles: ["Editor"],
    intro: "Can edit everything except your sessional scorecard.",
    urls: {
      github: "https://github.com/ADIXD0001",
      linkedin: "https://www.linkedin.com/in/aditya-yadav-098850289",
    },
    image: Aditya,
    keywords: ["editor"],
  },
];

export default team.map((member) => ({
  ...member,
  keywords: Array.from(new Set([...member.keywords, "club"])),
}));
