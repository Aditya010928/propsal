const reasons = ['Because you make ordinary days feel a little more special.', 'Because your smile has a suspicious amount of power over me.', 'Because talking to you never feels boring.', 'Because somehow you make me want to tell you everything.', 'Because your presence makes my day better.', 'Because I love the way you make me laugh.', 'Because you are my favorite notification.', 'Because even silence with you feels comfortable.', 'Because you make my heart do unnecessary cardio.', 'Because I look forward to hearing from you.', 'Because you have become a very happy part of my life.', 'Because your little habits are ridiculously cute.', "Because you understand me in ways I don't always explain.", 'Because you make bad days feel less bad.', 'Because I can be completely myself around you.', 'Because you deserve someone who chooses you every day.', 'Because you make me smile at my phone like an idiot.', 'Because your laugh is one of my favorite sounds.', 'Because you make simple moments memorable.', "Because I like the person I am when I'm with you.", 'Because you make my world feel warmer.', 'Because you somehow make time go too fast.', 'Because I want more inside jokes with you.', 'Because I want more random conversations with you.', 'Because you make my heart feel at home.', 'Because you are cute. Yes, this is a scientific fact. 🧐', 'Because I love hearing your stories.', 'Because you make me curious about what tomorrow brings.', 'Because you make me want to plan little adventures.', 'Because I want to celebrate your wins with you.', 'Because I want to be there on the difficult days too.', 'Because you bring a little chaos and a lot of happiness.', 'Because your happiness matters to me.', 'Because you are someone I genuinely enjoy knowing.', 'Because you make me want to make more memories.', 'Because I never run out of reasons to think about you.', 'Because one conversation with you can change my whole mood.', 'Because you have a way of making things feel okay.', 'Because you are my favorite kind of distraction.', 'Because I love your energy.', 'Because you make my heart feel ridiculously soft.', 'Because I want to know all your random thoughts.', 'Because I want to hear about your day—even the boring parts.', "Because you make me laugh when I wasn't planning to.", 'Because I want to be the reason you smile sometimes.', 'Because you are worth choosing, again and again.', 'Because you make little moments feel big.', 'Because I feel lucky whenever I get to spend time with you.', 'Because you make my days brighter without even trying.', 'Because I want to collect a hundred more memories with you.', 'Because you are one of my favorite people to talk to.', "Because you make my heart say things my brain can't explain.", 'Because I love your way of seeing the world.', 'Because you make me excited about the future.', 'Because I want to be part of your happy moments.', 'Because I want to support the things you care about.', 'Because you make me feel seen.', 'Because you make me feel heard.', 'Because you make me feel appreciated.', 'Because your kindness stays with me.', 'Because you have a beautiful way of being you.', "Because I don't need a special occasion to think you're special.", 'Because you make me want to be more thoughtful.', 'Because you make random days worth remembering.', 'Because I like making you laugh.', 'Because your messages can instantly improve my mood.', 'Because you are somehow both adorable and impossible to ignore.', 'Because I want more late-night conversations.', 'Because I want more silly selfies.', 'Because I want more spontaneous plans.', "Because I want more 'remember when...' stories.", 'Because I want more days where we do absolutely nothing together.', 'Because I want to see where this little story goes.', 'Because you make my heart feel ridiculously lucky.', 'Because you are someone I want to keep discovering.', 'Because your smile deserves to be seen often.', 'Because I want to make ordinary moments special for you too.', 'Because you make me believe small things can mean a lot.', 'Because I love the comfort of talking to you.', 'Because you bring out my soft side.', 'Because you make me want to say cheesy things.', 'Because apparently I have 100 reasons and still need more.', "Because you are the plot twist I didn't know I needed.", 'Because my favorite plans somehow include you.', "Because you make 'just one more message' turn into an hour.", 'Because you are impossible not to care about.', 'Because I want to be your safe place too.', 'Because I want to cheer for you loudly.', 'Because I want to laugh with you until our stomachs hurt.', 'Because I want to make you feel as special as you are.', 'Because I want to keep choosing you.', 'Because every version of this story sounds better with you in it.', 'Because you make my heart happier than it was before.', 'Because I could keep listing reasons all night.', 'Because honestly... you already know the biggest reason.', 'Because I really, really like you. ❤️'];

