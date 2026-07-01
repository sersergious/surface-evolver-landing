import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AppInterface from "@/components/AppInterface";
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
        <Download />
      </main>
      <Footer />
    </>
  );
}
