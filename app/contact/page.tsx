import { ContactFormGridWithDetails } from "@/components/contact sections";

export const metadata = {
  title: "Contact Us | Startup Consulting",
  description: "Get in touch with our startup consulting experts. Book a free consultation to discuss your business needs and growth strategy.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <ContactFormGridWithDetails />
    </div>
  );
}