import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    apartment_interest: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to database
      const { error: dbError } = await supabase
        .from("contact_inquiries")
        .insert([formData]);

      if (dbError) throw dbError;

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke("send-contact-notification", {
        body: formData,
      });

      if (emailError) {
        console.error("Email notification failed:", emailError);
        // Don't throw - the inquiry was saved, just notify
      }

      toast({
        title: "Anfrage gesendet",
        description: "Vielen Dank für Ihr Interesse. Wir melden uns in Kürze bei Ihnen.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        apartment_interest: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Fehler",
        description: "Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <span className="text-sm font-body uppercase tracking-[0.2em] text-muted-foreground">
                Kontakt
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 leading-tight">
                Wir beraten<br />
                <span className="italic">Sie gerne</span>
              </h2>
            </div>

            <p className="font-body text-muted-foreground leading-relaxed text-lg">
              Haben Sie Fragen zu unserem Projekt oder möchten Sie einen 
              Besichtigungstermin vereinbaren? Unser Team steht Ihnen 
              jederzeit zur Verfügung.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sand-light flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-body font-medium text-foreground">Telefon</h4>
                  <p className="font-body text-muted-foreground mt-1">
                    +49 89 123 456 78
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sand-light flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-body font-medium text-foreground">E-Mail</h4>
                  <p className="font-body text-muted-foreground mt-1">
                    info@residenz-parkblick.de
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sand-light flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-body font-medium text-foreground">Verkaufsbüro</h4>
                  <p className="font-body text-muted-foreground mt-1">
                    Ismaninger Straße 140<br />
                    81675 München
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sand-light flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-body font-medium text-foreground">Öffnungszeiten</h4>
                  <p className="font-body text-muted-foreground mt-1">
                    Mo–Fr: 09:00–18:00 Uhr<br />
                    Sa: nach Vereinbarung
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 md:p-10 rounded-lg border border-border">
            <h3 className="font-display text-2xl text-foreground mb-6">
              Anfrage senden
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-body">Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ihr Name"
                    className="font-body"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-body">E-Mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ihre@email.de"
                    className="font-body"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-body">Telefon</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+49 ..."
                    className="font-body"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apartment" className="font-body">Interesse an</Label>
                  <Select
                    value={formData.apartment_interest}
                    onValueChange={(value) => setFormData({ ...formData, apartment_interest: value })}
                  >
                    <SelectTrigger className="font-body">
                      <SelectValue placeholder="Wohnung wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">Allgemeine Informationen</SelectItem>
                      <SelectItem value="2-zimmer">2-Zimmer-Wohnung</SelectItem>
                      <SelectItem value="3-zimmer">3-Zimmer-Wohnung</SelectItem>
                      <SelectItem value="4-zimmer">4-Zimmer-Wohnung</SelectItem>
                      <SelectItem value="5-zimmer">5-Zimmer / Penthouse</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-body">Nachricht</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Ihre Nachricht oder Fragen..."
                  rows={5}
                  className="font-body resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body py-6"
              >
                {isSubmitting ? "Wird gesendet..." : "Anfrage absenden"}
              </Button>

              <p className="font-body text-xs text-muted-foreground text-center">
                Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
