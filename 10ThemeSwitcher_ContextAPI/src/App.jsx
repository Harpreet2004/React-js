import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import { useEffect } from 'react';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  //when you dont know what kind of functionality u have to give to your 
  //provider i.e (lightTheme,darkTheme) then just define the functionality here

  //this state holds the thememode
  const [themeMode, setthemeMode] = useState();

  //lightmode theme
  const lightTheme = () => {
    setthemeMode("light")
  }

  //dark mode theme
  const darkTheme = () => {
    setthemeMode("dark")
  }

  //only change the theme when thememode gets changed
  useEffect(() => {
    let getTheme = document.querySelector("html").classList;
    getTheme.remove("light", "dark");
    getTheme.add(themeMode)
  },[themeMode])

  return (
    //gets the values from themeprovider

      <ThemeProvider value={{themeMode, lightTheme, darkTheme}}> 
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
      </ThemeProvider>

  )
}

export default App
