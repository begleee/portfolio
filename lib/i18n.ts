export const locales = ['en', 'ru', 'tk'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ru: 'Русский',
  tk: 'Türkmen',
}

export const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello, I am',
      name: 'Begli',
      role: 'Frontend Developer',
      description: 'I build accessible, pixel-perfect digital experiences for the web. Passionate about React, modern JavaScript, and creating intuitive user interfaces.',
    },
    about: {
      title: 'About Me',
      p1: "I'm a 20-year-old frontend developer and student, actively growing in web development. I have practical experience creating SPAs, working with asynchronous data, state management, and component architecture.",
      p2: "I'm a quick learner, attentive to code quality, and interested in professional growth and teamwork. I specialize in building user interfaces with React, utilizing modern tools and best practices.",
      p3: "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or studying software engineering at the International University for the Humanities and Development.",
    },
    experience: {
      title: 'Experience',
      nazliperi: {
        company: 'NazliPeri',
        role: 'Frontend / React Developer',
        period: '2023 — 2025',
        duration: '1.5 years',
        description: 'Developed user interfaces on React using Hooks and functional components. Utilized React Router for routing and Context API / Redux Toolkit for state management. Implemented search, filtering, sorting, and pagination. Integrated frontend with REST API and handled asynchronous requests. Worked with forms and user input validation. Optimized component performance (memoization, key usage, re-renders). Collaborated with designers (Figma) and backend developers.',
      },
    },
    skills: {
      title: 'Tech Stack',
      categories: {
        frontend: 'Frontend',
        styling: 'Styling',
        tools: 'Tools & Others',
      },
    },
    education: {
      title: 'Education',
      degree: 'Software Engineering',
      university: 'International University for the Humanities and Development',
      period: '2024 — 2029',
    },
    languages: {
      title: 'Languages',
      turkmen: 'Turkmen',
      russian: 'Russian',
      english: 'English',
      native: 'Native',
      advanced: 'Advanced',
    },
    contact: {
      title: 'Get In Touch',
      description: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      email: 'Say Hello',
    },
    footer: {
      designed: 'Designed & Built by Beglee',
    },
    theme: {
      light: 'Light',
      dark: 'Dark',
      system: 'System',
    },
  },
  ru: {
    nav: {
      about: 'Обо мне',
      experience: 'Опыт',
      skills: 'Навыки',
      education: 'Образование',
      contact: 'Контакты',
    },
    hero: {
      greeting: 'Привет, я',
      name: 'Бегли',
      role: 'Frontend разработчик',
      description: 'Я создаю доступные, качественные цифровые решения для веба. Увлечён React, современным JavaScript и созданием интуитивных интерфейсов.',
    },
    about: {
      title: 'Обо мне',
      p1: 'Мне 20 лет, я студент и активно развиваюсь во frontend-разработке. Имею практический опыт создания SPA, работы с асинхронными данными, управлением состоянием и компонентной архитектурой.',
      p2: 'Быстро обучаюсь, внимателен к качеству кода и заинтересован в профессиональном росте и работе в команде. Специализируюсь на создании пользовательских интерфейсов на React с использованием современных инструментов.',
      p3: 'Когда я не пишу код, изучаю новые технологии, участвую в open-source проектах или учусь программной инженерии в Международном университете гуманитарных наук и развития.',
    },
    experience: {
      title: 'Опыт работы',
      nazliperi: {
        company: 'NazliPeri',
        role: 'Frontend / React разработчик',
        period: '2023 — 2025',
        duration: '1.5 года',
        description: 'Разрабатывал пользовательские интерфейсы на React с использованием Hooks и функциональных компонентов. Использовал React Router для маршрутизации и Context API / Redux Toolkit для управления состоянием. Реализовывал поиск, фильтрацию, сортировку, пагинацию данных. Интегрировал frontend с REST API, обрабатывал асинхронные запросы. Работал с формами, валидацией пользовательского ввода. Оптимизировал производительность компонентов. Взаимодействовал с дизайнерами (Figma) и backend-разработчиками.',
      },
    },
    skills: {
      title: 'Технологии',
      categories: {
        frontend: 'Frontend',
        styling: 'Стилизация',
        tools: 'Инструменты',
      },
    },
    education: {
      title: 'Образование',
      degree: 'Разработка програмного обеспечения',
      university: 'Международный университет гуманитарных наук и развития',
      period: '2024 — 2029',
    },
    languages: {
      title: 'Языки',
      turkmen: 'Туркменский',
      russian: 'Русский',
      english: 'Английский',
      native: 'Родной',
      advanced: 'Продвинутый',
    },
    contact: {
      title: 'Связаться',
      description: 'Я сейчас ищу новые возможности. Если у вас есть вопросы или просто хотите связаться, я постараюсь ответить!',
      email: 'Написать',
    },
    footer: {
      designed: 'Разработано Бегли',
    },
    theme: {
      light: 'Светлая',
      dark: 'Тёмная',
      system: 'Системная',
    },
  },
  tk: {
    nav: {
      about: 'Men hakda',
      experience: 'Tejribe',
      skills: 'Başarnyklar',
      education: 'Bilim',
      contact: 'Habarlaşmak',
    },
    hero: {
      greeting: 'Salam, men',
      name: 'Begli',
      role: 'Frontend dörediji',
      description: 'Web üçin elýeterli, ýokary hilli sanly tejribeleri döredýärin. React, häzirki zaman JavaScript we oňat ulanyjy interfeýslerini döretmäge höwesli.',
    },
    about: {
      title: 'Men hakda',
      p1: 'Men 20 ýaşly frontend dörediji we talyp, web döretmekde işjeň ösýärin. SPA döretmekde, asinhron maglumatlar bilen işlemekde, ýagdaý dolandyryşynda we komponent arhitekturasyny amaly tejribäm bar.',
      p2: 'Çalt öwrenýärin, kod hiline ünsli we hünär ösüşine we toparyň işine gyzyklanýaryn. Häzirki zaman gurallary ulanyp React bilen ulanyjy interfeýslerini döretmekde ýöriteleşýärin.',
      p3: 'Kod ýazmaýan wagtym täze tehnologiýalary öwrenýärin, açyk çeşme taslamalaryna gatnaşýaryn ýa-da Halkara Ynsanperwer we Ösüş Uniwersitetinde programma üpjünçiligi inženerligini okaýaryn.',
    },
    experience: {
      title: 'Iş tejribesi',
      nazliperi: {
        company: 'NazliPeri',
        role: 'Frontend / React dörediji',
        period: '2023 — 2025',
        duration: '1.5 ýyl',
        description: 'Hooks we funksiýa komponentlerini ulanyp React-da ulanyjy interfeýslerini döretdim. Ugurlandyrmak üçin React Router we ýagdaý dolandyryşy üçin Context API / Redux Toolkit ulanyldy. Gözleg, süzgüç, tertiplemek we sahypalandyrma amala aşyryldy. Frontend REST API bilen birleşdirildi we asinhron haýyşlar işlenildi. Formalar we ulanyjy girişini barlamak bilen işledim. Komponentleriň öndürijiligini optimizasiýa etdim. Dizaýnerler (Figma) we backend döredijileri bilen hyzmatdaşlyk etdim.',
      },
    },
    skills: {
      title: 'Tehnologiýalar',
      categories: {
        frontend: 'Frontend',
        styling: 'Bezeg',
        tools: 'Gurallar',
      },
    },
    education: {
      title: 'Bilim',
      degree: 'Programma üpjünçiligi inženerçiligi',
      university: 'Halkara Ynsanperwer we Ösüş Uniwersiteti',
      period: '2024 — 2029',
    },
    languages: {
      title: 'Diller',
      turkmen: 'Türkmen',
      russian: 'Rus',
      english: 'Iňlis',
      native: 'Ene dili',
      advanced: 'Ýokary',
    },
    contact: {
      title: 'Habarlaşyň',
      description: 'Men häzirki wagtda täze mümkinçilikleri gözleýärin. Soraglaryňyz bar bolsa, jogap bermäge synanyşaryn!',
      email: 'Salam',
    },
    footer: {
      designed: 'Begli tarapyndan döredildi',
    },
    theme: {
      light: 'Ýagty',
      dark: 'Garaňky',
      system: 'Ulgam',
    },
  },
} as const

export type TranslationKey = keyof typeof translations.en

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en
}
