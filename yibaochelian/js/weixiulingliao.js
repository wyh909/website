$(function(){var a={productID:"商品编码",productname:"商品名称",unit:"单位",productnum:"数量",unitprice:"单价",maintenanceMan:"领料人"},b={id:"table",port:"usedCompontList.do",itemId:"productID",th:a,param:{pageNum:1,status:0}};COMMON.addTpl({table:1,th:a}),COMMON.table(b)});