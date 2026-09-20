import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AppInterface from "@/components/AppInterface";
import Commands from "@/components/Commands";
import Download from "@/components/Download";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AppInterface />
        <Commands />
        <Download />
      </main>
      <Footer />
    </>
  );
}
