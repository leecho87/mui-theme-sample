import React from 'react'
import { useTheme } from '@mui/material'

function App() {
  const theme = useTheme();

  return (
    <div style={{ color: theme.status.danger }}>App</div>
  )
}

export default App