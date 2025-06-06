import StackBanner from "../components/StackBanner";
import Intro from "../components/Intro";
import BackgroundAudio from "../components/BackgroundAudio";
import PhotosSection from "../components/PhotosSection";

export default function Home() {
  return (
    <div>
      <main>
        <PhotosSection />
        <Intro />
        <StackBanner />
        <BackgroundAudio />
      </main>
    </div>
  );
}
