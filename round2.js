const round2Questions = [
  {
    question: {
      en: "Not a local benefit from entrepreneurship.",
      si: "ව්‍යවසායකත්වය තුළින් ලැබෙන ප්‍රාදේශීය ප‍්‍රතිලාභයක් නොවන්නේ.",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "Decreasing urbanization",
        "Regional development",
        "One business giving birth to another business",
        "Reduction of risk and uncertainty",
      ],
      si: [
        "නාගරීකරණය අවම වීම",
        "ප්‍රාදේශීය වශයෙන් සංවර්ධනය වීම",
        "එක් ව්‍යාපාරයක් නිසා තවත් ව්‍යාපාර බිහි වීම",
        "අවදානම හා අවිනිශ්චිතාව අඩු වීම",
      ],
    },
    taken: false,
    answer: {
      en: "Reduction of risk and uncertainty",
      si: "අවදානම හා අවිනිශ්චිතාව අඩු වීම",
    },
  },
  {
    question: {
      en: "Not an entrepreneurial trait.",
      si: "ව්‍යවසායකත්ව ගති ලක්ෂණයක් නොවන්නේ.",
    },
    type: "multiple-choice",
    choices: {
      en: ["Future vision", "Flexibility", "Innovation", "Not taking risks"],
      si: ["අනාගත දැක්ම", "නම්‍යශිලිත්වය", "නවෝත්පාදනය", "අවදානම් භාර නොගැනීම"],
    },
    taken: false,
    answer: {
      en: "Not taking risks",
      si: "අවදානම් භාර නොගැනීම",
    },
  },
  {
    question: {
      en: "An entrepreneur analyses to identify the strengths of his business.",
      si: "ව්‍යවසායකයෙකු සිය ව්‍යාපාරය සදහා ශක්තින් හදුනා ගැනීමට විශ්ලේෂණය කරනුයේ.",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "Global environment",
        "Internal environment",
        "Technological environment",
        "The immediate environment",
      ],
      si: [
        "ගෝලිය පරිසරය",
        "අභ්‍යන්තර පරිසරය",
        "තාක්ෂණික පරිසරය",
        "ආසන්න පරිසරය",
      ],
    },
    taken: false,
    answer: {
      en: "Internal environment",
      si: "අභ්‍යන්තර පරිසරය",
    },
  },
  {
    question: {
      en: "Among the business environmental factors, the factor that cannot be controlled by a business is:",
      si: "ව්‍යාපාර පරිසර සාධක අතුරින් ව්‍යාපාරයකට පාලනය කල නොහැකි සාධකය වනුයේ:",
    },
    type: "multiple-choice",
    choices: {
      en: ["Community", "Managers", "Employees", "Owners"],
      si: ["ප්‍රජාව", "කලමනා කරුවන්", "සේවකයින්", "අයිතිකරුවන්"],
    },
    taken: false,
    answer: {
      en: "Community",
      si: "ප්‍රජාව",
    },
  },
  {
    question: {
      en: "Which of the following is not a basic skill an entrepreneur must develop for success in entrepreneurial roles?",
      si: "ව්‍යවසායකත්ව භූමිකාවන්ගේ සාර්ථකත්වය උදෙසා ව්‍යවසායෙකු විසින් වර්ධනය කරගත යුතු මූලික කුසලතාවයක් නොවන්නේ:",
    },
    type: "multiple-choice",
    choices: {
      en: ["Conceptual skill", "Human skill", "Creativity skill", "Technical skill"],
      si: ["සංකල්පනාත්මක කුසලතාවය", "මානව කුසලතාවය", "නිර්මාණශිලි කුසලතාවය", "තාක්ෂණික කුසලතාවය"],
    },
    taken: false,
    answer: {
      en: "Creativity skill",
      si: "නිර්මාණශිලි කුසලතාවය",
    },
  },
  {
    question: {
      en: "What is the difference between Entrepreneur and businessman?",
      si: "ව්‍යවසායකයා හා ව්‍යාපාරිකයා අතර ඇති සමාන කමක් නොවන්නේ:",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "Engaging in Transactions",
        "Coping with risk",
        "Utilization of resources",
        "Willful pursuit of competition",
      ],
      si: [
        "ගනුදෙනුවල නිරත වීම",
        "අවදානමට මුහුණ දීම",
        "සම්පත් භාවිත කිරීම",
        "තරඟය කැමැත්තෙන් සොයා යාම",
      ],
    },
    taken: false,
    answer: {
      en: "Willful pursuit of competition",
      si: "තරඟය කැමැත්තෙන් සොයා යාම",
    },
  },
  {
    question: {
      en: "A task that entrepreneurs perform in leadership roles.",
      si: "ව්‍යවසායකයින් නායකත්ව භූමිකාවේ කටයුතු කිරීමේ දී ඉටු කරන කාර්යයකි.",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "Risk-taking",
        "Provision of necessary resources",
        "Making important decisions",
        "Motivating employees",
      ],
      si: [
        "අවදානම් දැරීම",
        "අවශ්‍ය සම්පත් සැපයීම",
        "වැදගත් තීරණ ගැනීම",
        "සේවකයින් පෙළඹවීම",
      ],
    },
    taken: false,
    answer: {
      en: "Motivating employees",
      si: "සේවකයින් පෙළඹවීම",
    },
  },
  {
    question: {
      en: "The main cause of risk faced by an entrepreneur.",
      si: "ව්‍යවසායකයකුට මුහුණ දිමට සිදුවන අවදානමට ප්‍රධානම හේතුව.",
    },
    type: "multiple-choice",
    choices: {
      en: ["Loss", "Uncertainty", "Inefficiency", "Laziness"],
      si: ["අලාභය", "අවිනිශ්චිතතාව", "අකාර්යක්ෂමතාව", "අලසකම"],
    },
    taken: false,
    answer: {
      en: "Uncertainty",
      si: "අවිනිශ්චිතතාව",
    },
  },
  {
    question: {
      en: "Duration of certificate granted by Government in respect of a new invention.",
      si: "නව සොයා ගැනීමක් වෙනුවෙන් රජයෙන් ලබා දෙන සහතිකයේ ආයු කාලය.",
    },
    type: "multiple-choice",
    choices: {
      en: ["15 years", "20 years", "22 years", "25 years"],
      si: ["වසර 15", "වසර 20", "වසර 22", "වසර 25"],
    },
    taken: false,
    answer: {
      en: "20 years",
      si: "වසර 20",
    },
  },
  {
    question: {
      en: "A common feature of any business organization is:",
      si: "ඕනෑම ව්‍යාපාර සංවිධානයක පොදු ලක්ෂණයක් වන්නේ:",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "Production",
        "Trade",
        "Utilization of limited resources",
        "Advertising",
      ],
      si: [
        "නිෂ්පාදනය",
        "වෙළඳාම",
        "සීමිත සම්පත් භාවිතය",
        "ප්‍රචාරණය",
      ],
    },
    taken: false,
    answer: {
      en: "Utilization of limited resources",
      si: "සීමිත සම්පත් භාවිතය",
    },
  },
  {
    question: {
      en: "Which of the following is an advantage of registering a sole proprietorship?",
      si: "තනි පුද්ගල ව්‍යාපාරයක් ලියාපදිංචි කිරීමෙන් ලබා ගත හැකි වාසියක් වන්නේ මින් කුමක්ද?",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "Having continuity",
        "Getting an identity for the business",
        "Limitation of Liability",
        "Acquisition of legal personality",
      ],
      si: [
        "අඛණ්ඩ පැවැත්මක් ලැබීම",
        "ව්‍යාපාරයට අනන්‍යතාවයක් ලැබීම",
        "වගකීම සීමා සහිත වීම",
        "නීතිමය පුද්ගල භාවයක් ලැබීම",
      ],
    },
    taken: false,
    answer: {
      en: "Getting an identity for the business",
      si: "ව්‍යාපාරයට අනන්‍යතාවයක් ලැබීම",
    },
  },
  {
    question: {
      en: "A Retailer is a:",
      si: "සිල්ලර වෙළෙන්දා.",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "A social entrepreneur",
        "A green entrepreneur",
        "A business entrepreneur",
        "Institutional entrepreneur",
      ],
      si: [
        "සමාජයීය ව්‍යවසායකයෙකි",
        "හරිත ව්‍යවසායකයෙකි",
        "ව්‍යාපාර ව්‍යවසායකයෙකි",
        "ආයතන ව්‍යවසායකයෙකි",
      ],
    },
    taken: false,
    answer: {
      en: "A business entrepreneur",
      si: "ව්‍යාපාර ව්‍යවසායකයෙකි",
    },
  },
  {
    question: {
      en: "Checking whether things are going according to plan includes:",
      si: "සැලසුමට අනුව කටයුතු සිදුවනවා දැයි සොයා බැලීම අයත් වන්නේ:",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "To the role of manager",
        "Owner role",
        "Leadership role",
        "In the client role",
      ],
      si: [
        "කළමනාකරු භූමිකාවටය",
        "අයිතිකරු භූමිකාවටය",
        "නායකත්ව භූමිකාවටය",
        "ගනුදෙනුකරු භූමිකාවටය",
      ],
    },
    taken: false,
    answer: {
      en: "To the role of manager",
      si: "කළමනාකරු භූමිකාවටය",
    },
  },
  {
    question: {
      en: "Not a successful entry strategy for a new business:",
      si: "නව ව්‍යාපාරයක් සඳහා සාර්ථක පිවිසුම් උපාය මාර්ගයක් නොවන්නේ:",
    },
    type: "multiple-choice",
    choices: {
      en: ["Product Variation", "Innovation", "Market Gap / Space", "Sales promotion"],
      si: [
        "නිෂ්පාදිත ප්‍රභේදනය",
        "නවෝත්පාදනය",
        "වෙළඳපල හිඩැස / අවකාශය",
        "විකුණුම් ප්‍රවර්ධනය",
      ],
    },
    taken: false,
    answer: {
      en: "Sales promotion",
      si: "විකුණුම් ප්‍රවර්ධනය",
    },
  },
  {
    question: {
      en: "The business consists of:",
      si: "ව්‍යාපාර පවතින්නේ:",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "Based on production",
        "Based on goods and services",
        "Based on people's needs and wants",
        "Based on the objective of earning an attractive profit",
      ],
      si: [
        "නිෂ්පාදනය පදනම් කර ගෙනය",
        "භාණ්ඩ හා සේවා පදනම් කර ගෙනය",
        "මිනිසුන්ගේ අවශ්‍යතා හා වුවමනා පදනම් කර ගෙනය",
        "ආකර්ශනීය ලාභයක් ඉපයීමේ අරමුණ පදනම් කර ගෙනය",
      ],
    },
    taken: false,
    answer: {
      en: "Based on people's needs and wants",
      si: "මිනිසුන්ගේ අවශ්‍යතා හා වුවමනා පදනම් කර ගෙනය",
    },
  },
  {
    question: {
      en: "Advantage of being an entrepreneur over being an employee is:",
      si: "රැකියා නියුක්තිකයෙකු වීමට වඩා ව්‍යවසායකයකු වීමේ ප්‍රතිලාභයක් වන්නේ:",
    },
    type: "multiple-choice",
    choices: {
      en: [
        "Getting an attractive salary",
        "Availability of job promotions",
        "The possibility of freedom and high satisfaction",
        "Monotonous working",
      ],
      si: [
        "ආකර්ශනීය වැටුපක් ලැබීම",
        "රැකියා උසස් වීම් ලබාගත හැකි වීම",
        "නිදහස හා ඉහළ තෘප්තියක් ලැබිය හැකි වීම",
        "කාර්යයන්හි ඒකාකාරී බවක් ඇති වීම",
      ],
    },
    taken: false,
    answer: {
      en: "The possibility of freedom and high satisfaction",
      si: "නිදහස හා ඉහළ තෘප්තියක් ලැබිය හැකි වීම",
    },
  },
];
