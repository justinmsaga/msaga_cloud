import LinkText from "./LinkText";

export default function Button({text, click, show}){
    return(
        <button onClick={click}>
            <LinkText
                text={text}
                show={show}
            />
        </button>
    )
}