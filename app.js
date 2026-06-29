const chapters = [
  {
    icon: '01',
    tag: 'VIDEO CHAPTER 01 · SECURING ACCOUNTS',
    title: 'Securing Accounts',
    page: 'accounts.html',
    desc: 'Learn login basics, passwords, password managers, MFA, phishing, and account recovery.',
    learn: 'Most attacks begin with accounts. Your goal is to make stolen or guessed passwords less useful by using unique passwords, MFA, recovery codes, and careful verification.',
    doNow: ['Watch the Securing Accounts video.', 'Pick one important account such as email or banking.', 'Turn on MFA and save recovery codes somewhere safe.'],
    lab: 'Complete the Accounts lab.'
  },
  {
    icon: '02',
    tag: 'VIDEO CHAPTER 02 · SECURING DATA',
    title: 'Securing Data',
    page: 'data.html',
    desc: 'Understand encryption, hashing, deletion, backups, metadata, and data exposure.',
    learn: 'Data security is about protecting information at rest, in transit, and in use. Encryption protects confidentiality, hashing checks integrity, and backups protect availability.',
    doNow: ['Watch the Securing Data video.', 'Identify one file you would hate to lose.', 'Make sure it is backed up and protected.'],
    lab: 'Complete the Data lab.'
  },
  {
    icon: '03',
    tag: 'VIDEO CHAPTER 03 · SECURING SYSTEMS',
    title: 'Securing Systems',
    page: 'systems.html',
    desc: 'Learn updates, malware, permissions, devices, networks, logs, and incident signs.',
    learn: 'Systems become safer through layers: updates, least privilege, secure configuration, monitoring, and fast response when something looks wrong.',
    doNow: ['Watch the Securing Systems video.', 'Check if automatic updates are enabled.', 'Review one suspicious login pattern in the lab.'],
    lab: 'Complete the Systems lab.'
  },
  {
    icon: '04',
    tag: 'VIDEO CHAPTER 04 · SECURING SOFTWARE',
    title: 'Securing Software',
    page: 'software.html',
    desc: 'Learn bugs, input validation, SQL injection ideas, web security headers, and safe coding habits.',
    learn: 'Software security starts with assuming input can be hostile. Defenders validate input, limit permissions, escape output, patch dependencies, and log important events.',
    doNow: ['Watch the Securing Software video.', 'Learn what input validation means.', 'Test the safe validation lab.'],
    lab: 'Complete the Software lab.'
  },
  {
    icon: '05',
    tag: 'VIDEO CHAPTER 05 · PRESERVING PRIVACY',
    title: 'Preserving Privacy',
    page: 'privacy.html',
    desc: 'Learn tracking, metadata, permissions, data minimization, privacy settings, and tradeoffs.',
    learn: 'Privacy is about control over personal information. Good privacy practice reduces unnecessary collection, limits permissions, and makes sharing intentional.',
    doNow: ['Watch the Preserving Privacy video.', 'Audit one app permission on your device.', 'Remove one permission that is not needed.'],
    lab: 'Complete the Privacy lab.'
  },
  {
    icon: '06',
    tag: 'FINAL CHAPTER · BUILD YOUR PROJECT',
    title: 'Final Defender Project',
    page: 'project.html',
    desc: 'Turn the video lessons into a personal security plan and portfolio project.',
    learn: 'Your first cybersecurity project should prove you can think like a defender: identify risks, explain evidence, recommend fixes, and write clearly.',
    doNow: ['Create a one-page personal security checklist.', 'Repeat all five labs.', 'Write a short report: risk, evidence, fix, and what you learned.'],
    lab: 'Repeat all labs and explain each result in your own words.'
  }
];

