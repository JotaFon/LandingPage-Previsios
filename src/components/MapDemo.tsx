"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

type PumpStatus = "active" | "inactive" | "warning" | "critical";

interface Pump {
  id: number;
  name: string;
  location: string;
  status: PumpStatus;
  flow: string;
  pressure: string;
  lat: number;
  lng: number;
  coverage: number; // raio de cobertura em metros
}

// Coordenadas mais próximas, centradas no centro de Londrina
const pumps: Pump[] = [
  { id: 1, name: "Bomba Central", location: "Centro", status: "active", flow: "850 m³/h", pressure: "4.2 bar", lat: -23.3103, lng: -51.1628, coverage: 800 },
  { id: 2, name: "Bomba Norte", location: "Zona Norte", status: "active", flow: "720 m³/h", pressure: "3.8 bar", lat: -23.3020, lng: -51.1580, coverage: 650 },
  { id: 3, name: "Bomba Sul", location: "Zona Sul", status: "warning", flow: "450 m³/h", pressure: "2.1 bar", lat: -23.3180, lng: -51.1650, coverage: 550 },
  { id: 4, name: "Bomba Leste", location: "Zona Leste", status: "active", flow: "680 m³/h", pressure: "3.5 bar", lat: -23.3080, lng: -51.1520, coverage: 600 },
  { id: 5, name: "Bomba Oeste", location: "Zona Oeste", status: "critical", flow: "0 m³/h", pressure: "0.0 bar", lat: -23.3120, lng: -51.1750, coverage: 500 },
  { id: 6, name: "Reservatório Principal", location: "Centro-Norte", status: "active", flow: "1200 m³/h", pressure: "5.0 bar", lat: -23.3050, lng: -51.1650, coverage: 900 },
  { id: 7, name: "Bomba Industrial", location: "Distrito Industrial", status: "active", flow: "920 m³/h", pressure: "4.5 bar", lat: -23.3150, lng: -51.1480, coverage: 700 },
  { id: 8, name: "Bomba Residencial", location: "Jd. América", status: "inactive", flow: "0 m³/h", pressure: "0.0 bar", lat: -23.3000, lng: -51.1700, coverage: 450 },
  { id: 9, name: "Bomba Universitária", location: "Campus UEL", status: "active", flow: "380 m³/h", pressure: "3.2 bar", lat: -23.3200, lng: -51.1720, coverage: 600 },
];

const statusConfig = {
  active: {
    color: "#22c55e",
    label: "Ativa",
    textColor: "text-green-400",
    bgColor: "bg-green-500",
  },
  inactive: {
    color: "#6b7280",
    label: "Inativa",
    textColor: "text-gray-400",
    bgColor: "bg-gray-500",
  },
  warning: {
    color: "#eab308",
    label: "Atenção",
    textColor: "text-yellow-400",
    bgColor: "bg-yellow-500",
  },
  critical: {
    color: "#ef4444",
    label: "Crítico",
    textColor: "text-red-400",
    bgColor: "bg-red-500",
  },
};

// Dados para os gráficos
const weeklyData = [
  { day: "Seg", consumption: 85, prediction: 82 },
  { day: "Ter", consumption: 78, prediction: 80 },
  { day: "Qua", consumption: 92, prediction: 88 },
  { day: "Qui", consumption: 88, prediction: 90 },
  { day: "Sex", consumption: 95, prediction: 93 },
  { day: "Sáb", consumption: 72, prediction: 75 },
  { day: "Dom", consumption: 65, prediction: 68 },
];

const hourlyFlow = [
  { hour: "00h", value: 45 },
  { hour: "04h", value: 30 },
  { hour: "08h", value: 85 },
  { hour: "12h", value: 92 },
  { hour: "16h", value: 88 },
  { hour: "20h", value: 75 },
];

