# Framework Showcase: Contact Form Feature

This example walks through building a simple contact form feature using the Lavanda Code framework.

## The Idea

> "I want to add a contact form to my website so visitors can send me messages."

---

## Step 1: Clarify

**User:** I want to add a contact form to my website so visitors can send me messages.

**AI (clarify skill):** Let me help you clarify this idea.

### Questions:
1. **Who will use this?** Individual visitors, potential customers
2. **What's the core value?** Allow visitors to send messages without exposing email
3. **MVP scope:**
   - Must-have: Name, email, message fields; submit to your inbox
   - Nice-to-have: File attachments, auto-reply, spam protection

### Refined Requirements:
```markdown
## Contact Form Feature

### Users
- Primary: Website visitors who want to reach out
- Secondary: Site owner (receives messages)

### Core Features (MVP)
1. Form fields: Name, email, message (required)
2. Client-side validation
3. Submit sends email to site owner
4. Success/error feedback to user

### Out of Scope
- File attachments
- Auto-reply email
- Spam protection (Phase 2)
- Admin dashboard

### Tech Stack
- Frontend: React + Tailwind
- Backend: Next.js API Route
- Email: Resend / SendGrid
```

---

## Step 2: Challenge

**AI (challenge skill):** Let me stress-test this design.

### Q1: Where does the email go?
> **"Should messages go to a fixed email address, or should users configure it?"**

**Decision:** Fixed env var for MVP, database-stored in Phase 2.

### Q2: What happens if email service fails?
> **"Should users see an error, or queue for retry?"**

**Decision:** Show error with retry option for MVP.

### Q3: What's the minimum viable version?
> **"If you could only ship 2 things, what would they be?"**

**Decision:** 
1. Form with name/email/message
2. Success message on submit

Everything else is Phase 2.

---

## Step 3: Define (PRD)

```markdown
## PRD: Contact Form Feature

### Problem Statement
Visitors cannot easily contact the site owner without exposing email addresses, leading to missed opportunities.

### Solution
A contact form that allows visitors to send messages directly to the site owner's email.

### User Stories

1. As a **visitor**, I want to fill out a form with my name, email, and message, so I can contact the site owner.
2. As a **visitor**, I want to see confirmation after submitting, so I know my message was sent.
3. As a **visitor**, I want to see validation errors if I miss required fields, so I can fix them.
4. As a **site owner**, I want to receive emails with visitor messages, so I can respond to inquiries.

### Implementation Decisions

- **Route**: `/api/contact` (POST)
- **Schema**: None for MVP (email only)
- **Key models**: ContactFormData { name, email, message }
- **Email provider**: Resend (simple setup)

### Testing Decisions

- Unit test email formatting
- Integration test form submission
- Mock Resend for tests

### Out of Scope

- File attachments
- Spam protection
- Admin message history
```

---

## Step 4: Roadmap

```markdown
# Plan: Contact Form Feature

> Source PRD: Above

## Architectural decisions

- **Route**: `/api/contact` (POST)
- **Email**: Resend API
- **Env vars**: `RESEND_API_KEY`, `OWNER_EMAIL`

---

## Phase 1: Basic Form

**User stories**: #1, #2, #3, #4

### What to build
Create a contact form with name, email, and message fields. On submit, send email via Resend and show success message.

### Acceptance criteria

- [ ] Form renders with name, email, message fields
- [ ] All fields are required
- [ ] Email field validates format
- [ ] Submit calls `/api/contact`
- [ ] Success shows "Message sent!" feedback
- [ ] Error shows retry message
- [ ] `/api/contact` sends email via Resend
- [ ] API returns 201 on success, 400 on validation error
```

---

## Phase 2: Enhancement (Future)

- [ ] Add spam protection (honeypot/CAPTCHA)
- [ ] Store messages in database
- [ ] Auto-reply confirmation to user

---

## Step 5: Tickets

### Ticket: Contact Form UI

**Type:** AFK  
**Blocked by:** None

**What to build:**
- `ContactForm` component with name, email, message fields
- Client-side validation
- Submit handler calling `/api/contact`
- Success/error states

**Acceptance criteria:**
- [ ] All three fields present
- [ ] Validation prevents empty submission
- [ ] Loading state during submit
- [ ] Success/error feedback shown

---

### Ticket: Contact API Endpoint

**Type:** AFK  
**Blocked by:** None

**What to build:**
- `POST /api/contact` handler
- Validate name, email, message fields
- Send email via Resend
- Return success/error response

**Acceptance criteria:**
- [ ] Returns 201 with `{ success: true }` on valid submission
- [ ] Returns 400 with `{ error: "..." }` on invalid data
- [ ] Email sent to OWNER_EMAIL
- [ ] Unit tests pass
```

---

## Implementation Flow

For each phase:

```
1. builder → research (read existing patterns)
2. builder → ui/api (implement)
3. reviewer → verify (check against criteria)
4. reviewer → review (code quality)
5. reviewer → test (run tests)
6. reviewer → audit (security check)
7. deployer → deploy (if all pass)
```

---

## Example Implementation Artifacts

### `src/components/ContactForm.tsx`
```tsx
'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    
    setStatus(res.ok ? 'success' : 'error');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        required
      />
      <textarea
        placeholder="Message"
        value={form.message}
        onChange={e => setForm({ ...form, message: e.target.value })}
        required
      />
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send'}
      </button>
      {status === 'success' && <p>Message sent!</p>}
      {status === 'error' && <p>Failed to send. Please try again.</p>}
    </form>
  );
}
```

### `src/app/api/contact/route.ts`
```typescript
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'All fields are required' },
      { status: 400 }
    );
  }

  await resend.emails.send({
    from: 'Contact Form <onboarding@resend.dev>',
    to: process.env.OWNER_EMAIL!,
    subject: `New message from ${name}`,
    text: `From: ${email}\n\n${message}`,
  });

  return NextResponse.json({ success: true }, { status: 201 });
}
```

### Tests
```typescript
import { describe, it, expect, vi } from 'vitest';

vi.mock('resend', () => ({
  Resend: vi.fn().mockImplementation(() => ({
    emails: {
      send: vi.fn().mockResolvedValue({ id: 'test' }),
    },
  })),
}));

describe('Contact API', () => {
  it('returns 201 on valid submission', async () => {
    const res = await POST(new Request('http://localhost', {
      method: 'POST',
      body: JSON.stringify({ name: 'Test', email: 'test@test.com', message: 'Hello' }),
    }));
    expect(res.status).toBe(201);
  });

  it('returns 400 on missing fields', async () => {
    const res = await POST(new Request('http://localhost', {
      method: 'POST',
      body: JSON.stringify({ name: '', email: '', message: '' }),
    }));
    expect(res.status).toBe(400);
  });
});
```