const videos = [
  {id:'9HOpanT0GRs', topic:'FULL COURSE', title:'Harvard CS50’s Introduction to Cybersecurity', description:'The full course in one video. Use it if you want the whole classroom experience in one place.'},
  {id:'fJYdAN4Vh5c', topic:'VIDEO CHAPTER 01', title:'Securing Accounts', description:'Passwords, password managers, multi-factor authentication, phishing, and account recovery.'},
  {id:'X3DVaMnl5n8', topic:'VIDEO CHAPTER 02', title:'Securing Data', description:'Encryption, deletion, backups, metadata, and protecting information from exposure.'},
  {id:'9phdZjF8qOk', topic:'VIDEO CHAPTER 03', title:'Securing Systems', description:'Malware, updates, permissions, device security, and recognizing suspicious system behavior.'},
  {id:'5rsKrTh3fAo', topic:'VIDEO CHAPTER 04', title:'Securing Software', description:'Bugs, input validation, web risks, dependency hygiene, and secure coding habits.'},
  {id:'6IeqJtudKnk', topic:'VIDEO CHAPTER 05', title:'Preserving Privacy', description:'Tracking, permissions, metadata, data minimization, and practical privacy choices.'}
];

const labs = {
  accounts: {
    kicker: 'LAB 01',
    title: 'Accounts: password and phishing audit',
    intro: 'Practice the account-defense skills from the first video: spot weak passwords and phishing pressure.',
    hint: 'Look for short length, reused words, predictable substitutions, fake domains, urgency, and missing MFA.',
    html: `
      <label class="field-label" for="passwordInput">Sample password</label>
      <input class="lab-input" id="passwordInput" value="Dragon2024!" autocomplete="off">
      <button class="button lab-action" data-action="checkPassword">Audit password</button>
      <div class="result-box" id="passwordResult">Click audit to see the defender notes.</div>
      <div class="email-card">
        <p><strong>From:</strong> security-alert@paypaI-support.example</p>
        <p><strong>Subject:</strong> URGENT: Account locked in 10 minutes</p>
        <p>Confirm your password immediately at <code>http://paypaI-verify.example/login</code>.</p>
      </div>
    `
  },
  data: {
    kicker: 'LAB 02',
    title: 'Data: integrity and backup check',
    intro: 'Practice data-defense thinking: classify sensitive data, check integrity, and plan a backup.',
    hint: 'Encryption protects secrecy, hashes help detect changes, and backups protect you when data is lost.',
    html: `
      <pre class="code-sample">File: customer-list.csv
Contains: names, emails, phone numbers
Original hash: 4f2a9c
Current hash:  4f2a9c
Backup: not found</pre>
      <div class="checklist">
        <label><input type="checkbox" value="sensitive"> This contains sensitive personal data</label>
        <label><input type="checkbox" value="integrity"> The hashes match, so the sample file was not changed</label>
        <label><input type="checkbox" value="backup"> A backup is missing and should be created</label>
      </div>
      <button class="button lab-action" data-action="checkData">Check data plan</button>
      <div class="result-box" id="dataResult">Select the correct data-defense observations.</div>
    `
  },
  systems: {
    kicker: 'LAB 03',
    title: 'Systems: login log analysis',
    intro: 'Practice spotting suspicious system behavior using login logs.',
    hint: 'Repeated failures, a sudden success, and a new MFA change can suggest account takeover.',
    html: `
      <pre class="code-sample">09:12 user=maya result=fail ip=203.0.113.42
09:13 user=maya result=fail ip=203.0.113.42
09:13 user=maya result=fail ip=203.0.113.42
09:14 user=maya result=success ip=203.0.113.42
09:18 user=maya changed_mfa=true ip=203.0.113.42</pre>
      <button class="button lab-action" data-action="checkLogs">Analyze logs</button>
      <div class="result-box" id="logsResult">Click analyze to write the incident summary.</div>
    `
  },
  software: {
    kicker: 'LAB 04',
    title: 'Software: input validation',
    intro: 'Practice secure-software thinking by reviewing user input before it reaches an app.',
    hint: 'Treat input as untrusted. Validate what is allowed, reject risky patterns, and avoid building database queries from raw text.',
    html: `
      <label class="field-label" for="softwareInput">Sample username input</label>
      <input class="lab-input" id="softwareInput" value="maya' OR '1'='1" autocomplete="off">
      <button class="button lab-action" data-action="checkSoftware">Validate input</button>
      <div class="result-box" id="softwareResult">Click validate to see why this input is risky.</div>
      <pre class="code-sample">Safer idea:
Only allow expected username characters.
Use parameterized queries.
Never concatenate raw user input into SQL.</pre>
    `
  },
  privacy: {
    kicker: 'LAB 05',
    title: 'Privacy: permission audit',
    intro: 'Practice reducing unnecessary data collection and permissions.',
    hint: 'Privacy improves when apps collect less, keep data for less time, and only get permissions they truly need.',
    html: `
      <pre class="code-sample">App: Flashlight Plus
Requested permissions:
- Camera
- Contacts
- Precise location
- Notifications
Purpose: turn on phone light</pre>
      <div class="checklist">
        <label><input type="checkbox" value="location"> Precise location is unnecessary</label>
        <label><input type="checkbox" value="contacts"> Contacts are unnecessary</label>
        <label><input type="checkbox" value="camera"> Camera/light access may be expected for a flashlight app</label>
      </div>
      <button class="button lab-action" data-action="checkPrivacy">Check privacy audit</button>
      <div class="result-box" id="privacyResult">Select the permissions you would review.</div>
    `
  }
};

