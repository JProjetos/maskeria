import { PathResolver } from "../../game/src/core/utils/PathResolver.js";
import { CSSFileLoader } from "../../game/src/core/utils/CSSFileLoader.js";

class AppHeader extends HTMLElement {
    static tag = "app-header";

    async connectedCallback() {

        CSSFileLoader.load(PathResolver.from("components", `styles/${AppHeader.tag}.css`));

        let logo;
        if(this.classList.contains("dark") || this.classList.contains("transparent-dark"))
            logo = PathResolver.from("public", "logo/dark-border.svg");
        else
            logo = PathResolver.from("public", "logo/light-border.svg");

        this.innerHTML = `
        <header>
            <a class="home" href="${PathResolver.resolve("index.html")}">
                <img src="${logo}" alt="Logo do Maskeria">
            </a>
            <nav>
                <a class="wiki" href="${PathResolver.resolve("wiki.html")}">Wiki</a>
                <a class="play" href="${PathResolver.resolve("play.html")}">Jogar</a>
            </nav>
        </header>
        `;
    }
}

customElements.define(AppHeader.tag, AppHeader);
