module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        'zen-dots': ['Zen Dots', 'sans-serif'],
      },
      fontSize: {
        custom: "20px",
      },
      fontWeight: {
        semibold: 600,
      },
      lineHeight: {
        custom: "24.2px",
      },
    },
  },
  safelist: [
    {
      pattern: /col-span-(\d+)/,
      variants: ["sm", "md", "lg", "xl"],
    },
    {
      pattern: /row-span-(\d+)/,
      variants: ["sm", "md", "lg", "xl"],
    },
  ],
  plugins: [],
};
