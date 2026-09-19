import { useState } from "react";
import { toast } from "sonner";
import { CalendarDays, Users, Phone, User, Clock, Armchair } from "lucide-react";

const seatingTypes = [
  { label: "Regular", icon: "🪑" },
  { label: "Family", icon: "👨‍👩‍👧‍👦" },
  { label: "Window", icon: "🪟" },
  { label: "Quiet Zone", icon: "🤫" },
  { label: "VIP Private", icon: "👑" },
];

const ReservationSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", guests: "2", seating: "Regular" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date || !form.time) {
      toast.error("Please fill in all fields");
      return;
    }
    setSubmitted(true);
    toast.success("Table reserved successfully! We'll confirm shortly.");
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", phone: "", date: "", time: "", guests: "2", seating: "Regular" });
  };

  const update = (key: string, val: string) => setForm((p) => ({ ...p, [key]: val }));

  return (
    <section id="reserve" className="section-padding bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">Book a Table</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Reservations</h2>
        </div>

        <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-10 space-y-6">
          {/* Seating type */}
          <div>
            <label className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
              <Armchair size={16} /> Seating Type
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
              {seatingTypes.map((s) => (
                <button
                  key={s.label}
                  type="button"
                  onClick={() => update("seating", s.label)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    form.seating === s.label
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {s.icon} {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <InputField icon={<User size={16} />} label="Name" type="text" value={form.name} onChange={(v) => update("name", v)} placeholder="Your name" />
            <InputField icon={<Phone size={16} />} label="Phone" type="tel" value={form.phone} onChange={(v) => update("phone", v)} placeholder="+92 300 1234567" />
            <InputField icon={<CalendarDays size={16} />} label="Date" type="date" value={form.date} onChange={(v) => update("date", v)} />
            <InputField icon={<Clock size={16} />} label="Time" type="time" value={form.time} onChange={(v) => update("time", v)} />
          </div>

          <InputField icon={<Users size={16} />} label="Number of Guests" type="number" value={form.guests} onChange={(v) => update("guests", v)} placeholder="2" />

          <button
            type="submit"
            disabled={submitted}
            className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover-glow transition-all hover:scale-[1.02] disabled:opacity-50"
          >
            {submitted ? "✅ Reserved!" : "Reserve Table"}
          </button>
        </form>
      </div>
    </section>
  );
};

const InputField = ({
  icon, label, type, value, onChange, placeholder,
}: {
  icon: React.ReactNode; label: string; type: string; value: string; onChange: (v: string) => void; placeholder?: string;
}) => (
  <div>
    <label className="text-sm font-medium text-muted-foreground mb-1.5 flex items-center gap-2">
      {icon} {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full mt-1 px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
    />
  </div>
);

export default ReservationSection;
