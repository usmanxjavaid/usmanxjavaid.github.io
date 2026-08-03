"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const notConfigured = siteConfig.emailjs.serviceId === "YOUR_SERVICE_ID";

  const onSubmit = async (data: FormValues) => {
    if (notConfigured) {
      setStatus("error");
      return;
    }
    try {
      await emailjs.send(
        siteConfig.emailjs.serviceId,
        siteConfig.emailjs.templateId,
        { from_name: data.name, from_email: data.email, message: data.message },
        { publicKey: siteConfig.emailjs.publicKey }
      );
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-text">
            Name
          </label>
          <input
            id="name"
            {...register("name", { required: "Please enter your name" })}
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-faint focus:border-violet focus:outline-none"
            placeholder="Jane Doe"
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-text">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Please enter your email",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
            })}
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-faint focus:border-violet focus:outline-none"
            placeholder="jane@company.com"
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm text-text">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            {...register("message", { required: "Tell me a bit about the project", minLength: { value: 10, message: "A little more detail helps" } })}
            className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text placeholder:text-text-faint focus:border-violet focus:outline-none"
            placeholder="What are you looking to automate?"
          />
          {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>}
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? "Sending…" : "Send message"} <Send size={15} />
        </Button>
      </form>

      <AnimatePresence mode="wait">
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-5 flex items-center gap-2 rounded-xl border border-cyan/30 bg-cyan/10 px-4 py-3 text-sm text-cyan"
          >
            <CheckCircle2 size={16} /> Message sent — I&apos;ll get back to you soon.
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-5 flex items-start gap-2 rounded-xl border border-amber/30 bg-amber/10 px-4 py-3 text-sm text-amber"
          >
            <AlertCircle size={16} className="mt-0.5 shrink-0" />
            {notConfigured
              ? "EmailJS isn't configured yet — add your service, template, and public key in content/site.ts."
              : `Something went wrong — email me directly at ${siteConfig.email} instead.`}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}