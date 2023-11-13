import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Header(){
    const [headText, setHeadText] = useState("⛅Welcome!☁")

    const updateText = (text)=>{
        setHeadText(text)
    }

    return(
        <div>
            <header>
                <h1 className="flex justify-center text-3xl">
                    <Link to="/" onClick={() => updateText("⛅Welcome!☁")}>{headText}</Link>
                </h1>
            </header>
            <nav className="mt-5 w-full flex justify-between border border-x-0 border-t-0 border-b-2">
                <NavLink to="archive" className={"bg-rose-600 px-1 border border-0 rounded-full"} onClick={()=>updateText("📜Archive📒")}> archive </NavLink>
                <NavLink to="curation" className={"bg-rose-600 px-1 border border-0 rounded-full"} onClick={() => updateText("📡Curations🔭")}> curations </NavLink>
                <NavLink to="creation" className={"bg-rose-600 px-1 border border-0 rounded-full"} onClick={() => updateText("🚀Creations🛸")}> creations </NavLink>
            </nav>
            <main className="pt-5">
                <Outlet />
            </main>
        </div>
    )
}