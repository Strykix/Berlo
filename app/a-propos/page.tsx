import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageIntro from "@/components/PageIntro";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="contenu-principal">
        <PageIntro
          title="Berlo, conseil IoT pragmatique dans les Hauts-de-France"
          description="Un positionnement hybride entre terrain, architecture cloud, digital twin, software engineering et transformation numérique industrielle."
        />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
