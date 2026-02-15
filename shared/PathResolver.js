export class PathResolver {

    static detectBase() {
        return new URL("../", import.meta.url);
    }

    static base = this.detectBase();

    static setBase(root) {
        if (!root.endsWith("/")) root += "/";
        this.base = new URL(root, window.location.origin);
    }

    static resolve(path) {
        return new URL(path, this.base).href;
    }

    static paths = {
        root: " ",
        components: "components/",
        game: "game/",
        libs: "libs/",
        public: "public/",
        shared: "shared/",
        styles: "styles/",
        wiki: "wiki/",
    };

    static from(type, file) {
        if (!this.paths[type]) throw new Error(`Tipo inválido: ${type}`);
        return this.resolve(this.paths[type] + file);
    }

}
