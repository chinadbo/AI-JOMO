# ConvertKit Email Sequence - Ready to Copy

> Copy these directly into your ConvertKit email sequence

---

## Email 1: Deliver the Lead Magnet

**Send:** Immediately after confirmation
**Subject:** Your AI Stack Decision Framework is here

**Email Content:**

```
Hi {{first_name | default: "there"}},

Thanks for signing up! Here's your AI Stack Decision Framework:

📥 DOWNLOAD THE FRAMEWORK
https://blog.ioodu.com/framework

This framework has helped me evaluate 50+ AI tools across dozens of projects. It includes:

✓ The 5-step evaluation process
✓ Tool categories and when to use each
✓ Cost comparison matrix (per 1M tokens)
✓ Build vs Buy decision tree
✓ POC checklist (don't skip this!)

---

Quick question: What's your biggest challenge when choosing AI tools right now?

Hit reply and let me know — I read every email.

Cheers,
Ioodu

P.S. If you need hands-on help evaluating or implementing AI, I offer architecture audits and implementation services. Book a free discovery call: https://calendly.com/chinadbo/30min
```

---

## Email 2: Case Study

**Send:** Day 2
**Subject:** How one team saved $40k using this framework

**Email Content:**

```
Hi {{first_name | default: "there"}},

Quick story from last month:

A Series A startup reached out. They'd spent $50k building on a proprietary AI platform that couldn't scale. The platform had:
- 2-second latency (unacceptable for their use case)
- $3k/month API costs at their volume
- No customization options

They were 6 months in and realized they hit a wall.

---

We used the framework to evaluate alternatives:

Week 1: Defined requirements (latency <500ms, batch processing acceptable)
Week 2: Scored 5 open-source options using the evaluation matrix

The winner: Self-hosted Llama 3 + vLLM

Results after migration:
- Latency: 2s → 400ms ✓
- Cost: $3k/month → $600/month GPU rental ✓
- Full control over model customization ✓

Total savings: $40k+ in the first year.

---

The difference? They skipped the POC checklist the first time around.

They rushed to "get something working" without validating:
- Latency at expected scale
- Cost projections
- Vendor lock-in risks

The framework's POC checklist would've caught this in week 2, not month 6.

---

Have you run into similar situations? What's your biggest concern when evaluating AI tools?

Hit reply — I read every response.

Cheers,
Ioodu

P.S. If you're planning an AI project and want to avoid $50k mistakes, I offer AI Architecture Audits ($3,000) — a 2-week comprehensive review. Book a free 15-min discovery: https://calendly.com/chinadbo/ai-architecture-audit-discovery
```

---

## Email 3: RAG Deep Dive

**Send:** Day 4
**Subject:** The #1 mistake when building RAG systems

**Email Content:**

```
Hi {{first_name | default: "there"}},

Most RAG implementations fail because of one thing:

Poor chunking strategy.

---

Here's what usually happens:

1. Team dumps documents into a vector DB
2. Uses generic 1000-token chunks (because the tutorial said so)
3. Gets terrible retrieval results
4. Blames the embedding model
5. Switches to a different embedding model
6. Same bad results
7. Gives up on RAG

---

The real fix: Structure-aware chunking

Different content needs different strategies:

📄 For documentation:
- Split by section headers (H1, H2, H3)
- Keep related paragraphs together
- Include section context in metadata

💻 For code:
- Split by function/class definitions
- Include imports and docstrings
- Keep related methods together

💬 For conversations:
- Keep full threads together
- Tag by topic/intent
- Include timestamp metadata

📊 For structured data:
- One row = one chunk
- Include column descriptions
- Link to parent table

---

Real example:

A team was building a code search tool. Started with 1000-token chunks.

Results: 35% precision@5 (terrible)

After switching to function-level chunking with context:

Results: 78% precision@5 ✓

Same embedding model. Same vector DB. Just better chunking.

---

I wrote a full guide on building production-ready RAG systems:
https://blog.ioodu.com/tech/modern-ai-engineering-stack-2026/

And I've packaged my production RAG implementations into the RAG Starter Kit:
https://chinadbo.gumroad.com/l/bxmxuj

It includes:
- Structure-aware chunking implementations
- Hybrid search (semantic + keyword)
- Reranking strategies
- Evaluation framework
- Cost optimization techniques

Regular price: $79

But since you're on this email list: Use code FRAMEWORK20 for 20% off

Cheers,
Ioodu

P.S. If you need a production RAG system built for you, I offer RAG System Build services ($8,000). Book a free consultation: https://calendly.com/chinadbo/30min
```

---

## Email 4: Course Soft Sell

**Send:** Day 7
**Subject:** Ready to go deeper?

**Email Content:**

