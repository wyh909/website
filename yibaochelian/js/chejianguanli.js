$(function(){var a={appointmentNum:"订单号",maintaintype:"维修类型",date:"日期",coastTime:"工时（花费时间）",departmentName:"班组（部门）",employeeName:"维修员（雇员姓名）",status:"状态"},b={id:"table",port:"listItemInfo.do",delport:"delProcessById.do",itemId:"appointmentNum",th:a,param:{pageNum:1,status:0}},c=document.location.href.indexOf("opt.html")>-1;c?COMMON.edit("edit",{itemId:"appointmentNum",addurl:"saveOrUpdateProcessDetail.do",editurl:"listItemInfo.do",saveurl:"saveOrUpdateProcessDetail.do",editItem:[{id:"appointmentNum",name:"订单号",value:""},{id:"truename",name:"车主姓名（用户名）",value:""},{id:"motorNumber",name:"车牌号",value:""},{id:"date",name:"登记日期（日期）",value:""},{id:"phone",name:"车主电话（电话）",value:""},{id:"maintaintype",name:"维修类别（维修类型）",value:""},{id:"platenumber",name:"发动机号",value:""},{id:"arriveTime",name:"入场时间",value:""},{id:"color",name:"车辆颜色",value:""},{id:"series",name:"车辆类型",value:""},{id:"brand",name:"车辆品牌",value:""},{id:"miles",name:"进厂里程",value:""},{id:"oil",name:"油表状态",value:""}]}):(COMMON.addTpl({table:1,th:a}),COMMON.table(b))});