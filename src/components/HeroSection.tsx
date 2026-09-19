import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Restaurant interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
          Welcome to
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
          Domino's <span className="text-gradient">Pizza</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up opacity-0" style={{ animationDelay: "0.6s" }}>
          Where every bite tells a story. Experience handcrafted pizzas, bold flavors, and warm hospitality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: "0.8s" }}>
          <a href="#menu" className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover-glow transition-all hover:scale-105">
            Order Now
          </a>
          <a href="#reserve" className="px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105">
            Reserve Table
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
