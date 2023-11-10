export default function Pic(props){
   return(
   <div className="grid justify-items-end">
        <p>{props.desc}</p>
        <img src={`https://arweave.net/${props.link}`} width={props.w} />
   </div> 
   )
}