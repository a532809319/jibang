/* var  H=$.noConflict();
 H.fn.toRed=function(){
 this.css('background','red');
 };
 H.fn.toBlue=function(){
 this.css('background','blue');
 };
 H.fn.toGreen=function(){
 this.css('background','green');
 };
 /*

 H.fn.extend({
 'toRed':function(){
 this.css('background','red');
 },
 'toBlue':function(){
 this.css('background','blue');
 },
 'toGreen':function(){
 this.css('background','green');

 }
 'dragBox':function () {
 // body...

 }
 });*/
/*拓展到工具插件 $().fn()  $().xxx() $().yyy()*/

$.fn.extend({
    'dragBox':function(){
        var aDiv=this;
        aDiv.each(function(index,element){
            var oDiv=$(element);
            oDiv.mousedown(function(ev){
                var disX=ev.pageX-oDiv.offset().left;
              /*  var disY=ev.pageY-oDiv.offset().top;*/
               $(document).mousemove(fnMove);
                function fnMove(ev){
                    l=ev.clientX-disX
                    if(l>0){
                        l= 0;
                    }
                    if(-3000>l)l=-3000;
                    oDiv.css({
                        'left':l+'px'/*,*/
                       /* 'top':ev.clientY-disY+'px'*/
                    });
                }
               $(document).mouseup(fnUp);
                function fnUp(){
                   $(document).unbind('mousemove',fnMove);
                   $(document).unbind('mouseup',fnUp);
                    oDiv[0].releaseCapture && oDiv[0].releaseCapture();
                }
                oDiv.get(0).setCapture && oDiv.get(0).setCapture()
                return false;//默认冒泡
            });
        });
        return this;

    }  /*dragBoxj结束*/








});/*拓展到对象下的插件借宿*/




