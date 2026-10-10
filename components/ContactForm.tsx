"use client";

import { useActionState, useState } from "react";
import { submitInquiry, type InquiryField, type InquiryState } from "@/app/actions/contact";

const initialState: InquiryState = { status: "idle" };

const fields: { name: InquiryField; label: string; type?: string; autoComplete: string }[] = [
  { name: "name", label: "Name", autoComplete: "name" },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
];

export function ContactForm() {
  const [state, action, pending] = useActionState(submitInquiry, initialState);
  const [another, setAnother] = useState(false);
  const showSuccess = state.status === "success" && !another && !pending;

  if (showSuccess) {
    return (
      <div className="border border-brass/50 bg-paper px-6 py-10" role="status">
        <p className="font-display text-3xl text-navy">Message received.</p>
        <p className="mt-3 leading-relaxed text-mist">{state.message}</p>
        <button
          type="button"
          className="mt-8 text-sm font-semibold text-navy underline decoration-brass underline-offset-4 transition-colors duration-200 hover:text-brass-deep"
          onClick={() => setAnother(true)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      action={action}
      className="space-y-5"
      noValidate
      onSubmit={() => setAnother(false)}
    >
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Website
          <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {state.status === "error" && state.message ? (
        <p className="border border-navy/15 bg-paper px-4 py-3 text-sm text-navy" role="alert">
          {state.message}
        </p>
      ) : null}

      {fields.map((field) => {
        const error = state.fieldErrors?.[field.name];
        const errorId = `${field.name}-error`;
        return (
          <div key={field.name}>
            <label htmlFor={field.name} className="text-sm font-medium text-navy">
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type ?? "text"}
              autoComplete={field.autoComplete}
              required
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? errorId : undefined}
              className="mt-2 w-full rounded-2xl border border-navy/10 bg-paper px-4 py-3.5 text-ink outline-none transition-colors duration-200 focus:border-brass"
            />
            {error ? (
              <p id={errorId} className="mt-2 text-sm text-navy">
                {error}
              </p>
            ) : null}
          </div>
        );
      })}

      <div>
        <label htmlFor="message" className="text-sm font-medium text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          aria-invalid={state.fieldErrors?.message ? true : undefined}
          aria-describedby={state.fieldErrors?.message ? "message-error" : undefined}
          className="mt-2 w-full resize-y rounded-2xl border border-navy/10 bg-paper px-4 py-3.5 text-ink outline-none transition-colors duration-200 focus:border-brass"
        />
        {state.fieldErrors?.message ? (
          <p id="message-error" className="mt-2 text-sm text-navy">
            {state.fieldErrors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-brass px-6 py-3.5 text-sm font-semibold text-navy transition-transform duration-300 hover:-translate-y-0.5 hover:bg-brass-deep disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? "Sending…" : "Send message"}
      </button>
      <p className="text-sm text-mist">
        By sending this form you agree that Urduja may use these details to reply. Read the{" "}
        <a href="/privacy" className="text-navy underline decoration-brass underline-offset-4">
          privacy notice
        </a>
        .
      </p>
    </form>
  );
}
