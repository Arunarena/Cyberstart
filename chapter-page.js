const lessonData = {
  accounts: {
    number: '01',
    title: 'Securing Accounts',
    subtitle: 'Protect the front door: passwords, MFA, phishing, and recovery.',
    picture: 'account',
    video: 'fJYdAN4Vh5c',
    bigIdea: 'Attackers love accounts because one login can open email, files, banking, and cloud storage. Your defense is layered: unique password, MFA, recovery codes, and calm verification.',
    code: ['password = unique + long', 'mfa = something_you_have', 'recovery = saved_codes', 'phishing = pause + verify'],
    steps: ['Use a password manager for unique passwords.', 'Turn on MFA for email first.', 'Save recovery codes offline.', 'Never enter a password from an email link.'],
    quiz: {
      question: 'A message says your account closes in 10 minutes. What is the safest move?',
      answers: ['Click fast before it expires', 'Open the official app or typed website yourself', 'Reply with your password'],
      correct: 1,
      explain: 'Exactly. You do not let urgency choose the path. Go through a trusted route.'
    }
  },
  data: {
    number: '02',
    title: 'Securing Data',
    subtitle: 'Protect information with encryption, hashing, backups, and classification.',
    picture: 'data',
    video: 'X3DVaMnl5n8',
    bigIdea: 'Data security means keeping information secret when needed, unchanged when accuracy matters, and available when people need it.',
    code: ['confidentiality -> encryption', 'integrity -> hashes', 'availability -> backups', 'classification -> know what matters'],
    steps: ['Identify sensitive files.', 'Back up important data.', 'Use encryption for private information.', 'Verify important downloads with checksums when available.'],
    quiz: {
      question: 'A hash is mainly useful for checking what?',
      answers: ['Whether data changed', 'Whether a password is pretty', 'Whether Wi‑Fi is fast'],
      correct: 0,
      explain: 'Right. Hashes help detect changes by producing a fingerprint of data.'
    }
  },
  systems: {
    number: '03',
    title: 'Securing Systems',
    subtitle: 'Keep devices healthy with updates, permissions, monitoring, and logs.',
    picture: 'systems',
    video: '9phdZjF8qOk',
    bigIdea: 'A secure system is not magic. It is patched, configured carefully, watched through logs, and recovered with backups when something goes wrong.',
    code: ['update_status = current', 'user_role = least_privilege', 'logs = evidence', 'backup = recovery_plan'],
    steps: ['Enable automatic updates.', 'Remove software you do not use.', 'Use a standard account for daily work.', 'Read login logs for repeated failures.'],
    quiz: {
      question: 'Three failed logins, then success, then MFA changed. What should you suspect?',
      answers: ['Normal typing mistake', 'Possible account takeover', 'A faster computer'],
      correct: 1,
      explain: 'Yes. That pattern deserves password reset, session revocation, MFA review, and user contact.'
    }
  },
  software: {
    number: '04',
    title: 'Securing Software',
    subtitle: 'Think like a secure coder: validate input, patch dependencies, and limit damage.',
    picture: 'software',
    video: '5rsKrTh3fAo',
    bigIdea: 'Software gets risky when it trusts input too much. Secure code checks what is allowed, stores secrets safely, and uses safer patterns like parameterized queries.',
    code: ['input = untrusted', 'validate(allowed_pattern)', 'query = parameterized', 'dependencies = patched'],
    steps: ['Validate input on the server.', 'Escape output before showing it in a page.', 'Never concatenate raw input into SQL.', 'Keep libraries updated.'],
    quiz: {
      question: "Why is `maya' OR '1'='1` suspicious input?",
      answers: ['It looks like SQL logic', 'It is too short', 'It has no emoji'],
      correct: 0,
      explain: 'Correct. It looks like an attempt to change a database query.'
    }
  },
  privacy: {
    number: '05',
    title: 'Preserving Privacy',
    subtitle: 'Reduce unnecessary data sharing, tracking, and permissions.',
    picture: 'privacy',
    video: '6IeqJtudKnk',
    bigIdea: 'Privacy is not hiding from everything. It is choosing what data is collected, who can use it, and how long it should exist.',
    code: ['collect_less()', 'share_intentionally()', 'review_permissions()', 'delete_when_done()'],
    steps: ['Review phone app permissions.', 'Turn off precise location when not needed.', 'Use separate emails for important accounts.', 'Think before posting metadata-rich content.'],
    quiz: {
      question: 'A flashlight app asks for contacts and precise location. What should you do?',
      answers: ['Allow everything', 'Review or deny unnecessary permissions', 'Give it your password too'],
      correct: 1,
      explain: 'Good. Permissions should match the app purpose.'
    }
  },
  project: {
    number: '06',
    title: 'Final Defender Project',
    subtitle: 'Build a small portfolio project that proves you understand the basics.',
    picture: 'project',
    video: '9HOpanT0GRs',
    bigIdea: 'Your first cybersecurity project should be simple and clear: identify risks, show evidence, recommend fixes, and explain the tradeoffs.',
    code: ['risk = what_can_go_wrong', 'evidence = what_you_observed', 'fix = safer_next_step', 'report = clear + honest'],
    steps: ['Audit one personal account.', 'Review one app permission.', 'Write a one-page security checklist.', 'Add screenshots or notes as proof of learning.'],
    quiz: {
      question: 'What makes a beginner security project strong?',
      answers: ['Clear evidence and safe recommendations', 'Attacking random websites', 'Using scary words'],
      correct: 0,
      explain: 'Exactly. Real defender work is clear, safe, and useful.'
    }
  }
};

