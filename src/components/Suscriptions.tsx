import React from 'react';

// Suponiendo que usas lucide-react para los iconos.
// Si no, puedes reemplazarlos con tus propios componentes SVG.
import { Music, Crown, Star, Check } from 'lucide-react';

// Mapa de iconos para renderizar dinámicamente
const iconMap = {
  Music: Music,
  Crown: Crown,
  Star: Star,
};

// Datos de los planes. Es mejor incluir todos los datos aquí para que el componente sea más limpio.
const subscriptionPlans = [
  {
    title: 'Mensual',
    icon: 'Music',
    price: '9',
    frequency: '/mes',
    description: 'Ideal para empezar tu camino musical y aprender a tu propio ritmo.',
    features: [
      'Acceso a cursos de nivel principiante',
      'Material de estudio descargable',
      'Soporte por correo electrónico',
      'Acceso a comunidad de estudiantes',
    ],
    cta: 'Empezar ahora',
    mostPopular: false,
  },
  {
    title: 'Anual',
    icon: 'Star',
    price: '99',
    frequency: '/año',
    description: 'El paquete completo para músicos serios. Ahorra un 15% con este plan.',
    features: [
      'Todo lo del plan Mensual',
      'Acceso a cursos avanzados y de producción',
      'Masterclasses en vivo',
      'Descarga de proyectos y presets',
      'Soporte prioritario',
    ],
    cta: 'Elegir plan Anual',
    mostPopular: true, // Esto hará que se destaque
  },
  {
    title: 'Vitalicio',
    icon: 'Crown',
    price: '299',
    frequency: 'pago único',
    description: 'Acceso ilimitado para siempre. La mejor inversión en tu futuro musical.',
    features: [
      'Todo lo del plan Anual',
      'Acceso de por vida a cursos actuales y futuros',
      'Sesiones 1 a 1 con instructores (2 al año)',
      'Acceso a contenido beta exclusivo',
    ],
    cta: 'Obtener acceso vitalicio',
    mostPopular: false,
  },
];

// Componente principal
export default function SubscriptionPlans() {
  return (
    <section className="bg-gray-900 text-white py-20 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-4 tracking-tight">
            Planes de Suscripción
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Acceso ilimitado a todos nuestros cursos. Elige el plan que se ajusta a tus metas musicales.
          </p>
        </div>

        {/* Contenedor de las tarjetas de precios */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {subscriptionPlans.map((plan) => (
            <div
              key={plan.title}
              className={`
                bg-gray-800 rounded-2xl border transition-all duration-300 relative
                ${plan.mostPopular ? 'border-purple-500 scale-105 shadow-2xl shadow-purple-500/10' : 'border-gray-700 hover:border-purple-400'}
              `}
            >
              {/* Insignia de "Más Popular" */}
              {plan.mostPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Más Popular
                </div>
              )}

              <div className="p-8">
                {/* Icono y Título */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-700 text-purple-400 rounded-lg flex items-center justify-center">
                    {React.createElement(iconMap[plan.icon], { className: "w-6 h-6" })}
                  </div>
                  <h3 className="text-white text-2xl font-bold">{plan.title}</h3>
                </div>

                {/* Precio */}
                <div className="mb-6">
                  <span className="text-5xl font-extrabold">${plan.price}</span>
                  <span className="text-gray-400 font-medium ml-2">{plan.frequency}</span>
                </div>

                <p className="text-gray-400 mb-8 h-12">{plan.description}</p>
                
                {/* Lista de Características */}
                <ul className="space-y-4 text-left mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Botón de Llamada a la Acción */}
                <button
                  className={`
                    w-full py-3 px-6 rounded-lg font-semibold text-lg transition-transform duration-300
                    ${plan.mostPopular 
                      ? 'bg-purple-600 hover:bg-purple-700 hover:scale-105' 
                      : 'bg-gray-700 hover:bg-purple-500 hover:text-white'}
                  `}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}