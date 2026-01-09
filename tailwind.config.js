/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#4ade80', // green-400
                    DEFAULT: '#166534', // green-800 (Deep Federal Green)
                    dark: '#14532d', // green-900
                },
                secondary: {
                    light: '#fde047', // yellow-300
                    DEFAULT: '#eab308', // yellow-500
                    dark: '#ca8a04', // yellow-600
                },
                accent: '#f3f4f6', // gray-100
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
