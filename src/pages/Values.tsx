import { Sparkles, Heart, Users, ShieldCheck, Quote } from 'lucide-react'

const Values = () => {
  const values = [
    {
      title: 'La Paix (Salam)',
      desc: "La recherche constante de la sérénité intérieure et de l'harmonie sociale. Nous cultivons un environnement de respect.",
      icon: Sparkles,
      color: 'bg-emerald/5 text-emerald',
    },
    {
      title: 'La Charité',
      desc: 'Le don de soi et de ses ressources comme pilier de la justice sociale. Zakat et Sadaqa ancrent notre engagement.',
      icon: Heart,
      color: 'bg-gold/5 text-gold',
    },
    {
      title: 'La Fraternité',
      desc: 'Un lien sacré qui transcende les frontières. Une solidarité indéfectible unissant chaque membre de l\'Ummah.',
      icon: Users,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: "L'Excellence (Ihsan)",
      desc: "Agir avec sincérité et perfection dans chaque geste. L'excellence est une habitude guidée par la conscience divine.",
      icon: ShieldCheck,
      color: 'bg-purple-50 text-purple-600',
    },
  ]

  return (
    <div className="bg-cream min-h-screen pb-24">
      {/* Header */}
      <header className="p-6 flex justify-between items-center bg-white/50 backdrop-blur-sm sticky top-0 z-10">
        <h1 className="text-emerald font-serif text-2xl font-bold tracking-tight">Al-Ummah</h1>
        <div className="w-10 h-10 rounded-full bg-emerald flex items-center justify-center text-white font-serif">A</div>
      </header>

      <section className="px-6 py-12">
        <span className="text-gold font-sans text-xs font-bold uppercase tracking-[0.2em] mb-4 block">L'Essence de notre communauté</span>
        <h2 className="text-emerald font-serif text-4xl font-bold mb-10 leading-tight">Nos Valeurs</h2>

        <div className="space-y-6">
          {values.map((val, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-sand hover:shadow-md transition-shadow">
              <div className={`w-14 h-14 rounded-2xl ${val.color} flex items-center justify-center mb-6`}>
                <val.icon size={28} />
              </div>
              <h3 className="text-emerald font-serif text-2xl font-bold mb-3">{val.title}</h3>
              <p className="text-gray-600 font-sans leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 bg-white border-y border-sand text-center">
        <Quote size={48} className="text-gold/20 mx-auto mb-6" />
        <p className="text-emerald font-serif text-2xl italic leading-relaxed mb-6">
          "Le meilleur des hommes est celui qui est le plus utile aux autres."
        </p>
        <span className="text-gray-400 font-sans text-xs font-bold uppercase tracking-widest">— Sagesse Prophétique</span>
      </section>

      <section className="px-6 py-12">
        <div className="relative rounded-3xl overflow-hidden aspect-video bg-emerald flex items-center justify-center p-8 text-center group">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          <div className="relative z-10">
            <h3 className="text-white font-serif text-3xl font-bold mb-2">Un Héritage Vivant</h3>
            <p className="text-white/80 text-sm">Construisons ensemble un futur ancré dans la sagesse.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Values
