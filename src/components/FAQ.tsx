import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is WCAG and why is color contrast important?",
      answer: <>
        <a
          href="https://www.w3.org/WAI/standards-guidelines/wcag/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          WCAG (Web Content Accessibility Guidelines)
        </a>{" "}
        are international standards for web accessibility. Color contrast is crucial because it ensures that text is readable for people with visual impairments, including{" "}
        <a
          href="https://www.colorblindawareness.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          color blindness
        </a>{" "}
        and low vision. Proper contrast ratios make your content accessible to everyone.
      </>
    },
    {
      question: "What's the difference between WCAG AA and AAA standards?",
      answer: <>
        <a
          href="https://webaim.org/articles/contrast/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          WCAG AA
        </a>{" "}
        requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.{" "}
        <a
          href="https://www.w3.org/TR/WCAG21/#contrast-minimum"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          WCAG AAA
        </a>{" "}
        is more stringent, requiring 7:1 for normal text and 4.5:1 for large text. AA is the legal requirement in many countries, while AAA provides enhanced accessibility.
      </>
    },
    {
      question: "What is considered 'large text' in WCAG guidelines?",
      answer: <>
        Large text is defined as 18 point (24px) and larger, or 14 point (18.5px) and larger if bold. These text sizes have lower contrast requirements because they're easier to read at lower contrast ratios. You can read more about this in the{" "}
        <a
          href="https://www.w3.org/TR/WCAG21/#dfn-large-scale"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          WCAG definition of large text
        </a>.
      </>
    },
    {
      question: "How do I fix colors that don't pass the contrast test?",
      answer: <>
        To improve contrast, you can darken the text color, lighten the background color, or do both. Try adjusting the lightness/darkness of your colors while keeping the hue. You can also use the{" "}
        <a
          href="https://webaim.org/resources/contrastchecker/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          WebAIM Contrast Checker
        </a>{" "}
        to test different combinations until you find one that passes.
      </>
    },
    {
      question: "Do these guidelines apply to logos and decorative elements?",
      answer: <>
        WCAG contrast requirements primarily apply to text content. Logos, decorative images, and incidental text (like in photographs) are generally exempt. However, any text in images that conveys important information should meet{" "}
        <a
          href="https://www.w3.org/WAI/tutorials/images/text/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          contrast requirements
        </a>.
      </>
    },
    {
      question: "Can I use this tool for mobile app design?",
      answer: <>
        Yes! While WCAG was originally created for web content, the color contrast principles apply to all digital interfaces, including mobile apps. Many mobile platforms also reference WCAG guidelines in their{" "}
        <a
          href="https://developer.apple.com/accessibility/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Apple Accessibility
        </a>{" "}
        and{" "}
        <a
          href="https://developer.android.com/guide/topics/ui/accessibility"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Android Accessibility
        </a>{" "}
        documentation.
      </>
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": typeof faq.question === "string" ? faq.question : "",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": typeof faq.answer === "string" ? faq.answer : ""
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" />
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </>
  );
};

export default FAQ;
