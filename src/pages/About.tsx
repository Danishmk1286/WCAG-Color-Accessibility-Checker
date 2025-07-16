import { ArrowLeft, Code, Palette, Accessibility, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const technologies = [
    'React 18',
    'TypeScript',
    'Tailwind CSS',
    'Vite',
    'Radix UI',
    'Lucide React'
  ];

  const features = [
    {
      icon: <Palette className="w-5 h-5" />,
      title: 'Real-time Color Analysis',
      description: 'Instantly check contrast ratios as you type or select colors'
    },
    {
      icon: <Accessibility className="w-5 h-5" />,
      title: 'WCAG Standards Compliance',
      description: 'Tests against WCAG AA and AAA accessibility guidelines'
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: 'Multiple Color Formats',
      description: 'Supports HEX, RGB, HSL, and named color formats'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Tool
              </Button>
            </Link>
            <h1 className="text-lg font-semibold text-foreground">About</h1>
            <div className="w-20"></div> {/* Spacer for center alignment */}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Palette className="w-8 h-8 text-primary" />
            <Accessibility className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Color Vision Check Buddy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive WCAG color accessibility checker designed to help developers and designers create inclusive digital experiences.
          </p>
        </div>

        {/* What is this tool */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What is this tool?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Color Vision Check Buddy is a web-based accessibility tool that helps you ensure your color combinations meet WCAG (Web Content Accessibility Guidelines) standards. It provides real-time contrast ratio calculations to help create designs that are accessible to users with various visual impairments.
            </p>
            <p className="text-muted-foreground">
              The tool instantly calculates contrast ratios between foreground and background colors, showing whether they pass WCAG AA (4.5:1 for normal text, 3:1 for large text) and AAA (7:1 for normal text, 4.5:1 for large text) standards.
            </p>
          </CardContent>
        </Card>

        {/* Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Technologies Used */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Technologies Used</CardTitle>
            <CardDescription>
              Built with modern web technologies for optimal performance and user experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              <div>
                <h4 className="font-medium text-foreground mb-1">Frontend Framework</h4>
                <p className="text-sm text-muted-foreground">React 18 with TypeScript for type-safe, component-based development</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">Styling</h4>
                <p className="text-sm text-muted-foreground">Tailwind CSS for utility-first styling with custom design system</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">Build Tool</h4>
                <p className="text-sm text-muted-foreground">Vite for fast development and optimized production builds</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-1">UI Components</h4>
                <p className="text-sm text-muted-foreground">Radix UI primitives with custom styling for accessibility-first components</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact for Bug Reports */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Report Issues & Contact
            </CardTitle>
            <CardDescription>
              Found a bug or have suggestions? We'd love to hear from you!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                If you encounter any issues, bugs, or have suggestions for improvements, please don't hesitate to reach out.
              </p>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a 
                  href="mailto:Danishmk1286@gmail.com?subject=Color Vision Check Buddy - Bug Report"
                  className="text-primary hover:underline"
                >
                  Danishmk1286@gmail.com
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                Please include details about the issue, steps to reproduce, and your browser/device information.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default About;