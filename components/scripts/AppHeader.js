import { AssetResolver } from "../../game/src/core/utils/AssetResolver.js";
import { CSSFileLoader } from "../../game/src/core/utils/CSSFileLoader.js";

class AppHeader extends HTMLElement {
    static tag = "app-header";

    async connectedCallback() {

        CSSFileLoader.load(AssetResolver.from("components", `styles/${AppHeader.tag}.css`));

        let logo;
        if(this.classList.contains("dark") || this.classList.contains("transparent-dark"))
            logo = AssetResolver.from("public", "logo/dark-border.svg");
        else
            logo = AssetResolver.from("public", "logo/light-border.svg");

        this.innerHTML = `
        <header>
            <a class="home" href="${AssetResolver.resolve("index.html")}">
                <img src="${logo}" alt="Logo do Maskeria">
            </a>
            <nav>
                <a class="wiki" href="${AssetResolver.resolve("wiki.html")}">Wiki</a>
                <a class="play" href="${AssetResolver.resolve("play.html")}">Jogar</a>
            </nav>
        </header>
        `;
    }
}

customElements.define(AppHeader.tag, AppHeader);
