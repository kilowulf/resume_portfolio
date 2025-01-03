/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}"
  ],
  prefix: "",
  theme: {
    screens: {
      xs: "399px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1280px"
    },
    container: {
      center: true,
      padding: "15px",
      screens: {
        xs: "399px",
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1280px"
      }
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)"
    },
    extend: {
      colors: {
        primary: "#0b0b0e",
        secondary: "#1c1c22",
        accent: {
          DEFAULT: "#00ffff",
          hover: "#00b3b3"
        }
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "3.5em" } // Adjust width as needed
        },
        blink: {
          "50%": { borderColor: "transparent" }
        },

        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        typing: "typing 2s steps(10, end), blink .5s step-end infinite",
        blink: "blink 1s step-end"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};
