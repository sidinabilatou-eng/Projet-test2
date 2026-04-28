import { GraduationCap, MessageSquare, Handshake, Share2, CheckCircle2, ArrowRight } from 'lucide-react'

const Action = () => {
  return (
    <div className="bg-cream min-h-screen pb-24">
      <header className="p-6 flex justify-between items-center bg-white/50 backdrop-blur-sm sticky top-0 z-10">
        <h1 className="text-emerald font-serif text-2xl font-bold tracking-tight">Al-Ummah</h1>
        <div className="w-10 h-10 rounded-full bg-emerald flex items-center justify-center text-white font-serif">A</div>
      </header>

      <section className="px-6 py-12">
        <span className="text-gold font-sans text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Votre Impact</span>
        <h2 className="text-emerald font-serif text-4xl font-bold mb-6 leading-tight">Agir pour l'Avenir</h2>
        <p className="text-gray-600 font-sans text-lg leading-relaxed mb-10">
          Rejoignez le mouvement Al-Ummah. Ensemble, transformons notre héritage en actions concrètes.
        </p>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-sand">
            <div className="w-14 h-14 rounded-2xl bg-emerald/5 text-emerald flex items-center justify-center mb-6">
              <GraduationCap size={28} />
            </div>
            <h3 className="text-emerald font-serif text-2xl font-bold mb-3">Éducation</h3>
            <p className="text-gray-600 mb-6 text-sm">Ouvrez les portes de la connaissance. Organisez des journées portes ouvertes et dissipez les malentendus.</p>
            <button className="flex items-center space-x-2 text-emerald font-bold text-xs uppercase tracking-widest border-b-2 border-emerald pb-1">
              <span>Explorer les ressources</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-sand">
            <div className="w-14 h-14 rounded-2xl bg-gold/5 text-gold flex items-center justify-center mb-6">
              <MessageSquare size={28} />
            </div>
            <h3 className="text-emerald font-serif text-2xl font-bold mb-3">Dialogue Interculturel</h3>
            <p className="text-gray-600 mb-6 text-sm">Bâtissons des ponts. Identifiez nos points communs et engagez des échanges sincères.</p>
          </div >

          <div className="bg-emerald text-white p-8 rounded-3xl shadow-xl">
             <div className="flex items-center justify-between mb-8">
               <h3 className="text-xl font-serif font-bold">Engagement Citoyen</h3>
               <Handshake size={28} className="text-gold" />
             </div>
             <div className="space-y-4">
                <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 rounded-full bg-gold" />
                   <span className="text-sm font-sans">Écologie & Durabilité</span>
                </div>
                <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 rounded-full bg-gold" />
                   <span className="text-sm font-sans">Humanitaire Local</span>
                </div>
             </div>
             <p className="mt-8 text-white/60 text-xs italic italic">Soyez un acteur du bien commun au cœur de la cité.</p>
          </div>
        </div>
      </section>

      <section className="px-6 mb-12">
        <div className="bg-white border-2 border-emerald/10 p-8 rounded-[2rem] relative overflow-hidden">
           <div className="relative z-10">
             <div className="flex items-center space-x-2 mb-6">
                <Share2 size={20} className="text-emerald" />
                <span className="text-gray-400 font-sans text-[10px] font-bold uppercase tracking-widest">Campagne en cours</span>
             </div>
             <h3 className="text-emerald font-serif text-3xl font-bold mb-4">#UmmahModerne</h3>
             <div className="flex justify-between items-end mb-2">
                <span className="text-gray-500 text-xs">Objectif 10k partages</span>
                <span className="text-emerald font-bold">75%</span>
             </div>
             <div className="h-2 w-full bg-sand rounded-full overflow-hidden">
                <div className="h-full bg-gold w-3/4" />
             </div>
           </div>
        </div>
      </section>

      <section className="px-6 py-12 text-center bg-sand mx-6 rounded-3xl mb-12">
        <CheckCircle2 size={40} className="text-emerald mx-auto mb-6" />
        <h3 className="text-emerald font-serif text-xl font-bold mb-4">Authenticité & Bienveillance</h3>
        <p className="text-gray-500 font-serif italic leading-relaxed">
          "Chaque geste compte quand il est porté par une intention pure. Agissons avec sagesse."
        </p>
      </section>
    </div>
  )
}

export default Action
