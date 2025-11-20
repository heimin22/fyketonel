"use client";

import { useState } from "react";
import { Button } from "@/components/ui/8bit/button";
import { Input } from "@/components/ui/8bit/input";
import { Textarea } from "@/components/ui/8bit/textarea";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          message,
          to: "athrundiscinity@protonmail.com",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setEmail("");
        setMessage("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        <div className="space-y-3">
          <label
            htmlFor="email"
            className="retro block text-base uppercase tracking-[0.25em] text-muted-foreground"
          >
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            disabled={isSubmitting}
            className="w-full h-14 text-base px-6"
          />
        </div>

        <div className="space-y-3">
          <label
            htmlFor="message"
            className="retro block text-base uppercase tracking-[0.25em] text-muted-foreground"
          >
            Message
          </label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Got any goodies? Send me a message.."
            required
            disabled={isSubmitting}
            rows={10}
            className="w-full resize-none text-base px-6 py-4"
          />
        </div>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="retro w-full uppercase tracking-[0.3em] h-16 text-base"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      {submitStatus === "success" && (
        <div className="retro rounded-none border-4 border-green-500 bg-green-500/10 p-4 text-center text-sm uppercase tracking-[0.2em] text-green-500">
          Message sent successfully!
        </div>
      )}

      {submitStatus === "error" && (
        <div className="retro rounded-none border-4 border-destructive bg-destructive/10 p-4 text-center text-sm uppercase tracking-[0.2em] text-destructive">
          Failed to send message. Please try again.
        </div>
      )}
    </form>
  );
}

