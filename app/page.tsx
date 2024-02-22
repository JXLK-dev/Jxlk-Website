import { IntroLoader } from "../app/components/IntroLoader";
import { Header } from "../app/components/Header";
import { Testing } from "../app/components/Testing";
import { IntroductionSection } from "../app/components/IntroductionSection";
export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <IntroLoader />
      <Header />
      <IntroductionSection />
    </main>
  );
}
