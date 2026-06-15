export type Language = 'en' | 'bg';

export const translations = {
  en: {
    navbar: {
      howItWorks: "How it Works",
      science: "The Science",
      consultation: "Skin Consultation",
      about: "Our Story",
      faq: "FAQ",
      shop: "Shop Now"
    },
    hero: {
      badge: "The Future of Beauty",
      title: "Salon-Smooth Skin in as Little as 2 Weeks",
      subtitle: "Experience clinical-grade IPL technology from the comfort of your home. Professional results, completely painless.",
      cta: "Start Your Transformation",
      secondaryCta: "Take Skin Quiz",
      trustItem1: "95% Reduction in 8 weeks",
      trustItem2: "FDA Cleared Technology",
      trustItem3: "90-Day Money Back Guarantee",
      price: "Now €189"
    },
    press: {
      asSeenIn: "As Seen In"
    },
    scrolly: {
      step1: {
        title: "The Cooling Core",
        description: "Our signature Sapphire Ice-cooling technology maintains a constant 10°C on the skin surface, ensuring every flash is completely painless."
      },
      step2: {
        title: "Precision Flash",
        description: "Delivering clinical energy levels at 0.5-second intervals, Delora provides the fastest full-body treatment in its class."
      },
      step3: {
        title: "SmartSkin Intelligence",
        description: "The built-in AI sensor scans your skin tone 80 times per second, automatically adjusting the intensity for maximum safety and results."
      },
      stepLabel: "STEP"
    },
    science: {
      badge: "Clinical Science",
      title: "The Physics of Perfection",
      subtitle: "Delora uses specific light wavelengths to put hair follicles into a resting state, effectively breaking the cycle of regrowth.",
      card1: { title: "95% Reduction", desc: "Our Precision-Flash technology targets melanin with clinical energy levels for long-lasting smoothness in as few as 8 weeks." },
      card2: { title: "80x Smart Scanning", desc: "The AI sensor reads your skin tone 80 times per second, automatically adjusting for safety." },
      card3: { title: "Derm-Recommended", desc: "Tested and approved by leading dermatologists for safety on all suitable skin profiles." },
      proof1: { value: "10°C", label: "Constant Surface Cooling" },
      proof2: { value: "0.5s", label: "Fastest Flash Interval" },
      proof3: { value: "1M", label: "Lifetime Flashes" }
    },
    quiz: {
      title: "Virtual Skin Consultation",
      subtitle: "Find your perfect treatment protocol in 30 seconds.",
      questions: [
        {
          id: 1,
          text: "Select your skin tone:",
          options: ["Type I (Fair)", "Type II (Light)", "Type III (Medium)", "Type IV (Olive)", "Type V (Dark)", "Type VI (Deep)"]
        },
        {
          id: 2,
          text: "Select your natural hair color:",
          options: ["Black / Dark Brown", "Light Brown", "Blonde / Red", "Grey / White"]
        }
      ],
      result: {
        calculating: "Calibrating your precision protocol...",
        ready: "Analysis Complete",
        title_success: "Perfect Match! You are highly suitable.",
        desc_success: "Based on your biological profile, the Delora Elite is perfectly safe and highly effective for you. You can expect up to 95% hair reduction.",
        title_fail: "Not Recommended for Your Profile",
        desc_fail: "IPL technology requires a contrast between skin and hair color. Unfortunately, based on your selections, IPL is not recommended as it may be ineffective or unsafe for your specific skin/hair type.",
        cta: "Claim My €189 Offer"
      },
      next: "Next Step",
      back: "Back",
      restart: "Start Over"
    },
    social: {
      badge: "Join the Delora Community",
      title: "Loved by Real Women",
      subtitle: "See how thousands of women transformed their skin routine from the comfort of home.",
      cta: "Join the Community"
    },
    specs: {
      title: "Technical Specifications",
      badge: "Engineering",
      price: "€189",
      offerTitle: "The Delora Elite Package",
      offerSubtitle: "Everything you need for a professional at-home treatment.",
      items: [
        "Sapphire Ice Cooling Technology",
        "Auto Skin Tone & Contact Sensor",
        "Clinical IPL Technology",
        "6 Energy Levels",
        "Auto Flash & SHR Mode",
        "1,000,000 Lifetime Flashes",
        "Fast Treatment Sessions"
      ],
      includes: "Included: Adaptor cord, protective eyewear, razor, storage pouch, instruction manual.",
      suitability: "Note: Not suitable for red, light blonde, white/grey hair, or very dark skin."
    },
    footer: {
      tagline: "Elevating beauty through clinical technology. Professional IPL results — in your home, on your schedule.",
      explore: "Explore",
      support: "Support",
      innerCircle: "Inner Circle",
      emailPlaceholder: "Your email address",
      join: "Join the Circle",
      legal: "Delora Ltd. · Sofia, Bulgaria · FDA Cleared · CE Marked",
      copyright: "All rights reserved."
    },
    cart: {
      title: "Your Cart",
      empty: "Your cart is empty.",
      subtotal: "Subtotal",
      checkout: "Checkout with Shop Pay",
      secure: "Secure Biometric Checkout"
    },
    productPage: {
      whatsInTheBox: {
        title: "Everything You Need in One Box",
        subtitle: "The Delora Elite comes with everything for a complete at-home treatment experience.",
        device: "Delora Elite IPL Device",
        adaptor: "Power Adaptor Cord",
        eyewear: "Protective Eyewear",
        razor: "Precision Razor",
        pouch: "Premium Storage Pouch",
        manual: "Instruction Manual"
      },
      comparison: {
        title: "Leave the Razor in the Past",
        subtitle: "See how Delora compares to other hair removal methods.",
        shaving: "Shaving",
        salon: "Salon Laser",
        otherIPL: "Other IPL",
        delora: "Delora",
        rows: {
          smoothness: "Long-term smoothness",
          pain: "Pain level",
          cost: "Cost over time",
          convenience: "Convenience",
          irritation: "Skin irritation",
          speed: "Treatment speed",
          guarantee: "Guarantee"
        },
        shavingVals: ["Days", "Cuts & irritation", "€500+/year", "Daily routine", "Razor burn, ingrowns", "Daily", "None"],
        salonVals: ["Months", "Moderate–high", "€3,000+", "Monthly appointments", "Redness, swelling", "30–60 min/session", "None"],
        otherIPLVals: ["Months", "Mild–moderate", "€150–300", "At home", "Possible discomfort", "20–30 min", "Varies"],
        deloraVals: ["✓ Years of smoothness", "✓ Completely painless", "✓ One-time €189", "✓ 15 min at home", "✓ Ice-cooling protection", "✓ Under 15 minutes", "✓ 90-day money back"]
      },
      howToUse: {
        title: "Salon Results in 3 Simple Steps",
        step1Title: "Shave & Prep",
        step1Desc: "Shave the treatment area and clean your skin. No waxing or plucking — the hair root needs to be intact for IPL to work.",
        step2Title: "Flash & Glide",
        step2Desc: "Press Delora against your skin and glide. The smart sensor auto-adjusts intensity while sapphire cooling keeps you comfortable.",
        step3Title: "Enjoy Smooth Skin",
        step3Desc: "After 4–8 weekly sessions, enjoy up to 95% hair reduction. Just occasional touch-ups to maintain your results."
      },
      suitability: {
        title: "Is Delora Right for You?",
        subtitle: "IPL works best on the contrast between skin tone and hair color. Check your compatibility below.",
        note: "Not sure? Take our free Skin Quiz for a personalized recommendation."
      },
      faq: {
        title: "Frequently Asked Questions",
        q1: "How does Delora IPL work?",
        a1: "Delora uses Intense Pulsed Light (IPL) technology to target the melanin in hair follicles. The light energy is absorbed and converted to heat, which disables the follicle and prevents future growth.",
        q2: "Does it hurt?",
        a2: "Not at all! Unlike other IPL devices, Delora features our patented Sapphire Ice-Cooling technology that maintains a constant 10°C on the skin surface. Completely painless.",
        q3: "When will I see results?",
        a3: "Most users notice a visible reduction in hair growth after just 3–4 sessions. For optimal results of up to 95% hair reduction, we recommend completing the full 8-week protocol.",
        q4: "Which body areas can I use it on?",
        a4: "Delora is safe and effective on legs, arms, underarms, bikini line, stomach, back, and face (below the cheekbones). Do not use it around the eyes or on tattoos.",
        q5: "Is it safe for my skin tone and hair color?",
        a5: "Delora works best on light to medium skin tones (Fitzpatrick types I–IV) with dark hair (black, dark brown, or light brown). It is not effective on blonde, red, white, or grey hair.",
        q6: "How often should I use it?",
        a6: "During the initial treatment phase, use Delora once per week for 8 weeks. After that, use it once a month for maintenance touch-ups.",
        q7: "What is included in the box?",
        a7: "Your Delora Elite package includes: the IPL device, a power adaptor cord, protective eyewear, a precision razor, a premium storage pouch, and a manual.",
        q8: "What if I am not satisfied?",
        a8: "We offer a 90-day money-back guarantee. If you are not completely satisfied, simply contact our support team for a full refund."
      },
      reviews: {
        title: "Rated 4.9/5 by 1,000+ Happy Customers",
        verified: "Verified Purchase"
      },
      finalCTA: {
        title: "Ready for Salon-Smooth Skin?",
        subtitle: "Join 1,000+ women who made the switch from razors and salons to Delora.",
        btn: "Get Delora Today"
      }
    },
    product: {
      shippingTrust: "Free Express Shipping & 90-Day Guarantee",
      fastSessions: "Fast Sessions",
      painlessTech: "Painless Tech"
    },
    quiz_extra: {
      calculatingSubtext: "Matching your biology with Delora Elite technology...",
      cta: "Start Your Skin Consultation",
      tips: [
        "IPL requires melanin contrast. We need to check your skin tone.",
        "IPL targets the melanin in the hair root. Lighter hair may not absorb enough energy."
      ]
    },
    scrolly_extra: {
      mobileTitle: "How it Works"
    }
  },
  bg: {
    navbar: {
      howItWorks: "Как работи",
      science: "Науката",
      consultation: "Консултация",
      about: "Нашата история",
      faq: "ЧЗВ",
      shop: "Купи сега"
    },
    hero: {
      badge: "Бъдещето на красотата",
      title: "Гладка кожа като след салон само за 2 седмици",
      subtitle: "Изживейте клинична IPL технология от комфорта на вашия дом. Професионални резултати, напълно безболезнено.",
      cta: "Започнете трансформацията",
      secondaryCta: "Направи теста за кожа",
      trustItem1: "95% намаление за 8 седмици",
      trustItem2: "FDA одобрена технология",
      trustItem3: "90 дни гаранция за връщане на парите",
      price: "Сега €189"
    },
    press: {
      asSeenIn: "Представено в"
    },
    scrolly: {
      step1: {
        title: "Охлаждащо ядро",
        description: "Нашата запазена Sapphire Ice-cooling технология поддържа постоянна температура от 10°C върху кожата, гарантирайки безболезнено преживяване."
      },
      step2: {
        title: "Прецизен импулс",
        description: "Доставяйки клинични енергийни нива на интервали от 0.5 секунди, Delora предлага най-бързата процедура за цяло тяло в своя клас."
      },
      step3: {
        title: "SmartSkin Интелект",
        description: "Вграденият AI сензор сканира тена на кожата ви 80 пъти в секунда, автоматично регулирайки интензитета за максимална безопасност и резултати."
      },
      stepLabel: "СТЪПКА"
    },
    science: {
      badge: "Клинична наука",
      title: "Физика на съвършенството",
      subtitle: "Delora използва специфични дължини на светлинните вълни, за да постави космените фоликули в състояние на покой, прекъсвайки цикъла на повторен растеж.",
      card1: { title: "95% Намаление", desc: "Нашата Precision-Flash технология таргетира меланина с клинични енергийни нива за дълготрайна гладкост за само 8 седмици." },
      card2: { title: "80x Смарт сканиране", desc: "AI сензорът чете тена на кожата ви 80 пъти в секунда, автоматично регулирайки се за безопасност." },
      card3: { title: "Дерматологично одобрен", desc: "Тестван и одобрен от водещи дерматолози за безопасност при всички подходящи профили на кожата." },
      proof1: { value: "10°C", label: "Постоянно охлаждане на повърхността" },
      proof2: { value: "0.5сек", label: "Най-бърз интервал на импулса" },
      proof3: { value: "1М", label: "Импулса живот" }
    },
    quiz: {
      title: "Виртуална консултация за кожа",
      subtitle: "Открийте вашия перфектен протокол за лечение за 30 секунди.",
      questions: [
        {
          id: 1,
          text: "Изберете вашия тип кожа:",
          options: ["Тип I (Светъл)", "Тип II (Бял)", "Тип III (Среден)", "Тип IV (Маслинен)", "Тип V (Тъмен)", "Тип VI (Много тъмен)"]
        },
        {
          id: 2,
          text: "Изберете естествения цвят на косата си:",
          options: ["Черна / Тъмно кафява", "Светло кафява", "Руса / Червена", "Сива / Бяла"]
        }
      ],
      result: {
        calculating: "Калибриране на вашия прецизен протокол...",
        ready: "Анализът е завършен",
        title_success: "Перфектно съвпадение! Вие сте напълно подходяща.",
        desc_success: "Въз основа на вашия биологичен профил, Delora Elite е напълно безопасна и високоефективна за вас. Можете да очаквате до 95% намаляване на окосмяването.",
        title_fail: "Не се препоръчва за вашия профил",
        desc_fail: "IPL технологията изисква контраст между кожата и цвета на косата. За съжаление, въз основа на вашия избор, IPL не се препоръчва, тъй като може да бъде неефективна или небезопасна за вашия специфичен тип кожа/коса.",
        cta: "Вземи моята оферта за €189"
      },
      next: "Следваща стъпка",
      back: "Назад",
      restart: "Започни отначало"
    },
    social: {
      badge: "Присъединете се към общността Delora",
      title: "Обичана от истински жени",
      subtitle: "Вижте как хиляди жени трансформираха своята рутина от комфорта на дома.",
      cta: "Присъединете се към общността"
    },
    specs: {
      title: "Технически спецификации",
      badge: "Инженерство",
      price: "€189",
      offerTitle: "Пакет Delora Elite",
      offerSubtitle: "Всичко необходимо за професионална процедура у дома.",
      items: [
        "Sapphire Ice Cooling технология",
        "Автоматичен сензор за тен и контакт",
        "Клинична IPL технология",
        "6 нива на енергия",
        "Автоматичен импулс и SHR режим",
        "1,000,000 импулса живот",
        "Бързи процедури"
      ],
      includes: "Включва: Адаптер, защитни очила, самобръсначка, торбичка за съхранение, инструкции.",
      suitability: "Забележка: Не е подходящ за червена, светло руса, бяла/сива коса или много тъмна кожа."
    },
    footer: {
      tagline: "Подобряваме красотата чрез клинични технологии. Професионални IPL резултати — във вашия дом, по вашия график.",
      explore: "Разгледайте",
      support: "Поддръжка",
      innerCircle: "Вътрешен кръг",
      emailPlaceholder: "Вашият имейл адрес",
      join: "Присъединете се",
      legal: "Delora Ltd. · София, България · FDA Cleared · CE Marked",
      copyright: "Всички права запазени."
    },
    cart: {
      title: "Вашата количка",
      empty: "Количката ви е празна.",
      subtotal: "Междинна сума",
      checkout: "Поръчай с Shop Pay",
      secure: "Сигурно биометрично плащане"
    },
    productPage: {
      whatsInTheBox: {
        title: "Всичко необходимо в една кутия",
        subtitle: "Delora Elite идва с всичко необходимо за пълноценна процедура у дома.",
        device: "Delora Elite IPL Устройство",
        adaptor: "Захранващ адаптер",
        eyewear: "Защитни очила",
        razor: "Прецизна самобръсначка",
        pouch: "Премиум торбичка за съхранение",
        manual: "Ръководство за употреба"
      },
      comparison: {
        title: "Оставете самобръсначката в миналото",
        subtitle: "Вижте как Delora се сравнява с други методи за обезкосмяване.",
        shaving: "Бръснене",
        salon: "Салон",
        otherIPL: "Друг IPL",
        delora: "Delora",
        rows: {
          smoothness: "Дълготрайна гладкост",
          pain: "Ниво на болка",
          cost: "Цена във времето",
          convenience: "Удобство",
          irritation: "Дразнене на кожата",
          speed: "Скорост на процедурата",
          guarantee: "Гаранция"
        },
        shavingVals: ["Дни", "Порязвания и дразнене", "€500+/година", "Ежедневна рутина", "Враснали косми", "Ежедневно", "Няма"],
        salonVals: ["Месеци", "Умерена–висока", "€3,000+", "Месечни часове", "Зачервяване, подуване", "30–60 мин/сесия", "Няма"],
        otherIPLVals: ["Месеци", "Лека–умерена", "€150–300", "У дома", "Възможен дискомфорт", "20–30 мин", "Варира"],
        deloraVals: ["✓ Години гладкост", "✓ Напълно безболезнено", "✓ Еднократно €189", "✓ 15 мин у дома", "✓ Ледена защита", "✓ Под 15 минути", "✓ 90 дни връщане на пари"]
      },
      howToUse: {
        title: "Салонни резултати в 3 лесни стъпки",
        step1Title: "Бръснене и подготовка",
        step1Desc: "Избръснете зоната за третиране и почистете кожата си. Без кола маска или скубане — коренът на косъма трябва да е непокътнат, за да работи IPL.",
        step2Title: "Импулс и плъзгане",
        step2Desc: "Притиснете Delora към кожата си и плъзнете. Смарт сензорът автоматично регулира интензитета, докато сапфиреното охлаждане ви осигурява комфорт.",
        step3Title: "Насладете се на гладка кожа",
        step3Desc: "След 4–8 седмични сесии се насладете на до 95% намаляване на окосмяването. Само случайни процедури за поддържане на резултатите."
      },
      suitability: {
        title: "Подходяща ли е Delora за вас?",
        subtitle: "IPL работи най-добре при контраст между тена на кожата и цвета на косата. Проверете вашата съвместимост по-долу.",
        note: "Не сте сигурни? Направете нашия безплатен тест за кожа за персонализирана препоръка."
      },
      faq: {
        title: "Често задавани въпроси",
        q1: "Как работи Delora IPL?",
        a1: "Delora използва технология с интензивна импулсна светлина (IPL) за насочване към меланина в космените фоликули. Светлинната енергия се абсорбира и превръща в топлина, което деактивира фоликула и предотвратява бъдещ растеж.",
        q2: "Боли ли?",
        a2: "Изобщо не! За разлика от други IPL устройства, Delora разполага с нашата патентована Sapphire Ice-Cooling технология, която поддържа постоянна температура от 10°C на повърхността на кожата. Напълно безболезнено.",
        q3: "Кога ще видя резултати?",
        a3: "Повечето потребители забелязват видимо намаляване на растежа на космите след само 3–4 сесии. За оптимални резултати от до 95% намаляване на окосмяването препоръчваме да завършите пълния 8-седмичен протокол.",
        q4: "На кои части от тялото мога да го използвам?",
        a4: "Delora е безопасна и ефективна за крака, ръце, подмишници, бикини зона, корем, гръб и лице (под скулите). Не го използвайте около очите или върху татуировки.",
        q5: "Безопасно ли е за моя тен на кожата и цвят на косата?",
        a5: "Delora работи най-добре при светли до средни тонове на кожата (Фицпатрик типове I–IV) с тъмна коса (черна, тъмно кафява или светло кафява). Не е ефективна при руса, червена, бяла или сива коса.",
        q6: "Колко често трябва да го използвам?",
        a6: "По време на началната фаза на лечение използвайте Delora веднъж седмично в продължение на 8 седмици. След това го използвайте веднъж месечно за поддържащи процедури.",
        q7: "Какво е включено в кутията?",
        a7: "Вашият пакет Delora Elite включва: IPL устройството, захранващ адаптер, защитни очила, прецизна самобръсначка, първокласна торбичка за съхранение и ръководство.",
        q8: "Какво ако не съм доволна?",
        a8: "Предлагаме 90-дневна гаранция за връщане на парите. Ако не сте напълно удовлетворени, просто се свържете с нашия екип за поддръжка за пълно възстановяване на сумата."
      },
      reviews: {
        title: "Оценено с 4.9/5 от 1,000+ доволни клиенти",
        verified: "Потвърдена покупка"
      },
      finalCTA: {
        title: "Готови ли сте за гладка кожа като след салон?",
        subtitle: "Присъединете се към 1,000+ жени, които преминаха от самобръсначки и салони към Delora.",
        btn: "Вземи Delora днес"
      }
    },
    product: {
      shippingTrust: "Безплатна експресна доставка & 90-дневна гаранция",
      fastSessions: "Бързи процедури",
      painlessTech: "Безболезнена технология"
    },
    quiz_extra: {
      calculatingSubtext: "Съпоставяме биологията ви с технологията Delora Elite...",
      cta: "Започнете вашата консултация",
      tips: [
        "IPL изисква контраст на меланина. Трябва да проверим вашия тен на кожата.",
        "IPL таргетира меланина в корена на косъма. По-светлата коса може да не абсорбира достатъчно енергия."
      ]
    },
    scrolly_extra: {
      mobileTitle: "Как работи"
    }
  }
};

