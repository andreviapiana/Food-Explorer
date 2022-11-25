import { useState, useEffect } from 'react'

export const useDarkMode = () => {
    const [ theme, setTheme ] = useState('darkTheme');

    const setMode = mode => {
        window.localStorage.setItem('theme', mode);
        setTheme(mode);
    }

    const toggleTheme = () => {
        theme === 'darkTheme' ? setMode('lightTheme') : setMode('darkTheme');
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme ? setTheme(localTheme) : setMode('darkTheme');
    }, []);
  
    return [ theme, toggleTheme ];
}