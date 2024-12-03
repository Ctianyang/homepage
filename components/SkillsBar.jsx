import CSSIcon from "@/public/icons/CSSIcon";
import CppIcon from "@/public/icons/CplusIcon";
import PythonIcon from "@/public/icons/Pythonicon";
import ExpressIcon from "@/public/icons/ExpressIcon";
import HtmlIcon from "@/public/icons/HtmlIcon";
import JavaIcon from "@/public/icons/JavaIcon";
import JSIcon from "@/public/icons/JSIcon";
import MongoIcon from "@/public/icons/MongoIcon";
import MySQLIcon from "@/public/icons/MySQLIcon";
import NextIcon from "@/public/icons/NextIcon";
import NodeIcon from "@/public/icons/NodeIcon";
import ReactIcon from "@/public/icons/ReactIcon";
import SpringIcon from "@/public/icons/SpringIcon";
import SupabaseIcon from "@/public/icons/SupabaseIcon";
import TailwindIcon from "@/public/icons/TailwindIcon";
import ViteIcon from "@/public/icons/ViteIcon";

export default function SkillsBar() {
  return (
    <div className="flex flex-col items-start justify-center w-full gap-6 p-6 shadow-[0_0px_1.2px_rgb(140,140,140)] rounded-lg ">
      {/* <IntroScrollMouse /> */}
      <h2 className="text-xl text-green-200 opacity-60">Tech Stacks</h2>
      <div>
        <h3 className="mb-4 text-lg font-semibold">Program Language</h3>
        <ul>
          <li className="flex items-center gap-10 mb-2">
            <div className="flex gap-2 ">
              <PythonIcon className="skillsIcon" />
              <CppIcon className="skillsIcon" />
              <JSIcon className="skillsIcon" />
            </div>
            <div className="text-sm font-semibold text-muted-foreground">
              Python + C++ + CUDA
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Framework</h3>
        <ul>
          <li className="flex items-center gap-10 mb-2">
            <div className="flex gap-2 ">
              <JavaIcon className="skillsIcon" />
              <SpringIcon className="skillsIcon" />
              <MySQLIcon className="skillsIcon" />
            </div>

            <div className="text-sm font-semibold text-muted-foreground">
              PyTorch + FX
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Deploy Backend</h3>
        <ul>
          <li className="flex items-center gap-20 mb-2">
            <div className="flex gap-2 ">
              <NextIcon className="skillsIcon" />
              <SupabaseIcon className="skillsIcon" />
            </div>
            <div className="text-sm font-semibold text-muted-foreground">
              ONNX + MTK + Qualcomm
            </div>
          </li>

          <li className="flex items-center gap-20 mb-2">
            <div className="flex gap-2 ">
              <NextIcon className="skillsIcon" />
              <SupabaseIcon className="skillsIcon" />
            </div>
            <div className="text-sm font-semibold text-muted-foreground">
              TensorRT + Openvino
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
}
