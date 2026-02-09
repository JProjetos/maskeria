class AppHeader extends HTMLElement {
    static tag = "app-header";

    async connectedCallback() {

        // Define root dependendo do ambiente
        const isGithubPages = window.location.hostname === "jprojetos.github.io";
        const root = isGithubPages
            ? "https://jprojetos.github.io/maskeria/"
            : "/";

        if (!document.querySelector(`link[data-component="${AppHeader.tag}"]`)) {
            let link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = `${root}components/styles/${AppHeader.tag}.css`;
            link.dataset.component = AppHeader.tag;
            document.head.appendChild(link);
        }

        this.innerHTML = `
        <header>
            <a class="home" href="${root}index.html">
                <img src="" alt="Logo do Maskeria">
            </a>
            <nav>
                <a class="wiki" href="${root}wiki.html">Wiki</a>
                <a class="play" href="${root}game/play.html">Jogar</a>
            </nav>
        </header>
        `;
    }
}

customElements.define(AppHeader.tag, AppHeader);
