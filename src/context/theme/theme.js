import react,{useState} from "react";
export const Themecontext = react.createContext();
const ThemecontextProvider =(props)=>{
    const [Lightteme,setLightteme]=useState(false);
    const [Light]=useState({
        bg:'#191610',
        syntax:'#fff'
    })
    const [Dark]=useState({
        bg:'#fff',
        syntax:'#000'
    })
    const ChangeTheme =()=>{
        setLightteme(!Lightteme)
    }
    return(
        <Themecontext.Provider value={{Lightteme,Light,Dark,ChangeTheme}}>
            {props.children}
        </Themecontext.Provider>
    )
}
export default ThemecontextProvider;