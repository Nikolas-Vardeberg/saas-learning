import CompanionCard from "@/components/companion-card";
import CompanionsList from "@/components/companions-list";
import Cta from "@/components/cta";
import { recentSessions } from "@/constants";

export default function Home() {
  return(
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      
      <section className="home-section">
        <CompanionCard 
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="456"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="science"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard
          id="789"
          name="Verba the Vocabulary Builder"
          topic="language"
          subject="English Literature"
          duration={30}
          color="#BDE7FF"
        />
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          className="w-2/3 max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  )
}