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
            <Link to="*" className="flex justify-end">👉this means click here👈</Link>
            <br />
            <div className="flex justify-around">
                <div className="grid justify-items-center">
                    <p>me</p>
                    <img src="https://arweave.net/A40GVhPg7cWzuHf7gugzc1lh70iYMWAlQ-zAfwBHWsc" 
                    alt="stick figure with locs and a skateboard mouth shoing the peace sign on the left hand" 
                    width="52%" />
                </div>
                <div className="grid justify-items-center">
                    <p>my creative alter ego</p>
                    <img src="https://arweave.net/4GJuqrg_zxEnSISGc-djC40eN3li_OoZFUtv2xlLr9Y" 
                    alt="stick figure with an afro and skateboard mouth showing the peace sign on the right hand" 
                    width="30%" />
                </div>
            </div>
            <a href="https://github.com/justinmsaga/msaga_cloud" className="absolute bottom-0 w-full">
                <h2 className="flex justify-end bg-red-700 p-1 rounded-lg">
                    site is currently under construction...click this for site source code...we believe in open source here
                </h2>
            </a>
        </div>
    )
}