// Componente do mapa carregado dinamicamente
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const CircleMarker = dynamic(
  () => import("react-leaflet").then((mod) => mod.CircleMarker),
  { ssr: false }
);
const Circle = dynamic(
  () => import("react-leaflet").then((mod) => mod.Circle),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

function LeafletMap({ onSelectPump, selectedPump }: { onSelectPump: (pump: Pump) => void; selectedPump: Pump | null }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="w-full h-full bg-dark-800 rounded-xl flex items-center justify-center">
        <div className="text-gray-400">Carregando mapa...</div>
      </div>
    );
  }

  return (
    <MapContainer
      center={[-23.3100, -51.1620]}
      zoom={15}
      style={{ height: "100%", width: "100%", borderRadius: "0.75rem" }}
      zoomControl={true}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      {/* Círculos de cobertura */}
      {pumps.map((pump) => (
        <Circle
          key={`coverage-${pump.id}`}
          center={[pump.lat, pump.lng]}
          radius={pump.coverage}
          fillColor={statusConfig[pump.status].color}
          fillOpacity={selectedPump?.id === pump.id ? 0.25 : 0.1}
          color={statusConfig[pump.status].color}
          weight={selectedPump?.id === pump.id ? 2 : 1}
          opacity={selectedPump?.id === pump.id ? 0.8 : 0.3}
        />
      ))}

      {/* Marcadores das bombas */}
      {pumps.map((pump) => (
        <CircleMarker
          key={pump.id}
          center={[pump.lat, pump.lng]}
          radius={selectedPump?.id === pump.id ? 14 : 10}
          fillColor={statusConfig[pump.status].color}
          color="#ffffff"
          weight={2}
          opacity={1}
          fillOpacity={0.9}
          eventHandlers={{
            click: () => onSelectPump(pump),
          }}
        >
          <Popup>
            <div className="text-sm">
              <strong>{pump.name}</strong>
              <br />
              {pump.location}
              <br />
              Status: {statusConfig[pump.status].label}
              <br />
              Cobertura: {pump.coverage}m
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}

// Componente de gráfico de barras
function BarChart({ data }: { data: typeof weeklyData }) {
  const maxValue = Math.max(...data.map(d => Math.max(d.consumption, d.prediction)));

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
        <span>Consumo vs Previsão (m³/h)</span>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-primary-500" />
            <span>Real</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-secondary-500" />
            <span>Previsto</span>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-between gap-1 h-32">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full flex items-end justify-center gap-0.5 h-24">
              <div
                className="w-2 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t transition-all duration-500"
                style={{ height: `${(item.consumption / maxValue) * 100}%` }}
              />
              <div
                className="w-2 bg-gradient-to-t from-secondary-600 to-secondary-400 rounded-t transition-all duration-500"
                style={{ height: `${(item.prediction / maxValue) * 100}%` }}
              />
            </div>
            <span className="text-xs text-gray-500">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Componente de gráfico de linha (vazão por hora)
function LineChart({ data }: { data: typeof hourlyFlow }) {
  const maxValue = Math.max(...data.map(d => d.value));
  const points = data.map((d, i) => ({
    x: (i / (data.length - 1)) * 100,
    y: 100 - (d.value / maxValue) * 100,
  }));

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaD = `${pathD} L 100 100 L 0 100 Z`;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
        <span>Vazão por Hora</span>
        <span className="text-primary-400 font-medium">Hoje</span>
      </div>
      <div className="relative h-24">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Área preenchida */}
          <path
            d={areaD}
            fill="url(#lineGradient)"
            opacity="0.3"
          />
          {/* Linha */}
          <path
            d={pathD}
            fill="none"
            stroke="url(#lineStroke)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
          {/* Pontos */}
          {points.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r="3"
              fill="#03a9f4"
              stroke="#fff"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#03a9f4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#03a9f4" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#03a9f4" />
              <stop offset="100%" stopColor="#00bfa5" />
            </linearGradient>
          </defs>
        </svg>
        {/* Labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 -mb-5">
          {data.map((d, i) => (
            <span key={i}>{d.hour}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Componente de gauge/medidor
function GaugeChart({ value, label, color }: { value: number; label: string; color: string }) {
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (value / 100) * circumference * 0.75;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-[135deg]" viewBox="0 0 100 100">
          {/* Background arc */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="8"
            strokeDasharray={`${circumference * 0.75} ${circumference}`}
            strokeLinecap="round"
          />
          {/* Value arc */}
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeDasharray={`${circumference * 0.75} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">{value}%</span>
        </div>
      </div>
      <span className="text-xs text-gray-400 mt-1">{label}</span>
    </div>
  );
}

export default function MapDemo() {
  const [selectedPump, setSelectedPump] = useState<Pump | null>(null);

  const activePumps = pumps.filter((p) => p.status === "active").length;
  const warningPumps = pumps.filter((p) => p.status === "warning").length;
  const criticalPumps = pumps.filter((p) => p.status === "critical").length;
  const inactivePumps = pumps.filter((p) => p.status === "inactive").length;

  return (
    <section id="demo" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[150px]" />

      {/* CSS do Leaflet */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary-500/10 border border-secondary-500/20 rounded-full text-secondary-400 text-sm font-medium mb-4">
            Demonstração
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Monitoramento em{" "}
            <span className="gradient-text">Tempo Real</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            Visualize o status de todas as bombas e reservatórios da sua rede de
            saneamento em um único painel integrado.
          </p>
        </div>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Mapa - ocupa 2 colunas */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-4 md:p-6">
              {/* Header do mapa */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-white font-medium">Londrina - PR</span>
                  <span className="text-gray-500 text-sm">|</span>
                  <span className="text-gray-400 text-sm">Atualização: agora</span>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  {Object.entries(statusConfig).map(([status, config]) => (
                    <div key={status} className="flex items-center gap-1.5">
                      <div className={`w-2.5 h-2.5 rounded-full ${config.bgColor}`} />
                      <span className="text-gray-300 hidden sm:inline">{config.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Área do mapa */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-dark-700/50">
                <LeafletMap onSelectPump={setSelectedPump} selectedPump={selectedPump} />
              </div>

              <p className="text-xs text-gray-500 mt-3 text-center">
                Clique nos marcadores para ver detalhes • Círculos mostram área de cobertura
              </p>
            </div>

            {/* Gráficos abaixo do mapa */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Gráfico de consumo semanal */}
              <div className="glass-card p-5">
                <h4 className="text-sm font-semibold text-white mb-4">Consumo Semanal</h4>
                <BarChart data={weeklyData} />
              </div>

              {/* Gráfico de vazão por hora */}
              <div className="glass-card p-5">
                <h4 className="text-sm font-semibold text-white mb-4">Vazão por Hora</h4>
                <LineChart data={hourlyFlow} />
              </div>
            </div>
          </div>

          {/* Painel lateral */}
          <div className="space-y-6">
            {/* Gauges de performance */}
            <div className="glass-card p-5">
              <h3 className="text-lg font-semibold text-white mb-4">Performance do Sistema</h3>
              <div className="grid grid-cols-3 gap-2">
                <GaugeChart value={78} label="Eficiência" color="#22c55e" />
                <GaugeChart value={92} label="Uptime" color="#03a9f4" />
                <GaugeChart value={65} label="Economia" color="#00bfa5" />
              </div>
            </div>

            {/* Status geral */}
            <div className="glass-card p-5">
              <h3 className="text-lg font-semibold text-white mb-4">Status das Bombas</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-gray-300">Ativas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-20 bg-dark-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: `${(activePumps/pumps.length)*100}%` }} />
                    </div>
                    <span className="text-white font-semibold w-6">{activePumps}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="text-gray-300">Atenção</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-20 bg-dark-700 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500 rounded-full" style={{ width: `${(warningPumps/pumps.length)*100}%` }} />
                    </div>
                    <span className="text-white font-semibold w-6">{warningPumps}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="text-gray-300">Crítico</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-20 bg-dark-700 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full" style={{ width: `${(criticalPumps/pumps.length)*100}%` }} />
                    </div>
                    <span className="text-white font-semibold w-6">{criticalPumps}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-500" />
                    <span className="text-gray-300">Inativas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-20 bg-dark-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-500 rounded-full" style={{ width: `${(inactivePumps/pumps.length)*100}%` }} />
                    </div>
                    <span className="text-white font-semibold w-6">{inactivePumps}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Detalhes da bomba selecionada */}
            <div className="glass-card p-5">
              <h3 className="text-lg font-semibold text-white mb-4">
                {selectedPump ? selectedPump.name : "Selecione uma bomba"}
              </h3>

              {selectedPump ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusConfig[selectedPump.status].bgColor} text-white`}>
                      {statusConfig[selectedPump.status].label}
                    </span>
                    <span className="text-gray-400 text-sm">{selectedPump.location}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-dark-800/50 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-1">Vazão</div>
                      <div className="text-lg font-semibold text-primary-400">{selectedPump.flow}</div>
                    </div>
                    <div className="bg-dark-800/50 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-1">Pressão</div>
                      <div className="text-lg font-semibold text-secondary-400">{selectedPump.pressure}</div>
                    </div>
                    <div className="bg-dark-800/50 rounded-lg p-3 col-span-2">
                      <div className="text-xs text-gray-400 mb-1">Área de Cobertura</div>
                      <div className="text-lg font-semibold text-white">{selectedPump.coverage}m de raio</div>
                    </div>
                  </div>

                  {selectedPump.status === "critical" && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-red-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span className="text-sm font-medium">Manutenção necessária</span>
                      </div>
                      <p className="text-xs text-red-300/70 mt-1">Equipe notificada automaticamente.</p>
                    </div>
                  )}

                  {selectedPump.status === "warning" && (
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-yellow-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium">Pressão baixa</span>
                      </div>
                      <p className="text-xs text-yellow-300/70 mt-1">IA analisando padrões.</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-6">
                  <svg className="w-10 h-10 mx-auto text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  <p className="text-gray-500 text-sm">Clique em um marcador</p>
                </div>
              )}
            </div>

            {/* Alertas recentes */}
            <div className="glass-card p-5">
              <h3 className="text-lg font-semibold text-white mb-4">Alertas Recentes</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-3 p-2 rounded-lg bg-red-500/10">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-red-500 animate-pulse" />
                  <div>
                    <p className="text-sm text-white">Bomba Oeste offline</p>
                    <p className="text-xs text-gray-400">Há 23 min</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded-lg bg-yellow-500/10">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-yellow-500" />
                  <div>
                    <p className="text-sm text-white">Queda de pressão</p>
                    <p className="text-xs text-gray-400">Há 1h</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded-lg bg-green-500/10">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-green-500" />
                  <div>
                    <p className="text-sm text-white">Bomba Norte OK</p>
                    <p className="text-xs text-gray-400">Há 3h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
