const tailwind = require('tailwindcss-plugins/gradients');

module.exports = {
  theme: {
    fontFamily: {
      lato: [
        'lato',
        'sans-serif',
      ],
    },
    gradients: {
      'primary-gradient': ['45deg', '#254E81', '#2C7EA1'],
    },
    boxShadow: {
      sm: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      md: '0px 6px 12px rgba(0, 0, 0, 0.1)',
      lg: '0px 8px 16px rgba(0, 0, 0, 0.1)',
      inner: 'inset 0px 1px 2px rgba(0, 0, 0, 0.1)',
    },
    colors: {
      'dark-blue': '#254E81',
      'primary-blue': '#2C7EA1',
      'purple-600': '#5A329A',
      'purple-500': '#713EC1',
      'purple-400': '#8E65CD',
      'purple-300': '#AA8BDA',
      'purple-200': '#C6B2E6',
      'purple-100': '#F1ECF9',
      'red-600': '#AC2038',
      'red-500': '#D72846',
      'red-400': '#DF536B',
      'red-300': '#E77E90',
      'red-200': '#EFA9B5',
      'red-100': '#F7D4DA',
      'orange-600': '#C45808',
      'orange-500': '#F56E0A',
      'orange-400': '#F78B3B',
      'orange-300': '#F9A86C',
      'orange-200': '#FBC59D',
      'orange-100': '#FDE2CE',
      'green-600': '#29A370',
      'green-500': '#33CC8C',
      'green-400': '#5CD6A3',
      'green-300': '#85E0BA',
      'green-200': '#ADEBD1',
      'green-100': '#D6F5E8',
      'blue-600': '#1298BA',
      'blue-500': '#16BEE9',
      'blue-400': '#44CBEE',
      'blue-300': '#73D8F2',
      'blue-200': '#A1E5F7',
      'blue-100': '#D0F2FB',
      'gray-600': '#283341',
      'gray-500': '#41556C',
      'gray-400': '#7187A5',
      'gray-300': '#D3E0F1',
      'gray-200': '#F1F6FC',
      'gray-100': '#F8FAFD',
      white: '#FFFFFF',
    },
    borderRadius: {
      sm: '0.25rem',
      default: '0.375rem',
      md: '0.5rem',
      lg: '0.75rem',
      full: '9999px',
    },
    fontSize: {
      xs: '.75rem',
      sm: '.938rem',
      base: '1rem',
      lg: '1.063rem',
      xl: '1.25rem',
      '2xl': '1.438rem',
      '3xl': '1.688rem',
      '4xl': '2rem',
      '5xl': '2.5rem',
    },
    extend: {
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    gradients: ['responsive', 'hover'],
  },
  plugins: [
    tailwind,
  ],
};
