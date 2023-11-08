import { Link, NavLink, Outlet } from "react-router-dom";

export default function Header(){
    return(
        <div>
            <header>
                <h1 className="flex justify-center text-3xl">
                    <Link to="/">⛅Welcome!☁</Link>
                </h1>
            </header>
            <nav className="mt-5 w-full flex justify-between border border-x-0 border-t-0 border-b-2">
                <NavLink to="archive" className={"bg-rose-600 px-1"}> archive </NavLink>
                <NavLink to="curation" className={"bg-rose-600 px-1"}> curations </NavLink>
                <NavLink to="creation" className={"bg-rose-600 px-1"}> creations </NavLink>
            </nav>
            <main className="pt-5">
                <Outlet />
            </main>
        </div>
    )
}