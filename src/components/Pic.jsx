export default function Pic({link, desc,dime, pos, alt}){
   return(
   <div className={`grid justify-items-${pos}`}>
        <img src={`https://arweave.net/${link}`} className={dime} alt={alt}/>
        <p>{desc}</p>
   </div> 
   )
}