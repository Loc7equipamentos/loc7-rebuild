import { Switch, Route } from "wouter";

// ===== PÁGINAS BASE =====

function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <h1>HOME</h1>
    </div>
  );
}

function Catalogo() {
  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <h1>CATÁLOGO</h1>
    </div>
  );
}

function Produto() {
  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <h1>PRODUTO</h1>
    </div>
  );
}

function AdminPanel() {
  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <h1>ADMIN PANEL</h1>
    </div>
  );
}

function NotFound() {
  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <h1>404</h1>
    </div>
  );
}

// ===== APP =====

export default function App() {
  return (
    <Switch>
      {/* SITE */}
      <Route path="/" component={Home} />
      <Route path="/equipamentos/:category" component={Catalogo} />
      <Route path="/produto/:slug" component={Produto} />

      {/* ADMIN */}
      <Route path="/admin-panel" component={AdminPanel} />

      {/* FALLBACK */}
      <Route component={NotFound} />
    </Switch>
  );
}
