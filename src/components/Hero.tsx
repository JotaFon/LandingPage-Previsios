"use client";

import { Bubbles, WaterWaves, WaterParticles } from "./WaterEffects";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary-600/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-secondary-600/20 rounded-full blur-[100px] animate-pulse-slow" />

      {/* Efeitos de Água */}
      <Bubbles count={25} />
      <WaterParticles count={40} />
      <WaterWaves />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800/60 backdrop-blur-sm border border-dark-700/50 rounded-full mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-500"></span>
          </span>
          <span className="text-sm text-gray-300">
            Tecnologia de ponta em gestão hídrica
          </span>
        </div>

        {/* Ícone de água animado */}
        <div className="relative inline-block mb-6 animate-fade-in">
          <svg
            className="w-16 h-16 md:w-20 md:h-20 text-primary-400 animate-float"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C12 2 4 10 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 10 12 2 12 2Z" opacity="0.3"/>
            <path d="M12 2C12 2 4 10 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 10 12 2 12 2ZM12 21C8.68629 21 6 18.3137 6 15C6 11.5 12 5 12 5C12 5 18 11.5 18 15C18 18.3137 15.3137 21 12 21Z"/>
            <ellipse cx="9" cy="15" rx="1.5" ry="2" fill="white" opacity="0.6"/>
          </svg>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          <span className="block text-white">Gestão Inteligente</span>
          <span className="block gradient-text">de Saneamento</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-400 mb-10 animate-slide-up [animation-delay:200ms]">
          O PREVISIOS utiliza <span className="text-white font-medium">Machine Learning</span> para
          prever gastos, monitorar reservatórios e otimizar operações de
          empresas de saneamento como Sanepar, Sabesp e outras.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up [animation-delay:400ms]">
          <a
            href="#contato"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/30 hover:scale-105 overflow-hidden"
          >
            {/* Efeito de brilho no botão */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative">Entrar em Contato</span>
            <svg
              className="relative w-5 h-5 group-hover:translate-x-1 transition-transform"
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
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-8 py-4 bg-dark-800/60 backdrop-blur-sm border border-dark-700/50 text-white font-semibold rounded-xl hover:bg-dark-700/60 hover:border-primary-500/50 transition-all duration-300"
          >
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
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            Conheça as Funcionalidades
          </a>
        </div>

        {/* Stats - Cards flutuando na água */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-20 animate-slide-up [animation-delay:600ms]">
          {[
            { value: "99.9%", label: "Precisão nas Previsões", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", delay: 0 },
            { value: "40%", label: "Redução de Custos", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", delay: 0.5 },
            { value: "24/7", label: "Monitoramento", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", delay: 1 },
            { value: "IA", label: "Machine Learning", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", delay: 1.5 },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center group"
              style={{
                animation: "floatOnWater 3s ease-in-out infinite",
                animationDelay: `${stat.delay}s`,
              }}
            >
              <div className="glass-card p-4 md:p-6 hover:border-primary-500/30 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-3 rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 border border-primary-500/30">
                  <svg
                    className="w-6 h-6 text-primary-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={stat.icon}
                    />
                  </svg>
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator com gota */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-12 text-primary-400/60"
          viewBox="0 0 20 30"
          fill="currentColor"
        >
          <path d="M10 0C10 0 0 12 0 20C0 25.5 4.5 30 10 30C15.5 30 20 25.5 20 20C20 12 10 0 10 0Z" />
          <ellipse cx="7" cy="18" rx="2" ry="3" fill="white" opacity="0.4" />
        </svg>
      </div>
    </section>
  );
}
