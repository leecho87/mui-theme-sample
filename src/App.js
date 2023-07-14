import React, { useState, useMemo, useEffect } from 'react';
import styled from '@emotion/styled';
import { useTheme, Typography, Box, Button } from '@mui/material';

import "./App.scss";
import createTheme from './theme';


// const TestComponent = styled.div`
//   position:relative;
//   color:${props => props.theme.palette.text.main};
//   ${props => props.theme.breakpoints.down("md")} {
//     border:1px solid #666;
//   }
// `

// const Header = styled.div`
//    background:${props => props.theme.header.background};
//    color:${props => props.theme.header.color};
// `;


function App({ changeTheme }) {
  const theme = useTheme();

  // const [mode, setMode] = useState(localStorage.getItem("themeMode") || 'light')

  // const theme = useMemo(() => {
  //   console.log('theme', createTheme(mode))
  //   return createTheme(mode)
  // }, [mode]);

  // const changeTheme = (value) => {
  //   localStorage.setItem("themeMode", value);
  //   setMode(value);
  // }

  return (
    <Box className='box'>
      {/* <Header>HEADER</Header>
      <Box className="footer">FOOTER</Box>

      <Typography
        component={"h1"}
        className='title'
        sx={{
          pb: theme.spacing(3)
        }}
      >
        제목
      </Typography>

      <TestComponent>TestComponent</TestComponent>

      <hr />

      <Button sx={{ 
        color: theme.palette.main.text,
        border: `1px solid ${theme.palette.main.border}`,
      }}>
        MAIN COLOR BUTTON
      </Button>
      <Button sx={{ 
        color: theme.palette.sub.text,
        border: `1px solid var(--border-sub-color)`,
      }}>SUB COLOR BUTTON</Button> */}


      <Button color="primary" variant="outlined" onClick={() => changeTheme("light")}>라이트</Button>

      <Button color="primary" variant="contained" onClick={() => changeTheme("dark")}>다크</Button>

    </Box>
  )
}

export default App