const questions = [
  "Why listen to this daily",
  "How do you become less emotional?",
  "What is the most detrimental mistake that most people make?",
  "Why should you write things down when reviewing them or learning them? This is for both this journal and anki.",
  "What is the way that you think of things in order to understand them",
  "What are the main ways to win any game",
  "What is the worst thing to do with private knowledge you just acquired",
  "How should you deal with examples being used as evidence for a broader point",
  "What is the most important fact about discomfort",
  "What is the best way to deal with discomfort",
  "Why is youtube a bad hobby",
  "What should you do with emotions that you don't want",
  "Why should you meditate daily?",
  "Why should you always journal/wait in free time",
  "What should you think whenever something doesn't make sense",
  "What should you do during moments where nothing is happening and you can't journal",
  "What is the main thing you need to keep in mind when observing to stop being in autopilot",
  "What are the questions you should try to answer when observing",
  "How do you avoid falling into traps?",
  "How do you find out who knows something important and possibly what they know?",
  "What are the easiest habits to improve charisma?",
  "What is the best way to make fun small talk?",
  "How do you be disciplined on days when you are unmotivated?",
  "What is the most important tips for talking with woman",
  "What is the algorithm for negotiations",
  "How should you express bad news to someone?",
  "What should you assume if someone else seems like they are completely crazy"
];
const answers = [
  "You should listen to this daily because one of the main ways that humans actually believe things is through hearing them repeatedly. This is helpful propoganda. Just remembering things are true doesn't make you fully believe it. You learn things by thinking about them a lot and use the knowledge maybe by solving problems or just using it in general for social tips. This is why reading long books is more important than just reading a youtube summary. Why writing code by hand teaches more than AI generating a solution. Thinking about the answer will help you learn much better than just getting answers. This can be another way to use journaling.",
  "You can become less emotional by asking yourself How much this will really matter in 1 month? 1 year?",
  "You don't learn emotionally from past mistakes and tend to repeat them. Think about how many times you've hated weed anxiety and then done it again. Imagine how many times you get popcorn after remembering you don't love it anymore. For these things you are pushed to do them even though you don't like them/know they aren't good. Same with funny youtube videos. You need to have your logical mind have a greater control in what you do than your emotional mind.",
  "The reason you should write things down for review and learning is it gives you more time to think about the concept and put it in your own words and actually think about it instead of regurgitating it. It is also a better test of whether you actually knew it.",
  "You should think of things in the form Claim, Reason, Example. For example for math proofs you have the claim and then the proof and then the application of the proof. This is used frequently in the journal and should be thought of it when used",
  "1. Manipulate opponents model of reality. This is often done by making opponent think they alread won or already lost but there are other ways to do it. Patrick Jane uses it a lot to catch killers. 2. Attack the player not the game. Think about how Ayanokouji beat Ichinose in Year 2 volume 12 sometimes better opponents are easier to attack. 3. Prepare ahead of time by practicing",
  "The worst thing you can do with private info you aquired is to share it and make it public. There are so many traps you can do with asymetric information and you lose all of them when you tell the world about that information.",
  "Update beliefs by approximating bayes theorem in your head. Remember that P(A|B)=P(A)*P(B|A)/P(B). Use a rational prior belief. The belief given the claim and most importantly the probability of that event happening in general whether the claim is false or not(If a prior is low consider it negligible for P(B)).",
  "Discomfort will always exist until you have momentum. Discomfort is proof that you are building discipline and getting better. A lot of the things that you are addicted to that I tell you to stop you continue because you are addicted like a drug addict. You should live in discomfort and accept it and no that it is never gonna go away until you perform the actions anyway no matter what you are overthinking. And you need to perform the actions. Comfort kills you. Momentum creates a god.",
  "The best way to handle discomfort is by remembering that many people including people you admire have gone through the same things if not worse. Remember in elementary school thinking about how Count Olaf made the Baudelaires run laps helped you run for longer. Moreover, you can also try to fake it and pretend you are in another emotional state and you often transform your emotional state just by pretending.",
  "Anything that is not gonna overstimulate your brain is a good habit. Youtube however are like a drug you are addicted to and aren't even happy while using. It messes with dopamine receptors and should be quit. If you sacrifice happiness for comfort you deserve neither and will lose both although journaling should be the default.",
  "Accept that feeling. Acknowledge it as real and don't try to suppress it. It's kinda like negotiating with the emotion. You are meant to understand it but that doesn't mean you should let it control you. You really want to figure out why you are getting that urge and maybe fix that instead of thinking the urge is a bad thing as that is a part of you. What you resist will persist. If nervous talking to girl don't resist the fact that you are anxious just perform anyway and work with that nervousness since it's a superpower that will prevent you from saying something stupid.",
  "Meditation is incredibly important because it is one of the few ways to improve vertical thinking which is one of the pillars to being smart. It allows you to think through the consequences of actions even ones other people don't see.",
  "Journaling is important because it is used to improve lateral thinking and create ideas for more efficiency and living a better life. It is also a form of waiting since not memorable and this is important as you gain memory by waiting more as there are more things that have greater significance. If something significant is always happening it is no longer significant.",
  "Come up with 5 possibilities in your head using lateral thinking unless you figured out the solutions. Some are gonna be common like they are lying for one possibility and then you will need to evaluate the probability.",
  "When you can't journal you should observe and be happy. Journaling is only useful if you can write things down. Think about how many of your normal thoughts have really been that impactful. It is better to just train observation as a skill than waste time thinking about useless stuff and distract yourself for happiness by maybe dancing and singing and being free. Don't consume content though. How many geniuses consume dumb content. You should always have all of your senses active as the chances are at some point in your life there will be something that requires them. Moreover, do what you want people are never gonna really think about weird things in the past any more than a day at most. There are many weird things in your life you just forget about and more social people have seen much more. Don't swell on regrets as that is a bad habit but also make sure to minimize regrets as there is negligible loss to awkwardness with near infinite gain. Don't hesitate. Don't think. Just act. Luffy and Ace promised to live life with no regrets and all actions have finite loss with infinite gain get over yourself.",
  "You shouldn't be in autopilot because there is a near infinite amount of things going on in everyday images and it is near impossible to keep them all in mind. Moreover, even when you go to places already experienced you are experiencing them again and there are things that have changed just due to time. And there are also things that you just haven't been able to observe yet because of how many observable things there are.",
  "Ask yourself what is there that shouldn't be there necessarily and what isn't there that should be there",
  "Always assume there is a trap whenever someone asks you to do anything and if you try to find it and think it is sufficiently likely then actually make a way to hedge against the trap but the possibility of a trap should always be considered. 2. Think of what they want and what they can gain.",
  "The best way to find someone who knows something is to make it so that everyone besides the person who knows something will perform an action. Think about how Patrick Jane tricks a lot of people. The best line is 'raise your hand for a chance to win $100 if you can correctly guess who x is that is $100 for whoever can guess who x is(wait for most people to raise hand and look around about there guess). Wait did I say $100 sorry I meant 100 cents so $1 for whoever correctly guesses who x is.' Then you can use info based off of who didn't raise hand and who didn't look around to determine who is x. This is powerful because there are two traps and people lower there guard when they notice one trap. If they are arrogant you can also make them contradict you. You can make them think the info is useless as they won or lost or its already known. Finally you can see who shows interest in something uninteresting to anyone else.",
  "The best way to be more charismatic is by Smiling. Speaking more confidently. Giving a pause before responding, use the persons name. The best drill to improve confidence is visualizing success in the scenario. This will condition yourself to feel better in the scenario that you are in. Keep in mind this won't create perfection and you will still feel discomfort. But this should improve performance.",
  "The best way to make fun small talk is to use reminds me of when talking about something instead of ending there in order to transition from a compliment. Often lateral thinking is helpful for transitioning between topics. Moreover, when asking questions go one step deeper and ask why. For example instead of asking what do you do for work. After that ask why they chose to do that. Finally ask fun hypothetical questions about what you are talking about, also guess a lot of answers instead of asking questions. Also whenever conveying information tell stories instead of listing facts.",
  "Use the foot in the door technique to do things even when you are not motivated. For anki you can do 1 anki, then 2 then 4 and so on. For waking up start by moving your feet around. Then move your left foot out of the bed. Then move right foot closer to edge. Then move right foot off edge. Then stand up. Your body is tired because it doesn't want to invest as much. But by turning things that feel like a lot into smaller tasks you can trick your brain into investing into each part.",
  "For woman never be needy. Don't appeal to them. Just be yourself. It's more important to be with the right person than to get a girls phone number. Rejection is fine as it keeps you away from a girl you don't want. Instead of asking yourself if she will like you worry about whether you will like her. Whether she is actually a person you would enjoy being with and be your raw self so you can tell if she is. There is even a trap where as men get rejected more they become more needy and care about womans perspectives and are only trying to hear a yes which then turns them off even more and works in a cycle.",
  "The algorithm for negotiations is saying I'm sorry then mirror, label to show empathy and summarize to get a thats right, make them say no so that they feel in control them and then be quiet then repeat. Ask clarifying questions too that are open ended since you can't just mirror but that mix will get you great results. Moreover, ask in money for 0.65(with a range) 0.85 0.95 what you want then what you want but with an odd number so it sounds specific. You can also say your name so they feel more empathy towards you and see you as person.",
  "The best way to make something bad seem not as bad is by straightforwardly saying the bad thing without filter or sounding better and then explaining the positives. This leads to peolpe not actually thinking of it as bad.",
  "If someone seems crazy they are likely 1. Acting off incorrect information, 2. Are constrained by something else or 3. Have other interests"
];

