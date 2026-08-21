/** @type {import('tailwindcss').Config} */
export default { content: ['./index.html','./src/**/*.{ts,tsx}'], darkMode: 'class', theme: { extend: { fontFamily: { sans: ['Inter','ui-sans-serif','system-ui'] }, colors: { ink: '#080b14', navy: '#101827', mint: '#75f1c0', sky: '#8bb8ff' }, boxShadow: { glow: '0 0 45px rgba(117,241,192,.16)' } } }, plugins: [] };
