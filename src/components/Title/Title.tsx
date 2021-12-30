import { ReactNode } from "react";
import "./Title.css";

export default function Title({ children }: { children: ReactNode }) {
    return <h2 className="Title">{children}</h2>;
}
