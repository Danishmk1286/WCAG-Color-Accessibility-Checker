import React from 'react';
import ColorAccessibilityChecker from '@/components/ColorAccessibilityChecker';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { Palette, Accessibility } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-primary">
              <Palette className="w-8 h-8" />
              <Accessibility className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Color Vision Check Buddy</h1>
              <p className="text-sm text-muted-foreground">WCAG Color Accessibility Checker</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ensure Your Colors Are{' '}
            <span className="text-primary">Accessible</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check if your color combinations meet WCAG accessibility standards. 
            Get instant feedback and ensure your designs are inclusive for everyone.
          </p>
        </div>

        {/* Color Checker Tool */}
        <div className="mb-16">
          <ColorAccessibilityChecker />
        </div>

        {/* FAQ Section */}
        <div className="mb-8">
          <FAQ />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

export default Index;
