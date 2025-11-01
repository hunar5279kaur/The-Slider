import { Button } from "@/components/ui/button";
import { Download, FileText, Presentation, Code } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ExportToolbarProps {
  markdown: string;
  theme: string;
  onThemeChange: (theme: string) => void;
}

const ExportToolbar = ({ markdown, theme, onThemeChange }: ExportToolbarProps) => {
  const { toast } = useToast();

  const handleExport = (format: string) => {
    toast({
      title: "Export Started",
      description: `Exporting presentation as ${format.toUpperCase()}...`,
    });
    
    // Export logic would go here
    setTimeout(() => {
      toast({
        title: "Export Complete",
        description: `Your presentation has been exported as ${format.toUpperCase()}.`,
      });
    }, 1500);
  };

  return (
    <div className="absolute top-20 right-4 flex flex-col gap-3 p-3 bg-card/90 backdrop-blur-sm border border-border rounded-lg shadow-lg animate-slide-in">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold text-muted-foreground">THEME</span>
        <Select value={theme} onValueChange={onThemeChange}>
          <SelectTrigger className="w-32 h-8 text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="neon">Neon</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="h-px bg-border" />

      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold text-muted-foreground">EXPORT</span>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => handleExport("pdf")}
          className="justify-start text-xs h-8"
        >
          <FileText className="w-3 h-3 mr-2" />
          PDF
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => handleExport("html")}
          className="justify-start text-xs h-8"
        >
          <Code className="w-3 h-3 mr-2" />
          HTML
        </Button>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => handleExport("pptx")}
          className="justify-start text-xs h-8"
        >
          <Presentation className="w-3 h-3 mr-2" />
          PowerPoint
        </Button>
      </div>
    </div>
  );
};

export default ExportToolbar;
