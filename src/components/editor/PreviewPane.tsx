import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface PreviewPaneProps {
  markdown: string;
  theme: string;
}

const PreviewPane = ({ markdown, theme }: PreviewPaneProps) => {
  const [slides, setSlides] = useState<string[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideArray = markdown.split(/\n---\n/).filter(s => s.trim());
    setSlides(slideArray);
    setCurrentSlide(0);
  }, [markdown]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const themeClasses = {
    default: "bg-gradient-to-br from-primary to-secondary",
    dark: "bg-card",
    light: "bg-gradient-to-br from-muted to-accent",
    neon: "bg-background border-2 border-accent",
  };

  return (
    <div className="h-full flex flex-col bg-background">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Preview</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            {currentSlide + 1} / {slides.length}
          </span>
          <Button size="icon" variant="ghost">
            <Maximize2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div 
          className={`w-full max-w-4xl aspect-video rounded-lg shadow-2xl p-12 ${themeClasses[theme as keyof typeof themeClasses]} transition-all duration-300`}
          style={{
            boxShadow: theme === 'neon' ? '0 0 40px hsl(var(--neon-cyan) / 0.3)' : undefined
          }}
        >
          <div className="prose prose-invert max-w-none h-full overflow-auto">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {slides[currentSlide] || ""}
            </ReactMarkdown>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-border flex justify-center gap-4">
        <Button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          variant="outline"
          size="sm"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>
        <Button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          variant="outline"
          size="sm"
        >
          Next
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default PreviewPane;
