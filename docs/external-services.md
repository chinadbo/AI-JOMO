# External Service Configuration Guide

> **REQUIRED BEFORE LAUNCH (Week 4)**
> This guide must be completed before the first low-ticket sales target.

---

## ConvertKit Setup (Email Capture)

**Lead Magnet:** AI Stack Decision Framework
**Files to update:**
- `src/components/EmailCapture.astro`
- `src/pages/framework.astro`

**Content ready:** See `docs/lead-magnets/` for:
- `ai-stack-decision-framework.md` - The lead magnet content
- `email-capture-config.md` - Full ConvertKit setup guide

### Quick Setup:

1. Create account at https://convertkit.com
2. Create a new form:
   - **Name:** "AI Stack Decision Framework Lead Magnet"
   - **Type:** Inline
   - **Fields:** Email only (higher conversion)
3. Get your form ID from the URL (e.g., `forms/1234567/edit` → ID is `1234567`)
4. Replace `PLACEHOLDER_FORM_ID` in:
   - `src/components/EmailCapture.astro`
   - `src/pages/framework.astro`
5. Set up welcome email sequence (see email-capture-config.md)

### Lead Magnet Landing Page:
Access at: `/framework`

**What's Included:**
- 5-step evaluation process
- Tool categories guide
- Cost comparison matrix
- Build vs Buy decision tree
- 2-week POC checklist

**Email Sequence:**
- Email 1: Deliver framework (immediate)
- Email 2: Case study (Day 2)
- Email 3: RAG deep dive (Day 4)
- Email 4: Course soft sell (Day 7)

---

## Gumroad Setup (Digital Products)

**File to update:** `src/data/products.json`

### Steps:
1. Create account at https://gumroad.com
2. Create 4 products with the following details:

| Product Name | Price | Description |
|--------------|-------|-------------|
| AI Stack Decision Matrix | $49 | Interactive Notion template for evaluating 50+ AI tools |
| RAG Starter Kit | $79 | Pre-built code templates for common RAG patterns |
| AI Prompt Library | $39 | 200+ production-ready prompts with testing framework |
| LLM Cost Calculator | $29 | Spreadsheet + API tool for forecasting AI costs |

3. For each product:
   - Go to product "Share" tab
   - Copy the short link (format: `https://gumroad.com/l/XXXXX`)
4. Update products.json:
   - Replace `PLACEHOLDER_MATRIX` with AI Stack Decision Matrix link slug
   - Replace `PLACEHOLDER_RAG` with RAG Starter Kit link slug
   - Replace `PLACEHOLDER_PROMPTS` with AI Prompt Library link slug
   - Replace `PLACEHOLDER_CALC` with LLM Cost Calculator link slug

### Verification:
- Test each purchase link
- Ensure checkout flow works

---

## Calendly Setup (Service Booking)

**File to update:** `src/pages/services/index.astro`

### Steps:
1. Create account at https://calendly.com
2. Create 4 event types:

| Event Type | Duration | Purpose |
|------------|----------|---------|
| AI Architecture Audit Discovery | 30 min | Book discovery call for $3,000 audit service |
| RAG System Build Consultation | 30 min | Book discovery call for $8,000 RAG build |
| Team AI Training Discovery | 30 min | Book discovery call for $5,000 training |
| Fractional AI Engineer Application | 45 min | Application call for $10k/month fractional service |

3. For each event type:
   - Go to Event Type Settings
   - Copy the scheduling link (format: `https://calendly.com/username/event-name`)
4. Update services/index.astro:
   - Replace `PLACEHOLDER_AUDIT` with AI Architecture Audit event path
   - Replace `PLACEHOLDER_RAG` with RAG System Build event path
   - Replace `PLACEHOLDER_TRAINING` with Team AI Training event path
   - Replace `PLACEHOLDER_FRACTIONAL` with Fractional AI Engineer event path

### Verification:
- Test each booking link
- Confirm calendar invites are sent

---

## Teachable Setup (Online Course) - Week 6+

**Note:** This is NOT required for Week 4 launch. Configure in Week 6.

**File to update:** `src/data/products.json` (add new entry)

### Steps:
1. Create account at https://teachable.com
2. Create "Production-Ready AI Systems" course
3. Set price: $499
4. Configure course curriculum (modules TBD)
5. Get course enrollment URL
6. Add to products.json as new product entry

---

## Pre-Launch Checklist

- [ ] ConvertKit account created and form ID configured
- [x] Gumroad account created and all 4 products published
- [x] Calendly account created and all 4 event types configured
- [x] All PLACEHOLDER values replaced in code
- [ ] Tested all links (email form, purchase links, booking links)
- [ ] Verified integrations work end-to-end

---

## Emergency Contacts

- ConvertKit Support: https://help.convertkit.com
- Gumroad Support: https://gumroad.com/support
- Calendly Support: https://help.calendly.com
- Teachable Support: https://support.teachable.com
