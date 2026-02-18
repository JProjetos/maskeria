import { PathResolver } from "../../shared/PathResolver.js";
import { CSSFileLoader } from "../../shared/CSSFileLoader.js";

class AppHeader extends HTMLElement {
    static tag = "app-header";

    async connectedCallback() {

        CSSFileLoader.load(
            PathResolver.from("components", `styles/${AppHeader.tag}.css`)
        );

        const isDark =
            this.classList.contains("dark") ||
            this.classList.contains("transparent-dark");

        const logo = PathResolver.from(
            "public",
            isDark ? "logo/dark-border.svg" : "logo/light-border.svg"
        );

        const menuIcon = PathResolver.from("public", "icon/menu.svg");
        const closeIcon = PathResolver.from("public", "icon/close.svg")

        this.innerHTML = `
        <header>
            <a class="home" href="${PathResolver.resolve("index.html")}">
                <img src="${logo}" alt="Logo do Maskeria">
            </a>

            <nav>
                <a class="wiki" href="${PathResolver.resolve("wiki.html")}">Wiki</a>
                <a class="play" href="${PathResolver.resolve("play.html")}">Jogar</a>
            </nav>

            <button class="menu">
                <img src="${menuIcon}" alt="Menu">
            </button>
        </header>

        <aside>
            <section class="main">
                <a class="home" href="${PathResolver.resolve("index.html")}">
                    <img src="${logo}" alt="Logo do Maskeria">
                </a>
                <button class="close">
                    <img src="${closeIcon}" alt="Menu">
                </button>
            </section>

            <nav>
                <a class="wiki" href="${PathResolver.resolve("wiki.html")}">Wiki</a>
                <a class="play" href="${PathResolver.resolve("play.html")}">Jogar</a>
            </nav>
        </aside>
        `;

        $(".menu").on("click", () => this.toggleMenu());
        $(".close").on("click", () => this.toggleMenu());
    }

    toggleMenu() {
        const $aside = $("aside");
        $aside.toggleClass("active");

        const $menuButton = $(".menu");
        $menuButton.toggleClass("active");
    }
}

customElements.define(AppHeader.tag, AppHeader);
