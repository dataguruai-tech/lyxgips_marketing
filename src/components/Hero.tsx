const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-luxury" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-in-up">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-gold mb-4 tracking-tight">
            LuxGyps
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent" />
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground">
              Strategic Marketing Analysis
            </p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent" />
          </div>
        </div>

        <h2 className="text-2xl md:text-4xl font-light text-foreground mb-6 max-w-4xl mx-auto leading-relaxed">
          Фаза II - Стратегический Маркетинговый Анализ<br />
          и План Разработки Веб-сайта для LuxGyps Miami
        </h2>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Полное исследование целевой аудитории, маркетинговая стратегия и архитектура премиум веб-сайта
        </p>

        <a 
          href="#introduction" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-medium hover:shadow-gold transition-all duration-300 hover:scale-105"
        >
          Начать чтение
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
