const component = {
    MuiCssBaseline: {
        styleOverrides: `
            html, body, #root {
                min-height:100vh;
            }
        `
    },
    MuiButton: {
        styleOverrides: {
            root: {
                fontSize: "12px"
            }
        }
    }
}

export default component;