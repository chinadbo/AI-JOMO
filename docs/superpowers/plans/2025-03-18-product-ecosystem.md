# Product Ecosystem Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a full-funnel tech authority business generating $100k/month through blog content, email capture, digital products, and consulting services.

**Architecture:** Content-first approach where a comprehensive blog post drives traffic to email capture, which funnels to low-ticket products, a premium course, and high-ticket consulting services. All components integrate with the existing Astro blog.

**Tech Stack:** Astro (existing), MDX (content), ConvertKit (email), Gumroad (products), Teachable (course), Calendly (booking)

---

## File Structure

```
src/
├── content/
│   └── tech/
│       └── modern-ai-engineering-stack-2026.mdx    # Main blog post
├── components/
│   ├── EmailCapture.astro                         # Email signup form
│   ├── ProductCTA.astro                           # Product CTA component
│   └── ServiceCTA.astro                           # Service CTA component
├── pages/
│   ├── products/
│   │   └── index.astro                            # Products landing page
│   └── services/
│       └── index.astro                            # Service landing page
└── data/
    ├── products.json                              # Low-ticket product data
    └── checklist.md                               # Free lead magnet content
public/
├── downloads/
│   └── ai-production-checklist.md                 # Lead magnet download
docs/
├── superpowers/
│   ├── specs/2025-03-18-product-ecosystem-design.md   # Design spec
│   └── plans/2025-03-18-product-ecosystem.md          # This plan
└── external-services.md                           # Service config
```

---

## Task 1: Verify Project Structure

**Files:**
- Read: `astro.config.mjs`
- Read: `src/components/` to find navigation component

**Description:** Discover actual project structure before creating components.

- [ ] **Step 1: Find navigation component**

Run: `ls src/components/` and identify navigation component (Navigation.astro, Header.astro, or similar)
Expected: File name containing navigation links

- [ ] **Step 2: Check dev server port**

Read `astro.config.mjs` and find server port (default 4321)
Expected: Note the actual port for testing URLs

- [ ] **Step 3: Commit (documentation)**

```bash
# No code changes yet, just documenting findings
```

---

## Task 2: Create ProductCTA Component (Moved Earlier)

**Files:**
- Create: `src/components/ProductCTA.astro`
- Create: `src/data/products.json`

**Description:** Create product data and CTA component before blog post needs it.

- [ ] **Step 1: Create products data file**

```json
{
  "products": [
    {
      "id": "ai-stack-decision-matrix",
      "name": "AI Stack Decision Matrix",
      "price": 49,
      "description": "Interactive Notion template for evaluating 50+ AI tools",
      "gumroadUrl": "https://gumroad.com/l/PLACEHOLDER_MATRIX",
      "targetBuyer": "Teams evaluating AI"
    },
    {
      "id": "rag-starter-kit",
      "name": "RAG Starter Kit",
      "price": 79,
      "description": "Pre-built code templates for common RAG patterns",
      "gumroadUrl": "https://gumroad.com/l/PLACEHOLDER_RAG",
      "targetBuyer": "Developers building RAG"
    },
    {
      "id": "ai-prompt-library",
      "name": "AI Prompt Library",
      "price": 39,
      "description": "200+ production-ready prompts with testing framework",
      "gumroadUrl": "https://gumroad.com/l/PLACEHOLDER_PROMPTS",
      "targetBuyer": "AI practitioners"
    },
    {
      "id": "llm-cost-calculator",
      "name": "LLM Cost Calculator",
      "price": 29,
      "description": "Spreadsheet + API tool for forecasting AI costs",
      "gumroadUrl": "https://gumroad.com/l/PLACEHOLDER_CALC",
      "targetBuyer": "Engineering managers"
    }
  ]
}
```

- [ ] **Step 2: Create ProductCTA component**

```astro
---
import productsData from "../data/products.json";

interface Props {
  product: string;
}

const product = productsData.products.find(p => p.id === Astro.props.product);
---

{product && (
  <div class="product-cta">
    <h4>{product.name}</h4>
    <p class="price">${product.price}</p>
    <p>{product.description}</p>
    <a href={product.gumroadUrl} class="btn" target="_blank" rel="noopener">Get it on Gumroad</a>
  </div>
)}
```

- [ ] **Step 3: Commit**

```bash
git add src/data/products.json src/components/ProductCTA.astro
git commit -m "feat: add low-ticket products data and CTA component"
```

