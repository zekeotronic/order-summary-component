/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('/images/pattern-background-desktop.svg')",
        'mobile': "url('/images/pattern-background-mobile.svg')"
      },
      backgroundColor: {
        'background': '#D6E1FF',
      },
      spacing: {
        '100px': '100px',
      },
      borderRadius: {
        '20': '20px',
      },
      boxShadow: {
        'card': '0px 40px 40px -20px rgba(13, 48, 189, 0.151826)',
      },
      fontFamily: {
        'body': ['Red Hat Display', 'sans-serif'],
      },
      fontSize: {
        '28px': '28px',
      }
    },
  },
  plugins: [],
}

