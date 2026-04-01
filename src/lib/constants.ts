export const PROMPTS = [
  "What have you never told anyone?",
  "What would you say if no one was listening?",
  "Who do you owe an apology you'll never give?",
  "What are you pretending is fine?",
  "What do you wish you could unhear?",
  "What's the thing you carry that no one sees?",
  "If you could say one thing without consequences, what would it be?",
  "What did you never get to say goodbye to?",
  "What truth are you tired of hiding?",
];

export const RESPONSE_SETS = [
  ["I understand.", "I believe you.", "You're not alone.", "Thank you."],
  ["I hear you.", "That took courage.", "I'm holding this.", "Me too."],
  ["It makes sense.", "You're not broken.", "I'm glad you said it.", "I've felt this too."],
  ["I won't forget this.", "You deserved better.", "I'm still here.", "I see you."],
];

export const SAMPLE_SECRETS = [
  "I never told my father I forgave him before he died.",
  "I smile at work every day but I haven't felt joy in months.",
  "I'm terrified that I'm becoming my mother.",
  "I left because I loved you too much to stay.",
  "I pretend I don't remember but I remember everything.",
  "Some days the only reason I get up is because the dog needs to be fed.",
  "I said I was fine with it. I wasn't.",
  "I keep the voicemail because it's the last time I heard her voice.",
  "I chose my career over him and I still don't know if it was right.",
  "Nobody knows I almost didn't come home that night.",
  "I tell everyone I'm over it. I'm not even close.",
  "The last thing she said to me was a lie, and I let her believe I didn't know.",
];

export function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function pickRandomSet(): string[] {
  return pickRandom(RESPONSE_SETS);
}
