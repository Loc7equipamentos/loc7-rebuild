import { Route, Switch, useLocation } from "wouter";
import Navbar from "./Navbar";

// PÁGINAS (temporárias)
function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen pt-20 text-white text-2xl">
      HOME
    </div>
  );
}

function Catalogo() {
  return (
    <div className="flex items-center justify-center min-h-screen pt-20 text-white text-2xl">
      CATÁLOGO
    </div>
  );
}

function Produto() {
  return (
    <div className="flex items-center justify-center min-h-screen pt-20 text-white text-2xl">
      PRODUTO
    </div>
  );
}

function Orcamento() {
  return (
    <div className="flex items-center justify-center min-h-screen pt-20 text-white text-2xl">
      ORÇAMENTO
    </div>
  );
}

function Admin() {
  return (
    <div className="flex items-center justify-center min-h-screen text-black text-2xl bg-white">
      ADMIN PANEL
    </div>
  );
}

export default function App() {
  const [location] = useLocation();

  const isAdmin = location.startsWith("/admin-panel");

  return (
    <div className="bg-black min-h-screen text-white">
      {!isAdmin && <Navbar />}

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/equipamentos/:category" component={Catalogo} />
        <Route path="/produto/:slug" component={Produto} />
        <Route path="/orcamento" component={Orcamento} />
        <Route path="/admin-panel" component={Admin} />
      </Switch>
    </div>
  );
}
