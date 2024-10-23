const bonusQuestions = [
  {
    question: {
      en: "What is the primary function of the World Trade Organization (WTO)?",
      si: "ලෝක වෙළඳ සංවිධානයේ (WTO) මූලික කාර්යය කුමක්ද?",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) To provide loans to developing countries",
        "b) To regulate foreign exchange rates",
        "c) To oversee and facilitate international trade agreements",
        "d) To manage monetary policies globally",
      ],
      si: [
        "a) සංවර්ධනය වෙමින් පවතින රටවලට ණය ලබා දීම",
        "b) විදේශ විනිමය අනුපාත නියාමනය කිරීම",
        "c) ජාත්‍යන්තර වෙළඳ ගිවිසුම් අධීක්ෂණය සහ පහසුකම් සැලසීම",
        "d) ගෝලීය වශයෙන් මුදල් ප්‍රතිපත්ති කළමනාකරණය කිරීම",
      ],
    },
    taken: false,
    answer: {
      en: "c) To oversee and facilitate international trade agreements",
      si: "c) ජාත්‍යන්තර වෙළඳ ගිවිසුම් අධීක්ෂණය සහ පහසුකම් සැලසීම",
    },
  },
  {
    question: {
      en: "What does a high Consumer Price Index (CPI) indicate?",
      si: "ඉහළ පාරිභෝගික මිල දර්ශකය (CPI) පෙන්නුම් කරන්නේ කුමක්ද?",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) A decrease in consumer spending",
        "b) An increase in the cost of living",
        "c) Economic stability",
        "d) A recession in the economy",
      ],
      si: [
        "a) පාරිභෝගික වියදම් අඩු වීම",
        "b) ජීවන වියදම වැඩිවීම",
        "c) ආර්ථික ස්ථාවරත්වය",
        "d) ආර්ථිකයේ අවපාතයක්",
      ],
    },
    taken: false,
    answer: {
      en: "b) An increase in the cost of living",
      si: "b) ජීවන වියදම වැඩිවීම",
    },
  },
  {
    question: {
      en: "Which of the following is a primary function of central banks?",
      si: "පහත සඳහන් දේවලින් මහ බැංකුවල මූලික කාර්යය කුමක්ද?",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) To set corporate tax rates",
        "b) To regulate international trade",
        "c) To control monetary policy and manage inflation",
        "d) To oversee consumer protection laws",
      ],
      si: [
        "a) ආයතනික බදු අනුපාත නියම කිරීම",
        "b) ජාත්‍යන්තර වෙළඳාම නියාමනය කිරීම",
        "c) මුදල් ප්‍රතිපත්තිය පාලනය කිරීම සහ උද්ධමනය කළමනාකරණය කිරීම",
        "d) පාරිභෝගික ආරක්ෂණ නීති අධීක්ෂණය කිරීම",
      ],
    },
    taken: false,
    answer: {
      en: "c) To control monetary policy and manage inflation",
      si: "c) මුදල් ප්‍රතිපත්තිය පාලනය කිරීම සහ උද්ධමනය කළමනාකරණය කිරීම",
    },
  },
  {
    question: {
      en: "Who is a co-founder of the popular ride-sharing company Uber?",
      si: "‘Uber’ වෙළඳ සමාගමේ නිර්මාතෘවරයෙක් වන්නේ කවුරුන්ද?",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) Travis Kalanick",
        "b) Donald Trump",
        "c) Brian Chesky",
        "d) Reid Hoffman",
      ],
      si: [
        "a) ට්‍රැවිස් කලනික්",
        "b) ඩොනල්ඩ් ට්රම්ප්",
        "c) බ්රයන් චෙස්කි",
        "d) රීඩ් හොෆ්මන්",
      ],
    },
    taken: false,
    answer: {
      en: "a) Travis Kalanick",
      si: "a) ට්‍රැවිස් කලනික්",
    },
  },
  {
    question: {
      en: "Which of the following is considered a major risk in the current business environment?",
      si: "වත්මන් ව්‍යාපාරික පරිසරය තුළ පහත සඳහන් දේවලින් ප්‍රධාන අවදානමක් ලෙස සලකන්නේ කුමක්ද?",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) Low competition",
        "b) Economic stability",
        "c) Cybersecurity threats",
        "d) Abundance of resources",
      ],
      si: [
        "a) අඩු තරඟකාරිත්වය",
        "b) ආර්ථික ස්ථාවරත්වය",
        "c) සයිබර් ආරක්ෂණ තර්ජන",
        "d) සම්පත් බහුලත්වය",
      ],
    },
    taken: false,
    answer: {
      en: "c) Cybersecurity threats",
      si: "c) සයිබර් ආරක්ෂණ තර්ජන",
    },
  },
  {
    question: {
      en: "Which entrepreneur is known for founding the cosmetics company Fenty Beauty?",
      si: "‘Fenty Beauty’ රූපලාවන්‍ය නිෂ්පාදන සමාගම ආරම්භ කිරීම සඳහා ප්‍රසිද්ධියට පත් ව්‍යවසායකයා කවුද?",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) Kylie Jenner",
        "b) Rihanna",
        "c) Estee Lauder",
        "d) Bobbi Brown",
      ],
      si: ["a) කයිලි ජෙනර්", "b) රිහානා", "c) එස්ටී ලෝඩර්", "d) බොබී බ්රවුන්"],
    },
    taken: false,
    answer: {
      en: "b) Rihanna",
      si: "b) රිහානා",
    },
  },
  {
    question: {
      en: "Which theory emphasizes the role of government intervention in the economy?",
      si: "ආර්ථිකය කෙරෙහි රජයෙහි මැදිහත්වීම අවධාරණය කරනු ලබන න්‍යාය කුමක්ද?",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) Classical Economics",
        "b) Keynesian Economics",
        "c) Monetarism",
        "d) Supply Economics",
      ],
      si: [
        "a) සම්භාව්‍ය ආර්ථික විද්‍යාව",
        "b) කේන්සියානු ආර්ථික විද්යාව",
        "c) මුදල්වාදය",
        "d) සැපයුම් ආර්ථික විද්යාව",
      ],
    },
    taken: false,
    answer: {
      en: "b) Keynesian Economics",
      si: "b) කේන්සියානු ආර්ථික විද්යාව",
    },
  },
  {
    question: {
      en: "Which of the following is considered a leading economic indicator?",
      si: "පහත සඳහන් දේ වලින් ප්‍රමුඛ ආර්ථික දර්ශකයක් ලෙස සලකන්නේ කුමක්ද?",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) Unemployment rate",
        "b) Consumer Price Index (CPI)",
        "c) Stock market performance",
        "d) Gross Domestic Product (GDP)",
      ],
      si: [
        "a) විරැකියා අනුපාතය",
        "b) පාරිභෝගික මිල දර්ශකය (CPI)",
        "c) කොටස් වෙළෙඳපොළ කාර්ය සාධනය",
        "d) දළ දේශීය නිෂ්පාදිතය (GDP)",
      ],
    },
    taken: false,
    answer: {
      en: "c) Stock market performance",
      si: "c) කොටස් වෙළෙඳපොළ කාර්ය සාධනය",
    },
  },
  {
    question: {
      en: "What does 'market capitalization' refer to?",
      si: "'වෙළඳපල ප්‍රාග්ධනීකරණය' යන්නෙන් අදහස් කරන්නේ කුමක්ද?",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) The total revenue of a company",
        "b) The total value of a company's outstanding shares of stock",
        "c) The total debt of a company",
        "d) The total assets of a company",
      ],
      si: [
        "a) සමාගමක මුළු ආදායම",
        "b) සමාගමක කැපී පෙනෙන කොටස්වල මුළු වටිනාකම",
        "c) සමාගමක සම්පූර්ණ ණය",
        "d) සමාගමක මුළු වත්කම්",
      ],
    },
    taken: false,
    answer: {
      en: "b) The total value of a company's outstanding shares of stock",
      si: "b) සමාගමක කැපී පෙනෙන කොටස්වල මුළු වටිනාකම",
    },
  },
  {
    question: {
      en: "What is the main focus of the World Bank?",
      si: "පහත සඳහන් දේවල් අතුරින් ලෝක බැංකුවෙහි ප්‍රධාන කාර්යභාරය වනුයේ?",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) Providing loans to developed countries",
        "b) Promoting free trade agreements",
        "c) Reducing poverty and supporting development projects in developing countries",
        "d) Regulating international financial markets",
      ],
      si: [
        "a) සංවර්ධිත රටවලට ණය ලබා දීම",
        "b) නිදහස් වෙළඳ ගිවිසුම් ප්‍රවර්ධනය කිරීම",
        "c) දරිද්‍රතාවය අවම කිරීම සහ සංවර්ධනය වෙමින් පවතින රටවල සංවර්ධන ව්‍යාපෘති සඳහා සහාය වීම",
        "d) ජාත්‍යන්තර මූල්‍ය වෙලඳපොලවල් නියාමනය කිරීම",
      ],
    },
    taken: false,
    answer: {
      en: "c) Reducing poverty and supporting development projects in developing countries",
      si: "c) දරිද්‍රතාවය අවම කිරීම සහ සංවර්ධනය වෙමින් පවතින රටවල සංවර්ධන ව්‍යාපෘති සඳහා සහාය වීම",
    },
  },
  {
    question: {
      en: "Which entrepreneur from Sri Lanka is known for launching the successful fashion brand, ODEL?",
      si: "සාර්ථක විලාසිතා සන්නාමයක්  වන ODEL සමාගමෙහි ර්මාතෘවරයා ලෙස හැඳින්වෙන ශ්‍රී ලාංකික ව්‍යවසායකයා කවුරුන්ද?"
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) Otara Gunewardene",
        "b) Dammika Perera",
        "c) Dilith Jayaweera",
        "d) Shirantha D. Cooray"
      ],
      si: [
        "අ) ඔටාරා ගුණවර්ධන",
        "b) දම්මික පෙරේරා",
        "c) දිලිත් ජයවීර",
        "d) ශිරන්ත ඩී.කුරේ"
      ]
    },
    taken: false,
    answer: {
      en: "a) Otara Gunewardene",
      si: "අ) ඔටාරා ගුණවර්ධන"
    }
  },
  {
    question: {
      en: "What is the primary role of the Financial Stability Board (FSB)?",
      si: "මූල්‍ය ස්ථාවරත්ව මණ්ඩලයේ (FSB) මූලික කාර්යභාරය කුමක්ද?"
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) To manage public debt",
        "b) To promote global financial stability",
        "c) To provide direct financial assistance to countries",
        "d) To oversee the global stock markets"
      ],
      si: [
        "අ) රාජ්‍ය ණය කළමනාකරණය කිරීමට",
        "b) ගෝලීය මූල්‍ය ස්ථාවරත්වය ප්‍රවර්ධනය කිරීම",
        "c) රටවලට සෘජු මූල්‍ය ආධාර සැපයීම",
        "d) ගෝලීය කොටස් වෙලඳපොලවල් අධීක්ෂණය කිරීම."
      ]
    },
    taken: false,
    answer: {
      en: "b) To promote global financial stability",
      si: "b) ගෝලීය මූල්‍ය ස්ථාවරත්වය ප්‍රවර්ධනය කිරීම"
    }
  }
];