const iconSvg = {
  account: `<svg viewBox="0 0 260 180" role="img" aria-label="Account protection diagram"><rect x="28" y="42" width="204" height="110" rx="22"/><circle cx="92" cy="88" r="24"/><path d="M55 134c12-26 62-26 74 0"/><rect x="146" y="74" width="48" height="42" rx="8"/><path d="M158 74v-13a12 12 0 0 1 24 0v13"/></svg>`,
  data: `<svg viewBox="0 0 260 180" role="img" aria-label="Data vault diagram"><rect x="48" y="50" width="164" height="96" rx="16"/><path d="M80 50V34h100v16"/><circle cx="130" cy="98" r="24"/><path d="M130 87v18l13 8"/><path d="M65 70h38M65 122h38M157 70h38M157 122h38"/></svg>`,
  systems: `<svg viewBox="0 0 260 180" role="img" aria-label="System monitoring diagram"><rect x="32" y="38" width="196" height="116" rx="14"/><path d="M32 72h196"/><circle cx="58" cy="55" r="5"/><circle cx="77" cy="55" r="5"/><path d="M58 119h30l18-35 32 54 18-31h45"/></svg>`,
  software: `<svg viewBox="0 0 260 180" role="img" aria-label="Secure code diagram"><rect x="30" y="35" width="200" height="120" rx="16"/><path d="M64 72h72M64 98h132M64 124h92"/><path d="M176 75l20 20-20 20M84 75 64 95l20 20"/></svg>`,
  privacy: `<svg viewBox="0 0 260 180" role="img" aria-label="Privacy shield diagram"><path d="M130 24l82 30v53c0 48-38 74-82 88-44-14-82-40-82-88V54z"/><circle cx="130" cy="93" r="28"/><path d="M130 121v28M102 93h56"/></svg>`,
  project: `<svg viewBox="0 0 260 180" role="img" aria-label="Project checklist diagram"><rect x="52" y="28" width="156" height="130" rx="14"/><path d="M82 70l12 12 25-28M82 111l12 12 25-28M138 76h42M138 117h42"/></svg>`
};

const id = document.body.dataset.chapter;
const lesson = lessonData[id] || lessonData.accounts;
document.title = `${lesson.title} — CyberStart Academy`;

document.querySelector('#lessonApp').innerHTML = `
  <header class="lesson-topbar">
    <a class="brand" href="../index.html"><span class="brand-mark">C<span>S</span></span>CyberStart Academy</a>
    <a class="button button-small" href="../index.html#chapters">All chapters</a>
  </header>
  <section class="chapter-hero">
    <div>
      <span class="kicker">VISUAL CHAPTER ${lesson.number}</span>
      <h1>${lesson.title}</h1>
      <p>${lesson.subtitle}</p>
      <div class="hero-actions">
        <a class="button" href="#watch">Watch video <span>↓</span></a>
        <a class="text-link" href="#practice">Try quick check <span>↓</span></a>
      </div>
    </div>
    <div class="lesson-picture">${iconSvg[lesson.picture]}</div>
  </section>
  <section class="visual-classroom">
    <article class="picture-card">
      <span class="kicker">BIG IDEA</span>
      <h2>What this chapter means</h2>
      <p>${lesson.bigIdea}</p>
    </article>
    <article class="code-lesson">
      <div class="code-title"><span></span><span></span><span></span><b>defender-notes.js</b></div>
      <pre>${lesson.code.map((line, index) => `<code><em>${String(index + 1).padStart(2, '0')}</em>${line}</code>`).join('\n')}</pre>
    </article>
  </section>
  <section class="lesson-grid">
    <article>
      <span class="kicker">LEARN BY DOING</span>
      <h2>Beginner checklist</h2>
      <ol>${lesson.steps.map(step => `<li>${step}</li>`).join('')}</ol>
    </article>
    <article id="watch">
      <span class="kicker">VIDEO</span>
      <h2>Watch this chapter</h2>
      <div class="mini-video"><iframe src="https://www.youtube-nocookie.com/embed/${lesson.video}?rel=0" title="${lesson.title}" loading="lazy" allowfullscreen></iframe></div>
    </article>
  </section>
  <section class="interactive-lesson" id="practice">
    <span class="kicker">QUICK CHECK</span>
    <h2>${lesson.quiz.question}</h2>
    <div class="choice-grid">${lesson.quiz.answers.map((answer, index) => `<button data-answer="${index}"><span>${String.fromCharCode(65 + index)}</span>${answer}</button>`).join('')}</div>
    <p id="lessonFeedback" aria-live="polite"></p>
  </section>
  <footer class="lesson-footer">
    <a href="../index.html#real-labs">Open hands-on labs</a>
    <a href="../index.html#chapters">Back to chapters ↑</a>
  </footer>
`;

document.querySelector('.choice-grid').addEventListener('click', event => {
  const button = event.target.closest('[data-answer]');
  if (!button) return;
  document.querySelectorAll('[data-answer]').forEach(item => item.classList.remove('correct', 'wrong'));
  const chosen = Number(button.dataset.answer);
  const correct = chosen === lesson.quiz.correct;
  button.classList.add(correct ? 'correct' : 'wrong');
  document.querySelector('#lessonFeedback').innerHTML = correct
    ? `<strong>Nice.</strong> ${lesson.quiz.explain}`
    : `<strong>Try again.</strong> Re-read the code notes above, then choose the safest defender action.`;
});
