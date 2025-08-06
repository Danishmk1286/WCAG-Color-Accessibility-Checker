import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12">
      <Separator className="mb-6" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6">
        <div className="text-sm text-muted-foreground">
          © 2024 Color Vision Check Buddy. All rights reserved.
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">Created by</span>
          <a 
            href="https://www.linkedin.com/in/danishmk1286/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <Linkedin className="w-4 h-4" />
            Danish Khan
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
