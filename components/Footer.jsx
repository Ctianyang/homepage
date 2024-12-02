export default function Footer() {
  return (
    <div className="w-full mt-20 text-muted-foreground ">
      <div className="w-full border border-muted-foreground opacity-10 "></div>
      <div className="flex flex-col items-center justify-center h-24 gap-1 font-mono text-sm opacity-70">
        <p>
          &copy; {new Date().getFullYear()} Ctianyang. All rights reserved.
        </p>
      </div>
    </div>
  );
}
