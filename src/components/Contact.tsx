"use client";

import { useState, FormEvent } from "react";
import { contact as styles } from "@/styles/components";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (!formData.name.trim()) {
      setError("Informe seu nome completo");
      setIsSubmitting(false);
      return;
    }

    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(formData.name)) {
      setError("O nome não pode conter números ou símbolos");
      setIsSubmitting(false);
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Informe um e-mail válido");
      setIsSubmitting(false);
      return;
    }

    if (!formData.company.trim()) {
      setError("Informe o nome da empresa");
      setIsSubmitting(false);
      return;
    }

    if (formData.phone && formData.phone.length !== 11) {
      setError("O telefone deve conter exatamente 11 números");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Erro ao enviar mensagem");
        return;
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      setError(
        "Não foi possível enviar a mensagem agora. Tente novamente em instantes.",
      );
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className={styles.section}>
      <div className={styles.gridPattern} />
      <div className={styles.orbLeft} />
      <div className={styles.orbRight} />

      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <span className={styles.badge}>Entre em Contato</span>
            <h2 className={styles.title}>
              Pronto para{" "}
              <span className={styles.titleGradient}>transformar</span> sua
              gestão hídrica?
            </h2>
            <p className={styles.description}>
              Entre em contato conosco e descubra como a PREVISIOS pode otimizar
              suas operações de saneamento.
            </p>

            <div className={styles.benefitsList}>
              {[
                "Atendimento personalizado",
                "Análise gratuita do potencial de economia",
                "Suporte técnico especializado",
                "Implementação rápida e sem interrupções",
              ].map((benefit, index) => (
                <div key={index} className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className={styles.benefitText}>{benefit}</span>
                </div>
              ))}
            </div>

            <div className={styles.contactInfo}>
              <p className={styles.contactLabel}>
                Prefere falar diretamente conosco?
              </p>
              <div className={styles.contactLinks}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                contato@previsios.com.br
              </div>
            </div>
          </div>

          <div className="relative">
            <div className={styles.formCard}>
              {submitted ? (
                <div className="text-center py-12">
                  <div className={styles.successIcon}>
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className={styles.successTitle}>Mensagem Enviada!</h3>
                  <p className={styles.successText}>
                    Entraremos em contato em breve.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className={styles.successButton}
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className={styles.form}
                  noValidate
                >
                  {error && <div className={styles.errorBox}>{error}</div>}
                  <div className={styles.inputGrid}>
                    <div>
                      <label htmlFor="name" className={styles.label}>
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => {
                          const onlyLetters = e.target.value.replace(
                            /[^A-Za-zÀ-ÿ\s]/g,
                            "",
                          );
                          setFormData({ ...formData, name: onlyLetters });
                        }}
                        className={styles.input}
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={styles.label}>
                        E-mail corporativo *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={styles.input}
                        placeholder="seu@empresa.com"
                      />
                    </div>
                  </div>

                  <div className={styles.inputGrid}>
                    <div>
                      <label htmlFor="company" className={styles.label}>
                        Empresa *
                      </label>
                      <input
                        type="text"
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className={styles.input}
                        placeholder="Nome da empresa"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={styles.label}>
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        inputMode="numeric"
                        maxLength={11}
                        value={formData.phone}
                        onChange={(e) => {
                          const onlyNumbers = e.target.value.replace(/\D/g, "");
                          setFormData({
                            ...formData,
                            phone: onlyNumbers.slice(0, 11),
                          });
                        }}
                        className={styles.input}
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={styles.label}>
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={styles.textarea}
                      placeholder="Conte-nos sobre suas necessidades..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.submitButton}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Entrar em Contato
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className={styles.disclaimer}>
                    Ao enviar, você concorda com nossa política de privacidade.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
