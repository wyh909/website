$(function(){var k,b=(window.location.href,document.location.href.indexOf("opt.html")>-1),c={pageNumber:1,pageSize:10},d={productName:"商品名称",productID:"商品编号",origin:"产地",type:"分类",carModle:"车型",lastdeliveryDate:"最近出货时间",lastpurchaseDate:"最近进货时间",account:"商品可售数量",unit:"单位(升,个)",safeaccount:"安全数量",suggestBuyprice:"建议购买价格",suggestSaleprice:"建议销售价格",repertory:"仓库名称",origin:"产地",type:"分类",carModle:"车型"},e={maintainID:"维修单号",productName:"商品名称",productID:"商品编号",account:"出库数量",unit:"单位",suggestBuyprice:"出库价格",repertory:"仓库名称",origin:"产地",type:"分类",carModle:"车型",receive:"领料人",handleMan:"办理人员"},g={id:"table_ccgl",itemId:"id",port:"listProductByPage.do",th:d,callback:function(a){$(".loading").hide(),$("table").attr("class","Stable").css("width","1200px"),$("#tree").on("click","a",function(){treeLink(a,$(this).html())})}},h={itemId:"id",port:"listStorageformByPage.do",saveport:"addStorageform.do",delport:"deleteStorageform.do",th:e},i={itemId:"id",port:"fandDeliveryformByPage.do",saveport:"addDeliveryform.do",delport:"deleteDeliveryform.do",th:e},j=[g,h,i];b||(COMMON.addTpl({table:1,th:d}),k=avalon.define("childTable",function(a){a.tab=["库存管理","入库","出库"],a.curIndex=0,a.th=d,a.tr=[],a.item=[],a.changeIndex=function(b){var d,e;a.curIndex=b,0==b&&(d={port:"usedCompontInput.do",obj:COMMON.defaultParam,isFold:!1},TREE.tree($("div.tree"),d)),e=j[b],a.th=e.th,COMMON.ajaxFn({url:e.port,obj:c,callback:function(b){var c,d;(1==b.code||1==b.ret)&&(c=b.data.data||[],a.tr=[],b.data?(c instanceof Array?a.tr=c||[]:(d=[],d.push(c),a.tr=d),0==a.curIndex?$("table").css("width","1200px"):$("table").css("width","100%"),$("tr.loading","div.item").hide()):$("tr.loading td").html("暂无数据"))}})},a.getkey=function(a,b){return k.tr.size()>0&&k.tr[a]?k.tr[a][b]:void 0},a.getId=function(a){var c=k;return c.tr.size()>0&&c.tr[a]?"kufangguanli-opt.html?id="+c.tr[a][j[a].itemId]:void 0},a.editItem=function(){},a.saveItem=function(){$dialog.dialog("show"),editDialog(k.curIndex),$("#tree").on("click","a",function(){editDialog(k.curIndex,{itemName:$(this).html()})})},a.delItem=function(b){var c=j[a.curIndex],d=a.tr[b][c.itemId];$("div.dialog").dialog({title:"窗口提示",content:"确定删除此条数据吗",button:[{text:"确定",cls:"btn-ok",handler:function(b){COMMON.ajaxFn({url:c.delport,obj:{id:d},callback:function(c){(1==c.code||1==c.ret)&&(b.dialog("hide"),a.changeIndex(a.curIndex))}})}},{text:"取消",cls:"btn-cancal",handler:function(a){a.dialog("hide")}}],callback:function(a){a.addClass("w400")}})}}),avalon.scan(),k.changeIndex(0))});