module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"gg sans"', "ui-sans-serif", "system-ui"],
      },
      colors: {
        discordBg: "#313338",
        discordDark: "#1e1f22",
        discordMsgBg: "#2b2d31",
        discordInputBg: "#383a40",
      }
    },
  },
  plugins: [],
};
