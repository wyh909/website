$(function(){function a(a,b){$("tr td:nth-child(2)","div.tabcon .fleft").css({color:"#00f",cursor:"pointer"}),$("div.tabcon").off().on("click","tr td:nth-child(2)",function(c){var d=$(c.target).text(),e=$.extend({},l);"listCollectionByPage.do"==b?e.userId=d:e.supplierId=d,COMMON.ajaxFn({url:b,obj:e,callback:function(b){1==b.code&&(a.tr=b.data.data||[])}})})}var b=[{text:"应收款",value:1},{text:"预收款",value:2},{text:"直接收款",value:3}],c=[{text:"挂账",value:1},{text:"会员卡",value:2},{text:"零现钱",value:3}],d=[{text:"挂账",value:1},{text:"会员卡",value:2},{text:"零现钱",value:3}],e=[{text:"采购欠款",value:1},{text:"采购付款",value:2}],f=[{id:"supplierId",name:"供应商编号"},{id:"supplierName",name:"供应商名称"},{id:"amount",name:"总金额"},{id:"amountPaid",name:"已付金额"},{id:"unpaidAmount",name:"未付金额"},{id:"unpaidAmount",name:"超额"}],g=[{id:"amount",name:"总金额"},{id:"amountPaid	",name:"已付金额"},{id:"unpaidAmount",name:"未付金额"},{id:"accountPayableNum",name:"单号"},{id:"type",name:"业务类型",options:e}],h=[{id:"useId",name:"用户编号"},{id:"useName",name:"用户名称"},{id:"amount",name:"发生额"},{id:"amountReceived",name:"收款额"},{id:"outstandingAmount",name:"余额"},{id:"outstandingAmount",name:"超额"}],i=[{id:"startDate",name:"开单日期"},{id:"amount",name:"发生额"},{id:"amountReceived",name:"收款额"},{id:"outstandingAmount",name:"余额"},{id:"collectionNum",name:"单号"},{id:"type",name:"业务类型",options:e}],j=[{id:"amount",name:"应收总额"},{id:"amountReceived",name:"已收总额"},{id:"thisCollection",name:"本次合计"},{id:"thisCollection",name:"实际收款"},{id:"reviewer",name:"审核人"},{id:"startDate",name:"审核日期"}],k=[{id:"amount",name:"应付总额"},{id:"amountPaid",name:"已付金额"},{id:"thisPayment",name:"本次合计"},{id:"thisPayment",name:"实际付款"},{id:"reviewer",name:"审核人"},{id:"startDate",name:"审核日期"}],l={pageNumber:1,pageSize:10},m={id:"paytableall",port:"listAccountByPage.do",itemId:"id",th:f,isOpt:!1,param:l,callback:function(a){n.param=$.extend({},l,{supplierId:a.tr[0].id}),COMMON.table(n)}},n={id:"paytablesingle",port:"listAccountByPage.do",delport:"deleteAccount.do",itemId:"id",th:g,isOpt:!0,param:l,callback:function(b){a(b,n.port)}},o={id:"tableall",port:"listCollectionByPage.do",itemId:"id",th:h,isOpt:!1,param:l,callback:function(a){n.param=$.extend({},l,{userId:a.tr[0].id}),COMMON.table(p)}},p={id:"tablesingle",port:"listCollectionByPage.do",delport:"deleteCollection.do",itemId:"id",th:i,isOpt:!0,param:l,callback:function(b){a(b,p.port)}},q={id:"totalTable",port:"listCollectionByPage.do",itemId:"id",th:j,isOpt:!1,param:l},r={id:"totalTable",port:"listAccountByPage.do",th:k,isOpt:!1,param:l},s={itemId:"mainId",id:"id",addurl:"",editurl:"listAccById.do",saveurl:"addAccount.do",edittype:0,editItem:[{id:"accountPayableNum",name:"单号",value:""},{id:"supplierId",name:"供应商编号",value:""},{id:"supplierName",name:"供应商名称",value:""},{id:"paymentTerms",name:"支付方式",value:"",type:1,selected:1,options:c},{id:"accountPayee",name:"收款账户",value:"",type:1,selected:1,options:d},{id:"accountType",name:"收款类型",value:"",type:1,selected:1,options:b},{id:"type",name:"业务类型",value:"",type:1,selected:1,options:e},{id:"amount",name:"总金额",value:"",dataType:"number"},{id:"amountPaid",name:"已付金额",value:""},{id:"unpaidAmount",name:"未付金额",value:""},{id:"thisPayment",name:"本次付款",value:""},{id:"department",name:"部门",value:""},{id:"note",name:"备注",type:2,value:""}]},t={itemId:"mainId",id:"id",addurl:"",editurl:"listCollById.do",saveurl:"addCollection.do",edittype:0,editItem:[{id:"useId",name:"客户编号",value:""},{id:"useName",name:"客户名称",value:""},{id:"collectionNum",name:"单号",value:""},{id:"type",name:"业务类型",value:"",type:1,selected:1,options:[{text:"销售欠款",value:1},{text:"销售付款",value:2}]},{id:"paymentTerms",name:"支付方式",value:"",type:1,selected:1,options:c},{id:"accountPayee",name:"收款账户",value:"",type:1,selected:1,options:d},{id:"accountType",name:"收款类型",value:"",type:1,selected:1,options:b},{id:"amount",name:"总金额",value:""},{id:"amountReceived",name:"已收金额",value:""},{id:"outstandingAmount",name:"未收金额",value:""},{id:"thisCollection",name:"本次收款",value:""},{id:"reviewer",name:"审核人",value:""},{id:"note",name:"备注",type:2,value:""}]},u=document.location.href.indexOf("opt.html")>-1;if(u){var v,w=null;COMMON.addTpl({table:1,th:f}),COMMON.addTpl({edit:1}),0==COMMON.getQuery("type")?(w=t,v=q,$("div.opt-tit").html("应收账单")):(w=s,v=r,$("div.opt-tit").html("应付账单")),w.callback=function(a,b){$("#paymentTerms").on("click",function(){var a=$(this),b=a.val();(b=1)&&$("#accountPayee").val(1)})},COMMON.edit("edit",w),COMMON.table(v)}else{var x=COMMON.getQuery("type");$("span","div.tabs").removeClass("on").eq(x).addClass("on"),$("div.item","div.tabcon").removeClass("on").eq(x).addClass("on"),COMMON.addTpl({table:1,th:f}),COMMON.table(m),COMMON.table(o)}});