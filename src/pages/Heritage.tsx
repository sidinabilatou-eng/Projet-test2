import { BookOpen, Calculator, PenTool, ArrowRight, Library } from 'lucide-react'

const Heritage = () => {
  return (
    <div className="bg-cream min-h-screen pb-24">
      <header className="p-6 flex justify-between items-center bg-white/50 backdrop-blur-sm sticky top-0 z-10">
        <h1 className="text-emerald font-serif text-2xl font-bold tracking-tight">Al-Ummah</h1>
        <div className="w-10 h-10 rounded-full bg-emerald flex items-center justify-center text-white font-serif">A</div>
      </header>

      <section className="px-6 py-12">
        <h2 className="text-emerald font-serif text-4xl font-bold mb-6 leading-tight">Héritage et Savoir</h2>
        <p className="text-gray-600 font-sans text-lg leading-relaxed mb-10">
          Une exploration des contributions intemporelles de la civilisation islamique à l'humanité.
        </p>

        <div className="bg-emerald text-white p-8 rounded-3xl mb-12 shadow-xl overflow-hidden relative">
          <div className="relative z-10">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen size={20} className="text-gold" />
              <span className="text-gold font-sans text-xs font-bold uppercase tracking-widest">Le Pont des Civilisations</span>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">La Préservation du Savoir Grec</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              À travers la "Maison de la Sagesse" de Bagdad, les érudits ont préservé les œuvres de l'Antiquité pour le monde entier.
            </p>
            <button className="flex items-center space-x-2 text-gold font-bold text-sm uppercase tracking-wider group">
              <span>Découvrir les manuscrits</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <Library size={120} className="absolute -bottom-6 -right-6 text-white/5" />
        </div>

        <div className="space-y-8">
           <div className="flex items-start space-x-6">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-white border border-sand flex items-center justify-center text-emerald shadow-sm">
                <Calculator size={28} />
              </div>
              <div>
                <h4 className="text-emerald font-serif text-xl font-bold mb-1">Sciences et Mathématiques</h4>
                <p className="text-gray-500 text-sm mb-4">Algebra (Al-Jabr) par Al-Khwarizmi et le Canon de la médecine d'Ibn Sina.</p>
              </div>
           </div>

           <div className="flex items-start space-x-6">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-white border border-sand flex items-center justify-center text-emerald shadow-sm">
                <PenTool size={28} />
              </div>
              <div>
                <h4 className="text-emerald font-serif text-xl font-bold mb-1">Philosophie</h4>
                <p className="text-gray-500 text-sm italic mb-4">
                  "L'influence sur la Renaissance fut profonde, portée par des penseurs comme Averroès qui ont concilié foi et raison."
                </p>
              </div>
           </div>
        </div>
      </section>

      <section className="px-6 py-12 bg-white rounded-t-[3rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
        <div className="flex justify-between items-end mb-8">
           <h3 className="text-emerald font-serif text-2xl font-bold">Arts et Architecture</h3>
           <span className="text-gold font-sans text-xs font-bold underline cursor-pointer">Voir la galerie</span>
        </div>

        <div className="space-y-8">
          <div className="group">
            <div className="rounded-2xl overflow-hidden aspect-video bg-sand mb-4">
               <div className="w-full h-full bg-emerald/5 flex items-center justify-center">
                 <span className="text-emerald/20 font-serif text-4xl">Alhambra</span>
               </div>
            </div>
            <h4 className="text-emerald font-serif text-lg font-bold">Alhambra, Grenade</h4>
            <p className="text-gray-500 text-sm">Le sommet de la poésie architecturale andalouse, mêlant eau et géométrie.</p>
          </div>

          <div className="group">
            <div className="rounded-2xl overflow-hidden aspect-video bg-sand mb-4">
               <div className="w-full h-full bg-emerald/5 flex items-center justify-center">
                 <span className="text-emerald/20 font-serif text-4xl">Cordoue</span>
               </div>
            </div>
            <h4 className="text-emerald font-serif text-lg font-bold">Cordoue, Andalousie</h4>
            <p className="text-gray-500 text-sm">Chef-d'œuvre Omeyyade, symbole d'un âge d'or du dialogue interculturel.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Heritage
