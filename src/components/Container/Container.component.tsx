import { Element } from "react-scroll";
import { useState } from "react";
import { ReactNode } from "react";
import "./Container.css";

export default function Container({
    children,
    name,
    min,
}: {
    children: ReactNode;
    name?: string;
    min?: boolean;
}) {
    const [_name, setName] = useState(name || "home");

    return (
        <Element className={min ? "container-min" : "container"} name={_name}>
            {children}
        </Element>
    );
}
