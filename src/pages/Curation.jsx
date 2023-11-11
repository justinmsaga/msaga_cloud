import Footer from "../layouts/Footer";

export default function Curation() {

    return (
        <div>
            <h1 className="flex justify-center">Present Curiosities</h1>
            <br />
            <br />
            <p>
                a thesis about my creative practice of <span className="bg-orange-500 p-1">curation as craft</span>(loading)
            </p>
            <br />
            <div className="flex justify-center ">
                <table className="border text-sm">
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
                sidenote: I use quotes to surround placeholder words when I can't think of the "right" word while writing...it is also an homage to Virgil Abloh<br />

                <a href="#" className="bg-[#ffef00] p-1">
                    r.i.p. to the 🐐</a>
            </p>
            <Footer
                begin="always making things"
                where="most recent prototypes"
                link="https://github.com/justinmsaga"
            />
        </div>
    )
}