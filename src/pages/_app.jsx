import "../styles/_reset.scss"
import "@fontsource/montserrat"
import "@fontsource/roboto"

import { ThemeProvider, createTheme } from "@mui/material/styles"

import Footer from "../components/Footer"
import MuiAppBar from "../components/MuiAppBar"

const theme = createTheme({
    palette: {
        primary: {
            light: "#5f7470",
            main: "#14110f",
            dark: "#000",
            contrastText: "#ebebeb",
        },
        secondary: {
            light: "#ff7961",
            main: "#4082a5",
            dark: "#ba000d",
            contrastText: "#000",
        },
    },
    typography: {
        fontFamily: `"Roboto", sans-serif`,
        navDropDown: {
            fontFamily: `"Montserrat", sans-serif`,
            fontSize: "1.5rem",
        },
        nav: {
            fontFamily: `"Montserrat", sans-serif`,
            fontSize: "1rem",
        },
    },
    components: {
        MuiButton: {
            fontFamily: "Roboto",
        },
    },
})

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <MuiAppBar />
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
        </>
    )
}

export default MyApp
