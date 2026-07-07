import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IndustryVisuals from "@/components/IndustryVisuals";
import PageIntro from "@/components/PageIntro";
import UseCases from "@/components/UseCases";

export default function UseCasesPage() {
  return (
    <>
      <Header />
      <main id="contenu-principal">
        <PageIntro
          title="Cas d'usage IoT pour terrain industriel, énergie et bâtiments"
          description="Des exemples concrets pour relier capteurs connectés, cloud IoT, dashboard énergie et supervision industrielle à des besoins métier."
        />
        <IndustryVisuals />
        <UseCases />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
