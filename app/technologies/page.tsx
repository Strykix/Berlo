import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageIntro from "@/components/PageIntro";
import Technologies from "@/components/Technologies";

export default function TechnologiesPage() {
  return (
    <>
      <Header />
      <main id="contenu-principal">
        <PageIntro
          title="Technologies terrain, cloud IoT et data"
          description="MQTT, Modbus, OPC-UA, LoRaWAN, Grafana, InfluxDB, cloud, API et alerting : le bon niveau de technologie selon le terrain."
        />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
