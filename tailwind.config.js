module.exports = {
    content: ['./src/**/*.{html,js,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                h1: ['Reem Kufi', 'sans-serif'],
                p: ['Poppins', 'sans-serif'],
            },
            colors: {
                background: '#8BAA9F',
                textBoxBackground: '#E3E3E3',
                generateBackground: '#6CA389',
            },
            width: {
                textBoxWidth: '200px',
                generateWidth: '100px',
                keyWidth: '100px',
            },
            height: {
                textBoxHeight: '190px',
            },
        },
    },
    plugins: [],
};
