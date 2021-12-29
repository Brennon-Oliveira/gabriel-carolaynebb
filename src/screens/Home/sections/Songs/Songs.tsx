import Container from "./../../../../components/Container/Container.component";
import { useState } from "react";
import "./Songs.css";
import Song from "../../../../components/Song/Song";
const IntencaoMariliaMendonca = require("../../../../Assets/musics/IntencaoMariliaMendonca.mp3");

export default function Songs() {
    // const [IntencaoMariliaMendoca, setIntencaoMariliaMendoca] = useState(
    //     new Audio("../../../../Assets/musics/IntencaoMariliaMendonca.mp3")
    // );

    return (
        <section id="Songs">
            <Container>
                <h2>Músicas</h2>
                <div className="songs">
                    <Song song={IntencaoMariliaMendonca} />
                </div>
            </Container>
        </section>
    );
}
