import { useState } from "react";
import Video from "../components/Video";
import Button from "../components/Button";

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
            <div className="flex justify-evenly pb-3">
                <div className="grid justify-items-center">
                    <h2 className="text-5xl p-3">🎧</h2>
                    <Button 
                        text="👉welcome👈"
                        click={() => updateVid("GtRAbq8kKz_aO6PEqvngsMnBW_l3X4kN0nOAK5y8Y4M")}
                   />
                </div>
                <div className="grid justify-items-center">
                    <h2 className="text-5xl pt-3 pb-9">📺</h2>
                    <div className="grid justify-items-center">
                        <Button 
                            text="👉such is life / life=true👈" 
                            click={() => updateVid("RTRXhvNqhvm4jRf_Q6V1wtorg9nYs9c4zW_euxL_kRk")}
                        />
                        <Button 
                            click={() => updateVid("6DUxyflSM_8UEMGslYRLCJaQQXCuNks_iIOH1EOJ1Fk")}
                            text="👉let there be light👈"
                        />
                    </div>
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