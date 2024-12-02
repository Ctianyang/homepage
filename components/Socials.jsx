import { Github, Linkedin, Mail } from "lucide-react";
import SocialMediaLink from "./SocialMediaLink";

function Socials() {
  return (
    <div className="flex gap-6 ">
      {/* <SocialMediaLink link="https://www.linkedin.com/in/zhihao-lin1/">
        <Linkedin />
      </SocialMediaLink> */}
      <SocialMediaLink link="https://github.com/Ctianyang">
        <Github />
      </SocialMediaLink>
      <SocialMediaLink link="mailto:294855805@qq.com">
        <Mail />
      </SocialMediaLink>
    </div>
  );
}

export default Socials;
