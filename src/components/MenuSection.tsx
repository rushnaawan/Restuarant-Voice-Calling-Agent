import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type MenuCategory = {
  label: string;
  description: string;
  pricing: string;
  items: string[];
};

const menuData: MenuCategory[] = [
  {
    label: "🍕 Pizzas",
    description: "Hand Tossed · Pan · Thin Crust",
    pricing: "Small 499 · Medium 1,299 · Large 1,799",
    items: ["Chicken Tikka", "BBQ Chicken", "Pepperoni Passion", "Tex Mex", "Legend Ranch", "Hot & Spicy", "Hawaiian", "Cheese"],
  },
  {
    label: "🍟 Sides",
    description: "Freshly prepared sides",
    pricing: "Starting from PKR 399",
    items: ["Garlic Bread – 399", "Cheesy Bread – 499", "Potato Wedges – 399", "Chicken Wings – 499", "Chicken Kickers – 499"],
  },
  {
    label: "🍰 Desserts",
    description: "Sweet treats to finish",
    pricing: "Starting from PKR 399",
    items: ["Lava Cake – 499", "Cinnastix – 399"],
  },
  {
    label: "🥤 Drinks",
    description: "Chilled beverages",
    pricing: "Starting from PKR 69",
    items: ["Soft Drink – 89", "1.5L Drink – 299", "Water – 69"],
  },
  {
    label: "🔥 Deals",
    description: "Combos & value meals",
    pricing: "Starting from PKR 599",
    items: ["One & Only – 599", "Hungry One – 899", "Too Good For Two – 1,399", "Fix for Four – 2,399"],
  },
];

const MenuSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggle = (i: number) => setExpanded(expanded === i ? null : i);

  return (
    <section id="menu" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Explore</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Our Menu</h2>
        </div>

        <div className="space-y-4">
          {menuData.map((cat, i) => (
            <div key={cat.label} className="glass-card rounded-2xl overflow-hidden hover-glow transition-all">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
              >
                <div>
                  <h3 className="text-xl font-semibold">{cat.label}</h3>
                  <p className="text-primary font-bold text-sm mt-1">{cat.pricing}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{cat.description}</p>
                </div>
                {expanded === i ? (
                  <ChevronUp className="text-primary shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-muted-foreground shrink-0" size={24} />
                )}
              </button>

              {expanded === i && (
                <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-border/50 pt-4 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cat.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 py-2 px-3 rounded-lg bg-background/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
