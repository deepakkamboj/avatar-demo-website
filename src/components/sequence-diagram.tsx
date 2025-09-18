"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

export function SequenceDiagram() {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize mermaid with coffee theme colors
    mermaid.initialize({
      startOnLoad: true,
      theme: "base",
      themeVariables: {
        primaryColor: "hsl(18, 65%, 45%)", // Coffee brown
        primaryTextColor: "hsl(25, 47%, 15%)", // Dark coffee
        primaryBorderColor: "hsl(18, 65%, 35%)", // Darker coffee
        lineColor: "hsl(25, 25%, 45%)", // Medium coffee
        secondaryColor: "hsl(30, 25%, 85%)", // Light beige
        tertiaryColor: "hsl(36, 33%, 97%)", // Cream
        background: "hsl(36, 33%, 97%)", // Cream background
        mainBkg: "hsl(36, 33%, 97%)", // Cream
        secondBkg: "hsl(30, 25%, 90%)", // Light beige
        tertiaryBkg: "hsl(18, 65%, 45%)", // Coffee brown
      },
    });

    // Mermaid diagram definition
    const diagramDefinition = `
sequenceDiagram
    participant User as 👤 User Voice
    participant Browser as 🌐 Browser  
    participant ICE as 🔄 ICE Servers
    participant Azure as ☁️ Azure Services
    participant AI as 🧠 AI Providers
    participant DB as 🗄️ SQLite DB

    User->>Browser: Voice Input
    Browser->>Azure: Speech-to-Text API
    Azure-->>Browser: Transcribed Text
    Browser->>AI: Chat API + Function Tools
    AI->>DB: Order Management
    DB-->>AI: Order Confirmation
    AI-->>Browser: AI Response + Tool Results
    Browser->>Azure: Text-to-Speech API
    Browser->>ICE: ICE Token Request
    ICE-->>Browser: WebRTC Configuration
    Browser->>Azure: Avatar WebRTC Stream
    Azure-->>User: Lifelike Avatar Response
    `;

    // Render the diagram
    if (diagramRef.current) {
      diagramRef.current.innerHTML = "";
      const id = `mermaid-${Date.now()}`;
      mermaid.render(id, diagramDefinition).then((result) => {
        if (diagramRef.current) {
          diagramRef.current.innerHTML = result.svg;
        }
      });
    }
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-background to-secondary/20 border border-border rounded-xl p-6 shadow-coffee-shadow">
        <div
          ref={diagramRef}
          className="w-full overflow-x-auto bg-background rounded-lg p-4 border"
          style={{ minHeight: "400px" }}
        />
        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span>User Interaction</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-3 h-3 bg-secondary rounded-full"></div>
            <span>API Calls</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-3 h-3 bg-accent rounded-full"></div>
            <span>Real-time Stream</span>
          </div>
        </div>
      </div>
    </div>
  );
}
