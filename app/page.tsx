import { HeroSection } from "./components/HeroSection";
import { NavbarSection } from "./components/Navbar";
import { Manrope } from "next/font/google";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperiencesSection } from "./components/ExperiencesSection";
import { Footer } from "./components/Footer";

export const metadata = {
  title: "App Router",
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Page() {
  return (
    <main className={manrope.className}>
      <NavbarSection />
      <div className="flex flex-col overflow-y-auto px-10 lg:px-28 py-10 lg:py-20 gap-y-10 lg:gap-y-36 w-full">
        <HeroSection />
        <ExperiencesSection />
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}
