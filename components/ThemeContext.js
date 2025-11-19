import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

export function useTheme(){
  return useContext(ThemeContext)
}

export function ThemeProvider({children}){
  const [theme, setTheme] = useState('light')

  useEffect(()=>{
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    if(stored) setTheme(stored)
  },[])

  useEffect(()=>{
    if(typeof document !== 'undefined'){
      if(theme === 'dark') document.documentElement.classList.add('dark')
      else document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', theme)
    }
  },[theme])

  function toggle(){ setTheme(t => t === 'dark' ? 'light' : 'dark') }

  return (
    <ThemeContext.Provider value={{theme, setTheme, toggle}}>
      {children}
    </ThemeContext.Provider>
  )
}
