import HeroAnimation from "./HeroAnimation";
import Socials from "./Socials";

export default function Hero() {
  return (
    <div>
      <p className="mb-6 font-semibold">
        <span className="text-transparent sm:bg-gradient-to-r to-foreground bg-gradient-to-t from-muted-foreground bg-clip-text lg:text-[54px] text-[40px]">
          Hi, I&apos;m Ctianyang
        </span>
      </p>
      <div className="h-10 mb-8 sm:mb-10">
        <HeroAnimation text1={"<Developer />"} text2="<Student />" />
      </div>
      <p className="mb-8 text-xl text-transparent sm:mb-10 sm:text-[26px] bg-gradient-to-r from-green-200 via-green-100 opacity-60 to-green-200 bg-clip-text w-fit">
        #tianyang
      </p>

      <p className="mb-4 text-sm text-transparent sm:mb-6 sm:text-base bg-gradient-to-b to-muted-foreground from-foreground bg-clip-text w-200">
        I am currently a master&apos;s student at Beijing University of Technology of China; <br />
        I am currently interested in AI Infra, including Model Compression, Model Quantization, Inference, etc. <br />
        I used to be an intern at Baidu and OPPO, and both the internship content was about model Quantization; <br />
        My Skills: Python/Linux, C++/CUDA.
      </p>

      <Socials />
    </div>
  );
}
