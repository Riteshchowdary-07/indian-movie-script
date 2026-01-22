import { Button } from "@/components/ui/button";
import { Clapperboard, Heart, Swords, Ghost, Laugh } from "lucide-react";

interface PromptSuggestionsProps {
  onSelect: (prompt: string) => void;
}

const suggestions = [
  {
    icon: Swords,
    label: "Action Thriller",
    prompt: "Create an action thriller script about an undercover cop infiltrating a Mumbai crime syndicate. Include intense chase sequences and a shocking betrayal.",
  },
  {
    icon: Heart,
    label: "Romantic Drama",
    prompt: "Write a cross-cultural love story between a classical dancer from Jaipur and an NRI returning from London. Include family drama and a grand festival climax.",
  },
  {
    icon: Ghost,
    label: "Horror Mystery",
    prompt: "Generate a horror script set in an abandoned haveli in Rajasthan. Include supernatural elements rooted in local folklore and an unexpected twist.",
  },
  {
    icon: Laugh,
    label: "Comedy",
    prompt: "Create a comedy script about three best friends planning an elaborate wedding heist to help their friend escape an arranged marriage.",
  },
  {
    icon: Clapperboard,
    label: "Epic Drama",
    prompt: "Write an epic family saga spanning three generations, from India's independence to modern day. Include powerful dialogues and an emotional climax.",
  },
];

export const PromptSuggestions = ({ onSelect }: PromptSuggestionsProps) => {
  return (
    <div className="space-y-4">
      <p className="text-center text-muted-foreground text-sm">
        Choose a genre to get started or type your own idea
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {suggestions.map((suggestion) => (
          <Button
            key={suggestion.label}
            variant="outline"
            onClick={() => onSelect(suggestion.prompt)}
            className="flex flex-col gap-2 h-auto py-4 px-3 bg-card hover:bg-secondary hover:border-primary/50 transition-all group"
          >
            <suggestion.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">{suggestion.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
