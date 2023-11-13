export default function Video({link, desc}){
    return(
        <div className="grid justify-items-center">
            <p>{desc}</p>
            <video src={`https://arweave.net/${link}`} controls height={500} width={500} />
        </div>
    )
}