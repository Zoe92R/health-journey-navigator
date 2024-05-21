import { ThemeProvider } from '@mui/material'

import './App.css'
import { globalTheme } from './theme/globalTheme'

function App() {

  return (
    <ThemeProvider theme={globalTheme}>
      Hello
    </ThemeProvider>
  )
}

export default App
