import { heroui } from "@heroui/react";
// or import from theme package if you are using individual packages.
// import { heroui } from "@heroui/theme";
export default heroui({
    layout: {},
    defaultTheme: 'dark',
    defaultExtendTheme: 'dark',
    themes: {
        light: {
            layout: {},
            colors: {
                primary: '#D826F0',
                secondary: '#1DA5DB',
                success: '#2CF792',
                warning: '#F1E67F',
                danger: '#F04F6A',
            },
        },
        dark: {
            layout: {},
            colors: {
                primary: '#D826F0',
                secondary: '#39C1F7',
                success: '#2CF792',
                warning: '#F1E67F',
                danger: '#F04F6A',
            },
        },
    },
});