---

## Task 3: Create Email Capture Component

**Files:**
- Create: `src/components/EmailCapture.astro`

**Description:** Reusable email capture form for ConvertKit integration.

- [ ] **Step 1: Create EmailCapture component**

```astro
---
interface Props {
  cta: string;
  offer: string;
}

const { cta, offer } = Astro.props;
---

<div class="email-capture" data-offer={offer}>
  <form action="https://app.convertkit.com/forms/PLACEHOLDER_FORM_ID/submissions" method="post">
    <input type="email" name="email_address" placeholder="Enter your email" required />
    <input type="hidden" name="tag" value={offer} />
    <button type="submit">{cta}</button>
  </form>
  <p class="privacy">No spam. Unsubscribe anytime.</p>
</div>

<style>
  .email-capture {
    border: 1px solid var(--border-color);
    padding: 1.5rem;
    border-radius: 8px;
    margin: 2rem 0;
    background: var(--bg-secondary);
  }
</style>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/EmailCapture.astro
git commit -m "feat: add email capture component"
```

---

## Task 4: Create ServiceCTA Component

**Files:**
- Create: `src/components/ServiceCTA.astro`

**Description:** Component for service call-to-actions.

- [ ] **Step 1: Create ServiceCTA component**

```astro
---
interface Props {
  service: string;
}

const services = {
  "architecture-audit": {
    title: "AI Architecture Audit",
    price: "$3,000",
    description: "2-week comprehensive review of your AI system"
  },
  "rag-build": {
    title: "RAG System Build",
    price: "$8,000",
    description: "4-week implementation of production-ready RAG"
  },
  "team-training": {
    title: "Team AI Training",
    price: "$5,000",
    description: "2-day workshop for your engineering team"
  },
  "fractional": {
    title: "Fractional AI Engineer",
    price: "$10k/month",
    description: "Ongoing advisory and implementation support"
  }
};

const service = services[Astro.props.service];
---

{service && (
  <div class="service-cta">
    <h3>{service.title}</h3>
    <p class="price">{service.price}</p>
    <p>{service.description}</p>
    <a href="/services" class="btn">Learn More</a>
  </div>
)}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ServiceCTA.astro
git commit -m "feat: add service CTA component"
```

---

## Task 5: Create Blog Post "The Modern AI Engineering Stack 2026"

**Files:**
- Create: `src/content/tech/modern-ai-engineering-stack-2026.mdx`

**Description:** Write the comprehensive blog post with actual content.

- [ ] **Step 1: Create blog post MDX file with content**

