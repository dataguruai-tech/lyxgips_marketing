const TableOfContents = () => {
  const sections = [
    { id: "introduction", title: "Введение", number: "01" },
    { id: "strategy", title: "Главная Стратегия", number: "02" },
    { id: "photos", title: "Важность Оригинального Контента", number: "03" },
    { id: "modes", title: "Два Режима Сайта", number: "04" },
    { id: "selling", title: "Как мы будем продавать", number: "05" },
    { id: "marketing", title: "Маркетинг и SEO", number: "06" },
    { id: "roadmap", title: "План Действий", number: "07" },
    { id: "audience", title: "Целевая Аудитория", number: "08" },
    { id: "utp", title: "УТП и Маркетинговые Подходы", number: "09" },
    { id: "keywords", title: "Семантическое Ядро", number: "10" },
    { id: "structure", title: "Структура Сайта", number: "11" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="text-xl font-bold text-gold hover:text-gold-light transition-colors">
            LuxGyps
          </a>
          
          <div className="hidden lg:flex items-center gap-1 overflow-x-auto">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap group"
              >
                <span className="text-accent mr-2 text-xs">{section.number}</span>
                {section.title}
              </a>
            ))}
          </div>

          <a 
            href="#contact" 
            className="px-6 py-2 bg-accent/10 border border-accent/30 text-accent rounded-full text-sm font-medium hover:bg-accent/20 transition-all"
          >
            Контакт
          </a>
        </div>
      </div>
    </nav>
  );
};

export default TableOfContents;
