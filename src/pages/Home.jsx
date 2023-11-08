import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div>
            <h1>hello! 🕺</h1>
            <p className="flex justify-center">
                my name is justin🛹<br />
                a human exploring the intersection of technology💻, music🎧 and food🥐<br/>
                I do this by curating then creating "things"<br />
            </p>
            <br/>
            <Link to="*">👉this means click here👈</Link>
            <br />
            <a href="https://github.com/justinmsaga/msaga_cloud" className="absolute bottom-0 w-full"><h2 className="flex justify-end bg-red-700 p-1 rounded-full">site is currently under construction...click this for site source code...we believe in open source here</h2></a>
        </div>
    )
}
