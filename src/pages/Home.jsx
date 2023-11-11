import { Link } from "react-router-dom"
import Pic from "../components/Pic"
import { useState } from "react"
import Footer from "../layouts/footer"

export default function Home() {
    const [showImg, setShowImg] = useState(false)

    const dispImg = () => setShowImg(!showImg)

    return (
        <div>
            <h1>hello! 🕺</h1>
            <p className="flex justify-center">
                my name is justin🛹<br />
                a human exploring the intersection of technology💻, music🎧 and food🥐<br />
                I do this by curating then creating "things"<br />
            </p>
            <br />
            <Link to="*" className="flex justify-end">👉this means click here👈</Link>
            <br />
            <div className="flex justify-between">
                <button onClick={dispImg} className="grid justify-items-center">
                    <Pic
                        desc={`${showImg ? "" : "👉"}me${showImg ? " " : "👈"}`}
                        link="A40GVhPg7cWzuHf7gugzc1lh70iYMWAlQ-zAfwBHWsc"
                        alt="stick figure with locs and a skateboard mouth holding the peace sign on the left hand"
                        dime={`${showImg ? "w-2/3 md:w-2/5" : "w-3/5 md:w-1/5"}`}
                        pos="center"
                    />
                </button>
                {showImg &&
                    <Pic
                        desc="my creative alter ego"
                        link="4GJuqrg_zxEnSISGc-djC40eN3li_OoZFUtv2xlLr9Y"
                        alt="stick figure with an afro and skateboard mouth holding the peace sign on the right hand"
                        dime="w-2/5 md:w-1/4"
                        pos="center"
                    />
                }
            </div>
            <Footer
                begin="currently under construction"
                where="site source code"
                link="https://github.com/justinmsaga/msaga_cloud"
            />
        </div>
    )
}
