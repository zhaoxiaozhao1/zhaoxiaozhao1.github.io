(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{283:function(t,e,n){},296:function(t,e,n){"use strict";n(283)},308:function(t,e,n){"use strict";n.r(e);var s={name:"Footer",data:()=>({footerList:[],government:{},currentYear:""}),props:["sidebarItems"],mounted(){this.footerList=this.$site.themeConfig.footer.friendLinks,this.government=this.$site.themeConfig.footer.copyright,this.currentYear=(new Date).getFullYear()}},r=(n(296),n(4)),i=Object(r.a)(s,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"footer"},[t._l(t.footerList,(function(n,s){return e("div",{key:s,staticClass:"footer-item"},[e("a",{attrs:{href:n.href,target:"_blank",rel:"noopener noreferrer"}},[n.icon?e("img",{staticClass:"item-icon",attrs:{src:n.icon,alt:"icon"}}):t._e(),t._v(" "),e("span",{staticClass:"item-text"},[t._v(t._s(n.label))])])])})),t._v(" "),e("div",{staticClass:"copy-right"},[e("span",{staticClass:"name"},[t._v(t._s(t.currentYear+" web导航   |    ")+" ")]),t._v(" "),e("span",[t._v("\n          "+t._s(t.government.name)+"\n        ")])])],2)}),[],!1,null,null,null);e.default=i.exports}}]);