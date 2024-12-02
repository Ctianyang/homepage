export default function Aboutme() {
  return (
    <div className="w-full mb-16 rounded-lg">
      <h2 className="pl-2 mb-10 text-2xl font-bold text-green-200 opacity-60">
        About Me
      </h2>
      <ul className="flex flex-col gap-5 pl-6 list-disc opacity-80">
        <li>
          👋 I am currently a master&apos;s student at <span className="font-bold ">BJUT</span>.
        </li>

        <li>
          🌎 I am interested in <span className="font-bold">AI Infra, Quantization </span>.
        </li>
        <li>
          ✈️ Lived in{" "}
          <a
            className="font-bold"
            href="https://en.wikipedia.org/wiki/Minneapolis"
            target="_blank"
          >
            Beijing
          </a>
          .{" "}
        </li>
        <li>
          🎧 I&apos;m especially drawn to Chinese R&B. Favorites musicians are
          Khalil Fong and Coldplay.
        </li>
      </ul>
    </div>
  );
}
