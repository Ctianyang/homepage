import CppIcon from "@/public/icons/CplusIcon";
import PythonIcon from "@/public/icons/PythonIcon";
import NvidiaIcon from "@/public/icons/NvidiaIcon";
import PytorchIcon from "@/public/icons/PytorchIcon";
import TensorflowIcon from "@/public/icons/TensorflowIcon";
import OnnxIcon from "@/public/icons/OnnxIcon";
import MTKIcon from "@/public/icons/MTKIcon";
import QualcommIcon from "@/public/icons/QualcommIcon";
import OpenVINOIcon from "@/public/icons/OpenVINOIcon";

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
              <NvidiaIcon className="skillsIcon" />
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
          <li className="flex items-center gap-20 mb-2">
            <div className="flex gap-2 ">
              <PytorchIcon className="skillsIcon" />
              <TensorflowIcon className="skillsIcon" />
            </div>

            <div className="text-sm font-semibold text-muted-foreground">
              PyTorch + Tensonflow + Torch.fx
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Deploy Backend</h3>
        <ul>
          <li className="flex items-center gap-20 mb-2">
            <div className="flex gap-2 ">
              <MTKIcon className="skillsIcon" />
              <QualcommIcon className="skillsIcon" />
            </div>
            <div className="text-sm font-semibold text-muted-foreground">
              MeidaTeK + Qualcomm
            </div>
          </li>

          <li className="flex items-center gap-10 mb-2">
            <div className="flex gap-2 ">
              <OpenVINOIcon className="skillsIcon" />
              <NvidiaIcon className="skillsIcon" />
              <OnnxIcon className="skillsIcon" />
            </div>
            <div className="text-sm font-semibold text-muted-foreground">
            OpenVINO + TensorRT + ONNX
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
}
