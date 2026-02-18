const commitlintAiConfig = {
  maxRetries: 3,
  mode: 'auto',
  model: 'gemini-2.5-flash',
  provider: 'google',
  ticket: {
    missingBranchLintBehavior: 'fallback',
    normalization: 'preserve',
    pattern: '[a-z]{2,}-[0-9]+',
    patternFlags: 'i',
    source: 'auto',
  },
  validationMaxRetries: 3,
  instructions:
    'Use the imperative mood (present tense) for the subject line. Focus the subject on the "what" and "why" (business value). In the commit body, explain the "how" (technical implementation details).',
}

export default commitlintAiConfig
