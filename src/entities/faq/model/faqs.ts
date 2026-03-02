import type { FaqList } from './types'

export const faqs: FaqList = [
  {
    question: 'Do I need to migrate all my data at once?',
    answer:
      'No. NeoDesk is designed for incremental adoption. You can connect individual data sources one by one through our API, and the system will automatically begin synthesizing connections without disrupting your existing workflows.',
  },
  {
    question: 'How secure is the unified index?',
    answer:
      'Every piece of data is encrypted at rest using AES-256 and in transit via TLS 1.3. Organizations with strict compliances can opt for our Enterprise tier, which includes single-tenant infrastructure and BYOK (Bring Your Own Key) capabilities.',
  },
  {
    question: 'Does this replace my existing tools like Jira or Linear?',
    answer:
      'It doesn\'t replace them; it unifies their data. NeoDesk functions as a meta-layer above your specialized tools. Your engineers can stay in Linear, your sales team in Salesforce, while leadership gets a live, centralized view of the entire operation.',
  },
  {
    question: 'What is the typical setup time?',
    answer:
      'Most organizations complete their initial configuration within 48 hours. The AI requires approximately one week of observation of your data streams to establish baseline operational patterns before providing high-confidence predictive insights.',
  },
]
