const round3Questions = [
  {
    question: {
      en: "What company became the first to reach a $3 trillion market capitalization?",
      si: "ඩොලර් ට්‍රිලියන 3 ක වෙළඳපල ප්‍රාග්ධනීකරණයට ළඟා වූ පළමු සමාගම කුමක්ද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Apple, in January 2022",
      si: "ඇපල් සමාගම, 2022 ජනවාරි",
    },
  },
  {
    question: {
      en: "Which social media platform was acquired by Elon Musk in 2022?",
      si: "2022 දී Elon Musk විසින් අත්පත් කරගත් සමාජ මාධ්‍ය ජාලය කුමක්ද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Twitter",
      si: "Twitter",
    },
  },
  {
    question: {
      en: "Which country implemented the world’s first central bank digital currency (CBDC) in 2020?",
      si: "2020 දී ලොව ප්‍රථම මහ බැංකු ඩිජිටල් මුදල් ඒකකය (CBDC) ක්‍රියාත්මක කළ රට කුමක්ද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "The Bahamas, with the Sand Dollar",
      si: "බහමාස්, සෑන්ඩ් ඩොලර් සමඟ",
    },
  },
  {
    question: {
      en: "Which large online retail platform acquired MGM Studios in 2021 to expand its entertainment business?",
      si: "තම විනෝදාස්වාද ව්‍යාපාරය පුළුල් කිරීම සඳහා 2021 දී MGM Studios අත්පත් කරගත් විශාල අන්තර්ජාල වෙළඳ යෙදවුම කුමක්ද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Amazon",
      si: "ඇමසන්",
    },
  },
  {
    question: {
      en: "Which American tourism company operated the Titan submersible that tragically imploded during an expedition to explore the Titanic wreck?",
      si: "ටයිටැනික් සුන්බුන් ගවේෂණය කිරීමේ ගවේෂණයකදී ඛේදජනක ලෙස පුපුරා ගිය 'ටයිටන්' නිෂ්පාදනය කළ අමෙරිකානු සංචාරක සමාගම කුමක්ද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "OceanGate",
      si: "OceanGate",
    },
  },
  {
    question: {
      en: "Which economic term is used to represent inequality in income distribution?",
      si: "ආදායම් බෙදී යාමේ විෂමතාවය හැඳින්වීමට භාවිතා කරන ආර්ථික විද්‍යාත්මක පදය කුමක්ද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "GDP",
      si: "GDP",
    },
  },
  {
    question: {
      en: "Who is considered the Father of modern economics?",
      si: "නූතන ආර්ථික විද්‍යවේ පියා ලෙස සැලකෙන්නේ කවුද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Adam Smith",
      si: "ඇඩම් ස්මිත්",
    },
  },
  {
    question: {
      en: "What does the acronym URL stand for?",
      si: "URL ලෙස හැඳින්වෙන්නේ කුමක්ද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Uniform Resource Locator",
      si: "Uniform Resource Locator",
    },
  },
  {
    question: {
      en: "What does 'HTTP' stand for?",
      si: "'HTTP' යන්නෙන් හැඳින්වෙන්නේ කුමක්ද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "HyperText Transfer Protocol",
      si: "HyperText Transfer Protocol",
    },
  },
  {
    question: {
      en: "What is Alexander Fleming widely known for?",
      si: "ඇලෙක්සැන්ඩර් ෆ්ලෙමින් ප්‍රසිද්ධ වන්නේ කුමක් සඳහාද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Discovering penicillin",
      si: "පෙන්සිලින් සොයා ගැනීම",
    },
  },
  {
    question: {
      en: "Who was the first woman to win a Nobel Prize?",
      si: "නොබෙල් ත්‍යාගයක් දිනූ පළමු කාන්තාව කවුද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Marie Curie",
      si: "මාරී කුරී",
    },
  },
  {
    question: {
      en: "Where is the headquarters of the Asian Infrastructure Investment Bank (AIIB) located?",
      si: "Asian Infrastructure Investment Bank (AIIB) හි මූලස්ථානය පිහිටා ඇත්තේ කොහේද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "China",
      si: "චීනය",
    },
  },
  {
    question: {
      en: "After Effects and visual effects software made by which company?",
      si: "After Effects සහ visual effects යෙදවුම් හඳුන්වා දුන්නේ කුමන ආයතනය විසින්ද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Adobe",
      si: "Adobe",
    },
  },
  {
    question: {
      en: "Who is credited with creating Bitcoin?",
      si: "Bitcoin හි නිර්මාතෘවරයා ලෙස සැලකෙන්නේ කවුද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Satoshi Nakamoto",
      si: "සතෝෂි නකමෝටෝ",
    },
  },
  {
    question: {
      en: "What was the first web search engine?",
      si: "ලොව පළමු web search engine එක වනුයේ කුමක්ද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Archie",
      si: "Archie",
    },
  },
];