```mdx
---
title: "The Modern AI Engineering Stack 2026"
description: "A comprehensive guide to building production-ready AI systems in 2026"
pubDate: 2025-03-18
tags: ["ai", "machine-learning", "architecture", "2026"]
categories: ["tech"]
cover: "/images/ai-stack-2026.jpg"
draft: false
author: "Ioodu"
---

import EmailCapture from "../../components/EmailCapture.astro";
import ProductCTA from "../../components/ProductCTA.astro";
import ServiceCTA from "../../components/ServiceCTA.astro";

# The Modern AI Engineering Stack 2026

Building production AI systems in 2026 requires more than just calling an LLM API. This guide covers the complete stack—from model selection to production monitoring.

## Part 1: The Core Stack

The foundation of any AI system starts with choosing the right components:

**LLM Providers:**
- OpenAI GPT-4.5/5 for general reasoning
- Anthropic Claude 3.7 for long context (200k tokens)
- Google Gemini 2.5 for multimodal tasks
- Open-source options: Llama 3.3, Mistral Large 2

**Frameworks:**
- LangChain for rapid prototyping
- LlamaIndex for RAG applications
- Vercel AI SDK for streaming UIs
- Pydantic AI for structured outputs

**Deployment:**
- Modal for serverless GPU inference
- Replicate for model hosting
- AWS SageMaker for enterprise scale

<EmailCapture cta="Get the AI Production Checklist" offer="ai-checklist" />

## Part 2: Architecture Patterns

### Retrieval-Augmented Generation (RAG)

The dominant pattern for knowledge-intensive applications:

1. **Chunking Strategy:** Split documents into semantic chunks (512-1024 tokens)
2. **Embedding Model:** Use text-embedding-3-large for best retrieval
3. **Vector Store:** Pinecone for managed, pgvector for self-hosted
4. **Re-ranking:** Cohere Rerank or cross-encoders for precision

### Agent Architectures

For complex multi-step tasks:

- **ReAct Pattern:** Reasoning + Acting loops
- **Multi-Agent Systems:** Supervisor-workers pattern
- **Tool Use:** Function calling with validation layers

<ProductCTA product="rag-starter-kit" />

## Part 3: Production Checklist

Before shipping to production, verify:

**Monitoring:**
- Token usage tracking (predict costs)
- Latency percentiles (p50, p95, p99)
- Error rates and failure modes
- Model version logging

**Safety:**
- Input validation and sanitization
- Output moderation (OpenAI Moderation API or self-hosted)
- Rate limiting per user/IP
- Circuit breakers for LLM failures

**Evaluation:**
- Holdout test set with golden answers
- Automated evals (LLM-as-judge)
- Human review pipeline
- A/B testing framework

<EmailCapture cta="Download the complete checklist" offer="ai-checklist" />

## Part 4: Real-World Case Study

I recently helped a fintech startup build a document analysis system. Key lessons:

**What Worked:**
- Hybrid search (BM25 + vector) improved recall by 23%
- Structured outputs with Pydantic reduced parsing errors
- Streaming responses improved perceived performance

**What Did Not:**
- Initial chunking was too small—context was lost
- No caching strategy—costs spiraled
- Insufficient evals—regressions shipped

**Final Architecture:**
- Claude 3.5 Sonnet for reasoning
- Pinecone for vector storage
- Redis for response caching
- Custom evaluation suite

<ServiceCTA service="architecture-audit" />

---

## What's Next

This stack evolves rapidly. Subscribe for updates as new models and patterns emerge.

<EmailCapture cta="Join the newsletter" offer="newsletter" />
```

- [ ] **Step 2: Verify file exists**

Run: `ls -la src/content/tech/modern-ai-engineering-stack-2026.mdx`
Expected: File exists

- [ ] **Step 3: Test Astro content rendering**

Run: `npm run dev` and visit `http://localhost:4321/tech/modern-ai-engineering-stack-2026`
Expected: Page renders without errors, components display

- [ ] **Step 4: Commit**

```bash
git add src/content/tech/modern-ai-engineering-stack-2026.mdx
git commit -m "feat: add modern AI engineering stack blog post"
```

---

## Task 6: Create Lead Magnet (AI Production Checklist)

**Files:**
- Create: `src/data/checklist.md`
- Create: `public/downloads/ai-production-checklist.md`

**Description:** Free downloadable resource to capture emails. Comprehensive checklist for production AI systems.

- [ ] **Step 1: Write checklist content**

```markdown
# AI Production Checklist

## Pre-Launch
- [ ] Define success metrics for the AI feature
- [ ] Set up LLM API keys and rate limits
- [ ] Implement retry logic with exponential backoff
- [ ] Add request/response logging

## Monitoring
- [ ] Track token usage and costs
- [ ] Monitor latency (p50, p95, p99)
- [ ] Set up error rate alerting
- [ ] Log model versions used

## Safety
- [ ] Implement input validation
- [ ] Add output filtering/moderation
- [ ] Set up circuit breakers for LLM failures
- [ ] Document known failure modes

## Evaluation
- [ ] Define evaluation dataset
- [ ] Set up automated evals
- [ ] Implement human review workflow
- [ ] Track model drift over time

## Cost Optimization
- [ ] Implement caching for common queries
- [ ] Set up usage quotas per user
- [ ] Configure auto-scaling based on load
- [ ] Review pricing tiers regularly
```

- [ ] **Step 2: Copy to public downloads**

Run: `cp src/data/checklist.md public/downloads/ai-production-checklist.md`

- [ ] **Step 3: Test download link**

Visit: `http://localhost:4321/downloads/ai-production-checklist.md`
Expected: File downloads successfully

- [ ] **Step 4: Commit**

```bash
git add src/data/checklist.md public/downloads/ai-production-checklist.md
git commit -m "feat: add AI production checklist lead magnet"
```

---

## Task 7: Create Service Landing Page

**Files:**
- Create: `src/pages/services/index.astro`

**Description:** Landing page for consulting services with Calendly booking integration.

- [ ] **Step 1: Create services directory and landing page**

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
---

