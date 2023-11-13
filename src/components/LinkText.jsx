
export default function LinkText({show, text}) {
    return(
    <p>{show ? "👇" : "👉"}{text}{show ? "👇" : "👈"}</p>
    )
}