export default function Home() {
    return (
        <div>
            <h1>hello! 👋</h1>
            <p>
                my name is justin🛹<br />
                a human exploring the intersection of technology💻, music🎧 and food🥐<br/>
                i do this by curating then creating "things"<br />
            </p>
            <br />
            <p>
                a thesis about my creative practice of <a href="#" className="bg-orange-500 p-1">curation as craft</a>
            </p>
            <br />
            <div className="flex justify-center ">
                <table className="border rounded-sm text-sm">
                    <tr>
                        <th>curation</th>
                        <th>creation</th>
                    </tr>
                    <tr>
                        <td>archive of past work</td>
                        <td>how to sk8 and not die</td>
                    </tr>
                    <tr>
                        <td>home bakers music club</td>
                        <td>baked chronicles</td>
                    </tr>
                    <tr>
                        <td>field recordings</td>
                        <td>echo chamber</td>
                    </tr>
                </table>
            </div>
            <br />
            <p className="flex justify-end">
                sidenote: i use quotes to surround placeholder words when i can't think of the "right" word while writing...it is also an homage to Virgil Abloh...
                r.i.p. to the 🐐
            </p>
        </div>
    )
}
