import { IntroLoader } from "../app/components/IntroLoader";
import { Header } from "../app/components/Header";
import { Testing } from "../app/components/Testing";
import { IntroductionSection } from "../app/components/IntroductionSection";
import { Project } from "../app/components/Project";
export default function Home() {
  return (
    <main className="bg-white min-h-screen text-black dark:bg-gray-900 dark:text-white">
      <IntroLoader />
      <Header />
      <IntroductionSection />
      <Project />
    </main>
  );
}
