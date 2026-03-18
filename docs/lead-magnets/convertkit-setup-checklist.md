# ConvertKit 配置操作清单

> 在 ConvertKit 中完成以下配置步骤

## 步骤 1: 创建 Form (表单 ID: 23340727)

### 表单设置
1. 登录 ConvertKit → Forms → Create New Form
2. 选择 "Modal" 或 "Inline" 类型
3. 表单名称: "AI Stack Decision Framework Lead Magnet"
4. 设置表单 ID 为: `23340727`

### 表单字段
- Email Address (必填)
- First Name (可选)

### 表单文案
**标题:** Get the AI Stack Decision Framework
**副标题:** A systematic approach to choosing the right AI tools — and avoiding $50k mistakes
**按钮文字:** Get the Free Framework

### 成功页面设置
- 选择 "Redirect to a URL"
- URL: `https://blog.ioodu.com/thanks`

---

## 步骤 2: 创建 Double Opt-In 确认邮件

### 启用双重确认
1. 进入表单设置 → Confirmation
2. 开启 "Require confirmed opt-in"
3. 选择 "Send a confirmation email"

### 确认邮件内容
**发件人:** Ioodu <chinadbo@ioodu.com>
**主题:** Confirm your email for the AI Stack Decision Framework

**邮件正文:**
```
Hi {{first_name | default: "there"}},

Please click the link below to confirm your email and get instant access to the AI Stack Decision Framework:

[Confirm my email and get the framework]

This helps us keep spam out of your inbox.

Cheers,
Ioodu

P.S. If you didn't sign up, just ignore this email.
```

---

## 步骤 3: 创建 Email Sequence (邮件序列)

### 序列设置
1. ConvertKit → Automations → Sequences → Create Sequence
2. 名称: "AI Framework Lead Magnet Sequence"
3. 连接到表单 23340727

### 邮件 1: 交付 Lead Magnet
**发送时间:** Immediately after confirmation
**主题:** Your AI Stack Decision Framework is here

```
Hi {{first_name | default: "there"}},

Thanks for signing up! Here's your AI Stack Decision Framework:

📥 DOWNLOAD THE FRAMEWORK
https://blog.ioodu.com/downloads/ai-stack-decision-framework.pdf

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

### 邮件 2: 案例研究
**发送时间:** Wait 2 days
**主题:** How one team saved $40k using this framework

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

P.S. If you're planning an AI project and want to avoid $50k mistakes, I offer AI Architecture Audits ($3,000) — a 2-week comprehensive review. Book a free 15-min discovery: https://calendly.com/chinadbo/30min
```

### 邮件 3: RAG 深度解析
**发送时间:** Wait 2 more days (Day 4 from start)
**主题:** The #1 mistake when building RAG systems

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

### 邮件 4: 课程软销售
**发送时间:** Wait 3 more days (Day 7 from start)
**主题:** Ready to go deeper?

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

## 步骤 4: 创建 Tags (标签)

在 ConvertKit → Subscribers → Tags 中创建:

1. **Lead Magnet: AI Framework** - 应用到此序列的所有订阅者
2. **Interest: RAG** - 如果点击了邮件 3 中的 RAG 链接
3. **Interest: Course** - 如果点击了邮件 4 中的课程链接
4. **Customer** - 如果购买了任何产品

---

## 步骤 5: 设置 Link Trigger (链接追踪)

在 ConvertKit → Automations → Link Triggers 中设置:

| URL 模式 | 动作 |
|---------|------|
| `blog.ioodu.com/downloads/*` | 添加标签 "Downloaded Framework" |
| `chinadbo.gumroad.com/l/*` | 添加标签 "Interest: Products" |
| `calendly.com/chinadbo/*` | 添加标签 "Interest: Services" |

---

## 步骤 6: 上传 Lead Magnet 文件

1. 将生成的 PDF 上传到 ConvertKit → Forms → [你的表单] → Incentive
2. 或者上传到网站: `public/downloads/ai-stack-decision-framework.pdf`
3. 确保下载链接在邮件中可用

---

## 步骤 7: 测试完整流程

### 测试清单
- [ ] 提交表单 → 收到确认邮件
- [ ] 点击确认 → 跳转到 thanks 页面
- [ ] 确认后立即收到邮件 1
- [ ] 邮件 1 中的下载链接有效
- [ ] 2 天后收到邮件 2
- [ ] 4 天后收到邮件 3
- [ ] 7 天后收到邮件 4

### 垃圾邮件检查
- [ ] 邮件不在垃圾邮件文件夹中
- [ ] 发件人显示为 "Ioodu"
- [ ] 退订链接有效

---

## 配置完成!

你的 ConvertKit 后端现在已配置完成，可以:
- 捕获邮箱
- 发送双重确认
- 交付 Lead Magnet
- 发送培育序列
- 追踪用户行为

下一步: 任务 3 - 增强 framework.astro 页面 SEO
