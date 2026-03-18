# Email Capture Configuration

## Form Copy for Website

### Headline Options

**Option 1 (Recommended):**
> Get the AI Stack Decision Framework
> A systematic approach to choosing the right AI tools — and avoiding $50k mistakes

**Option 2:**
> Stop wasting money on the wrong AI tools
> Get the framework I use to evaluate 50+ AI tools for every project

**Option 3:**
> The AI Tool Selection Framework
> Used by 100+ engineering teams to make confident AI decisions

### Button Text
- "Get the Free Framework"
- "Send Me the Framework"
- "Download Free Guide"

### Privacy Note
> "No spam. Unsubscribe anytime. I respect your inbox."

---

## ConvertKit Form Setup Instructions

### 1. Create the Form

1. Log into ConvertKit
2. Go to **Forms** → **Create New**
3. Choose **Inline** form type
4. Template: Choose **Minimal** or **Simple**
5. Name: "AI Stack Decision Framework Lead Magnet"

### 2. Form Settings

**Form Fields:**
- Email Address (required)
- First Name (optional - can remove for higher conversion)

**Success Message:**
```
Check your inbox! The AI Stack Decision Framework is on its way.

If you don't see it in 5 minutes, check your spam folder.
```

**Thank You Page (Optional):**
Redirect to: `/thanks` (you can create this page later)

### 3. Double Opt-in Settings

**Recommended:** Enable double opt-in
- This ensures higher quality subscribers
- Reduces spam complaints
- Better deliverability

**Confirmation Email Subject:**
```
Confirm your subscription to get the AI Stack Decision Framework
```

**Confirmation Email Body:**
```
Hi there,

You signed up to receive the AI Stack Decision Framework.

Click the button below to confirm and get instant access:

[Confirm Subscription]

This helps me keep spam out of your inbox.

— Ioodu
```

---

## Welcome Email Sequence

### Email 1: Deliver the Lead Magnet (Immediately after confirmation)

**Subject:** Your AI Stack Decision Framework is here

**Body:**
```
Hi {{first_name | default: "there"}},

Thanks for signing up! Here's your AI Stack Decision Framework:

[DOWNLOAD THE FRAMEWORK]

This framework has helped me evaluate 50+ AI tools across dozens of projects. It includes:

✓ The 5-step evaluation process
✓ Tool categories and when to use each
✓ Cost comparison matrix
✓ Build vs Buy decision tree
✓ POC checklist (don't skip this!)

Quick question: What's your biggest challenge when choosing AI tools right now?

Hit reply and let me know — I read every email.

— Ioodu
P.S. If you need hands-on help evaluating or implementing AI, I offer architecture audits and implementation services. Book a free discovery call: https://calendly.com/chinadbo/30min
```

### Email 2: Case Study (Day 2)

**Subject:** How one team saved $40k using this framework

**Body:**
```
Hi {{first_name | default: "there"}},

Quick story:

Last month, a startup reached out. They'd spent $50k building on a proprietary AI platform that couldn't scale.

We used this framework to evaluate alternatives. Result:
- Migrated to open-source models
- Cut API costs by 80%
- Improved latency by 3x

Total savings: $40k+ in the first year.

The difference? They skipped the POC checklist the first time around.

[Read the full case study]

If you're planning an AI project, reply with your use case. Happy to share specific tool recommendations.

— Ioodu
```

### Email 3: RAG Deep Dive (Day 4)

**Subject:** The #1 mistake when building RAG systems

**Body:**
```
Hi {{first_name | default: "there"}},

Most RAG implementations fail because of one thing:

**Poor chunking strategy.**

Here's what usually happens:
1. Team dumps documents into a vector DB
2. Uses generic 1000-token chunks
3. Gets terrible retrieval results
4. Blames the embedding model

The fix: Structure-aware chunking

For code → Split by function/class
For docs → Split by section/heading
For conversation → Keep full threads

I wrote a full guide on building production-ready RAG systems:
[Read: The Modern AI Engineering Stack]

Also: I've open-sourced my RAG starter kit ($79 value) — it includes proper chunking implementations:
[Check out the RAG Starter Kit]

— Ioodu
```

