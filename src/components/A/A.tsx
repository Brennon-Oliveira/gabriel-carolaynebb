import { useState } from "react";
import * as Scroll from "react-scroll";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./../../context/App.context";
import "./A.css";

export default function A(props: any) {
    const [page, setPage] = useState(
        props.page === undefined || props.page === "home" ? "" : props.page
    );
    const [element, setElement] = useState(props.to || "Home");
    const [duration, setDuration] = useState(props.duration || 500);
    const [smooth, setSmooth] = useState(props.smooth || true);
    const [offset, setOffset] = useState(props.offset || -30);

    const { changeRoute } = useContext(AppContext);

    async function pre() {
        changeRoute(page);
        await scroll();
    }

    async function scroll() {
        await setTimeout(() => {}, 3000);
        Scroll.scroller.scrollTo(element, {
            duration,
            smooth,
            offset,
        });
    }

    return (
        <Link
            className={props.className ? `${props.className} A` : "A"}
            to={page}
            onClick={pre}
        >
            {props.children || "Link"}
        </Link>
    );
}
