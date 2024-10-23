const round1Questions = [
  {
    question: {
      en: "Which Sri Lankan born Canadian-American billionaire is known for his works as an entrepreneur?",
      si: "ව්‍යවසායකයෙකු ලෙස ප්‍රසිද්ධියට පත් ශ්‍රී ලංකාවේ උපත ලද, කැනේඩියානු-ඇමරිකානු බිලියනපතියා කවුද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Chamath Palihapitiya",
      si: "චමත් පලිහපිටිය",
    },
  },
  {
    question: {
      en: "Which rocket, developed by Elon Musk, completed a world-first feat by having part of it captured on its return to the launch pad?",
      si: "Elon musk ගෙ Space X ආයතනය විසින් නිෂ්පාදිත රොකට් අතරින් ගුවන් ගත කළ පසු, දියත් කළ කුලුණේ යාන්ත්‍රික අත්මගින්, ප්‍රථම වරට නැවත අල්ලා ගත් රොකට්ටුවේ නම කුමක්ද?",
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
      en: "What was the initial selling product of world-famous E-commerce platform known as ‘Amazon’?",
      si: "‘Amazon’ ලෙස හඳුන්වන ලෝක ප්‍රසිද්ධ වාණිජ වෙබ් අඩවියේ ආරම්භක විකුණුම් නිෂ්පාදනය කුමක්ද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Books",
      si: "පොත්",
    },
  },
  {
    question: {
      en: "Among the infrastructure development projects in Sri Lanka, under the Public Private Partnership (PPP) system, which project was started in the year 2014 based on the Colombo district?",
      si: "ශ්‍රී ලංකාවේ යටිතල පහසුකම් සංවර්ධන ව්‍යාපෘති අතුරින්, රාජ්‍ය පෞද්ගලික හවුල්කාරීත්ව ක්‍රමවේදය (PPP) යටතේ 2014 වර්ෂයේ දී කොළඹ දිස්ත්‍රික්කය මූලික කරගෙන ආරම්භ කරන ව්‍යාපෘතිය කුමක් ද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Colombo Fort City",
      si: "කොළඹ කොටුව නගරය",
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
      si: "දළ දේශීය නිෂ්පාදනය (GDP)",
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
      en: "Mouse",
      si: "මූසිකය",
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
      en: "To control inflation and maintain price stability",
      si: "උද්ධමනය පාලනය කිරීම සහ මිල ස්ථාවරත්වය පවත්වා ගැනීම",
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
      en: "Ralph Henry Baer",
      si: "රැල්ෆ් හෙන්රි බෙයර්",
    },
  },
  {
    question: {
      en: "Give a name of one of the recipients (there were three persons) of the 2024 Nobel Memorial Prize in Economics for their work on how institutions influence economic development?",
      si: "2024 ආර්ථික විද්‍යාව සඳහා වූ නොබෙල් අනුස්මරණ ත්‍යාගලාභීන් තිදෙනා අතරින් එක් අයෙකු නම් කරන්න.",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Daron Acemoglu, Simon Johnson, and James Robinson",
      si: "ඩැරන් අසෙමොග්ලු, සයිමන් ජොන්සන්, ජේම්ස් රොබින්සන්",
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
      en: "Keynesian economics",
      si: "කේන්සියානු ආර්ථික විද්‍යාව",
    },
  },
  {
    question: {
      en: "Give a name of one of the recipients (there were two persons) of the 2018 Nobel Memorial Prize winner in Economic Sciences?",
      si: "2018 ආර්ථික විද්‍යාව පිළිබඳ නොබෙල් අනුස්මරණ ත්‍යාගලාභීන් දෙදෙනා අතරින් එක් අයෙකු නම් කරන්න.",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Paul Romer, William D. Nordhaus",
      si: "පෝල් රෝමර්, විලියම් ඩී. නෝර්ඩ්හවුස්",
    },
  },
  {
    question: {
      en: "Who is the current (as 2024) president of the World Bank Group?",
      si: "ලෝක බැංකු සමූහයේ වත්මන් සභාපතිවරයා කවුද?",
    },
    type: "open-ended",
    taken: false,
    answer: {
      en: "Ajay Banga",
      si: "අජය බංගා",
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
        "a) Analyzing business environmental conditions",
        "b) Planning administrative activities of the business",
        "c) Finding how to supply the capital",
        "d) Selecting a better business place",
      ],
      si: [
        "a) ව්යාපාරික පාරිසරික තත්ත්වයන් විශ්ලේෂණය කිරීම",
        "b) ව්යාපාරයේ පරිපාලන කටයුතු සැලසුම් කිරීම",
        "c) ප්රාග්ධනය සපයන ආකාරය සොයා ගැනීම",
        "d) වඩා හොඳ ව්‍යාපාරික ස්ථානයක් තෝරා ගැනීම",
      ],
    },
    taken: false,
    answer: {
      en: "a) Analyzing business environmental conditions",
      si: "අ) ව්යාපාරික පාරිසරික තත්ත්වයන් විශ්ලේෂණය කිරීම",
    },
  },
  {
    question: {
      en: "Covid-19 pandemic influences the business. This factor belongs to",
      si: "‘Covid-19 වසංගතය, ව්‍යාපාරයට බලපෑම් කරයි.’ මෙම සාධකය අයත් වේ",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) Financial risk",
        "b) Entrepreneurial risk",
        "c) Business environmental risk",
        "d) Production risk",
      ],
      si: [
        "a) මූල්‍ය අවදානම",
        "b) ව්‍යවසායක අවදානම",
        "c) ව්‍යපාරික පාරිසරික අවදානම",
        "d) නිෂ්පාදන අවදානම",
      ],
    },
    taken: false,
    answer: {
      en: "c) Business environmental risk",
      si: "ඇ) ව්‍යපාරික පාරිසරික අවදානම",
    },
  },
  {
    question: {
      en: "A major social factor against the entrepreneurship is",
      si: "ව්‍යවසායකත්වයට එරෙහි ප්‍රධාන සමාජ සාධකයකි",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) encouraging the entrepreneurship through education.",
        "b) having sufficient government incentives for the entrepreneurship",
        "c) having high recognition for salaried jobs.",
        "d) desire to take risks of new entrepreneurs.",
      ],
      si: [
        "a) අධ්‍යාපනය තුළින් ව්‍යවසායකත්වය දිරිමත් කිරීම.",
        "b) ව්‍යවසායකත්වය සඳහා ප්‍රමාණවත් රජයේ දිරිගැන්වීම් තිබීම",
        "c) වැටුප් සහිත රැකියා සඳහා ඉහළ පිළිගැනීමක් තිබීම.",
        "d) නව ව්‍යවසායකයින්ගේ අවදානම් ගැනීමට ඇති ආශාව",
      ],
    },
    taken: false,
    answer: {
      en: "c) having high recognition for salaried jobs.",
      si: "c) වැටුප් සහිත රැකියා සඳහා ඉහළ පිළිගැනීමක් තිබීම.",
    },
  },
  {
    question: {
      en: "Who is the current (as 2024) 'Chairman of Central Bank of Sri Lanka'?",
      si: "වත්මන් 'ශ්‍රී ලංකා මහ බැංකුවේ සභාපති' කවුද?",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) Dr P. Nandalal Weerasinghe",
        "b) John Exter",
        "c) Dr. Ravi Rathnayake",
        "d) Prof. Priyanga Dunusinghe",
      ],
      si: [
        "a) ආචාර්ය පී. නන්දලාල් වීරසිංහ",
        "b) ජෝන් එක්ස්ටර්",
        "c) ආචාර්ය රවී රත්නායක",
        "d) මහාචාර්ය ප්‍රියංග දුනුසිංහ",
      ],
    },
    taken: false,
    answer: {
      en: "a) Dr P. Nandalal Weerasinghe",
      si: "a) ආචාර්ය පී. නන්දලාල් වීරසිංහ",
    },
  },
  {
    question: {
      en: "What is the name of the largest stock exchange in the world by market capitalization?",
      si: "වෙළෙඳපොළ ප්‍රාග්ධනීකරණය අනුව ලෝකයේ විශාලතම කොටස් හුවමාරුවේ නම කුමක්ද?",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) London Stock Exchange (LSE)",
        "b) Tokyo Stock Exchange (TSE)",
        "c) New York Stock Exchange (NYSE)",
        "d) India Stock Exchange",
      ],
      si: [
        "a) ලන්ඩන් කොටස් හුවමාරුව (LSE)",
        "b) ටෝකියෝ කොටස් හුවමාරුව (TSE)",
        "c) නිව් යෝර්ක් කොටස් හුවමාරුව (NYSE)",
        "d) ඉන්දීය කොටස් හුවමාරුව",
      ],
    },
    taken: false,
    answer: {
      en: "c) New York Stock Exchange (NYSE)",
      si: "c) නිව් යෝර්ක් කොටස් හුවමාරුව (NYSE)",
    },
  },
  {
    question: {
      en: "Which economic concept refers to the decline in the purchasing power of a currency over time?",
      si: "කාලයත් සමඟ මුදල් ඒකකයක මිලදී ගැනීමේ හැකියාව පහත වැටීම ගැන සඳහන් කරන්නේ කුමන ආර්ථික සංකල්පයද?",
    },
    type: "multiple-choice",
    choices: {
      en: ["a) Deflation", "b) Inflation", "c) Confirmation", "d) Recession"],
      si: ["a) අවධමනය", "b) උද්ධමනය", "c) තහවුරු කිරීම", "d) අවපාතය"],
    },
    taken: false,
    answer: {
      en: "b) Inflation",
      si: "b) උද්ධමනය",
    },
  },
  {
    question: {
      en: "Who is the current chair of the Federal Reserve in the United States (as of 2024)?",
      si: "එක්සත් ජනපදයේ (2024 වන විට) ෆෙඩරල් සංචිතයේ වත්මන් සභාපති කවුද?",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) Janet Yellen",
        "b) Ben Bernanke",
        "c) Jerome Powell",
        "d) Alan Greenspan",
      ],
      si: [
        "a) ජැනට් යෙලන්",
        "b) බෙන් බර්නාන්කේ",
        "c) ජෙරොම් පවෙල්",
        "d) ඇලන් ග්‍රීන්ස්පන්",
      ],
    },
    taken: false,
    answer: {
      en: "c) Jerome Powell",
      si: "c) ජෙරොම් පවෙල්",
    },
  },
  {
    question: {
      en: "Which country is the largest exporter of goods in the world (as of 2024)?",
      si: "ලෝකයේ විශාලතම භාණ්ඩ අපනයනකරු (2024 වන විට) කුමන රටද?",
    },
    type: "multiple-choice",
    choices: {
      en: ["a) United States", "b) China", "c) Germany", "d) Japan"],
      si: ["a) එක්සත් ජනපදය", "b) චීනය", "c) ජර්මනිය", "d) ජපානය"],
    },
    taken: false,
    answer: {
      en: "b) China",
      si: "b) චීනය",
    },
  },
  {
    question: {
      en: "Which organization in Sri Lanka primarily supports small and medium enterprises (SMEs) through financing and development programs?",
      si: "මූල්‍ය සහ සංවර්ධන වැඩසටහන් හරහා කුඩා හා මධ්‍ය පරිමාණ ව්‍යවසායක (SMEs) සඳහා මූලික වශයෙන් සහාය දක්වන ශ්‍රී ලංකාවේ කුමන සංවිධානයද?",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) Sri Lanka Export Development Board",
        "b) National Enterprise Development Authority",
        "c) Industrial Development Board",
        "d) Board of Investment of Sri Lanka",
      ],
      si: [
        "a) ශ්‍රී ලංකා අපනයන සංවර්ධන මණ්ඩලය",
        "b) ජාතික ව්‍යවසාය සංවර්ධන අධිකාරිය",
        "c) කාර්මික සංවර්ධන මණ්ඩලය",
        "d) ශ්‍රී ලංකා ආයෝජන මණ්ඩලය",
      ],
    },
    taken: false,
    answer: {
      en: "b) National Enterprise Development Authority",
      si: "b) ජාතික ව්‍යවසාය සංවර්ධන අධිකාරිය",
    },
  },
  {
    question: {
      en: "What role does the Sri Lanka Export Development Board (SLEDB) play in entrepreneurship?",
      si: "ශ්‍රී ලංකා අපනයන සංවර්ධන මණ්ඩලය (SLEDB) ව්‍යවසායකත්වය තුළ ඉටු කරන කාර්යභාරය කුමක්ද?",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) It provides loans to entrepreneurs.",
        "b) It facilitates the export of Sri Lankan products.",
        "c) It regulates market prices.",
        "d) It offers vocational training programs.",
      ],
      si: [
        "a) එය ව්‍යවසායකයින්ට ණය ලබා දෙයි.",
        "b) එය ශ්‍රී ලංකාවේ නිෂ්පාදන අපනයනය සඳහා පහසුකම් සපයයි.",
        "c) එය වෙළඳපල මිල නියාමනය කරයි.",
        "d) එය වෘත්තීය පුහුණු වැඩසටහන් ඉදිරිපත් කරයි.",
      ],
    },
    taken: false,
    answer: {
      en: "b) It facilitates the export of Sri Lankan products",
      si: "b) එය ශ්‍රී ලංකාවේ නිෂ්පාදන අපනයනය සඳහා පහසුකම් සපයයි.",
    },
  },
  {
    question: {
      en: "Which major international organization provides financial assistance and advice to member countries facing economic crises?",
      si: "ආර්ථික අර්බුදවලට මුහුණ දෙන සාමාජික රටවලට මූල්‍ය ආධාර සහ උපදෙස් සපයන ප්‍රධාන ජාත්‍යන්තර සංවිධානය කුමක්ද?",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) World Bank",
        "b) World Trade Organization (WTO)",
        "c) International Monetary Fund (IMF)",
        "d) Bank for International Settlements (BIS)",
      ],
      si: [
        "a) ලෝක බැංකුව",
        "b) ලෝක වෙළඳ සංවිධානය (WTO)",
        "c) ජාත්‍යන්තර මුල්‍ය අරමුදල (IMF)",
        "d) ජාත්‍යන්තර පියවීම් සඳහා බැංකුව (BIS)",
      ],
    },
    taken: false,
    answer: {
      en: "c) International Monetary Fund (IMF)",
      si: "c) ජාත්‍යන්තර මුල්‍ය අරමුදල (IMF)",
    },
  },
  {
    question: {
      en: "What is a monopoly?",
      si: "ඒකාධිකාරයක් යනු කුමක්ද?",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "a) A market structure with many firms competing",
        "b) A market structure where one firm controls the entire market",
        "c) A type of government intervention in the economy",
        "d) A situation where prices are set by supply and demand",
      ],
      si: [
        "a) බොහෝ සමාගම් තරඟ කරන වෙළඳපල ව්‍යුහයක්",
        "b) එක් සමාගමක් මුළු වෙළඳපලම පාලනය කරන වෙළඳපල ව්‍යුහයක්",
        "c) ආර්ථිකය තුළ රජයේ මැදිහත්වීම් වර්ගයකි",
        "d) සැපයුම සහ ඉල්ලුම අනුව මිල නියම කරන තත්වයක්",
      ],
    },
    taken: false,
    answer: {
      en: "b) A market structure where one firm controls the entire market",
      si: "b) එක් සමාගමක් මුළු වෙළඳපලම පාලනය කරන වෙළඳපල ව්‍යුහයක්",
    },
  },
];
