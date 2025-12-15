'use client';

import { motion } from 'framer-motion';
import { useTGRStore } from '@/store/tgr-store';
import {
  COMISARIA_FUNCTIONS,
  SERVICIOS_COMISARIA,
  DATOS_CURIOSOS,
  COMISARIA_INFO,
  TIPOS_DENUNCIAS,
  EMERGENCIAS
} from '@/data/comisaria-content';
import type { TabType } from '@/types';

export default function Dashboard() {
  const { setActiveTab, stats } = useTGRStore();

  const randomFact = DATOS_CURIOSOS[Math.floor(Math.random() * DATOS_CURIOSOS.length)];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero */}
      <section className="text-center py-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Tu seguridad, un click
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-[var(--muted)] text-lg max-w-2xl mx-auto"
        >
          Realiza denuncias, obtiene certificados y accede a servicios policiales
          desde cualquier lugar, las 24 horas del dia.
        </motion.p>
      </section>

      {/* Emergencias destacadas */}
      <section className="gradient-warning rounded-xl p-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🚨</span>
            <div>
              <p className="font-bold text-black">Emergencias</p>
              <p className="text-sm text-black/70">Lineas de ayuda 24/7</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {EMERGENCIAS.slice(0, 3).map((em) => (
              <div key={em.numero} className="bg-black/10 rounded-lg px-3 py-2 text-center">
                <span className="text-lg">{em.icono}</span>
                <p className="font-bold text-black">{em.numero}</p>
                <p className="text-xs text-black/70">{em.nombre}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Denuncias - Preview */}
      <section>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span>📝</span> Tipos de Denuncias Online
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(TIPOS_DENUNCIAS).slice(0, 4).map(([key, denuncia], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card text-center cursor-pointer hover:border-[var(--primary)]"
              onClick={() => setActiveTab('transparencia')}
            >
              <span className="text-3xl mb-2 block">{denuncia.icon}</span>
              <span className="font-medium text-sm">{denuncia.nombre}</span>
              {'urgente' in denuncia && denuncia.urgente && (
                <span className="badge badge-error mt-2 text-xs">Urgente</span>
              )}
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button
            onClick={() => setActiveTab('transparencia')}
            className="text-[var(--primary)] text-sm hover:underline"
          >
            Ver todos los tipos de denuncia →
          </button>
        </div>
      </section>

      {/* Funciones principales */}
      <section>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span>⚡</span> Que Puedes Hacer
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {COMISARIA_FUNCTIONS.map((func, index) => (
            <motion.div
              key={func.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card text-center cursor-pointer"
              onClick={() => setActiveTab('que-es')}
            >
              <span className="text-3xl mb-2 block">{func.icon}</span>
              <h4 className="font-medium text-sm">{func.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Servicios destacados */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <span>📋</span> Tramites Rapidos
          </h3>
          <button
            onClick={() => setActiveTab('servicios')}
            className="text-[var(--primary)] text-sm hover:underline"
          >
            Ver todos →
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {SERVICIOS_COMISARIA.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onClick={() => setActiveTab('servicios')}
            />
          ))}
        </div>
      </section>

      {/* Dato curioso */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="gradient-accent rounded-xl p-6 text-black"
      >
        <div className="flex items-start gap-4">
          <span className="text-4xl">{randomFact.icono}</span>
          <div>
            <h3 className="font-bold text-lg mb-2">Sabias que...</h3>
            <p className="text-black/80">{randomFact.dato}</p>
          </div>
        </div>
      </motion.section>

      {/* CTA Secciones */}
      <section className="grid md:grid-cols-2 gap-4">
        <CTACard
          icon="🚨"
          title="Como Denunciar"
          description="Guia paso a paso para hacer una denuncia online efectiva"
          tab="transparencia"
          onClick={setActiveTab}
        />
        <CTACard
          icon="🛡️"
          title="Tips de Seguridad"
          description="Aprende a prevenir delitos y proteger tu hogar y familia"
          tab="aprende"
          onClick={setActiveTab}
        />
      </section>

      {/* Tu progreso */}
      {(stats.sectionsVisited > 0 || stats.servicesViewed > 0) && (
        <section className="card">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span>📈</span> Tu Progreso
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <ProgressStat value={stats.sectionsVisited} label="Secciones visitadas" />
            <ProgressStat value={stats.servicesViewed} label="Servicios explorados" />
            <ProgressStat value={stats.lessonsCompleted} label="Lecciones completadas" />
            <ProgressStat value={`${stats.quizScore}%`} label="Mejor puntaje quiz" />
          </div>
        </section>
      )}

      {/* Links oficiales */}
      <section className="text-center py-4">
        <p className="text-[var(--muted)] text-sm mb-2">
          Portal oficial de Carabineros
        </p>
        <a
          href={COMISARIA_INFO.website}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary inline-flex"
        >
          <span>🌐</span> Ir a Comisaria Virtual
        </a>
      </section>
    </div>
  );
}

function ServiceCard({
  service,
  index,
  onClick
}: {
  service: typeof SERVICIOS_COMISARIA[0];
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.1 }}
      className="card cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl">{service.icon}</span>
        <div>
          <h4 className="font-medium mb-1">{service.name}</h4>
          <p className="text-sm text-[var(--muted)] line-clamp-2">
            {service.description}
          </p>
          <div className="flex items-center gap-2 mt-2">
            {service.online && (
              <span className="badge badge-success">
                <span>🌐</span> Online
              </span>
            )}
            <span className="text-xs text-[var(--muted)]">{service.tiempo}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CTACard({
  icon,
  title,
  description,
  tab,
  onClick
}: {
  icon: string;
  title: string;
  description: string;
  tab: TabType;
  onClick: (tab: TabType) => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="card cursor-pointer flex items-center gap-4"
      onClick={() => onClick(tab)}
    >
      <span className="text-4xl">{icon}</span>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-[var(--muted)]">{description}</p>
      </div>
      <span className="ml-auto text-[var(--primary)]">→</span>
    </motion.div>
  );
}

function ProgressStat({ value, label }: { value: string | number; label: string }) {
  return (
    <div>
      <p className="text-2xl font-bold text-[var(--primary)]">{value}</p>
      <p className="text-xs text-[var(--muted)]">{label}</p>
    </div>
  );
}
