import {SidebarConfig4Multiple} from "vuepress/config";

import goodieSideBar from "./sidebars/goodieSideBar";
import fragmentSideBar from "./sidebars/fragmentSideBar";
// @ts-ignore
export default {
    "/干货分享/": goodieSideBar,
    "/知识碎片/": fragmentSideBar,
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;
