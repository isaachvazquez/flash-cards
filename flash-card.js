(() => {
  const nextButton = document.querySelector('#next');
  const flipButton = document.querySelector('#flip');

  nextButton.addEventListener('click', (e) => {
    // Get new word and add to card
    const newWord = getRandomWord(words);
    updateFlashCard(newWord);
  });

  flipButton.addEventListener('click', (e) => {
    // Toggle 'active' class from flash-card:not(.flash-card--answer)
    flipCard();
  });

  function getRandomWord(wordArray) {
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    return words[randomIndex];
  }

  function flipCard() {
    const front = document.querySelector('.flash-card:not(.flash-card--answer)');
    const action = front.classList.contains('active') ? 'remove' : 'add';

    front.classList[action]('active');
  }

  function updateFlashCard(word) {
    const flashCard = document.querySelector('.flash-card:not(.flash-card--answer)');
    const wordPlaceholder = document.querySelector('.flash-card:not(.flash-card--answer) .word');
    const translationPlaceholder = document.querySelector('.flash-card--answer .translation');
    const translationsPlaceholder = document.querySelector('.flash-card--answer .other-translations');
    const hasMultipleTranslations = word.translations.length > 1 ? 'add' : 'remove';

    wordPlaceholder.innerText = word.spanish;
    translationPlaceholder.innerText = word.english;
    translationsPlaceholder.innerText = word.translations.join(', ');

    flashCard.classList.add('active');
    wordPlaceholder.classList[hasMultipleTranslations]('multiple-translations');
  }


  const words = [
    {
      "spanish": "su",
      "english": "his",
      "number": "3",
      "translations": [
        "his",
        "their",
        "your",
        "her"
      ],
      "count": 4
    },
    {
      "spanish": "que",
      "english": "that",
      "number": "4",
      "translations": [
        "that",
        "which",
        "than",
        "who"
      ],
      "count": 4
    },
    {
      "spanish": "en",
      "english": "on",
      "number": "8",
      "translations": [
        "on",
        "at",
        "in"
      ],
      "count": 3
    },
    {
      "spanish": "caliente",
      "english": "hot",
      "number": "19",
      "translations": [
        "hot",
        "hot",
        "warm"
      ],
      "count": 3
    },
    {
      "spanish": "lugar",
      "english": "place",
      "number": "107",
      "translations": [
        "place",
        "stead",
        "spot"
      ],
      "count": 3
    },
    {
      "spanish": "hecho",
      "english": "made",
      "number": "108",
      "translations": [
        "made",
        "done",
        "fact"
      ],
      "count": 3
    },
    {
      "spanish": "como",
      "english": "as",
      "number": "1",
      "translations": [
        "as",
        "like"
      ],
      "count": 2
    },
    {
      "spanish": "él",
      "english": "he",
      "number": "5",
      "translations": [
        "he",
        "him"
      ],
      "count": 2
    },
    {
      "spanish": "ellos",
      "english": "they",
      "number": "11",
      "translations": [
        "they",
        "them"
      ],
      "count": 2
    },
    {
      "spanish": "desde",
      "english": "from",
      "number": "17",
      "translations": [
        "from",
        "since"
      ],
      "count": 2
    },
    {
      "spanish": "un",
      "english": "a",
      "number": "33",
      "translations": [
        "a",
        "an"
      ],
      "count": 2
    },
    {
      "spanish": "fuera",
      "english": "out",
      "number": "37",
      "translations": [
        "out",
        "off"
      ],
      "count": 2
    },
    {
      "spanish": "hacer",
      "english": "do",
      "number": "41",
      "translations": [
        "do",
        "make"
      ],
      "count": 2
    },
    {
      "spanish": "tiempo",
      "english": "time",
      "number": "43",
      "translations": [
        "time",
        "weather"
      ],
      "count": 2
    },
    {
      "spanish": "si",
      "english": "if",
      "number": "44",
      "translations": [
        "if",
        "whether"
      ],
      "count": 2
    },
    {
      "spanish": "dicho",
      "english": "said",
      "number": "47",
      "translations": [
        "said",
        "told"
      ],
      "count": 2
    },
    {
      "spanish": "cada",
      "english": "each",
      "number": "49",
      "translations": [
        "each",
        "every"
      ],
      "count": 2
    },
    {
      "spanish": "decir",
      "english": "tell",
      "number": "50",
      "translations": [
        "tell",
        "say"
      ],
      "count": 2
    },
    {
      "spanish": "hace",
      "english": "does",
      "number": "51",
      "translations": [
        "does",
        "ago"
      ],
      "count": 2
    },
    {
      "spanish": "así",
      "english": "well",
      "number": "56",
      "translations": [
        "well",
        "so"
      ],
      "count": 2
    },
    {
      "spanish": "pequeño",
      "english": "small",
      "number": "59",
      "translations": [
        "small",
        "tiny"
      ],
      "count": 2
    },
    {
      "spanish": "casa",
      "english": "home",
      "number": "62",
      "translations": [
        "home",
        "house"
      ],
      "count": 2
    },
    {
      "spanish": "grande",
      "english": "large",
      "number": "66",
      "translations": [
        "large",
        "big"
      ],
      "count": 2
    },
    {
      "spanish": "tierra",
      "english": "land",
      "number": "70",
      "translations": [
        "land",
        "earth"
      ],
      "count": 2
    },
    {
      "spanish": "tipo",
      "english": "kind",
      "number": "84",
      "translations": [
        "kind",
        "type"
      ],
      "count": 2
    },
    {
      "spanish": "padre",
      "english": "father",
      "number": "100",
      "translations": [
        "father",
        "parent"
      ],
      "count": 2
    },
    {
      "spanish": "trabajo",
      "english": "work",
      "number": "103",
      "translations": [
        "work",
        "job"
      ],
      "count": 2
    },
    {
      "spanish": "sólo",
      "english": "only",
      "number": "114",
      "translations": [
        "only",
        "just"
      ],
      "count": 2
    },
    {
      "spanish": "bajo",
      "english": "under",
      "number": "125",
      "translations": [
        "under",
        "low"
      ],
      "count": 2
    },
    {
      "spanish": "forma",
      "english": "form",
      "number": "130",
      "translations": [
        "form",
        "shape"
      ],
      "count": 2
    },
    {
      "spanish": "frase",
      "english": "sentence",
      "number": "131",
      "translations": [
        "sentence",
        "phrase"
      ],
      "count": 2
    },
    {
      "spanish": "gran",
      "english": "great",
      "number": "132",
      "translations": [
        "great",
        "grand"
      ],
      "count": 2
    },
    {
      "spanish": "mucho",
      "english": "much",
      "number": "141",
      "translations": [
        "much",
        "lot"
      ],
      "count": 2
    },
    {
      "spanish": "movimiento",
      "english": "move",
      "number": "144",
      "translations": [
        "move",
        "motion"
      ],
      "count": 2
    },
    {
      "spanish": "niño",
      "english": "boy",
      "number": "146",
      "translations": [
        "boy",
        "child"
      ],
      "count": 2
    },
    {
      "spanish": "todo",
      "english": "all",
      "number": "151",
      "translations": [
        "all",
        "whole"
      ],
      "count": 2
    },
    {
      "spanish": "hasta",
      "english": "up",
      "number": "154",
      "translations": [
        "up",
        "until"
      ],
      "count": 2
    },
    {
      "spanish": "camino",
      "english": "way",
      "number": "157",
      "translations": [
        "way",
        "path"
      ],
      "count": 2
    },
    {
      "spanish": "ver",
      "english": "see",
      "number": "171",
      "translations": [
        "see",
        "watch"
      ],
      "count": 2
    },
    {
      "spanish": "más",
      "english": "more",
      "number": "176",
      "translations": [
        "more",
        "most"
      ],
      "count": 2
    },
    {
      "spanish": "no",
      "english": "no",
      "number": "184",
      "translations": [
        "no",
        "don’t"
      ],
      "count": 2
    },
    {
      "spanish": "estado",
      "english": "been",
      "number": "198",
      "translations": [
        "been",
        "state"
      ],
      "count": 2
    },
    {
      "spanish": "ahora",
      "english": "now",
      "number": "199",
      "translations": [
        "now",
        "far"
      ],
      "count": 2
    },
    {
      "spanish": "entre",
      "english": "between",
      "number": "219",
      "translations": [
        "between",
        "among"
      ],
      "count": 2
    },
    {
      "spanish": "nunca",
      "english": "never",
      "number": "223",
      "translations": [
        "never",
        "ever"
      ],
      "count": 2
    },
    {
      "spanish": "último",
      "english": "last",
      "number": "224",
      "translations": [
        "last",
        "final"
      ],
      "count": 2
    },
    {
      "spanish": "dejar",
      "english": "let",
      "number": "225",
      "translations": [
        "let",
        "leave"
      ],
      "count": 2
    },
    {
      "spanish": "ciudad",
      "english": "city",
      "number": "227",
      "translations": [
        "city",
        "town"
      ],
      "count": 2
    },
    {
      "spanish": "historia",
      "english": "story",
      "number": "234",
      "translations": [
        "story",
        "history"
      ],
      "count": 2
    },
    {
      "spanish": "noche",
      "english": "night",
      "number": "246",
      "translations": [
        "night",
        "evening"
      ],
      "count": 2
    },
    {
      "spanish": "escuchar",
      "english": "hear",
      "number": "265",
      "translations": [
        "hear",
        "listen"
      ],
      "count": 2
    },
    {
      "spanish": "seguro",
      "english": "sure",
      "number": "268",
      "translations": [
        "sure",
        "safe"
      ],
      "count": 2
    },
    {
      "spanish": "completo",
      "english": "complete",
      "number": "333",
      "translations": [
        "complete",
        "full"
      ],
      "count": 2
    },
    {
      "spanish": "medio",
      "english": "half",
      "number": "336",
      "translations": [
        "half",
        "middle"
      ],
      "count": 2
    },
    {
      "spanish": "problema",
      "english": "problem",
      "number": "341",
      "translations": [
        "problem",
        "trouble"
      ],
      "count": 2
    },
    {
      "spanish": "pasar",
      "english": "pass",
      "number": "345",
      "translations": [
        "pass",
        "spend"
      ],
      "count": 2
    },
    {
      "spanish": "unidad",
      "english": "unit",
      "number": "401",
      "translations": [
        "unit",
        "drive"
      ],
      "count": 2
    },
    {
      "spanish": "caer",
      "english": "fall",
      "number": "407",
      "translations": [
        "fall",
        "drop"
      ],
      "count": 2
    },
    {
      "spanish": "grito",
      "english": "cry",
      "number": "409",
      "translations": [
        "cry",
        "shout"
      ],
      "count": 2
    },
    {
      "spanish": "rápido",
      "english": "quick",
      "number": "436",
      "translations": [
        "quick",
        "fast"
      ],
      "count": 2
    },
    {
      "spanish": "fuerte",
      "english": "strong",
      "number": "442",
      "translations": [
        "strong",
        "loud"
      ],
      "count": 2
    },
    {
      "spanish": "oído",
      "english": "heard",
      "number": "451",
      "translations": [
        "heard",
        "ear"
      ],
      "count": 2
    },
    {
      "spanish": "mejor",
      "english": "best",
      "number": "452",
      "translations": [
        "best",
        "better"
      ],
      "count": 2
    },
    {
      "spanish": "suelo",
      "english": "ground",
      "number": "464",
      "translations": [
        "ground",
        "soil"
      ],
      "count": 2
    },
    {
      "spanish": "llegar",
      "english": "reach",
      "number": "466",
      "translations": [
        "reach",
        "arrive"
      ],
      "count": 2
    },
    {
      "spanish": "menos",
      "english": "less",
      "number": "474",
      "translations": [
        "less",
        "least"
      ],
      "count": 2
    },
    {
      "spanish": "recoger",
      "english": "pick",
      "number": "511",
      "translations": [
        "pick",
        "collect"
      ],
      "count": 2
    },
    {
      "spanish": "resolver",
      "english": "settle",
      "number": "523",
      "translations": [
        "settle",
        "solve"
      ],
      "count": 2
    },
    {
      "spanish": "sentido",
      "english": "felt",
      "number": "534",
      "translations": [
        "felt",
        "sense"
      ],
      "count": 2
    },
    {
      "spanish": "amplio",
      "english": "wide",
      "number": "548",
      "translations": [
        "wide",
        "broad"
      ],
      "count": 2
    },
    {
      "spanish": "tienda",
      "english": "store",
      "number": "556",
      "translations": [
        "store",
        "shop"
      ],
      "count": 2
    },
    {
      "spanish": "suave",
      "english": "soft",
      "number": "585",
      "translations": [
        "soft",
        "gentle"
      ],
      "count": 2
    },
    {
      "spanish": "mal",
      "english": "bad",
      "number": "624",
      "translations": [
        "bad",
        "wrong"
      ],
      "count": 2
    },
    {
      "spanish": "bastante",
      "english": "quite",
      "number": "653",
      "translations": [
        "quite",
        "pretty"
      ],
      "count": 2
    },
    {
      "spanish": "fresco",
      "english": "cool",
      "number": "684",
      "translations": [
        "cool",
        "fresh"
      ],
      "count": 2
    },
    {
      "spanish": "vista",
      "english": "view",
      "number": "749",
      "translations": [
        "view",
        "sight"
      ],
      "count": 2
    },
    {
      "spanish": "partido",
      "english": "party",
      "number": "774",
      "translations": [
        "party",
        "match"
      ],
      "count": 2
    },
    {
      "spanish": "acuerdo",
      "english": "agree",
      "number": "796",
      "translations": [
        "agree",
        "deal"
      ],
      "count": 2
    },
    {
      "spanish": "miedo",
      "english": "fear",
      "number": "823",
      "translations": [
        "fear",
        "afraid"
      ],
      "count": 2
    },
    {
      "spanish": "estaba diciendo",
      "english": "you were saying...",
      "number": "199",
      "translations": [
        "you were saying..."
      ],
      "count": 1
    },
    {
      "spanish": "que tenga un buen dia",
      "english": "have a good day",
      "number": "2",
      "translations": [
        "have a good day"
      ],
      "count": 1
    },
    {
      "spanish": "era",
      "english": "was",
      "number": "6",
      "translations": [
        "was"
      ],
      "count": 1
    },
    {
      "spanish": "para",
      "english": "for",
      "number": "7",
      "translations": [
        "for"
      ],
      "count": 1
    },
    {
      "spanish": "son",
      "english": "are",
      "number": "9",
      "translations": [
        "are"
      ],
      "count": 1
    },
    {
      "spanish": "con",
      "english": "with",
      "number": "10",
      "translations": [
        "with"
      ],
      "count": 1
    },
    {
      "spanish": "ser",
      "english": "be",
      "number": "12",
      "translations": [
        "be"
      ],
      "count": 1
    },
    {
      "spanish": "uno",
      "english": "one",
      "number": "14",
      "translations": [
        "one"
      ],
      "count": 1
    },
    {
      "spanish": "tener",
      "english": "have",
      "number": "15",
      "translations": [
        "have"
      ],
      "count": 1
    },
    {
      "spanish": "este",
      "english": "this",
      "number": "16",
      "translations": [
        "this"
      ],
      "count": 1
    },
    {
      "spanish": "por",
      "english": "by",
      "number": "18",
      "translations": [
        "by"
      ],
      "count": 1
    },
    {
      "spanish": "palabra",
      "english": "word",
      "number": "20",
      "translations": [
        "word"
      ],
      "count": 1
    },
    {
      "spanish": "pero",
      "english": "but",
      "number": "21",
      "translations": [
        "but"
      ],
      "count": 1
    },
    {
      "spanish": "qué",
      "english": "what",
      "number": "22",
      "translations": [
        "what"
      ],
      "count": 1
    },
    {
      "spanish": "algunos",
      "english": "some",
      "number": "23",
      "translations": [
        "some"
      ],
      "count": 1
    },
    {
      "spanish": "es",
      "english": "is",
      "number": "24",
      "translations": [
        "is"
      ],
      "count": 1
    },
    {
      "spanish": "lo",
      "english": "it",
      "number": "25",
      "translations": [
        "it"
      ],
      "count": 1
    },
    {
      "spanish": "usted",
      "english": "you",
      "number": "26",
      "translations": [
        "you"
      ],
      "count": 1
    },
    {
      "spanish": "o",
      "english": "or",
      "number": "27",
      "translations": [
        "or"
      ],
      "count": 1
    },
    {
      "spanish": "tenido",
      "english": "had",
      "number": "28",
      "translations": [
        "had"
      ],
      "count": 1
    },
    {
      "spanish": "la",
      "english": "the",
      "number": "29",
      "translations": [
        "the"
      ],
      "count": 1
    },
    {
      "spanish": "de",
      "english": "of",
      "number": "30",
      "translations": [
        "of"
      ],
      "count": 1
    },
    {
      "spanish": "a",
      "english": "to",
      "number": "31",
      "translations": [
        "to"
      ],
      "count": 1
    },
    {
      "spanish": "y",
      "english": "and",
      "number": "32",
      "translations": [
        "and"
      ],
      "count": 1
    },
    {
      "spanish": "nos",
      "english": "we",
      "number": "35",
      "translations": [
        "we"
      ],
      "count": 1
    },
    {
      "spanish": "lata",
      "english": "can",
      "number": "36",
      "translations": [
        "can"
      ],
      "count": 1
    },
    {
      "spanish": "otros",
      "english": "other",
      "number": "38",
      "translations": [
        "other"
      ],
      "count": 1
    },
    {
      "spanish": "eran",
      "english": "were",
      "number": "39",
      "translations": [
        "were"
      ],
      "count": 1
    },
    {
      "spanish": "lo hará",
      "english": "will",
      "number": "45",
      "translations": [
        "will"
      ],
      "count": 1
    },
    {
      "spanish": "cómo",
      "english": "how",
      "number": "46",
      "translations": [
        "how"
      ],
      "count": 1
    },
    {
      "spanish": "conjunto",
      "english": "set",
      "number": "52",
      "translations": [
        "set"
      ],
      "count": 1
    },
    {
      "spanish": "tres",
      "english": "three",
      "number": "53",
      "translations": [
        "three"
      ],
      "count": 1
    },
    {
      "spanish": "querer",
      "english": "want",
      "number": "54",
      "translations": [
        "want"
      ],
      "count": 1
    },
    {
      "spanish": "aire",
      "english": "air",
      "number": "55",
      "translations": [
        "air"
      ],
      "count": 1
    },
    {
      "spanish": "también",
      "english": "also",
      "number": "57",
      "translations": [
        "also"
      ],
      "count": 1
    },
    {
      "spanish": "jugar",
      "english": "play",
      "number": "58",
      "translations": [
        "play"
      ],
      "count": 1
    },
    {
      "spanish": "fin",
      "english": "end",
      "number": "60",
      "translations": [
        "end"
      ],
      "count": 1
    },
    {
      "spanish": "poner",
      "english": "put",
      "number": "61",
      "translations": [
        "put"
      ],
      "count": 1
    },
    {
      "spanish": "leer",
      "english": "read",
      "number": "63",
      "translations": [
        "read"
      ],
      "count": 1
    },
    {
      "spanish": "mano",
      "english": "hand",
      "number": "64",
      "translations": [
        "hand"
      ],
      "count": 1
    },
    {
      "spanish": "puerto",
      "english": "port",
      "number": "65",
      "translations": [
        "port"
      ],
      "count": 1
    },
    {
      "spanish": "deletrear",
      "english": "spell",
      "number": "67",
      "translations": [
        "spell"
      ],
      "count": 1
    },
    {
      "spanish": "añadir",
      "english": "add",
      "number": "68",
      "translations": [
        "add"
      ],
      "count": 1
    },
    {
      "spanish": "incluso",
      "english": "even",
      "number": "69",
      "translations": [
        "even"
      ],
      "count": 1
    },
    {
      "spanish": "aquí",
      "english": "here",
      "number": "71",
      "translations": [
        "here"
      ],
      "count": 1
    },
    {
      "spanish": "debe",
      "english": "must",
      "number": "72",
      "translations": [
        "must"
      ],
      "count": 1
    },
    {
      "spanish": "alto",
      "english": "high",
      "number": "74",
      "translations": [
        "high"
      ],
      "count": 1
    },
    {
      "spanish": "tal",
      "english": "such",
      "number": "75",
      "translations": [
        "such"
      ],
      "count": 1
    },
    {
      "spanish": "siga",
      "english": "follow",
      "number": "76",
      "translations": [
        "follow"
      ],
      "count": 1
    },
    {
      "spanish": "acto",
      "english": "act",
      "number": "77",
      "translations": [
        "act"
      ],
      "count": 1
    },
    {
      "spanish": "por qué",
      "english": "why",
      "number": "78",
      "translations": [
        "why"
      ],
      "count": 1
    },
    {
      "spanish": "preguntar",
      "english": "ask",
      "number": "79",
      "translations": [
        "ask"
      ],
      "count": 1
    },
    {
      "spanish": "hombres",
      "english": "men",
      "number": "80",
      "translations": [
        "men"
      ],
      "count": 1
    },
    {
      "spanish": "cambio",
      "english": "change",
      "number": "81",
      "translations": [
        "change"
      ],
      "count": 1
    },
    {
      "spanish": "se fue",
      "english": "went",
      "number": "82",
      "translations": [
        "went"
      ],
      "count": 1
    },
    {
      "spanish": "luz",
      "english": "light",
      "number": "83",
      "translations": [
        "light"
      ],
      "count": 1
    },
    {
      "spanish": "necesitará",
      "english": "need",
      "number": "86",
      "translations": [
        "need"
      ],
      "count": 1
    },
    {
      "spanish": "imagen",
      "english": "picture",
      "number": "88",
      "translations": [
        "picture"
      ],
      "count": 1
    },
    {
      "spanish": "tratar",
      "english": "try",
      "number": "89",
      "translations": [
        "try"
      ],
      "count": 1
    },
    {
      "spanish": "nosotros",
      "english": "us",
      "number": "90",
      "translations": [
        "us"
      ],
      "count": 1
    },
    {
      "spanish": "de nuevo",
      "english": "again",
      "number": "91",
      "translations": [
        "again"
      ],
      "count": 1
    },
    {
      "spanish": "animal",
      "english": "animal",
      "number": "92",
      "translations": [
        "animal"
      ],
      "count": 1
    },
    {
      "spanish": "punto",
      "english": "point",
      "number": "93",
      "translations": [
        "point"
      ],
      "count": 1
    },
    {
      "spanish": "madre",
      "english": "mother",
      "number": "94",
      "translations": [
        "mother"
      ],
      "count": 1
    },
    {
      "spanish": "mundo",
      "english": "world",
      "number": "95",
      "translations": [
        "world"
      ],
      "count": 1
    },
    {
      "spanish": "cerca",
      "english": "near",
      "number": "96",
      "translations": [
        "near"
      ],
      "count": 1
    },
    {
      "spanish": "construir",
      "english": "build",
      "number": "97",
      "translations": [
        "build"
      ],
      "count": 1
    },
    {
      "spanish": "auto",
      "english": "self",
      "number": "98",
      "translations": [
        "self"
      ],
      "count": 1
    },
    {
      "spanish": "cualquier",
      "english": "any",
      "number": "101",
      "translations": [
        "any"
      ],
      "count": 1
    },
    {
      "spanish": "nuevo",
      "english": "new",
      "number": "102",
      "translations": [
        "new"
      ],
      "count": 1
    },
    {
      "spanish": "parte",
      "english": "part",
      "number": "104",
      "translations": [
        "part"
      ],
      "count": 1
    },
    {
      "spanish": "tomar",
      "english": "take",
      "number": "105",
      "translations": [
        "take"
      ],
      "count": 1
    },
    {
      "spanish": "conseguir",
      "english": "get",
      "number": "106",
      "translations": [
        "get"
      ],
      "count": 1
    },
    {
      "spanish": "vivir",
      "english": "live",
      "number": "109",
      "translations": [
        "live"
      ],
      "count": 1
    },
    {
      "spanish": "donde",
      "english": "where",
      "number": "110",
      "translations": [
        "where"
      ],
      "count": 1
    },
    {
      "spanish": "después",
      "english": "after",
      "number": "111",
      "translations": [
        "after"
      ],
      "count": 1
    },
    {
      "spanish": "espalda",
      "english": "back",
      "number": "112",
      "translations": [
        "back"
      ],
      "count": 1
    },
    {
      "spanish": "poco",
      "english": "little",
      "number": "113",
      "translations": [
        "little"
      ],
      "count": 1
    },
    {
      "spanish": "ronda",
      "english": "round",
      "number": "115",
      "translations": [
        "round"
      ],
      "count": 1
    },
    {
      "spanish": "hombre",
      "english": "man",
      "number": "116",
      "translations": [
        "man"
      ],
      "count": 1
    },
    {
      "spanish": "años",
      "english": "year",
      "number": "117",
      "translations": [
        "year"
      ],
      "count": 1
    },
    {
      "spanish": "vino",
      "english": "came",
      "number": "118",
      "translations": [
        "came"
      ],
      "count": 1
    },
    {
      "spanish": "en lugar de",
      "english": "instead of",
      "number": "119",
      "translations": [
        "instead of"
      ],
      "count": 1
    },
    {
      "spanish": "buena",
      "english": "good",
      "number": "121",
      "translations": [
        "good"
      ],
      "count": 1
    },
    {
      "spanish": "me",
      "english": "me",
      "number": "122",
      "translations": [
        "me"
      ],
      "count": 1
    },
    {
      "spanish": "dar",
      "english": "give",
      "number": "123",
      "translations": [
        "give"
      ],
      "count": 1
    },
    {
      "spanish": "nuestro",
      "english": "our",
      "number": "124",
      "translations": [
        "our"
      ],
      "count": 1
    },
    {
      "spanish": "nombre",
      "english": "name",
      "number": "126",
      "translations": [
        "name"
      ],
      "count": 1
    },
    {
      "spanish": "muy",
      "english": "very",
      "number": "127",
      "translations": [
        "very"
      ],
      "count": 1
    },
    {
      "spanish": "a través de",
      "english": "through",
      "number": "128",
      "translations": [
        "through"
      ],
      "count": 1
    },
    {
      "spanish": "pensar",
      "english": "think",
      "number": "133",
      "translations": [
        "think"
      ],
      "count": 1
    },
    {
      "spanish": "ayudar",
      "english": "help",
      "number": "135",
      "translations": [
        "help"
      ],
      "count": 1
    },
    {
      "spanish": "línea",
      "english": "line",
      "number": "137",
      "translations": [
        "line"
      ],
      "count": 1
    },
    {
      "spanish": "ser distinto",
      "english": "differ",
      "number": "138",
      "translations": [
        "differ"
      ],
      "count": 1
    },
    {
      "spanish": "a su vez,",
      "english": "turn",
      "number": "139",
      "translations": [
        "turn"
      ],
      "count": 1
    },
    {
      "spanish": "causa",
      "english": "cause",
      "number": "140",
      "translations": [
        "cause"
      ],
      "count": 1
    },
    {
      "spanish": "significará",
      "english": "mean",
      "number": "142",
      "translations": [
        "mean"
      ],
      "count": 1
    },
    {
      "spanish": "antes",
      "english": "before",
      "number": "143",
      "translations": [
        "before"
      ],
      "count": 1
    },
    {
      "spanish": "derecho",
      "english": "right",
      "number": "145",
      "translations": [
        "right"
      ],
      "count": 1
    },
    {
      "spanish": "viejo",
      "english": "old",
      "number": "147",
      "translations": [
        "old"
      ],
      "count": 1
    },
    {
      "spanish": "demasiado",
      "english": "too",
      "number": "148",
      "translations": [
        "too"
      ],
      "count": 1
    },
    {
      "spanish": "misma",
      "english": "same",
      "number": "149",
      "translations": [
        "same"
      ],
      "count": 1
    },
    {
      "spanish": "ella",
      "english": "she",
      "number": "150",
      "translations": [
        "she"
      ],
      "count": 1
    },
    {
      "spanish": "hay",
      "english": "there",
      "number": "152",
      "translations": [
        "there"
      ],
      "count": 1
    },
    {
      "spanish": "cuando",
      "english": "when",
      "number": "153",
      "translations": [
        "when"
      ],
      "count": 1
    },
    {
      "spanish": "uso",
      "english": "use",
      "number": "155",
      "translations": [
        "use"
      ],
      "count": 1
    },
    {
      "spanish": "acerca",
      "english": "about",
      "number": "158",
      "translations": [
        "about"
      ],
      "count": 1
    },
    {
      "spanish": "muchos",
      "english": "many",
      "number": "159",
      "translations": [
        "many"
      ],
      "count": 1
    },
    {
      "spanish": "entonces",
      "english": "then",
      "number": "160",
      "translations": [
        "then"
      ],
      "count": 1
    },
    {
      "spanish": "escribir",
      "english": "write",
      "number": "162",
      "translations": [
        "write"
      ],
      "count": 1
    },
    {
      "spanish": "haría",
      "english": "would",
      "number": "163",
      "translations": [
        "would"
      ],
      "count": 1
    },
    {
      "spanish": "éstos",
      "english": "these",
      "number": "166",
      "translations": [
        "these"
      ],
      "count": 1
    },
    {
      "spanish": "largo",
      "english": "long",
      "number": "168",
      "translations": [
        "long"
      ],
      "count": 1
    },
    {
      "spanish": "cosa",
      "english": "thing",
      "number": "170",
      "translations": [
        "thing"
      ],
      "count": 1
    },
    {
      "spanish": "dos",
      "english": "two",
      "number": "173",
      "translations": [
        "two"
      ],
      "count": 1
    },
    {
      "spanish": "tiene",
      "english": "has",
      "number": "174",
      "translations": [
        "has"
      ],
      "count": 1
    },
    {
      "spanish": "buscar",
      "english": "look",
      "number": "175",
      "translations": [
        "look"
      ],
      "count": 1
    },
    {
      "spanish": "día",
      "english": "day",
      "number": "177",
      "translations": [
        "day"
      ],
      "count": 1
    },
    {
      "spanish": "podía",
      "english": "could",
      "number": "178",
      "translations": [
        "could"
      ],
      "count": 1
    },
    {
      "spanish": "ir",
      "english": "go",
      "number": "179",
      "translations": [
        "go"
      ],
      "count": 1
    },
    {
      "spanish": "venir",
      "english": "come",
      "number": "180",
      "translations": [
        "come"
      ],
      "count": 1
    },
    {
      "spanish": "hizo",
      "english": "did",
      "number": "181",
      "translations": [
        "did"
      ],
      "count": 1
    },
    {
      "spanish": "número",
      "english": "number",
      "number": "182",
      "translations": [
        "number"
      ],
      "count": 1
    },
    {
      "spanish": "sonar",
      "english": "sound",
      "number": "183",
      "translations": [
        "sound"
      ],
      "count": 1
    },
    {
      "spanish": "personas",
      "english": "people",
      "number": "186",
      "translations": [
        "people"
      ],
      "count": 1
    },
    {
      "spanish": "mi",
      "english": "my",
      "number": "187",
      "translations": [
        "my"
      ],
      "count": 1
    },
    {
      "spanish": "sobre",
      "english": "over",
      "number": "188",
      "translations": [
        "over"
      ],
      "count": 1
    },
    {
      "spanish": "saber",
      "english": "know",
      "number": "189",
      "translations": [
        "know"
      ],
      "count": 1
    },
    {
      "spanish": "agua",
      "english": "water",
      "number": "190",
      "translations": [
        "water"
      ],
      "count": 1
    },
    {
      "spanish": "llamada",
      "english": "call",
      "number": "192",
      "translations": [
        "call"
      ],
      "count": 1
    },
    {
      "spanish": "primero",
      "english": "first",
      "number": "193",
      "translations": [
        "first"
      ],
      "count": 1
    },
    {
      "spanish": "puede",
      "english": "may",
      "number": "195",
      "translations": [
        "may"
      ],
      "count": 1
    },
    {
      "spanish": "abajo",
      "english": "down",
      "number": "196",
      "translations": [
        "down"
      ],
      "count": 1
    },
    {
      "spanish": "lado",
      "english": "side",
      "number": "197",
      "translations": [
        "side"
      ],
      "count": 1
    },
    {
      "spanish": "encontrar",
      "english": "find",
      "number": "200",
      "translations": [
        "find"
      ],
      "count": 1
    },
    {
      "spanish": "cabeza",
      "english": "head",
      "number": "201",
      "translations": [
        "head"
      ],
      "count": 1
    },
    {
      "spanish": "de pie",
      "english": "stand",
      "number": "202",
      "translations": [
        "stand"
      ],
      "count": 1
    },
    {
      "spanish": "propio",
      "english": "own",
      "number": "203",
      "translations": [
        "own"
      ],
      "count": 1
    },
    {
      "spanish": "página",
      "english": "page",
      "number": "204",
      "translations": [
        "page"
      ],
      "count": 1
    },
    {
      "spanish": "debería",
      "english": "should",
      "number": "205",
      "translations": [
        "should"
      ],
      "count": 1
    },
    {
      "spanish": "país",
      "english": "country",
      "number": "206",
      "translations": [
        "country"
      ],
      "count": 1
    },
    {
      "spanish": "encontrado",
      "english": "found",
      "number": "207",
      "translations": [
        "found"
      ],
      "count": 1
    },
    {
      "spanish": "respuesta",
      "english": "answer",
      "number": "208",
      "translations": [
        "answer"
      ],
      "count": 1
    },
    {
      "spanish": "escuela",
      "english": "school",
      "number": "209",
      "translations": [
        "school"
      ],
      "count": 1
    },
    {
      "spanish": "crecer",
      "english": "grow",
      "number": "210",
      "translations": [
        "grow"
      ],
      "count": 1
    },
    {
      "spanish": "estudio",
      "english": "study",
      "number": "211",
      "translations": [
        "study"
      ],
      "count": 1
    },
    {
      "spanish": "todavía",
      "english": "still",
      "number": "212",
      "translations": [
        "still"
      ],
      "count": 1
    },
    {
      "spanish": "aprender",
      "english": "learn",
      "number": "213",
      "translations": [
        "learn"
      ],
      "count": 1
    },
    {
      "spanish": "planta",
      "english": "plant",
      "number": "214",
      "translations": [
        "plant"
      ],
      "count": 1
    },
    {
      "spanish": "cubierta",
      "english": "cover",
      "number": "215",
      "translations": [
        "cover"
      ],
      "count": 1
    },
    {
      "spanish": "alimentos",
      "english": "food",
      "number": "216",
      "translations": [
        "food"
      ],
      "count": 1
    },
    {
      "spanish": "sol",
      "english": "sun",
      "number": "217",
      "translations": [
        "sun"
      ],
      "count": 1
    },
    {
      "spanish": "cuatro",
      "english": "four",
      "number": "218",
      "translations": [
        "four"
      ],
      "count": 1
    },
    {
      "spanish": "mantener",
      "english": "keep",
      "number": "221",
      "translations": [
        "keep"
      ],
      "count": 1
    },
    {
      "spanish": "ojo",
      "english": "eye",
      "number": "222",
      "translations": [
        "eye"
      ],
      "count": 1
    },
    {
      "spanish": "pensado",
      "english": "thought",
      "number": "226",
      "translations": [
        "thought"
      ],
      "count": 1
    },
    {
      "spanish": "árbol",
      "english": "tree",
      "number": "228",
      "translations": [
        "tree"
      ],
      "count": 1
    },
    {
      "spanish": "cruzar",
      "english": "cross",
      "number": "229",
      "translations": [
        "cross"
      ],
      "count": 1
    },
    {
      "spanish": "granja",
      "english": "farm",
      "number": "230",
      "translations": [
        "farm"
      ],
      "count": 1
    },
    {
      "spanish": "duro",
      "english": "hard",
      "number": "231",
      "translations": [
        "hard"
      ],
      "count": 1
    },
    {
      "spanish": "inicio",
      "english": "start",
      "number": "232",
      "translations": [
        "start"
      ],
      "count": 1
    },
    {
      "spanish": "podría",
      "english": "might",
      "number": "233",
      "translations": [
        "might"
      ],
      "count": 1
    },
    {
      "spanish": "sierra",
      "english": "saw",
      "number": "235",
      "translations": [
        "saw"
      ],
      "count": 1
    },
    {
      "spanish": "mar",
      "english": "sea",
      "number": "237",
      "translations": [
        "sea"
      ],
      "count": 1
    },
    {
      "spanish": "dibujar",
      "english": "draw",
      "number": "238",
      "translations": [
        "draw"
      ],
      "count": 1
    },
    {
      "spanish": "izquierda",
      "english": "left",
      "number": "239",
      "translations": [
        "left"
      ],
      "count": 1
    },
    {
      "spanish": "tarde",
      "english": "late",
      "number": "240",
      "translations": [
        "late"
      ],
      "count": 1
    },
    {
      "spanish": "ejecutar",
      "english": "run",
      "number": "241",
      "translations": [
        "run"
      ],
      "count": 1
    },
    {
      "spanish": "mientras",
      "english": "while",
      "number": "243",
      "translations": [
        "while"
      ],
      "count": 1
    },
    {
      "spanish": "prensa",
      "english": "press",
      "number": "244",
      "translations": [
        "press"
      ],
      "count": 1
    },
    {
      "spanish": "Cerrar",
      "english": "close",
      "number": "245",
      "translations": [
        "close"
      ],
      "count": 1
    },
    {
      "spanish": "reales",
      "english": "real",
      "number": "247",
      "translations": [
        "real"
      ],
      "count": 1
    },
    {
      "spanish": "vida",
      "english": "life",
      "number": "248",
      "translations": [
        "life"
      ],
      "count": 1
    },
    {
      "spanish": "pocos",
      "english": "few",
      "number": "249",
      "translations": [
        "few"
      ],
      "count": 1
    },
    {
      "spanish": "norte",
      "english": "north",
      "number": "250",
      "translations": [
        "north"
      ],
      "count": 1
    },
    {
      "spanish": "libro",
      "english": "book",
      "number": "251",
      "translations": [
        "book"
      ],
      "count": 1
    },
    {
      "spanish": "llevar",
      "english": "carry",
      "number": "252",
      "translations": [
        "carry"
      ],
      "count": 1
    },
    {
      "spanish": "tomó",
      "english": "took",
      "number": "253",
      "translations": [
        "took"
      ],
      "count": 1
    },
    {
      "spanish": "ciencia",
      "english": "science",
      "number": "254",
      "translations": [
        "science"
      ],
      "count": 1
    },
    {
      "spanish": "comer",
      "english": "eat",
      "number": "255",
      "translations": [
        "eat"
      ],
      "count": 1
    },
    {
      "spanish": "habitación",
      "english": "room",
      "number": "256",
      "translations": [
        "room"
      ],
      "count": 1
    },
    {
      "spanish": "amigo",
      "english": "friend",
      "number": "257",
      "translations": [
        "friend"
      ],
      "count": 1
    },
    {
      "spanish": "comenzó",
      "english": "began",
      "number": "258",
      "translations": [
        "began"
      ],
      "count": 1
    },
    {
      "spanish": "gusta",
      "english": "idea",
      "number": "259",
      "translations": [
        "idea"
      ],
      "count": 1
    },
    {
      "spanish": "peces",
      "english": "fish",
      "number": "260",
      "translations": [
        "fish"
      ],
      "count": 1
    },
    {
      "spanish": "montaña",
      "english": "mountain",
      "number": "261",
      "translations": [
        "mountain"
      ],
      "count": 1
    },
    {
      "spanish": "Deténgase",
      "english": "stop",
      "number": "262",
      "translations": [
        "stop"
      ],
      "count": 1
    },
    {
      "spanish": "una vez",
      "english": "once",
      "number": "263",
      "translations": [
        "once"
      ],
      "count": 1
    },
    {
      "spanish": "base de",
      "english": "base",
      "number": "264",
      "translations": [
        "base"
      ],
      "count": 1
    },
    {
      "spanish": "caballo",
      "english": "horse",
      "number": "266",
      "translations": [
        "horse"
      ],
      "count": 1
    },
    {
      "spanish": "cortada",
      "english": "cut",
      "number": "267",
      "translations": [
        "cut"
      ],
      "count": 1
    },
    {
      "spanish": "colores",
      "english": "color",
      "number": "270",
      "translations": [
        "color"
      ],
      "count": 1
    },
    {
      "spanish": "cara",
      "english": "face",
      "number": "271",
      "translations": [
        "face"
      ],
      "count": 1
    },
    {
      "spanish": "madera",
      "english": "wood",
      "number": "272",
      "translations": [
        "wood"
      ],
      "count": 1
    },
    {
      "spanish": "principal",
      "english": "main",
      "number": "273",
      "translations": [
        "main"
      ],
      "count": 1
    },
    {
      "spanish": "abierta",
      "english": "open",
      "number": "274",
      "translations": [
        "open"
      ],
      "count": 1
    },
    {
      "spanish": "parecer",
      "english": "seem",
      "number": "275",
      "translations": [
        "seem"
      ],
      "count": 1
    },
    {
      "spanish": "juntos",
      "english": "together",
      "number": "276",
      "translations": [
        "together"
      ],
      "count": 1
    },
    {
      "spanish": "próximo",
      "english": "next",
      "number": "277",
      "translations": [
        "next"
      ],
      "count": 1
    },
    {
      "spanish": "blanco",
      "english": "white",
      "number": "278",
      "translations": [
        "white"
      ],
      "count": 1
    },
    {
      "spanish": "niños",
      "english": "children",
      "number": "279",
      "translations": [
        "children"
      ],
      "count": 1
    },
    {
      "spanish": "comenzar",
      "english": "begin",
      "number": "280",
      "translations": [
        "begin"
      ],
      "count": 1
    },
    {
      "spanish": "conseguido",
      "english": "got",
      "number": "281",
      "translations": [
        "got"
      ],
      "count": 1
    },
    {
      "spanish": "caminar",
      "english": "walk",
      "number": "282",
      "translations": [
        "walk"
      ],
      "count": 1
    },
    {
      "spanish": "ejemplo",
      "english": "example",
      "number": "283",
      "translations": [
        "example"
      ],
      "count": 1
    },
    {
      "spanish": "aliviar",
      "english": "ease",
      "number": "284",
      "translations": [
        "ease"
      ],
      "count": 1
    },
    {
      "spanish": "papel",
      "english": "paper",
      "number": "285",
      "translations": [
        "paper"
      ],
      "count": 1
    },
    {
      "spanish": "grupo",
      "english": "group",
      "number": "286",
      "translations": [
        "group"
      ],
      "count": 1
    },
    {
      "spanish": "siempre",
      "english": "always",
      "number": "287",
      "translations": [
        "always"
      ],
      "count": 1
    },
    {
      "spanish": "música",
      "english": "music",
      "number": "288",
      "translations": [
        "music"
      ],
      "count": 1
    },
    {
      "spanish": "los",
      "english": "those",
      "number": "289",
      "translations": [
        "those"
      ],
      "count": 1
    },
    {
      "spanish": "ambos",
      "english": "both",
      "number": "290",
      "translations": [
        "both"
      ],
      "count": 1
    },
    {
      "spanish": "marca",
      "english": "mark",
      "number": "291",
      "translations": [
        "mark"
      ],
      "count": 1
    },
    {
      "spanish": "menudo",
      "english": "often",
      "number": "292",
      "translations": [
        "often"
      ],
      "count": 1
    },
    {
      "spanish": "carta",
      "english": "letter",
      "number": "293",
      "translations": [
        "letter"
      ],
      "count": 1
    },
    {
      "spanish": "milla",
      "english": "mile",
      "number": "295",
      "translations": [
        "mile"
      ],
      "count": 1
    },
    {
      "spanish": "río",
      "english": "river",
      "number": "296",
      "translations": [
        "river"
      ],
      "count": 1
    },
    {
      "spanish": "coche",
      "english": "car",
      "number": "297",
      "translations": [
        "car"
      ],
      "count": 1
    },
    {
      "spanish": "pies",
      "english": "feet",
      "number": "298",
      "translations": [
        "feet"
      ],
      "count": 1
    },
    {
      "spanish": "cuidado",
      "english": "care",
      "number": "299",
      "translations": [
        "care"
      ],
      "count": 1
    },
    {
      "spanish": "segundo",
      "english": "second",
      "number": "300",
      "translations": [
        "second"
      ],
      "count": 1
    },
    {
      "spanish": "suficiente",
      "english": "enough",
      "number": "301",
      "translations": [
        "enough"
      ],
      "count": 1
    },
    {
      "spanish": "llano",
      "english": "plain",
      "number": "302",
      "translations": [
        "plain"
      ],
      "count": 1
    },
    {
      "spanish": "chica",
      "english": "girl",
      "number": "303",
      "translations": [
        "girl"
      ],
      "count": 1
    },
    {
      "spanish": "habitual",
      "english": "usual",
      "number": "304",
      "translations": [
        "usual"
      ],
      "count": 1
    },
    {
      "spanish": "joven",
      "english": "young",
      "number": "305",
      "translations": [
        "young"
      ],
      "count": 1
    },
    {
      "spanish": "listo",
      "english": "ready",
      "number": "306",
      "translations": [
        "ready"
      ],
      "count": 1
    },
    {
      "spanish": "por encima de",
      "english": "above",
      "number": "307",
      "translations": [
        "above"
      ],
      "count": 1
    },
    {
      "spanish": "rojo",
      "english": "red",
      "number": "309",
      "translations": [
        "red"
      ],
      "count": 1
    },
    {
      "spanish": "lista",
      "english": "list",
      "number": "310",
      "translations": [
        "list"
      ],
      "count": 1
    },
    {
      "spanish": "aunque",
      "english": "though",
      "number": "311",
      "translations": [
        "though"
      ],
      "count": 1
    },
    {
      "spanish": "sentir",
      "english": "feel",
      "number": "312",
      "translations": [
        "feel"
      ],
      "count": 1
    },
    {
      "spanish": "charla",
      "english": "talk",
      "number": "313",
      "translations": [
        "talk"
      ],
      "count": 1
    },
    {
      "spanish": "pájaro",
      "english": "bird",
      "number": "314",
      "translations": [
        "bird"
      ],
      "count": 1
    },
    {
      "spanish": "pronto",
      "english": "soon",
      "number": "315",
      "translations": [
        "soon"
      ],
      "count": 1
    },
    {
      "spanish": "cuerpo",
      "english": "body",
      "number": "316",
      "translations": [
        "body"
      ],
      "count": 1
    },
    {
      "spanish": "perro",
      "english": "dog",
      "number": "317",
      "translations": [
        "dog"
      ],
      "count": 1
    },
    {
      "spanish": "familia",
      "english": "family",
      "number": "318",
      "translations": [
        "family"
      ],
      "count": 1
    },
    {
      "spanish": "directa",
      "english": "direct",
      "number": "319",
      "translations": [
        "direct"
      ],
      "count": 1
    },
    {
      "spanish": "plantear",
      "english": "pose",
      "number": "320",
      "translations": [
        "pose"
      ],
      "count": 1
    },
    {
      "spanish": "canción",
      "english": "song",
      "number": "322",
      "translations": [
        "song"
      ],
      "count": 1
    },
    {
      "spanish": "medir",
      "english": "measure",
      "number": "323",
      "translations": [
        "measure"
      ],
      "count": 1
    },
    {
      "spanish": "puerta",
      "english": "door",
      "number": "324",
      "translations": [
        "door"
      ],
      "count": 1
    },
    {
      "spanish": "producto",
      "english": "product",
      "number": "325",
      "translations": [
        "product"
      ],
      "count": 1
    },
    {
      "spanish": "negro",
      "english": "black",
      "number": "326",
      "translations": [
        "black"
      ],
      "count": 1
    },
    {
      "spanish": "corto",
      "english": "short",
      "number": "327",
      "translations": [
        "short"
      ],
      "count": 1
    },
    {
      "spanish": "numeral",
      "english": "numeral",
      "number": "328",
      "translations": [
        "numeral"
      ],
      "count": 1
    },
    {
      "spanish": "clase",
      "english": "class",
      "number": "329",
      "translations": [
        "class"
      ],
      "count": 1
    },
    {
      "spanish": "viento",
      "english": "wind",
      "number": "330",
      "translations": [
        "wind"
      ],
      "count": 1
    },
    {
      "spanish": "pregunta",
      "english": "question",
      "number": "331",
      "translations": [
        "question"
      ],
      "count": 1
    },
    {
      "spanish": "suceder",
      "english": "happen",
      "number": "332",
      "translations": [
        "happen"
      ],
      "count": 1
    },
    {
      "spanish": "buque",
      "english": "ship",
      "number": "334",
      "translations": [
        "ship"
      ],
      "count": 1
    },
    {
      "spanish": "zona",
      "english": "area",
      "number": "335",
      "translations": [
        "area"
      ],
      "count": 1
    },
    {
      "spanish": "roca",
      "english": "rock",
      "number": "337",
      "translations": [
        "rock"
      ],
      "count": 1
    },
    {
      "spanish": "orden",
      "english": "order",
      "number": "338",
      "translations": [
        "order"
      ],
      "count": 1
    },
    {
      "spanish": "fuego",
      "english": "fire",
      "number": "339",
      "translations": [
        "fire"
      ],
      "count": 1
    },
    {
      "spanish": "sur",
      "english": "south",
      "number": "340",
      "translations": [
        "south"
      ],
      "count": 1
    },
    {
      "spanish": "pieza",
      "english": "piece",
      "number": "342",
      "translations": [
        "piece"
      ],
      "count": 1
    },
    {
      "spanish": "sabía",
      "english": "knew",
      "number": "344",
      "translations": [
        "knew"
      ],
      "count": 1
    },
    {
      "spanish": "cima",
      "english": "top",
      "number": "347",
      "translations": [
        "top"
      ],
      "count": 1
    },
    {
      "spanish": "rey",
      "english": "king",
      "number": "349",
      "translations": [
        "king"
      ],
      "count": 1
    },
    {
      "spanish": "calle",
      "english": "street",
      "number": "350",
      "translations": [
        "street"
      ],
      "count": 1
    },
    {
      "spanish": "pulgadas",
      "english": "inch",
      "number": "351",
      "translations": [
        "inch"
      ],
      "count": 1
    },
    {
      "spanish": "multiplicar",
      "english": "multiply",
      "number": "352",
      "translations": [
        "multiply"
      ],
      "count": 1
    },
    {
      "spanish": "nada",
      "english": "nothing",
      "number": "353",
      "translations": [
        "nothing"
      ],
      "count": 1
    },
    {
      "spanish": "curso",
      "english": "course",
      "number": "354",
      "translations": [
        "course"
      ],
      "count": 1
    },
    {
      "spanish": "quedarse",
      "english": "stay",
      "number": "355",
      "translations": [
        "stay"
      ],
      "count": 1
    },
    {
      "spanish": "rueda",
      "english": "wheel",
      "number": "356",
      "translations": [
        "wheel"
      ],
      "count": 1
    },
    {
      "spanish": "fuerza",
      "english": "force",
      "number": "358",
      "translations": [
        "force"
      ],
      "count": 1
    },
    {
      "spanish": "azul",
      "english": "blue",
      "number": "359",
      "translations": [
        "blue"
      ],
      "count": 1
    },
    {
      "spanish": "objeto",
      "english": "object",
      "number": "360",
      "translations": [
        "object"
      ],
      "count": 1
    },
    {
      "spanish": "decidir",
      "english": "decide",
      "number": "361",
      "translations": [
        "decide"
      ],
      "count": 1
    },
    {
      "spanish": "superficie",
      "english": "surface",
      "number": "362",
      "translations": [
        "surface"
      ],
      "count": 1
    },
    {
      "spanish": "profunda",
      "english": "deep",
      "number": "363",
      "translations": [
        "deep"
      ],
      "count": 1
    },
    {
      "spanish": "luna",
      "english": "moon",
      "number": "364",
      "translations": [
        "moon"
      ],
      "count": 1
    },
    {
      "spanish": "isla",
      "english": "island",
      "number": "365",
      "translations": [
        "island"
      ],
      "count": 1
    },
    {
      "spanish": "pie",
      "english": "foot",
      "number": "366",
      "translations": [
        "foot"
      ],
      "count": 1
    },
    {
      "spanish": "sistema",
      "english": "system",
      "number": "367",
      "translations": [
        "system"
      ],
      "count": 1
    },
    {
      "spanish": "ocupado",
      "english": "busy",
      "number": "368",
      "translations": [
        "busy"
      ],
      "count": 1
    },
    {
      "spanish": "prueba",
      "english": "test",
      "number": "369",
      "translations": [
        "test"
      ],
      "count": 1
    },
    {
      "spanish": "registro",
      "english": "record",
      "number": "370",
      "translations": [
        "record"
      ],
      "count": 1
    },
    {
      "spanish": "barco",
      "english": "boat",
      "number": "371",
      "translations": [
        "boat"
      ],
      "count": 1
    },
    {
      "spanish": "común",
      "english": "common",
      "number": "372",
      "translations": [
        "common"
      ],
      "count": 1
    },
    {
      "spanish": "oro",
      "english": "gold",
      "number": "373",
      "translations": [
        "gold"
      ],
      "count": 1
    },
    {
      "spanish": "posible",
      "english": "possible",
      "number": "374",
      "translations": [
        "possible"
      ],
      "count": 1
    },
    {
      "spanish": "plano",
      "english": "plane",
      "number": "375",
      "translations": [
        "plane"
      ],
      "count": 1
    },
    {
      "spanish": "seco",
      "english": "dry",
      "number": "377",
      "translations": [
        "dry"
      ],
      "count": 1
    },
    {
      "spanish": "maravilla",
      "english": "wonder",
      "number": "378",
      "translations": [
        "wonder"
      ],
      "count": 1
    },
    {
      "spanish": "risa",
      "english": "laugh",
      "number": "379",
      "translations": [
        "laugh"
      ],
      "count": 1
    },
    {
      "spanish": "mil",
      "english": "thousand",
      "number": "380",
      "translations": [
        "thousand"
      ],
      "count": 1
    },
    {
      "spanish": "corrió",
      "english": "ran",
      "number": "382",
      "translations": [
        "ran"
      ],
      "count": 1
    },
    {
      "spanish": "comprobar",
      "english": "check",
      "number": "383",
      "translations": [
        "check"
      ],
      "count": 1
    },
    {
      "spanish": "juego",
      "english": "game",
      "number": "384",
      "translations": [
        "game"
      ],
      "count": 1
    },
    {
      "spanish": "equiparar",
      "english": "equate",
      "number": "386",
      "translations": [
        "equate"
      ],
      "count": 1
    },
    {
      "spanish": "señorita",
      "english": "miss",
      "number": "388",
      "translations": [
        "miss"
      ],
      "count": 1
    },
    {
      "spanish": "traído",
      "english": "brought",
      "number": "389",
      "translations": [
        "brought"
      ],
      "count": 1
    },
    {
      "spanish": "calor",
      "english": "heat",
      "number": "390",
      "translations": [
        "heat"
      ],
      "count": 1
    },
    {
      "spanish": "nieve",
      "english": "snow",
      "number": "391",
      "translations": [
        "snow"
      ],
      "count": 1
    },
    {
      "spanish": "neumáticos",
      "english": "tire",
      "number": "392",
      "translations": [
        "tire"
      ],
      "count": 1
    },
    {
      "spanish": "traer",
      "english": "bring",
      "number": "393",
      "translations": [
        "bring"
      ],
      "count": 1
    },
    {
      "spanish": "sí",
      "english": "yes",
      "number": "394",
      "translations": [
        "yes"
      ],
      "count": 1
    },
    {
      "spanish": "distante",
      "english": "distant",
      "number": "395",
      "translations": [
        "distant"
      ],
      "count": 1
    },
    {
      "spanish": "llenar",
      "english": "fill",
      "number": "396",
      "translations": [
        "fill"
      ],
      "count": 1
    },
    {
      "spanish": "al este",
      "english": "east",
      "number": "397",
      "translations": [
        "east"
      ],
      "count": 1
    },
    {
      "spanish": "pintar",
      "english": "paint",
      "number": "398",
      "translations": [
        "paint"
      ],
      "count": 1
    },
    {
      "spanish": "idioma",
      "english": "language",
      "number": "399",
      "translations": [
        "language"
      ],
      "count": 1
    },
    {
      "spanish": "potencia",
      "english": "power",
      "number": "402",
      "translations": [
        "power"
      ],
      "count": 1
    },
    {
      "spanish": "fina",
      "english": "fine",
      "number": "404",
      "translations": [
        "fine"
      ],
      "count": 1
    },
    {
      "spanish": "cierto",
      "english": "certain",
      "number": "405",
      "translations": [
        "certain"
      ],
      "count": 1
    },
    {
      "spanish": "volar",
      "english": "fly",
      "number": "406",
      "translations": [
        "fly"
      ],
      "count": 1
    },
    {
      "spanish": "conducir",
      "english": "lead",
      "number": "408",
      "translations": [
        "lead"
      ],
      "count": 1
    },
    {
      "spanish": "oscuro",
      "english": "dark",
      "number": "410",
      "translations": [
        "dark"
      ],
      "count": 1
    },
    {
      "spanish": "máquina",
      "english": "machine",
      "number": "411",
      "translations": [
        "machine"
      ],
      "count": 1
    },
    {
      "spanish": "nota",
      "english": "note",
      "number": "412",
      "translations": [
        "note"
      ],
      "count": 1
    },
    {
      "spanish": "espere",
      "english": "wait",
      "number": "413",
      "translations": [
        "wait"
      ],
      "count": 1
    },
    {
      "spanish": "plan de",
      "english": "plan",
      "number": "414",
      "translations": [
        "plan"
      ],
      "count": 1
    },
    {
      "spanish": "figura",
      "english": "figure",
      "number": "415",
      "translations": [
        "figure"
      ],
      "count": 1
    },
    {
      "spanish": "estrella",
      "english": "star",
      "number": "416",
      "translations": [
        "star"
      ],
      "count": 1
    },
    {
      "spanish": "caja",
      "english": "box",
      "number": "417",
      "translations": [
        "box"
      ],
      "count": 1
    },
    {
      "spanish": "sustantivo",
      "english": "noun",
      "number": "418",
      "translations": [
        "noun"
      ],
      "count": 1
    },
    {
      "spanish": "campo",
      "english": "field",
      "number": "419",
      "translations": [
        "field"
      ],
      "count": 1
    },
    {
      "spanish": "resto",
      "english": "rest",
      "number": "420",
      "translations": [
        "rest"
      ],
      "count": 1
    },
    {
      "spanish": "correcta",
      "english": "correct",
      "number": "421",
      "translations": [
        "correct"
      ],
      "count": 1
    },
    {
      "spanish": "capaz",
      "english": "able",
      "number": "422",
      "translations": [
        "able"
      ],
      "count": 1
    },
    {
      "spanish": "libra",
      "english": "pound",
      "number": "423",
      "translations": [
        "pound"
      ],
      "count": 1
    },
    {
      "spanish": "belleza",
      "english": "beauty",
      "number": "425",
      "translations": [
        "beauty"
      ],
      "count": 1
    },
    {
      "spanish": "destacado",
      "english": "stood",
      "number": "427",
      "translations": [
        "stood"
      ],
      "count": 1
    },
    {
      "spanish": "contener",
      "english": "contain",
      "number": "428",
      "translations": [
        "contain"
      ],
      "count": 1
    },
    {
      "spanish": "delante",
      "english": "front",
      "number": "429",
      "translations": [
        "front"
      ],
      "count": 1
    },
    {
      "spanish": "enseñar",
      "english": "teach",
      "number": "430",
      "translations": [
        "teach"
      ],
      "count": 1
    },
    {
      "spanish": "semana",
      "english": "week",
      "number": "431",
      "translations": [
        "week"
      ],
      "count": 1
    },
    {
      "spanish": "dio",
      "english": "gave",
      "number": "433",
      "translations": [
        "gave"
      ],
      "count": 1
    },
    {
      "spanish": "verde",
      "english": "green",
      "number": "434",
      "translations": [
        "green"
      ],
      "count": 1
    },
    {
      "spanish": "oh",
      "english": "oh",
      "number": "435",
      "translations": [
        "oh"
      ],
      "count": 1
    },
    {
      "spanish": "desarrollar",
      "english": "develop",
      "number": "437",
      "translations": [
        "develop"
      ],
      "count": 1
    },
    {
      "spanish": "océano",
      "english": "ocean",
      "number": "438",
      "translations": [
        "ocean"
      ],
      "count": 1
    },
    {
      "spanish": "libre",
      "english": "free",
      "number": "440",
      "translations": [
        "free"
      ],
      "count": 1
    },
    {
      "spanish": "minuto",
      "english": "minute",
      "number": "441",
      "translations": [
        "minute"
      ],
      "count": 1
    },
    {
      "spanish": "especial",
      "english": "special",
      "number": "443",
      "translations": [
        "special"
      ],
      "count": 1
    },
    {
      "spanish": "mente",
      "english": "mind",
      "number": "444",
      "translations": [
        "mind"
      ],
      "count": 1
    },
    {
      "spanish": "detrás",
      "english": "behind",
      "number": "445",
      "translations": [
        "behind"
      ],
      "count": 1
    },
    {
      "spanish": "claro",
      "english": "clear",
      "number": "446",
      "translations": [
        "clear"
      ],
      "count": 1
    },
    {
      "spanish": "cola",
      "english": "tail",
      "number": "447",
      "translations": [
        "tail"
      ],
      "count": 1
    },
    {
      "spanish": "Produce",
      "english": "produce",
      "number": "448",
      "translations": [
        "produce"
      ],
      "count": 1
    },
    {
      "spanish": "espacio",
      "english": "space",
      "number": "450",
      "translations": [
        "space"
      ],
      "count": 1
    },
    {
      "spanish": "horas",
      "english": "hour",
      "number": "453",
      "translations": [
        "hour"
      ],
      "count": 1
    },
    {
      "spanish": "verdadero",
      "english": "true",
      "number": "455",
      "translations": [
        "true"
      ],
      "count": 1
    },
    {
      "spanish": "durante",
      "english": "during",
      "number": "456",
      "translations": [
        "during"
      ],
      "count": 1
    },
    {
      "spanish": "cien",
      "english": "hundred",
      "number": "457",
      "translations": [
        "hundred"
      ],
      "count": 1
    },
    {
      "spanish": "cinco",
      "english": "five",
      "number": "458",
      "translations": [
        "five"
      ],
      "count": 1
    },
    {
      "spanish": "recordar",
      "english": "remember",
      "number": "459",
      "translations": [
        "remember"
      ],
      "count": 1
    },
    {
      "spanish": "paso",
      "english": "step",
      "number": "460",
      "translations": [
        "step"
      ],
      "count": 1
    },
    {
      "spanish": "temprana",
      "english": "early",
      "number": "461",
      "translations": [
        "early"
      ],
      "count": 1
    },
    {
      "spanish": "mantenga",
      "english": "hold",
      "number": "462",
      "translations": [
        "hold"
      ],
      "count": 1
    },
    {
      "spanish": "oeste",
      "english": "west",
      "number": "463",
      "translations": [
        "west"
      ],
      "count": 1
    },
    {
      "spanish": "interés",
      "english": "interest",
      "number": "465",
      "translations": [
        "interest"
      ],
      "count": 1
    },
    {
      "spanish": "verbo",
      "english": "verb",
      "number": "468",
      "translations": [
        "verb"
      ],
      "count": 1
    },
    {
      "spanish": "cantar",
      "english": "sing",
      "number": "469",
      "translations": [
        "sing"
      ],
      "count": 1
    },
    {
      "spanish": "seis",
      "english": "six",
      "number": "471",
      "translations": [
        "six"
      ],
      "count": 1
    },
    {
      "spanish": "mesa",
      "english": "table",
      "number": "472",
      "translations": [
        "table"
      ],
      "count": 1
    },
    {
      "spanish": "viajes",
      "english": "travel",
      "number": "473",
      "translations": [
        "travel"
      ],
      "count": 1
    },
    {
      "spanish": "mañana",
      "english": "morning",
      "number": "475",
      "translations": [
        "morning"
      ],
      "count": 1
    },
    {
      "spanish": "diez",
      "english": "ten",
      "number": "476",
      "translations": [
        "ten"
      ],
      "count": 1
    },
    {
      "spanish": "sencilla",
      "english": "simple",
      "number": "477",
      "translations": [
        "simple"
      ],
      "count": 1
    },
    {
      "spanish": "varios",
      "english": "several",
      "number": "478",
      "translations": [
        "several"
      ],
      "count": 1
    },
    {
      "spanish": "vocal",
      "english": "vowel",
      "number": "479",
      "translations": [
        "vowel"
      ],
      "count": 1
    },
    {
      "spanish": "hacia",
      "english": "toward",
      "number": "480",
      "translations": [
        "toward"
      ],
      "count": 1
    },
    {
      "spanish": "guerra",
      "english": "war",
      "number": "481",
      "translations": [
        "war"
      ],
      "count": 1
    },
    {
      "spanish": "sentar",
      "english": "lay",
      "number": "482",
      "translations": [
        "lay"
      ],
      "count": 1
    },
    {
      "spanish": "contra",
      "english": "against",
      "number": "483",
      "translations": [
        "against"
      ],
      "count": 1
    },
    {
      "spanish": "patrón",
      "english": "pattern",
      "number": "484",
      "translations": [
        "pattern"
      ],
      "count": 1
    },
    {
      "spanish": "lenta",
      "english": "slow",
      "number": "485",
      "translations": [
        "slow"
      ],
      "count": 1
    },
    {
      "spanish": "centro",
      "english": "center",
      "number": "486",
      "translations": [
        "center"
      ],
      "count": 1
    },
    {
      "spanish": "amar",
      "english": "love",
      "number": "487",
      "translations": [
        "love"
      ],
      "count": 1
    },
    {
      "spanish": "persona",
      "english": "person",
      "number": "488",
      "translations": [
        "person"
      ],
      "count": 1
    },
    {
      "spanish": "dinero",
      "english": "money",
      "number": "489",
      "translations": [
        "money"
      ],
      "count": 1
    },
    {
      "spanish": "servir",
      "english": "serve",
      "number": "490",
      "translations": [
        "serve"
      ],
      "count": 1
    },
    {
      "spanish": "aparecerá",
      "english": "appear",
      "number": "491",
      "translations": [
        "appear"
      ],
      "count": 1
    },
    {
      "spanish": "carretera",
      "english": "road",
      "number": "492",
      "translations": [
        "road"
      ],
      "count": 1
    },
    {
      "spanish": "mapa",
      "english": "map",
      "number": "493",
      "translations": [
        "map"
      ],
      "count": 1
    },
    {
      "spanish": "lluvia",
      "english": "rain",
      "number": "494",
      "translations": [
        "rain"
      ],
      "count": 1
    },
    {
      "spanish": "regla",
      "english": "rule",
      "number": "495",
      "translations": [
        "rule"
      ],
      "count": 1
    },
    {
      "spanish": "gobernar",
      "english": "govern",
      "number": "496",
      "translations": [
        "govern"
      ],
      "count": 1
    },
    {
      "spanish": "Halar",
      "english": "pull",
      "number": "497",
      "translations": [
        "pull"
      ],
      "count": 1
    },
    {
      "spanish": "frío",
      "english": "cold",
      "number": "498",
      "translations": [
        "cold"
      ],
      "count": 1
    },
    {
      "spanish": "aviso",
      "english": "notice",
      "number": "499",
      "translations": [
        "notice"
      ],
      "count": 1
    },
    {
      "spanish": "voz",
      "english": "voice",
      "number": "500",
      "translations": [
        "voice"
      ],
      "count": 1
    },
    {
      "spanish": "energía",
      "english": "energy",
      "number": "501",
      "translations": [
        "energy"
      ],
      "count": 1
    },
    {
      "spanish": "caza",
      "english": "hunt",
      "number": "502",
      "translations": [
        "hunt"
      ],
      "count": 1
    },
    {
      "spanish": "probable",
      "english": "probable",
      "number": "503",
      "translations": [
        "probable"
      ],
      "count": 1
    },
    {
      "spanish": "cama",
      "english": "bed",
      "number": "504",
      "translations": [
        "bed"
      ],
      "count": 1
    },
    {
      "spanish": "hermano",
      "english": "brother",
      "number": "505",
      "translations": [
        "brother"
      ],
      "count": 1
    },
    {
      "spanish": "huevo",
      "english": "egg",
      "number": "506",
      "translations": [
        "egg"
      ],
      "count": 1
    },
    {
      "spanish": "paseo",
      "english": "ride",
      "number": "507",
      "translations": [
        "ride"
      ],
      "count": 1
    },
    {
      "spanish": "celular",
      "english": "cell",
      "number": "508",
      "translations": [
        "cell"
      ],
      "count": 1
    },
    {
      "spanish": "creer",
      "english": "believe",
      "number": "509",
      "translations": [
        "believe"
      ],
      "count": 1
    },
    {
      "spanish": "quizás",
      "english": "perhaps",
      "number": "510",
      "translations": [
        "perhaps"
      ],
      "count": 1
    },
    {
      "spanish": "repentina",
      "english": "sudden",
      "number": "512",
      "translations": [
        "sudden"
      ],
      "count": 1
    },
    {
      "spanish": "contar",
      "english": "count",
      "number": "513",
      "translations": [
        "count"
      ],
      "count": 1
    },
    {
      "spanish": "plaza",
      "english": "square",
      "number": "514",
      "translations": [
        "square"
      ],
      "count": 1
    },
    {
      "spanish": "razón",
      "english": "reason",
      "number": "515",
      "translations": [
        "reason"
      ],
      "count": 1
    },
    {
      "spanish": "longitud",
      "english": "length",
      "number": "516",
      "translations": [
        "length"
      ],
      "count": 1
    },
    {
      "spanish": "representar",
      "english": "represent",
      "number": "517",
      "translations": [
        "represent"
      ],
      "count": 1
    },
    {
      "spanish": "arte",
      "english": "art",
      "number": "518",
      "translations": [
        "art"
      ],
      "count": 1
    },
    {
      "spanish": "sujeto",
      "english": "subject",
      "number": "519",
      "translations": [
        "subject"
      ],
      "count": 1
    },
    {
      "spanish": "región",
      "english": "region",
      "number": "520",
      "translations": [
        "region"
      ],
      "count": 1
    },
    {
      "spanish": "tamaño",
      "english": "size",
      "number": "521",
      "translations": [
        "size"
      ],
      "count": 1
    },
    {
      "spanish": "variar",
      "english": "vary",
      "number": "522",
      "translations": [
        "vary"
      ],
      "count": 1
    },
    {
      "spanish": "hablar",
      "english": "speak",
      "number": "524",
      "translations": [
        "speak"
      ],
      "count": 1
    },
    {
      "spanish": "peso",
      "english": "weight",
      "number": "525",
      "translations": [
        "weight"
      ],
      "count": 1
    },
    {
      "spanish": "general",
      "english": "general",
      "number": "526",
      "translations": [
        "general"
      ],
      "count": 1
    },
    {
      "spanish": "hielo",
      "english": "ice",
      "number": "527",
      "translations": [
        "ice"
      ],
      "count": 1
    },
    {
      "spanish": "materia",
      "english": "matter",
      "number": "528",
      "translations": [
        "matter"
      ],
      "count": 1
    },
    {
      "spanish": "círculo",
      "english": "circle",
      "number": "529",
      "translations": [
        "circle"
      ],
      "count": 1
    },
    {
      "spanish": "par",
      "english": "pair",
      "number": "530",
      "translations": [
        "pair"
      ],
      "count": 1
    },
    {
      "spanish": "incluir",
      "english": "include",
      "number": "531",
      "translations": [
        "include"
      ],
      "count": 1
    },
    {
      "spanish": "brecha",
      "english": "divide",
      "number": "532",
      "translations": [
        "divide"
      ],
      "count": 1
    },
    {
      "spanish": "sílaba",
      "english": "syllable",
      "number": "533",
      "translations": [
        "syllable"
      ],
      "count": 1
    },
    {
      "spanish": "bola",
      "english": "ball",
      "number": "536",
      "translations": [
        "ball"
      ],
      "count": 1
    },
    {
      "spanish": "aún",
      "english": "yet",
      "number": "537",
      "translations": [
        "yet"
      ],
      "count": 1
    },
    {
      "spanish": "ola",
      "english": "wave",
      "number": "538",
      "translations": [
        "wave"
      ],
      "count": 1
    },
    {
      "spanish": "corazón",
      "english": "heart",
      "number": "540",
      "translations": [
        "heart"
      ],
      "count": 1
    },
    {
      "spanish": "am",
      "english": "am",
      "number": "541",
      "translations": [
        "am"
      ],
      "count": 1
    },
    {
      "spanish": "presente",
      "english": "present",
      "number": "542",
      "translations": [
        "present"
      ],
      "count": 1
    },
    {
      "spanish": "pesada",
      "english": "heavy",
      "number": "543",
      "translations": [
        "heavy"
      ],
      "count": 1
    },
    {
      "spanish": "danza",
      "english": "dance",
      "number": "544",
      "translations": [
        "dance"
      ],
      "count": 1
    },
    {
      "spanish": "motor",
      "english": "engine",
      "number": "545",
      "translations": [
        "engine"
      ],
      "count": 1
    },
    {
      "spanish": "posición",
      "english": "position",
      "number": "546",
      "translations": [
        "position"
      ],
      "count": 1
    },
    {
      "spanish": "brazo",
      "english": "arm",
      "number": "547",
      "translations": [
        "arm"
      ],
      "count": 1
    },
    {
      "spanish": "vela",
      "english": "sail",
      "number": "549",
      "translations": [
        "sail"
      ],
      "count": 1
    },
    {
      "spanish": "materiales",
      "english": "material",
      "number": "550",
      "translations": [
        "material"
      ],
      "count": 1
    },
    {
      "spanish": "fracción",
      "english": "fraction",
      "number": "551",
      "translations": [
        "fraction"
      ],
      "count": 1
    },
    {
      "spanish": "bosque",
      "english": "forest",
      "number": "552",
      "translations": [
        "forest"
      ],
      "count": 1
    },
    {
      "spanish": "sentarse",
      "english": "sit",
      "number": "553",
      "translations": [
        "sit"
      ],
      "count": 1
    },
    {
      "spanish": "carrera",
      "english": "race",
      "number": "554",
      "translations": [
        "race"
      ],
      "count": 1
    },
    {
      "spanish": "ventana",
      "english": "window",
      "number": "555",
      "translations": [
        "window"
      ],
      "count": 1
    },
    {
      "spanish": "verano",
      "english": "summer",
      "number": "557",
      "translations": [
        "summer"
      ],
      "count": 1
    },
    {
      "spanish": "tren",
      "english": "train",
      "number": "558",
      "translations": [
        "train"
      ],
      "count": 1
    },
    {
      "spanish": "sueño",
      "english": "sleep",
      "number": "559",
      "translations": [
        "sleep"
      ],
      "count": 1
    },
    {
      "spanish": "demostrar",
      "english": "prove",
      "number": "560",
      "translations": [
        "prove"
      ],
      "count": 1
    },
    {
      "spanish": "solitario",
      "english": "lone",
      "number": "561",
      "translations": [
        "lone"
      ],
      "count": 1
    },
    {
      "spanish": "pierna",
      "english": "leg",
      "number": "562",
      "translations": [
        "leg"
      ],
      "count": 1
    },
    {
      "spanish": "ejercicio",
      "english": "exercise",
      "number": "563",
      "translations": [
        "exercise"
      ],
      "count": 1
    },
    {
      "spanish": "pared",
      "english": "wall",
      "number": "564",
      "translations": [
        "wall"
      ],
      "count": 1
    },
    {
      "spanish": "capturas",
      "english": "catch",
      "number": "565",
      "translations": [
        "catch"
      ],
      "count": 1
    },
    {
      "spanish": "monte",
      "english": "mount",
      "number": "566",
      "translations": [
        "mount"
      ],
      "count": 1
    },
    {
      "spanish": "desear",
      "english": "wish",
      "number": "567",
      "translations": [
        "wish"
      ],
      "count": 1
    },
    {
      "spanish": "cielo",
      "english": "sky",
      "number": "568",
      "translations": [
        "sky"
      ],
      "count": 1
    },
    {
      "spanish": "bordo",
      "english": "board",
      "number": "569",
      "translations": [
        "board"
      ],
      "count": 1
    },
    {
      "spanish": "alegría",
      "english": "joy",
      "number": "570",
      "translations": [
        "joy"
      ],
      "count": 1
    },
    {
      "spanish": "invierno",
      "english": "winter",
      "number": "571",
      "translations": [
        "winter"
      ],
      "count": 1
    },
    {
      "spanish": "satélite",
      "english": "sat",
      "number": "572",
      "translations": [
        "sat"
      ],
      "count": 1
    },
    {
      "spanish": "escrito",
      "english": "written",
      "number": "573",
      "translations": [
        "written"
      ],
      "count": 1
    },
    {
      "spanish": "salvaje",
      "english": "wild",
      "number": "574",
      "translations": [
        "wild"
      ],
      "count": 1
    },
    {
      "spanish": "instrumento",
      "english": "instrument",
      "number": "575",
      "translations": [
        "instrument"
      ],
      "count": 1
    },
    {
      "spanish": "guardado",
      "english": "kept",
      "number": "576",
      "translations": [
        "kept"
      ],
      "count": 1
    },
    {
      "spanish": "vidrio",
      "english": "glass",
      "number": "577",
      "translations": [
        "glass"
      ],
      "count": 1
    },
    {
      "spanish": "hierba",
      "english": "grass",
      "number": "578",
      "translations": [
        "grass"
      ],
      "count": 1
    },
    {
      "spanish": "vaca",
      "english": "cow",
      "number": "579",
      "translations": [
        "cow"
      ],
      "count": 1
    },
    {
      "spanish": "borde",
      "english": "edge",
      "number": "581",
      "translations": [
        "edge"
      ],
      "count": 1
    },
    {
      "spanish": "signo",
      "english": "sign",
      "number": "582",
      "translations": [
        "sign"
      ],
      "count": 1
    },
    {
      "spanish": "visita",
      "english": "visit",
      "number": "583",
      "translations": [
        "visit"
      ],
      "count": 1
    },
    {
      "spanish": "pasado",
      "english": "past",
      "number": "584",
      "translations": [
        "past"
      ],
      "count": 1
    },
    {
      "spanish": "diversión",
      "english": "fun",
      "number": "586",
      "translations": [
        "fun"
      ],
      "count": 1
    },
    {
      "spanish": "brillante",
      "english": "bright",
      "number": "587",
      "translations": [
        "bright"
      ],
      "count": 1
    },
    {
      "spanish": "gas",
      "english": "gas",
      "number": "588",
      "translations": [
        "gas"
      ],
      "count": 1
    },
    {
      "spanish": "mes",
      "english": "month",
      "number": "590",
      "translations": [
        "month"
      ],
      "count": 1
    },
    {
      "spanish": "millones",
      "english": "million",
      "number": "591",
      "translations": [
        "million"
      ],
      "count": 1
    },
    {
      "spanish": "soportar",
      "english": "bear",
      "number": "592",
      "translations": [
        "bear"
      ],
      "count": 1
    },
    {
      "spanish": "acabado",
      "english": "finish",
      "number": "593",
      "translations": [
        "finish"
      ],
      "count": 1
    },
    {
      "spanish": "feliz",
      "english": "happy",
      "number": "594",
      "translations": [
        "happy"
      ],
      "count": 1
    },
    {
      "spanish": "esperanza",
      "english": "hope",
      "number": "595",
      "translations": [
        "hope"
      ],
      "count": 1
    },
    {
      "spanish": "flor",
      "english": "flower",
      "number": "596",
      "translations": [
        "flower"
      ],
      "count": 1
    },
    {
      "spanish": "vestir",
      "english": "clothe",
      "number": "597",
      "translations": [
        "clothe"
      ],
      "count": 1
    },
    {
      "spanish": "extraño",
      "english": "strange",
      "number": "598",
      "translations": [
        "strange"
      ],
      "count": 1
    },
    {
      "spanish": "se ha ido",
      "english": "gone",
      "number": "599",
      "translations": [
        "gone"
      ],
      "count": 1
    },
    {
      "spanish": "comercio",
      "english": "trade",
      "number": "600",
      "translations": [
        "trade"
      ],
      "count": 1
    },
    {
      "spanish": "melodía",
      "english": "melody",
      "number": "601",
      "translations": [
        "melody"
      ],
      "count": 1
    },
    {
      "spanish": "viaje",
      "english": "trip",
      "number": "602",
      "translations": [
        "trip"
      ],
      "count": 1
    },
    {
      "spanish": "oficina",
      "english": "office",
      "number": "603",
      "translations": [
        "office"
      ],
      "count": 1
    },
    {
      "spanish": "recibir",
      "english": "receive",
      "number": "604",
      "translations": [
        "receive"
      ],
      "count": 1
    },
    {
      "spanish": "fila",
      "english": "row",
      "number": "605",
      "translations": [
        "row"
      ],
      "count": 1
    },
    {
      "spanish": "boca",
      "english": "mouth",
      "number": "606",
      "translations": [
        "mouth"
      ],
      "count": 1
    },
    {
      "spanish": "exacta",
      "english": "exact",
      "number": "607",
      "translations": [
        "exact"
      ],
      "count": 1
    },
    {
      "spanish": "símbolo",
      "english": "symbol",
      "number": "608",
      "translations": [
        "symbol"
      ],
      "count": 1
    },
    {
      "spanish": "morir",
      "english": "die",
      "number": "609",
      "translations": [
        "die"
      ],
      "count": 1
    },
    {
      "spanish": "excepto",
      "english": "except",
      "number": "613",
      "translations": [
        "except"
      ],
      "count": 1
    },
    {
      "spanish": "escribió",
      "english": "wrote",
      "number": "614",
      "translations": [
        "wrote"
      ],
      "count": 1
    },
    {
      "spanish": "semilla",
      "english": "seed",
      "number": "615",
      "translations": [
        "seed"
      ],
      "count": 1
    },
    {
      "spanish": "tono",
      "english": "tone",
      "number": "616",
      "translations": [
        "tone"
      ],
      "count": 1
    },
    {
      "spanish": "unirse",
      "english": "join",
      "number": "617",
      "translations": [
        "join"
      ],
      "count": 1
    },
    {
      "spanish": "sugerir",
      "english": "suggest",
      "number": "618",
      "translations": [
        "suggest"
      ],
      "count": 1
    },
    {
      "spanish": "limpia",
      "english": "clean",
      "number": "619",
      "translations": [
        "clean"
      ],
      "count": 1
    },
    {
      "spanish": "rotura",
      "english": "break",
      "number": "620",
      "translations": [
        "break"
      ],
      "count": 1
    },
    {
      "spanish": "dama",
      "english": "lady",
      "number": "621",
      "translations": [
        "lady"
      ],
      "count": 1
    },
    {
      "spanish": "patio",
      "english": "yard",
      "number": "622",
      "translations": [
        "yard"
      ],
      "count": 1
    },
    {
      "spanish": "aumentando",
      "english": "rise",
      "number": "623",
      "translations": [
        "rise"
      ],
      "count": 1
    },
    {
      "spanish": "golpe",
      "english": "blow",
      "number": "625",
      "translations": [
        "blow"
      ],
      "count": 1
    },
    {
      "spanish": "aceite",
      "english": "oil",
      "number": "626",
      "translations": [
        "oil"
      ],
      "count": 1
    },
    {
      "spanish": "sangre",
      "english": "blood",
      "number": "627",
      "translations": [
        "blood"
      ],
      "count": 1
    },
    {
      "spanish": "tocar",
      "english": "touch",
      "number": "628",
      "translations": [
        "touch"
      ],
      "count": 1
    },
    {
      "spanish": "creció",
      "english": "grew",
      "number": "629",
      "translations": [
        "grew"
      ],
      "count": 1
    },
    {
      "spanish": "ciento",
      "english": "cent",
      "number": "630",
      "translations": [
        "cent"
      ],
      "count": 1
    },
    {
      "spanish": "mezclar",
      "english": "mix",
      "number": "631",
      "translations": [
        "mix"
      ],
      "count": 1
    },
    {
      "spanish": "equipo",
      "english": "team",
      "number": "632",
      "translations": [
        "team"
      ],
      "count": 1
    },
    {
      "spanish": "alambre",
      "english": "wire",
      "number": "633",
      "translations": [
        "wire"
      ],
      "count": 1
    },
    {
      "spanish": "costo",
      "english": "cost",
      "number": "634",
      "translations": [
        "cost"
      ],
      "count": 1
    },
    {
      "spanish": "perdido",
      "english": "lost",
      "number": "635",
      "translations": [
        "lost"
      ],
      "count": 1
    },
    {
      "spanish": "marrón",
      "english": "brown",
      "number": "636",
      "translations": [
        "brown"
      ],
      "count": 1
    },
    {
      "spanish": "desgaste",
      "english": "wear",
      "number": "637",
      "translations": [
        "wear"
      ],
      "count": 1
    },
    {
      "spanish": "jardín",
      "english": "garden",
      "number": "638",
      "translations": [
        "garden"
      ],
      "count": 1
    },
    {
      "spanish": "igual",
      "english": "equal",
      "number": "639",
      "translations": [
        "equal"
      ],
      "count": 1
    },
    {
      "spanish": "enviado",
      "english": "sent",
      "number": "640",
      "translations": [
        "sent"
      ],
      "count": 1
    },
    {
      "spanish": "elegir",
      "english": "choose",
      "number": "641",
      "translations": [
        "choose"
      ],
      "count": 1
    },
    {
      "spanish": "cayó",
      "english": "fell",
      "number": "642",
      "translations": [
        "fell"
      ],
      "count": 1
    },
    {
      "spanish": "encajar",
      "english": "fit",
      "number": "643",
      "translations": [
        "fit"
      ],
      "count": 1
    },
    {
      "spanish": "fluir",
      "english": "flow",
      "number": "644",
      "translations": [
        "flow"
      ],
      "count": 1
    },
    {
      "spanish": "justo",
      "english": "fair",
      "number": "645",
      "translations": [
        "fair"
      ],
      "count": 1
    },
    {
      "spanish": "banco",
      "english": "bank",
      "number": "646",
      "translations": [
        "bank"
      ],
      "count": 1
    },
    {
      "spanish": "guardar",
      "english": "save",
      "number": "648",
      "translations": [
        "save"
      ],
      "count": 1
    },
    {
      "spanish": "el control",
      "english": "control",
      "number": "649",
      "translations": [
        "control"
      ],
      "count": 1
    },
    {
      "spanish": "decimal",
      "english": "decimal",
      "number": "650",
      "translations": [
        "decimal"
      ],
      "count": 1
    },
    {
      "spanish": "demás",
      "english": "else",
      "number": "652",
      "translations": [
        "else"
      ],
      "count": 1
    },
    {
      "spanish": "rompió",
      "english": "broke",
      "number": "654",
      "translations": [
        "broke"
      ],
      "count": 1
    },
    {
      "spanish": "caso",
      "english": "case",
      "number": "655",
      "translations": [
        "case"
      ],
      "count": 1
    },
    {
      "spanish": "matar",
      "english": "kill",
      "number": "657",
      "translations": [
        "kill"
      ],
      "count": 1
    },
    {
      "spanish": "hijo",
      "english": "son",
      "number": "658",
      "translations": [
        "son"
      ],
      "count": 1
    },
    {
      "spanish": "lago",
      "english": "lake",
      "number": "659",
      "translations": [
        "lake"
      ],
      "count": 1
    },
    {
      "spanish": "momento",
      "english": "moment",
      "number": "660",
      "translations": [
        "moment"
      ],
      "count": 1
    },
    {
      "spanish": "escala",
      "english": "scale",
      "number": "661",
      "translations": [
        "scale"
      ],
      "count": 1
    },
    {
      "spanish": "primavera",
      "english": "spring",
      "number": "663",
      "translations": [
        "spring"
      ],
      "count": 1
    },
    {
      "spanish": "observar",
      "english": "observe",
      "number": "664",
      "translations": [
        "observe"
      ],
      "count": 1
    },
    {
      "spanish": "recta",
      "english": "straight",
      "number": "666",
      "translations": [
        "straight"
      ],
      "count": 1
    },
    {
      "spanish": "consonante",
      "english": "consonant",
      "number": "667",
      "translations": [
        "consonant"
      ],
      "count": 1
    },
    {
      "spanish": "nación",
      "english": "nation",
      "number": "668",
      "translations": [
        "nation"
      ],
      "count": 1
    },
    {
      "spanish": "diccionario",
      "english": "dictionary",
      "number": "669",
      "translations": [
        "dictionary"
      ],
      "count": 1
    },
    {
      "spanish": "leche",
      "english": "milk",
      "number": "670",
      "translations": [
        "milk"
      ],
      "count": 1
    },
    {
      "spanish": "velocidad",
      "english": "speed",
      "number": "671",
      "translations": [
        "speed"
      ],
      "count": 1
    },
    {
      "spanish": "método",
      "english": "method",
      "number": "672",
      "translations": [
        "method"
      ],
      "count": 1
    },
    {
      "spanish": "órgano",
      "english": "organ",
      "number": "673",
      "translations": [
        "organ"
      ],
      "count": 1
    },
    {
      "spanish": "pagar",
      "english": "pay",
      "number": "674",
      "translations": [
        "pay"
      ],
      "count": 1
    },
    {
      "spanish": "edad",
      "english": "age",
      "number": "675",
      "translations": [
        "age"
      ],
      "count": 1
    },
    {
      "spanish": "sección",
      "english": "section",
      "number": "676",
      "translations": [
        "section"
      ],
      "count": 1
    },
    {
      "spanish": "vestido",
      "english": "dress",
      "number": "677",
      "translations": [
        "dress"
      ],
      "count": 1
    },
    {
      "spanish": "nube",
      "english": "cloud",
      "number": "678",
      "translations": [
        "cloud"
      ],
      "count": 1
    },
    {
      "spanish": "sorpresa",
      "english": "surprise",
      "number": "679",
      "translations": [
        "surprise"
      ],
      "count": 1
    },
    {
      "spanish": "tranquila",
      "english": "quiet",
      "number": "680",
      "translations": [
        "quiet"
      ],
      "count": 1
    },
    {
      "spanish": "piedra",
      "english": "stone",
      "number": "681",
      "translations": [
        "stone"
      ],
      "count": 1
    },
    {
      "spanish": "ascenso",
      "english": "climb",
      "number": "683",
      "translations": [
        "climb"
      ],
      "count": 1
    },
    {
      "spanish": "diseño",
      "english": "design",
      "number": "685",
      "translations": [
        "design"
      ],
      "count": 1
    },
    {
      "spanish": "pobre",
      "english": "poor",
      "number": "686",
      "translations": [
        "poor"
      ],
      "count": 1
    },
    {
      "spanish": "experimento",
      "english": "experiment",
      "number": "688",
      "translations": [
        "experiment"
      ],
      "count": 1
    },
    {
      "spanish": "inferior",
      "english": "bottom",
      "number": "689",
      "translations": [
        "bottom"
      ],
      "count": 1
    },
    {
      "spanish": "clave",
      "english": "key",
      "number": "690",
      "translations": [
        "key"
      ],
      "count": 1
    },
    {
      "spanish": "hierro",
      "english": "iron",
      "number": "691",
      "translations": [
        "iron"
      ],
      "count": 1
    },
    {
      "spanish": "sola",
      "english": "single",
      "number": "692",
      "translations": [
        "single"
      ],
      "count": 1
    },
    {
      "spanish": "palillo",
      "english": "stick",
      "number": "693",
      "translations": [
        "stick"
      ],
      "count": 1
    },
    {
      "spanish": "plana",
      "english": "flat",
      "number": "694",
      "translations": [
        "flat"
      ],
      "count": 1
    },
    {
      "spanish": "veinte",
      "english": "twenty",
      "number": "695",
      "translations": [
        "twenty"
      ],
      "count": 1
    },
    {
      "spanish": "piel",
      "english": "skin",
      "number": "696",
      "translations": [
        "skin"
      ],
      "count": 1
    },
    {
      "spanish": "sonrisa",
      "english": "smile",
      "number": "697",
      "translations": [
        "smile"
      ],
      "count": 1
    },
    {
      "spanish": "pliegue",
      "english": "crease",
      "number": "698",
      "translations": [
        "crease"
      ],
      "count": 1
    },
    {
      "spanish": "agujero",
      "english": "hole",
      "number": "699",
      "translations": [
        "hole"
      ],
      "count": 1
    },
    {
      "spanish": "saltar",
      "english": "jump",
      "number": "700",
      "translations": [
        "jump"
      ],
      "count": 1
    },
    {
      "spanish": "bebé",
      "english": "baby",
      "number": "701",
      "translations": [
        "baby"
      ],
      "count": 1
    },
    {
      "spanish": "ocho",
      "english": "eight",
      "number": "702",
      "translations": [
        "eight"
      ],
      "count": 1
    },
    {
      "spanish": "pueblo",
      "english": "village",
      "number": "703",
      "translations": [
        "village"
      ],
      "count": 1
    },
    {
      "spanish": "se reúnen",
      "english": "meet",
      "number": "704",
      "translations": [
        "meet"
      ],
      "count": 1
    },
    {
      "spanish": "raíz",
      "english": "root",
      "number": "705",
      "translations": [
        "root"
      ],
      "count": 1
    },
    {
      "spanish": "comprar",
      "english": "buy",
      "number": "706",
      "translations": [
        "buy"
      ],
      "count": 1
    },
    {
      "spanish": "aumentar",
      "english": "raise",
      "number": "707",
      "translations": [
        "raise"
      ],
      "count": 1
    },
    {
      "spanish": "de metal",
      "english": "metal",
      "number": "709",
      "translations": [
        "metal"
      ],
      "count": 1
    },
    {
      "spanish": "empujar",
      "english": "push",
      "number": "711",
      "translations": [
        "push"
      ],
      "count": 1
    },
    {
      "spanish": "siete",
      "english": "seven",
      "number": "712",
      "translations": [
        "seven"
      ],
      "count": 1
    },
    {
      "spanish": "párrafo",
      "english": "paragraph",
      "number": "713",
      "translations": [
        "paragraph"
      ],
      "count": 1
    },
    {
      "spanish": "tercero",
      "english": "third",
      "number": "714",
      "translations": [
        "third"
      ],
      "count": 1
    },
    {
      "spanish": "deberá",
      "english": "shall",
      "number": "715",
      "translations": [
        "shall"
      ],
      "count": 1
    },
    {
      "spanish": "en espera",
      "english": "held",
      "number": "716",
      "translations": [
        "held"
      ],
      "count": 1
    },
    {
      "spanish": "pelo",
      "english": "hair",
      "number": "717",
      "translations": [
        "hair"
      ],
      "count": 1
    },
    {
      "spanish": "describir",
      "english": "describe",
      "number": "718",
      "translations": [
        "describe"
      ],
      "count": 1
    },
    {
      "spanish": "cocinero",
      "english": "cook",
      "number": "719",
      "translations": [
        "cook"
      ],
      "count": 1
    },
    {
      "spanish": "piso",
      "english": "floor",
      "number": "720",
      "translations": [
        "floor"
      ],
      "count": 1
    },
    {
      "spanish": "ya sea",
      "english": "either",
      "number": "721",
      "translations": [
        "either"
      ],
      "count": 1
    },
    {
      "spanish": "resultado",
      "english": "result",
      "number": "722",
      "translations": [
        "result"
      ],
      "count": 1
    },
    {
      "spanish": "quemar",
      "english": "burn",
      "number": "723",
      "translations": [
        "burn"
      ],
      "count": 1
    },
    {
      "spanish": "colina",
      "english": "hill",
      "number": "724",
      "translations": [
        "hill"
      ],
      "count": 1
    },
    {
      "spanish": "gato",
      "english": "cat",
      "number": "726",
      "translations": [
        "cat"
      ],
      "count": 1
    },
    {
      "spanish": "siglo",
      "english": "century",
      "number": "727",
      "translations": [
        "century"
      ],
      "count": 1
    },
    {
      "spanish": "considerar",
      "english": "consider",
      "number": "728",
      "translations": [
        "consider"
      ],
      "count": 1
    },
    {
      "spanish": "ley",
      "english": "law",
      "number": "730",
      "translations": [
        "law"
      ],
      "count": 1
    },
    {
      "spanish": "bit",
      "english": "bit",
      "number": "731",
      "translations": [
        "bit"
      ],
      "count": 1
    },
    {
      "spanish": "costa",
      "english": "coast",
      "number": "732",
      "translations": [
        "coast"
      ],
      "count": 1
    },
    {
      "spanish": "copia",
      "english": "copy",
      "number": "733",
      "translations": [
        "copy"
      ],
      "count": 1
    },
    {
      "spanish": "silencio",
      "english": "silent",
      "number": "735",
      "translations": [
        "silent"
      ],
      "count": 1
    },
    {
      "spanish": "de altura",
      "english": "tall",
      "number": "736",
      "translations": [
        "tall"
      ],
      "count": 1
    },
    {
      "spanish": "arena",
      "english": "sand",
      "number": "737",
      "translations": [
        "sand"
      ],
      "count": 1
    },
    {
      "spanish": "rollo",
      "english": "roll",
      "number": "739",
      "translations": [
        "roll"
      ],
      "count": 1
    },
    {
      "spanish": "temperatura",
      "english": "temperature",
      "number": "740",
      "translations": [
        "temperature"
      ],
      "count": 1
    },
    {
      "spanish": "dedo",
      "english": "finger",
      "number": "741",
      "translations": [
        "finger"
      ],
      "count": 1
    },
    {
      "spanish": "industria",
      "english": "industry",
      "number": "742",
      "translations": [
        "industry"
      ],
      "count": 1
    },
    {
      "spanish": "valor",
      "english": "value",
      "number": "743",
      "translations": [
        "value"
      ],
      "count": 1
    },
    {
      "spanish": "lucha",
      "english": "fight",
      "number": "744",
      "translations": [
        "fight"
      ],
      "count": 1
    },
    {
      "spanish": "mentira",
      "english": "lie",
      "number": "745",
      "translations": [
        "lie"
      ],
      "count": 1
    },
    {
      "spanish": "batir",
      "english": "beat",
      "number": "746",
      "translations": [
        "beat"
      ],
      "count": 1
    },
    {
      "spanish": "excitar",
      "english": "excite",
      "number": "747",
      "translations": [
        "excite"
      ],
      "count": 1
    },
    {
      "spanish": "naturales",
      "english": "natural",
      "number": "748",
      "translations": [
        "natural"
      ],
      "count": 1
    },
    {
      "spanish": "de capital",
      "english": "capital",
      "number": "751",
      "translations": [
        "capital"
      ],
      "count": 1
    },
    {
      "spanish": "no lo hará",
      "english": "won’t",
      "number": "752",
      "translations": [
        "won’t"
      ],
      "count": 1
    },
    {
      "spanish": "silla",
      "english": "chair",
      "number": "753",
      "translations": [
        "chair"
      ],
      "count": 1
    },
    {
      "spanish": "peligro",
      "english": "danger",
      "number": "754",
      "translations": [
        "danger"
      ],
      "count": 1
    },
    {
      "spanish": "fruta",
      "english": "fruit",
      "number": "755",
      "translations": [
        "fruit"
      ],
      "count": 1
    },
    {
      "spanish": "rica",
      "english": "rich",
      "number": "756",
      "translations": [
        "rich"
      ],
      "count": 1
    },
    {
      "spanish": "de espesor",
      "english": "thick",
      "number": "757",
      "translations": [
        "thick"
      ],
      "count": 1
    },
    {
      "spanish": "soldado",
      "english": "soldier",
      "number": "758",
      "translations": [
        "soldier"
      ],
      "count": 1
    },
    {
      "spanish": "proceso",
      "english": "process",
      "number": "759",
      "translations": [
        "process"
      ],
      "count": 1
    },
    {
      "spanish": "operar",
      "english": "operate",
      "number": "760",
      "translations": [
        "operate"
      ],
      "count": 1
    },
    {
      "spanish": "práctica",
      "english": "practice",
      "number": "761",
      "translations": [
        "practice"
      ],
      "count": 1
    },
    {
      "spanish": "separada",
      "english": "separate",
      "number": "762",
      "translations": [
        "separate"
      ],
      "count": 1
    },
    {
      "spanish": "difícil",
      "english": "difficult",
      "number": "763",
      "translations": [
        "difficult"
      ],
      "count": 1
    },
    {
      "spanish": "médico",
      "english": "doctor",
      "number": "764",
      "translations": [
        "doctor"
      ],
      "count": 1
    },
    {
      "spanish": "por favor",
      "english": "please",
      "number": "765",
      "translations": [
        "please"
      ],
      "count": 1
    },
    {
      "spanish": "proteger",
      "english": "protect",
      "number": "766",
      "translations": [
        "protect"
      ],
      "count": 1
    },
    {
      "spanish": "mediodía",
      "english": "noon",
      "number": "767",
      "translations": [
        "noon"
      ],
      "count": 1
    },
    {
      "spanish": "de cultivos",
      "english": "crop",
      "number": "768",
      "translations": [
        "crop"
      ],
      "count": 1
    },
    {
      "spanish": "moderno",
      "english": "modern",
      "number": "769",
      "translations": [
        "modern"
      ],
      "count": 1
    },
    {
      "spanish": "elemento",
      "english": "element",
      "number": "770",
      "translations": [
        "element"
      ],
      "count": 1
    },
    {
      "spanish": "golpear",
      "english": "hit",
      "number": "771",
      "translations": [
        "hit"
      ],
      "count": 1
    },
    {
      "spanish": "estudiante",
      "english": "student",
      "number": "772",
      "translations": [
        "student"
      ],
      "count": 1
    },
    {
      "spanish": "esquina",
      "english": "corner",
      "number": "773",
      "translations": [
        "corner"
      ],
      "count": 1
    },
    {
      "spanish": "suministro",
      "english": "supply",
      "number": "775",
      "translations": [
        "supply"
      ],
      "count": 1
    },
    {
      "spanish": "cuya",
      "english": "whose",
      "number": "776",
      "translations": [
        "whose"
      ],
      "count": 1
    },
    {
      "spanish": "localizar",
      "english": "locate",
      "number": "777",
      "translations": [
        "locate"
      ],
      "count": 1
    },
    {
      "spanish": "anillo",
      "english": "ring",
      "number": "778",
      "translations": [
        "ring"
      ],
      "count": 1
    },
    {
      "spanish": "carácter",
      "english": "character",
      "number": "779",
      "translations": [
        "character"
      ],
      "count": 1
    },
    {
      "spanish": "insecto",
      "english": "insect",
      "number": "780",
      "translations": [
        "insect"
      ],
      "count": 1
    },
    {
      "spanish": "capturado",
      "english": "caught",
      "number": "781",
      "translations": [
        "caught"
      ],
      "count": 1
    },
    {
      "spanish": "período",
      "english": "period",
      "number": "782",
      "translations": [
        "period"
      ],
      "count": 1
    },
    {
      "spanish": "indicar",
      "english": "indicate",
      "number": "783",
      "translations": [
        "indicate"
      ],
      "count": 1
    },
    {
      "spanish": "Radio",
      "english": "radio",
      "number": "784",
      "translations": [
        "radio"
      ],
      "count": 1
    },
    {
      "spanish": "habló",
      "english": "spoke",
      "number": "785",
      "translations": [
        "spoke"
      ],
      "count": 1
    },
    {
      "spanish": "átomo",
      "english": "atom",
      "number": "786",
      "translations": [
        "atom"
      ],
      "count": 1
    },
    {
      "spanish": "humana",
      "english": "human",
      "number": "787",
      "translations": [
        "human"
      ],
      "count": 1
    },
    {
      "spanish": "efecto",
      "english": "effect",
      "number": "789",
      "translations": [
        "effect"
      ],
      "count": 1
    },
    {
      "spanish": "eléctrica",
      "english": "electric",
      "number": "790",
      "translations": [
        "electric"
      ],
      "count": 1
    },
    {
      "spanish": "esperar",
      "english": "expect",
      "number": "791",
      "translations": [
        "expect"
      ],
      "count": 1
    },
    {
      "spanish": "hueso",
      "english": "bone",
      "number": "792",
      "translations": [
        "bone"
      ],
      "count": 1
    },
    {
      "spanish": "ferrocarril",
      "english": "rail",
      "number": "793",
      "translations": [
        "rail"
      ],
      "count": 1
    },
    {
      "spanish": "imaginar",
      "english": "imagine",
      "number": "794",
      "translations": [
        "imagine"
      ],
      "count": 1
    },
    {
      "spanish": "proporcionar",
      "english": "provide",
      "number": "795",
      "translations": [
        "provide"
      ],
      "count": 1
    },
    {
      "spanish": "por tanto,",
      "english": "thus",
      "number": "797",
      "translations": [
        "thus"
      ],
      "count": 1
    },
    {
      "spanish": "mujer",
      "english": "woman",
      "number": "799",
      "translations": [
        "woman"
      ],
      "count": 1
    },
    {
      "spanish": "capitán",
      "english": "captain",
      "number": "800",
      "translations": [
        "captain"
      ],
      "count": 1
    },
    {
      "spanish": "adivinar",
      "english": "guess",
      "number": "801",
      "translations": [
        "guess"
      ],
      "count": 1
    },
    {
      "spanish": "necesario",
      "english": "necessary",
      "number": "802",
      "translations": [
        "necessary"
      ],
      "count": 1
    },
    {
      "spanish": "agudo",
      "english": "sharp",
      "number": "803",
      "translations": [
        "sharp"
      ],
      "count": 1
    },
    {
      "spanish": "ala",
      "english": "wing",
      "number": "804",
      "translations": [
        "wing"
      ],
      "count": 1
    },
    {
      "spanish": "crear",
      "english": "create",
      "number": "805",
      "translations": [
        "create"
      ],
      "count": 1
    },
    {
      "spanish": "vecino",
      "english": "neighbor",
      "number": "806",
      "translations": [
        "neighbor"
      ],
      "count": 1
    },
    {
      "spanish": "lavado",
      "english": "wash",
      "number": "807",
      "translations": [
        "wash"
      ],
      "count": 1
    },
    {
      "spanish": "bate",
      "english": "bat",
      "number": "808",
      "translations": [
        "bat"
      ],
      "count": 1
    },
    {
      "spanish": "más bien",
      "english": "rather",
      "number": "809",
      "translations": [
        "rather"
      ],
      "count": 1
    },
    {
      "spanish": "multitud",
      "english": "crowd",
      "number": "810",
      "translations": [
        "crowd"
      ],
      "count": 1
    },
    {
      "spanish": "maíz",
      "english": "corn",
      "number": "811",
      "translations": [
        "corn"
      ],
      "count": 1
    },
    {
      "spanish": "comparar",
      "english": "compare",
      "number": "812",
      "translations": [
        "compare"
      ],
      "count": 1
    },
    {
      "spanish": "poema",
      "english": "poem",
      "number": "813",
      "translations": [
        "poem"
      ],
      "count": 1
    },
    {
      "spanish": "cadena",
      "english": "string",
      "number": "814",
      "translations": [
        "string"
      ],
      "count": 1
    },
    {
      "spanish": "campana",
      "english": "bell",
      "number": "815",
      "translations": [
        "bell"
      ],
      "count": 1
    },
    {
      "spanish": "dependerá",
      "english": "depend",
      "number": "816",
      "translations": [
        "depend"
      ],
      "count": 1
    },
    {
      "spanish": "carne",
      "english": "meat",
      "number": "817",
      "translations": [
        "meat"
      ],
      "count": 1
    },
    {
      "spanish": "frotar",
      "english": "rub",
      "number": "818",
      "translations": [
        "rub"
      ],
      "count": 1
    },
    {
      "spanish": "tubo",
      "english": "tube",
      "number": "819",
      "translations": [
        "tube"
      ],
      "count": 1
    },
    {
      "spanish": "famoso",
      "english": "famous",
      "number": "820",
      "translations": [
        "famous"
      ],
      "count": 1
    },
    {
      "spanish": "dólar",
      "english": "dollar",
      "number": "921",
      "translations": [
        "dollar"
      ],
      "count": 1
    },
    {
      "spanish": "corriente",
      "english": "stream",
      "number": "822",
      "translations": [
        "stream"
      ],
      "count": 1
    },
    {
      "spanish": "delgado",
      "english": "thin",
      "number": "825",
      "translations": [
        "thin"
      ],
      "count": 1
    },
    {
      "spanish": "triángulo",
      "english": "triangle",
      "number": "826",
      "translations": [
        "triangle"
      ],
      "count": 1
    },
    {
      "spanish": "planeta",
      "english": "planet",
      "number": "827",
      "translations": [
        "planet"
      ],
      "count": 1
    },
    {
      "spanish": "prisa",
      "english": "hurry",
      "number": "828",
      "translations": [
        "hurry"
      ],
      "count": 1
    },
    {
      "spanish": "jefe",
      "english": "chief",
      "number": "829",
      "translations": [
        "chief"
      ],
      "count": 1
    },
    {
      "spanish": "colonia",
      "english": "colony",
      "number": "830",
      "translations": [
        "colony"
      ],
      "count": 1
    },
    {
      "spanish": "reloj",
      "english": "clock",
      "number": "831",
      "translations": [
        "clock"
      ],
      "count": 1
    },
    {
      "spanish": "mina",
      "english": "mine",
      "number": "832",
      "translations": [
        "mine"
      ],
      "count": 1
    },
    {
      "spanish": "empate",
      "english": "tie",
      "number": "833",
      "translations": [
        "tie"
      ],
      "count": 1
    },
    {
      "spanish": "entrar",
      "english": "enter",
      "number": "834",
      "translations": [
        "enter"
      ],
      "count": 1
    },
    {
      "spanish": "importante",
      "english": "major",
      "number": "835",
      "translations": [
        "major"
      ],
      "count": 1
    },
    {
      "spanish": "búsqueda",
      "english": "search",
      "number": "837",
      "translations": [
        "search"
      ],
      "count": 1
    },
    {
      "spanish": "enviar",
      "english": "send",
      "number": "838",
      "translations": [
        "send"
      ],
      "count": 1
    },
    {
      "spanish": "amarillo",
      "english": "yellow",
      "number": "839",
      "translations": [
        "yellow"
      ],
      "count": 1
    },
    {
      "spanish": "pistola",
      "english": "gun",
      "number": "840",
      "translations": [
        "gun"
      ],
      "count": 1
    },
    {
      "spanish": "permitir",
      "english": "allow",
      "number": "841",
      "translations": [
        "allow"
      ],
      "count": 1
    },
    {
      "spanish": "print",
      "english": "print",
      "number": "842",
      "translations": [
        "print"
      ],
      "count": 1
    },
    {
      "spanish": "muerto",
      "english": "dead",
      "number": "843",
      "translations": [
        "dead"
      ],
      "count": 1
    },
    {
      "spanish": "desierto",
      "english": "desert",
      "number": "845",
      "translations": [
        "desert"
      ],
      "count": 1
    },
    {
      "spanish": "traje",
      "english": "suit",
      "number": "846",
      "translations": [
        "suit"
      ],
      "count": 1
    },
    {
      "spanish": "actual",
      "english": "current",
      "number": "847",
      "translations": [
        "current"
      ],
      "count": 1
    },
    {
      "spanish": "ascensor",
      "english": "lift",
      "number": "848",
      "translations": [
        "lift"
      ],
      "count": 1
    },
    {
      "spanish": "rosa",
      "english": "rose",
      "number": "840",
      "translations": [
        "rose"
      ],
      "count": 1
    },
    {
      "spanish": "master",
      "english": "master",
      "number": "851",
      "translations": [
        "master"
      ],
      "count": 1
    },
    {
      "spanish": "pista",
      "english": "track",
      "number": "852",
      "translations": [
        "track"
      ],
      "count": 1
    },
    {
      "spanish": "orilla",
      "english": "shore",
      "number": "854",
      "translations": [
        "shore"
      ],
      "count": 1
    },
    {
      "spanish": "división",
      "english": "division",
      "number": "855",
      "translations": [
        "division"
      ],
      "count": 1
    },
    {
      "spanish": "hoja",
      "english": "sheet",
      "number": "856",
      "translations": [
        "sheet"
      ],
      "count": 1
    },
    {
      "spanish": "sustancia",
      "english": "substance",
      "number": "857",
      "translations": [
        "substance"
      ],
      "count": 1
    },
    {
      "spanish": "favorecer",
      "english": "favor",
      "number": "858",
      "translations": [
        "favor"
      ],
      "count": 1
    },
    {
      "spanish": "conectar",
      "english": "connect",
      "number": "859",
      "translations": [
        "connect"
      ],
      "count": 1
    },
    {
      "spanish": "mensaje",
      "english": "post",
      "number": "860",
      "translations": [
        "post"
      ],
      "count": 1
    },
    {
      "spanish": "acorde",
      "english": "chord",
      "number": "862",
      "translations": [
        "chord"
      ],
      "count": 1
    },
    {
      "spanish": "grasa",
      "english": "fat",
      "number": "863",
      "translations": [
        "fat"
      ],
      "count": 1
    },
    {
      "spanish": "contento",
      "english": "glad",
      "number": "864",
      "translations": [
        "glad"
      ],
      "count": 1
    },
    {
      "spanish": "originales",
      "english": "original",
      "number": "865",
      "translations": [
        "original"
      ],
      "count": 1
    },
    {
      "spanish": "cuota",
      "english": "share",
      "number": "866",
      "translations": [
        "share"
      ],
      "count": 1
    },
    {
      "spanish": "estación",
      "english": "station",
      "number": "867",
      "translations": [
        "station"
      ],
      "count": 1
    },
    {
      "spanish": "papá",
      "english": "dad",
      "number": "868",
      "translations": [
        "dad"
      ],
      "count": 1
    },
    {
      "spanish": "pan",
      "english": "bread",
      "number": "869",
      "translations": [
        "bread"
      ],
      "count": 1
    },
    {
      "spanish": "cobrar",
      "english": "charge",
      "number": "870",
      "translations": [
        "charge"
      ],
      "count": 1
    },
    {
      "spanish": "adecuada",
      "english": "proper",
      "number": "871",
      "translations": [
        "proper"
      ],
      "count": 1
    },
    {
      "spanish": "barra",
      "english": "bar",
      "number": "872",
      "translations": [
        "bar"
      ],
      "count": 1
    },
    {
      "spanish": "oferta",
      "english": "offer",
      "number": "873",
      "translations": [
        "offer"
      ],
      "count": 1
    },
    {
      "spanish": "segmento",
      "english": "segment",
      "number": "874",
      "translations": [
        "segment"
      ],
      "count": 1
    },
    {
      "spanish": "esclavo",
      "english": "slave",
      "number": "875",
      "translations": [
        "slave"
      ],
      "count": 1
    },
    {
      "spanish": "pato",
      "english": "duck",
      "number": "876",
      "translations": [
        "duck"
      ],
      "count": 1
    },
    {
      "spanish": "instantánea",
      "english": "instant",
      "number": "877",
      "translations": [
        "instant"
      ],
      "count": 1
    },
    {
      "spanish": "mercado",
      "english": "market",
      "number": "878",
      "translations": [
        "market"
      ],
      "count": 1
    },
    {
      "spanish": "grado",
      "english": "degree",
      "number": "879",
      "translations": [
        "degree"
      ],
      "count": 1
    },
    {
      "spanish": "poblar",
      "english": "populate",
      "number": "880",
      "translations": [
        "populate"
      ],
      "count": 1
    },
    {
      "spanish": "polluelo",
      "english": "chick",
      "number": "881",
      "translations": [
        "chick"
      ],
      "count": 1
    },
    {
      "spanish": "querido",
      "english": "dear",
      "number": "882",
      "translations": [
        "dear"
      ],
      "count": 1
    },
    {
      "spanish": "enemigo",
      "english": "enemy",
      "number": "883",
      "translations": [
        "enemy"
      ],
      "count": 1
    },
    {
      "spanish": "responder",
      "english": "reply",
      "number": "884",
      "translations": [
        "reply"
      ],
      "count": 1
    },
    {
      "spanish": "bebida",
      "english": "drink",
      "number": "885",
      "translations": [
        "drink"
      ],
      "count": 1
    },
    {
      "spanish": "producirse",
      "english": "occur",
      "number": "886",
      "translations": [
        "occur"
      ],
      "count": 1
    },
    {
      "spanish": "apoyo",
      "english": "support",
      "number": "887",
      "translations": [
        "support"
      ],
      "count": 1
    },
    {
      "spanish": "discurso",
      "english": "speech",
      "number": "888",
      "translations": [
        "speech"
      ],
      "count": 1
    },
    {
      "spanish": "naturaleza",
      "english": "nature",
      "number": "889",
      "translations": [
        "nature"
      ],
      "count": 1
    },
    {
      "spanish": "alcance",
      "english": "range",
      "number": "890",
      "translations": [
        "range"
      ],
      "count": 1
    },
    {
      "spanish": "vapor",
      "english": "steam",
      "number": "891",
      "translations": [
        "steam"
      ],
      "count": 1
    },
    {
      "spanish": "líquido",
      "english": "liquid",
      "number": "894",
      "translations": [
        "liquid"
      ],
      "count": 1
    },
    {
      "spanish": "log",
      "english": "log",
      "number": "895",
      "translations": [
        "log"
      ],
      "count": 1
    },
    {
      "spanish": "significado",
      "english": "meant",
      "number": "896",
      "translations": [
        "meant"
      ],
      "count": 1
    },
    {
      "spanish": "cociente",
      "english": "quotient",
      "number": "897",
      "translations": [
        "quotient"
      ],
      "count": 1
    },
    {
      "spanish": "dientes",
      "english": "teeth",
      "number": "898",
      "translations": [
        "teeth"
      ],
      "count": 1
    },
    {
      "spanish": "concha",
      "english": "shell",
      "number": "899",
      "translations": [
        "shell"
      ],
      "count": 1
    },
    {
      "spanish": "cuello",
      "english": "neck",
      "number": "900",
      "translations": [
        "neck"
      ],
      "count": 1
    },
    {
      "spanish": "oxígeno",
      "english": "oxygen",
      "number": "901",
      "translations": [
        "oxygen"
      ],
      "count": 1
    },
    {
      "spanish": "azúcar",
      "english": "sugar",
      "number": "902",
      "translations": [
        "sugar"
      ],
      "count": 1
    },
    {
      "spanish": "muerte",
      "english": "death",
      "number": "903",
      "translations": [
        "death"
      ],
      "count": 1
    },
    {
      "spanish": "habilidad",
      "english": "skill",
      "number": "905",
      "translations": [
        "skill"
      ],
      "count": 1
    },
    {
      "spanish": "mujeres",
      "english": "women",
      "number": "906",
      "translations": [
        "women"
      ],
      "count": 1
    },
    {
      "spanish": "temporada",
      "english": "season",
      "number": "907",
      "translations": [
        "season"
      ],
      "count": 1
    },
    {
      "spanish": "solución",
      "english": "solution",
      "number": "908",
      "translations": [
        "solution"
      ],
      "count": 1
    },
    {
      "spanish": "imán",
      "english": "magnet",
      "number": "909",
      "translations": [
        "magnet"
      ],
      "count": 1
    },
    {
      "spanish": "plata",
      "english": "silver",
      "number": "910",
      "translations": [
        "silver"
      ],
      "count": 1
    },
    {
      "spanish": "gracias",
      "english": "thank",
      "number": "911",
      "translations": [
        "thank"
      ],
      "count": 1
    },
    {
      "spanish": "rama",
      "english": "branch",
      "number": "912",
      "translations": [
        "branch"
      ],
      "count": 1
    },
    {
      "spanish": "sufijo",
      "english": "suffix",
      "number": "914",
      "translations": [
        "suffix"
      ],
      "count": 1
    },
    {
      "spanish": "especialmente",
      "english": "especially",
      "number": "915",
      "translations": [
        "especially"
      ],
      "count": 1
    },
    {
      "spanish": "higo",
      "english": "fig",
      "number": "916",
      "translations": [
        "fig"
      ],
      "count": 1
    },
    {
      "spanish": "enorme",
      "english": "huge",
      "number": "918",
      "translations": [
        "huge"
      ],
      "count": 1
    },
    {
      "spanish": "hermana",
      "english": "sister",
      "number": "919",
      "translations": [
        "sister"
      ],
      "count": 1
    },
    {
      "spanish": "acero",
      "english": "steel",
      "number": "920",
      "translations": [
        "steel"
      ],
      "count": 1
    },
    {
      "spanish": "discutir",
      "english": "discuss",
      "number": "921",
      "translations": [
        "discuss"
      ],
      "count": 1
    },
    {
      "spanish": "adelante",
      "english": "forward",
      "number": "922",
      "translations": [
        "forward"
      ],
      "count": 1
    },
    {
      "spanish": "similar",
      "english": "similar",
      "number": "923",
      "translations": [
        "similar"
      ],
      "count": 1
    },
    {
      "spanish": "guiar",
      "english": "guide",
      "number": "924",
      "translations": [
        "guide"
      ],
      "count": 1
    },
    {
      "spanish": "experiencia",
      "english": "experience",
      "number": "925",
      "translations": [
        "experience"
      ],
      "count": 1
    },
    {
      "spanish": "puntuación",
      "english": "score",
      "number": "926",
      "translations": [
        "score"
      ],
      "count": 1
    },
    {
      "spanish": "manzana",
      "english": "apple",
      "number": "927",
      "translations": [
        "apple"
      ],
      "count": 1
    },
    {
      "spanish": "comprado",
      "english": "bought",
      "number": "928",
      "translations": [
        "bought"
      ],
      "count": 1
    },
    {
      "spanish": "llevado",
      "english": "led",
      "number": "929",
      "translations": [
        "led"
      ],
      "count": 1
    },
    {
      "spanish": "pitch",
      "english": "pitch",
      "number": "930",
      "translations": [
        "pitch"
      ],
      "count": 1
    },
    {
      "spanish": "abrigo",
      "english": "coat",
      "number": "931",
      "translations": [
        "coat"
      ],
      "count": 1
    },
    {
      "spanish": "masa",
      "english": "mass",
      "number": "932",
      "translations": [
        "mass"
      ],
      "count": 1
    },
    {
      "spanish": "tarjeta",
      "english": "card",
      "number": "933",
      "translations": [
        "card"
      ],
      "count": 1
    },
    {
      "spanish": "banda",
      "english": "band",
      "number": "934",
      "translations": [
        "band"
      ],
      "count": 1
    },
    {
      "spanish": "cuerda",
      "english": "rope",
      "number": "935",
      "translations": [
        "rope"
      ],
      "count": 1
    },
    {
      "spanish": "deslizamiento",
      "english": "slip",
      "number": "936",
      "translations": [
        "slip"
      ],
      "count": 1
    },
    {
      "spanish": "ganar",
      "english": "win",
      "number": "937",
      "translations": [
        "win"
      ],
      "count": 1
    },
    {
      "spanish": "soñar",
      "english": "dream",
      "number": "938",
      "translations": [
        "dream"
      ],
      "count": 1
    },
    {
      "spanish": "condición",
      "english": "condition",
      "number": "940",
      "translations": [
        "condition"
      ],
      "count": 1
    },
    {
      "spanish": "pienso",
      "english": "feed",
      "number": "941",
      "translations": [
        "feed"
      ],
      "count": 1
    },
    {
      "spanish": "herramienta",
      "english": "tool",
      "number": "942",
      "translations": [
        "tool"
      ],
      "count": 1
    },
    {
      "spanish": "totales",
      "english": "total",
      "number": "943",
      "translations": [
        "total"
      ],
      "count": 1
    },
    {
      "spanish": "básico",
      "english": "basic",
      "number": "944",
      "translations": [
        "basic"
      ],
      "count": 1
    },
    {
      "spanish": "olor",
      "english": "smell",
      "number": "945",
      "translations": [
        "smell"
      ],
      "count": 1
    },
    {
      "spanish": "valle",
      "english": "valley",
      "number": "946",
      "translations": [
        "valley"
      ],
      "count": 1
    },
    {
      "spanish": "ni",
      "english": "nor",
      "number": "947",
      "translations": [
        "nor"
      ],
      "count": 1
    },
    {
      "spanish": "doble",
      "english": "double",
      "number": "948",
      "translations": [
        "double"
      ],
      "count": 1
    },
    {
      "spanish": "asiento",
      "english": "seat",
      "number": "949",
      "translations": [
        "seat"
      ],
      "count": 1
    },
    {
      "spanish": "continuar",
      "english": "continue",
      "number": "950",
      "translations": [
        "continue"
      ],
      "count": 1
    },
    {
      "spanish": "bloque",
      "english": "block",
      "number": "951",
      "translations": [
        "block"
      ],
      "count": 1
    },
    {
      "spanish": "tabla",
      "english": "chart",
      "number": "952",
      "translations": [
        "chart"
      ],
      "count": 1
    },
    {
      "spanish": "sombrero",
      "english": "hat",
      "number": "953",
      "translations": [
        "hat"
      ],
      "count": 1
    },
    {
      "spanish": "vender",
      "english": "sell",
      "number": "954",
      "translations": [
        "sell"
      ],
      "count": 1
    },
    {
      "spanish": "éxito",
      "english": "success",
      "number": "955",
      "translations": [
        "success"
      ],
      "count": 1
    },
    {
      "spanish": "empresa",
      "english": "company",
      "number": "956",
      "translations": [
        "company"
      ],
      "count": 1
    },
    {
      "spanish": "restar",
      "english": "subtract",
      "number": "957",
      "translations": [
        "subtract"
      ],
      "count": 1
    },
    {
      "spanish": "evento",
      "english": "event",
      "number": "958",
      "translations": [
        "event"
      ],
      "count": 1
    },
    {
      "spanish": "particular,",
      "english": "particular",
      "number": "959",
      "translations": [
        "particular"
      ],
      "count": 1
    },
    {
      "spanish": "nadar",
      "english": "swim",
      "number": "961",
      "translations": [
        "swim"
      ],
      "count": 1
    },
    {
      "spanish": "plazo",
      "english": "term",
      "number": "962",
      "translations": [
        "term"
      ],
      "count": 1
    },
    {
      "spanish": "opuesta",
      "english": "opposite",
      "number": "963",
      "translations": [
        "opposite"
      ],
      "count": 1
    },
    {
      "spanish": "esposa",
      "english": "wife",
      "number": "964",
      "translations": [
        "wife"
      ],
      "count": 1
    },
    {
      "spanish": "zapato",
      "english": "shoe",
      "number": "965",
      "translations": [
        "shoe"
      ],
      "count": 1
    },
    {
      "spanish": "hombro",
      "english": "shoulder",
      "number": "966",
      "translations": [
        "shoulder"
      ],
      "count": 1
    },
    {
      "spanish": "propagación",
      "english": "spread",
      "number": "967",
      "translations": [
        "spread"
      ],
      "count": 1
    },
    {
      "spanish": "organizar",
      "english": "arrange",
      "number": "968",
      "translations": [
        "arrange"
      ],
      "count": 1
    },
    {
      "spanish": "campamento",
      "english": "camp",
      "number": "969",
      "translations": [
        "camp"
      ],
      "count": 1
    },
    {
      "spanish": "inventar",
      "english": "invent",
      "number": "970",
      "translations": [
        "invent"
      ],
      "count": 1
    },
    {
      "spanish": "algodón",
      "english": "cotton",
      "number": "971",
      "translations": [
        "cotton"
      ],
      "count": 1
    },
    {
      "spanish": "nacido",
      "english": "born",
      "number": "972",
      "translations": [
        "born"
      ],
      "count": 1
    },
    {
      "spanish": "determinar",
      "english": "determine",
      "number": "973",
      "translations": [
        "determine"
      ],
      "count": 1
    },
    {
      "spanish": "cuarto de galón",
      "english": "quart",
      "number": "974",
      "translations": [
        "quart"
      ],
      "count": 1
    },
    {
      "spanish": "nueve",
      "english": "nine",
      "number": "975",
      "translations": [
        "nine"
      ],
      "count": 1
    },
    {
      "spanish": "camión",
      "english": "truck",
      "number": "976",
      "translations": [
        "truck"
      ],
      "count": 1
    },
    {
      "spanish": "ruido",
      "english": "noise",
      "number": "977",
      "translations": [
        "noise"
      ],
      "count": 1
    },
    {
      "spanish": "nivel",
      "english": "level",
      "number": "978",
      "translations": [
        "level"
      ],
      "count": 1
    },
    {
      "spanish": "oportunidad",
      "english": "chance",
      "number": "979",
      "translations": [
        "chance"
      ],
      "count": 1
    },
    {
      "spanish": "reunir",
      "english": "gather",
      "number": "980",
      "translations": [
        "gather"
      ],
      "count": 1
    },
    {
      "spanish": "tramo",
      "english": "stretch",
      "number": "982",
      "translations": [
        "stretch"
      ],
      "count": 1
    },
    {
      "spanish": "lanzar",
      "english": "throw",
      "number": "983",
      "translations": [
        "throw"
      ],
      "count": 1
    },
    {
      "spanish": "brillo",
      "english": "shine",
      "number": "984",
      "translations": [
        "shine"
      ],
      "count": 1
    },
    {
      "spanish": "propiedad",
      "english": "property",
      "number": "985",
      "translations": [
        "property"
      ],
      "count": 1
    },
    {
      "spanish": "columna",
      "english": "column",
      "number": "986",
      "translations": [
        "column"
      ],
      "count": 1
    },
    {
      "spanish": "molécula",
      "english": "molecule",
      "number": "987",
      "translations": [
        "molecule"
      ],
      "count": 1
    },
    {
      "spanish": "seleccionar",
      "english": "select",
      "number": "988",
      "translations": [
        "select"
      ],
      "count": 1
    },
    {
      "spanish": "gris",
      "english": "gray",
      "number": "990",
      "translations": [
        "gray"
      ],
      "count": 1
    },
    {
      "spanish": "repita",
      "english": "repeat",
      "number": "991",
      "translations": [
        "repeat"
      ],
      "count": 1
    },
    {
      "spanish": "exigir",
      "english": "require",
      "number": "992",
      "translations": [
        "require"
      ],
      "count": 1
    },
    {
      "spanish": "preparar",
      "english": "prepare",
      "number": "994",
      "translations": [
        "prepare"
      ],
      "count": 1
    },
    {
      "spanish": "sal",
      "english": "salt",
      "number": "995",
      "translations": [
        "salt"
      ],
      "count": 1
    },
    {
      "spanish": "nariz",
      "english": "nose",
      "number": "996",
      "translations": [
        "nose"
      ],
      "count": 1
    },
    {
      "spanish": "plurales",
      "english": "plural",
      "number": "997",
      "translations": [
        "plural"
      ],
      "count": 1
    },
    {
      "spanish": "cólera",
      "english": "anger",
      "number": "998",
      "translations": [
        "anger"
      ],
      "count": 1
    },
    {
      "spanish": "reclamación",
      "english": "claim",
      "number": "999",
      "translations": [
        "claim"
      ],
      "count": 1
    },
    {
      "spanish": "continente",
      "english": "continent",
      "number": "1000",
      "translations": [
        "continent"
      ],
      "count": 1
    }
  ];

  // Initialize on Page Load
  const firstWord = getRandomWord(words);
  updateFlashCard(firstWord);
})();