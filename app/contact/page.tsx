import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageIntro from "@/components/PageIntro";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="contenu-principal">
        <PageIntro
          title="Décrire votre besoin IoT ou supervision"
          description="Machine, bâtiment technique, monitoring photovoltaïque, performance énergétique ou dashboard métier : envoyez le contexte pour préparer un premier diagnostic."
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
