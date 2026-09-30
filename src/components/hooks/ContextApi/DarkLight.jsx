import { use, createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children})=> {
    const [theme, setTheme] = useState('dark');
    const handleToggleMode = ()=> {
        return setTheme((prevtheme)=> (prevtheme === "dark" ? "light" : "dark" ));
    };
    return(
        <ThemeContext.Provider value={{theme, handleToggleMode}}>
            {children}
        </ThemeContext.Provider>
    );
};

//created component
export const DarkLight = ()=> {
    const {theme, handleToggleMode} = use(ThemeContext);
    return(
        <div
         className={` p-4 h-lvh flex flex-col justify-center items-center  ${
            theme === "dark" ? "bg-gray-700" : "bg-white"
      } `}
        >
            <h1
                className={`my-4 text-xl  ${
                theme === "light" ? "text-gray-800" : "text-white"
        }`}
            >wellcome Change to mode</h1>
            <p>hello my self sandeep</p>
            <button 
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4"
            onClick={handleToggleMode}>{theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}</button>
        </div>
    );
};