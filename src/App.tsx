export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#ffffff",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "1280px",
          minHeight: "100vh",
          margin: "0 auto",
          padding: "64px 24px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "840px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "10px 16px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.04)",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.68)",
              marginBottom: "24px",
            }}
          >
            Loc7 Rebuild
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(42px, 7vw, 78px)",
              lineHeight: 0.96,
              letterSpacing: "-0.05em",
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            Estrutura limpa para reconstruir a Loc7 com controle total.
          </h1>

          <p
            style={{
              marginTop: "28px",
              marginBottom: 0,
              maxWidth: "760px",
              fontSize: "clamp(18px, 2vw, 22px)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Novo ambiente criado para evoluir o projeto com arquitetura mais
            sólida, decisões mais seguras e zero dependência da bagunça
            acumulada no código anterior.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "36px",
            }}
          >
            <div
              style={{
                minHeight: "50px",
                padding: "0 22px",
                borderRadius: "999px",
                background: "#ffffff",
                color: "#000000",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Base ativa
            </div>

            <div
              style={{
                minHeight: "50px",
                padding: "0 22px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.14)",
                color: "rgba(255,255,255,0.76)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Próximo passo: layout global
            </div>
          </div>

          <p
            style={{
              marginTop: "24px",
              marginBottom: 0,
              fontSize: "14px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.45)",
            }}
          >
            Rebuild separado do projeto em produção, com deploy limpo,
            versionamento previsível e espaço seguro para evolução.
          </p>
        </div>
      </section>
    </main>
  );
}
