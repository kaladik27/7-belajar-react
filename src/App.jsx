import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'

const ThemeProvider = createContext("light")
function RunReRender() {
    useEffect(() => {
        console.log("run re reder", Date.now());
    }, [])
    const theme = useContext(ThemeProvider)

    return (<>
        <div>tema : {theme}</div>
        <MainLayout />
    </>

    )
}
function MainLayout() {
    const theme = useContext(ThemeProvider)
    return <div>ini main layout : {theme}</div>
}

function App() {
    const [theme, setTheme] = useState("light");
    const handleSubmit = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    return (
        <>
            <MainLayout />
            <ThemeProvider.Provider value={theme}>
                <div className='h-screen grid place-content-center'>
                    <button className='btn btn-primary' onClick={handleSubmit}>
                        Klik Me
                    </button>
                    <RunReRender />
                </div>
            </ThemeProvider.Provider>
        </>
    )

}

// function App() {
//     const [name, setName] = useState("")

//     //1. empty dependency(jalan ketika pertama kali render)
//     useEffect(() => {
//         console.log(name, "ini dari dalam use effect");
//     }, []);
//     // 2. with dependency
//     useEffect(() => {
//         console.log("ini dari dalam use effect with dependency");
//     }, [name]);
//     //3.
//     useEffect(() => {
//         console.log(name, "jalan setiap kali apapun state berubah");
//     });





//     return (
//         <>
//             <div className='grid place-content-center h-screen'>
//                 {name == "mahardika" ? <p>Hallo ndan</p> : <p>my name is: {name} </p>}

//                 <fieldset className="fieldset">
//                     <legend className="fieldset-legend">What is your name?</legend>
//                     <input
//                         type="text"
//                         className="input"
//                         onChange={(e) => {
//                             setName(e.target.value)
//                         }}
//                         placeholder="Type here" />


//                     <p className="fieldset-label">Optional</p>
//                 </fieldset>
//             </div>

//         </>


//     )
// }

export default App;





