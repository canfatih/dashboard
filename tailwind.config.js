/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {

      colors:{
        'background':"#060B27",
        'titlestart':"#F6F6F7",
        'titleto':"#7E808F",
        'lorem':"#AEBBDA",
        'h3':"#8C89B4",
        'cardborder':'#091823',
        'cartblue':'#3F46F7',
        'cartblueto':'#254D69',
        'badgegreen':'#02B15A',
        'badgetext':'#00CA65',
        'subscribe':'#FB4540',
        'signup':'#009BF2',
        'subscribetext':'#909BBB',
        'buttonsborder':'#AEABD8',
        'vectorcolor':'#00F2DE',
        'gridcolorred':'#FB4540',
        'gridcolorblue':'#0082CC',
        'conversionblue':'#5E5CE6',
        'conversionbluehover':'#3F46F7',
        'websiteanalyradiotext':'#818181',
        'radiogrupbg':'#290C51',
        'webvisitsblue':'#2B3FF2',
        'websessiongreen':'#8EF27E',
        'webradiohover':'#250442',
        'badgeredtext':'#E41414',
        'badgered':'#E8001B'
      },
      fontFamily:{
        inter:['Inter', 'sans-serif'],
        poppin:['Poppins', 'sans-serif'],
        spacegrotesk:['Space Grotesk', 'sans-serif']
      },
      lineHeight:{
        'lineheight':'19.14px'
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        'dropshadows': [
            '2px 2px 4px rgba(15, 10, 15, 0.502)',
            '-2px -2px 4px rgba(41, 82, 113, 0.502)'
        ]
      },
      boxShadow: {
        'boxshad': '0px 1px 250px 0px rgba(5, 16, 24, 0.102)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
     
    }
    

  },
  plugins: [],
}

