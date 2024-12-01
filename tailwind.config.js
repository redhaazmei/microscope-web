/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Satoshi-Variable"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        sm: ['12px', '160%'],
        md: ['14px', '160%'],
        lg: ['16px', '160%'],
        xl: ['18px', '150%'],
        h1: [
          '48px',
          {
            lineHeight: '130%',
            fontWeight: '700',
          },
        ],
        h2: [
          '40px',
          {
            lineHeight: '130%',
            fontWeight: '700',
          },
        ],
        h3: [
          '28px',
          {
            lineHeight: '130%',
            fontWeight: '700',
          },
        ],
        h4: [
          '24px',
          {
            lineHeight: '140%',
            fontWeight: '700',
          },
        ],
        h5: [
          '20px',
          {
            lineHeight: '140%',
            fontWeight: '700',
          },
        ],
        h6: [
          '18px',
          {
            lineHeight: '140%',
            fontWeight: '700',
          },
        ],
      },
      colors: {
        primary: {
          500: '#D2F801',
          400: '#E4FB67',
          300: '#EDFC99',
          200: '#F6FECC',
          100: '#FBFEE6',
        },
        secondary: {
          500: '#5A45FE',
          400: '#7B6AFE',
          300: '#BDB5FF',
          200: '#DEDAFF',
          100: '#EEECFF',
        },
        neutral: {
          900: '#171717',
          800: '#262626',
          700: '#404040',
          600: '#525252',
          500: '#737373',
          400: '#A3A3A3',
          300: '#D4D4D4',
          200: '#E5E5E5',
          100: '#F5F5F5',
          50: '#FAFAFA',
        },
        success: {
          500: '#04A599',
          400: '#2DB7AD',
          300: '#80DAD4',
          200: '#AAECE7',
          100: '#D3FEFB',
        },
        warning: {
          500: '#EDAC07',
          400: '#F1BD39',
          300: '#F8DE9C',
          200: '#FBEECD',
          100: '#FDF7E6',
        },
        error: {
          500: '#E31C31',
          400: '#E9495A',
          300: '#F4A4AD',
          200: '#F9D2D6',
          100: '#FCE8EA',
        },
        sky: '#61BDFF',
        shine: '#EAAF58',
      },
    },
  },
  plugins: [],
}
