module.exports = {
  content: ['./challenges/profile_card_component/index.html'],
  theme: {
    extend: {
      colors: {
        'optimum-blue': '#009efc',
        'optimum-darkblue': '#0389e1',
        'dark-cyan': 'hsl(185, 75%, 39%)',
        'desaturated-blue': 'hsl(229, 23%, 23%)',
        'dark-grayish-blue': 'hsl(227, 10%, 46%)',
        'dark-gray': 'hsl(0, 0%, 59%)',
      },
      fontFamily: {
        base: ['Kumbh Sans', 'sans-serif'],
      },
      borderWidth: {
        'bt-width': '1px',
      },
      backgroundImage: {
        'card-top': "url('images/bg-pattern-card.svg')",
        'bg-body': [
          "url('images/bg-pattern-top.svg')",
          "url('images/bg-pattern-bottom.svg')",
        ],
      },
    },
  },
  plugins: [],
  variants: {},
}
