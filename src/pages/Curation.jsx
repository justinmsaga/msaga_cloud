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
                <table className="text-sm">
                    <thead >
                        <tr>
                            <th>curation</th>
                            <th>creation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>archive of past work</td>
                            <td>how to sk8 and not die</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>home bakers music club</td>
                            <td>baked chronicles</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>field recordings</td>
                            <td>echo chamber</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br />
            <p className="flex justify-end">
                sidenote: I use quotes to surround placeholder words when I can't think of the "right" word while writing...it is also an homage to Virgil Abloh<br />

                <span className="bg-[#ffef00] p-1">
                    r.i.p. to the 🐐
                </span>
            </p>
            <Footer
                begin="always making things"
                where="most recent prototypes"
                link="https://github.com/justinmsaga"
            />
        </div>
    )
}