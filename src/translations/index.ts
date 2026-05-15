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
      trustItem1: "95% Reduction in 4 weeks",
      trustItem2: "FDA Cleared Technology",
      trustItem3: "90-Day Money Back Guarantee"
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
      card1: { title: "95% Reduction", desc: "Our Precision-Flash technology targets melanin with clinical energy levels for permanent results." },
      card2: { title: "80x Smart Scanning", desc: "The AI sensor reads your skin tone 80 times per second, automatically adjusting for safety." },
      card3: { title: "Derm-Recommended", desc: "Tested and approved by leading dermatologists for safety on all suitable skin profiles." },
      proof1: { value: "10°C", label: "Constant Surface Cooling" },
      proof2: { value: "0.5s", label: "Fastest Flash Interval" },
      proof3: { value: "10+ Y", label: "Device Lifespan" }
    },
    quiz: {
      title: "Virtual Skin Consultation",
      subtitle: "Find your perfect treatment protocol in 30 seconds.",
      questions: [
        {
          id: 1,
          text: "What is your primary skin concern?",
          options: ["Body Hair Removal", "Face Rejuvenation", "Dark Spot Correction", "Acne Treatment"]
        },
        {
          id: 2,
          text: "Select your natural hair color in the treatment area:",
          options: ["Black / Dark Brown", "Light Brown", "Blonde / Red", "Grey / White"]
        },
        {
          id: 3,
          text: "Select your skin tone from the Fitzpatrick scale:",
          options: ["Type I (Fair)", "Type II (Light)", "Type III (Medium)", "Type IV (Olive)"]
        },
        {
          id: 4,
          text: "How would you describe your skin's sensitivity?",
          options: ["Highly Sensitive", "Normal", "Resilient", "Not Sure"]
        }
      ],
      result: {
        calculating: "Calibrating your precision protocol...",
        ready: "Analysis Complete",
        title: "Your Personalized Protocol is Ready",
        desc: "Based on your biological profile, the Delora Elite is your perfect match. Recommended intensity: Level 3-4 with Sapphire Cooling active.",
        cta: "Claim My 15% Discount"
      },
      next: "Next Step",
      back: "Back",
      restart: "Start Over"
    }
  },
  bg: {
    navbar: {
      howItWorks: "Как работи",
      science: "Науката",
      consultation: "Консултация",
      about: "Нашата история",
      faq: "Често задавани въпроси",
      shop: "Купи сега"
    },
    hero: {
      badge: "Бъдещето на красотата",
      title: "Гладка кожа като след салон само за 2 седмици",
      subtitle: "Изживейте клинична IPL технология от комфорта на вашия дом. Професионални резултати, напълно безболезнено.",
      cta: "Започнете трансформацията",
      secondaryCta: "Направи теста за кожа",
      trustItem1: "95% намаление за 4 седмици",
      trustItem2: "FDA одобрена технология",
      trustItem3: "90 дни гаранция за връщане на парите"
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
      card1: { title: "95% Намаление", desc: "Нашата Precision-Flash технология таргетира меланина с клинични енергийни нива за постоянни резултати." },
      card2: { title: "80x Смарт сканиране", desc: "AI сензорът чете тена на кожата ви 80 пъти в секунда, автоматично регулирайки се за безопасност." },
      card3: { title: "Дерматологично одобрен", desc: "Тестван и одобрен от водещи дерматолози за безопасност при всички подходящи профили на кожата." },
      proof1: { value: "10°C", label: "Постоянно охлаждане на повърхността" },
      proof2: { value: "0.5сек", label: "Най-бърз интервал на импулса" },
      proof3: { value: "10+ Г", label: "Живот на устройството" }
    },
    quiz: {
      title: "Виртуална консултация за кожа",
      subtitle: "Открийте вашия перфектен протокол за лечение за 30 секунди.",
      questions: [
        {
          id: 1,
          text: "Какво е основното ви притеснение относно кожата?",
          options: ["Премахване на окосмяване", "Подмладяване на лицето", "Корекция на тъмни петна", "Лечение на акне"]
        },
        {
          id: 2,
          text: "Изберете естествения цвят на косата си в зоната на третиране:",
          options: ["Черна / Тъмно кафява", "Светло кафява", "Руса / Червена", "Сива / Бяла"]
        },
        {
          id: 3,
          text: "Изберете вашия тип кожа по скалата на Фицпатрик:",
          options: ["Тип I (Светъл)", "Тип II (Бял)", "Тип III (Среден)", "Тип IV (Маслинен)"]
        },
        {
          id: 4,
          text: "Как бихте описали чувствителността на кожата си?",
          options: ["Силно чувствителна", "Нормална", "Устойчива", "Не знам"]
        }
      ],
      result: {
        calculating: "Калибриране на вашия прецизен протокол...",
        ready: "Анализът е завършен",
        title: "Вашият персонализиран протокол е готов",
        desc: "Въз основа на вашия биологичен профил, Delora Elite е вашият перфектен избор. Препоръчителен интензитет: Ниво 3-4 с активна Sapphire Cooling.",
        cta: "Вземи моите 15% отстъпка"
      },
      next: "Следваща стъпка",
      back: "Назад",
      restart: "Започни отначало"
    }
  }
};
