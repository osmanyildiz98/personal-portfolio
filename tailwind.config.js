/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      /* ---------------------------DARK&LIGHT------------------------- */
      bodyBackgroundColor: "var(--bodyBackgroundColor)",
      footerBackgroundColor: "var(--footerBackgroundColor)",
      themeBtnColor: "var(--themeBtnColor)",
      languageBtnColor: "var(--languageBtnColor)",
      logoBackgroundColor: "var(--logoBackgroundColor)",
      logoColor: "var(--logoColor)",
      buttonBackgroundColor: "var(--buttonBackgroundColor)",
      buttonHoverBackgroundColor: "var(--buttonHoverBackgroundColor)",
      buttonBorderColor: "var(--buttonBorderColor)",
      buttonColor: "var(--buttonColor)",
      buttonHoverColor: "var(--buttonHoverColor)",
      mainHeadersColor: "var(--mainHeadersColor)",
      headersColor: "var(--headersColor)",
      userInfosColor: "var(--userInfosColor)",
      paragraphsColor: "var(--paragraphsColor)",
      footerButtonBackgroundColor: "var(--footerButtonBackgroundColor)",
      footerButtonBorderColor: "var(--footerButtonBorderColor)",
      footerButtonColor: "var(--footerButtonColor)",
      footerLinksColor: "var(--footerLinksColor)",
      emailColor: "var(--emailColor)",
      /* ---------------------------------------------------------------- */
      switcherButtonsColor: "#777777",
      navLinksBackgroundColor: "#ffffff",
      navLinksBorderColor: "#3730a3",
      navLinksColor: "#6b7280",
      navLinksHoverColor: "#3730a3",
    },
    screens: {
      phone: { max: "400px" },
      tablet: { min: "401px", max: "1024px" },
      desktop: { min: "1024px" },
    },
  },
  plugins: [],
};