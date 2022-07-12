import { Routing } from "./Routing";

export function MainContent() {
    const date = new Date();
    return (
        <div className="main--content">

            <p>FOR EACH PAGE  </p>

            <Routing />

        </div>
    )
}