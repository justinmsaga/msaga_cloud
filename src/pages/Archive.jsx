import { useState } from "react";
import Video from "../components/Video";

export default function Archive() {
    const [showVid, setShowVid]= useState(false) 
    const [vidSrc, setVidSrc] = useState("")

    const updateVid = (newSrc) =>{
        setShowVid(true)
        setVidSrc(newSrc)
    }


    return (
        <div>
            <h1 className="flex justify-center">Past Works</h1>
            <div className="flex justify-evenly">
                <div className="grid justify-items-center">
                    <h2 className="text-5xl p-3">🎧</h2>
                    <button onClick={()=> updateVid("GtRAbq8kKz_aO6PEqvngsMnBW_l3X4kN0nOAK5y8Y4M")}>👉welcome👈</button>
                </div>
                <div className="grid justify-items-center">
                    <h2 className="text-5xl pt-3 pb-9">📺</h2>
                    <ul className="grid justify-items-center">
                        <li><button onClick={() => updateVid("RTRXhvNqhvm4jRf_Q6V1wtorg9nYs9c4zW_euxL_kRk")}>👉 such is life/life=true 👈</button></li>
                        <li><button onClick={() => updateVid("6DUxyflSM_8UEMGslYRLCJaQQXCuNks_iIOH1EOJ1Fk")}>👉 let there be light 👈</button></li>
                    </ul>
                </div>
            </div>
            
            {showVid &&
            <Video 
                link={vidSrc}
            />
}
        </div>
    )
}