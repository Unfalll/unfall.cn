if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,a)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const n=e=>d(e,s),f={module:{uri:s},exports:c,require:n};i[s]=Promise.all(r.map((e=>f[e]||n(e)))).then((e=>(a(...e),c)))}}define(["./workbox-ec81a2a1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/03/01/hello-world/index.html",revision:"e808b4964cfb664a60230a77702394d4"},{url:"2022/03/08/pixie日推/index.html",revision:"78a083a6d648c409f75327ab8440db74"},{url:"2022/03/10/访客地图/index.html",revision:"d13b988428467815c975dea1f376a4b0"},{url:"2022/03/11/青龙面板批量部署依赖库/index.html",revision:"91b5949da08ea5186ab52b39ade1db1b"},{url:"2022/03/11/青龙面板自动领JD京豆/index.html",revision:"514e5d834802717ba0c2e482925a713f"},{url:"2022/03/12/Joplin与坚果云搭建免费云盘/index.html",revision:"a62bedbfb7689b606d308f048af977b8"},{url:"2022/03/12/PicGo + GitHub搭建个人图床/index.html",revision:"49378b7f3d1a2bd515bcd237af2a6667"},{url:"2022/03/22/在linux上搭建QQ搜图机器人——基于go-cqhttp和cq-picsearcher-bot/index.html",revision:"1b433096ad101a5189b3603ea9782d16"},{url:"2022/04/04/ARK方舟Windows-ARK-Server-Manager开服教程/index.html",revision:"e60f54ffddd3199087341a44b82ff222"},{url:"2022/04/04/Hexo-Butterfly页脚养鱼/index.html",revision:"94c893732344b40b0b5ba5c3765f2580"},{url:"2022/04/04/Unturned未转变者Windows-SteamCMD开服教程/index.html",revision:"17502dcba501f7224f6d16b3212e8863"},{url:"2022/04/04/七日杀-7-Days-to-Die-Liunx开服教程/index.html",revision:"41812d099313c4ee6683d3816b51800d"},{url:"2022/04/04/饥荒Liunx-SteamCMD开服教程/index.html",revision:"ea73b57791d412315d7c5c3f8c74c207"},{url:"2022/04/06/必备网站大全，给你全面惊喜/index.html",revision:"f1f7950369c9b4b34f2afd7dd210bee6"},{url:"2022/05/01/Markdown文档常用写法/index.html",revision:"68948a0183d61528e37ff1e46363d9d3"},{url:"about/index.html",revision:"1444264bb415130f5428f7d2c9d76b68"},{url:"archives/2022/03/index.html",revision:"6d700117f12f12aaca5d0ec9f84ad188"},{url:"archives/2022/04/index.html",revision:"c0da0c281f69afedd3d487e8de6acc5e"},{url:"archives/2022/05/index.html",revision:"c045171808892e74f7a28486b7696972"},{url:"archives/2022/index.html",revision:"c979034d0ac29e5535aca8e8eeb706dd"},{url:"archives/2022/page/2/index.html",revision:"5cf1065db801c5143a939fcbb682566d"},{url:"archives/index.html",revision:"fcadad9814be462b7ea48188f3d783b8"},{url:"archives/page/2/index.html",revision:"f83fd3a5fea4b8bb4fd5f8d3431918a1"},{url:"categories/bot/index.html",revision:"b1dda5318025344c595b153b893775fe"},{url:"categories/bot/qqx/index.html",revision:"6064830976bad5f69eb1df7d5bd4a98e"},{url:"categories/Butterfly美化/index.html",revision:"ff22da4d9ae07cccc3261692c53c6e17"},{url:"categories/Github/index.html",revision:"ed650d0d700153b1d35572265c5c2fba"},{url:"categories/hexo/Butterfly魔改/index.html",revision:"7f4410363a28197749f19b093c4cf401"},{url:"categories/hexo/index.html",revision:"3520def6751d0fac0392778d8e458890"},{url:"categories/index.html",revision:"08eb18f510fc02f763d61511d3c33801"},{url:"categories/note/index.html",revision:"9c8e25a06b7ed64848aff4e32d793831"},{url:"categories/steam/index.html",revision:"daf21c9de2d306a15fb601bd1520cd01"},{url:"categories/steam/开服/index.html",revision:"a52f88e2322f3a649f1830c72c8afc35"},{url:"categories/推荐/index.html",revision:"c0616578b61a8db78a52793e84bf60a0"},{url:"categories/笔记/index.html",revision:"125dadb2429f0bcda38ae8e3d0e4dc3b"},{url:"categories/薅羊毛/index.html",revision:"a7819bee3605b588892090e38ba442e1"},{url:"css/index.css",revision:"6cce7d94f25686ad5c7b37982992f174"},{url:"css/mycss.css",revision:"725983714dc1b7b22049b54797912411"},{url:"css/mycss/background.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/mycss/footer.css",revision:"d43ec81c9f95452a8f3a90f10a38923e"},{url:"css/mycss/universe.css",revision:"d82134bedb5c9485cbc74fc632b46e48"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"f853a55dd0fb3e2f39e3925bfeb5bc7f"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/cat.png",revision:"5793a6cb1e54e8ee54df4f2c1f4f73c5"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"a050215e26ec67f138f9d58329d47c32"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/myjs.js",revision:"fafdd847299ee73d084aa36ced9bce97"},{url:"js/myjs/universe.js",revision:"fafdd847299ee73d084aa36ced9bce97"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"3e77d9c35d89ab3b63036281f169e9e2"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"864a3e598bd47c726a5174342ce69b67"},{url:"live2d-widget/demo/demo.html",revision:"180275f4ed193ab8a4713040b0a649c6"},{url:"live2d-widget/demo/login.html",revision:"5bcdd7f2471429e8dac7e866aab2b94b"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.html",revision:"5e61153c81680871c6b501997e4df15f"},{url:"live2d-widget/waifu-tips.js",revision:"e01c75f70a9465389471f638b1356bf8"},{url:"live2d-widget/waifu.css",revision:"bb66afd3c8edead1aa90208e549818c1"},{url:"movies/index.html",revision:"4f98677e17fc7dc2e89a0da823ef59f7"},{url:"music/index.html",revision:"06561a08abf1310eb1b3178c2319a437"},{url:"page/2/index.html",revision:"cfaa24fd137b1507710913c24e17bfb0"},{url:"tags/bot/index.html",revision:"fb7d4d674f96c6f95be86dbf0b3c7f14"},{url:"tags/Butterfly魔改/index.html",revision:"b9b972a7b5fcd3dfd719f4d148af84cb"},{url:"tags/Github/index.html",revision:"f820c8158978be492294b7801ee6334b"},{url:"tags/hexo/index.html",revision:"edc60d8497a66474c090f88b03e1c453"},{url:"tags/index.html",revision:"c0a3f70226484b365af5363de44cc661"},{url:"tags/JD/index.html",revision:"f079aaa9c556d0e0005fd77d037125a1"},{url:"tags/note/index.html",revision:"775d673c3958b193f8499be9a8962a2b"},{url:"tags/qq/index.html",revision:"c961c9d5327ba62fdcc6546895ff89da"},{url:"tags/steam/index.html",revision:"00a0063c32efc4d5666ec8e9e31e2247"},{url:"tags/开服/index.html",revision:"3017ce9cbf13b9c20046c9f8e76c4800"},{url:"tags/推荐/index.html",revision:"1cfcdfff10f2a7004e6b31d91b9cfe35"},{url:"tags/笔记/index.html",revision:"26b33fdfb4a8a39d31077364f89c395b"},{url:"tags/美化/index.html",revision:"a0bac007d91546d95e4cd514b1336502"},{url:"tags/薅羊毛/index.html",revision:"fe7641a8cd70873c335c769157c70983"},{url:"tags/青龙面板/index.html",revision:"ef1426a10696e424bf0714f5410961e9"}],{})}));
//# sourceMappingURL=service-worker.js.map
