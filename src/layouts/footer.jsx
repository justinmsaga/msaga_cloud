export default function Footer({begin, where, link}){
    return(
        <div className="absolute bottom-0 w-full">   
            <a href={link} >
                <h2 className="p-1 flex justify-end bg-red-700 rounded-lg">
                    {begin}...click here for {where}...we believe in open source here
                </h2>
            </a>
        </div>
    )
}