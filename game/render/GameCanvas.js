export class GameCanvas {
    constructor() {
        this.$wrapper = $("#game-wrapper");
        this.canvas = document.querySelector("#game");
        this.ctx = this.canvas.getContext("2d");

        this.redimensionar();
        $(window).on("resize", () => this.redimensionar());
    }

    redimensionar() {
        this.canvas.width = this.$wrapper.innerWidth();
        this.canvas.height = this.$wrapper.innerHeight();
    }
}