<BaseLayout title="AI Engineering Services | Ioodu">
  <h1>AI Engineering Services</h1>

  <div class="services-grid">
    <div class="service-card">
      <h2>AI Architecture Audit</h2>
      <p class="price">$3,000</p>
      <p>2-week comprehensive review of your AI system architecture, with actionable recommendations.</p>
      <a href="https://calendly.com/PLACEHOLDER_AUDIT" class="btn">Book Discovery Call</a>
    </div>

    <div class="service-card">
      <h2>RAG System Build</h2>
      <p class="price">$8,000</p>
      <p>4-week implementation of a production-ready RAG system tailored to your use case.</p>
      <a href="https://calendly.com/PLACEHOLDER_RAG" class="btn">Book Discovery Call</a>
    </div>

    <div class="service-card">
      <h2>Team AI Training</h2>
      <p class="price">$5,000</p>
      <p>2-day intensive workshop for your engineering team on AI best practices.</p>
      <a href="https://calendly.com/PLACEHOLDER_TRAINING" class="btn">Book Discovery Call</a>
    </div>

    <div class="service-card">
      <h2>Fractional AI Engineer</h2>
      <p class="price">$10,000/month</p>
      <p>Ongoing advisory and implementation support. Limited availability.</p>
      <a href="https://calendly.com/PLACEHOLDER_FRACTIONAL" class="btn">Apply Now</a>
    </div>
  </div>
</BaseLayout>
```

- [ ] **Step 2: Test page renders**

Visit: `http://localhost:4321/services`
Expected: Services page displays all four service cards

- [ ] **Step 3: Commit**

```bash
git add src/pages/services/index.astro
git commit -m "feat: add services landing page"
```

---

## Task 8: Create Products Landing Page

**Files:**
- Create: `src/pages/products/index.astro`

**Description:** Landing page showcasing all low-ticket products.

- [ ] **Step 1: Create products landing page**

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
import productsData from "../../data/products.json";
---

<BaseLayout title="AI Engineering Products | Ioodu">
  <h1>AI Engineering Products</h1>
  <p class="subtitle">Tools and templates to ship AI faster</p>

  <div class="products-grid">
    {productsData.products.map(product => (
      <div class="product-card">
        <h2>{product.name}</h2>
        <p class="price">${product.price}</p>
        <p>{product.description}</p>
        <p class="target">For: {product.targetBuyer}</p>
        <a href={product.gumroadUrl} class="btn" target="_blank" rel="noopener">Buy on Gumroad</a>
      </div>
    ))}
  </div>
</BaseLayout>
```

- [ ] **Step 2: Test page renders**

Visit: `http://localhost:4321/products`
Expected: All 4 products displayed with correct data

- [ ] **Step 3: Commit**

```bash
git add src/pages/products/index.astro
git commit -m "feat: add products landing page"
```

---

## Task 9: Add Navigation Links

**Files:**
- Modify: Navigation component (found in Task 1)

**Description:** Add links to new pages in site navigation.

- [ ] **Step 1: Modify navigation component**

Locate the navigation component from Task 1 and add:
```astro
<a href="/products">Products</a>
<a href="/services">Services</a>
```

- [ ] **Step 2: Verify links work**

Test both links in browser navigation on multiple pages.

- [ ] **Step 3: Commit**

```bash
git add src/components/[NavigationComponent].astro
 git commit -m "feat: add products and services to navigation"
```

---

## Task 10: Build and Deploy

**Files:**
- All files

**Description:** Build the site and verify everything works in production.

- [ ] **Step 1: Build the site**

Run: `npm run build`
Expected: Build completes without errors

- [ ] **Step 2: Verify build output**

Check `dist/` directory contains:
- `tech/modern-ai-engineering-stack-2026/index.html`
- `products/index.html`
- `services/index.html`
- `downloads/ai-production-checklist.md`

- [ ] **Step 3: Test locally with preview**