const chapterGrid = document.querySelector('#chapterGrid');
const dialog = document.querySelector('#chapterDialog');
const chapterContent = document.querySelector('#chapterContent');
const storageKeys = {
  chapters: 'cyberstart-video-chapters-v2',
  watched: 'cyberstart-video-watched-v2',
  labs: 'cyberstart-video-labs-v2'
};
let completed = JSON.parse(localStorage.getItem(storageKeys.chapters) || '[]');
let watchedVideos = JSON.parse(localStorage.getItem(storageKeys.watched) || '[]');
let completedLabs = JSON.parse(localStorage.getItem(storageKeys.labs) || '[]');
let activeVideo = 0;
let activeLab = 'accounts';

function renderChapters(){
  chapterGrid.innerHTML = chapters.map((chapter, index) => `
    <article class="chapter-card ${completed.includes(index) ? 'done' : ''}">
      <div class="chapter-top"><span>${chapter.icon}</span><b>${completed.includes(index) ? '✓' : ''}</b></div>
      <small>${chapter.tag}</small>
      <h3>${chapter.title}</h3>
      <p>${chapter.desc}</p>
      <div class="chapter-actions">
        <a href="pages/${chapter.page}">Open visual lesson <span>→</span></a>
        <button data-chapter="${index}">${completed.includes(index) ? 'Review notes' : 'Quick notes'}</button>
      </div>
    </article>
  `).join('');
  document.querySelector('#progressLabel').textContent = `${completed.length} of ${chapters.length} complete`;
  document.querySelector('#progressBar').style.width = `${(completed.length / chapters.length) * 100}%`;
}

function openChapter(index){
  const chapter = chapters[index];
  chapterContent.innerHTML = `
    <div class="lesson-content">
      <span class="lesson-count">${chapter.tag}</span>
      <h2>${chapter.title}</h2>
      <p>${chapter.desc}</p>
      <p class="concept"><strong>Core lesson:</strong> ${chapter.learn}</p>
      <h3>Do this now</h3>
      <ol>${chapter.doNow.map(item => `<li>${item}</li>`).join('')}</ol>
      <p><strong>Recommended lab:</strong> ${chapter.lab}</p>
      <button data-complete="${index}">${completed.includes(index) ? 'Completed ✓' : 'Mark chapter complete'}</button>
    </div>
  `;
  dialog.showModal();
}

