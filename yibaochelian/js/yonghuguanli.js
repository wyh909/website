$(function(){function p(){$.extend({},d,{pageNum:1,pageSize:10}),j=avalon.define({$id:"useredit",itemId:"id",item:e.editItem,roles:[],newData:n,change:function(a){"repassword"==$(a.target).attr("id")&&(a.target.value!=$("#password").val()?$(".error",l).size()>0?$(".error",l).show():$(".bd",l).append('<div class="error">与密码不一致</div>'):$(".error",l).hide()),n[a.target.getAttribute("id")]=a.target.value},cancelItem:function(){r()},getRole:function(){COMMON.ajaxFn({url:"roleList.do",obj:{pageSize:10,pageNum:1},callback:function(a){var d,e,f,g,b=a.data.data||[],c=[];for(d=0,e=b.length;e>d;d++)c.push({text:b[d].name,value:b[d].id});for(f=0,g=j.item.length;g>f;f++)"roles"==j.item[f].id&&(j.item[f].options=c||[],j.item[f].selected=b[0].id)}}),COMMON.ajaxFn({url:"listDeptByPage.do",obj:{pageSize:10,pageNum:1},callback:function(a){var d,e,b=a.data.data||[],c=[];for(d=0,e=b.length;e>d;d++)c.push({text:b[d].departmentName,value:b[d].departmentName});j.item[1].options=c||[],j.item[1].selected=b[0].departmentName}})},saveItem:function(){var a=$("div.bd-user",l);n.name=$("#name",a).val(),n.dept=$("#dept",a).val(),n.account=$("#account",a).val(),n.role_ids=$("#roles",a).val()?$("#roles",a).val().join(","):"",n.duty=$("#duty",a).val(),j.newData=n,COMMON.ajaxFn({url:"saveOrUpdateUsers.do",obj:n,callback:function(a){1==a.code&&(s(),r())}})}}),h=avalon.define({$id:"table",th:a,tr:[],ids:[],isOpt:!0,rolename:[],rolenames:[],getkey:function(a,b){return h.tr.size()>0&&h.tr[a]?h.tr[a][b]:void 0},addItem:function(){q("user","add")},editItem:function(a){$("div.bd-role",l).hide(),$("div.bd-user",l).hide(),q("user","edit",a),n.id=a},delItem:function(a){$("div.winpop").dialog({title:"窗口提示",content:"确定删除此条数据吗",button:[{text:"确定",cls:" btn-ok",handler:function(){COMMON.ajaxFn({url:"deleteUsersById.do",obj:{id:a},callback:function(a){1==a.code?s():alert("删除失败")}})}},{text:"取消",cls:"btn-cancel",handler:function(a){a.dialog("hide")}}]})}}),s()}function q(a,b,c){var n,o,g="add"==b?"添加用户":"编辑用户",h="",i=$("div.winpop"),k=$("div.bd-role",i),l=$("div.bd-user",i);if($("div.hd",i).html(g),"user"==a&&(h=f.port,l.show(),k.hide()),i.show(),m.show(),"add"!=b)$("#account").parent().parent().hide(),$("#password").parent().parent().hide(),$("#repassword").parent().parent().hide(),COMMON.ajaxFn({url:h,obj:{id:c},callback:function(b){var d,f,g,h,k,l,n,o,p,q,r;if(1==b.code){if(d=b.data.data||{},f={},g={},h=null,k=null,l={},n=[],"user"==a){for(d=d[0],f=e.editItem,o=0,p=f.length;p>o;o++){if(h=f[o]["id"],"roles"==h){for(l=d[h],q=0,r=l.length,n=[];r>q;q++)n.push(l[q].id);j.item[o].selected=n.join(","),g[h]=n.join(",")}else"dept"==h?(k=d[h],f[1].selected=k):(k=d[h]||"",j.item[o].value=k);g[h]=k}g.id=c,j.newData=g}i.show(),m.show()}}});else for($("#account").parent().parent().show(),$("#password").parent().parent().show(),$("#repassword").parent().parent().show(),n=0,o=e.editItem.length;o>n;n++)j.item[n].value=""}function r(){l.hide(),m.hide()}function s(a){var b=null,c=null;b=$.extend({},d,f.param),c=f.port,COMMON.ajaxFn({url:c,obj:b,callback:function(b){if(1==b.code){var c=b.data||{};$("tr.loading").hide(),"role"==a||(c?(c.data?c.data.length>0?(h.tr=c.data,$("tr.loading").hide()):t():t(),c.total&&c.total>1?$("div.page").show():$("div.page").hide()):t())}}})}function t(){$("tr.loading td").html("暂无数据"),$("tr.loading").show()}var a=[{id:"name",name:"姓名"},{id:"account",name:"账号"}],d={facilitatorID:COMMON.getCookie("facilitatorID")||1,companyUserID:COMMON.getCookie("companyUserID")||1},e={itemId:"id",editItem:[{id:"name",name:"姓名",value:"1",type:0},{id:"dept",name:"部门",value:"",type:1,selected:"",options:[]},{id:"account",name:"账号",value:""},{id:"password",name:"密码",value:""},{id:"repassword",name:"确认密码",value:""},{id:"roles",name:"关联角色名称",type:1,selected:"",options:[],isMulti:!0},{id:"duty",name:"职责",value:""}]},f={id:"table",port:"listUsersByPage.do",saveport:"saveOrUpdateUsers.do",delport:"deleteUsersById.do",itemId:"id",th:a,param:{pageNum:1,pageSize:10}},h=null,j=null,l=$("div.winpop"),m=$("div.mask"),n={};p()});