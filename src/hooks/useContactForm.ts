import { useState } from "react";
import type { FormEvent } from "react";

export type InquiryType = "personal" | "business";

export type ContactFormValues = {
  inquiryType: InquiryType;
  name: string;
  email: string;
  phone: string;
  company: string;
  interest: string;
  message: string;
};

type Errors = Partial<Record<keyof ContactFormValues, string>>;
type Status = "idle" | "submitting" | "success";

export function useContactForm(initialInterest: string, defaultType: InquiryType = "business") {
  const empty: ContactFormValues = {
    inquiryType: defaultType,
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: initialInterest,
    message: ""
  };
  const [values, setValues] = useState<ContactFormValues>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function update(field: keyof ContactFormValues, value: any) {
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
  if (!values.email.trim()) {
    errors.email = values.inquiryType === "business" ? "Please enter your business email." : "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "That email address doesn't look right.";
  }
  if (values.inquiryType === "business" && !values.company.trim()) {
    errors.company = "Please enter your company or organization name.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Tell us a little more about your requirements (at least 10 characters).";
  }
  return errors;
}