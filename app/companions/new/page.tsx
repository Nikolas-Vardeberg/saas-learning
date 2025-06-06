import CompanionForm from "@/components/companion-form";
import { newCompanionPermissons } from "@/lib/companion/actions";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {
    const { userId } = await auth();
    if (!userId) redirect("/sign-in")

    const canCreateCompanion = await newCompanionPermissons();

    return(
        <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
            {canCreateCompanion ? (
                <article className="w-full gap-3 flex flex-col">
                    <h1>Companion Builder</h1>

                    <CompanionForm />
                </article>
            ): (
                <article className="companion-limit">
                    <Image 
                        src="/images/limit.svg"
                        alt="Companion limit"
                        width={360}
                        height={230}
                    />  
                    <div className="cta-badge">
                        Upgrade your plan
                    </div>
                    <h1>You've Reached Your Limit</h1>
                    <p>You've reached your companion limit. Upgrade to create more companion</p>
                    <Link href="/subscription" className="btn-primary w-full justify-center">
                        Upgrade my Plan
                    </Link>
                </article>
            )}
        </main>
    )
}