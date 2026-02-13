import { AssetResolver } from "./game/src/core/utils/AssetResolver.js";

const isOfficialDeploy = window.location.hostname.includes("jprojetos.github.io");
const root = isOfficialDeploy ? "/maskeria/" : "/";
$("<base>", {
    href: root
}).appendTo("head");

AssetResolver.setBase($("base").attr("href"));