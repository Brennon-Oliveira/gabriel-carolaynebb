import Container from "./../../../../components/Container/Container.component";
import { useState } from "react";
import "./Songs.css";

export default function Songs() {
    const [IntencaoMariliaMendoca, setIntencaoMariliaMendoca] = useState(
        new Audio("../../../../Assets/musics/IntencaoMariliaMendonca.mp3")
    );

    return (
        <section id="Songs">
            <Container>
                <h2>Músicas</h2>
                <div className="songs">
                    <audio controls loop>
                        <source
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/new_year_dubstep_minimix.ogg"
                            type="audio/ogg"
                        />
                        Your browser dose not Support the audio Tag
                    </audio>
                </div>
            </Container>
        </section>
    );
}
