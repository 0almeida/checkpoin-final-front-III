import React from 'react'
import { DataProvider } from './DataProvider'
import { ThemeProvider } from './ThemeProvider'

const GlobalContext = ({children}) => {
  return (
    <DataProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </DataProvider>
  )
}

export default GlobalContext
