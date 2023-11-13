import LinkText from "./LinkText";

export default function Button({text, click, show}){
    return(
        <button className="p-1" onClick={click}>
            <LinkText
                text={text}
                show={show}
            />
        </button>
    )
}