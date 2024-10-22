const round1Questions = [
  {
    question: {
      en: "Which rocket, developed by Elon Musk, completed a world-first feat by having part of it captured on its return to the launch pad?",
      si: "Elon musk ගෙ space X ආයතනය විසින් නිෂ්පාදිත රොකට් අතරින් ගුවන් ගත කළ පසු, දියත් කළ කුලුණේ යාන්ත්‍රික අත්මගින්, ප්‍රථම වරට නැවත අල්ලා ගත් රොකට්ටුවේ නම කුමක්ද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Falcon 9",
      si: "ෆැල්කන් 9",
    },
  },
  {
    question: {
      en: "Which scientist is credited with the invention of the World Wide Web?",
      si: "‘ලෝක ව්‍යාප්ත වෙබ්’ සොයාගැනීමේ ගෞරවය හිමිවන්නේ කුමන විද්‍යාඥයාද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Tim Berners-Lee",
      si: "ටීම් බර්නර්ස්-ලී",
    },
  },
  {
    question: {
      en: "Which American engineer is widely regarded as the father of cell phones?",
      si: "ජංගම දුරකථනවල පියා ලෙස පුළුල් ලෙස සලකනු ලබන්නේ කුමන ඇමරිකානු ඉංජිනේරුවරයාද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Martin Cooper",
      si: "මාටින් කූපර්",
    },
  },
  {
    question: {
      en: "What is the term for the overall value of all goods and services produced within a country's borders in a given period?",
      si: "යම් කාල සීමාවක් තුළ රටක දේශසීමා තුළ නිපදවන සියලුම භාණ්ඩ හා සේවාවල සමස්ත වටිනාකම සඳහා වන යෙදුම කුමක්ද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Gross Domestic Product (GDP)",
      si: "ස්වදේශීය ස්කන්ධ ය",
    },
  },
  {
    question: {
      en: "American inventor Douglas Engelbart holds the patent for which widely used computer device?",
      si: "ඇමරිකානු නව නිපැයුම්කරුවෙකු වන ඩග්ලස් එංගල්බාර්ට් විසින් පේටන්ට් බලපත්‍රය දරන්නේ පරිගණකයේ කුමන උපාංගයට ද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Computer mouse",
      si: "පරිගණක මූසිකය",
    },
  },
  {
    question: {
      en: "What is the primary goal of monetary policy?",
      si: "මුදල් ප්‍රතිපත්තියේ මූලික අරමුණ කුමක්ද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Control inflation and stabilize the economy",
      si: "උද්ධමනය පාලනය කිරීම සහ ආර්ථිකය ස්ථායී කිරීම",
    },
  },
  {
    question: {
      en: "Who designed the first modern air-conditioning system?",
      si: "පළමු නවීන වායු සමීකරණ පද්ධතිය නිර්මාණය කළේ කවුද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Willis Carrier",
      si: "විලිස් කෙරියර්",
    },
  },
  {
    question: {
      en: "Who is known as the father of video games?",
      si: "වීඩියෝ ක්‍රීඩා වල පියා ලෙස හඳුන්වන්නේ කවුද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Ralph Baer",
      si: "රල්ෆ් බෙයර්",
    },
  },
  {
    question: {
      en: "What is inflation?",
      si: "උද්ධමනය යනු කුමක්ද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "The increase in the general price level of goods and services over time",
      si: "කාලයත් සමඟ භාණ්ඩ හා සේවාවල පොදු මිල මට්ටම ඉහළ යාම",
    },
  },
  {
    question: {
      en: "Who were the recipients of the 2024 Nobel Memorial Prize in Economics for their work on how institutions influence economic development?",
      si: "‘ආයතන’, ආර්ථික සංවර්ධනයට බලපාන්නේ කෙසේද යන්න පිළිබඳ ඔවුන්ගේ ක්‍රියාකාරකම් සඳහා 2024 ආර්ථික විද්‍යාව සඳහා වූ නොබෙල් අනුස්මරණ ත්‍යාගලාභීන් කවුරුන්ද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Claudia Goldin",
      si: "ක්ලෝඩියා ගෝල්ඩින්",
    },
  },
  {
    question: {
      en: "Which economic theory suggests that government intervention in the economy can help stabilize it during recessions and booms?",
      si: "ආර්ථිකයේ අවපාත සහ උත්පාතය වලදී එය ස්ථාවර කිරීමට රජයේ මැදිහත්වීම උපකාරී වන බව යෝජනා කරන්නේ කුමන ආර්ථික න්‍යායද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Keynesian Economics",
      si: "කේන්සියානු ආර්ථික විද්‍යාව",
    },
  },
  {
    question: {
      en: "One of the main tasks that an entrepreneur should do to fulfill the objectives successfully is",
      si: "ව්‍යවසායකයෙකු අරමුණු සාර්ථකව ඉටුකර ගැනීමට කළ යුතු ප්‍රධාන කාර්යයකි",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "analyzing business environmental conditions",
        "planning administrative activities of the business",
        "finding how to supply the capital",
        "selecting a better business place",
      ],
      si: [
        "ව්යාපාරික පාරිසරික තත්ත්වයන් විශ්ලේෂණය කිරීම",
        "ව්යාපාරයේ පරිපාලන කටයුතු සැලසුම් කිරීම",
        "ප්රාග්ධනය සපයන ආකාරය සොයා ගැනීම",
        "වඩා හොඳ ව්‍යාපාරික ස්ථානයක් තෝරා ගැනීම",
      ],
    },
    taken: false,
    answer: {
      en: "analyzing business environmental conditions",
      si: "ව්යාපාරික පාරිසරික තත්ත්වයන් විශ්ලේෂණය කිරීම",
    },
  },
  {
    question: {
      en: "“Covid-19 pandemic influences the business.” This factor belongs to",
      si: "‘‘Covid-19 වසංගතය, ව්‍යාපාරයට බලපෑම් කරයි.” මෙම සාධකය අයත් වේ",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "demographic environment",
        "natural environment",
        "social and cultural environment",
        "social environment",
      ],
      si: [
        "ජනවිකාස පරිසරය",
        "ස්වභාවික පරිසරය",
        "සමාජ හා සංස්කෘතික පරිසරය",
        "සමාජ පරිසරය",
      ],
    },
    taken: false,
    answer: {
      en: "social environment",
      si: "සමාජ පරිසරය",
    },
  },
  {
    question: {
      en: "A major social factor against entrepreneurship is",
      si: "ව්‍යවසායකත්වයට එරෙහි ප්‍රධාන සමාජ සාධකයකි",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "encouraging entrepreneurship through education",
        "having sufficient government incentives for entrepreneurship",
        "having high recognition for salaried jobs",
        "desire to take risks of new entrepreneurs",
      ],
      si: [
        "අධ්‍යාපනය තුළින් ව්‍යවසායකත්වය දිරිමත් කිරීම",
        "ව්‍යවසායකත්වය සඳහා ප්‍රමාණවත් රජයේ දිරිගැන්වීම් තිබීම",
        "වැටුප් සහිත රැකියා සඳහා ඉහළ පිළිගැනීමක් තිබීම",
        "නව ව්‍යවසායකයින්ගේ අවදානම් ගැනීමට කැමැත්ත",
      ],
    },
    taken: false,
    answer: {
      en: "having high recognition for salaried jobs",
      si: "වැටුප් සහිත රැකියා සඳහා ඉහළ පිළිගැනීමක් තිබීම",
    },
  },
  {
    question: {
      en: "The most serious problem caused by inflation is",
      si: "උද්ධමනයෙන් සිදුවන දරුණුම ගැටලුව කුමක්ද?",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "rise in prices",
        "loss of government revenue",
        "rise in wages",
        "falling purchasing power",
      ],
      si: [
        "මිල ඉහළ යාම",
        "රජයේ ආදායම් අහිමිවීම",
        "වැටුප් ඉහළ යාම",
        "මිලදී ගැනීමේ ශක්තිය අඩු වීම",
      ],
    },
    taken: false,
    answer: {
      en: "falling purchasing power",
      si: "මිලදී ගැනීමේ ශක්තිය අඩු වීම",
    },
  },
  {
    question: {
      en: "One of the most important abilities an entrepreneur should have is",
      si: "ව්‍යවසායකයෙකුට තිබිය යුතු වැදගත්ම හැකියාවක් වන්නේ",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "innovative thinking ability",
        "imitative ability",
        "ability to analyze data",
        "ability to plan",
      ],
      si: [
        "නවෝත්පාදන සිතුවිලි හැකියාව",
        "අනුකරණ හැකියාව",
        "දත්ත විශ්ලේෂණය කිරීමේ හැකියාව",
        "සැලසුම් කිරීමේ හැකියාව",
      ],
    },
    taken: false,
    answer: {
      en: "innovative thinking ability",
      si: "නවෝත්පාදන සිතුවිලි හැකියාව",
    },
  },
  {
    question: {
      en: "What is the name of the largest stock exchange in the world by market capitalization?",
      si: "වෙළෙඳපොළ ප්‍රාග්ධනීකරණය අනුව ලෝකයේ විශාලතම කොටස් හුවමාරුවේ නම කුමක්ද?"
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) London Stock Exchange (LSE)",
        "b) Tokyo Stock Exchange (TSE)",
        "c) New York Stock Exchange (NYSE)",
        "d) NASDAQ"
      ],
      si: [
        "අ) ලන්ඩන් කොටස් හුවමාරුව (LSE)",
        "ආ) ටෝකියෝ කොටස් හුවමාරුව (TSE)",
        "ඇ) නිව් යෝර්ක් කොටස් හුවමාරුව (NYSE)",
        "ඈ) NASDAQ"
      ]
    },
    taken: false,
    answer: {
      en: "c) New York Stock Exchange (NYSE)",
      si: "ඇ) නිව් යෝර්ක් කොටස් හුවමාරුව (NYSE)"
    }
  },
  {
    question: {
      en: "Which economic concept refers to the decline in the purchasing power of a currency over time?",
      si: "කාලයත් සමඟ මුදල් ඒකකයක මිලදී ගැනීමේ හැකියාව පහත වැටීම ගැන සඳහන් කරන්නේ කුමන ආර්ථික සංකල්පයද?"
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) Deflation",
        "b) Inflation",
        "c) Stagflation",
        "d) Recession"
      ],
      si: [
        "අ) අවධමනය",
        "ආ) උද්ධමනය",
        "ඇ) එකතැන පල්වීම",
        "ඈ) අවපාතය"
      ]
    },
    taken: false,
    answer: {
      en: "b) Inflation",
      si: "ආ) උද්ධමනය"
    }
  },
  {
    question: {
      en: "Who is the current chair of the Federal Reserve in the United States (as of 2024)?",
      si: "එක්සත් ජනපදයේ (2024 වන විට) ෆෙඩරල් සංචිතයේ වත්මන් සභාපති කවුද?"
    },
    type: "multiple-choice",
    choices: {
      en: [
        "A) Janet Yellen",
        "B) Ben Bernanke",
        "C) Jerome Powell",
        "D) Alan Greenspan"
      ],
      si: [
        "A) ජැනට් යෙලන්",
        "B) බෙන් බර්නාන්කේ",
        "C) ජෙරොම් පවෙල්",
        "D) ඇලන් ග්‍රීන්ස්පන්"
      ]
    },
    taken: false,
    answer: {
      en: "C) Jerome Powell",
      si: "C) ජෙරොම් පවෙල්"
    }
  },
  {
    question: {
      en: "Which country is the largest exporter of goods in the world (as of 2024)?",
      si: "ලෝකයේ විශාලතම භාණ්ඩ අපනයනකරු (2024 වන විට) කුමන රටද?"
    },
    type: "multiple-choice",
    choices: {
      en: [
        "A) United States",
        "B) China",
        "C) Germany",
        "D) Japan"
      ],
      si: [
        "A) එක්සත් ජනපදය",
        "B) චීනය",
        "C) ජර්මනිය",
        "D) ජපානය"
      ]
    },
    taken: false,
    answer: {
      en: "B) China",
      si: "B) චීනය"
    }
  },
  {
    question: {
      en: "What is the term for the market structure where a small number of firms dominate the industry?",
      si: "කුඩා සමාගම් සංඛ්‍යාවක් කර්මාන්තයේ ආධිපත්‍යය දරන වෙළඳපල ව්‍යුහය සඳහා වන යෙදුම කුමක්ද?"
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) Monopoly",
        "b) Perfect Competition",
        "c) Oligopoly",
        "d) Monopsony"
      ],
      si: [
        "අ) ඒකාධිකාරය",
        "ආ) පරිපූර්ණ තරඟය",
        "ඇ) ඔලිගොපොලි",
        "ඈ) මොනොප්සොනි"
      ]
    },
    taken: false,
    answer: {
      en: "c) Oligopoly",
      si: "ඇ) ඔලිගොපොලි"
    }
  },
  {
    question: {
      en: "What does FDI stand for?",
      si: "FDI යන්නෙන් අදහස් කරන්නේ කුමක්ද?"
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) Foreign Development Investment",
        "b) Foreign Direct Investment",
        "c) Financial Domestic Investment",
        "d) Foreign Debt Investment"
      ],
      si: [
        "අ) විදේශ සංවර්ධන ආයෝජන",
        "ආ) සෘජු විදේශ ආයෝජන",
        "ඇ) මූල්ය දේශීය ආයෝජන",
        "ඈ) විදේශ ණය ආයෝජන"
      ]
    },
    taken: false,
    answer: {
      en: "b) Foreign Direct Investment",
      si: "ආ) සෘජු විදේශ ආයෝජන"
    }
  },
  {
    question: {
      en: "Which major international organization provides financial assistance and advice to member countries facing economic crises?",
      si: "ආර්ථික අර්බුදවලට මුහුණ දෙන සාමාජික රටවලට මූල්‍ය ආධාර සහ උපදෙස් සපයන ප්‍රධාන ජාත්‍යන්තර සංවිධානය කුමක්ද?"
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) World Bank",
        "b) World Trade Organization (WTO)",
        "c) International Monetary Fund (IMF)",
        "d) Bank for International Settlements (BIS)"
      ],
      si: [
        "අ) ලෝක බැංකුව",
        "ආ) ලෝක වෙළඳ සංවිධානය (WTO)",
        "ඇ) ජාත්‍යන්තර මුල්‍ය අරමුදල (IMF)",
        "ඈ) ජාත්‍යන්තර පියවීම් සඳහා බැංකුව (BIS)"
      ]
    },
    taken: false,
    answer: {
      en: "c) International Monetary Fund (IMF)",
      si: "ඇ) ජාත්‍යන්තර මුල්‍ය අරමුදල (IMF)"
    }
  },
  {
    question: {
      en: "What is a monopoly?",
      si: "ඒකාධිකාරයක් යනු කුමක්ද?"
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) A market structure with many firms competing",
        "b) A market structure where one firm controls the entire market",
        "c) A type of government intervention in the economy",
        "d) A situation where prices are set by supply and demand"
      ],
      si: [
        "අ) බොහෝ සමාගම් තරඟ කරන වෙළඳපල ව්‍යුහයක්",
        "b) එක් සමාගමක් මුළු වෙළඳපලම පාලනය කරන වෙළඳපල ව්‍යුහයක්",
        "ඇ) ආර්ථිකය තුළ රජයේ මැදිහත්වීම් වර්ගයකි",
        "ඈ) සැපයුම සහ ඉල්ලුම අනුව මිල නියම කරන තත්වයක්"
      ]
    },
    taken: false,
    answer: {
      en: "b) A market structure where one firm controls the entire market",
      si: "b) එක් සමාගමක් මුළු වෙළඳපලම පාලනය කරන වෙළඳපල ව්‍යුහයක්"
    }
  }
];
