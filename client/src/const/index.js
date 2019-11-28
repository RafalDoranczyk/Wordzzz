const wordsStartingPack = [
  {
    translation_0: "absorbować",
    translation_1: "pochłaniać",
    translation_2: "wchłaniać",
    translation_3: "chłonąć",
    translation_4: "",
    translation_5: "",
    wordToTranslate: "absorb"
  },
  {
    translation_0: "zdecydowanie",
    translation_1: "",
    translation_2: "",
    translation_3: "",
    translation_4: "",
    translation_5: "",
    wordToTranslate: "definitly"
  },
  {
    translation_0: "docieniać",
    translation_1: "szanować",
    translation_2: "",
    translation_3: "",
    translation_4: "",
    translation_5: "",
    wordToTranslate: "appreciate"
  },
  {
    translation_0: "utrzymać",
    translation_1: "zachować",
    translation_2: "twierdzić",
    translation_3: "",
    translation_4: "",
    translation_5: "",
    wordToTranslate: "maintain"
  },
  {
    translation_0: "postawa",
    translation_1: "nastawienie",
    translation_2: "",
    translation_3: "",
    translation_4: "",
    translation_5: "",
    wordToTranslate: "attitude"
  },
  {
    translation_0: "siła",
    translation_1: "oddział",
    translation_2: "przemoc",
    translation_3: "",
    translation_4: "",
    translation_5: "",
    wordToTranslate: "force"
  },
  {
    translation_0: "wzór",
    translation_1: "schemat",
    translation_2: "szablon",
    translation_3: "",
    translation_4: "",
    translation_5: "",
    wordToTranslate: "pattern"
  },
  {
    translation_0: "podejście",
    translation_1: "podchodzenie",
    translation_2: "",
    translation_3: "",
    translation_4: "",
    translation_5: "",
    wordToTranslate: "approach"
  },
  {
    translation_0: "ostatnio",
    translation_1: "",
    translation_2: "",
    translation_3: "",
    translation_4: "",
    translation_5: "",
    wordToTranslate: "lately"
  },
  {
    translation_0: "wąski",
    translation_1: "ciasny",
    translation_2: "ograniczony",
    translation_3: "",
    translation_4: "",
    translation_5: "",
    wordToTranslate: "narrow"
  },
  {
    translation_0: "kwartał",
    translation_1: "ćwiartka",
    translation_2: "",
    translation_3: "",
    translation_4: "",
    translation_5: "",
    wordToTranslate: "quarter"
  },
  {
    translation_0: "okazja",
    translation_1: "sposobność",
    translation_2: "",
    translation_3: "",
    translation_4: "",
    translation_5: "",
    wordToTranslate: "opportunity"
  },
  {
    translation_0: "niedogodność",
    translation_1: "kłopot",
    translation_2: "",
    translation_3: "",
    translation_4: "",
    translation_5: "",
    wordToTranslate: "inconvencience"
  },
  {
    translation_0: "skrucha",
    translation_1: "",
    translation_2: "",
    translation_3: "",
    translation_4: "",
    translation_5: "",
    wordToTranslate: "repentance"
  },
  {
    translation_0: "zachowanie",
    translation_1: "postępowanie",
    translation_2: "",
    translation_3: "",
    translation_4: "",
    translation_5: "",
    wordToTranslate: "behavior"
  }
];

const now = new Date();

const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();

const pack = wordsStartingPack.map(word => ({
  ...word,
  created: `${day}.${month}.${year}`,
  lastOccurenceInQuiz: "Brak",
  allAnswers: 0,
  goodAnswers: 0
}));

export default pack;
