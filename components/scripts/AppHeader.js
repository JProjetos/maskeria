class AppHeader extends HTMLElement {
    static tag = "app-header";

    async connectedCallback() {

        if (!document.querySelector(
            `link[data-component="${AppHeader.tag}"]`
        )) {

            let link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = `/components/styles/${AppHeader.tag}.css`;
            link.dataset.component = AppHeader.tag;

            document.head.appendChild(link);
        }

        this.innerHTML = `
        <header>
            <a class="home" href="/index.html">
                <img src="" alt="Logo do Maskeria">
            </a>
            <nav>
                <a class="wiki" href="/wiki.html">Wiki</a>
                <a class="play" href="/play.html">Jogar</a>
            </nav>
        </header>
        `;
    }
}

customElements.define(AppHeader.tag, AppHeader);
