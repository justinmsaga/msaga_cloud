export default function Video({link}){
    return(
        <div className="flex justify-center">
            <video src={`https://arweave.net/${link}`} controls height={500} width={500} />
            
        </div>
    )
}