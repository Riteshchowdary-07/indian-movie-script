import { cn } from "@/lib/utils";
import { Film, User } from "lucide-react";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

export const ChatMessage = ({ role, content }: ChatMessageProps) => {
  const isAssistant = role === "assistant";

  return (
    <div
      className={cn(
        "flex gap-4 p-4 rounded-xl animate-in fade-in-50 slide-in-from-bottom-2 duration-300",
        isAssistant ? "bg-card" : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
          isAssistant
            ? "bg-gradient-gold text-primary-foreground"
            : "bg-secondary text-foreground"
        )}
      >
        {isAssistant ? <Film className="w-5 h-5" /> : <User className="w-5 h-5" />}
      </div>
      <div className="flex-1 space-y-2 overflow-hidden">
        <p className="text-sm font-medium text-muted-foreground">
          {isAssistant ? "FilmGuru" : "You"}
        </p>
        <div className="prose prose-invert max-w-none">
          <p className="text-foreground whitespace-pre-wrap leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};
