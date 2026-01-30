"use client";

import { useState, FormEvent } from "react";
import { contact as styles } from "@/styles/components";

type FieldErrors = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
};

function validateField(
  field: keyof FieldErrors,
  value: string,
): string | undefined {
  switch (field) {
    case "name":
      if (!value.trim()) return "Informe seu nome completo";
      if (!/^[A-Za-zÀ-ÿ\s]+$/.test(value))
        return "O nome não pode conter números ou símbolos";
      return undefined;
    case "email":
      if (!value.trim()) return "Informe seu e-mail";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return "Informe um e-mail válido";
      return undefined;
    case "company":
      if (!value.trim()) return "Informe o nome da empresa";
      return undefined;
    case "phone":
      if (value && value.length > 0 && value.length < 11)
        return "O celular deve conter 11 números";
      return undefined;
  }
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="flex items-center gap-1.5 mt-1.5 text-xs text-red-400 animate-fade-in">
      <svg
        className="w-3.5 h-3.5 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      {message}
    </p>
  );
}

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
  const [submitError, setSubmitError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleBlur = (field: keyof FieldErrors) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setFieldErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Limpa erro do campo ao digitar, se já foi tocado
    if (touched[field]) {
      const error = validateField(field as keyof FieldErrors, value);
      setFieldErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const inputClass = (field: keyof FieldErrors) =>
    `${styles.input} ${
      touched[field] && fieldErrors[field]
        ? "!border-red-500/60 !ring-red-500/30"
        : touched[field] && !fieldErrors[field] && formData[field]
          ? "!border-green-500/40"
          : ""
    }`;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    // Valida todos os campos
    const allFields: (keyof FieldErrors)[] = [
      "name",
      "email",
      "company",
      "phone",
    ];
    const newErrors: FieldErrors = {};
    let hasError = false;

    for (const field of allFields) {
      const err = validateField(field, formData[field]);
      if (err) {
        newErrors[field] = err;
        hasError = true;
      }
    }

    setFieldErrors(newErrors);
    setTouched({ name: true, email: true, company: true, phone: true });

    if (hasError) {
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
        setSubmitError(data.error || "Erro ao enviar mensagem");
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
      setFieldErrors({});
      setTouched({});
    } catch (err) {
      setSubmitError(
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
                  {submitError && (
                    <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm animate-fade-in">
                      <svg
                        className="w-5 h-5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{submitError}</span>
                    </div>
                  )}

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
                          handleChange("name", onlyLetters);
                        }}
                        onBlur={() => handleBlur("name")}
                        className={inputClass("name")}
                        placeholder="Seu nome"
                      />
                      <FieldError
                        message={touched.name ? fieldErrors.name : undefined}
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
                        onChange={(e) => handleChange("email", e.target.value)}
                        onBlur={() => handleBlur("email")}
                        className={inputClass("email")}
                        placeholder="seu@empresa.com"
                      />
                      <FieldError
                        message={touched.email ? fieldErrors.email : undefined}
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
                          handleChange("company", e.target.value)
                        }
                        onBlur={() => handleBlur("company")}
                        className={inputClass("company")}
                        placeholder="Nome da empresa"
                      />
                      <FieldError
                        message={
                          touched.company ? fieldErrors.company : undefined
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={styles.label}>
                        Celular
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        inputMode="numeric"
                        maxLength={11}
                        value={formData.phone}
                        onChange={(e) => {
                          const onlyNumbers = e.target.value.replace(/\D/g, "");
                          handleChange("phone", onlyNumbers.slice(0, 11));
                        }}
                        onBlur={() => handleBlur("phone")}
                        className={inputClass("phone")}
                        placeholder="(00) 00000-0000"
                      />
                      <FieldError
                        message={touched.phone ? fieldErrors.phone : undefined}
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
                      onChange={(e) => handleChange("message", e.target.value)}
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
