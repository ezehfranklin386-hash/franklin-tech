"use client";

import { useActionState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { submitContact, type ContactState } from "@/app/actions";
import { Button } from "@/components/ui/button";

const topics = [
  "A new website",
  "A web application",
  "Back-end or API work",
  "Database design",
  "Improvements to an existing site",
  "Something else",
];

const budgets = [
  "Not sure yet",
  "Under $1,000",
  "$1,000 to $5,000",
  "$5,000 to $10,000",
  "Over $10,000",
];

const initialState: ContactState = { ok: false };

const fieldClass =
  "w-full border-b border-input bg-transparent py-2 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary";

const selectClass =
  "w-full border-b border-input bg-transparent py-2 text-sm text-foreground outline-none transition-colors focus:border-primary [&>option]:bg-card [&>option]:text-foreground";

function Field({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-xs text-primary">{label}</span>
        {children}
      </div>
      {error ? (
        <p className="text-destructive mt-1.5 pl-2 text-xs">{error}</p>
      ) : null}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState
  );

  return (
    <form
      action={formAction}
      noValidate
      className="bg-card overflow-hidden rounded-xl border"
    >
      {/* Editor header */}
      <div className="text-muted-foreground flex items-center justify-between border-b px-4 py-2.5 font-mono text-xs">
        <span>brief.ts</span>
        <span>draft · not sent</span>
      </div>

      <div className="space-y-6 p-5 sm:p-7">
        {/* Honeypot: hidden from people, tempting to bots */}
        <div className="absolute -left-[9999px] top-auto" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <p className="font-mono text-xs text-primary">export const brief = {"{"}</p>

        <div className="space-y-6 pl-4 sm:pl-6">
          <Field label="kind:" error={state.fieldErrors?.topic}>
            <select
              id="topic"
              name="topic"
              defaultValue=""
              aria-invalid={Boolean(state.fieldErrors?.topic)}
              className={selectClass}
            >
              <option value="" disabled>
                what do you need?
              </option>
              {topics.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Field>

          <Field label="budget:" error={state.fieldErrors?.budget}>
            <select
              id="budget"
              name="budget"
              defaultValue=""
              className={selectClass}
            >
              <option value="" disabled>
                rough range
              </option>
              {budgets.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </Field>

          <Field label="name:" error={state.fieldErrors?.name}>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="your name"
              autoComplete="name"
              aria-invalid={Boolean(state.fieldErrors?.name)}
              className={fieldClass}
            />
          </Field>

          <Field label="email:" error={state.fieldErrors?.email}>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              aria-invalid={Boolean(state.fieldErrors?.email)}
              className={fieldClass}
            />
          </Field>

          <Field label="company:" error={state.fieldErrors?.company}>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="optional"
              autoComplete="organization"
              className={fieldClass}
            />
          </Field>

          <Field label="message:" error={state.fieldErrors?.message}>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="tell me about your project, your goals and any deadlines"
              aria-invalid={Boolean(state.fieldErrors?.message)}
              className={fieldClass}
            />
          </Field>
        </div>

        <p className="font-mono text-xs text-primary">{"}"}</p>

        <Button
          type="submit"
          size="lg"
          className="rounded-full"
          disabled={pending}
        >
          {pending ? "Sending…" : (<><Send /> Send Enquiry</>)}
        </Button>

        {state.ok && state.message ? (
          <p
            role="status"
            className="border-primary/30 bg-primary/5 flex items-start gap-2.5 rounded-lg border p-4 text-sm leading-relaxed"
          >
            <CheckCircle2 className="text-primary mt-0.5 size-4 shrink-0" />
            {state.message}
          </p>
        ) : null}

        <p className="text-muted-foreground text-xs">
          Your details are only used to respond to your enquiry and are never
          shared.
        </p>
      </div>
    </form>
  );
}
