"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DemoDialog } from "@/components/demo-dialog";
import { DemoProvider, useDemoDialog } from "@/contexts/demo-context";

interface ClientLayoutProps {
  children: React.ReactNode;
}

function LayoutContent({ children }: ClientLayoutProps) {
  const { isDemoOpen, openDemo, closeDemo } = useDemoDialog();

  return (
    <div className="min-h-screen flex flex-col">
      <Header onDemoClick={openDemo} />
      <main className="flex-1">{children}</main>
      <Footer />
      <DemoDialog isOpen={isDemoOpen} onClose={closeDemo} />
    </div>
  );
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <DemoProvider>
      <LayoutContent>{children}</LayoutContent>
    </DemoProvider>
  );
}
