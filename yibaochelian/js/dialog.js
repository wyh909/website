!function(a){a.fn.dialog=function(b){function e(b){var e,g,h,i,j,m,n,o;if(b=a.extend({},c.param,b||{}),e="",g=b.button||[],h=[],i=[],j=null,m=(new Date).getTime(),$el.size()<1&&(a("body").append('<div class="dialog"></div>'),$el=a("div.dialog")),a("div.mask").size()<1&&(a("body").append('<div class="mask"></div>'),d=a("div.mask")),g.length>0)for(n=0,o=g.length;o>n;n++)j=g[n],handler=j.handler,h.push('<a href="'+(j.url||"javascript:;")+'" class="btn '+j.cls+'">'+(j.text||"")+"</a>");b.title&&(e='<div class="hd"><span>'+(b.title||"")+'</span><a href="javascript:;" class="close">×</a></div>'||""),b.content&&(i=e+'<div class="bd">'+(b.content||"")+'</div><div class="btns">'+h.join("")+"</div>"),$el.html(i).show().attr("id","dialog"+m),b.style&&$el.css(b.style),a("div.bd",$el).show(),a("div.mask").show().attr("id","mask"+m),f(a("#dialog"+m)),"function"==typeof b.callback&&b.callback($el)}function f(c){c.unbind("click"),c.on("click","a.close",function(){h(c)}).on("click.dialog","a.btn",function(){var d=a(this),e=b.button[d.index()].handler;return d.hasClass("btn-cancel")?(h(c),void 0):(e&&e(c),void 0)})}function g(b){if(b.size()>0){var c="";b.attr("id")&&(c=b.attr("id").split("dialog")[1]),b.show(),a("#mask"+c).show()}}function h(b){if(b.size()>0){var c="";b.attr("id")&&(c=b.attr("id").split("dialog")[1]),b.hide(),a("#mask"+c).hide()}}function i(b,c){a(".hd span",b).html(c)}function j(b,c){a(".bd",b).html(c)}var c={},d=a("div.mask");return c.param={title:null,content:null,button:null,style:null,callback:a.noop},c.events={show:g,hide:h,setTitle:i,setContent:j},$el=this,"string"==typeof b?(c.events[b]&&c.events[b]($el),void 0):("object"==typeof b&&e(b),void 0)}}(jQuery);