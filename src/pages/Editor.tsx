import { useState } from "react";
import Navbar from "@/components/Navbar";
import MarkdownEditor from "@/components/editor/MarkdownEditor";
import PreviewPane from "@/components/editor/PreviewPane";
import ExportToolbar from "@/components/editor/ExportToolbar";
import AIAssistant from "@/components/editor/AIAssistant";

const Editor = () => {
  const [markdown, setMarkdown] = useState(`# Welcome to TheSlider

---

## Your First Slide

Start writing your presentation in Markdown!

Use \`---\` to create new slides.

---

## Features

- 🎨 Beautiful themes
- 🤖 AI-powered content generation
- 📤 Export to PDF, HTML, PPT
- ✨ Live preview

---

## Get Started

Edit the markdown on the left to see changes in real-time!
`);
  const [theme, setTheme] = useState("default");
  const [showAI, setShowAI] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-16 h-screen flex">
        {/* Left: Markdown Editor */}
        <div className="w-1/2 border-r border-border">
          <MarkdownEditor 
            value={markdown} 
            onChange={setMarkdown}
            onOpenAI={() => setShowAI(true)}
          />
        </div>

        {/* Right: Preview */}
        <div className="w-1/2 relative">
          <PreviewPane markdown={markdown} theme={theme} />
          <ExportToolbar 
            markdown={markdown} 
            theme={theme}
            onThemeChange={setTheme}
          />
        </div>
      </div>

      {/* AI Assistant Modal */}
      {showAI && (
        <AIAssistant
          onClose={() => setShowAI(false)}
          onGenerate={(content) => {
            setMarkdown(content);
            setShowAI(false);
          }}
        />
      )}
    </div>
  );
};

export default Editor;
