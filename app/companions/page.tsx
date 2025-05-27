import CompanionCard from "@/components/companion-card";
import SubjectFilters from "@/components/search-filters";
import SearchInput from "@/components/search-input";
import { getCompanions } from "@/lib/companion/actions";
import { getSubjectColor } from "@/lib/utils";

export default async function Page( { searchParams }: SearchParams) {
    const filters = await searchParams; 
    const subject = filters.subject ? filters.subject : "";
    const topic = filters.topic ? filters.topic : "";

    const companions = await getCompanions({ subject, topic });

    return(
        <main>
            <section className="flex justify-between gap-4 max-sm:flex-col">
                <h1>Companion Library</h1>
                <div className="flex gap-4">
                    <SearchInput />
                    <SubjectFilters />
                </div>
            </section>
            <section className="companions-grid">
                {companions.map((companion) => (
                    <CompanionCard 
                        key={companion.id}
                        {...companion}
                        color={getSubjectColor(companion.subject)}
                    />
                ))}
            </section>
        </main>
    )
}