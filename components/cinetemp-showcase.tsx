import { Camera, BarChart3, Thermometer, Layers, Download } from 'lucide-react';

const features = [
  {
    title: 'Leitura de CCT em tempo real',
    description: 'Estimativa de temperatura de cor com visualização contínua para set e locação.',
    icon: Thermometer,
  },
  {
    title: 'Estimativa de ND',
    description: 'Ajuda rápida para exposição e filtragem com base na captura da câmera.',
    icon: Camera,
  },
  {
    title: 'Histograma e contraste',
    description: 'Painel visual para analisar luminância e equilíbrio de cena.',
    icon: BarChart3,
  },
  {
    title: 'Biblioteca de cenas',
    description: 'Salve medições, notas e compare setups com exportação em CSV/JSON.',
    icon: Download,
  },
];

export default function CinetempShowcase() {
  return (
    <section className="py-24 px-6 border-y border-portfolio-blue/20 bg-gradient-to-b from-portfolio-dark to-black">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-portfolio-blue/30 text-xs tracking-[0.2em] uppercase text-portfolio-blue-light mb-6">
            <Layers className="w-3.5 h-3.5" />
            Novo módulo
          </span>

          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6 text-portfolio-white">
            CineTemp Web App
            <span className="block text-gradient">Mobile Friendly + iPhone First</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Uma experiência pensada para rodar direto do navegador no iPhone, com layout touch-first,
            cards de medição e fluxo rápido para salvar e comparar cenas.
          </p>

          <div className="space-y-5">
            {features.map(({ title, description, icon: Icon }) => (
              <div key={title} className="flex gap-4 p-4 rounded-xl border border-portfolio-blue/15 bg-portfolio-dark/60">
                <div className="w-10 h-10 rounded-lg bg-portfolio-blue/15 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-portfolio-blue" />
                </div>
                <div>
                  <h3 className="text-portfolio-white font-medium mb-1">{title}</h3>
                  <p className="text-gray-400 text-sm">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[300px] sm:w-[340px] rounded-[2.5rem] p-3 bg-zinc-900 border border-white/10 shadow-2xl shadow-portfolio-blue/30">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 rounded-full bg-black border border-white/10" />
            <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-black pt-10">
              <div className="p-4 space-y-4">
                <div className="rounded-2xl p-4 bg-gradient-to-r from-portfolio-blue/25 to-portfolio-blue-light/10 border border-portfolio-blue/30">
                  <p className="text-xs text-portfolio-blue-light uppercase tracking-widest">Scene #14</p>
                  <p className="text-3xl font-light text-white mt-1">5200K</p>
                  <p className="text-sm text-gray-300">ND estimado: 0.9</p>
                </div>

                <div className="rounded-xl p-4 bg-zinc-900 border border-zinc-700">
                  <p className="text-xs text-gray-400 mb-3">Histograma</p>
                  <div className="grid grid-cols-12 gap-1 items-end h-16">
                    {[28, 36, 45, 50, 60, 70, 64, 55, 48, 40, 34, 24].map((height, i) => (
                      <div
                        key={i}
                        className="bg-portfolio-blue/80 rounded-sm"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                <button className="w-full rounded-xl bg-portfolio-blue text-black font-medium py-3 hover:bg-portfolio-blue-light transition-colors">
                  Salvar cena
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
