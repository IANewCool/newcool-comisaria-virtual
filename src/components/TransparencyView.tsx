'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TIPOS_DENUNCIAS,
  PROCESO_DENUNCIA,
  DERECHOS_DENUNCIANTE,
  COMISARIA_INFO
} from '@/data/comisaria-content';

type ViewMode = 'tipos' | 'proceso' | 'derechos';

export default function TransparencyView() {
  const [viewMode, setViewMode] = useState<ViewMode>('tipos');

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <section className="text-center py-6">
        <span className="text-5xl mb-4 block">🚨</span>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Como Hacer una Denuncia
        </h2>
        <p className="text-[var(--muted)]">
          Guia completa para denunciar delitos de forma efectiva
        </p>
      </section>

      {/* Toggle */}
      <div className="flex justify-center">
        <div className="bg-[var(--card)] rounded-lg p-1 flex gap-1 flex-wrap justify-center">
          <button
            onClick={() => setViewMode('tipos')}
            className={`px-4 py-2 rounded-md font-medium transition-all text-sm ${
              viewMode === 'tipos'
                ? 'gradient-primary text-white'
                : 'text-[var(--muted)] hover:text-[var(--foreground)]'
            }`}
          >
            📋 Tipos de Denuncia
          </button>
          <button
            onClick={() => setViewMode('proceso')}
            className={`px-4 py-2 rounded-md font-medium transition-all text-sm ${
              viewMode === 'proceso'
                ? 'gradient-success text-white'
                : 'text-[var(--muted)] hover:text-[var(--foreground)]'
            }`}
          >
            📝 Paso a Paso
          </button>
          <button
            onClick={() => setViewMode('derechos')}
            className={`px-4 py-2 rounded-md font-medium transition-all text-sm ${
              viewMode === 'derechos'
                ? 'gradient-accent text-black'
                : 'text-[var(--muted)] hover:text-[var(--foreground)]'
            }`}
          >
            ⚖️ Tus Derechos
          </button>
        </div>
      </div>

      {/* Contenido segun modo */}
      {viewMode === 'tipos' && <TiposDenunciaSection />}
      {viewMode === 'proceso' && <ProcesoSection />}
      {viewMode === 'derechos' && <DerechosSection />}

      {/* Links */}
      <section className="text-center py-4 space-y-2">
        <p className="text-[var(--muted)] text-sm">
          Realiza tu denuncia de forma oficial
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={COMISARIA_INFO.website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <span>📝</span> Denunciar Ahora
          </a>
          <a
            href="https://www.fiscaliadechile.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <span>⚖️</span> Fiscalia
          </a>
        </div>
      </section>
    </div>
  );
}

