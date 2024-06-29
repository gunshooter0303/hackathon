import About from "@/components/About";
import Hero from "@/components/Hero";
import { GlobeDemo } from "@/components/ui/globe-demo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center mt-4 gap-y-6">
      <Hero />
      <section className="mt-8 w-10/12">
        <h2 className="text-2xl font-bold text-center">Key Focus Areas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className="p-4 rounded-lg text-center border border-border">
            <h3 className="font-semibold text-xl">Mitigation</h3>
            <p>
              Strategies to reduce greenhouse gas emissions and enhance carbon
              sinks.
            </p>
          </div>
          <div className="p-4 rounded-lg text-center border border-border">
            <h3 className="font-semibold text-xl">Adaptation</h3>
            <p>Actions to adjust to current and future climate impacts.</p>
          </div>
          <div className="p-4 rounded-lg text-center border border-border">
            <h3 className="font-semibold text-xl">Impact Reduction</h3>
            <p>Measures to minimize the adverse effects of climate change.</p>
          </div>
          <div className="p-4 rounded-lg text-center border border-border">
            <h3 className="font-semibold text-xl">Early Warning Systems</h3>
            <p>Systems to forecast and communicate climate-related hazards.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
