/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Inter: ["Inter", "Sans-serif"],
    },
    colors: {
      /* ---------------------------DARK&LIGHT------------------------- */
      bodyBackgroundColor: "var(--bodyBackgroundColor)",
      footerBackgroundColor: "var(--footerBackgroundColor)",
      themeBtnColor: "var(--themeBtnColor)",
      languageBtnColor: "var(--languageBtnColor)",
      logoBackgroundColor: "var(--logoBackgroundColor)",
      logoColor: "var(--logoColor)",
      navLinksBackgroundColor: "var(--navLinksBackgroundColor)",
      navLinksBorderColor: "var(--navLinksBorderColor)",
      buttonBackgroundColor: "var(--buttonBackgroundColor)",
      buttonHoverBackgroundColor: "var(--buttonHoverBackgroundColor)",
      buttonBorderColor: "var(--buttonBorderColor)",
      buttonColor: "var(--buttonColor)",
      buttonHoverColor: "var(--buttonHoverColor)",
      mainHeadersColor: "var(--mainHeadersColor)",
      headersColor: "var(--headersColor)",
      projectsHeadersColor: "var(--projectsHeadersColor)",
      userInfosColor: "var(--userInfosColor)",
      paragraphsColor: "var(--paragraphsColor)",
      footerButtonBackgroundColor: "var(--footerButtonBackgroundColor)",
      footerButtonBorderColor: "var(--footerButtonBorderColor)",
      footerButtonColor: "var(--footerButtonColor)",
      footerLinksColor: "var(--footerLinksColor)",
      emailColor: "var(--emailColor)",
      personalBlogColor: "var(--personalBlogColor)",
      githubColor: "var(--githubColor)",
      linkedinColor: "var(--linkedinColor)",
      /* ---------------------------------------------------------------- */
      switcherButtonsColor: "#777777",
      navLinksColor: "#6b7280",
      navLinksHoverColor: "#3730a3",
    },
    screens: {
      phone: { max: "500px" },
      tablet: { min: "501px", max: "1024px" },
      desktop: { min: "1024px" },
    },
  },
  plugins: [],
};
