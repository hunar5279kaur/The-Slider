import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-4 animate-slide-in">
            <Sparkles className="w-4 h-4" />
            AI-Powered Presentation Tool
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight animate-slide-in" style={{ animationDelay: "0.1s" }}>
            Create Stunning
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Presentations
            </span>
            <br />
            with Markdown
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-in" style={{ animationDelay: "0.2s" }}>
            Write in Markdown, export to anything. TheSlider makes it easy to create professional presentations with AI assistance, beautiful themes, and powerful export options.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              onClick={() => navigate("/editor")}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-foreground px-8 text-lg h-14 animate-glow-pulse"
            >
              Start Creating
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-background px-8 text-lg h-14"
            >
              View Examples
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
