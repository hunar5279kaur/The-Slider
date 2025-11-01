import { Sparkles, Palette, Download, Zap, Code2, Workflow } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Generation",
    description: "Let AI create your presentations from simple prompts using Google Gemini.",
  },
  {
    icon: Code2,
    title: "Markdown Editing",
    description: "Write presentations in clean Markdown with live preview and syntax highlighting.",
  },
  {
    icon: Palette,
    title: "Beautiful Themes",
    description: "Choose from professional themes or customize your own with CSS.",
  },
  {
    icon: Download,
    title: "Export Anywhere",
    description: "Convert to PDF, HTML, PowerPoint, and more with a single click.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Real-time preview and rendering for a smooth editing experience.",
  },
  {
    icon: Workflow,
    title: "Developer Friendly",
    description: "CLI tools, plugins, and extensible architecture for automation.",
  },
];

const Features = () => {
  return (
    <div className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features that make creating presentations a breeze
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-background hover:border-accent/50 transition-all duration-300 group animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-4 group-hover:animate-glow-pulse">
                <feature.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
