import { useState } from "react";
import Video from "../components/Video";
import Button from "../components/Button";
const vids = [
    {
        title: "welcome",
        link: "GtRAbq8kKz_aO6PEqvngsMnBW_l3X4kN0nOAK5y8Y4M",
        description: "my first algorithmic composition",
        display: false
    },
    {
        title: "such is life / life=true",
        link: "RTRXhvNqhvm4jRf_Q6V1wtorg9nYs9c4zW_euxL_kRk",
        description: "a problem solving algothm",
        display: false
    },
    {
        title: "let there be light",
        link: "6DUxyflSM_8UEMGslYRLCJaQQXCuNks_iIOH1EOJ1Fk",
        description: "a short story",
        display: false
    }

]

export default function Archive() {
    const [videos, setVideos] = useState(vids)
    const [showVid, setShowVid] = useState(false)
    const [vidSrc, setVidSrc] = useState("")
    const [vidDesc, setVidDesc] = useState("")

    const updateDisp = (title) => {
        setVideos(preVids => {
            return preVids.map(vid => {
                if (vid.title === title) {
                    return { ...vid, display: !vid.display }
                }
                else {
                    return { ...vid, display: false }
                }
            })
        })
    }

    const updateVid = (newSrc, newDesc, title) => {
        setVidDesc(prevVidDesc => {
            if (prevVidDesc != newDesc) {
                setShowVid(true)
                setVidSrc(newSrc)
                updateDisp(title)
                return newDesc
            } else {
                setShowVid(false)
                setVidSrc("")
                updateDisp("")
                return ""
            }
        })
    }

    const vidComps = videos.map(item => {
        return <Button
            id={item.title}
            text={item.title}
            click={() => updateVid(item.link, item.description, item.title)}
            show={item.display}
        />
    })

    return (
        <div>
            <h1 className="flex justify-center">Past Works</h1>
            <div className="flex justify-evenly pb-3">
                <div className="grid justify-items-center">
                    <h2 className="text-5xl p-3">🎧</h2>
                    {vidComps[0]}
                </div>
                <div className="grid justify-items-center">
                    <h2 className="text-5xl pt-3 pb-9">📺</h2>
                    <div className="grid justify-items-center">
                        {vidComps[1]}
                        {vidComps[2]}
                    </div>
                </div>
            </div>

            {showVid &&
                <Video
                    link={vidSrc}
                    desc={vidDesc}
                />
            }
        </div>
    )
}