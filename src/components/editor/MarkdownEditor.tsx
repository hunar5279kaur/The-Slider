import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  onOpenAI: () => void;
}

const MarkdownEditor = ({ value, onChange, onOpenAI }: MarkdownEditorProps) => {
  return (
    <div className="h-full flex flex-col bg-card">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Markdown Editor</h2>
        <Button
          size="sm"
          onClick={onOpenAI}
          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-foreground"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          AI Generate
        </Button>
      </div>
      
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 resize-none border-0 rounded-none bg-card text-foreground font-mono text-sm p-6 focus-visible:ring-0"
        placeholder="Start writing your presentation in Markdown..."
      />
    </div>
  );
};

export default MarkdownEditor;
