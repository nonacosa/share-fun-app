/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "./themes/pehtheme-simple-hugo/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 750ms ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(8deg)" },
        },
      },

      typography: {
        DEFAULT: {
          css: {
            // Remove quotation marks from blockquotes
            "blockquote p:first-of-type::before": false,
            "blockquote p:first-of-type::after": false,

            // Re-style inline code blocks
            code: {
              backgroundColor: '#e9eaeb',
              padding: '0.2rem 0.4rem',
              borderRadius: '0.25rem',
            },

            // Slightly darker inline code block background when inside blockquote
            'blockquote code': {
              backgroundColor: '#d9dae0',
            },

            // Remove quotation marks from inline code blocks
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
