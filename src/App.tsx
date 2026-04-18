export default function App() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-16 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/65">
            Loc7 Rebuild
          </div>

          <h1 className="text-4xl font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Estrutura limpa para reconstruir a Loc7 com controle total.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Novo ambiente criado para evoluir o projeto com arquitetura mais
            sólida, decisões mais seguras e zero dependência da bagunça
            acumulada no código anterior.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <div className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black">
              Base ativa
            </div>

            <div className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/12 px-6 text-sm font-semibold text-white/75">
              Próximo passo: layout global
            </div>
          </div>

          <p className="mt-6 text-sm leading-6 text-white/45">
            Rebuild separado do projeto em produção, com deploy limpo, versionamento
            previsível e espaço seguro para evolução.
          </p>
        </div>
      </section>
    </main>
  );
}
