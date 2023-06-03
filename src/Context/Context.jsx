import {createContext, useContext, useState, useEffect} from "react";

const AppContext = createContext();

const getinitialThemeMode = () => {
  const preferedMode = window.matchMedia('(prefers-color-scheme:dark)').matches
  return preferedMode;
};

export const AppProvider = ({children}) => {
  const [searchTerm,setSearchTerm] = useState('cat')
  const [isDarkTheme, setIsDarkTheme] = useState(getinitialThemeMode());

  const toggleDarkTheme = () =>{
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme)

  }

  useEffect(() => {
    document.body.classList.toggle('dark-theme',isDarkTheme)
  },[isDarkTheme])

  return (
    <AppContext.Provider value={{isDarkTheme,toggleDarkTheme,searchTerm,setSearchTerm}}>
      {children}
    </AppContext.Provider>
  );
};

export const GlobalContext = () => useContext(AppContext);
