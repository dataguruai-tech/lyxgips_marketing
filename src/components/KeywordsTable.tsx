const KeywordsTable = () => {
  const keywords = [
    {
      type: "Высокочастотные (HF)",
      description: "Широкий охват, высокая конкуренция",
      english: ["interior designers Miami", "3D wall panels", "custom millwork Miami"],
      spanish: ["diseñadores de interiores Miami", "paneles de pared 3D"],
    },
    {
      type: "Среднечастотные (MF)",
      description: "Более конкретный запрос \"услуга + место\"",
      english: ["3d gypsum wall panels Miami", "custom gypsum molding Miami", "architectural plaster South Florida", "luxury wall panels Miami"],
      spanish: ["paneles 3D de yeso Miami", "molduras de yeso personalizadas Miami", "yeso arquitectónico Florida"],
    },
    {
      type: "Низкочастотные (LF)",
      description: "Длинные, очень конкретные запросы. Низкий трафик, но высокая конверсия",
      english: ["gypsum 3d panel installation Miami", "architectural millwork trade program Florida", "local plaster artisans Miami", "custom gypsum columns Miami"],
      spanish: ["instalación de paneles de yeso 3D", "programa para diseñadores Miami", "artesanos de yeso locales"],
    },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-secondary">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Тип Запроса</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Описание</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">English</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Español</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {keywords.map((row, index) => (
              <tr key={index} className="hover:bg-secondary/30 transition-colors">
                <td className="px-6 py-4">
                  <span className="text-accent font-medium">{row.type}</span>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">
                  {row.description}
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-2">
                    {row.english.map((keyword, i) => (
                      <span key={i} className="px-2 py-1 bg-background rounded text-xs text-foreground/80">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-2">
                    {row.spanish.map((keyword, i) => (
                      <span key={i} className="px-2 py-1 bg-background rounded text-xs text-foreground/80">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KeywordsTable;
