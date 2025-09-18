"use client";

import { Coffee, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface HeaderProps {
  onDemoClick?: () => void;
}

export function Header({ onDemoClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Coffee className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold">AvatarConnect</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#problem"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Problem
          </a>
          <a
            href="#vision"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Vision
          </a>
          <a
            href="#avatars"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Avatars
          </a>
          <a
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#architecture"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Architecture
          </a>
          <a
            href="#workflow"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Workflow
          </a>
          <a
            href="#sequence"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Sequence
          </a>
          <a
            href="#roadmap"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Roadmap
          </a>
          <a
            href="#team"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Team
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={onDemoClick}>
            View Demo
          </Button>
          <Button size="sm" asChild>
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 flex flex-col gap-4">
            <a
              href="#problem"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Problem
            </a>
            <a
              href="#vision"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Vision
            </a>
            <a
              href="#avatars"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Avatars
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#architecture"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Architecture
            </a>
            <a
              href="#workflow"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Workflow
            </a>
            <a
              href="#sequence"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sequence
            </a>
            <a
              href="#roadmap"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Roadmap
            </a>
            <a
              href="#team"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex flex-col gap-2 pt-4 border-t">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  onDemoClick?.();
                  setIsMenuOpen(false);
                }}
              >
                View Demo
              </Button>
              <Button size="sm" asChild>
                <a href="#contact">Get Started</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
