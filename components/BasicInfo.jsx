export default function BasisInfo() {
  return (
    <div className="w-full  rounded-lg shadow-[0_0px_1.2px_rgb(140,140,140)] py-6 px-4">
      <h2 className="mb-6 ml-2 text-xl text-green-200 opacity-60">About Me</h2>
      <ul className="flex flex-col gap-5 pl-6 text-sm list-disc opacity-80">
        <li>
          👋 I am a master&apos;s student of <span className="font-bold ">
          <a
            className="font-bold"
            href="https://www.bjut.edu.cn/"
            target="_blank"
          >
            BJUT
          </a>
            </span>.
        </li>

        <li>
          🌎 I am interested in <span className="font-bold">AI Infra, Quantization</span>.
        </li>

        <li>
          ✈️ Lived in{" "}
          <a
            className="font-bold"
            href="https://zh.wikipedia.org/wiki/%E5%8C%97%E4%BA%AC%E5%B8%82"
            target="_blank"
          >
            Beijing
          </a>
          .{" "}
        </li>

        <li>
          💪 I used to be an intern at{" "}
          <a
            className="font-bold"
            href="https://home.baidu.com/"
            target="_blank"
          >
           Baidu 
          </a>
          {" "}and
          <a
            className="font-bold"
            href="https://www.oppo.com/cn/smartphones/"
            target="_blank"
          >
          {" "}OPPO
          </a>
          , and both the internship content was about model Quantization.
        </li>
      </ul>
    </div>
  );
}
