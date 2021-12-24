import A from "../A/A";
import Container from "../Container/Container.component";
import "./Header.css";

export default function Header() {
    return (
        <header id="Header">
            <Container>
                <h1>
                    <A>Gabriel Carolaynebb</A>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <A>Home</A>
                        </li>
                        <li>
                            <A>Sobre a gente</A>
                        </li>
                        <li>
                            <A>Tursimo</A>
                        </li>
                    </ul>
                </nav>
            </Container>
        </header>
    );
}
