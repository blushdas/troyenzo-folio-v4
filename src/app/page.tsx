import { VideoBackground } from "@/components/ui/VideoBackground";
import { HomePage } from "@/components/home/HomePage";
import { Portfolio } from "@/components/home/Portfolio";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <VideoBackground />
      <HomePage />
      <Portfolio />
      <Footer />
    </>
  );
}
