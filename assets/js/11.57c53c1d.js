(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{408:function(a,s,e){"use strict";e.r(s);var t=e(56),l=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[a._v("#")]),a._v(" 配置文件")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("路径    :tools/tools/autocode/")])]),a._v(" "),e("li",[e("p",[a._v("文件名称：autocode.config.xml")])]),a._v(" "),e("li",[e("p",[a._v("一键生成所有代码地址: http://127.0.0.1/betterlife/tools/tools/autocode/db_onekey.php")])])]),a._v(" "),e("h2",{attrs:{id:"初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[a._v("#")]),a._v(" 初始化")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("新创建的项目需将该文件删除，框架会自动生成新的配置文件，")])]),a._v(" "),e("li",[e("p",[a._v("自动生成表五种关系的配置,条件查询的配置、关系主键显示属性的配置。")])]),a._v(" "),e("li",[e("p",[a._v("其后可通过代码生成的策略实现配置文件的管理。")])]),a._v(" "),e("li",[e("p",[a._v("初始化步骤如下")]),a._v(" "),e("ul",[e("li",[a._v("修改配置文件: core/config/config/ConfigAutoCode.php\n"),e("ul",[e("li",[a._v("修改配置: ALWAYS_AUTOCODE_XML_NEW = true")])])]),a._v(" "),e("li",[a._v("一键生成所有代码地址: http://127.0.0.1/[项目名称]/tools/tools/autocode/db_onekey.php\n"),e("ul",[e("li",[a._v("会生成配置文件: tools/tools/autocode/autocode.config.xml")])])]),a._v(" "),e("li",[a._v("新建项目需将生成代码里的实体类复制到项目中 home/[项目名称]/src/domain 对应目录下")]),a._v(" "),e("li",[a._v("再次运行一键生成所有代码地址: http://127.0.0.1/[项目名称]/tools/tools/autocode/db_onekey.php\n"),e("ul",[e("li",[a._v("会再次覆盖配置文件: tools/tools/autocode/autocode.config.xml")]),a._v(" "),e("li",[a._v("说明: 实体类关于数据对象之间关系配置是需要将实体类放置到项目中，生成代码引擎才能够认知到实体类之间的关系并将其生成到配置文件中的。")])])]),a._v(" "),e("li",[a._v("再次将生成代码里的实体类覆盖复制到项目中 home/[项目名称]/src/domain 对应目录下")]),a._v(" "),e("li",[a._v("还原配置。修改配置文件: core/config/config/ConfigAutoCode.php\n"),e("ul",[e("li",[a._v("修改配置: ALWAYS_AUTOCODE_XML_NEW = false")])])])])])]),a._v(" "),e("h2",{attrs:{id:"自动生成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动生成"}},[a._v("#")]),a._v(" 自动生成")]),a._v(" "),e("p",[a._v("生成"),e("RouterLink",{attrs:{to:"/core/dataobject/dataobjectspec.html"}},[a._v("数据对象规格说明")]),a._v("所需的配置，无需手动一个个配置；如不需要该配置，只需手动删除即可。")],1),a._v(" "),e("h2",{attrs:{id:"数据对象类配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据对象类配置"}},[a._v("#")]),a._v(" 数据对象类配置")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("配置文件的元节点为class，对每一个数据对象进行查询条件、表关系主键显示配置、数据对象之间关系配置")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<classes>\n    <class name="Order">\n</classes>\n')])])]),e("ul",[e("li",[a._v("name :数据对象名称")])])])]),a._v(" "),e("h2",{attrs:{id:"查询条件配置-允许配置关系主键查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询条件配置-允许配置关系主键查询"}},[a._v("#")]),a._v(" 查询条件配置[允许配置关系主键查询]")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("配置文件的元节点为conditions")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<conditions>\n    <condition>name</condition>\n    <condition relation_class="Member" show_name="username">member_id</condition>\n</conditions>\n')])])]),e("ul",[e("li",[a._v("relation_class: 关系主键对应的表数据对象")]),a._v(" "),e("li",[a._v("show_name     : 对应的表数据对象显示列")]),a._v(" "),e("li",[a._v("值             : 在当前数据对象表中存在的关系主键名称")])])])]),a._v(" "),e("h2",{attrs:{id:"表关系主键显示配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表关系主键显示配置"}},[a._v("#")]),a._v(" 表关系主键显示配置")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("配置文件的元节点为relationShows")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<relationShows>\n   <show local_key="product_id" relation_class="Product">name</show>\n</relationShows>\n')])])]),e("ul",[e("li",[a._v("relation_class : 关系主键对应的表数据对象")]),a._v(" "),e("li",[a._v("local_key      : 在当前数据对象表中存在的关系主键名称")]),a._v(" "),e("li",[a._v("值             : 对应的表数据对象显示列")])])])]),a._v(" "),e("h2",{attrs:{id:"数据对象之间关系配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据对象之间关系配置"}},[a._v("#")]),a._v(" 数据对象之间关系配置")]),a._v(" "),e("h3",{attrs:{id:"数据对象之间关系类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据对象之间关系类型"}},[a._v("#")]),a._v(" 数据对象之间关系类型")]),a._v(" "),e("ul",[e("li",[a._v("has_one【一对一】")]),a._v(" "),e("li",[a._v("belong_has_one【从属一对一】")]),a._v(" "),e("li",[a._v("has_many【一对多】")]),a._v(" "),e("li",[a._v("many_many【多对多】")]),a._v(" "),e("li",[a._v("belongs_many_many【从属多对多】")])]),a._v(" "),e("h3",{attrs:{id:"数据对象之间关系类型示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据对象之间关系类型示例"}},[a._v("#")]),a._v(" 数据对象之间关系类型示例")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("一对一: 用户和用户详情")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<class name="User">\n    <has_one>\n        <relationclass name="Userdetail">userDetail</relationclass>\n    </has_one>\n</class>\n')])])])]),a._v(" "),e("li",[e("p",[a._v("从属一对一: 用户和部门")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<class name="User">\n    <belong_has_one>\n        <relationclass name="Department">department</relationclass>\n    </belong_has_one>\n</class>\n')])])])]),a._v(" "),e("li",[e("p",[a._v("一对多：用户和评论")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<class name="User">\n    <has_many>\n        <relationclass name="Comment">comment</relationclass>\n    </has_many>\n</class>\n')])])])]),a._v(" "),e("li",[e("p",[a._v("多对多：用户和角色 【表中间名最后一段是：userrole】")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<class name="User">\n    <many_many>\n        <relationclass name="Role">roles</relationclass>\n    </many_many>\n</class>\n')])])])]),a._v(" "),e("li",[e("p",[a._v("从属多对多：角色和用户 【表中间名最后一段是：userrole】")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<class name="Role">\n    <belongs_many_many>\n        <relationclass name="User">users</relationclass>\n    </belongs_many_many>\n</class>\n')])])])])]),a._v(" "),e("h2",{attrs:{id:"冗余字段配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#冗余字段配置"}},[a._v("#")]),a._v(" 冗余字段配置")]),a._v(" "),e("ul",[e("li",[a._v("主要用于中间表为了减少联表查询保存的冗余字段数据。")]),a._v(" "),e("li",[a._v("需要配置告知是关联哪个数据对象的冗余字段。"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<class name="Themeshow">\n    <redundancy>\n        <table name="Theme">\n            <field name="theme_name"/>\n            <field name="introduce"/>\n            <field name="image"/>\n            <field name="parent_id"/>\n            <field name="childcount"/>\n            <field name="level"/>\n        </table>\n    </redundancy>\n</class>\n')])])])])]),a._v(" "),e("h2",{attrs:{id:"支持一选多-全部-已选-未选择"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持一选多-全部-已选-未选择"}},[a._v("#")]),a._v(" 支持一选多[全部|已选|未选择]")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("一选多中配置的是中间关系表才会生成")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('<class name="User">\n    <has_many>\n        <relationclass name="Userrole">userrole</relationclass>\n    </has_many>\n</class>\n')])])])]),a._v(" "),e("li",[e("p",[a._v("说明: 中间表对象类必须配置查询条件配置conditions才能正常使用")])])])])}),[],!1,null,null,null);s.default=l.exports}}]);