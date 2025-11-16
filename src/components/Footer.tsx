const Footer = () => {
  return (
    <footer id="contact" className="relative py-20 bg-card border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gold mb-4">LuxGyps</h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent" />
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Strategic Web Design
            </p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent" />
          </div>
        </div>

        <div className="mb-8 max-w-2xl mx-auto">
          <p className="text-lg text-foreground/80 mb-6">
            Слава — Web-дизайнер / Маркетолог
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-muted-foreground">
            <a 
              href="mailto:data.guru.ai@gmail.com" 
              className="hover:text-accent transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              data.guru.ai@gmail.com
            </a>
            <a 
              href="tel:+79774638615" 
              className="hover:text-accent transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +7 977-463-86-15
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2025 LuxGyps Miami Strategic Marketing Analysis. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
