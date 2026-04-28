import { Sparkles, Globe, Heart, ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-cream min-h-screen pb-24">
      {/* Header */}
      <header className="p-6 flex justify-between items-center bg-white/50 backdrop-blur-sm sticky top-0 z-10">
        <h1 className="text-emerald font-serif text-2xl font-bold tracking-tight">Al-Ummah</h1>
        <div className="w-10 h-10 rounded-full bg-emerald flex items-center justify-center text-white font-serif">A</div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-12 text-center">
        <span className="text-gold font-sans text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Introduction</span>
        <h2 className="text-emerald font-serif text-4xl font-bold mb-6 leading-tight">L'Ummah : Une Diversité Unie</h2>
        <p className="text-gray-600 font-sans text-lg leading-relaxed mb-10">
          Une communauté mondiale de deux milliards d'âmes, tissée à travers les continents par des fils de foi, d'espoir et de fraternité.
        </p>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 aspect-[4/3] bg-emerald/10 flex items-center justify-center">
           <Globe size={120} className="text-emerald/20" />
           <div className="absolute inset-0 bg-gradient-to-t from-emerald/60 to-transparent flex flex-col justify-end p-8 text-left">
              <h3 className="text-white font-serif text-2xl font-bold mb-2">Un Héritage Mondial</h3>
              <p className="text-white/90 text-sm">De l'Andalousie à l'Indonésie, la culture musulmane s'exprime à travers une mosaïque de traditions.</p>
           </div>
        </div>
      </section>

      {/* Stats/Highlight */}
      <section className="px-6 mb-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-sand flex items-center justify-between">
          <div>
            <span className="text-emerald font-serif text-3xl font-bold block">+2 Milliards</span>
            <span className="text-gray-400 font-sans text-sm font-semibold uppercase tracking-wider">Cœurs Unis</span>
          </div>
          <div className="w-16 h-16 rounded-full bg-sand flex items-center justify-center text-emerald">
            <Globe size={32} />
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="px-6 py-8 bg-emerald text-white rounded-t-[3rem]">
        <div className="flex items-center space-x-2 mb-4">
           <Star size={20} className="text-gold" />
           <span className="text-gold font-sans text-xs font-bold uppercase tracking-widest">Bienvenue dans votre Sanctuaire</span>
        </div>
        <p className="font-serif text-2xl italic leading-relaxed mb-12">
          "Le rôle essentiel de l'Ummah dans le tissu social mondial est celui d'un pont de compréhension et de solidarité."
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
            <Globe size={24} className="mb-4 text-gold" />
            <h4 className="font-serif font-bold mb-2">Impact Global</h4>
            <p className="text-white/70 text-xs leading-relaxed">Contribuer positivement à l'humanité à travers l'art et la science.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
            <Heart size={24} className="mb-4 text-gold" />
            <h4 className="font-serif font-bold mb-2">Unité</h4>
            <p className="text-white/70 text-xs leading-relaxed">Des cœurs battant à l'unisson autour de valeurs de paix.</p>
          </div>
        </div>

        <Link to="/heritage" className="mt-8 flex items-center justify-center w-full bg-gold text-white font-sans font-bold py-4 rounded-xl shadow-lg hover:bg-gold/90 transition-colors space-x-2">
          <span>Découvrir notre Héritage</span>
          <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  )
}

export default Home
