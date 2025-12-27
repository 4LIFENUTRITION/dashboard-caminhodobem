import Header from "./components/Header";
import MetricCard from "./components/MetricCard";

export default function Home() {
  return (
    <>
      <Header />

      <main style={{ padding: 24 }}>
        <h2>Resumo Geral</h2>

        <div style={{
          display: "flex",
          gap: 16,
          marginTop: 16
        }}>
          <MetricCard title="Vendas Hoje" value="€0,00" />
          <MetricCard title="Encomendas" value="0" />
          <MetricCard title="Em Trânsito" value="0" />
          <MetricCard title="Entregues" value="0" />
        </div>
      </main>
    </>
  );
}
