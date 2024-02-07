import { IntroLoader } from "../app/components/IntroLoader";
import { Header } from "../app/components/Header";
import { Testing } from "../app/components/Testing";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <IntroLoader />
      <Header />
      {/* <Testing /> */}
    </main>
  );
}
