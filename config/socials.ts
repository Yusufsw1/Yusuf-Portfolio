import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@Yusufsw1",
    icon: Icons.gitHub,
    link: "https://github.com/Yusufsw1",
  },
  {
    name: "LinkedIn",
    username: "Yusuf Satrio  Wibowo",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/yusufsatriow",
  },
];