let attempt = 1;
let noClicks = 0;
let reasonPool = [];
let noButtonScale = 1;

const counter = document.querySelector("#counter span");
const reason = document.querySelector("#reason");
const noBtn = document.querySelector("#noBtn");
const yesBtn = document.querySelector("#yesBtn");
const tease = document.querySelector("#tease");
const tiny = document.querySelector("#tiny");
const mainEmoji = document.querySelector("#mainEmoji");
const success = document.querySelector("#success");
const replayBtn = document.querySelector("#replayBtn");
const hearts = document.querySelector(".hearts");

const noMessages = [
  "Are you sure? 🥺",
  "That button looks suspiciously wrong. 😭",
  "Maybe your finger slipped? 👀",
  "I respectfully disagree. 😌",
  "Please reconsider, madam. 🥹",
  "The YES button is looking very lonely.",
  "NO is getting a little dramatic now. 😂",
  "I have evidence that YES is cuter.",
  "Okay... one more chance? 👉👈",
  "You're really making me work for this, huh? 😭",
  "Fine. I'll bring another reason. 💗",
  "My heart would like to appeal this decision.",
];

function refillReasons() {
  reasonPool = [...reasons].sort(() => Math.random() - 0.5);
}

function nextReason() {
  if (!reasonPool.length) refillReasons();
  reason.textContent = reasonPool.pop();
}

function updateCounter() {
  counter.textContent = Math.min(attempt, 100);
}

function createHeart() {
  const h = document.createElement("span");
  h.className = "floating-heart";
  h.textContent = ["💗", "💕", "💖", "♡", "✨"][Math.floor(Math.random() * 5)];
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = (12 + Math.random() * 18) + "px";
  h.style.animationDuration = (5 + Math.random() * 6) + "s";
  hearts.appendChild(h);
  setTimeout(() => h.remove(), 12000);
}

setInterval(createHeart, 650);

function moveNoButton() {
  const maxX = Math.max(70, window.innerWidth * 0.32);
  const maxY = Math.max(70, window.innerHeight * 0.20);
  noBtn.style.position = "fixed";
  noBtn.style.left = (Math.random() * maxX + (window.innerWidth - maxX) / 2 - 70) + "px";
  noBtn.style.top = (Math.random() * maxY + (window.innerHeight - maxY) / 2 + 40) + "px";
  noBtn.style.zIndex = 10;
}

noBtn.addEventListener("click", () => {
  noClicks++;
  attempt++;
  updateCounter();
  nextReason();

  const msg = noMessages[Math.min(noClicks - 1, noMessages.length - 1)];
  tease.textContent = msg;

  noButtonScale = Math.max(0.45, noButtonScale - 0.06);
  noBtn.style.transform = `scale(${noButtonScale})`;
  yesBtn.style.transform = `scale(${Math.min(1.22, 1 + noClicks * 0.025)})`;
  tiny.textContent = "Attempt " + attempt + " unlocked another reason. 💌";

  if (attempt < 100) moveNoButton();

  if (attempt >= 100) {
    noBtn.style.display = "none";
    yesBtn.textContent = "YES 💖";
    yesBtn.style.transform = "scale(1.22)";
    tease.textContent = "Okay, this time there is only one answer. 😌❤️";
    tiny.textContent = "You made it to the final question.";
  }
});

yesBtn.addEventListener("click", () => {
  success.classList.add("show");
  success.setAttribute("aria-hidden", "false");
  burst();
});

function burst() {
  for (let i = 0; i < 35; i++) {
    setTimeout(createHeart, i * 35);
  }
}

replayBtn.addEventListener("click", () => {
  attempt = 1;
  noClicks = 0;
  noButtonScale = 1;
  refillReasons();
  nextReason();
  updateCounter();
  noBtn.style.display = "";
  noBtn.style.position = "relative";
  noBtn.style.left = "";
  noBtn.style.top = "";
  noBtn.style.transform = "";
  yesBtn.style.transform = "";
  tease.textContent = "So... will you be mine? 🥺";
  tiny.textContent = "P.S. Try clicking NO. I dare you. 😌";
  success.classList.remove("show");
  success.setAttribute("aria-hidden", "true");
});

refillReasons();
nextReason();
for (let i = 0; i < 5; i++) setTimeout(createHeart, i * 250);
