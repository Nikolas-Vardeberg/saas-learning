import CompanionCard from "@/components/companion-card";
import CompanionsList from "@/components/companions-list";
import Cta from "@/components/cta";
import { getCompanions, getRecentSessions } from "@/lib/companion/actions";
import { getSubjectColor } from "@/lib/utils";

export default async function Home() {
  const companions = await getCompanions({ limit: 3});
  const recentSessionsCompanions = await getRecentSessions(10);

  return(
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      
      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard 
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessionsCompanions}
          className="w-2/3 max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  )
}