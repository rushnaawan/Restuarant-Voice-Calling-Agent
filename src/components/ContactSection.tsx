import { Phone, MapPin, Clock } from "lucide-react";

const hours = [
  { type: "Regular Seating", time: "11 AM – 11 PM" },
  { type: "Family Seating", time: "12 PM – 10 PM" },
  { type: "Window Seating", time: "11 AM – 11 PM" },
  { type: "Quiet Zone", time: "2 PM – 9 PM" },
  { type: "VIP Private", time: "5 PM – 12 AM" },
];

const ContactSection = () => (
  <section id="contact" className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Get In Touch</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">Contact Us</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Phone */}
        <div className="glass-card rounded-2xl p-8 text-center hover-glow transition-all">
          <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
            <Phone className="text-primary" size={24} />
          </div>
          <h3 className="font-semibold text-lg mb-2">Call Us</h3>
          <p className="text-muted-foreground">+92 300 1234567</p>
          <p className="text-muted-foreground">+92 42 35761234</p>
        </div>

        {/* Location */}
        <div className="glass-card rounded-2xl p-8 text-center hover-glow transition-all">
          <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
            <MapPin className="text-primary" size={24} />
          </div>
          <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
          <p className="text-muted-foreground">123 Food Street, Gulberg III</p>
          <p className="text-muted-foreground">Lahore, Pakistan</p>
        </div>

        {/* Hours */}
        <div className="glass-card rounded-2xl p-8 text-center hover-glow transition-all">
          <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
            <Clock className="text-primary" size={24} />
          </div>
          <h3 className="font-semibold text-lg mb-2">Opening Hours</h3>
          <div className="space-y-1">
            {hours.map((h) => (
              <div key={h.type} className="flex justify-between text-sm">
                <span className="text-muted-foreground">{h.type}</span>
                <span className="text-foreground font-medium">{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="mt-10 rounded-2xl overflow-hidden border border-border h-64 md:h-80">
        <iframe
          title="Mike's Restaurant Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.0!2d74.35!3d31.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzEyLjAiTiA3NMKwMjEnMDAuMCJF!5e0!3m2!1sen!2s!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  </section>
);

export default ContactSection;
