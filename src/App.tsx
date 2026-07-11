import { ContactPanel } from "./components/ContactPanel";
import { HeroPanel } from "./components/HeroPanel";
import { ProfileSection } from "./components/ProfileSection";
import { ProjectGrid } from "./components/ProjectGrid";
import { SiteHeader } from "./components/SiteHeader";
import { WorkflowSection } from "./components/WorkflowSection";

export default function App() {
  return (
    <main>
      <SiteHeader />
      <HeroPanel />
      <ProjectGrid />
      <WorkflowSection />
      <ProfileSection />
      <ContactPanel />
    </main>
  );
}
