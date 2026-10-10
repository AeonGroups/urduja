"use server";

import { createAdminClient } from "@/lib/supabase/server";

export type InquiryField = "name" | "phone" | "email" | "message";

export type InquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<InquiryField, string>>;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const namePattern = /^[\p{L}\s.'-]{2,80}$/u;

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export async function submitInquiry(
  _previous: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  if (clean(formData.get("company_website"))) {
    return {
      status: "success",
      message: "Thank you. Urduja has your message.",
    };
  }

  const name = clean(formData.get("name"));
  const phone = clean(formData.get("phone"));
  const email = clean(formData.get("email"));
  const message = clean(formData.get("message"));
  const digits = phone.replace(/\D/g, "");
  const fieldErrors: Partial<Record<InquiryField, string>> = {};

  if (!namePattern.test(name)) {
    fieldErrors.name = "Enter your name using letters, spaces, apostrophes, or hyphens.";
  }

  if (digits.length < 7 || digits.length > 15) {
    fieldErrors.phone = "Enter a phone number with 7 to 15 digits.";
  }

  if (!emailPattern.test(email) || email.length > 120) {
    fieldErrors.email = "Enter a valid email address.";
  }

  if (message.length < 10 || message.length > 2000) {
    fieldErrors.message = "Write a message between 10 and 2,000 characters.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Check the highlighted fields and try again.",
      fieldErrors,
    };
  }

  const supabase = createAdminClient();

  if (!supabase) {
    return {
      status: "error",
      message:
        "The inquiry form is not connected yet. Call 0917 129 2068 or email urduja.businessdevelopment@gmail.com.",
    };
  }

  const { error } = await supabase.from("inquiries").insert({
    name,
    phone,
    email,
    message,
  });

  if (error) {
    console.error("Inquiry insert failed", error.message);
    return {
      status: "error",
      message:
        "We could not save your message. Call 0917 129 2068 or email urduja.businessdevelopment@gmail.com.",
    };
  }

  return {
    status: "success",
    message: "Thank you. Urduja will reply using the details you sent.",
  };
}
