import React, { useState, useMemo } from 'react';
import styled from '@emotion/styled';
import { Box, ThemeProvider, CssBaseline, Typography, Button, Grid } from '@mui/material';

import generateTheme from './theme';

const TestComponent = styled.div`
  position:relative;
  color:${props => props.theme.palette.text.main};
  ${props => props.theme.breakpoints.down("md")} {
    border:1px solid #666;
  }
`;
const Header = styled(Grid)`
   height:60px;
   background:${props => props.theme.header.background};
   color:${props => props.theme.header.color};
   text-align:center;
`;
const Footer = styled(Grid)`
   height:60px;
   background:${props => props.theme.footer.background};
   color:${props => props.theme.footer.color};
   text-align:center;
`;

const App = () => {
  const [mode, setMode] = useState(localStorage.getItem("themeMode") || 'light');

  const theme = useMemo(() => {
    localStorage.setItem("themeMode", mode);
    return generateTheme(mode);
  }, [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        direction={"column"}
        sx={{ minHeight: '100vh' }}
      >
        <Header item>HEADER</Header>
        <Grid item xs>
          <Typography
            component={"h1"}
            className='title'
            sx={{ pb: theme.spacing(3) }}
          >
            제목
          </Typography>

          <TestComponent>TestComponent</TestComponent>

          <Box>
            <Button
              sx={{ 
                color: theme.palette.main.text,
                border: `1px solid ${theme.palette.main.border}`,
              }}
            >
              MAIN COLOR BUTTON
            </Button>
          </Box>

          <Box>
            <Button
              sx={{ 
                color: theme.palette.sub.text,
                border: `1px solid var(--border-sub-color)`,
              }}
            >
              SUB COLOR BUTTON
            </Button>
          </Box>

          <Box>
            <Button color="primary" variant="outlined" onClick={() => setMode("light")}>light</Button>
          </Box>

          <Box>
            <Button color="primary" variant="contained" onClick={() => setMode("dark")}>dark</Button>
          </Box>
        </Grid>
        <Footer item>FOOTER</Footer>
      </Grid>
    </ThemeProvider>
  )
}

export default App;