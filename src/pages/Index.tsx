import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { PromptSuggestions } from "@/components/PromptSuggestions";
import { useChat } from "@/hooks/useChat";
import { Film, RotateCcw, Sparkles } from "lucide-react";

const Index = () => {
  const { messages, isLoading, sendMessage, clearChat } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const hasMessages = messages.length > 0;

  return (
    <div className="min-h-screen bg-background cinema-pattern flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="container max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center glow-gold">
              <Film className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient-gold">FilmGuru</h1>
              <p className="text-xs text-muted-foreground">Indian Cinema Script Generator</p>
            </div>
          </div>
          {hasMessages && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearChat}
              className="text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              New Script
            </Button>
          )}
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-6 flex flex-col">
        {!hasMessages ? (
          <div className="flex-1 flex flex-col items-center justify-center space-y-8 py-12">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-gold flex items-center justify-center glow-gold">
                <Sparkles className="w-10 h-10 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-gradient-gold">Create Your</span>{" "}
                <span className="text-foreground">Blockbuster</span>
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Describe your movie idea and let AI craft a compelling script with rich characters, 
                powerful dialogues, and a cinematic climax.
              </p>
            </div>
            <PromptSuggestions onSelect={sendMessage} />
          </div>
        ) : (
          <div className="flex-1 space-y-4 pb-4 overflow-y-auto scrollbar-cinema">
            {messages.map((message, index) => (
              <ChatMessage key={index} role={message.role} content={message.content} />
            ))}
            {isLoading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex gap-4 p-4 rounded-xl bg-card animate-pulse">
                <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                  <Film className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="flex-1 space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">FilmGuru</p>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </main>

      {/* Input Area */}
      <div className="sticky bottom-0 backdrop-blur-xl bg-background/80 border-t border-border">
        <div className="container max-w-4xl mx-auto px-4 py-4">
          <ChatInput onSend={sendMessage} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Index;
