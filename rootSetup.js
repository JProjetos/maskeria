import { PathResolver } from "./game/src/core/utils/PathResolver.js";

const isOfficialDeploy = window.location.hostname.includes("jprojetos.github.io");
const root = isOfficialDeploy ? "/maskeria/" : "/";
$("<base>", {
    href: root
}).appendTo("head");

PathResolver.setBase($("base").attr("href"));