(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{428:function(t,e,s){"use strict";s.r(e);var a=s(56),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"执行sql查询语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行sql查询语句"}},[t._v("#")]),t._v(" 执行SQL查询语句")]),t._v(" "),s("h2",{attrs:{id:"一步上手"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一步上手"}},[t._v("#")]),t._v(" 一步上手")]),t._v(" "),s("p",[t._v("只需要一步,就可以使用这个框架带来的好处了")]),t._v(" "),s("ul",[s("li",[t._v("引用init.php文件(根路径下)\n"),s("ul",[s("li",[t._v('示例: 如果在根路径下引用: require_once("init.php");')])])])]),t._v(" "),s("h2",{attrs:{id:"开始使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始使用"}},[t._v("#")]),t._v(" 开始使用")]),t._v(" "),s("p",[t._v("现在可以使用这个框架了,如果习惯了sql的写法，可以通过直接使用函数: "),s("strong",[t._v("sqlExecute")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("示例如下:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("查询所有的博客记录:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('$sqlstr = "select * from bb_core_blog";\nsqlExecute($sqlstr);\n')])])])])])]),t._v(" "),s("li",[s("p",[t._v("进一步了解: "),s("strong",[t._v("sqlExecute")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("定位")]),t._v(" "),s("ul",[s("li",[t._v("路径   : core/include/")]),t._v(" "),s("li",[t._v("文件名称: common.php")]),t._v(" "),s("li",[t._v("github路径: https://github.com/skygreen2001/betterlife/blob/master/core/include/common.php")])])]),t._v(" "),s("li",[s("p",[t._v("定义如下")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/**\n  * 直接执行SQL语句\n  * @param mixed $sql SQL查询语句\n  * @param string|class|bool $object 需要生成注入的对象实体|类名称\n  * @return array 默认返回数组,如果$object指定数据对象，返回指定数据对象列表，$object=true，返回stdClass列表。\n  */\nfunction sqlExecute($sqlstring,$object=null)\n")])])])])])])]),t._v(" "),s("h2",{attrs:{id:"完整的示例代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完整的示例代码"}},[t._v("#")]),t._v(" 完整的示例代码")]),t._v(" "),s("p",[t._v("查询所有的博客数据[只需要三句]")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('<?php\n\nrequire_once("init.php");\n$sqlstr = "select * from bb_core_blog";\nsqlExecute($sqlstr);\n\n')])])]),s("h2",{attrs:{id:"查询多数据库源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询多数据库源"}},[t._v("#")]),t._v(" 查询多数据库源")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("场景1: 多用于访问多数据库，访问不同数据库表")])]),t._v(" "),s("li",[s("p",[t._v("场景2: 进行数据的迁移，如需要将有多表关系的数据从正式服迁移到测试服，测试排查问题")])]),t._v(" "),s("li",[s("p",[t._v("代码示例如下:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 多数据库源\n// 默认数据库源: Gc::$database_config\n$sql  = \"select * from bb_core_blog;\";\n$blog = sqlExecute($sql);\nprint_pre($blog, true);\n// 修改数据库源后，之后调用框架数据库函数都使用新的数据源\nGc::$database_config = array(\n    'host' => '127.0.0.1',\n    'port' => '3306',\n    'database' => 'bb',\n    'username' => 'root',\n    'password' => ''\n);\nConfigDb::initGc();\nManagerDb::newInstance()->resetDao();\n$new_sql = \"select * from bb_user_user;\";\n$user    = sqlExecute($new_sql);\nprint_pre($user, true);\n")])])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);