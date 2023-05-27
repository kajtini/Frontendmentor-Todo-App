/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                primary: ["Josefin Sans", "sans-serif"],
            },

            colors: {
                "bright-blue": "hsl(220, 98%, 61%)",
                turqoise: "hsl(192, 100%, 67%)",
                purple: "hsl(280, 87%, 65%)",

                "dark-very-dark-blue": "hsl(235, 21%, 11%)",
                "dark-very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
                "dark-light-grayish-blue": "hsl(234, 39%, 85%)",
                "dark-light-grayish-blue-hover": "hsl(236, 33%, 92%)",
                "dark-dark-grayish-blue": "hsl(234, 11%, 52%)",
                "dark-very-dark-grayish-blue": "hsl(233, 14%, 35%)",
                "dark-very-dark-grayish-blue": "hsl(237, 14%, 26%)",

                "light-very-light-gray": "hsl(0, 0%, 98%)",
                "light-very-light-grayish-blue": "hsl(236, 33%, 92%)",
                "light-light-grayish-blue": "hsl(233, 11%, 84%)",
                "light-dark-grayish-blue": "hsl(236, 9%, 61%)",
                "light-very-dark-grayish-blue": "hsl(235, 19%, 35%)",
            },

            backgroundImage: {
                "desktop-dark": "url('./assets/bg-desktop-dark.jpg')",
                "mobile-dark": "url('./assets/bg-mobile-dark.jpg')",
                "desktop-light": "url('./assets/bg-desktop-light.jpg')",
                "mobile-light": "url('./assets/bg-mobile-light.jpg')",
            },
        },
    },
    plugins: [],
};
