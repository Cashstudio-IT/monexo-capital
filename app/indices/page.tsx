import type { Metadata } from "next";
import IndicesHero from "@/components/sections/indices-hero";

export const metadata: Metadata = { title: "Indices" };

export default function IndicesPage() {
    return (
        <main>
            <IndicesHero />
        </main>
    );
}