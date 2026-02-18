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
  instructions: `Your task is to write a commit message that follows the Conventional Commits specification WITH EMOJIS.

    STRICT FORMAT: <type>: <emoji> <subject>

    1. Use standard types: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert.
    2. EMOJI: You MUST include a relevant Gitmoji (https://gitmoji.dev) immediately after the colon and space. Select the emoji based on the specific action, not just the commit type.
    3. SUBJECT: Use the imperative mood (present tense). Focus on the "what" and "why" (business value). Keep it concise and lowercase.
    4. BODY (optional): Explain the "how" (technical implementation details).

    Example: "feat: ✨ add user authentication via OAuth"`,
}

export default commitlintAiConfig
