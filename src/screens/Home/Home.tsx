import Header from "../../components/Header/Header.component";
import Banner from "./sections/Banner/Banner";
import Songs from "./sections/Songs/Songs";
import Quiz from "./sections/Quiz/Quiz";

export default function Home() {
    return (
        <>
            <Header />
            <Banner />
            <Songs />
            <Quiz />
        </>
    );
}
