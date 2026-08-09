"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { contactFormSchema, ContactFormValues, SERVICE_TYPES } from "@/lib/contact/validations/contact";
import Button from "../ui/atoms/Button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      serviceType: undefined,
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitError(null);
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitError(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="max-w-2xl flex flex-col items-start py-10">
        <CheckCircle2 className="h-8 w-8 text-green-500 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-900">Thank you!</h2>
        <p className="text-sm text-gray-500 mt-2 max-w-md">
          Your inquiry has been received. A confirmation email is on its way, and our registry
          team will respond within 2 business hours.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <h2 className="title36 text-primary-black">Service Inquiry</h2>
      <p className="body16 text-neutral-10 mt-1 mb-8">
        Fill out the form below and our registry team will respond within 2 business hours.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <label
              htmlFor="fullName"
              className="body12 uppercase text-primary-black !font-medium"
            >
              Full Name
            </label>
            <input
              id="fullName"
              placeholder="Johnathan Doe"
              className="mt-2 w-full border-0 border-b border-gray-200 bg-transparent py-2 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-gray-900"
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="body12 uppercase text-primary-black !font-medium"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="j.doe@institutional.com"
              className="mt-2 w-full border-0 border-b border-gray-200 bg-transparent py-2 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-gray-900"
              {...register("email")}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <label
            htmlFor="serviceType"
            className="body12 uppercase text-primary-black !font-medium"
          >
            Service Type
          </label>
          <select
            id="serviceType"
            defaultValue=""
            className={cn(
              "mt-2 w-full border-0 border-b border-gray-200 bg-transparent py-2 text-sm focus:outline-none focus:border-gray-900",
              "text-gray-900"
            )}
            {...register("serviceType")}
          >
            <option value="" disabled>
              Select a service…
            </option>
            {SERVICE_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.serviceType && (
            <p className="text-xs text-red-500 mt-1">{errors.serviceType.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="body12 uppercase text-primary-black !font-medium"
          >
            Message <span>(Optional)</span>
          </label>
          <textarea
            id="message"
            rows={3}
            placeholder="Briefly describe your requirements…"
            className="mt-2 w-full border-0 border-b border-gray-200 bg-transparent py-2 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-gray-900 resize-none"
            {...register("message")}
          />
          {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
        </div>

        {submitError && <p className="text-sm text-red-500">{submitError}</p>}

        <Button
          variant="primary"
          size="md"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Submitting…" : "Submit Request"}
        </Button>
      </form>
    </div>
  );
}
