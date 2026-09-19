const Footer = () => (
  <footer className="py-8 px-4 border-t border-border text-center">
    <p className="font-display text-xl font-bold text-gradient mb-2">Domino's Pizza</p>
    <p className="text-muted-foreground text-sm">
      © {new Date().getFullYear()} Domino's Pizza. All rights reserved.
    </p>
  </footer>
);

export default Footer;