chapterGrid.addEventListener('click', event => {
  const button = event.target.closest('[data-chapter]');
  if (button) openChapter(Number(button.dataset.chapter));
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
chapterContent.addEventListener('click', event => {
  const button = event.target.closest('[data-complete]');
  if (!button) return;
  const index = Number(button.dataset.complete);
  if (!completed.includes(index)) completed.push(index);
  localStorage.setItem(storageKeys.chapters, JSON.stringify(completed));
  renderChapters();
  button.textContent = 'Completed ✓';
});

const playlist = document.querySelector('#videoPlaylist');
function renderVideos(){
  playlist.innerHTML = videos.map((video, index) => `
    <div class="video-item ${index === activeVideo ? 'active' : ''} ${watchedVideos.includes(index) ? 'watched' : ''}">
      <button class="video-number" data-video="${index}">0${index + 1}</button>
      <button class="video-info" data-video="${index}"><small>${video.topic}</small><strong>${video.title}</strong></button>
      <span class="watched-check">${watchedVideos.includes(index) ? '✓' : ''}</span>
      <button class="mark-watched" data-watched="${index}">${watchedVideos.includes(index) ? 'Watched · undo' : 'Mark as watched'}</button>
    </div>
  `).join('');
  document.querySelector('#watchCount').textContent = `${watchedVideos.length} / ${videos.length} watched`;
}

function selectVideo(index){
  activeVideo = index;
  const video = videos[index];
  document.querySelector('#videoPlayer').src = `https://www.youtube-nocookie.com/embed/${video.id}?rel=0`;
  document.querySelector('#videoTopic').textContent = video.topic;
  document.querySelector('#videoTitle').textContent = video.title;
  document.querySelector('#videoDescription').textContent = video.description;
  document.querySelector('#youtubeLink').href = `https://www.youtube.com/watch?v=${video.id}`;
  renderVideos();
}

playlist.addEventListener('click', event => {
  const videoButton = event.target.closest('[data-video]');
  if (videoButton) return selectVideo(Number(videoButton.dataset.video));
  const watchedButton = event.target.closest('[data-watched]');
  if (!watchedButton) return;
  const index = Number(watchedButton.dataset.watched);
  watchedVideos = watchedVideos.includes(index) ? watchedVideos.filter(item => item !== index) : [...watchedVideos, index];
  localStorage.setItem(storageKeys.watched, JSON.stringify(watchedVideos));
  renderVideos();
});

function renderLab(){
  const lab = labs[activeLab];
  document.querySelector('#labKicker').textContent = lab.kicker;
  document.querySelector('#labTitle').textContent = lab.title;
  document.querySelector('#labIntro').textContent = lab.intro;
  document.querySelector('#labHint').textContent = lab.hint;
  document.querySelector('#labContent').innerHTML = lab.html;
  document.querySelector('#labScore').textContent = `${completedLabs.length} / ${Object.keys(labs).length}`;
  document.querySelectorAll('[data-lab]').forEach(button => button.classList.toggle('active', button.dataset.lab === activeLab));
}

function completeLab(name){
  if (!completedLabs.includes(name)) {
    completedLabs.push(name);
    localStorage.setItem(storageKeys.labs, JSON.stringify(completedLabs));
  }
  document.querySelector('#labScore').textContent = `${completedLabs.length} / ${Object.keys(labs).length}`;
}

document.querySelector('.lab-tabs').addEventListener('click', event => {
  const button = event.target.closest('[data-lab]');
  if (!button) return;
  activeLab = button.dataset.lab;
  renderLab();
});

document.querySelector('#labContent').addEventListener('click', event => {
  const action = event.target.closest('[data-action]')?.dataset.action;
  if (!action) return;

  if (action === 'checkPassword') {
    const value = document.querySelector('#passwordInput').value;
    const notes = [];
    if (value.length < 14) notes.push('Use at least 14 characters.');
    if (/dragon|password|admin|welcome/i.test(value)) notes.push('Avoid common words and predictable themes.');
    if (/\d{4}|123|2024|2025|2026/.test(value)) notes.push('Avoid obvious years or number patterns.');
    notes.push('Best fix: use a password manager to create a unique passphrase and enable MFA.');
    document.querySelector('#passwordResult').innerHTML = `<strong>Audit result:</strong><ul>${notes.map(note => `<li>${note}</li>`).join('')}</ul>`;
    completeLab('accounts');
  }

  if (action === 'checkData') {
    const selected = [...document.querySelectorAll('.checklist input:checked')].map(input => input.value);
    const allFound = ['sensitive', 'integrity', 'backup'].every(item => selected.includes(item));
    document.querySelector('#dataResult').innerHTML = allFound
      ? '<strong>Correct.</strong> The file contains personal data, the hashes match, and the missing backup is the biggest availability risk.'
      : '<strong>Almost.</strong> Look for three things: sensitive data, matching hashes, and the missing backup.';
    if (allFound) completeLab('data');
  }

  if (action === 'checkLogs') {
    document.querySelector('#logsResult').innerHTML = '<strong>Incident summary:</strong> The same IP had repeated failed logins, then a success, then changed MFA. Treat this as possible account takeover: reset password, revoke sessions, review MFA, and alert the user.';
    completeLab('systems');
  }

  if (action === 'checkSoftware') {
    const value = document.querySelector('#softwareInput').value;
    const risky = /('|--|;|\bor\b|\band\b|=)/i.test(value);
    document.querySelector('#softwareResult').innerHTML = risky
      ? '<strong>Risk found.</strong> This input contains SQL-like logic characters. A safer app validates allowed username characters and uses parameterized queries.'
      : '<strong>Looks cleaner.</strong> Still validate on the server and use parameterized queries, because client-side checks can be bypassed.';
    completeLab('software');
  }

  if (action === 'checkPrivacy') {
    const selected = [...document.querySelectorAll('.checklist input:checked')].map(input => input.value);
    const allFound = ['location', 'contacts', 'camera'].every(item => selected.includes(item));
    document.querySelector('#privacyResult').innerHTML = allFound
      ? '<strong>Good privacy audit.</strong> Location and contacts are unnecessary for this purpose. Camera/light access may be expected, but it still deserves review.'
      : '<strong>Keep reviewing.</strong> Ask: does the app truly need each permission for its main purpose?';
    if (allFound) completeLab('privacy');
  }
});

const terminalOutput = document.querySelector('#terminalOutput');
const commands = {
  help: ['Try: whoami, ls, cat access.log, cat headers.txt, summarize, clear', 'muted'],
  whoami: ['learner — authorized defender in a local training lab', 'success'],
  ls: ['access.log  headers.txt  notes.md  incident-template.txt', ''],
  'cat access.log': ['09:12 fail maya 203.0.113.42<br>09:13 fail maya 203.0.113.42<br>09:14 success maya 203.0.113.42<br>09:18 mfa_changed maya 203.0.113.42', ''],
  'cat headers.txt': ['Strict-Transport-Security: max-age=31536000<br>X-Frame-Options: DENY<br>Content-Security-Policy: default-src self', ''],
  summarize: ['Finding: repeated login failures followed by success and MFA change. Action: reset password, revoke sessions, verify with user.', 'success']
};

document.querySelector('#terminalForm').addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('#terminalInput');
  const command = input.value.trim().toLowerCase();
  if (!command) return;
  if (command === 'clear') {
    terminalOutput.innerHTML = '';
    input.value = '';
    return;
  }
  terminalOutput.insertAdjacentHTML('beforeend', `<p><span class="success">$</span> ${command.replaceAll('<','&lt;')}</p>`);
  const response = commands[command] || ['Command not found. Type help to see available commands.', 'warn'];
  terminalOutput.insertAdjacentHTML('beforeend', `<p class="${response[1]}">${response[0]}</p>`);
  input.value = '';
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
});

renderChapters();
renderVideos();
renderLab();
