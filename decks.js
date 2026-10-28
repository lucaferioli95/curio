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
  }
];
