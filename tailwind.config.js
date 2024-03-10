/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'desktop': "url('/images/pattern-background-desktop.svg')",
        'mobile': "url('/images/pattern-background-mobile.svg')"
      },
      width: {
        '450px': '450px',
        '327px': '327px',
      },
      backgroundColor: {
        'background': '#D6E1FF',
        'plan': '#F7F9FF'
      },
      spacing: {
        '100px': '100px',
      },
      borderRadius: {
        '20': '20px',
      },
      boxShadow: {
        'card': '0px 40px 40px -20px rgba(13, 48, 189, 0.151826)',
        'button': 'box-shadow: 0px 20px 20px rgba(56, 42, 225, 0.190291);'
      },
      fontFamily: {
        'body': ['Red Hat Display', 'sans-serif'],
      },
      fontSize: {
        '28px': '28px',
      },
      colors: {
        'faded-gray': '#717FA6',
        'link-blue': '#382AE1',
        'hover-blue': '#766CF1',
        'hover-dark': '#1F2E55'
      }
    },
  },
  plugins: [],
}

