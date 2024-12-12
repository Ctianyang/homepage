import "./global.css";
import { Roboto_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainWrapper from "@/components/MainWrapper";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Ctianyang| Developer",
  description:
    "Hi, I'm Ctianyang, a student at BJUT majoring in Computer Science. I am passionate about quantization.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scrollbar-thin scrollbar-thumb-muted-foreground scrollbar-track-muted"
    >
      <body className={`${roboto_mono.className} bg-bg-image `}>
        <div className="flex flex-col items-center px-4 pt-10 mx-auto max-w-4xl lg:max-w-5xl sm:px-12 md:px-20 lg:px-12 xl:max-w-7xl min-h-svh">
          <Header />
          <MainWrapper>{children}</MainWrapper>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
        <Toaster />
      </body>
    </html>
  );
}