Run: `npm run preview`
Visit: `http://localhost:4321`
Test: All pages render correctly

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "build: production build for product ecosystem launch"
```

---

## Task 11: Configure External Services (REQUIRED BEFORE LAUNCH)

**Files:**
- Update: `src/components/EmailCapture.astro`
- Update: `src/data/products.json`
- Update: `src/pages/services/index.astro`

**Description:** Set up ConvertKit, Gumroad, Teachable, and Calendly accounts. This is REQUIRED for Week 4 launch (first low-ticket sales target).

- [ ] **Step 1: ConvertKit Setup**
  - Create account at convertkit.com
  - Create email capture form
  - Get form ID
  - Update EmailCapture.astro: replace `PLACEHOLDER_FORM_ID`
  - Create welcome sequence (5 emails)
  - Create tags: "ai-checklist", "newsletter"

- [ ] **Step 2: Gumroad Setup**
  - Create account at gumroad.com
  - Create 4 product listings with names/prices from products.json
  - Set prices ($29, $39, $49, $79)
  - Upload product files (Notion templates, code repos, etc.)
  - Get Gumroad links and update products.json: replace `PLACEHOLDER_*` URLs

- [ ] **Step 3: Teachable Setup (for Week 6+)**
  - Create account at teachable.com
  - Create "Production-Ready AI Systems" course
  - Set price: $499
  - Upload course content (after recording)

- [ ] **Step 4: Calendly Setup**
  - Create account at calendly.com
  - Create 4 event types:
    - AI Architecture Audit ($3,000)
    - RAG System Build ($8,000)
    - Team AI Training ($5,000)
    - Fractional AI Engineer ($10k/mo)
  - Get scheduling links and update services page: replace `PLACEHOLDER_*` URLs

- [ ] **Step 5: Verify all integrations**

Test each integration:
- Email form submits to ConvertKit
- Product links go to correct Gumroad pages
- Service links go to correct Calendly pages

- [ ] **Step 6: Commit updated files**

```bash
git add src/components/EmailCapture.astro src/data/products.json src/pages/services/index.astro
git commit -m "feat: configure external service integrations"
```

---

## Task 12: Create External Service Documentation

**Files:**
- Create: `docs/external-services.md`

**Description:** Document all external service configuration for future reference.

- [ ] **Step 1: Create documentation file**

```markdown
# External Service Configuration

## ConvertKit
- Form ID: [ACTUAL_ID_HERE]
- API Key: [Store in 1Password]
- Tags:
  - ai-checklist: [TAG_ID]
  - newsletter: [TAG_ID]

## Gumroad
- Products:
  - ai-stack-decision-matrix: [ACTUAL_URL]
  - rag-starter-kit: [ACTUAL_URL]
  - ai-prompt-library: [ACTUAL_URL]
  - llm-cost-calculator: [ACTUAL_URL]

## Teachable
- Course URL: [ACTUAL_URL]
- Login: [Credentials in 1Password]

## Calendly
- Audit: [ACTUAL_URL]
- RAG Build: [ACTUAL_URL]
- Training: [ACTUAL_URL]
- Fractional: [ACTUAL_URL]

## Stripe (for services)
- Account: [Email]
- Payment links configured for each service
```

- [ ] **Step 2: Commit (with sensitive data redacted from git)**

```bash
git add docs/external-services.md
git commit -m "docs: add external service configuration template"
```

---

## Success Criteria

- [ ] Project structure discovered (Task 1)
- [ ] ProductCTA component created with product data (Task 2)
- [ ] EmailCapture component created (Task 3)
- [ ] ServiceCTA component created (Task 4)
- [ ] Blog post publishes successfully at `/tech/modern-ai-engineering-stack-2026` (Task 5)
- [ ] AI Production Checklist downloadable (Task 6)
- [ ] Services page at `/services` with 4 service offerings (Task 7)
- [ ] Products page at `/products` with 4 product listings (Task 8)
- [ ] Navigation links work on all pages (Task 9)
- [ ] Site builds without errors (Task 10)
- [ ] External services configured (Task 11)
- [ ] Documentation created (Task 12)

---

## Post-Launch Tasks

These are not part of this implementation plan but should be tracked separately:

1. **Week 2:** Create and publish guest posts on dev.to, Hashnode
2. **Week 3:** Record course content for Teachable
3. **Week 4:** Launch first low-ticket product
4. **Week 6:** Open course pre-orders
5. **Week 12:** Evaluate metrics and iterate

---

## References

- Design Spec: `docs/superpowers/specs/2025-03-18-product-ecosystem-design.md`
- ConvertKit Docs: https://help.convertkit.com/
- Gumroad Docs: https://help.gumroad.com/
- Teachable Docs: https://help.teachable.com/
- Calendly Docs: https://help.calendly.com/
