import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { legal as styles } from "@/styles/components";

export const metadata = {
  title: "Política de Privacidade - PREVISIOS",
  description: "Política de Privacidade da plataforma PREVISIOS",
};

export default function PoliticaDePrivacidade() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h1 className={styles.title}>
              Política de Privacidade
            </h1>
            <p className={styles.date}>
              Última atualização: Janeiro de 2026
            </p>

            <div className={styles.content}>
              <section>
                <h2 className={styles.sectionTitle}>
                  1. Introdução
                </h2>
                <p className={styles.sectionText}>
                  O PREVISIOS está comprometido com a proteção da privacidade e
                  dos dados pessoais de seus usuários. Esta Política de
                  Privacidade descreve como coletamos, usamos, armazenamos e
                  protegemos suas informações, em conformidade com a Lei Geral
                  de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                </p>
              </section>

              <section>
                <h2 className={styles.sectionTitle}>
                  2. Dados Coletados
                </h2>
                <p className={`${styles.sectionText} mb-3`}>
                  Coletamos os seguintes tipos de dados:
                </p>
                <h3 className="text-lg font-medium text-white mt-4 mb-2">
                  2.1 Dados de Identificação
                </h3>
                <ul className={`${styles.list} space-y-1`}>
                  <li>Nome completo</li>
                  <li>E-mail corporativo</li>
                  <li>Telefone</li>
                  <li>Nome da empresa</li>
                  <li>Cargo/função</li>
                </ul>

                <h3 className="text-lg font-medium text-white mt-4 mb-2">
                  2.2 Dados de Uso da Plataforma
                </h3>
                <ul className={`${styles.list} space-y-1`}>
                  <li>Logs de acesso</li>
                  <li>Endereço IP</li>
                  <li>Navegador utilizado</li>
                  <li>Páginas visitadas</li>
                  <li>Tempo de sessão</li>
                </ul>

                <h3 className="text-lg font-medium text-white mt-4 mb-2">
                  2.3 Dados Operacionais
                </h3>
                <ul className={`${styles.list} space-y-1`}>
                  <li>Dados de bombas e reservatórios</li>
                  <li>Métricas de consumo de água</li>
                  <li>Informações de sensores IoT</li>
                  <li>Histórico de operações</li>
                </ul>
              </section>

              <section>
                <h2 className={styles.sectionTitle}>
                  3. Finalidade do Tratamento
                </h2>
                <p className={`${styles.sectionText} mb-3`}>
                  Utilizamos seus dados para:
                </p>
                <ul className={styles.list}>
                  <li>Fornecer e melhorar nossos serviços</li>
                  <li>Processar previsões e análises com Machine Learning</li>
                  <li>Gerar relatórios e dashboards personalizados</li>
                  <li>Enviar notificações e alertas do sistema</li>
                  <li>Comunicar atualizações e novidades</li>
                  <li>Prestar suporte técnico</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                </ul>
              </section>

              <section>
                <h2 className={styles.sectionTitle}>
                  4. Base Legal
                </h2>
                <p className={styles.sectionText}>
                  O tratamento de dados pessoais é realizado com base nas
                  seguintes hipóteses legais previstas na LGPD:
                </p>
                <ul className={`${styles.list} mt-3`}>
                  <li>
                    <strong className="text-white">
                      Execução de contrato:
                    </strong>{" "}
                    para prestação dos serviços contratados
                  </li>
                  <li>
                    <strong className="text-white">Consentimento:</strong> para
                    comunicações de marketing
                  </li>
                  <li>
                    <strong className="text-white">Legítimo interesse:</strong>{" "}
                    para melhorias do serviço e segurança
                  </li>
                  <li>
                    <strong className="text-white">Obrigação legal:</strong>{" "}
                    para cumprimento de exigências legais
                  </li>
                </ul>
              </section>

              <section>
                <h2 className={styles.sectionTitle}>
                  5. Compartilhamento de Dados
                </h2>
                <p className={`${styles.sectionText} mb-3`}>
                  Seus dados podem ser compartilhados com:
                </p>
                <ul className={styles.list}>
                  <li>
                    Prestadores de serviços essenciais (hospedagem, e-mail)
                  </li>
                  <li>Autoridades públicas, quando exigido por lei</li>
                  <li>Parceiros comerciais, mediante seu consentimento</li>
                </ul>
                <p className={`${styles.sectionText} mt-3`}>
                  Não vendemos ou alugamos seus dados pessoais a terceiros.
                </p>
              </section>

              <section>
                <h2 className={styles.sectionTitle}>
                  6. Segurança dos Dados
                </h2>
                <p className={styles.sectionText}>
                  Implementamos medidas técnicas e organizacionais para proteger
                  seus dados, incluindo:
                </p>
                <ul className={`${styles.list} mt-3`}>
                  <li>Criptografia de dados em trânsito e em repouso</li>
                  <li>Controles de acesso baseados em função</li>
                  <li>Monitoramento contínuo de segurança</li>
                  <li>Backups regulares</li>
                  <li>Treinamento de equipe em proteção de dados</li>
                </ul>
              </section>

              <section>
                <h2 className={styles.sectionTitle}>
                  7. Retenção de Dados
                </h2>
                <p className={styles.sectionText}>
                  Mantemos seus dados pelo tempo necessário para cumprir as
                  finalidades descritas nesta política, ou conforme exigido por
                  lei. Após o término da relação contratual, os dados serão
                  retidos pelo prazo legal aplicável e depois eliminados de
                  forma segura.
                </p>
              </section>

              <section>
                <h2 className={styles.sectionTitle}>
                  8. Seus Direitos
                </h2>
                <p className={`${styles.sectionText} mb-3`}>
                  Conforme a LGPD, você tem direito a:
                </p>
                <ul className={styles.list}>
                  <li>Confirmar a existência de tratamento de dados</li>
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos ou desatualizados</li>
                  <li>Solicitar anonimização ou eliminação de dados</li>
                  <li>Solicitar portabilidade dos dados</li>
                  <li>Revogar o consentimento a qualquer momento</li>
                  <li>Obter informações sobre compartilhamento</li>
                </ul>
              </section>

              <section>
                <h2 className={styles.sectionTitle}>
                  9. Cookies
                </h2>
                <p className={styles.sectionText}>
                  Utilizamos cookies e tecnologias similares para melhorar a
                  experiência do usuário, analisar o tráfego e personalizar
                  conteúdo. Você pode gerenciar as preferências de cookies nas
                  configurações do seu navegador.
                </p>
              </section>

              <section>
                <h2 className={styles.sectionTitle}>
                  10. Alterações nesta Política
                </h2>
                <p className={styles.sectionText}>
                  Esta política pode ser atualizada periodicamente.
                  Notificaremos sobre alterações significativas por e-mail ou
                  através de aviso na plataforma. A data da última atualização
                  estará sempre indicada no início do documento.
                </p>
              </section>

              <section>
                <h2 className={styles.sectionTitle}>
                  11. Contato
                </h2>
                <p className={styles.sectionText}>
                  Para questões gerais sobre privacidade:
                </p>
                <p className="text-primary-400 mt-2">
                  contato@previsios.com.br
                </p>
                <p className="text-gray-400 mt-1">Londrina - PR, Brasil</p>
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
