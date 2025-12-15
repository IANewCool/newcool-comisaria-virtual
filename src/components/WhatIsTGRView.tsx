'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTGRStore } from '@/store/tgr-store';
import {
  COMISARIA_FUNCTIONS,
  COMISARIA_INFO,
  COMISARIA_STATS,
  CERTIFICADOS,
  CANALES_COMISARIA,
  EMERGENCIAS
} from '@/data/comisaria-content';
import type { TGRFunctionId } from '@/types';

export default function WhatIsTGRView() {
  const [selectedFunction, setSelectedFunction] = useState<TGRFunctionId | null>(null);
  const { markSectionCompleted, isSectionCompleted } = useTGRStore();

  const handleFunctionClick = (funcId: TGRFunctionId) => {
    setSelectedFunction(selectedFunction === funcId ? null : funcId);
    markSectionCompleted(`function-${funcId}`);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Introduccion */}
      <section className="text-center py-6">
        <span className="text-6xl mb-4 block">{COMISARIA_INFO.icon}</span>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {COMISARIA_INFO.fullName}
        </h2>
        <p className="text-[var(--muted)] max-w-2xl mx-auto">
          {COMISARIA_INFO.description}
        </p>
      </section>

      {/* Historia y contexto */}
      <section className="card">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span>📜</span> Historia
        </h3>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <span className="text-4xl font-bold text-[var(--primary)]">
              {COMISARIA_INFO.foundedYear}
            </span>
            <p className="text-xs text-[var(--muted)]">Año de creacion</p>
          </div>
          <div className="h-12 w-px bg-[var(--border)]" />
          <p className="text-[var(--muted)]">
            La Comisaria Virtual fue lanzada en 2007 como una iniciativa pionera en Latinoamerica
            para digitalizar los servicios policiales. Permite a los ciudadanos realizar tramites
            sin necesidad de acudir presencialmente a una unidad policial.
          </p>
        </div>
      </section>

      {/* Mision y Vision */}
      <div className="grid md:grid-cols-2 gap-4">
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="card border-l-4 border-l-[var(--primary)]"
        >
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <span>🎯</span> Mision
          </h3>
          <p className="text-[var(--muted)] text-sm">{COMISARIA_INFO.mission}</p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="card border-l-4 border-l-[var(--accent)]"
        >
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <span>🔭</span> Vision
          </h3>
          <p className="text-[var(--muted)] text-sm">{COMISARIA_INFO.vision}</p>
        </motion.section>
      </div>

      {/* Certificados disponibles */}
      <section>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span>📄</span> Certificados y Constancias
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          {Object.entries(CERTIFICADOS).map(([key, cert], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{cert.icon}</span>
                <h4 className="font-bold">{cert.nombre}</h4>
              </div>
              <p className="text-sm text-[var(--muted)] mb-3">{cert.descripcion}</p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Vigencia:</span>
                  <span className="font-medium">{cert.vigencia}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Tiempo:</span>
                  <span className="font-medium text-[var(--success)]">{cert.tiempoObtencion}</span>
                </div>
              </div>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary w-full mt-3 text-sm"
              >
                Obtener →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Funciones principales */}
      <section>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span>⚙️</span> Funciones del Portal
        </h3>
        <div className="space-y-3">
          {COMISARIA_FUNCTIONS.map((func, index) => (
            <FunctionCard
              key={func.id}
              func={func}
              index={index}
              isSelected={selectedFunction === func.id}
              isCompleted={isSectionCompleted(`function-${func.id}`)}
              onClick={() => handleFunctionClick(func.id)}
            />
          ))}
        </div>
      </section>

      {/* Canales de atencion */}
      <section>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span>📞</span> Canales de Atencion
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CANALES_COMISARIA.map((canal, index) => (
            <motion.div
              key={canal.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="card text-center"
            >
              <span className="text-3xl mb-2 block">{canal.icon}</span>
              <h4 className="font-bold">{canal.name}</h4>
              <p className="text-xs text-[var(--muted)] mb-2">{canal.description}</p>
              <p className="text-sm text-[var(--primary)] font-medium">{canal.contact}</p>
              <p className="text-xs text-[var(--muted)]">{canal.hours}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Numeros de emergencia */}
      <section className="card bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/30">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span>🚨</span> Numeros de Emergencia
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {EMERGENCIAS.map((em) => (
            <div key={em.numero} className="text-center">
              <span className="text-2xl mb-1 block">{em.icono}</span>
              <p className="text-2xl font-bold text-[var(--primary)]">{em.numero}</p>
              <p className="text-xs font-medium">{em.nombre}</p>
              <p className="text-xs text-[var(--muted)]">{em.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Estructura institucional */}
      <section className="card">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span>🏢</span> Estructura del Sistema
        </h3>
        <div className="flex flex-col items-center gap-4">
          <div className="gradient-primary text-white px-6 py-3 rounded-lg text-center">
            <p className="font-bold">Ministerio del Interior</p>
            <p className="text-sm text-blue-200">Seguridad Publica</p>
          </div>
          <div className="w-px h-8 bg-[var(--border)]" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
            {['Carabineros', 'PDI', 'Gendarmeria', 'ANI'].map((org) => (
              <div key={org} className="bg-[var(--card-hover)] px-4 py-2 rounded-lg text-center text-sm">
                {org}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Datos clave */}
      <section className="gradient-primary rounded-xl p-6 text-white">
        <h3 className="text-xl font-semibold mb-4">Datos Clave</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <DataPoint icon="🏛️" value={COMISARIA_INFO.foundedYear.toString()} label="Fundado" />
          <DataPoint icon="📝" value={COMISARIA_STATS.tramitesAnuales} label="Tramites/año" />
          <DataPoint icon="👥" value={COMISARIA_STATS.usuariosRegistrados} label="Usuarios" />
          <DataPoint icon="⭐" value={COMISARIA_STATS.satisfaccion} label="Satisfaccion" />
        </div>
      </section>
    </div>
  );
}

function FunctionCard({
  func,
  index,
  isSelected,
  isCompleted,
  onClick
}: {
  func: typeof COMISARIA_FUNCTIONS[0];
  index: number;
  isSelected: boolean;
  isCompleted: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`card cursor-pointer ${isSelected ? 'border-[var(--primary)]' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <span className="text-3xl">{func.icon}</span>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold">{func.name}</h4>
            {isCompleted && <span className="text-[var(--success)]">✓</span>}
          </div>
          <p className="text-sm text-[var(--muted)]">{func.description}</p>
        </div>
        <motion.span
          animate={{ rotate: isSelected ? 180 : 0 }}
          className="text-[var(--muted)]"
        >
          ▼
        </motion.span>
      </div>

      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-[var(--border)]">
              <ul className="space-y-2">
                {func.details.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-[var(--muted)]"
                  >
                    <span className="text-[var(--primary)]">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function DataPoint({
  icon,
  value,
  label
}: {
  icon: string;
  value: string;
  label: string;
}) {
  return (
    <div>
      <span className="text-2xl">{icon}</span>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-blue-200">{label}</p>
    </div>
  );
}
