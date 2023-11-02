/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',      // Small screens (e.g., mobile phones)
      'md': '768px',      // Medium screens (e.g., tablets)
      'lg': '1024px',     // Large screens (e.g., small desktops)
      'xl': '1280px',     // Extra large screens (e.g., large desktops)
      '2xl': '1536px',    // Extra extra large screens
      // Add more breakpoints as needed
    },
    colors: {
      // Primary Colors
      primaryColor: '#F3CB14', 
      secondaryColor: '#4C5C54',

      // Background Colors
      primaryBackground: '#ffffff', // White
      secondaryBackground: '#f5f5f5', // Light Gray

      // Text Colors
      primaryText: '#4F4F4F', // Dark Gray
      secondaryText: '#777', // Light Gray

      // Text on Background Colors (for readability)
      textOnPrimaryBackground: '#ffffff',
      textOnSecondaryBackground: '#ffffff',

      // Accent Colors
      accentColor: '#F2E413',

      // Error and Validation Colors
      errorColor: '#ff0000', // Red
      validationColor: '#4caf50', // Green

      // Disabled State Colors
      disabledBackground: '#ececec', // Light Gray
      disabledText: '#999', // Gray

      // Hover and Focus Colors
      hoverColor: '#F2AE13', // Light Blue
      focusColor: '#C5F213', // Light Blue

      // Success and Notification Colors
      successColor: '#4caf50', // Green
      notificationColor: '#2196f3', // Blue

      // Warning and Caution Colors
      warningColor: '#ff9800', // Amber

      // Info and Information Colors
      infoColor: '#2196f3', // Blue,

      transparent: 'rgba(0,0,0,0)',
      loadingColor: 'rgba(255, 255, 255, 0.9)'
    },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
  },
  plugins: [],
};
