import aboutBg from "@/assets/about-bg.jpg";

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Image */}
      <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
        <img src={aboutBg} alt="Our kitchen" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">Since 2020</span>
        </div>
      </div>

      {/* Text */}
      <div>
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Our Story</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">About Domino's</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          Founded with a passion for authentic flavors, Domino's Pizza blends traditional recipes with modern culinary artistry. Every pizza is handcrafted with fresh ingredients, slow-risen dough, and a commitment to quality that you can taste in every bite.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {[
            { num: "5+", label: "Years" },
            { num: "50K+", label: "Happy Customers" },
            { num: "20+", label: "Menu Items" },
          ].map((s) => (
            <div key={s.label} className="text-center glass-card rounded-xl p-4">
              <p className="text-2xl font-bold text-primary">{s.num}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