const promptText = document.querySelector("#promptText");
const modeLabel = document.querySelector("#modeLabel");
const progress = document.querySelector("#progress");
const voiceStatus = document.querySelector("#voiceStatus");
const startButton = document.querySelector("#startButton");
const nextButton = document.querySelector("#nextButton");
const listenButton = document.querySelector("#listenButton");
const jumpForm = document.querySelector("#jumpForm");
const cardNumberInput = document.querySelector("#cardNumber");

let currentIndex = 0;
let showingAnswer = false;
let started = false;
let recognition = null;
let listening = false;
let recognitionActive = false;
let lastNextCommandAt = 0;
const nextCommandCooldownMs = 250;
const minPromptFontSize = 20;

function hasContent() {
  return questions.length > 0 && answers.length > 0;
}

function getAnswerForCurrentQuestion() {
  return answers[currentIndex] ?? "No answer has been added for this question.";
}

function updateProgress() {
  const total = questions.length;
  const current = total === 0 ? 0 : currentIndex + 1;
  progress.textContent = `${current} / ${total}`;
  cardNumberInput.max = String(total);
}

function fitPromptText() {
  promptText.style.removeProperty("--prompt-font-size");
  promptText.scrollTop = 0;

  window.requestAnimationFrame(() => {
    const maxFontSize = parseFloat(window.getComputedStyle(promptText).fontSize);
    let low = minPromptFontSize;
    let high = maxFontSize;
    let best = minPromptFontSize;

    while (high - low > 0.5) {
      const mid = (low + high) / 2;
      promptText.style.setProperty("--prompt-font-size", `${mid}px`);

      if (promptText.scrollHeight <= promptText.clientHeight) {
        best = mid;
        low = mid;
      } else {
        high = mid;
      }
    }

    promptText.style.setProperty("--prompt-font-size", `${best}px`);
  });
}

