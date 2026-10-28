/* Curio content. Card types:
   hook    {text, sub}                          one big statement
   idea    {title, body:[...], term:{k,v}}      a short explanation
   num     {big, label, note}                   one number worth remembering
   choice  {mode:'guess'|'check', q, opts, a, why}   pick before (guess) or after (check) learning it
   est     {q, min, max, step, unit, ans, shown, why}  slide to estimate, then reveal
   recap   {points:[...]}                       what you now know
*/
window.CURIO = {
  areas: [
    { id: 'science', name: 'Science and nature', bg: '#1F3FBF', tint: '#BCCBFF' },
    { id: 'tech', name: 'Tech and AI', bg: '#5B2FC9', tint: '#D4C3FF' },
    { id: 'history', name: 'History and culture', bg: '#8A4B12', tint: '#F4CFA0' },
    { id: 'mind', name: 'Money and thinking', bg: '#0B6B5E', tint: '#A9EBDD' }
  ],
  topics: [
    /* ---------------------------------------------------------------- SCIENCE */
    {
      id: 'black-holes', area: 'science', title: 'Black holes', blurb: 'The edge you can never come back from',
      cards: [
        { t: 'hook', text: 'Nothing that crosses a black hole’s edge can come back out. Not even light.', sub: 'So how can something this extreme be real?' },
        { t: 'idea', title: 'Gravity is bent space', body: ['Einstein’s general relativity says mass bends space and time, and objects simply follow the curves.', 'A black hole is mass squeezed so tightly that the curve becomes a one-way drop.'] },
        { t: 'choice', mode: 'guess', q: 'Swap the Sun for a black hole of the same mass. What happens to Earth’s orbit?', opts: ['Earth is sucked in at once', 'Nothing changes about the orbit', 'Earth flies off into space'], a: 1, why: 'Gravity depends on mass and distance, not on how squeezed the mass is. Same mass, same orbit. We would just be cold and in the dark.' },
        { t: 'idea', title: 'The point of no return', body: ['The boundary is called the event horizon. It sits where the speed needed to escape equals the speed of light.', 'Nothing travels faster than light, so nothing escapes from inside.'], term: { k: 'Event horizon', v: 'The one-way edge around a black hole.' } },
        { t: 'num', big: '3 km', label: 'Radius of the event horizon of a black hole with the Sun’s mass.', note: 'To become a black hole, Earth would have to be squeezed to a radius of about 9 millimetres.' },
        { t: 'idea', title: 'How do we see the invisible?', body: ['We watch what is around it: stars whipping around an unseen centre, and hot gas glowing as it falls in.', 'In 2015 detectors felt ripples in space from two black holes merging. In 2019 and 2022 the Event Horizon Telescope imaged the shadows of two more.'] },
        { t: 'est', q: 'How many times the Sun’s mass is the black hole at the centre of our galaxy?', min: 0, max: 100, step: 1, unit: 'million Suns', ans: 4.3, shown: 'about 4.3 million Suns', why: 'It is called Sagittarius A*. We tracked stars orbiting it for decades to weigh it.' },
        { t: 'choice', mode: 'check', q: 'What defines the event horizon?', opts: ['The surface of a solid object', 'Where escape speed reaches the speed of light', 'The exact centre of the black hole'], a: 1, why: 'It is not a surface. It is a boundary in space, and you would not feel anything special crossing it.' },
        { t: 'recap', points: ['Mass bends space, and a black hole bends it into a one-way drop.', 'From far away, a black hole pulls just like any object of the same mass.', 'The event horizon is the edge where even light cannot get out.', 'We find black holes by their effects on stars, gas and space itself.'] }
      ]
    },
    {
      id: 'sleep', area: 'science', title: 'The science of sleep', blurb: 'What your brain does while you are out',
      cards: [
        { t: 'hook', text: 'You spend about a third of your life asleep, and scientists still debate exactly why.', sub: 'What we do know is surprisingly practical.' },
        { t: 'idea', title: 'Sleep runs in cycles', body: ['A night is made of cycles of about 90 minutes. Each one moves through light sleep, deep sleep and dreaming (REM) sleep.', 'You pass through four to six cycles a night.'] },
        { t: 'choice', mode: 'guess', q: 'Which part of the night has the most deep sleep?', opts: ['The first half', 'The second half', 'It is spread evenly'], a: 0, why: 'Deep sleep is front-loaded. REM, where most vivid dreams happen, grows longer toward morning. Cutting the end of your night costs you REM.' },
        { t: 'idea', title: 'Two clocks run your sleep', body: ['One is your body clock, a rhythm of about 24 hours that follows light and dark.', 'The other is sleep pressure: a chemical called adenosine builds up the longer you are awake and makes you drowsy.'], term: { k: 'Adenosine', v: 'A chemical that builds up while you are awake.' } },
        { t: 'num', big: '7 to 9 h', label: 'Sleep that guidelines recommend for most adults, with at least 7 as the floor.', note: 'Needs vary from person to person, and the feeling of being rested matters too.' },
        { t: 'idea', title: 'The overnight shift', body: ['Sleep helps the brain file away the day’s memories and strengthen the ones that matter.', 'In animal studies, the brain also clears waste products more efficiently during sleep.'] },
        { t: 'choice', mode: 'check', q: 'Why can a late coffee ruin your night?', opts: ['It blocks adenosine, the signal of sleep pressure', 'It resets your body clock by hours', 'It raises your body temperature for the night'], a: 0, why: 'Caffeine blocks adenosine’s receptors, so you feel less tired even though the pressure is still building. It takes around five hours for half of it to leave your body.' },
        { t: 'est', q: 'How long is one typical sleep cycle?', min: 30, max: 180, step: 5, unit: 'minutes', ans: 90, shown: 'about 90 minutes', why: 'It varies from roughly 80 to 110 minutes. That is why waking between cycles can feel easier than waking in the middle of one.' },
        { t: 'recap', points: ['Sleep is cycles of about 90 minutes, four to six a night.', 'Deep sleep comes early, REM sleep comes late.', 'Body clock plus sleep pressure decide when you feel sleepy.', 'Caffeine hides sleep pressure rather than removing it.'] }
      ]
    },
    {
      id: 'evolution', area: 'science', title: 'How evolution works', blurb: 'A filter that never stops running',
      cards: [
        { t: 'hook', text: 'Evolution is not a ladder toward a perfect animal. It is a filter that never stops running.', sub: 'Three simple ingredients are enough.' },
        { t: 'idea', title: 'Three ingredients', body: ['Variation: individuals in a group differ from each other.', 'Heredity: some of those differences are passed to offspring.', 'Different success: some versions leave more offspring than others.', 'Put those together and a population changes over generations.'] },
        { t: 'choice', mode: 'guess', q: 'Did giraffes get long necks because each giraffe stretched for leaves and passed the stretch on?', opts: ['Yes, stretching is inherited', 'No, longer-necked individuals did better, so the trait spread', 'Only male giraffes changed'], a: 1, why: 'Traits you gain in life are not passed on like that. Over many generations, individuals with longer necks left more offspring, so the average changed.' },
        { t: 'idea', title: 'Mutation is random, selection is not', body: ['New mutations appear by chance, with no regard for what would help. A newborn human carries around 70 new ones.', 'Selection is the opposite of random. Variants that help survival and reproduction in that environment become more common.'], term: { k: 'Mutation', v: 'A random change in DNA.' } },
        { t: 'num', big: '20 min', label: 'How fast some bacteria can double in ideal lab conditions.', note: 'Fast generations mean fast evolution. It is how antibiotic resistance spreads.' },
        { t: 'idea', title: '“Fitness” means offspring', body: ['In biology, fitness is not strength. It is how many descendants a trait leaves behind in a given environment.', 'Peppered moths in industrial Britain: dark forms became common when soot darkened tree bark, then rare again after clean air laws.'] },
        { t: 'choice', mode: 'check', q: 'What does “survival of the fittest” really mean?', opts: ['The strongest animals win fights', 'Traits that leave more offspring in an environment become more common', 'Species improve toward a goal'], a: 1, why: 'There is no goal. What counts as fit depends on the environment, and environments change.' },
        { t: 'est', q: 'What percentage of the aligned DNA letters do humans share with chimpanzees?', min: 50, max: 100, step: 0.5, unit: '%', ans: 98.8, shown: 'about 98.8%', why: 'Small percentages of difference still add up to tens of millions of letters, and where they sit matters as much as how many there are.' },
        { t: 'recap', points: ['Variation, heredity and different success are enough to drive change.', 'Mutations are random, selection is not.', 'Fitness means leaving descendants, not being strong.', 'There is no goal or ladder, only fit to a changing environment.'] }
      ]
    },
    /* ------------------------------------------------------------------ TECH */
    {
      id: 'internet', area: 'tech', title: 'How the internet works', blurb: 'Packets, addresses and a lot of cable',
      cards: [
        { t: 'hook', text: 'When you open a webpage, your request crosses many machines in a fraction of a second. No single machine plans the route.', sub: 'Here is the trick that makes it work.' },
        { t: 'idea', title: 'Everything is chopped into packets', body: ['Data is split into small packets, each labelled with where it is going.', 'The packets travel separately, maybe by different routes, and are put back together at the other end.'], term: { k: 'Packet', v: 'A small labelled chunk of data.' } },
        { t: 'choice', mode: 'guess', q: 'One packet is lost on the way. What happens?', opts: ['The whole page fails to load', 'The missing packet is noticed and sent again', 'The page shows with a gap'], a: 1, why: 'The receiving end tracks what has arrived and asks for what is missing. That is why pages load completely even over a bad connection, just slower.' },
        { t: 'idea', title: 'Addresses and the phone book', body: ['Every connected device has an IP address, a number that says where it is on the network.', 'DNS is the internet’s phone book. It turns a name like example.com into the number your computer needs.'], term: { k: 'DNS', v: 'Turns names into numbers.' } },
        { t: 'idea', title: 'Routers pass the parcel', body: ['A router looks at the destination of each packet and hands it to the next router that is closer.', 'If a link breaks, packets are simply routed another way.'] },
        { t: 'num', big: '95%+', label: 'Share of international internet traffic that travels through undersea cables, not satellites.', note: 'There are hundreds of these cables, some as thin as a garden hose.' },
        { t: 'choice', mode: 'check', q: 'What does DNS do?', opts: ['Encrypts your traffic', 'Translates names into IP addresses', 'Stores copies of websites'], a: 1, why: 'It only looks up addresses. Encryption is a separate layer that sits on top.' },
        { t: 'est', q: 'What is the best possible round-trip time of a signal between London and New York through fibre?', min: 0, max: 300, step: 5, unit: 'milliseconds', ans: 56, shown: 'about 56 ms', why: 'Light in glass travels at about two thirds of its speed in empty space. Real-world connections take longer, around 70 to 80 ms, because of routing and equipment.' },
        { t: 'recap', points: ['Data travels as small labelled packets.', 'Lost packets are noticed and resent.', 'DNS turns names into addresses, routers pass packets closer to them.', 'Most intercontinental traffic runs through cables on the seabed.'] }
      ]
    },
    {
      id: 'llms', area: 'tech', title: 'How AI chatbots work', blurb: 'Prediction, patterns and why they get things wrong',
      cards: [
        { t: 'hook', text: 'A language model does not look up answers. It predicts the next piece of text, over and over.', sub: 'That one idea explains both what it does well and where it goes wrong.' },
        { t: 'idea', title: 'Text becomes tokens', body: ['The text is split into tokens: whole words or pieces of words.', 'For every token, the model works out a probability for each possible next token, picks one, and repeats.'], term: { k: 'Token', v: 'A word or piece of a word.' } },
        { t: 'choice', mode: 'guess', q: 'What is a model trained to do first, before it becomes a chatbot?', opts: ['Memorise question and answer pairs', 'Predict the next token in huge amounts of text', 'Follow rules written by programmers'], a: 1, why: 'Guessing the next token across enormous amounts of text forces it to pick up grammar, facts and patterns of reasoning along the way.' },
        { t: 'idea', title: 'Billions of dials', body: ['A model is a huge set of numbers called parameters. Training nudges them, again and again, so the predictions get less wrong.', 'The key design, the transformer, lets each token weigh how relevant every other token is. That is called attention.'], term: { k: 'Parameters', v: 'The numbers a model learns during training.' } },
        { t: 'num', big: '2017', label: 'The year a Google team published “Attention Is All You Need”, introducing the transformer.', note: 'Almost every major chatbot today is built on it.' },
        { t: 'idea', title: 'From predictor to assistant', body: ['A raw predictor just continues text. To make it useful, it is trained further on examples of helpful answers and on human feedback about which answers are better.', 'That is why it follows instructions instead of rambling on.'] },
        { t: 'choice', mode: 'check', q: 'Why can a model state something false with total confidence?', opts: ['It is lying on purpose', 'It produces likely-sounding text, which is not the same as checked facts', 'Its internet connection failed'], a: 1, why: 'Fluent and true are different things. It is worth checking anything important, especially numbers, quotes and sources.' },
        { t: 'est', q: 'On average, how many letters of English text make up one token?', min: 1, max: 10, step: 0.5, unit: 'letters', ans: 4, shown: 'about 4 letters', why: 'A common rule of thumb: one token is about four characters, or three quarters of a word.' },
        { t: 'recap', points: ['A model predicts the next token, one token at a time.', 'Training adjusts billions of numbers to predict better.', 'Extra training turns a predictor into an assistant.', 'Fluent is not the same as correct, so check what matters.'] }
      ]
    },
    {
      id: 'encryption', area: 'tech', title: 'How encryption keeps secrets', blurb: 'Locks anyone can close and only you can open',
      cards: [
        { t: 'hook', text: 'You can send a secret to someone you have never met, over a channel everyone can watch.', sub: 'Mathematics makes that possible.' },
        { t: 'idea', title: 'The old problem', body: ['Traditional encryption uses one shared secret key to lock and unlock messages.', 'But before you can use it, you and your friend must agree on the key, and you cannot send it safely over a channel someone is watching.'], term: { k: 'Key', v: 'A secret number used to lock or unlock data.' } },
        { t: 'idea', title: 'Two keys, not one', body: ['In the 1970s a new idea appeared: a pair of keys. The public key can be given to anyone. The private key never leaves you.', 'Think of a padlock you hand out open. Anyone can snap it shut, but only you have the key to open it.'] },
        { t: 'choice', mode: 'guess', q: 'You want to send Alice a secret. What do you lock it with?', opts: ['Your private key', 'Alice’s public key', 'Alice’s private key'], a: 1, why: 'Anyone can lock with Alice’s public key. Only Alice, holding the matching private key, can unlock it. You never need to have met.' },
        { t: 'idea', title: 'Maths that only goes one way', body: ['Multiplying two huge prime numbers is easy. Starting from the answer and finding the two primes is, as far as anyone knows, extremely hard.', 'RSA, one of the first public-key systems, builds on that gap, using numbers hundreds of digits long.'] },
        { t: 'idea', title: 'What the padlock in your browser does', body: ['Your browser uses public-key maths for a quick handshake to agree on a fresh secret key with the website.', 'After that, both sides switch to the faster one-key encryption for the actual page.'] },
        { t: 'num', big: '1976', label: 'The year Diffie and Hellman published public-key ideas to the world.', note: 'Mathematicians at Britain’s GCHQ had found it a few years earlier, but it was secret until 1997.' },
        { t: 'choice', mode: 'check', q: 'Why does your browser switch to a shared key after the handshake?', opts: ['One-key encryption is much faster for large amounts of data', 'Public keys expire after a few seconds', 'Websites cannot store public keys'], a: 0, why: 'Public-key maths is slow. Using it just to agree on a key, and then one-key encryption for the data, gets security and speed.' },
        { t: 'recap', points: ['Shared keys have a delivery problem: how do you hand over the key safely?', 'Public keys can be shared openly, private keys stay secret.', 'It relies on maths that is easy one way and very hard the other.', 'HTTPS uses both: slow public keys to agree, fast shared keys for the data.'] }
      ]
    },
    /* --------------------------------------------------------------- HISTORY */
    {
      id: 'printing', area: 'history', title: 'The printing press', blurb: 'The machine that sped up ideas',
      cards: [
        { t: 'hook', text: 'Around 1450 a single book took a scribe months to copy. Within one lifetime, that changed completely.', sub: 'And Gutenberg was not the first to print with movable type.' },
        { t: 'choice', mode: 'guess', q: 'Who first used movable type?', opts: ['Johannes Gutenberg', 'Printers in China, about 400 years earlier', 'Venetian merchants'], a: 1, why: 'Bi Sheng made movable clay type in China around 1040, and Korea printed with metal type in the 1300s. Gutenberg’s achievement was putting the pieces together into a system that scaled in Europe.' },
        { t: 'idea', title: 'What Gutenberg combined', body: ['Around 1450 in Mainz, he brought together a press adapted from wine presses, an oil-based ink that stuck to metal, and a mould for casting metal letters quickly and consistently.', 'The Latin alphabet, with few letters, suited movable type well.'] },
        { t: 'num', big: '~180', label: 'Copies of the Gutenberg Bible printed, of which around 49 survive today in whole or in part.', note: 'Each one still had to be hand-decorated by its buyer.' },
        { t: 'idea', title: 'Books got cheap', body: ['A press could produce in days what a scribe produced in a year. The price of a book fell sharply.', 'Printing shops spread across hundreds of European towns. Venice became a hub, where Aldus Manutius made small, portable books.'] },
        { t: 'idea', title: 'Ideas travelled faster', body: ['Luther’s criticisms of the church in 1517 were printed and spread across Germany within weeks.', 'Scientists could share identical diagrams and tables, so the next person could build on exactly the same figure.'] },
        { t: 'choice', mode: 'check', q: 'What was Gutenberg’s real breakthrough?', opts: ['Inventing the very idea of printing', 'Combining oil-based ink, a press and mass-produced metal type into one system', 'Inventing paper'], a: 1, why: 'Printing existed already. What was new was a practical, repeatable, scalable system.' },
        { t: 'est', q: 'About how many printed books were in circulation in Europe by 1500?', min: 0, max: 100, step: 1, unit: 'million', ans: 20, shown: 'an estimated 20 million', why: 'Historians count roughly 30,000 different editions by then. Fifty years earlier, every copy of every book had been written out by hand.' },
        { t: 'recap', points: ['Movable type was used in China and Korea centuries before Gutenberg.', 'Gutenberg joined ink, press and cast metal type into a scalable system.', 'Books became cheaper and printing shops spread widely.', 'Ideas, from religion to science, moved faster and in identical form.'] }
      ]
    },
    {
      id: 'silk-road', area: 'history', title: 'The Silk Road', blurb: 'Not one road, and not just silk',
      cards: [
        { t: 'hook', text: 'Silk, paper and plague all travelled the same routes. Almost nobody travelled the whole way.', sub: 'It was a relay, not a highway.' },
        { t: 'idea', title: 'A network, not a road', body: ['The name was coined in 1877 by the German geographer Ferdinand von Richthofen. It stands for a web of land and sea routes linking China, Central Asia, Persia, Arabia and the Mediterranean.', 'The Han dynasty’s envoy Zhang Qian opened up the westward links in the 130s BCE.'] },
        { t: 'choice', mode: 'guess', q: 'Who gave the Silk Road its name?', opts: ['Marco Polo', 'A 19th-century German geographer', 'A Han emperor'], a: 1, why: 'Nobody at the time called it that. Traders thought in terms of their own stretch of the journey.' },
        { t: 'idea', title: 'Trade as a relay', body: ['Goods passed from merchant to merchant, each adding their cut. The Sogdians of Central Asia were famous middlemen.', 'By the time silk reached Rome, it was a luxury so expensive that writers like Pliny the Elder complained about the wealth flowing out of the empire.'] },
        { t: 'idea', title: 'Much more than silk', body: ['Buddhism travelled east into China. Paper, and later gunpowder and the compass, travelled west. Horses, grapes, glassware and spices moved in all directions.', 'According to tradition, papermaking reached the Islamic world after a clash at Talas in 751.'] },
        { t: 'num', big: '1347', label: 'The year the Black Death arrived by ship at Mediterranean ports.', note: 'The plague bacterium is widely thought to have spread along trade routes like these.' },
        { t: 'choice', mode: 'check', q: 'Why did few merchants travel the whole route?', opts: ['It was illegal', 'Goods changed hands in relays across many regions and middlemen', 'The roads only went one way'], a: 1, why: 'Different regions, languages, rulers and climates made it easier to trade over a stretch you knew.' },
        { t: 'est', q: 'About how long was the main overland route of the Silk Road?', min: 1000, max: 15000, step: 100, unit: 'km', ans: 6400, shown: 'about 6,400 km', why: 'That is roughly 4,000 miles, with many branches and side routes, across deserts and mountain passes.' },
        { t: 'recap', points: ['“Silk Road” is a modern name for many routes.', 'Goods moved in relays, not on single journeys.', 'Religions, technologies and diseases moved along with the goods.', 'The network linked Asia, the Middle East and Europe for well over a thousand years.'] }
      ]
    },
    {
      id: 'languages', area: 'history', title: 'Why languages change', blurb: 'Why “knight” has a silent k',
      cards: [
        { t: 'hook', text: 'Read a page of English from the year 1000 and you would swear it was another language. In a sense, it is.', sub: 'Language never stands still.' },
        { t: 'idea', title: 'Change is the default', body: ['Each generation pronounces things a little differently, and the shifts add up.', 'Between about 1400 and 1700, English long vowels shifted dramatically in what is known as the Great Vowel Shift.'] },
        { t: 'choice', mode: 'guess', q: 'Why does “knight” have a silent k?', opts: ['People forgot how to spell it', 'It used to be pronounced, then the sound dropped out but the spelling stayed', 'French teachers added it'], a: 1, why: 'The k and the gh were once pronounced. Printing helped freeze spelling just as pronunciation kept moving on.' },
        { t: 'idea', title: 'Languages come in families', body: ['English, Latin, Greek, Persian and Hindi, and many more, share a common ancestor now called Proto-Indo-European.', 'Compare “mother” in English, “mater” in Latin and “matar” in Sanskrit, and “three”, “tres” and “trayas”.'] },
        { t: 'idea', title: 'Contact changes language', body: ['After the Norman Conquest in 1066, thousands of French words entered English. English farmers kept animal names: cow, pig and sheep.', 'The French-speaking upper classes ate them: beef, pork and mutton.'] },
        { t: 'num', big: '~40%', label: 'Share of the world’s languages that are considered endangered.', note: 'Many have only a handful of speakers, and most of the world’s people speak a small number of big languages.' },
        { t: 'choice', mode: 'check', q: 'Why do English, Latin and Hindi share similar words?', opts: ['They borrowed from each other recently', 'They descend from a common ancestor language', 'It is coincidence'], a: 1, why: 'Regular sound changes between these languages are how scholars reconstruct the lost ancestor. The idea goes back to Sir William Jones in 1786.' },
        { t: 'est', q: 'How many languages are spoken in the world today?', min: 500, max: 20000, step: 100, unit: 'languages', ans: 7000, shown: 'about 7,000', why: 'The exact count depends on where you draw the line between a language and a dialect.' },
        { t: 'recap', points: ['Pronunciation drifts, and spelling often lags behind.', 'Related languages descend from common ancestors.', 'Conquest and trade bring in new words.', 'About 7,000 languages exist, and many are endangered.'] }
      ]
    },
    /* ------------------------------------------------------- MONEY AND THINKING */
    {
      id: 'compound', area: 'mind', title: 'Compound interest', blurb: 'Why time beats amount',
      cards: [
        { t: 'hook', text: 'Fold a sheet of paper 42 times and, on paper, the stack would reach the Moon.', sub: 'Doubling is the engine behind compound interest.' },
        { t: 'idea', title: 'Interest on interest', body: ['With simple interest, you earn on your starting amount only.', 'With compound interest, you also earn on the interest you already earned, so growth speeds up. The formula: end amount = start × (1 + rate) to the power of years.'] },
        { t: 'choice', mode: 'guess', q: '£1,000 grows at 7% a year for 30 years, untouched. About how much do you end with?', opts: ['About £3,100', 'About £7,600', 'About £21,000'], a: 1, why: '1,000 × 1.07 multiplied 30 times is about £7,612. Most people guess far lower, because we think in straight lines.' },
        { t: 'num', big: '72', label: 'The rule of 72: divide 72 by the yearly rate to get the years it takes to double.', note: 'At 6% a year, money doubles in about 12 years. At 9%, about 8.' },
        { t: 'idea', title: 'Time beats amount', body: ['Save £200 a month at a steady 7% a year from age 25 to 65, and you would end with about £525,000. Start at 35 and you would end with about £244,000.', 'Starting ten years later costs more than half the result, even though you pay in only a quarter less.'], term: { k: 'Assumption', v: 'A smooth 7% a year, before fees and tax. Real markets are bumpier.' } },
        { t: 'idea', title: 'It works against you on debt', body: ['The same maths runs in reverse on borrowing. At an interest rate of 20%, an unpaid balance doubles in about 3.6 years.', 'The rule of 72 works on costs as well as gains.'] },
        { t: 'choice', mode: 'check', q: 'Using the rule of 72, about how long does it take to double money at 9% a year?', opts: ['About 4 years', 'About 8 years', 'About 12 years'], a: 1, why: '72 divided by 9 is 8.' },
        { t: 'est', q: '£100 grows at 10% a year for 50 years. How many pounds is that at the end?', min: 0, max: 20000, step: 100, unit: '£', ans: 11739, shown: 'about £11,700', why: 'More than a hundredfold. Almost all of the gain arrives in the last decades.' },
        { t: 'recap', points: ['Compound interest means interest on interest.', 'Growth looks slow, then steep. Time matters more than size.', 'The rule of 72 gives a quick doubling time.', 'The same maths makes debt grow just as fast.'] }
      ]
    },
    {
      id: 'biases', area: 'mind', title: 'Cognitive biases', blurb: 'Shortcuts that usually work, until they don’t',
      cards: [
        { t: 'hook', text: 'Your brain is not broken when it makes these mistakes. It is using shortcuts that usually work.', sub: 'The trick is knowing when they do not.' },
        { t: 'idea', title: 'Two speeds of thinking', body: ['Psychologist Daniel Kahneman popularised the idea of a fast, automatic way of thinking, and a slow, deliberate one.', 'The fast one is usually right and always effortless. It is also the source of most of the biases that follow.'] },
        { t: 'choice', mode: 'guess', q: 'A bat and a ball cost £1.10 together. The bat costs £1 more than the ball. How much is the ball?', opts: ['10p', '5p', '1p'], a: 1, why: 'If the ball were 10p, the bat would be £1.10 and the total £1.20. The ball is 5p. The wrong answer, 10p, feels instantly right, and many people at top universities give it.' },
        { t: 'idea', title: 'Confirmation bias', body: ['We look for, notice and remember evidence that matches what we already believe.', 'In a classic 1960 task, people asked to find a hidden number rule mostly tested examples that fit their guess, rather than examples that could prove it wrong.'] },
        { t: 'idea', title: 'Anchoring', body: ['The first number we see pulls later estimates toward it, even if it is meaningless.', 'In a famous study, people first spun a wheel stopped at 10 or 65, then guessed the share of African countries in the UN. The 10 group guessed about 25%, the 65 group about 45%.'] },
        { t: 'idea', title: 'Availability', body: ['We judge how likely something is by how easily examples come to mind.', 'Dramatic events such as plane crashes stick in memory, so they feel more common than everyday risks such as car trips.'] },
        { t: 'choice', mode: 'check', q: 'Which of these is an example of anchoring?', opts: ['Feeling a £500 jacket is a bargain because the “was” price was £900', 'Only reading news that agrees with you', 'Believing a coin is “due” to land heads'], a: 0, why: 'The £900 is an anchor that makes £500 feel cheap, even though it tells you nothing about what the jacket is worth.' },
        { t: 'est', q: 'In a 1981 study, what percentage of US drivers rated themselves above the median driver?', min: 0, max: 100, step: 1, unit: '%', ans: 93, shown: '93%', why: 'It cannot be true for more than half. People tend to overrate themselves on most skills, a pattern called the better-than-average effect.' },
        { t: 'recap', points: ['Fast thinking is efficient but error-prone in predictable ways.', 'Confirmation bias, anchoring and availability are three common ones.', 'Slowing down helps most when stakes are high and the answer feels obvious.', 'Knowing the biases does not remove them, but it helps you catch them.'] }
      ]
    },
    {
      id: 'inflation', area: 'mind', title: 'Inflation', blurb: 'Why money buys less each year',
      cards: [
        { t: 'hook', text: 'In Germany in 1923, at the worst point, prices doubled about every four days.', sub: 'Normal inflation is much quieter, and still matters.' },
        { t: 'idea', title: 'What inflation is', body: ['Inflation is a general rise in prices across the economy, which means each unit of money buys less.', 'It is measured by tracking the cost of a representative basket of goods and services, such as bread, rent and petrol.'], term: { k: 'CPI', v: 'The consumer price index, the usual measure.' } },
        { t: 'choice', mode: 'guess', q: 'Inflation runs at 2% a year. After 35 years, what would £100 buy in today’s terms?', opts: ['About £50 worth', 'About £30 worth', 'About £70 worth'], a: 0, why: 'Prices roughly double in 35 years at 2%, so £100 buys what about £50 buys today. Small numbers compound.' },
        { t: 'idea', title: 'What causes it', body: ['Demand-pull: too much spending chasing too few goods.', 'Cost-push: a shock to costs, such as energy or supply chains.', 'Expectations: if everyone expects prices to rise, they raise prices and wage demands themselves.'] },
        { t: 'num', big: '11.1%', label: 'UK inflation in October 2022, a 41-year high.', note: 'Energy prices and supply disruption after the pandemic and the invasion of Ukraine drove much of it.' },
        { t: 'idea', title: 'Interest rates are the brake', body: ['Central banks raise interest rates to cool spending. Borrowing becomes dearer, so households and firms spend less.', 'The Bank of England raised its rate from 0.1% in late 2021 to 5.25% by August 2023.'] },
        { t: 'choice', mode: 'check', q: 'Wages rise 3% while prices rise 5%. What happens to buying power?', opts: ['It rises', 'It falls by about 2%', 'It stays the same'], a: 1, why: 'Prices outran pay, so each pound of wages buys about 2% less. Economists call this a fall in real wages.' },
        { t: 'est', q: 'At 7% inflation, about how many years until prices double?', min: 1, max: 40, step: 1, unit: 'years', ans: 10, shown: 'about 10 years', why: 'The rule of 72 again: 72 divided by 7 is about 10.' },
        { t: 'recap', points: ['Inflation is a general rise in prices, measured with a basket of goods.', 'Small yearly rates add up to big changes over decades.', 'Demand, costs and expectations can all push prices up.', 'Higher interest rates are the main tool for cooling it down.'] }
      ]
    }
  ]
};
