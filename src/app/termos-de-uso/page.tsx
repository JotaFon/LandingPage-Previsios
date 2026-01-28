import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { legal as styles } from "@/styles/components";

export const metadata = {
  title: "Termos de Uso - PREVISIOS",
  description: "Termos de Uso da plataforma PREVISIOS",
};

export default function TermosDeUso() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h1 className={styles.title}>
              Termos de Uso
            </h1>
            <p className={styles.date}>
              Última atualização: Janeiro de 2026
            </p>

            <div className={styles.content}>
              <section>
                <h2 className={styles.sectionTitle}>
                  1. Aceitação dos Termos
                </h2>
                <p className={styles.sectionText}>
                  Ao acessar e utilizar a plataforma PREVISIOS, você concorda em
                  cumprir e estar vinculado a estes Termos de Uso. Se você não
                  concordar com qualquer parte destes termos, não deverá
                  utilizar nossos serviços.
                </p>
              </section>

              <section>
                <h2 className={styles.sectionTitle}>
                  2. Descrição dos Serviços
                </h2>
                <p className={styles.sectionText}>
                  O PREVISIOS é uma plataforma de gestão inteligente para
                  empresas de saneamento que utiliza tecnologias de Machine
                  Learning para:
                </p>
                <ul className={`${styles.list} mt-3`}>
                  <li>Previsão de gastos operacionais</li>
                  <li>Monitoramento de reservatórios em tempo real</li>
                  <li>Gestão e controle de bombas de água</li>
                  <li>Análise de dados e geração de relatórios</li>
                  <li>Detecção de anomalias e alertas inteligentes</li>
                </ul>
              </section>
              <section>
                <h2 className={styles.sectionTitle}>
                  3. Uso Aceitável
                </h2>
                <p className={`${styles.sectionText} mb-3`}>
                  Ao utilizar o PREVISIOS, você concorda em:
                </p>
                <ul className={styles.list}>
                  <li>Não violar leis ou regulamentos aplicáveis</li>
                  <li>Não tentar acessar sistemas ou dados sem autorização</li>
                  <li>Não interferir no funcionamento da plataforma</li>
                  <li>Não compartilhar credenciais de acesso com terceiros</li>
                  <li>Utilizar os serviços apenas para fins legítimos</li>
                </ul>
              </section>

              <section>
                <h2 className={styles.sectionTitle}>
                  4. Propriedade Intelectual
                </h2>
                <p className={styles.sectionText}>
                  Todo o conteúdo da plataforma PREVISIOS, incluindo mas não
                  limitado a software, algoritmos, textos, gráficos, logotipos,
                  ícones e imagens, é de propriedade exclusiva do PREVISIOS ou
                  de seus licenciadores e está protegido por leis de propriedade
                  intelectual.
                </p>
              </section>

              <section>
                <h2 className={styles.sectionTitle}>
                  5. Dados e Privacidade
                </h2>
                <p className={styles.sectionText}>
                  O tratamento de dados pessoais é regido por nossa Política de
                  Privacidade. Ao utilizar nossos serviços, você consente com a
                  coleta e uso de dados conforme descrito na referida política.
                </p>
              </section>

              <section>
                <h2 className={styles.sectionTitle}>
                  6. Limitação de Responsabilidade
                </h2>
                <p className={styles.sectionText}>
                  O PREVISIOS é fornecido &quot;como está&quot;. Não garantimos
                  que os serviços serão ininterruptos ou livres de erros. Em
                  nenhuma circunstância seremos responsáveis por danos
                  indiretos, incidentais, especiais ou consequentes decorrentes
                  do uso ou impossibilidade de uso da plataforma.
                </p>
              </section>

              <section>
                <h2 className={styles.sectionTitle}>
                  7. Modificações dos Termos
                </h2>
                <p className={styles.sectionText}>
                  Reservamo-nos o direito de modificar estes Termos de Uso a
                  qualquer momento. As alterações entrarão em vigor
                  imediatamente após a publicação. O uso continuado dos serviços
                  após as alterações constitui aceitação dos novos termos.
                </p>
              </section>

              <section>
                <h2 className={styles.sectionTitle}>
                  8. Rescisão
                </h2>
                <p className={styles.sectionText}>
                  Podemos suspender ou encerrar seu acesso aos serviços a
                  qualquer momento, por qualquer motivo, incluindo violação
                  destes Termos de Uso, sem aviso prévio.
                </p>
              </section>

              <section>
                <h2 className={styles.sectionTitle}>
                  9. Lei Aplicável
                </h2>
                <p className={styles.sectionText}>
                  Estes Termos de Uso são regidos pelas leis da República
                  Federativa do Brasil. Qualquer disputa será submetida ao foro
                  da comarca de Londrina, Estado do Paraná.
                </p>
              </section>

              <section>
                <h2 className={styles.sectionTitle}>
                  10. Contato
                </h2>
                <p className={styles.sectionText}>
                  Para dúvidas sobre estes Termos de Uso, entre em contato:
                </p>
                <p className="text-primary-400 mt-2">
                  contato@previsios.com.br
                </p>
              </section>
            </div>

            <div className={styles.backLink}>
              <a href="/" className={styles.backLinkText}>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Voltar para a página inicial
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