```
Hi {{first_name | default: "there"}},

Over the past week, you've gotten:

✓ The AI Stack Decision Framework
✓ Real-world case study ($40k savings)
✓ RAG implementation deep dive

If you're finding this useful, you might be ready for the full course.

---

I'm building "Production-Ready AI Systems"

A comprehensive guide to shipping AI that actually works in production.

Not toy demos. Not prototype code. Production systems that handle real traffic, real edge cases, and real business requirements.

---

What's covered:

Module 1: LLM Selection & Integration
- When to use GPT-4 vs Claude vs self-hosted
- API design for LLM applications
- Error handling and fallbacks
- Cost optimization strategies

Module 2: Building Reliable RAG Systems
- Chunking strategies for different content types
- Hybrid search architectures
- Reranking and context compression
- Evaluation frameworks

Module 3: Agent Architecture Patterns
- ReAct, Plan-and-Execute, Tool use
- Handling failure modes gracefully
- State management and persistence
- Multi-agent coordination

Module 4: Evaluation & Testing
- Unit testing LLM applications
- Benchmarks and regression testing
- A/B testing strategies
- Human evaluation workflows

Module 5: Monitoring & Observability
- What to track (latency, cost, quality, errors)
- Structured logging for LLM apps
- Alerting strategies
- Dashboard design

Module 6: Safety & Guardrails
- Input/output validation
- Prompt injection protection
- Content moderation
- Rate limiting and abuse prevention

Module 7: Cost Optimization
- Token optimization techniques
- Caching strategies
- Model routing (cheap → expensive)
- Budget management

Module 8: Production Deployment
- Infrastructure choices
- Scaling patterns
- Blue-green deployments
- Rollback strategies

---

What you get:

📹 8 video modules (6+ hours total)
💻 Code repositories for each module
💬 Private Discord community access
🎥 Monthly live Q&A sessions (recorded)
📚 Lifetime updates as the field evolves

---

Pricing:

Regular: $499
Early Access: $349 (save $150)

Why early access?

I'm recording the final modules now. Early access members get:
- Immediate access to Modules 1-5
- Early access to Modules 6-8 as they're recorded
- Direct input on content (what should I cover deeper?)
- Founding member pricing (locked in for life)

---

Not sure if it's right for you?

This course is for you if:
✓ You're building AI products for production
✓ You've shipped prototypes and hit the "production wall"
✓ You want to avoid learning from $50k mistakes
✓ You prefer structured learning over piecing together docs

This course is NOT for you if:
✗ You're looking for "get rich quick with AI" schemes
✗ You want to learn ML theory (this is applied engineering)
✗ You're not writing code yet

---

Questions?

Hit reply and ask me anything about the course. I read every email.

Or book a 15-min call: https://calendly.com/chinadbo/30min

Cheers,
Ioodu

---

P.S. If you'd rather I build it for you than learn it yourself, check out my services: https://blog.ioodu.com/services

P.P.S. Early access pricing ends when the course is complete (estimated 4 weeks). After that, it's $499.
```

---

## ConvertKit Sequence Settings

### Sequence Configuration:

1. **Sequence Name:** "AI Framework Lead Magnet"
2. **Sending Schedule:**
   - Email 1: Send immediately (after confirmation)
   - Email 2: Wait 2 days
   - Email 3: Wait 2 more days (Day 4 from start)
   - Email 4: Wait 3 more days (Day 7 from start)

3. **Send Time:**
   - Recommended: 9 AM in subscriber's timezone
   - Or: 10 AM EST (catches both coasts)

4. **Exclusion Rules:**
   - Stop sequence if tagged "Customer" (bought something)
   - Stop sequence if tagged "Unengaged" (no opens in 30 days)

### Tags to Create:

1. **Lead Magnet: AI Framework** (applied to everyone in this sequence)
2. **Interest: RAG** (applied if they clicked RAG link in Email 3)
3. **Interest: Course** (applied if they clicked course link in Email 4)
4. **Customer** (applied if they purchase anything)

### Link Tracking:

Set up these links in ConvertKit to track clicks:

- `blog.ioodu.com/framework` → Tag: "Downloaded Framework"
- `chinadbo.gumroad.com/l/*` → Tag: "Interest: Products"
- `calendly.com/chinadbo/*` → Tag: "Interest: Services"
- Course waitlist link → Tag: "Interest: Course"

---

## Alternative Subject Line Tests

**Email 1 Options:**
- A: Your AI Stack Decision Framework is here
- B: [Download] AI Stack Decision Framework
- C: Here's your framework (plus a question)

**Email 2 Options:**
- A: How one team saved $40k using this framework
- B: The $50k AI mistake (and how to avoid it)
- C: Real talk: Why most AI projects fail

**Email 3 Options:**
- A: The #1 mistake when building RAG systems
- B: Why your RAG retrieval sucks (probably)
- C: Fix your chunking, fix your RAG

**Email 4 Options:**
- A: Ready to go deeper?
- B: Early access: Production-Ready AI Systems
- C: Beyond the framework: The full course

Start with A, then test B after you have 100+ subscribers.

---

## Quick Stats to Track

| Metric | Target | Action if Below |
|--------|--------|-----------------|
| Open Rate (Email 1) | 60%+ | Check subject line, spam score |
| Open Rate (Emails 2-4) | 45%+ | Check deliverability, content match |
| Click Rate | 10%+ | Improve CTA, content relevance |
| Unsubscribe Rate | <2% | Check email frequency, content value |
| Reply Rate | 2%+ | Good sign of engagement |

---

**Ready?**

Copy these into ConvertKit, set up the timing, and activate the sequence.

Questions? Hit reply to any of my emails.
