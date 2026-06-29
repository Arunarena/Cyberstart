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

const accessibleLessons = {
  accounts: {
    readingTitle: 'Text lesson: account security',
    reading: [
      'Think of an online account as the front door to your digital life. If someone gets into your email, they can often reset passwords for many other services. That is why email, banking, school, and cloud accounts should be protected first.',
      'A strong password should be long, unique, and not reused. Reusing the same password is risky because one leaked website can put many accounts in danger. A password manager helps because it can create and remember different passwords for every account.',
      'Multi-factor authentication, or MFA, adds another proof after the password. Even if a password is stolen, the attacker may still be blocked because they do not have the second factor.',
      'Phishing is when someone tricks you into giving access away. The safe habit is simple: do not follow urgent login links from messages. Open the official app or type the website address yourself.'
    ],
    pictureTitle: 'Picture explanation',
    picture: ['The person icon means your identity.', 'The lock means MFA protecting the login.', 'The large box means all the services that become safer when the account is protected.'],
    keyTerms: ['Password manager', 'MFA', 'Recovery codes', 'Phishing']
  },
  data: {
    readingTitle: 'Text lesson: data security',
    reading: [
      'Data is anything a system stores or sends: names, photos, messages, files, passwords, logs, and settings. Security asks three questions: should this be secret, should this stay unchanged, and should this remain available?',
      'Encryption helps keep data secret. It turns readable information into protected information that needs the right key to read.',
      'Hashing helps check whether data changed. A hash is like a fingerprint for a file or message. If the data changes, the fingerprint changes too.',
      'Backups protect availability. If a device breaks, malware deletes files, or a mistake happens, a backup can help you recover.'
    ],
    pictureTitle: 'Picture explanation',
    picture: ['The vault means sensitive data needs protection.', 'The clock-like center means checking whether data stayed the same over time.', 'The side lines mean copies and backups.'],
    keyTerms: ['Encryption', 'Hashing', 'Backup', 'Sensitive data']
  },
  systems: {
    readingTitle: 'Text lesson: system security',
    reading: [
      'A system can be a laptop, phone, server, router, or cloud machine. Defending systems means keeping them updated, reducing risky permissions, watching for strange behavior, and being ready to recover.',
      'Updates matter because attackers often use known bugs. When software is patched, many easy attack paths disappear.',
      'Least privilege means users and apps should only get the access they need. If something goes wrong, limited access limits the damage.',
      'Logs are records of what happened. A defender reads logs to find patterns, such as repeated failed logins followed by a success.'
    ],
    pictureTitle: 'Picture explanation',
    picture: ['The screen is the system being monitored.', 'The heartbeat line represents logs and activity.', 'The browser dots remind you that systems have many moving parts.'],
    keyTerms: ['Patching', 'Least privilege', 'Logs', 'Backup recovery']
  },
  software: {
    readingTitle: 'Text lesson: software security',
    reading: [
      'Software security is about writing and configuring apps so mistakes do not become dangerous. A safe app assumes user input can be messy, unexpected, or hostile.',
      'Input validation means checking that data matches what the app expects. For example, a username field should not accept database commands.',
      'Parameterized queries help stop SQL injection because the database treats user input as data, not as part of the command.',
      'Secure software also depends on updates. Old libraries can contain known vulnerabilities, so developers must patch dependencies.'
    ],
    pictureTitle: 'Picture explanation',
    picture: ['The code window represents an application.', 'The angle brackets mean code and user input.', 'The horizontal lines mean rules that check and organize the app behavior.'],
    keyTerms: ['Input validation', 'SQL injection', 'Parameterized queries', 'Dependencies']
  },
  privacy: {
    readingTitle: 'Text lesson: privacy',
    reading: [
      'Privacy is about control over personal information. It is not only about secrets; it is about deciding what is collected, why it is collected, and who can use it.',
      'Apps often request permissions such as location, contacts, camera, and notifications. A defender asks whether the permission matches the app purpose.',
      'Data minimization means collecting and sharing less. If an app does not need a piece of information, it should not ask for it.',
      'Metadata can reveal context even when the main content seems harmless. A photo, message, or file can include time, location, device, or author details.'
    ],
    pictureTitle: 'Picture explanation',
    picture: ['The shield means protecting personal information.', 'The circle means your private identity.', 'The cross line means limiting unnecessary access.'],
    keyTerms: ['Permissions', 'Data minimization', 'Metadata', 'Tracking']
  },
  project: {
    readingTitle: 'Text lesson: final project',
    reading: [
      'A beginner cybersecurity project should show how you think. You do not need to hack anything. You need to observe a safe example, identify risks, explain evidence, and recommend fixes.',
      'A good report has four parts: the asset, the risk, the evidence, and the fix. This structure helps other people understand why the issue matters.',
      'Your project can be a personal security checklist, a phishing-analysis report, a password audit, a privacy settings review, or a small secure-coding demo.',
      'The best portfolio work is honest and legal. Use screenshots, notes, and sample data from systems you own or labs designed for practice.'
    ],
    pictureTitle: 'Picture explanation',
    picture: ['The checklist means turning learning into proof.', 'The check marks mean completed safe tasks.', 'The side lines mean your written evidence and recommendations.'],
    keyTerms: ['Risk', 'Evidence', 'Fix', 'Report']
  }
};

const id = document.body.dataset.chapter;
const lesson = lessonData[id] || lessonData.accounts;
const accessible = accessibleLessons[id] || accessibleLessons.accounts;
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
        <a class="button read-link" href="#read">Read instead <span>↓</span></a>
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
  <section class="accessible-study" id="read">
    <div class="section-heading">
      <div><span class="kicker">CAN'T WATCH?</span><h2>Read the chapter instead.</h2></div>
      <p>This is an original text summary of the video idea, with picture notes for visual learners. It is not a word-for-word transcript.</p>
    </div>
    <div class="study-tabs" role="tablist" aria-label="Accessible lesson options">
      <button class="active" data-study-tab="text" role="tab" aria-selected="true">Text notes</button>
      <button data-study-tab="picture" role="tab" aria-selected="false">Picture explanation</button>
      <button data-study-tab="terms" role="tab" aria-selected="false">Key terms</button>
    </div>
    <div class="study-panel active" data-study-panel="text">
      <h3>${accessible.readingTitle}</h3>
      ${accessible.reading.map(paragraph => `<p>${paragraph}</p>`).join('')}
    </div>
    <div class="study-panel" data-study-panel="picture">
      <div class="picture-explain">
        <div class="lesson-picture small-picture">${iconSvg[lesson.picture]}</div>
        <div>
          <h3>${accessible.pictureTitle}</h3>
          <ul>${accessible.picture.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
      </div>
    </div>
    <div class="study-panel" data-study-panel="terms">
      <h3>Words to remember</h3>
      <div class="term-cloud">${accessible.keyTerms.map(term => `<span>${term}</span>`).join('')}</div>
      <p class="term-note">Tip: read these out loud, then explain each one in your own words. If you can explain it simply, you are learning it.</p>
    </div>
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

document.querySelector('.study-tabs').addEventListener('click', event => {
  const button = event.target.closest('[data-study-tab]');
  if (!button) return;
  const selected = button.dataset.studyTab;
  document.querySelectorAll('[data-study-tab]').forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  document.querySelectorAll('[data-study-panel]').forEach(panel => {
    panel.classList.toggle('active', panel.dataset.studyPanel === selected);
  });
});
