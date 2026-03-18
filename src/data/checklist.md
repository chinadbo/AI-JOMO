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
