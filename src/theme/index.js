import { createTheme as MuiCreateTheme } from "@mui/material";
import breakPoint from "./breakpoint";
import component from "./components";
import palette from "./palette";

import MODES from "./mode";


const generateTheme = (mode) => {
    const selectTheme = mode ? MODES.filter((item) => item.name === mode)[0] : MODES[0]

    return MuiCreateTheme(
        {
            spacing: 4,
            breakpoints: breakPoint,
            palette: palette,
            components: component,
        },
        {
            name: selectTheme.name,
            header: selectTheme.header,
            footer: selectTheme.footer,
        }
    )
}

export default generateTheme;