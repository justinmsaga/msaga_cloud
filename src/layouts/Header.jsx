import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const links = [
    {
        title: "archive",
        text:"📜Archive📒"
    },
    {
        title: "curation",
        text:"📡Curations🔭"
    },
    {
        title: "creation",
        text:"🚀Creations🛸"
    }
]

export default function Header(){
    const [headText, setHeadText] = useState("⛅Welcome!☁")

    const updateText = (text)=>{
        setHeadText(text)
    }

    return(
        <div>
            <header>
                <h1 className="flex justify-center text-3xl p-1">
                    <Link to="/" onClick={() => updateText("⛅Welcome!☁")}>{headText}</Link>
                </h1>
            </header>
            <nav className="mt-5 w-full flex justify-between border border-x-0 border-t-0 border-b-2">
                {links.map(({title, text}) => (
                    <NavLink to={title} className={"bg-rose-600 px-2 border border-0 rounded-lg"} onClick={()=>updateText(text)}> {title} </NavLink>
                ))}
            </nav>
            <main className="pt-5">
                <Outlet />
            </main>
        </div>
    )
}