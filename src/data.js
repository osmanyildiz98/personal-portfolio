import userPhoto from "../public/user-photo.jpg";
import strokeLight from "../public/icons/strokeLight.png";
import strokeDark from "../public/icons/strokeDark.png";
import cssIcon from "../public/skills-icons/css.svg";
import htmlIcon from "../public/skills-icons/html.svg";
import javascriptIcon from "../public/skills-icons/javascript.svg";
import nodejsIcon from "../public/skills-icons/nodejs.svg";
import reactIcon from "../public/skills-icons/react.svg";
import tailwindIcon from "../public/skills-icons/tailwind-css.svg";
import calculator from "../public/projects/calculator.png";
import library from "../public/projects/library.png";
import etchSketch from "../public/projects/etch-a-sketch.png";
import themeBtnLight from "../public/icons/themeBtnLight.png";
import themeBtnDark from "../public/icons/themeBtnDark.png";
const LanguagesData = {
  tr: {
    //! Header

    header: {
      themeBtnLight: "AYDINLIK MOD",
      themeBtnDark: "KARANLIK MOD",
      themeBtnLightIcon: themeBtnLight,
      themeBtnDarkIcon: themeBtnDark,
      languageBtn: "ENGLISH",
      languageSwitch: "TO",
      navArray: [
        { title: "Yetenekler", link: "#skills" },
        { title: "Projeler", link: "#projects" },
        { title: "Beni İşe Al", link: "" },
      ],
    },
    //! Hero

    hero: {
      strokeLight: strokeLight,
      strokeDark: strokeDark,
      name: "Osman Yıldız",
      headerOne: "Yaratıcı düşünür",
      headerTwo: "Minimalizm aşığı",
      description:
        "Merhaba, ben Osman. Full-stack geliştiricisiyim. Eğer sağlam ve ölçeklenebilir, harika kullanıcı deneyimlerine sahip ön yüz ürünleri oluşturabilecek bir geliştirici arıyorsanız, el sıkışalım.",
      image: userPhoto,
      hireMe: "Beni İşe Al",
      hireMeLink: "",
    },

    //! Skills

    skills: {
      header: "Yetenekler",
      array: [
        {
          Title: "Java Script",
          Icon: javascriptIcon,
          Desc: "JavaScript kullanarak, hem istemci tarafı hem de sunucu tarafı işlevlerini yöneten, etkileşimli, dinamik ve özelliklerle dolu web uygulamaları oluşturuyorum.",
        },
        {
          Title: "React",
          Icon: reactIcon,
          Desc: "Bileşen tabanlı bir mimari kullanarak karmaşık kullanıcı arayüzleri oluşturarak dinamik ve etkileşimli web uygulamaları geliştirebilirim.",
        },
        {
          Title: "Node.Js",
          Icon: nodejsIcon,
          Desc: "Node.js kullanarak hızlı ve ölçeklenebilir sunucu tarafı uygulamaları oluşturabilirim.",
        },
        {
          Title: "HTML",
          Icon: htmlIcon,
          Desc: "Web sayfalarının temel iskeletini oluşturmak için HTML'in anlamsal yapısını etkili bir şekilde kullanırım.",
        },
        {
          Title: "CSS",
          Icon: cssIcon,
          Desc: "Modern ve görsel olarak çekici web sayfaları oluşturmak için CSS ve animasyon tekniklerini uygularım.",
        },
        {
          Title: "Tailwind",
          Icon: tailwindIcon,
          Desc: "Projelere özelleştirilebilir stiller hızlıca eklemek için Tailwind CSS'i verimli bir şekilde kullanırım.",
        },
      ],
    },

    //! Profile

    profile: {
      header: "Profil",
      aboutMe: "Hakkımda",
      aboutMeDescOne:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      aboutMeDescTwo:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      infoArray: [
        { title: "Doğum Tarihi", value: "23.01.1998" },
        { title: "İkametgah Şehri", value: "Istanbul" },
        {
          title: "Eğitim",
          value: "Biruni Üniversitesi - Bilgisayar Programcılığı (2022-2024)",
        },
        { title: "Tercih Edilen Rol", value: "Frontend Developer" },
      ],
    },

    //! Projects

    project: {
      header: "Projeler",
      projectsArray: [
        {
          title: "Calculator",
          desc: "Bu proje, temel aritmetik işlemleri gerçekleştiren bir web tabanlı hesap makinesi uygulamasıdır. Kullanıcılar toplama, çıkarma, çarpma ve bölme işlemlerini kolayca yapabilir ve kullanıcı dostu arayüz sayesinde işlemler hızlı bir şekilde gerçekleştirilebilir.",
          github: "Github",
          view: "Görüntüle",
          githubLink: "https://github.com/osmanyildiz98/calculator-js",
          viewLink: "https://osmanyldzs-calculator-js.vercel.app/",
          toolsArray: ["HTML", "CSS", "JavaScript"],
          image: calculator,
        },
        {
          title: "Etch-A-Sketch",
          desc: "Bu proje, klasik Etch A Sketch oyuncağını dijital bir ortama taşıyan bir web uygulamasıdır. Kullanıcılar, fare hareketlerini kullanarak bir tuval üzerinde çizimler yapabilir, çizim boyutunu değiştirebilir ve istedikleri zaman tuvali temizleyebilir.",
          github: "Github",
          view: "Görüntüle",
          githubLink: "https://github.com/osmanyildiz98/etch-a-sketch",
          viewLink: "https://osmanyldzs-etch-a-sketch.vercel.app/",
          toolsArray: ["HTML", "CSS", "JavaScript"],
          image: etchSketch,
        },
        {
          title: "Library",
          desc: "Bu proje, bir kütüphane yönetim sistemi uygulamasıdır. Kullanıcılar kitapları listeleyebilir, ekleyebilir, düzenleyebilir ve silebilir. Ayrıca, kitapların detaylarına göz atabilir ve arama yapabilirler.",
          github: "Github",
          view: "Görüntüle",
          githubLink: "https://github.com/osmanyildiz98/library",
          viewLink: "https://osmanyldzs-library.vercel.app/",
          toolsArray: ["HTML", "CSS", "JavaScript"],
          image: library,
        },
      ],
    },

    //! Footer

    footer: {
      header: "Bir sonraki ürününüzde birlikte çalışalım.",
      email: "osmanyldzs@outlook.com",
      footerLinks: [
        { title: "Kişisel Blog", link: "", color: "text-personalBlogColor" },
        {
          title: "Github",
          link: "https://github.com/OsmanYildiz98",
          color: "text-githubColor",
        },
        {
          title: "Linkedin",
          link: "https://www.linkedin.com/in/osmany%C4%B1ld%C4%B1z98/",
          color: "text-linkedinColor",
        },
      ],
    },
  },
  en: {
    //! Header

    header: {
      themeBtnLight: "LIGHT MODE",
      themeBtnDark: "DARK MODE",
      themeBtnLightIcon: themeBtnLight,
      themeBtnDarkIcon: themeBtnDark,
      languageBtn: "TÜRKÇE",
      languageSwitch: "'YE GEÇ",
      navArray: [
        { title: "Skills", link: "#skills" },
        { title: "Projects", link: "#projects" },
        { title: "Hire me", link: "" },
      ],
    },

    //! Hero

    hero: {
      strokeLight: strokeLight,
      strokeDark: strokeDark,
      name: "Osman Yıldız",
      headerOne: "Creative thinker",
      headerTwo: "Minimalism lover",
      description:
        "Hi, I’m Osman. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.",
      image: userPhoto,
      hireMe: "Hire Me",
      hireMeLink: "",
    },

    //! Skills

    skills: {
      header: "Skills",
      array: [
        {
          Title: "Java Script",
          Icon: javascriptIcon,
          Desc: "I use JavaScript to create interactive, dynamic, and feature-rich web applications, handling both client-side and server-side functionalities.",
        },
        {
          Title: "React",
          Icon: reactIcon,
          Desc: "I can develop dynamic and interactive web applications by building complex user interfaces with a component-based architecture.",
        },
        {
          Title: "Node.Js",
          Icon: nodejsIcon,
          Desc: "I can create fast and scalable server-side applications using Node.js.",
        },
        {
          Title: "HTML",
          Icon: htmlIcon,
          Desc: "I effectively use the semantic structure of HTML to build the foundational skeleton of web pages.",
        },
        {
          Title: "CSS",
          Icon: cssIcon,
          Desc: "I apply CSS and animation techniques to create modern and visually appealing web pages.",
        },
        {
          Title: "Tailwind",
          Icon: tailwindIcon,
          Desc: "I efficiently use Tailwind CSS to quickly add customizable styles to projects.",
        },
      ],
    },

    //! Profile

    profile: {
      header: "Profile",
      aboutMe: "About Me",
      aboutMeDescOne:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      aboutMeDescTwo:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      infoArray: [
        { title: "Birth Date", value: "23.01.1998" },
        { title: "Residence", value: "Istanbul" },
        {
          title: "Education",
          value: "Biruni University - Computer Programming (2022-2024)",
        },
        { title: "Preferred Role", value: "Frontend Developer" },
      ],
    },

    //! Projects

    project: {
      header: "Projects",
      projectsArray: [
        {
          title: "Calculator",
          desc: "This project is a web-based calculator application that performs basic arithmetic operations. Users can easily perform addition, subtraction, multiplication, and division, and thanks to its user-friendly interface, the operations can be completed quickly.",
          github: "Github",
          view: "View Site",
          githubLink: "https://github.com/osmanyildiz98/calculator-js",
          viewLink: "https://osmanyldzs-calculator-js.vercel.app/",
          toolsArray: ["HTML", "CSS", "JavaScript"],
          image: calculator,
        },
        {
          title: "Etch-A-Sketch",
          desc: "This project is a web application that brings the classic Etch A Sketch toy to the digital world. Users can draw on a canvas using mouse movements, adjust the grid size, and clear the canvas whenever they want.",
          github: "Github",
          view: "View Site",
          githubLink: "https://github.com/osmanyildiz98/etch-a-sketch",
          viewLink: "https://osmanyldzs-etch-a-sketch.vercel.app/",
          toolsArray: ["HTML", "CSS", "JavaScript"],
          image: etchSketch,
        },
        {
          title: "Library",
          desc: "This project is a library management system application. Users can list, add, edit, and delete books. Additionally, they can view book details and search for books.",
          github: "Github",
          view: "View Site",
          githubLink: "https://github.com/osmanyildiz98/library",
          viewLink: "https://osmanyldzs-library.vercel.app/",
          toolsArray: ["HTML", "CSS", "JavaScript"],
          image: library,
        },
      ],
    },

    //! Footer

    footer: {
      header: "Let's work together on your next product.",
      email: "osmanyldzs@outlook.com",
      footerLinks: [
        { title: "Personal Blog", link: "", color: "text-personalBlogColor" },
        {
          title: "Github",
          link: "https://github.com/OsmanYildiz98",
          color: "text-githubColor",
        },
        {
          title: "Linkedin",
          link: "https://www.linkedin.com/in/osmany%C4%B1ld%C4%B1z98/",
          color: "text-linkedinColor",
        },
      ],
    },
  },
};

export default LanguagesData;
