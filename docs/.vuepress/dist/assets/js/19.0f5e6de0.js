(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{588:function(s,t,a){"use strict";a.r(t);var n=a(10),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"mysql-语法规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-语法规范"}},[s._v("#")]),s._v(" MySQL 语法规范")]),s._v(" "),a("ol",[a("li",[s._v("不区分大小写，但建议关键字区分大写；表名，列名小写。")]),s._v(" "),a("li",[s._v("每条命令用"),a("code",[s._v(";")]),s._v("(或"),a("code",[s._v("\\g")]),s._v(")结尾。")]),s._v(" "),a("li",[s._v("每条命令根据需要可以进行缩进或换行。")]),s._v(" "),a("li",[s._v("注释")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("单行注释： #注释文字\n单行注释： "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" 注释文字\n多行注释： "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 多行注释 */")]),s._v("\n")])])]),a("h2",{attrs:{id:"sql-语言的学习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-语言的学习"}},[s._v("#")]),s._v(" SQL 语言的学习")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("选择：select "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" from table1 where\n范围插入：insert into "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("table1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("field1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("field2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("value2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n删除："),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" from table1 where\n范围更新：update table1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" field1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value1 where\n范围查找：select "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" from table1 where field1 like ’"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("value1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("’ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("like的语法很精妙，查资料"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n排序：select "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" from table1 order by field1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("field2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("desc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n总数：select count "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" totalcount from table1\n求和：select "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("field1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" sumvalue from table1\n平均：select "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("avg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("field1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" avgvalue from table1\n最大：select "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("field1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" maxvalue from table1\n最小：select "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("min")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("field1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" minvalue from table1\n")])])]),a("h2",{attrs:{id:"常用sql语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用sql语句"}},[s._v("#")]),s._v(" 常用SQL语句")]),s._v(" "),a("ul",[a("li",[s._v("增\n如果有的键是必须的，忘记写进去会报错")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" insert into "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("user_list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("pwd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("email"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("55")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"张龙"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"79845"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123@126.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("ul",[a("li",[s._v("删\n很少情况会真正删除，实际是把数据隐藏，不让用户看到而已！！")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DELETE")]),s._v(" from user_list "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WHERE")]),s._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])])]),a("ul",[a("li",[s._v("改")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("UPDATE")]),s._v(" user_list "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"南极仙翁"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WHERE")]),s._v(" id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n")])])]),a("ul",[a("li",[s._v("查")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" select "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" from user_list\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" from user_list "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WHERE")]),s._v(" age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" from user_list "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WHERE")]),s._v(" age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("AND")]),s._v(" sex"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//模糊查询")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" from user_list "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WHERE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LIKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'张%'")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// name以张开头的")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" from user_list "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WHERE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LIKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%三'")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// name以三结束的")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" from user_list "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WHERE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LIKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%二%'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// name包含三的")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" from user_list "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WHERE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("LIKE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'张%'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("OR")]),s._v(" age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("BY")]),s._v(" age asc "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// name 以张开头 age大于18 查看并用 age升序排列")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" from user_list "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("WHERE")]),s._v(" age"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("BY")]),s._v(" age "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ASC")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// asc 升序 desc 降序")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);