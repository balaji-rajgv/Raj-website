import { useState } from "react";
import type { FormEvent } from "react";

export type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
};

type Errors = Partial<Record<keyof ContactFormValues, string>>;
type Status = "idle" | "submitting" | "success";

export function useContactForm(initialInterest: string) {
  const empty: ContactFormValues = { name: "", email: "", company: "", interest: initialInterest, message: "" };
  const [values, setValues] = useState<ContactFormValues>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function update(field: keyof ContactFormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
  }

  function reset() {
    setValues(empty);
    setErrors({});
    setStatus("idle");
  }

  return { values, errors, status, update, submit, reset };
}

function validate(values: ContactFormValues): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your work email.";else
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "That email doesn't look right.";
  if (values.message.trim().length < 10) errors.message = "Tell us a little more (at least 10 characters).";
  return errors;
}