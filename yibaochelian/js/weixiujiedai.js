$(function(){function i(a,b){var b=$.extend({},{mainId:COMMON.getQuery("id")},b||{}),e=d[a];table_list.th=e.thadd,table_list.tr=[],COMMON.ajaxFn({url:e.addport,obj:b,callback:function(a){var d,e,b=a.data.data||{};for(table_list.tr=b,$("tr.loading").hide(),d=0,e=$("tr",c).length;e>d;d++)$trItem=$("tr",c).eq(d),$("td:first",$trItem).html('<input type="checkbox" id="'+$("td",$trItem).next().attr("data-id")+'" />'),$("th:last",c).hide(),$("td:last",$trItem).hide()}})}var d,e,f,g,h,b=(document.location.href,COMMON.getQuery("id")),c=$("div.dialog");th={maintainfortNum:"维修单号",truename:"真实姓名",platenumber:"车牌号",phone:"电话",maintaintype:"类别",status:"状态"},thYuyue={itemId:"推荐项目id",itemName:"推荐项目名称",workType:"工种",faultCode:"错误代码",standardWorkTime:"标准工时",standardUnitPrice:"标准单价",coastWorkTime:"工时花费"},thLingliao={productID:"商品编码",productname:"商品名称",unit:"单位",productnum:"数量",unitprice:"单价",maintenanceMan:"领料班组",maintenanceMan:"领料人"},thDanju={maintainID:"预约单号",checker:"检测人",checkDate:"检测时间",Accounter:"结算人",accountDate:"结算时间",checkout:"收银人",checkoutDate:"收银时间",completionDate:"完工时间",Outmaker:"出厂时间",Header:"负责人"},thFeiyong={laborCost:"工时费",materiaCost:"材料费",otherCost:"其他费",pageName:"套餐",totalCost:"合计"},thchild={itemId:"项目id",itemName:"推荐项目名称",workType:"工种",faultCode:"错误代码",standardWorkTime:"标准工时",standardUnitPrice:"标准单价",coastWorkTime:"工时花费",orderNum:"顺序号"},thxmll={productID:"商品编号",productname:"商品名称",origin:"产地",type:"分类",carModle:" 车型",lastdeliveryDate:"最近出货时间",lastpurchaseDate:" 最近进货时间",account:"商品可售数量",unit:"单位（升，个）",safeaccount:"安全数量",suggestBuyprice:"建议购买价格",suggestSaleprice:" 建议销售价格",repertory:"仓库名称"},typeOpt=["全部","预约","未修","在修","已修","内部交车","结算","交车"],classOpt=["保养","维修","美容"],table_list=null,tableObj={id:"table",port:"maintainformList.do",addport:"maintainformInput.do",delport:"maintainformDelete.do",itemId:"maintainfortNum",th:th,param:{pageNum:1}},editObj={itemId:"mainId",editport:"maintainformDetail.do",saveport:"maintainformSaveOrUpdate.do",editItem:[{id:"maintainfortNum",name:"维修单号",value:"",type:0},{id:"truename",name:"真实姓名",value:""},{id:"platenumber",name:"车牌号",value:""},{id:"phone",name:"电话",value:""},{id:"maintaintype",name:"类别",value:"",type:1,option:classOpt},{id:"status",name:"状态",value:""},{id:"usedComponents",name:"备注",value:"",type:2}]},yuyuexiangmu={id:"childTable",port:"serviceItemList.do",addport:"serviceItemInput.do",saveport:"serviceItemDoSave.do",th:thYuyue,thadd:thchild,btntype:1,param:{pageNum:1}},xiangmulingliao={id:"childTable",port:"usedCompontList.do",addport:"usedCompontInput.do",saveport:"usedCompentDoSave.do",th:thLingliao,thadd:thxmll,param:{pageNum:1}},danjuxinxi={id:"childTable",port:"orderdetail.do",saveport:"",th:thDanju,param:{pageNum:1}},feiyongheji={id:"childTable",port:"costsheet.do",saveport:"",th:thFeiyong,param:{pageNum:1}},d=[yuyuexiangmu,xiangmulingliao,danjuxinxi,feiyongheji],e=document.location.href.indexOf("opt.html")>-1,f=COMMON.getQuery("operation"),e?(table_list=avalon.define({$id:"table_list",th:{},tr:[],search:{itemId:"",itemName:""},isCheckbox:!0,getkey:function(a,b){var c=table_list;return c.tr.size()>0&&c.tr[a]?c.tr[a][b]:void 0},getId:function(a){var c=g;return c.tr.size()>0&&c.tr[a]?"javascript:;":void 0},saveItem:function(){var j,k,a="",e=$("input:checkbox",c),f=null,h=g.curIndex,i=d[h].saveport;for(j=0,k=e.length;k>j;j++)f=e.eq(j).attr("id"),e.eq(j).attr("checked")&&(a=a+f+";");COMMON.ajaxFn({url:i,obj:{mainId:b,itemIds:a},callback:function(){c.dialog("hide"),g.changeIndex(h)}})},searchFn:function(){var a={itemId:$("#itemId").val()||"",itemName:$("#itemName").val()||""};i(g.curIndex,a)}}),"add"==f?(COMMON.addTpl({edit:1}),COMMON.edit("edit",editObj)):(COMMON.addTpl({edit:1}),COMMON.edit("edit",editObj)),COMMON.addTpl({table:1,th:th}),g=avalon.define({$id:"childTable",tab:["预约项目","项目领料","单据信息","费用合计","项目进度"],curIndex:0,th:yuyuexiangmu.th,tr:[],item:[],changeIndex:function(a){var e,b=g;b.curIndex=a,e=d[a],4!==a&&(b.th=e.th,COMMON.ajaxFn({url:e.port,obj:{mainId:COMMON.getQuery("id")},callback:function(a){var d,e;1==a.code&&(d=a.data||[],b.tr=[],!a.data||a.data.length<1?$("tr.loading td").html("暂无数据"):(3==b.curIndex&&d.recommendItem&&(d.pageName=d.recommendItem.pageName),d instanceof Array?b.tr=d||[]:(e=[],e.push(d),b.tr=e),1==b.curIndex&&$("table",c).css("width","1200px"),$("tr.loading","div.item").hide()))}}))},getkey:function(a,b){return g.tr.size()>0&&g.tr[a]?g.tr[a][b]:void 0},getId:function(a){var c=g;return c.tr.size()>0&&c.tr[a]?"javascript:;":void 0},addItem:function(){c.dialog("show"),i(g.curIndex),$("#tree").on("click","a",function(){i(g.curIndex,{itemName:$(this).html()})})}}),g.changeIndex(0),h={port:"usedCompontInput.do",obj:COMMON.defaultParam,isFold:!1},TREE.tree($("div.tree"),h)):(COMMON.addTpl({table:1,th:th}),COMMON.table(tableObj))});