import type { Metadata } from "next";

export const metadata: Metadata = { title: "Introducing Broker" };

export default function IntroducingBroker() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-3xl font-semibold">Introducing Broker</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">Introducing Broker page content</p>
      </main>
    </div>
  );
}