function speak(text, afterSpeech) {
  window.speechSynthesis.cancel();

  if (!("speechSynthesis" in window)) {
    voiceStatus.textContent = "Speech is not supported in this browser";
    if (afterSpeech) afterSpeech();
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95;
  utterance.onstart = () => {
    voiceStatus.textContent = "Speaking";
  };
  utterance.onend = () => {
    voiceStatus.textContent = listening ? 'Listening for "next"' : "Voice ready";
    if (afterSpeech) afterSpeech();
  };
  utterance.onerror = () => {
    voiceStatus.textContent = "Speech stopped";
    if (afterSpeech) afterSpeech();
  };

  window.speechSynthesis.speak(utterance);
}

function showQuestion(shouldSpeak = started) {
  if (!hasContent()) {
    modeLabel.textContent = "Question";
    promptText.textContent = "Add questions and answers in script.js to begin.";
    updateProgress();
    fitPromptText();
    return;
  }

  showingAnswer = false;
  modeLabel.textContent = "Question";
  promptText.textContent = questions[currentIndex];
  updateProgress();
  fitPromptText();
  if (shouldSpeak) speak(questions[currentIndex]);
}

function showAnswer() {
  showingAnswer = true;
  modeLabel.textContent = "Answer";
  promptText.textContent = getAnswerForCurrentQuestion();
  updateProgress();
  fitPromptText();
  speak(getAnswerForCurrentQuestion());
}

function moveToNextQuestion() {
  currentIndex = (currentIndex + 1) % questions.length;
  showQuestion();
}

function handleNext() {
  if (!hasContent()) return;

  if (!started) {
    startPractice();
    return;
  }

  if (showingAnswer) {
    showingAnswer = false;
    moveToNextQuestion();
    return;
  }

  showAnswer();
}

function jumpToCard(event) {
  event.preventDefault();
  if (!hasContent()) return;

  const cardNumber = Number(cardNumberInput.value);

  if (!Number.isInteger(cardNumber) || cardNumber < 1 || cardNumber > questions.length) {
    voiceStatus.textContent = `Choose a card from 1 to ${questions.length}`;
    cardNumberInput.select();
    return;
  }

  currentIndex = cardNumber - 1;
  showQuestion(started);
  cardNumberInput.value = "";
}

function startListening() {
  if (!recognition || !listening || recognitionActive) return;

  const beginListening = () => {
    if (!recognition || !listening || recognitionActive) return;

    try {
      recognition.start();
      recognitionActive = true;
      listenButton.setAttribute("aria-pressed", "true");
      voiceStatus.textContent = 'Listening for "next"';
    } catch {
      recognitionActive = false;
    }
  };

  beginListening();
}

function stopListening() {
  if (!recognition) return;

  listening = false;
  listenButton.setAttribute("aria-pressed", "false");
  voiceStatus.textContent = "Voice ready";

  if (recognitionActive) {
    recognition.stop();
  }
}

function acceptNextCommand() {
  const now = Date.now();
  if (now - lastNextCommandAt < nextCommandCooldownMs) return false;

  lastNextCommandAt = now;
  return true;
}

function setupSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    listenButton.disabled = true;
    listenButton.textContent = 'Speech input unavailable';
    return;
  }

  recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";

  recognition.onresult = (event) => {
    const transcripts = Array.from(event.results)
      .slice(event.resultIndex)
      .map((result) => result[0].transcript.trim().toLowerCase())
      .join(" ");

    if (transcripts.split(/\s+/).includes("next") && acceptNextCommand()) {
      handleNext();
      if (recognitionActive) recognition.stop();
    }
  };

  recognition.onend = () => {
    recognitionActive = false;
    startListening();
  };

  recognition.onerror = (event) => {
    recognitionActive = false;

    if (event.error === "not-allowed" || event.error === "service-not-allowed") {
      listening = false;
      listenButton.setAttribute("aria-pressed", "false");
      voiceStatus.textContent = "Microphone permission needed";
      return;
    }

    voiceStatus.textContent = "Restarting listener";
    startListening();
  };
}

function toggleListening() {
  if (!started) {
    startPractice();
    return;
  }

  if (!recognition) return;

  if (listening) {
    stopListening();
  } else {
    listening = true;
    startListening();
  }
}

function startPractice() {
  if (!hasContent()) return;

  started = true;
  listening = Boolean(recognition);
  startButton.hidden = true;
  startListening();
  showQuestion(true);
}

startButton.addEventListener("click", startPractice);
nextButton.addEventListener("click", handleNext);
listenButton.addEventListener("click", toggleListening);
jumpForm.addEventListener("submit", jumpToCard);

setupSpeechRecognition();
showQuestion(false);
voiceStatus.textContent = "Press Start";
