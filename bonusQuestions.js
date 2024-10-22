const bonusQuestions = [
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
        "අ) බොහෝ සමාගම් තරඟ කරන වෙළඳපල ව්‍යුහයක්",
        "b) එක් සමාගමක් මුළු වෙළඳපලම පාලනය කරන වෙළඳපල ව්‍යුහයක්",
        "ඇ) ආර්ථිකය තුළ රජයේ මැදිහත්වීම් වර්ගයකි",
        "ඈ) සැපයුම සහ ඉල්ලුම අනුව මිල නියම කරන තත්වයක්",
      ],
    },
    taken: false,
    answer: {
      en: "b) A market structure where one firm controls the entire market",
      si: "b) එක් සමාගමක් මුළු වෙළඳපලම පාලනය කරන වෙළඳපල ව්‍යුහයක්",
    },
  },
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
        "අ) සංවර්ධනය වෙමින් පවතින රටවලට ණය ලබා දීම",
        "ආ) විදේශ විනිමය අනුපාත නියාමනය කිරීම",
        "ඇ) ජාත්‍යන්තර වෙළඳ ගිවිසුම් අධීක්ෂණය සහ පහසුකම් සැලසීම",
        "ඈ) ගෝලීය වශයෙන් මුදල් ප්‍රතිපත්ති කළමනාකරණය කිරීම",
      ],
    },
    taken: false,
    answer: {
      en: "c) To oversee and facilitate international trade agreements",
      si: "ඇ) ජාත්‍යන්තර වෙළඳ ගිවිසුම් අධීක්ෂණය සහ පහසුකම් සැලසීම",
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
        "අ) පාරිභෝගික වියදම් අඩු වීම",
        "ආ) ජීවන වියදම වැඩිවීම",
        "ඇ) ආර්ථික ස්ථාවරත්වය",
        "ඈ) ආර්ථිකයේ අවපාතයක්",
      ],
    },
    taken: false,
    answer: {
      en: "b) An increase in the cost of living",
      si: "ආ) ජීවන වියදම වැඩිවීම",
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
        "අ) ආයතනික බදු අනුපාත නියම කිරීම",
        "ආ) ජාත්‍යන්තර වෙළඳාම නියාමනය කිරීම",
        "ඇ) මුදල් ප්‍රතිපත්තිය පාලනය කිරීම සහ උද්ධමනය කළමනාකරණය කිරීම",
        "ඈ) පාරිභෝගික ආරක්ෂණ නීති අධීක්ෂණය කිරීම",
      ],
    },
    taken: false,
    answer: {
      en: "c) To control monetary policy and manage inflation",
      si: "ඇ) මුදල් ප්‍රතිපත්තිය පාලනය කිරීම සහ උද්ධමනය කළමනාකරණය කිරීම",
    },
  },
  {
    question: {
      en: "The Goods and Services Tax (GST) was introduced to create what?",
      si: "භාණ්ඩ හා සේවා බද්ද (GST) හඳුන්වා දුන්නේ කුමක්ද?",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "A) Multiple tax regimes",
        "B) Unified national market",
        "C) Increased tax rates",
        "D) None of the above",
      ],
      si: [
        "A) බහු බදු තන්ත්‍ර",
        "B) ඒකාබද්ධ ජාතික වෙළෙඳපොළ",
        "C) බදු අනුපාත වැඩි කිරීම",
        "D) ඉහත කිසිවක් නොවේ",
      ],
    },
    taken: false,
    answer: {
      en: "B) Unified national market",
      si: "B) ඒකාබද්ධ ජාතික වෙළෙඳපොළ",
    },
  },
  {
    question: {
      en: "Which of the following is NOT a type of market structure in economics?",
      si: "ආර්ථික විද්‍යාවේ වෙළඳපල ව්‍යුහයක් නොවන පහත සඳහන් කවරක් ද?",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "A) Monopoly",
        "B) Oligopoly",
        "C) Capitalism",
        "D) Perfect competition",
      ],
      si: ["A) ඒකාධිකාරය", "B) ඔලිගොපොලි", "C) ධනවාදය", "D) පරිපූර්ණ තරඟය"],
    },
    taken: false,
    answer: {
      en: "C) Capitalism",
      si: "C) ධනවාදය",
    },
  },
  {
    question: {
      en: "Which of the following is a common effect of inflation?",
      si: "උද්ධමනයේ පොදු ප්‍රතිවිපාකය වන්නේ පහත සඳහන් කවරක් ද?",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "A) Decrease in the cost of goods and services",
        "B) Increase in the purchasing power of money",
        "C) Increase in the general price level of goods and services",
        "D) Increase in the unemployment rate",
      ],
      si: [
        "A) භාණ්ඩ හා සේවාවල මිල අඩුවීම",
        "B) මුදල් මිලදී ගැනීමේ හැකියාව වැඩි වීම",
        "C) භාණ්ඩ හා සේවාවල සාමාන්‍ය මිල මට්ටම ඉහළ යාම",
        "D) විරැකියා අනුපාතය වැඩිවීම",
      ],
    },
    taken: false,
    answer: {
      en: "C) Increase in the general price level of goods and services",
      si: "C) භාණ්ඩ හා සේවාවල සාමාන්‍ය මිල මට්ටම ඉහළ යාම",
    },
  },
  {
    question: {
      en: "Which economic theory emphasizes the role of government intervention in the economy?",
      si: "ආර්ථිකය තුළ රජයේ මැදිහත්වීමේ භූමිකාව අවධාරණය කරන න්‍යාය කුමක්ද?",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "A) Classical Economics",
        "B) Keynesian Economics",
        "C) Monetarism",
        "D) Supply-Side Economics",
      ],
      si: [
        "A) සම්භාව්‍ය ආර්ථික විද්‍යාව",
        "B) කේන්සියානු ආර්ථික විද්යාව",
        "C) මුදල්වාදය",
        "D) සැපයුම් පැත්තේ ආර්ථික විද්යාව",
      ],
    },
    taken: false,
    answer: {
      en: "B) Keynesian Economics",
      si: "B) කේන්සියානු ආර්ථික විද්යාව",
    },
  },
  {
    question: {
      en: "Which of the following is considered a leading economic indicator?",
      si: "පහත සඳහන් දේවලින් ප්‍රමුඛ ආර්ථික දර්ශකයක් ලෙස සලකන්නේ කුමක්ද?",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "A) Unemployment rate",
        "B) Consumer Price Index (CPI)",
        "C) Stock market performance",
        "D) Gross Domestic Product (GDP)",
      ],
      si: [
        "A) විරැකියා අනුපාතය",
        "B) පාරිභෝගික මිල දර්ශකය (CPI)",
        "C) කොටස් වෙළෙඳපොළ කාර්ය සාධනය",
        "D) දළ දේශීය නිෂ්පාදිතය (GDP)",
      ],
    },
    taken: false,
    answer: {
      en: "C) Stock market performance",
      si: "C) කොටස් වෙළෙඳපොළ කාර්ය සාධනය",
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
        "A) The total revenue of a company",
        "B) The total value of a company's outstanding shares of stock",
        "C) The total debt of a company",
        "D) The total assets of a company",
      ],
      si: [
        "A) සමාගමක මුළු ආදායම",
        "B) සමාගමක කැපී පෙනෙන කොටස්වල මුළු වටිනාකම",
        "C) සමාගමක සම්පූර්ණ ණය",
        "D) සමාගමක මුළු වත්කම්",
      ],
    },
    taken: false,
    answer: {
      en: "B) The total value of a company's outstanding shares of stock",
      si: "B) සමාගමක කැපී පෙනෙන කොටස්වල මුළු වටිනාකම",
    },
  },
  {
    question: {
      en: "Which global financial institution is primarily responsible for overseeing the international monetary system and offering financial assistance to countries facing balance-of-payments problems?",
      si: "ජාත්‍යන්තර මූල්‍ය පද්ධතිය අධීක්‍ෂණය කිරීම සහ ගෙවුම් ශේෂ ගැටලුවලට මුහුණ දෙන රටවලට මූල්‍ය ආධාර පිරිනැමීම සඳහා මූලික වශයෙන් වගකිව යුතු ගෝලීය මූල්‍ය ආයතනය කුමක්ද?",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "A) World Bank",
        "B) International Monetary Fund (IMF)",
        "C) World Trade Organization (WTO)",
        "D) United Nations",
      ],
      si: [
        "A) ලෝක බැංකුව",
        "B) ජාත්‍යන්තර මුල්‍ය අරමුදල (IMF)",
        "C) ලෝක වෙළඳ සංවිධානය (WTO)",
        "D) එක්සත් ජාතීන්",
      ],
    },
    taken: false,
    answer: {
      en: "B) International Monetary Fund (IMF)",
      si: "B) ජාත්‍යන්තර මුල්‍ය අරමුදල (IMF)",
    },
  },
];
