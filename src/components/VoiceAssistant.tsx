import { Bot } from "lucide-react";

const VAPI_URL =
  "https://vapi.ai?demo=true&shareKey=a85f51b3-3050-4bf1-9388-fe5688cdf133&assistantId=0b077d2e-6a8d-4e4f-8f9a-a1e643d7a10f";

const VoiceAssistant = () => {
  return (
    <a
      href={VAPI_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-2xl animate-pulse-glow hover:scale-110 transition-transform"
      aria-label="Talk to AI"
    >
      <Bot size={28} />
    </a>
  );
};

export default VoiceAssistant;
