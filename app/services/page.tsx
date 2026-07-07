import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageIntro from "@/components/PageIntro";
import Services from "@/components/Services";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="contenu-principal">
        <PageIntro
          title="Services IoT, supervision et cloud industriel"
          description="Des offres lisibles pour auditer le terrain, lancer un POC, créer des dashboards et accompagner vos choix Industrie 4.0."
        />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