### Email 4: Course Soft Sell (Day 7)

**Subject:** Ready to go deeper?

**Body:**
```
Hi {{first_name | default: "there"}},

Over the past week, you've gotten:
- The AI Stack Decision Framework
- Real-world case studies
- RAG implementation tips

If you're finding this useful, you might be ready for the full course.

I'm building "Production-Ready AI Systems" — a comprehensive guide to shipping AI that actually works in production.

**What it covers:**
- LLM selection and integration
- Building reliable RAG systems
- Agent architecture patterns
- Evaluation and testing frameworks
- Monitoring and observability
- Safety and guardrails
- Cost optimization
- Production deployment strategies

**Format:**
- 8 video modules (6+ hours)
- Code repositories for each module
- Private Discord community
- Monthly live Q&A sessions

**Price:** $499 (early access: $349)

Want early access?
[Join the Waitlist]

— Ioodu
```

---

## Tagging Strategy

### Tags to Create in ConvertKit

1. **Lead Magnet: AI Framework** - Everyone who downloads the framework
2. **Interest: RAG** - Clicked RAG-related links
3. **Interest: Cost Optimization** - Clicked cost-related links
4. **High Intent** - Clicked service/course links multiple times
5. **Customer** - Purchased a product

### Automation Rules

**Rule 1: Interest Tagging**
- If subscriber clicks "RAG Starter Kit" link → Tag: "Interest: RAG"

**Rule 2: Engagement Scoring**
- Opened 3+ emails → Tag: "Engaged"
- Clicked any link → Tag: "Clicked"
- Clicked service link 2+ times → Tag: "High Intent"

**Rule 3: Exclusion**
- If tagged "Customer" → Stop lead nurture sequence

---

## Form Embed Code (After Setup)

Once you've created the form in ConvertKit, copy the form ID from the URL:

Example: `https://app.convertkit.com/forms/1234567/edit`
Form ID: `1234567`

Then update `src/components/EmailCapture.astro`:

```astro
<form action="https://app.convertkit.com/forms/1234567/submissions" method="post">
```

Replace `1234567` with your actual form ID.

---

## A/B Test Ideas

### Test 1: Headline
- A: "Get the AI Stack Decision Framework"
- B: "Stop wasting money on the wrong AI tools"

### Test 2: Button Color
- A: Primary brand color (cyan)
- B: High-contrast color (red/orange)

### Test 3: Form Length
- A: Email only (higher conversion)
- B: Email + First Name (more personalization)

### Test 4: CTA Position
- A: After blog post content
- B: Sticky sidebar on scroll
- C: Exit intent popup

---

## Success Metrics

Track these in ConvertKit Analytics:

| Metric | Target | Notes |
|--------|--------|-------|
| Conversion Rate | 3-5% | Visitors → Subscribers |
| Open Rate | 45%+ | Email 1 should be 60%+ |
| Click Rate | 10%+ | Framework download link |
| Unsubscribe Rate | <1% | Per email |
| Spam Rate | <0.1% | Critical for deliverability |

---

## Troubleshooting

### Low Conversion Rate?
- Test different headlines
- Remove first name field
- Move form above the fold
- Add social proof ("Join 500+ engineers")

### Low Open Rate?
- Check subject line spam score
- Verify double opt-in is working
- Check sender reputation
- Test plain text vs HTML

### High Unsubscribe Rate?
- You're emailing too frequently
- Content mismatch with expectation
- Send better lead magnet first

---

## Next Steps

1. [ ] Create form in ConvertKit
2. [ ] Set up double opt-in email
3. [ ] Write welcome sequence in ConvertKit
4. [ ] Upload lead magnet PDF to ConvertKit or host on your site
5. [ ] Update EmailCapture.astro with form ID
6. [ ] Test complete signup flow
7. [ ] Set up automation rules
8. [ ] Create "Thanks" page (optional)