function TiposDenunciaSection() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <motion.div
      key="tipos"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Info general */}
      <div className="card text-center border-[var(--primary)]">
        <p className="text-[var(--muted)] mb-2">Denuncias disponibles online</p>
        <p className="text-2xl font-bold">La mayoria de delitos pueden denunciarse digitalmente</p>
        <p className="text-sm text-[var(--muted)]">Excepto emergencias en curso (llama al 133)</p>
      </div>

      {/* Grid de tipos */}
      <div className="grid md:grid-cols-2 gap-4">
        {Object.entries(TIPOS_DENUNCIAS).map(([key, tipo], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`card cursor-pointer transition-all ${
              selectedType === key ? 'border-[var(--primary)] bg-[var(--primary)]/5' : ''
            }`}
            onClick={() => setSelectedType(selectedType === key ? null : key)}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{tipo.icon}</span>
                <div>
                  <h3 className="text-lg font-bold">{tipo.nombre}</h3>
                  <p className="text-sm text-[var(--muted)]">{tipo.descripcion}</p>
                </div>
              </div>
              {'urgente' in tipo && tipo.urgente && (
                <span className="badge badge-error">Urgente</span>
              )}
            </div>

            {selectedType === key && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-4 pt-4 border-t border-[var(--border)] space-y-3"
              >
                <div>
                  <p className="text-xs font-medium mb-2">Ejemplos:</p>
                  <div className="flex flex-wrap gap-1">
                    {tipo.ejemplos.map((ej, i) => (
                      <span key={i} className="badge badge-info text-xs">{ej}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium mb-2">Requisitos:</p>
                  <ul className="text-xs space-y-1">
                    {tipo.requisitos.map((req, i) => (
                      <li key={i} className="flex items-start gap-1 text-[var(--muted)]">
                        <span className="text-[var(--primary)]">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[var(--card-hover)] rounded-lg p-2 text-center">
                  <p className="text-xs text-[var(--muted)]">Plazo para denunciar</p>
                  <p className="font-bold text-sm">{tipo.plazoLegal}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Alerta importante */}
      <div className="card border-red-500 bg-red-500/10">
        <div className="flex items-start gap-3">
          <span className="text-2xl">⚠️</span>
          <div>
            <h4 className="font-bold text-red-400">Importante</h4>
            <p className="text-sm text-[var(--muted)]">
              Si estas en peligro inmediato o presencias un delito en curso,
              <strong className="text-red-400"> llama al 133 </strong>
              en vez de hacer una denuncia online. La Comisaria Virtual es para hechos ya ocurridos.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProcesoSection() {
  return (
    <motion.div
      key="proceso"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Info tiempo */}
      <div className="card text-center border-[var(--success)]">
        <p className="text-[var(--muted)] mb-2">Tiempo estimado</p>
        <p className="text-3xl font-bold text-[var(--success)]">{PROCESO_DENUNCIA.tiempoTotal}</p>
        <p className="text-sm text-[var(--muted)]">{PROCESO_DENUNCIA.importante}</p>
      </div>

      {/* Pasos */}
      <div className="space-y-4">
        {PROCESO_DENUNCIA.pasos.map((paso, index) => (
          <motion.div
            key={paso.numero}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-2xl">{paso.icono}</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[var(--primary)] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                    {paso.numero}
                  </span>
                  <h4 className="font-bold">{paso.titulo}</h4>
                </div>
                <p className="text-sm text-[var(--muted)] mb-3">{paso.descripcion}</p>
                <div className="bg-[var(--card-hover)] rounded-lg p-3">
                  <p className="text-xs font-medium mb-2">Tips:</p>
                  <ul className="text-xs space-y-1">
                    {paso.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-1 text-[var(--muted)]">
                        <span className="text-[var(--success)]">✓</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="card gradient-success text-white text-center">
        <h4 className="font-bold text-lg mb-2">¿Listo para denunciar?</h4>
        <p className="text-sm text-green-100 mb-4">
          Sigue estos pasos en el portal oficial de Comisaria Virtual
        </p>
        <a
          href={COMISARIA_INFO.website}
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-white text-green-600 hover:bg-green-50"
        >
          Ir al Portal →
        </a>
      </div>
    </motion.div>
  );
}

function DerechosSection() {
  return (
    <motion.div
      key="derechos"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Info */}
      <div className="card text-center border-[var(--accent)]">
        <p className="text-[var(--muted)] mb-2">Como victima tienes</p>
        <p className="text-3xl font-bold">{DERECHOS_DENUNCIANTE.length} Derechos Fundamentales</p>
        <p className="text-sm text-[var(--muted)]">Protegidos por la Ley de Victimas</p>
      </div>

      {/* Grid de derechos */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {DERECHOS_DENUNCIANTE.map((derecho, index) => (
          <motion.div
            key={derecho.derecho}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="card text-center"
          >
            <span className="text-4xl mb-3 block">{derecho.icono}</span>
            <h4 className="font-bold mb-2">{derecho.derecho}</h4>
            <p className="text-sm text-[var(--muted)]">{derecho.descripcion}</p>
          </motion.div>
        ))}
      </div>

      {/* Que hacer si no respetan tus derechos */}
      <div className="card border-[var(--warning)] bg-[var(--warning)]/5">
        <h3 className="font-bold mb-3 flex items-center gap-2">
          <span>💡</span> Si no respetan tus derechos
        </h3>
        <ol className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="bg-[var(--warning)] text-black w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">1</span>
            <span className="text-sm">Solicita hablar con el superior del funcionario</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-[var(--warning)] text-black w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">2</span>
            <span className="text-sm">Presenta un reclamo formal en la Fiscalia</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-[var(--warning)] text-black w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">3</span>
            <span className="text-sm">Contacta a la Corporacion de Asistencia Judicial (CAJ)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-[var(--warning)] text-black w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">4</span>
            <span className="text-sm">Denuncia en la Contraloria si es funcionario publico</span>
          </li>
        </ol>
      </div>

      {/* Recursos de ayuda */}
      <div className="card">
        <h3 className="font-bold mb-4 flex items-center gap-2">
          <span>🆘</span> Recursos de Ayuda Gratuita
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[var(--card-hover)] p-4 rounded-lg">
            <h4 className="font-bold">CAJ - Asistencia Juridica</h4>
            <p className="text-sm text-[var(--muted)] mb-2">Defensa legal gratuita para victimas</p>
            <a href="https://www.cajmetro.cl" className="text-[var(--primary)] text-sm">cajmetro.cl →</a>
          </div>
          <div className="bg-[var(--card-hover)] p-4 rounded-lg">
            <h4 className="font-bold">SernamEG</h4>
            <p className="text-sm text-[var(--muted)] mb-2">Apoyo a mujeres victimas de violencia</p>
            <p className="text-[var(--primary)] text-sm font-bold">Fono: 1455</p>
          </div>
          <div className="bg-[var(--card-hover)] p-4 rounded-lg">
            <h4 className="font-bold">URAVIT</h4>
            <p className="text-sm text-[var(--muted)] mb-2">Unidad de atencion a victimas (Fiscalia)</p>
            <a href="https://www.fiscaliadechile.cl" className="text-[var(--primary)] text-sm">fiscaliadechile.cl →</a>
          </div>
          <div className="bg-[var(--card-hover)] p-4 rounded-lg">
            <h4 className="font-bold">Fono Infancia</h4>
            <p className="text-sm text-[var(--muted)] mb-2">Proteccion de menores</p>
            <p className="text-[var(--primary)] text-sm font-bold">Fono: 147</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
