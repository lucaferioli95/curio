/* Curio lesson content. Every deck is a short run of cards: fact, quiz (multiple choice), est (guess a number first), sim (small interactive).
   Facts are stable, well-established figures. Money content is educational, not financial advice. */
window.AREAS = [
  { id: 'science', name: 'Science and nature', color: '#5BC0EB' },
  { id: 'money', name: 'Money and economics', color: '#F6C453' },
  { id: 'history', name: 'History and ideas', color: '#E8896B' },
  { id: 'tech', name: 'Tech, AI and everyday engineering', color: '#6FD6A4' }
];

window.DECKS = [
  /* ---------------------------------------------------------------- SCIENCE */
  {
    id: 'space', area: 'science', emoji: '🌌', title: 'How big is space?',
    blurb: 'From the Moon to the edge of everything we can see.',
    cards: [
      { t: 'fact', icon: '🌙', kicker: 'Start close', title: 'The Moon is 1.3 light-seconds away',
        text: 'Light travels about 300,000 km every second. The Moon is 384,400 km away, so a laser beam aimed at it arrives in just over a second.',
        stat: '1.3 s', statLabel: 'for light to reach the Moon' },
      { t: 'fact', icon: '☀️', kicker: 'Old light', title: 'Sunlight is 8 minutes old',
        text: 'The Sun is about 150 million km away. Its light needs roughly 8 minutes and 20 seconds to reach you, so you always see the Sun as it was a little while ago.',
        stat: '8 min 20 s', statLabel: 'from Sun to Earth' },
      { t: 'est', q: 'A passenger jet cruises at about 900 km/h. Flying non-stop, how many years would it take to reach the Sun, 150 million km away?',
        min: 1, max: 1000, log: true, unit: ' years', answer: 19,
        why: '150,000,000 km ÷ 900 km/h is about 166,000 hours, which is roughly 19 years. Light covers the same distance in 8 minutes.' },
      { t: 'fact', icon: '🚀', kicker: 'A distance, not a time', title: 'A light-year is how far light goes in a year',
        text: 'That is about 9.5 trillion km. The nearest star beyond the Sun, Proxima Centauri, is 4.2 light-years away. Even at the fastest speed a spacecraft has reached (about 190 km/s, the Parker Solar Probe), the trip would take roughly 6,600 years.',
        stat: '4.2 ly', statLabel: 'to the nearest other star' },
      { t: 'quiz', q: 'What is true when you look at a star?',
        opts: ['You see it as it is right now', 'You see it as it was in the past', 'Distant stars always look dimmer than they are', 'Its light arrives instantly'], a: 1,
        why: 'Light takes time to cross space. A star 100 light-years away is seen as it was 100 years ago. Looking far away means looking back in time.' },
      { t: 'fact', icon: '🌀', kicker: 'Zoom out', title: 'Our galaxy is about 100,000 light-years across',
        text: 'The Milky Way holds a few hundred billion stars. The nearest large galaxy, Andromeda, is about 2.5 million light-years away. The light you would see from it today left before modern humans existed.',
        stat: '2.5 million ly', statLabel: 'to Andromeda' },
      { t: 'fact', icon: '🔭', kicker: 'The limit', title: 'The observable universe is about 93 billion light-years wide',
        text: 'That is the part we can possibly see, and it contains hundreds of billions of galaxies. It is wider than its 13.8 billion year age suggests because space itself has been stretching while the light travelled.',
        stat: '13.8 billion', statLabel: 'years old' },
      { t: 'quiz', q: 'Why can we not see beyond the observable universe?',
        opts: ['There is nothing out there', 'Light from farther away has not had time to reach us yet', 'It is too dark to see', 'Our telescopes are too small'], a: 1,
        why: 'The universe has a finite age, so light from beyond a certain distance has not arrived yet. Space may well continue past that edge.' }
    ]
  },
  {
    id: 'body', area: 'science', emoji: '🫀', title: 'Your body in numbers',
    blurb: 'Cells, blood, bones and the hungry brain.',
    cards: [
      { t: 'fact', icon: '🧬', kicker: 'Count them', title: 'You are made of about 37 trillion cells',
        text: 'Bacteria living on and in you are roughly as numerous as your own cells, but they weigh far less: about 200 grams in total.',
        stat: '37 trillion', statLabel: 'human cells in an adult' },
      { t: 'est', q: 'On average, how many times does your heart beat in one day?',
        min: 10000, max: 1000000, log: true, unit: ' beats', answer: 100000,
        why: 'At about 70 beats a minute that is roughly 100,000 beats a day, and close to 3 billion in a lifetime.' },
      { t: 'fact', icon: '🩸', kicker: 'Constant renewal', title: 'Your red blood cells last about 120 days',
        text: 'An adult carries around 5 litres of blood. Bone marrow makes roughly 2 million new red blood cells every second to replace the old ones.',
        stat: '120 days', statLabel: 'lifespan of a red blood cell' },
      { t: 'quiz', q: 'Roughly what share of your resting energy does the brain use?',
        opts: ['2%', '5%', '20%', '50%'], a: 2,
        why: 'The brain is only about 2% of body weight but uses around 20% of your resting energy. It is an energy-hungry organ.' },
      { t: 'fact', icon: '🧠', kicker: 'Wiring', title: 'The brain has about 86 billion neurons',
        text: 'Each one connects to thousands of others. Signals race along the fastest nerves at up to roughly 120 metres per second, about 430 km/h.',
        stat: '86 billion', statLabel: 'neurons' },
      { t: 'quiz', q: 'How many bones does an adult human have?',
        opts: ['106', '206', '306', '406'], a: 1,
        why: 'Babies are born with around 270 to 300 smaller bone pieces. Many fuse as you grow, leaving 206 in adults.' },
      { t: 'fact', icon: '🧍', kicker: 'The biggest organ', title: 'Your skin covers about 2 square metres',
        text: 'Skin is your largest organ. Its outer layer is replaced roughly every month, so much of the surface you see today was not there a few weeks ago.',
        stat: '~2 m²', statLabel: 'of skin in an adult' }
    ]
  },

  /* ------------------------------------------------------------------ MONEY */
  {
    id: 'compound', area: 'money', emoji: '💰', title: 'How money grows',
    blurb: 'Compounding, doubling and the quiet effect of inflation.',
    cards: [
      { t: 'fact', icon: '📈', kicker: 'Interest on interest', title: 'Compounding bends the line upwards',
        text: 'Earn 7% on £100 and you gain £7. Next year you earn 7% on £107, not £100. Gains start earning their own gains, so growth curves upward instead of rising in a straight line.',
        stat: '£100 → £761', statLabel: 'after 30 years at 7% a year' },
      { t: 'est', q: 'Fold a sheet of paper (0.1 mm thick) in half, then again, and again. How many folds would it take for the stack to reach the Moon?',
        min: 1, max: 100, log: false, unit: ' folds', answer: 42,
        why: 'Each fold doubles the thickness. After 42 folds it is 0.1 mm × 2^42, about 440,000 km, which is further than the Moon (384,400 km). In real life paper cannot be folded that many times, but the doubling maths is real.' },
      { t: 'est', q: 'Start with 1p. Double it every day. Day 1 is 1p, day 2 is 2p, and so on. How much do you have on day 30?',
        min: 1, max: 100000000, log: true, prefix: '£', answer: 5368709,
        why: 'Day 10 is just £5.12. Day 20 is £5,243. Day 30 is £5,368,709. Almost all the growth happens at the end, which is why compounding feels slow and then sudden.' },
      { t: 'sim', id: 'compound' },
      { t: 'fact', icon: '⏱️', kicker: 'A mental shortcut', title: 'The rule of 72',
        text: 'Divide 72 by the yearly percentage growth to estimate how many years it takes to double. At 6% that is about 12 years. At 9%, about 8 years.',
        stat: '72 ÷ rate', statLabel: 'years to double' },
      { t: 'quiz', q: 'At 4% growth a year, roughly how long does money take to double?',
        opts: ['8 years', '18 years', '25 years', '40 years'], a: 1,
        why: '72 ÷ 4 = 18 years. The rule is an approximation, but it is usually within a few percent.' },
      { t: 'fact', icon: '🧺', kicker: 'The same maths, backwards', title: 'Inflation shrinks what money can buy',
        text: 'Prices rising 3% a year halve the buying power of cash in about 24 years (72 ÷ 3). That is why people try to earn more than inflation, although investing carries the risk of losses too.',
        stat: '24 years', statLabel: 'to halve at 3% inflation' },
      { t: 'quiz', q: 'Compound interest is often called "the eighth wonder of the world", usually attributed to Einstein. What is the evidence he said it?',
        opts: ['It is in his published papers', 'He said it in a famous 1930 interview', 'There is no reliable source, it is probably a myth', 'It was said by his bank manager'], a: 2,
        why: 'No reliable source has been found. Compounding is real and powerful, but the famous quote is almost certainly misattributed.' }
    ]
  },
  {
    id: 'econ', area: 'money', emoji: '⚖️', title: 'Think like an economist',
    blurb: 'Opportunity cost, price signals and why sunk costs mislead.',
    cards: [
      { t: 'fact', icon: '🔀', kicker: 'The core idea', title: 'Everything costs what you give up',
        text: 'The true cost of a choice is the best alternative you gave up. A cinema evening costs the ticket plus whatever else you could have done with those hours. Economists call this opportunity cost.',
        stat: 'Opportunity cost', statLabel: 'the value of the next best option' },
      { t: 'quiz', q: 'You have a free hour. You could study (worth £20 to you), do a side job paying £15, or nap (worth £10). If you study, what is the opportunity cost?',
        opts: ['£0', '£10', '£15', '£25'], a: 2,
        why: 'Opportunity cost is the value of the best alternative you give up, not the sum of all of them. The best alternative to studying is the £15 job.' },
      { t: 'fact', icon: '🏷️', kicker: 'Price as a signal', title: 'Prices tell people what is scarce',
        text: 'When something becomes scarcer, its price tends to rise. That nudges buyers to use less and sellers to supply more, without anyone coordinating it centrally. Prices carry information.',
        stat: 'Supply and demand', statLabel: 'the price finds a balance' },
      { t: 'quiz', q: 'More people want tickets to a gig than there are tickets, and resale prices rise. What does the rising price signal?',
        opts: ['Demand exceeds supply at the original price', 'The venue is too small for the band', 'Supply exceeds demand', 'The tickets are lower quality'], a: 0,
        why: 'When demand beats supply at the set price, buyers bid higher. That is a signal of scarcity, whether or not you like the outcome.' },
      { t: 'fact', icon: '🪦', kicker: 'A thinking trap', title: 'Sunk costs are gone either way',
        text: 'Money or time already spent that you cannot get back should not decide what you do next. Sitting through a bad film because you paid for the ticket is the sunk cost fallacy. Only future costs and benefits matter.',
        stat: 'Sunk cost', statLabel: 'already spent, ignore it' },
      { t: 'quiz', q: 'You paid £40 for a non-refundable ticket, but you feel ill and would rather rest. It cannot be resold. What does sound reasoning say?',
        opts: ['Go anyway, you paid for it', 'The £40 is gone either way, so decide on what you want now', 'Go, otherwise the money is wasted', 'Buy a second ticket to make up for it'], a: 1,
        why: 'The £40 is spent whether you go or not. Compare only what you gain and lose from here: the evening out versus resting.' },
      { t: 'fact', icon: '🤝', kicker: 'Why trade helps', title: 'Comparative advantage',
        text: 'Even if you are better than your neighbour at everything, you both gain if each of you focuses on what you are relatively best at and trades. David Ricardo set this out in 1817, and it explains why trade can leave both sides better off.',
        stat: '1817', statLabel: 'Ricardo publishes the idea' }
    ]
  },

  /* ---------------------------------------------------------------- HISTORY */
  {
    id: 'turning', area: 'history', emoji: '📜', title: 'Five turning points',
    blurb: 'Farming, print, factories, penicillin and the internet.',
    cards: [
      { t: 'fact', icon: '🌾', kicker: 'About 12,000 years ago', title: 'Farming changes everything',
        text: 'In the Fertile Crescent, in the Middle East, people began growing wheat and barley and keeping animals. Staying in one place allowed food surpluses, larger populations, cities and specialised jobs.',
        stat: '~12,000 years', statLabel: 'since the first farms' },
      { t: 'fact', icon: '📖', kicker: 'Around 1450', title: 'Gutenberg and the printing press',
        text: 'Johannes Gutenberg’s movable-type press in Mainz made books far cheaper to copy than writing them by hand. By 1500, printing presses were running in 282 cities, and almost 30,000 different editions had been printed, speeding up the spread of ideas.',
        stat: '~1450', statLabel: 'movable type in Europe' },
      { t: 'quiz', q: 'Roughly when was the movable-type printing press developed in Europe?',
        opts: ['1050', '1250', '1450', '1650'], a: 2,
        why: 'Gutenberg developed his press around 1450 in Mainz, in what is now Germany.' },
      { t: 'fact', icon: '⚙️', kicker: 'From the 1760s', title: 'The Industrial Revolution',
        text: 'Beginning in Britain, steam power and machines moved work from homes and fields into factories. Within a few generations, populations had urbanised and economies grew in ways never seen before.',
        stat: '1760 to 1840', statLabel: 'the core period in Britain' },
      { t: 'est', q: 'Worldwide, what was the average life expectancy at birth in the year 1900?',
        min: 20, max: 80, log: false, unit: ' years', answer: 32,
        why: 'About 32 years, pulled down by very high child mortality. It is above 70 today, thanks to sanitation, vaccines, antibiotics and better food.' },
      { t: 'fact', icon: '🧪', kicker: '1928', title: 'A lucky mould',
        text: 'Alexander Fleming noticed that mould had killed bacteria around it on a dish in his London lab. It took until the 1940s for Florey, Chain and colleagues to turn penicillin into a usable drug that saved many lives, including in the Second World War.',
        stat: '1928', statLabel: 'penicillin is spotted' },
      { t: 'quiz', q: 'How did Alexander Fleming first notice penicillin?',
        opts: ['Mould had accidentally killed bacteria on a dish', 'He designed it deliberately in a drug-discovery programme', 'He tested a traditional plant remedy', 'He copied a recipe from an old manuscript'], a: 0,
        why: 'It began with an observation, a contaminated dish, and a researcher curious enough to follow it up.' },
      { t: 'fact', icon: '🌐', kicker: '1969 and 1989', title: 'The internet and the web',
        text: 'In 1969 the first message was sent over ARPANET. The system crashed after two letters, "LO", from "LOGIN". Tim Berners-Lee proposed the World Wide Web at CERN in 1989, and the first website followed in 1991.',
        stat: '"LO"', statLabel: 'the first message ever sent' }
    ]
  },
  {
    id: 'think', area: 'history', emoji: '🧠', title: 'Ways of thinking',
    blurb: 'Socrates, Occam, Popper and the Stoics.',
    cards: [
      { t: 'fact', icon: '❓', kicker: 'Athens, around 400 BCE', title: 'Socrates asked questions',
        text: 'Socrates taught by asking rather than telling: "What do you mean by justice?" Keep probing and shaky assumptions show themselves. He wrote nothing down, and we know him mainly through Plato. Teachers and lawyers still use the method.',
        stat: 'The Socratic method', statLabel: 'questions over lectures' },
      { t: 'fact', icon: '✂️', kicker: '14th century', title: 'Occam’s razor',
        text: 'William of Ockham’s principle: do not multiply explanations beyond what is needed. When two explanations fit the facts equally well, prefer the simpler one. It is a rule of thumb for choosing where to start, not proof of anything.',
        stat: 'Keep it simple', statLabel: 'but only when the facts fit' },
      { t: 'quiz', q: 'You hear a thump in the attic and find a box on the floor, balanced badly on a shelf. What does Occam’s razor suggest?',
        opts: ['A ghost knocked it over', 'It was badly balanced and fell by itself', 'A burglar is hiding upstairs', 'Nothing can be said'], a: 1,
        why: 'It explains the evidence with the fewest extra assumptions. It does not prove that is what happened, only that it is the sensible first guess.' },
      { t: 'fact', icon: '🦢', kicker: 'Karl Popper', title: 'A good claim can be proven wrong',
        text: 'Popper argued that scientific claims must be testable: there must be some observation that would show them false. "All swans are white" is scientific because one black swan breaks it. A claim that fits every possible outcome explains nothing.',
        stat: 'Falsifiability', statLabel: 'could it be shown wrong?' },
      { t: 'quiz', q: 'Which claim is falsifiable?',
        opts: ['Everything happens for a reason', 'An invisible dragon in my garden leaves no trace', 'Water boils at 100°C at sea-level pressure', 'Your destiny is already written'], a: 2,
        why: 'You can test it and it could turn out wrong. The others are built so that no observation could ever contradict them.' },
      { t: 'fact', icon: '🏛️', kicker: 'Epictetus, Rome', title: 'The dichotomy of control',
        text: 'Epictetus, born a slave and later a teacher, taught that some things are up to us (our judgments and actions) and some are not (the weather, other people’s opinions). Spend your effort on the first group.',
        stat: 'Up to us, or not?', statLabel: 'a Stoic question' },
      { t: 'fact', icon: '⛵', kicker: 'A puzzle from Plutarch', title: 'The ship of Theseus',
        text: 'Replace every plank of a ship over the years. Is it still the same ship? If the old planks are rebuilt into a second ship, which is the original? The puzzle asks what identity means, for ships and for people whose cells are constantly replaced.',
        stat: 'Same ship?', statLabel: 'no single right answer' },
      { t: 'quiz', q: 'What is confirmation bias?',
        opts: ['Favouring information that fits what we already believe', 'Trusting experts too much', 'Changing your mind too often', 'Remembering only recent events'], a: 0,
        why: 'We notice and remember evidence that supports our views and discount evidence against them. Actively looking for ways you might be wrong is the antidote.' }
    ]
  },

  /* ------------------------------------------------------------------- TECH */
  {
    id: 'llm', area: 'tech', emoji: '🤖', title: 'How AI chatbots work',
    blurb: 'Next-word prediction, tokens and why they sometimes make things up.',
    cards: [
      { t: 'fact', icon: '🔮', kicker: 'The core trick', title: 'They predict the next word',
        text: 'A large language model is trained on huge amounts of text to do one job: guess what comes next. Getting good at that across billions of sentences forces it to pick up grammar, facts and patterns of reasoning along the way.',
        stat: 'Next-word prediction', statLabel: 'the training goal' },
      { t: 'quiz', q: 'Which word is the model most likely to predict? "Peanut butter and ____"',
        opts: ['jelly', 'tyres', 'Tuesday', 'quickly'], a: 0,
        why: 'The phrase appears very often in its training text. It picks likely continuations, which is not the same as checking what is true.' },
      { t: 'fact', icon: '🧩', kicker: 'What it actually reads', title: 'Tokens, not words',
        text: 'Models read chunks of text called tokens. In English a token is roughly three quarters of a word, so 100 tokens is about 75 words. Common words are one token, and rarer words get split into pieces.',
        stat: '100 tokens ≈ 75 words', statLabel: 'a rough English rule of thumb' },
      { t: 'fact', icon: '🎛️', kicker: 'How it learns', title: 'Learning means nudging billions of dials',
        text: 'Inside is a huge network of numbers called parameters. Training adjusts them, over and over, so predictions become a little less wrong each time. Nobody writes the rules by hand; they emerge from the adjustments.',
        stat: 'Billions', statLabel: 'of parameters in large models' },
      { t: 'quiz', q: 'Why can chatbots state false things confidently, often called "hallucinations"?',
        opts: ['They are designed to deceive', 'They generate plausible text and do not automatically check facts', 'The internet connection drops', 'They only repeat old proverbs'], a: 1,
        why: 'Fluent, likely-sounding text is not the same as verified text. That is why important claims deserve a second source.' },
      { t: 'fact', icon: '🧠', kicker: 'Short-term memory', title: 'The context window',
        text: 'A model works from the text in its current conversation, its context window. It does not automatically remember past chats or look things up online unless it has been given memory or search tools.',
        stat: 'Context window', statLabel: 'what it can see right now' },
      { t: 'quiz', q: 'What usually gets the best answer from a chatbot?',
        opts: ['A vague one-word question', 'Specific context, what you want, and asking it to show its reasoning or sources', 'Typing in capital letters', 'Asking the same thing 20 times'], a: 1,
        why: 'The more relevant context it has, the better it can match what you need. Asking for sources lets you check the result.' }
    ]
  },
  {
    id: 'net', area: 'tech', emoji: '🌐', title: 'How the internet works',
    blurb: 'Packets, addresses, undersea cables and the padlock.',
    cards: [
      { t: 'fact', icon: '📦', kicker: 'Chopped up', title: 'Everything travels in packets',
        text: 'Sending a photo does not send one big file. It is cut into small packets, each labelled with where it is going. They may take different routes and are reassembled at the other end, so one broken link does not stop everything.',
        stat: 'Packets', statLabel: 'small labelled pieces of data' },
      { t: 'fact', icon: '📒', kicker: 'The phone book', title: 'IP addresses and DNS',
        text: 'Every device on the internet has an IP address, a number. You type a name like example.com, and the Domain Name System (DNS) works like a phone book, translating that name into the number your device needs.',
        stat: 'DNS', statLabel: 'names into numbers' },
      { t: 'quiz', q: 'What does DNS do?',
        opts: ['Encrypts your messages', 'Translates domain names into IP addresses', 'Stores websites', 'Speeds up Wi-Fi'], a: 1,
        why: 'It lets us use memorable names instead of numbers.' },
      { t: 'fact', icon: '🌊', kicker: 'Under the sea', title: 'Cables carry nearly all of it',
        text: 'The vast majority of international data travels through undersea fibre-optic cables, hundreds of them, each about as thick as a garden hose, sending pulses of light across oceans. Satellites carry only a small share.',
        stat: 'Mostly cables', statLabel: 'not satellites' },
      { t: 'est', q: 'Light in optical fibre travels at about 200,000 km/s. London to New York is about 5,570 km. What is the fastest possible one-way delay, in milliseconds?',
        min: 1, max: 1000, log: true, unit: ' ms', answer: 28,
        why: '5,570 ÷ 200,000 = 0.028 seconds, about 28 ms. Real delays are higher because cable routes are not straight and equipment adds time: a round trip is typically 60 to 80 ms.' },
      { t: 'fact', icon: '🔒', kicker: 'The padlock', title: 'HTTPS encrypts the connection',
        text: 'HTTPS scrambles traffic between your browser and a site, so people on the same Wi-Fi cannot read your passwords. It proves you are talking to the site you think you are, but not that the site is trustworthy. Scam sites can use HTTPS too.',
        stat: 'HTTPS', statLabel: 'private, not necessarily honest' },
      { t: 'quiz', q: 'What does the padlock in your browser tell you?',
        opts: ['The site is safe and honest', 'The connection to the site is encrypted', 'The site has no viruses', 'A government approved the site'], a: 1,
        why: 'It tells you about the connection only. Always check the address and be wary of unexpected requests for passwords or payments.' }
    ]
  },
  /* ---- added in 1.1.0 ---- */
  {
   "id": "black-holes",
   "area": "science",
   "emoji": "🕳️",
   "title": "Black holes",
   "blurb": "The edge you can never come back from",
   "cards": [
    {
     "t": "fact",
     "icon": "🕳️",
     "kicker": "Start here",
     "title": "Nothing that crosses a black hole’s edge can come back out. Not even light.",
     "text": "So how can something this extreme be real?"
    },
    {
     "t": "fact",
     "icon": "🕳️",
     "kicker": "The idea",
     "title": "Gravity is bent space",
     "text": "Einstein’s general relativity says mass bends space and time, and objects simply follow the curves. A black hole is mass squeezed so tightly that the curve becomes a one-way drop."
    },
    {
     "t": "quiz",
     "q": "Swap the Sun for a black hole of the same mass. What happens to Earth’s orbit?",
     "opts": [
      "Earth is sucked in at once",
      "Nothing changes about the orbit",
      "Earth flies off into space"
     ],
     "a": 1,
     "why": "Gravity depends on mass and distance, not on how squeezed the mass is. Same mass, same orbit. We would just be cold and in the dark."
    },
    {
     "t": "fact",
     "icon": "🕳️",
     "kicker": "The idea",
     "title": "The point of no return",
     "text": "The boundary is called the event horizon. It sits where the speed needed to escape equals the speed of light. Nothing travels faster than light, so nothing escapes from inside.",
     "stat": "Event horizon",
     "statLabel": "The one-way edge around a black hole."
    },
    {
     "t": "fact",
     "icon": "🕳️",
     "kicker": "Key number",
     "title": "Radius of the event horizon of a black hole with the Sun’s mass.",
     "text": "To become a black hole, Earth would have to be squeezed to a radius of about 9 millimetres.",
     "stat": "3 km",
     "statLabel": ""
    },
    {
     "t": "fact",
     "icon": "🕳️",
     "kicker": "The idea",
     "title": "How do we see the invisible?",
     "text": "We watch what is around it: stars whipping around an unseen centre, and hot gas glowing as it falls in. In 2015 detectors felt ripples in space from two black holes merging. In 2019 and 2022 the Event Horizon Telescope imaged the shadows of two more."
    },
    {
     "t": "est",
     "q": "How many times the Sun’s mass is the black hole at the centre of our galaxy?",
     "min": 0.1,
     "max": 1000,
     "unit": " million Suns",
     "answer": 4.3,
     "why": "It is called Sagittarius A*. We tracked stars orbiting it for decades to weigh it.",
     "log": true
    },
    {
     "t": "quiz",
     "q": "What defines the event horizon?",
     "opts": [
      "The surface of a solid object",
      "Where escape speed reaches the speed of light",
      "The exact centre of the black hole"
     ],
     "a": 1,
     "why": "It is not a surface. It is a boundary in space, and you would not feel anything special crossing it."
    },
    {
     "t": "fact",
     "icon": "✅",
     "kicker": "Recap",
     "title": "What you now know",
     "text": "Mass bends space, and a black hole bends it into a one-way drop. From far away, a black hole pulls just like any object of the same mass. The event horizon is the edge where even light cannot get out. We find black holes by their effects on stars, gas and space itself."
    }
   ]
  },
  {
   "id": "sleep",
   "area": "science",
   "emoji": "😴",
   "title": "The science of sleep",
   "blurb": "What your brain does while you are out",
   "cards": [
    {
     "t": "fact",
     "icon": "😴",
     "kicker": "Start here",
     "title": "You spend about a third of your life asleep, and scientists still debate exactly why.",
     "text": "What we do know is surprisingly practical."
    },
    {
     "t": "fact",
     "icon": "😴",
     "kicker": "The idea",
     "title": "Sleep runs in cycles",
     "text": "A night is made of cycles of about 90 minutes. Each one moves through light sleep, deep sleep and dreaming (REM) sleep. You pass through four to six cycles a night."
    },
    {
     "t": "quiz",
     "q": "Which part of the night has the most deep sleep?",
     "opts": [
      "The first half",
      "The second half",
      "It is spread evenly"
     ],
     "a": 0,
     "why": "Deep sleep is front-loaded. REM, where most vivid dreams happen, grows longer toward morning. Cutting the end of your night costs you REM."
    },
    {
     "t": "fact",
     "icon": "😴",
     "kicker": "The idea",
     "title": "Two clocks run your sleep",
     "text": "One is your body clock, a rhythm of about 24 hours that follows light and dark. The other is sleep pressure: a chemical called adenosine builds up the longer you are awake and makes you drowsy.",
     "stat": "Adenosine",
     "statLabel": "A chemical that builds up while you are awake."
    },
    {
     "t": "fact",
     "icon": "😴",
     "kicker": "Key number",
     "title": "Sleep that guidelines recommend for most adults, with at least 7 as the floor.",
     "text": "Needs vary from person to person, and the feeling of being rested matters too.",
     "stat": "7 to 9 h",
     "statLabel": ""
    },
    {
     "t": "fact",
     "icon": "😴",
     "kicker": "The idea",
     "title": "The overnight shift",
     "text": "Sleep helps the brain file away the day’s memories and strengthen the ones that matter. In animal studies, the brain also clears waste products more efficiently during sleep."
    },
    {
     "t": "quiz",
     "q": "Why can a late coffee ruin your night?",
     "opts": [
      "It blocks adenosine, the signal of sleep pressure",
      "It resets your body clock by hours",
      "It raises your body temperature for the night"
     ],
     "a": 0,
     "why": "Caffeine blocks adenosine’s receptors, so you feel less tired even though the pressure is still building. It takes around five hours for half of it to leave your body."
    },
    {
     "t": "est",
     "q": "How long is one typical sleep cycle?",
     "min": 30,
     "max": 180,
     "unit": " minutes",
     "answer": 90,
     "why": "It varies from roughly 80 to 110 minutes. That is why waking between cycles can feel easier than waking in the middle of one."
    },
    {
     "t": "fact",
     "icon": "✅",
     "kicker": "Recap",
     "title": "What you now know",
     "text": "Sleep is cycles of about 90 minutes, four to six a night. Deep sleep comes early, REM sleep comes late. Body clock plus sleep pressure decide when you feel sleepy. Caffeine hides sleep pressure rather than removing it."
    }
   ]
  },
  {
   "id": "evolution",
   "area": "science",
   "emoji": "🧬",
   "title": "How evolution works",
   "blurb": "A filter that never stops running",
   "cards": [
    {
     "t": "fact",
     "icon": "🧬",
     "kicker": "Start here",
     "title": "Evolution is not a ladder toward a perfect animal. It is a filter that never stops running.",
     "text": "Three simple ingredients are enough."
    },
    {
     "t": "fact",
     "icon": "🧬",
     "kicker": "The idea",
     "title": "Three ingredients",
     "text": "Variation: individuals in a group differ from each other. Heredity: some of those differences are passed to offspring. Different success: some versions leave more offspring than others. Put those together and a population changes over generations."
    },
    {
     "t": "quiz",
     "q": "Did giraffes get long necks because each giraffe stretched for leaves and passed the stretch on?",
     "opts": [
      "Yes, stretching is inherited",
      "No, longer-necked individuals did better, so the trait spread",
      "Only male giraffes changed"
     ],
     "a": 1,
     "why": "Traits you gain in life are not passed on like that. Over many generations, individuals with longer necks left more offspring, so the average changed."
    },
    {
     "t": "fact",
     "icon": "🧬",
     "kicker": "The idea",
     "title": "Mutation is random, selection is not",
     "text": "New mutations appear by chance, with no regard for what would help. A newborn human carries around 70 new ones. Selection is the opposite of random. Variants that help survival and reproduction in that environment become more common.",
     "stat": "Mutation",
     "statLabel": "A random change in DNA."
    },
    {
     "t": "fact",
     "icon": "🧬",
     "kicker": "Key number",
     "title": "How fast some bacteria can double in ideal lab conditions.",
     "text": "Fast generations mean fast evolution. It is how antibiotic resistance spreads.",
     "stat": "20 min",
     "statLabel": ""
    },
    {
     "t": "fact",
     "icon": "🧬",
     "kicker": "The idea",
     "title": "“Fitness” means offspring",
     "text": "In biology, fitness is not strength. It is how many descendants a trait leaves behind in a given environment. Peppered moths in industrial Britain: dark forms became common when soot darkened tree bark, then rare again after clean air laws."
    },
    {
     "t": "quiz",
     "q": "What does “survival of the fittest” really mean?",
     "opts": [
      "The strongest animals win fights",
      "Traits that leave more offspring in an environment become more common",
      "Species improve toward a goal"
     ],
     "a": 1,
     "why": "There is no goal. What counts as fit depends on the environment, and environments change."
    },
    {
     "t": "est",
     "q": "What percentage of the aligned DNA letters do humans share with chimpanzees?",
     "min": 50,
     "max": 100,
     "unit": "%",
     "answer": 98.8,
     "why": "Small percentages of difference still add up to tens of millions of letters, and where they sit matters as much as how many there are."
    },
    {
     "t": "fact",
     "icon": "✅",
     "kicker": "Recap",
     "title": "What you now know",
     "text": "Variation, heredity and different success are enough to drive change. Mutations are random, selection is not. Fitness means leaving descendants, not being strong. There is no goal or ladder, only fit to a changing environment."
    }
   ]
  },
  {
   "id": "encryption",
   "area": "tech",
   "emoji": "🔐",
   "title": "How encryption keeps secrets",
   "blurb": "Locks anyone can close and only you can open",
   "cards": [
    {
     "t": "fact",
     "icon": "🔐",
     "kicker": "Start here",
     "title": "You can send a secret to someone you have never met, over a channel everyone can watch.",
     "text": "Mathematics makes that possible."
    },
    {
     "t": "fact",
     "icon": "🔐",
     "kicker": "The idea",
     "title": "The old problem",
     "text": "Traditional encryption uses one shared secret key to lock and unlock messages. But before you can use it, you and your friend must agree on the key, and you cannot send it safely over a channel someone is watching.",
     "stat": "Key",
     "statLabel": "A secret number used to lock or unlock data."
    },
    {
     "t": "fact",
     "icon": "🔐",
     "kicker": "The idea",
     "title": "Two keys, not one",
     "text": "In the 1970s a new idea appeared: a pair of keys. The public key can be given to anyone. The private key never leaves you. Think of a padlock you hand out open. Anyone can snap it shut, but only you have the key to open it."
    },
    {
     "t": "quiz",
     "q": "You want to send Alice a secret. What do you lock it with?",
     "opts": [
      "Your private key",
      "Alice’s public key",
      "Alice’s private key"
     ],
     "a": 1,
     "why": "Anyone can lock with Alice’s public key. Only Alice, holding the matching private key, can unlock it. You never need to have met."
    },
    {
     "t": "fact",
     "icon": "🔐",
     "kicker": "The idea",
     "title": "Maths that only goes one way",
     "text": "Multiplying two huge prime numbers is easy. Starting from the answer and finding the two primes is, as far as anyone knows, extremely hard. RSA, one of the first public-key systems, builds on that gap, using numbers hundreds of digits long."
    },
    {
     "t": "fact",
     "icon": "🔐",
     "kicker": "The idea",
     "title": "What the padlock in your browser does",
     "text": "Your browser uses public-key maths for a quick handshake to agree on a fresh secret key with the website. After that, both sides switch to the faster one-key encryption for the actual page."
    },
    {
     "t": "fact",
     "icon": "🔐",
     "kicker": "Key number",
     "title": "The year Diffie and Hellman published public-key ideas to the world.",
     "text": "Mathematicians at Britain’s GCHQ had found it a few years earlier, but it was secret until 1997.",
     "stat": "1976",
     "statLabel": ""
    },
    {
     "t": "quiz",
     "q": "Why does your browser switch to a shared key after the handshake?",
     "opts": [
      "One-key encryption is much faster for large amounts of data",
      "Public keys expire after a few seconds",
      "Websites cannot store public keys"
     ],
     "a": 0,
     "why": "Public-key maths is slow. Using it just to agree on a key, and then one-key encryption for the data, gets security and speed."
    },
    {
     "t": "fact",
     "icon": "✅",
     "kicker": "Recap",
     "title": "What you now know",
     "text": "Shared keys have a delivery problem: how do you hand over the key safely? Public keys can be shared openly, private keys stay secret. It relies on maths that is easy one way and very hard the other. HTTPS uses both: slow public keys to agree, fast shared keys for the data."
    }
   ]
  },
  {
   "id": "printing",
   "area": "history",
   "emoji": "📜",
   "title": "The printing press",
   "blurb": "The machine that sped up ideas",
   "cards": [
    {
     "t": "fact",
     "icon": "📜",
     "kicker": "Start here",
     "title": "Around 1450 a single book took a scribe months to copy. Within one lifetime, that changed completely.",
     "text": "And Gutenberg was not the first to print with movable type."
    },
    {
     "t": "quiz",
     "q": "Who first used movable type?",
     "opts": [
      "Johannes Gutenberg",
      "Printers in China, about 400 years earlier",
      "Venetian merchants"
     ],
     "a": 1,
     "why": "Bi Sheng made movable clay type in China around 1040, and Korea printed with metal type in the 1300s. Gutenberg’s achievement was putting the pieces together into a system that scaled in Europe."
    },
    {
     "t": "fact",
     "icon": "📜",
     "kicker": "The idea",
     "title": "What Gutenberg combined",
     "text": "Around 1450 in Mainz, he brought together a press adapted from wine presses, an oil-based ink that stuck to metal, and a mould for casting metal letters quickly and consistently. The Latin alphabet, with few letters, suited movable type well."
    },
    {
     "t": "fact",
     "icon": "📜",
     "kicker": "Key number",
     "title": "Copies of the Gutenberg Bible printed, of which around 49 survive today in whole or in part.",
     "text": "Each one still had to be hand-decorated by its buyer.",
     "stat": "~180",
     "statLabel": ""
    },
    {
     "t": "fact",
     "icon": "📜",
     "kicker": "The idea",
     "title": "Books got cheap",
     "text": "A press could produce in days what a scribe produced in a year. The price of a book fell sharply. Printing shops spread across hundreds of European towns. Venice became a hub, where Aldus Manutius made small, portable books."
    },
    {
     "t": "fact",
     "icon": "📜",
     "kicker": "The idea",
     "title": "Ideas travelled faster",
     "text": "Luther’s criticisms of the church in 1517 were printed and spread across Germany within weeks. Scientists could share identical diagrams and tables, so the next person could build on exactly the same figure."
    },
    {
     "t": "quiz",
     "q": "What was Gutenberg’s real breakthrough?",
     "opts": [
      "Inventing the very idea of printing",
      "Combining oil-based ink, a press and mass-produced metal type into one system",
      "Inventing paper"
     ],
     "a": 1,
     "why": "Printing existed already. What was new was a practical, repeatable, scalable system."
    },
    {
     "t": "est",
     "q": "About how many different editions of books had been printed in Europe by 1500?",
     "min": 1000,
     "max": 1000000,
     "log": true,
     "unit": " editions",
     "answer": 30000,
     "why": "Almost 30,000 editions by 1500, from presses in some 280 cities. Fifty years earlier, every copy of every book had been written out by hand."
    },
    {
     "t": "fact",
     "icon": "✅",
     "kicker": "Recap",
     "title": "What you now know",
     "text": "Movable type was used in China and Korea centuries before Gutenberg. Gutenberg joined ink, press and cast metal type into a scalable system. Books became cheaper and printing shops spread widely. Ideas, from religion to science, moved faster and in identical form."
    }
   ]
  },
  {
   "id": "silk-road",
   "area": "history",
   "emoji": "🐪",
   "title": "The Silk Road",
   "blurb": "Not one road, and not just silk",
   "cards": [
    {
     "t": "fact",
     "icon": "🐪",
     "kicker": "Start here",
     "title": "Silk, paper and plague all travelled the same routes. Almost nobody travelled the whole way.",
     "text": "It was a relay, not a highway."
    },
    {
     "t": "fact",
     "icon": "🐪",
     "kicker": "The idea",
     "title": "A network, not a road",
     "text": "The name was coined in 1877 by the German geographer Ferdinand von Richthofen. It stands for a web of land and sea routes linking China, Central Asia, Persia, Arabia and the Mediterranean. The Han dynasty’s envoy Zhang Qian opened up the westward links in the 130s BCE."
    },
    {
     "t": "quiz",
     "q": "Who gave the Silk Road its name?",
     "opts": [
      "Marco Polo",
      "A 19th-century German geographer",
      "A Han emperor"
     ],
     "a": 1,
     "why": "Nobody at the time called it that. Traders thought in terms of their own stretch of the journey."
    },
    {
     "t": "fact",
     "icon": "🐪",
     "kicker": "The idea",
     "title": "Trade as a relay",
     "text": "Goods passed from merchant to merchant, each adding their cut. The Sogdians of Central Asia were famous middlemen. By the time silk reached Rome, it was a luxury so expensive that writers like Pliny the Elder complained about the wealth flowing out of the empire."
    },
    {
     "t": "fact",
     "icon": "🐪",
     "kicker": "The idea",
     "title": "Much more than silk",
     "text": "Buddhism travelled east into China. Paper, and later gunpowder and the compass, travelled west. Horses, grapes, glassware and spices moved in all directions. According to tradition, papermaking reached the Islamic world after a clash at Talas in 751."
    },
    {
     "t": "fact",
     "icon": "🐪",
     "kicker": "Key number",
     "title": "The year the Black Death arrived by ship at Mediterranean ports.",
     "text": "The plague bacterium is widely thought to have spread along trade routes like these.",
     "stat": "1347",
     "statLabel": ""
    },
    {
     "t": "quiz",
     "q": "Why did few merchants travel the whole route?",
     "opts": [
      "It was illegal",
      "Goods changed hands in relays across many regions and middlemen",
      "The roads only went one way"
     ],
     "a": 1,
     "why": "Different regions, languages, rulers and climates made it easier to trade over a stretch you knew."
    },
    {
     "t": "est",
     "q": "About how long was the main overland route of the Silk Road?",
     "min": 1000,
     "max": 15000,
     "unit": " km",
     "answer": 6400,
     "why": "That is roughly 4,000 miles, with many branches and side routes, across deserts and mountain passes."
    },
    {
     "t": "fact",
     "icon": "✅",
     "kicker": "Recap",
     "title": "What you now know",
     "text": "“Silk Road” is a modern name for many routes. Goods moved in relays, not on single journeys. Religions, technologies and diseases moved along with the goods. The network linked Asia, the Middle East and Europe for well over a thousand years."
    }
   ]
  },
  {
   "id": "languages",
   "area": "history",
   "emoji": "🗣️",
   "title": "Why languages change",
   "blurb": "Why “knight” has a silent k",
   "cards": [
    {
     "t": "fact",
     "icon": "🗣️",
     "kicker": "Start here",
     "title": "Read a page of English from the year 1000 and you would swear it was another language. In a sense, it is.",
     "text": "Language never stands still."
    },
    {
     "t": "fact",
     "icon": "🗣️",
     "kicker": "The idea",
     "title": "Change is the default",
     "text": "Each generation pronounces things a little differently, and the shifts add up. Between about 1400 and 1700, English long vowels shifted dramatically in what is known as the Great Vowel Shift."
    },
    {
     "t": "quiz",
     "q": "Why does “knight” have a silent k?",
     "opts": [
      "People forgot how to spell it",
      "It used to be pronounced, then the sound dropped out but the spelling stayed",
      "French teachers added it"
     ],
     "a": 1,
     "why": "The k and the gh were once pronounced. Printing helped freeze spelling just as pronunciation kept moving on."
    },
    {
     "t": "fact",
     "icon": "🗣️",
     "kicker": "The idea",
     "title": "Languages come in families",
     "text": "English, Latin, Greek, Persian and Hindi, and many more, share a common ancestor now called Proto-Indo-European. Compare “mother” in English, “mater” in Latin and “matar” in Sanskrit, and “three”, “tres” and “trayas”."
    },
    {
     "t": "fact",
     "icon": "🗣️",
     "kicker": "The idea",
     "title": "Contact changes language",
     "text": "After the Norman Conquest in 1066, thousands of French words entered English. English farmers kept animal names: cow, pig and sheep. The French-speaking upper classes ate them: beef, pork and mutton."
    },
    {
     "t": "fact",
     "icon": "🗣️",
     "kicker": "Key number",
     "title": "Share of the world’s languages that are considered endangered.",
     "text": "Many have only a handful of speakers, and most of the world’s people speak a small number of big languages.",
     "stat": "~40%",
     "statLabel": ""
    },
    {
     "t": "quiz",
     "q": "Why do English, Latin and Hindi share similar words?",
     "opts": [
      "They borrowed from each other recently",
      "They descend from a common ancestor language",
      "It is coincidence"
     ],
     "a": 1,
     "why": "Regular sound changes between these languages are how scholars reconstruct the lost ancestor. The idea goes back to Sir William Jones in 1786."
    },
    {
     "t": "est",
     "q": "How many languages are spoken in the world today?",
     "min": 500,
     "max": 20000,
     "unit": " languages",
     "answer": 7000,
     "why": "The exact count depends on where you draw the line between a language and a dialect."
    },
    {
     "t": "fact",
     "icon": "✅",
     "kicker": "Recap",
     "title": "What you now know",
     "text": "Pronunciation drifts, and spelling often lags behind. Related languages descend from common ancestors. Conquest and trade bring in new words. About 7,000 languages exist, and many are endangered."
    }
   ]
  },
  {
   "id": "inflation",
   "area": "money",
   "emoji": "📈",
   "title": "Inflation",
   "blurb": "Why money buys less each year",
   "cards": [
    {
     "t": "fact",
     "icon": "📈",
     "kicker": "Start here",
     "title": "In Germany in 1923, at the worst point, prices doubled about every four days.",
     "text": "Normal inflation is much quieter, and still matters."
    },
    {
     "t": "fact",
     "icon": "📈",
     "kicker": "The idea",
     "title": "What inflation is",
     "text": "Inflation is a general rise in prices across the economy, which means each unit of money buys less. It is measured by tracking the cost of a representative basket of goods and services, such as bread, rent and petrol.",
     "stat": "CPI",
     "statLabel": "The consumer price index, the usual measure."
    },
    {
     "t": "quiz",
     "q": "Inflation runs at 2% a year. After 35 years, what would £100 buy in today’s terms?",
     "opts": [
      "About £50 worth",
      "About £30 worth",
      "About £70 worth"
     ],
     "a": 0,
     "why": "Prices roughly double in 35 years at 2%, so £100 buys what about £50 buys today. Small numbers compound."
    },
    {
     "t": "fact",
     "icon": "📈",
     "kicker": "The idea",
     "title": "What causes it",
     "text": "Demand-pull: too much spending chasing too few goods. Cost-push: a shock to costs, such as energy or supply chains. Expectations: if everyone expects prices to rise, they raise prices and wage demands themselves."
    },
    {
     "t": "fact",
     "icon": "📈",
     "kicker": "Key number",
     "title": "UK inflation in October 2022, a 41-year high.",
     "text": "Energy prices and supply disruption after the pandemic and the invasion of Ukraine drove much of it.",
     "stat": "11.1%",
     "statLabel": ""
    },
    {
     "t": "fact",
     "icon": "📈",
     "kicker": "The idea",
     "title": "Interest rates are the brake",
     "text": "Central banks raise interest rates to cool spending. Borrowing becomes dearer, so households and firms spend less. The Bank of England raised its rate from a record low of 0.1% to 5.25% by August 2023."
    },
    {
     "t": "quiz",
     "q": "Wages rise 3% while prices rise 5%. What happens to buying power?",
     "opts": [
      "It rises",
      "It falls by about 2%",
      "It stays the same"
     ],
     "a": 1,
     "why": "Prices outran pay, so each pound of wages buys about 2% less. Economists call this a fall in real wages."
    },
    {
     "t": "est",
     "q": "At 7% inflation, about how many years until prices double?",
     "min": 1,
     "max": 40,
     "unit": " years",
     "answer": 10,
     "why": "The rule of 72 again: 72 divided by 7 is about 10."
    },
    {
     "t": "fact",
     "icon": "✅",
     "kicker": "Recap",
     "title": "What you now know",
     "text": "Inflation is a general rise in prices, measured with a basket of goods. Small yearly rates add up to big changes over decades. Demand, costs and expectations can all push prices up. Higher interest rates are the main tool for cooling it down."
    }
   ]
  }
];
