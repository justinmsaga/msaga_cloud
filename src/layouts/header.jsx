import { Outlet } from "react-router-dom";

export default function Header(){
    return(
        <div>
            <header>
            <h1 className="flex justify-center text-3xl">⛅Welcome!☁</h1>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}