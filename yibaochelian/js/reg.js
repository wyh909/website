!function(){function a(a){var b=$(a),e=$.trim(b.val()||""),f=b.attr("id").substring(1);if($msg_txt=b.siblings(".msg"),"User"==f||"user"==f){if(!e)return $msg_txt.html("用户名不能为空").addClass("error").show(),void(c.user=!1);if(!d.test(e))return $msg_txt.html("格式错误").addClass("error").show(),void(c.user=!1);c.user=!0}else if("Pwd"==f||"pwd"==f){if(!e)return $msg_txt.html("密码不能为空").addClass("error").show(),void(c.pwd=!1);c.pwd=!0}else if("Repwd"==f||"repwd"==f){if(!e)return $msg_txt.html("重复密码不能为空").addClass("error").show(),void(c.pwd=!1);if(e!=$("#"+b.attr("id").substring(0,1)+"Pwd").val())return $msg_txt.html("与密码不一致").addClass("error"),void(c.repwd=!1);c.repwd=!0}$msg_txt.removeClass("error").hide()}function b(){$("input","div.item").on("blur",function(){a($(this))}),$("a.btn-ok").on("click",function(){var b=$(this);if(b.hasClass("btn-reg")){for(var d=$("input",$("div.on")),f=$("div.agree-msg"),g=0,h=d.length;h>g;g++){var i=d.eq(g);i.length>0&&i.on("blur",a(i))}if(c.user&&c.pwd&&c.repwd){$("#agreement").attr("checked")?f.siblings(".msg").removeClass("error"):f.addClass("error");var j={name:$("#pUser").val(),pwd:$("#pPwd").val()};$.ajax({url:"http://115.159.77.210:8080/ybcl2.0/enterprise/com.register.do",data:j,type:"POST",dataType:"jsonp",success:function(a){1==a.code?location.href="/yibaochelian/index.html":f.addClass("error").html(a.desc||"").show()},error:function(){f.addClass("error").html("服务请求错误").show()}})}}else if(b.hasClass("btn-next")){var i=$("#name",e);i.on("blur",a(i)),c.user&&($("div.step1",e).hide(),$("div.step2",e).show())}else if(b.hasClass("btn-setpwd")){for(var d=$("div.step2 input",e),g=0,h=d.length;h>g;g++){var i=d.eq(g);i.length>0&&i.on("blur",a(i))}c.pwd&&c.repwd&&($("div.step2",e).hide(),$("div.step3",e).show())}})}var c={},d=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i,e=$("div.getpwd");b()}();