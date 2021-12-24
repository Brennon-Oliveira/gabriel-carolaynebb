import Container from "../../../../components/Container/Container.component";
import "./Banner.css";

export default function Banner() {
    return (
        <section id="Banner">
            <div className="overlay"></div>
            <Container>
                <h2>
                    Depois de fazer algo sobre você, agora, fiz algo sobre a
                    gente.
                    <br />
                    Espero que goste!
                </h2>
            </Container>
        </section>
    );
}
