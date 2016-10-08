
$(function(){





    var banners=$(".banner-middle1");
	var bannerq=$(".banner-quan1");
    var bannera=$(".banner")[0];
    var color=["#b50f25","#ebebeb","#881523","#353927"]
    for (var i = 0; i < bannerq.length; i++) {
        this.index=i;
    	bannerq[i].index=i;//给每一个按钮对象添加一个index属性   值为它在集合中的下标
    	bannerq[i].onmouseover=function(){//给每一个加一个事件
            num=this.index;
    		for (var i = 0; i < bannerq.length; i++) { //这个I和外面的I没关系 是重新声明的I
    			banners[i].style.zIndex=1;
    			
    			
    			bannerq[i].style.background="#211611";
    		};
         
    		bannera.style.background=color[this.index];
    	
    		banners[this.index].style.zIndex=2;//this  当前时间触发对象
    		this.style.background="#e5004f";
            



    	}
    };
//第二个选项卡

var btns=$(".btn");
var kuangs=$(".kuang1");
var cus=$(".cu1");

for (var i = 0; i < btns.length; i++) {
    
    btns[i].index=i;
    btns[i].onmouseover=function(){
        for (var i = 0; i < btns.length; i++) {
            kuangs[i].style.zIndex=1;
            cus[i].style.background="#333";
            kuangs[i].style.display="none";
        };
        kuangs[this.index].style.zIndex=2;
        cus[this.index].style.background="#e5004f";
        kuangs[this.index].style.display="";
    }
};
var baobao=$(".baobao");
var xian1=$(".xian1");
var shubao=$(".shubao");
for (var i = 0; i < baobao.length; i++) {
    baobao[i].index=i;
    baobao[i].onmouseover=function(){
        for (var i = 0; i < baobao.length; i++) {
            xian1[i].style.background="#000";
            shubao[i].style.zIndex=1;
            shubao[i].style.display="none";
      
        };
        shubao[this.index].style.zIndex=2;
        shubao[this.index].style.display="";
        xian1[this.index].style.background="red";
       
    }
};


var weixin=$(".weixin")[0];
var weixin3=$(".weixin3")[0];
weixin.onmouseover=function(){
    weixin3.style.display="block";
}
weixin.onmouseout=function(){
    weixin3.style.display="none";
}

var shouji=$(".shouji")[0];
var shou3=$(".shou3")[0];
shouji.onmouseover=function(){
    shou3.style.display="block";
}
shouji.onmouseout=function(){
    shou3.style.display="none";
}

var yintai=$(".yintai")[0];
var yintai3=$(".yintai3")[0];
yintai.onmouseover=function(){
    yintai3.style.display="block";
}
yintai.onmouseout=function(){
    yintai3.style.display="none";
}

//第二个选项卡
var libao=$(".libao");
var tupian1=$(".tupian1");
var leftt=$(".leftt");
var zhong2=$(".zhongkong");
for (var i = 0; i < libao.length; i++) {
    libao[i].index=i;
    libao[i].onclick=function(){
            var ot=zhong2[this.index].offsetTop;
            animate(scrollobj,{scrollTop:ot}) 

        }
    libao[i].onmouseover=function(){
        for (var i = 0; i < libao.length; i++) {
           tupian1[this.index].style.zIndex=1;
           tupian1[this.index].style.display="none";
        };
        leftt[this.index].style.zIndex=2;
        leftt[this.index].style.display="block";
    }
    libao[i].onmouseout=function(){
        for (var i = 0; i < libao.length; i++) {
           tupian1[this.index].style.zIndex=2;
           tupian1[this.index].style.display="block";
        };
        leftt[this.index].style.zIndex=1;
        leftt[this.index].style.display="none";
    }
}

        
        var arr1=getDoc();
       addEvent(window,"scroll",jianrong)

                function jianrong(){
             
              
             var ht=arr1.scrollTop;
            for (var i = 0; i < zhong2.length; i++) {
                var lt=zhong2[i].offsetTop;
            if(ht+100>lt){
                for (var j = 0; j < leftt.length; j++) {
               leftt[j].style.background="" 
               tupian1[j].style.display="block"
                leftt[j].style.display="none";
            };
            leftt[i].style.background="E3316B" 
            tupian1[i].style.display="none";
            leftt[i].style.display="block";
        }
    }

   
 



};

var zhongo=$(".huhu");
var newarr5=[];
for (var i = 0; i < zhongo.length; i++) {
    newarr5.push(zhongo[i].offsetTop)
};
      
       var arr1=getDoc();


      var vh=document.documentElement.clientHeight;
  
      addEvent(window,"scroll",jianrong1)

      var scroll=arr1.scrollTop;
      function jianrong1(){
       
          for (var i = 0; i < zhongo.length; i++) {
            if(arr1.scrollTop+vh>newarr5[i]&&zhongo[i].getAttribute("flag8")!="true"){
                var imgs=$("img",zhongo[i])
                for (var j = 0; j< imgs.length; j++) {
                    imgs[j].src=imgs[j].getAttribute("asrc")
                };
                zhongo[i].setAttribute("flag8",true)
            }
          };
       }
   
       




//中间轮播图

    var box77=$(".box77")
    var boxlefts=$(".boxleft77");
    var boxrights=$(".boxright77");
    
    var btnss=$(".boxbig77");
    var yq77=$(".yq77");
    for (var i = 0; i < box77.length; i++) {
        lunbo5(box77[i],boxlefts[i],boxrights[i],btnss[i],yq77[i])
    };
    function lunbo5(box77,boxlefts,boxrights,btnss,yq77){
        var yuans=$("div",yq77); 
        var flag=true;
    box77.onmouseover=function(){
        animate(boxlefts,{left:0},200)
        animate(boxrights,{right:0},200)
    }
    

    box77.onmouseout=function(){
        animate(boxlefts,{left:-30},200)
        animate(boxrights,{right:-30},200)
    }

    boxlefts.onmouseover=function(){
        this.style.backgroundPosition="left bottom"
    }
    boxlefts.onmouseout=function(){
        this.style.backgroundPosition="left top"
    }
    boxrights.onmouseover=function(){
        if(flag){
        
        boxrights.style.backgroundPosition="right bottom"
    }
    }
    boxrights.onmouseout=function(){
        this.style.backgroundPosition="right top"
    }
    
    boxlefts.onclick=moveleft;
    boxrights.onclick=moveright;
    yuans[0].onclick=moveleft;
    yuans[1].onclick=moveright;
    function moveleft(){
        flag=true;
        animate(btnss,{marginLeft:0})
        yuans[1].style.backgroundColor="#ccc"
        yuans[0].style.backgroundColor="#e5004f"
    }
    function moveright(){
        flag=false;
        animate(btnss,{marginLeft:-390})
        yuans[0].style.backgroundColor="#ccc"
        yuans[1].style.backgroundColor="#e5004f"
    }
    
}


var zuozjian=$(".zuojian")[0];
var youzjian=$(".youjian")[0];
banners.onmouseover=function(){
    animate(zuozjian,{left:0},200)
    animate(youzjian,{right:0},200)
}
banners.onmouseout=function(){
        animate(zuozjian,{left:-30},200)
        animate(youzjian,{right:-30},200)
    }
zuozjian.onmouseover=function(){
        this.style.backgroundPosition="left bottom"
    }
    zuozjian.onmouseout=function(){
        this.style.backgroundPosition="left top"
    }
    youzjian.onmouseover=function(){
        if(flag){
        
        boxrights.style.backgroundPosition="right bottom"
    }
    }
    youzjian.onmouseout=function(){
        this.style.backgroundPosition="right top"
    }


//左边轮播图





//中间2条线变边框
     
        var one=$(".one");
        for (var i = 0; i < one.length; i++) {
            border(one[i],2000)
        };
        var two=$(".two");
        for (var i = 0; i < two.length; i++) {
            border(two[i],2000)
        };
        var three=$(".three");
        for (var i = 0; i < three.length; i++) {
            border(three[i],2000)
        };
        var four=$(".four");
        for (var i = 0; i < four.length; i++) {
            border(four[i],2000)
        };
        
        var shubao1=$(".shubao1");
        for (var i = 0; i < shubao1.length; i++) {
            border(shubao1[i],2000)
        };
        var dabao1=$(".dabao1");
        for (var i = 0; i < dabao1.length; i++) {
            border(dabao1[i],2000)
        };
        var dabao2=$(".dabao2");
        for (var i = 0; i < dabao2.length; i++) {
            border(dabao2[i],2000)
        };
 
     
        
      
     






    

//banner轮播
 lunbo=setInterval(move
 	
 	
 	

 ,1200)


var num=0;
function move(){
    num++;
    if(num==4){
    num=0;

};
for (var i = 0; i < bannerq.length; i++) {
    bannerq[i].style.background="#211611";
    banners[i].style.zIndex=1;
};
bannera.style.background=color[num];

banners[num].style.zIndex=2;
bannerq[num].style.background="#e5004f";
}
bannera.onmouseover=function(){
    clearInterval(lunbo);
}
bannera.onmouseout=function(){
    lunbo=setInterval(move,1200);
}



//右边跳转楼层
var leftd=$(".left")[0];

       
        var scrollobj=getDoc();

        var flag=true;
        var flag2=true;


addEvent(window,"scroll",jianting)

function jianting(){
            var st=scrollobj.scrollTop;
        
        if(st>1800){
            if(flag){
                flag=false;
                flag2=true;

            animate(leftd,{width:48,height:496})
            }

        }else{
           
                flag=true;
                flag2=false;

            animate(leftd,{width:0,height:0})
        

        }
    }



        
    var obj=document.documentElement;
    var fanhui=$(".fanhui")[0];
    fanhui.onclick=function(){
        obj=document.body.scrollTop==0?document.documentElement:document.body;
        animate(obj,{scrollTop:0})
    }





var leftjian=$(".leftjian");
var rightjian=$(".rightjian");
var tukuang=$(".dabaokuang");



for (var i = 0; i < tukuang.length; i++) {
    xiaoguo(tukuang[i],leftjian[i],rightjian[i])
};

function xiaoguo(tukuang,leftjian,rightjian){


var flag5=true;

  


  rightjian.onclick=function(){
    
          
    animate(tukuang,{left:-168},500,function(){
        var first=getFirst(tukuang);
        tukuang.appendChild(first);
        tukuang.style.left=0;
  leftjian.onclick=function(){
    if(!flag5){
        return
    }
        flag5=false
        var last=getLast(tukuang);
        var los=getFirst(tukuang);
        tukuang.insertBefore(last,los)
        tukuang.style.left=-168+"px";
        
        animate(tukuang,{left:0},500,
            function(){
           flag5=true
        })
  }
        
    
  })
  }
}


var bannerzLeft=$(".bannerzhong-left")[0];
var left1=$(".left1");
var zhezhaoti=$(".zhezhaoti");
for (var i = 0; i < left1.length; i++) {
    left1[i].index=i;
    left1[i].onmouseover=function(){
       for (var i = 0; i < zhezhaoti.length; i++) {
           
        
        zhezhaoti[i].style.display="none";
        };
         
    zhezhaoti[this.index].style.display="block";
    }
  left1[i].onmouseout=function(){
    zhezhaoti[this.index].style.display="none";
   }
  
 }





})





	
// 动图
	var tops=document.getElementsByClassName("top321");

var num=0;
 lunbo=setInterval(function(){
 	num++;
 	if(num==2){
 		num=0;

 	};
 	for (var i = 0; i < tops.length; i++) {
 		tops[i].style.zIndex=1;
 		
 	};
	
 	tops[num].style.zIndex=2;
 	

 },500)
 // 动图










//点击变换






























	


