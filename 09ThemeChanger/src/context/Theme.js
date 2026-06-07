import { createContext,useContext } from "react";

export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
}) //andar hum variables and methods dono de sakte hain

export const ThemeProvider= ThemeContext.Provider  //yaha pe hamne ek hi file me provider bhi bana liya

export default function useTheme(){  //custom hook
    return useContext(ThemeContext)
}

//files me sirf useTheme import karenge and useContext wagaiga sari properties apne aap hi accessible ho jayengi..jo ThemeContext me hainss