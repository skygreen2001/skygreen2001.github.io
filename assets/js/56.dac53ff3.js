(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{454:function(t,e,r){"use strict";r.r(e);var l=r(56),o=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"部署说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#部署说明"}},[t._v("#")]),t._v(" 部署说明")]),t._v(" "),r("h2",{attrs:{id:"常规说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常规说明"}},[t._v("#")]),t._v(" 常规说明")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("除了按"),r("RouterLink",{attrs:{to:"/quickstart/#一-下载源码"}},[t._v("安装说明")]),t._v("在服务器上部署代码, 还可以打包所有源码文件通过ftp上传")],1),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/hfcorriez/composer-packer",target:"_blank",rel:"noopener noreferrer"}},[t._v("composer-packer"),r("OutboundLink")],1),t._v(": Packer to build tar.gz for composer project")]),t._v(" "),r("li",[t._v("composer.json需配置: "),r("code",[t._v("pagon/composer-packer")]),t._v(" (已配置)")]),t._v(" "),r("li",[t._v("composer需在本地执行以下指令:"),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("mv install/vendor .\n./vendor/bin/pack betterlife1.0.0\nmv vendor install/\n")])])])]),t._v(" "),r("li",[t._v("执行完成后会在根路径下生成压缩包: betterlife1.0.0.tar.gz")])])]),t._v(" "),r("li",[r("p",[t._v("ftp上去文件后，需要设置以下目录权限为全公开")]),t._v(" "),r("ul",[r("li",[t._v("upload")]),t._v(" "),r("li",[t._v("attachment")]),t._v(" "),r("li",[t._v("log")]),t._v(" "),r("li",[t._v("home/admin/view/default/tmp/templates_c")]),t._v(" "),r("li",[t._v("home/betterlife/view/bootstrap/tmp/templates_c")]),t._v(" "),r("li",[t._v("home/betterlife/view/default/tmp/templates_c")]),t._v(" "),r("li",[t._v("home/report/view/default/tmp/templates_c")]),t._v(" "),r("li",[t._v("home/model/view/default/tmp/templates_c")]),t._v(" "),r("li",[t._v("home/应用名称/view/default/tmp/templates_c")])])]),t._v(" "),r("li",[r("p",[t._v("修改以下配置")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("php.ini"),r("br"),t._v("\ndisplay_errors = Off")])]),t._v(" "),r("li",[r("p",[t._v("需加载功能模块:")]),t._v(" "),r("ul",[r("li",[t._v("php_curl")]),t._v(" "),r("li",[t._v("php_mbstring")]),t._v(" "),r("li",[t._v("php_mysqli")]),t._v(" "),r("li",[t._v("php_gd")]),t._v(" "),r("li",[t._v("php_zip")]),t._v(" "),r("li",[t._v("php_rar")])])]),t._v(" "),r("li",[r("p",[t._v("如果是apache，修改http.conf\n所有的Deny from all修改成  Allow from all"),r("br"),t._v("\n需加载模块")]),t._v(" "),r("ul",[r("li",[t._v("LoadModule rewrite_module modules/mod_rewrite.so")])])])])]),t._v(" "),r("li",[r("p",[t._v("运行安装须知："),r("a",{attrs:{href:"http://localhost/betterlife/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost/betterlife/install/"),r("OutboundLink")],1),t._v(" (规则: http(s)😕/域名/install/)")])])]),t._v(" "),r("h2",{attrs:{id:"推荐web服务器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#推荐web服务器"}},[t._v("#")]),t._v(" 推荐Web服务器")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/deploy/nginx.html"}},[t._v("使用 nginx")])],1)]),t._v(" "),r("h2",{attrs:{id:"做好安全工作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#做好安全工作"}},[t._v("#")]),t._v(" 做好安全工作")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/deploy/security.html"}},[t._v("安全运维")])],1)]),t._v(" "),r("h2",{attrs:{id:"本地运行服务器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#本地运行服务器"}},[t._v("#")]),t._v(" 本地运行服务器")]),t._v(" "),r("ul",[r("li",[r("p",[r("strong",[t._v("本地运行服务器[静态Html网页]")])]),t._v(" "),r("blockquote",[r("p",[t._v("https://threejs.org/docs/index.html#manual/en/introduction/How-to-run-things-locally")])]),t._v(" "),r("ul",[r("li",[r("p",[t._v("PHP server")]),t._v(" "),r("blockquote",[r("p",[t._v("php -S localhost:8000")])])]),t._v(" "),r("li",[r("p",[t._v("Python server\n//Python 2.x\npython -m SimpleHTTPServer")]),t._v(" "),r("p",[t._v("//Python 3.x\npython -m http.server")])]),t._v(" "),r("li",[r("p",[t._v("Npx in Node.js\nnpx http-server")])]),t._v(" "),r("li",[r("p",[t._v("Node.js Server")]),t._v(" "),r("blockquote",[r("p",[t._v("npm install http-server -g\nhttp-server . -p 8000")])])]),t._v(" "),r("li",[r("p",[t._v("Ruby server")]),t._v(" "),r("blockquote",[r("p",[t._v("ruby -r webrick -e \"s = WEBrick::HTTPServer.new(:Port => 8000, :DocumentRoot => Dir.pwd); trap('INT') { s.shutdown }; s.start\"")])])]),t._v(" "),r("li",[r("p",[t._v("Lighttpd")]),t._v(" "),r("blockquote",[r("p",[t._v("brew install lighttpd")])]),t._v(" "),r("ul",[r("li",[t._v("编辑配置文件:lighttpd.conf\n"),r("blockquote",[r("p",[t._v("http://redmine.lighttpd.net/projects/lighttpd/wiki/TutorialConfiguration")])])])]),t._v(" "),r("blockquote",[r("p",[t._v("lighttpd -f lighttpd.conf")])])])])])]),t._v(" "),r("h2",{attrs:{id:"性能调优"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#性能调优"}},[t._v("#")]),t._v(" 性能调优")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("性能调优框架: "),r("a",{attrs:{href:"https://github.com/davidgilbertson/know-it-all",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/davidgilbertson/know-it-all"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/24577980",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文版: 从制作世界上最快的网站中学到的十件事"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://medium.com/hackernoon/10-things-i-learned-making-the-fastest-site-in-the-world-18a0e1cdf4a7",target:"_blank",rel:"noopener noreferrer"}},[t._v("英文版: 10 things I learned making the fastest site in the world"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[t._v("Test a website's performance:  "),r("a",{attrs:{href:"https://www.webpagetest.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.webpagetest.org/"),r("OutboundLink")],1)])])])])}),[],!1,null,null,null);e.default=o.exports}}]);