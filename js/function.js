// 把所有用于解决IE6~8兼容性的问题函数库

// getElementsByClassName  在IE6~8里不支持
//1、先去分，再进行不同的操作
// 2、先把所有的元素都获取
// 3、然后根据类名找我们需要的元素




// if (navigator.appName == 'Microsoft Internet Explorer') {   
//         document.getElementsByClassName = function() {   
//             var tTagName = "*";   
//             if (arguments.length > 1) {   
//                 tTagName = arguments[1];   
//             }   
//             if (arguments.length > 2) {   
//                 var pObj = arguments[2]   
//             } else {   
//                 var pObj = document;   
//             }   
//             var objArr = pObj.getElementsByTagName(tTagName);   
//             var tRObj = new Array();   
//             for ( var i = 0; i < objArr.length; i++) {   
//                 if (objArr[i].className == arguments[0]) {   
//                     tRObj.push(objArr[i]);   
//                 }   
//             }   
//             return tRObj;   
//         }   
//     } 

//1、通过类名获取


//方法1，获取类名


function getClass(selector,context){
    //假值：underfind  、 null 、 0 、“ ”  、false  、 NaN
        context=context||document;
        if (document.getElementsByClassName) {
        return context.getElementsByClassName(selector)
    }else{
        //获取全部元素(2种方法)
        // var all=document.all;  
        var all=context.getElementsByTagName("*")
        var newarr=[];
        for (var i = 0; i < all.length; i++) {
            // "one two"  "one"
            if(check(all[i].className,selector)){ newarr.push(all[i])}
            }
        }
    return newarr
} 
    
    // "one two"  "one"
    function check(lstr,str){
        var arr=lstr.split(" ")
        for (var i = 0; i < arr.length; i++) {
           if(arr[i]==str){
            return true;
           }
        };
        return false
    }



//2、兼容的获取或者设置元素的文本内容
    // 1. 先判断浏览器
    // 2. 是获取还是设置
    // 3. 执行对应的操作

    function getText(obj,text){
         // 1. 先判断浏览器
        if (document.getElementsByClassName) {
            // 2. 是获取还是设置
            if (text==undefined) {
                return obj.textContent;
            }else{
                obj.textContent=text;
            }
        }else{
            if (text==undefined) {
                return obj.innerText;
            }else obj.innerText=text;
         }
    }

    //3、 兼容性的获取某一个对象的某一个样式的方式
    // window.getComputedStyle(one,null).width
    // one.currentStyle.width
            //one   "width"
    function getStyle(obj,attr){
        if(window.getComputedStyle){
            return window.getComputedStyle(obj,null)[attr]
        }else{
            return obj.currentStyle[attr]
        }
    }

//通过多种方式获取元素
   function $(selector,context){
    context=context||document;
    if (typeof selector=="string") {
    // div  .one #aa
    if(selector.charAt(0)=="."){
        return getClass(selector.slice(1),context)
    }
    else if (selector.charAt(0)=="#") {
        return document.getElementById(selector.slice(1))
    }else{
        return context.getElementsByTagName(selector)
    }
    }else if (typeof selector=="function") {
       addEvent(window,"load",selector);
   }
}



   function getChlid(obj){
        var childs=obj.childNodes;
        var newarr=[]
        for (var i = 0; i < childs.length; i++) {
            if(childs[i].nodeType==1){
                newarr.push(childs[i])
            }
        };
        return newarr;
   }


// 获取第一个元素子节点
function getFirst(obj){
    return getChlid(obj)[0]
}
//获取最后一个元素
function getLast(obj){
    var arr=getChlid(obj);
    return arr[arr.length-1]
}
//获取下一个元素兄弟节点
function getNext(obj){
    var next=obj.nextSibling;
    if(next==null){
        return null;
    }
    while(next.nodeType!=1){
        next=next.nextSibling
        if(next==null)
            return null;
    }
    return 
}
//获取上一个兄弟节点
function getPrevious(obj){
    var previous=obj.previousSibling;
    if(previous==null){
        return null;
    }
    while(previous.nodeType!=1){
        previous=previous.previousSibling;
        if(previous==null)
            return null;
    }
    return 
}
//讲一个元素插入到另一个元素的后面
function insertAfter(oldobj,newobj){
    var next=getNext(oldobj);
    var parent=oldobj.parentNode;
    if(next){
        parent.insertBefore(newobj,next)
    }else{
        parent.appendChild(newobj)
    }
}

function getDoc(){
  var doc=null;
  document.documentElement.scrollTop=1;
  if(document.documentElement.scrollTop==1){
    doc=document.documentElement
  }else{
    doc=document.body
  }
  return doc
}



//兼容性的绑定时间的函数
function addEvent(obj,event,callback){
      if(obj.addEventListener){
        obj.addEventListener(event,callback,false)
      }else{
        obj.attachEvent("on"+event,callback)
      }
}




//兼容性的移除绑定的事件
function removeEvent(obj,Event,callback){
            if(obj,removeEventListener){
        obj.removeEventListener(event,callback,false)  }else{
            obj.detachEvent("on"+event,callback)
        }
}






function mousewheel(obj,upfun,downfun){
if(obj.addEventListener){
    obj.addEventListener("mousewheel",scrollfun,false)
    obj.addEventListener("DOMMouseScroll",scrollfun,false)
}else{
    obj.attachEvent("onmousewheel",scrollfun)
}
function scrollfun(e){
    var ev=e||window.event;
    var dir=ev.detail||ev.wheelDelta;
    if(ev.preventDefault){
        ev.preventDefault()
    }else{
        ev.preventValue=false;
    }
    if(dir==-3||dir==120){
        upfun.call(obj,ev);
    }else if(dir==3||dir==-120){
        downfun.call(obj,ev);
    }
}
}
 function contains (parent,child) {
    if(parent.contains){
       return parent.contains(child) && parent!=child;
    }else{
      return (parent.compareDocumentPosition(child)===20);
    }
 }
 //判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
     if(getEvent(e).type=="mouseover"){
        return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
        !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
     }else{
        return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
        !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
        }
  }
//鼠标移入移除事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
      if(overfun){
        obj.onmouseover=function  (e) {
              if(checkHover(e,obj)){
                 overfun.call(obj,[e]);
              }
        }
      }
      if(outfun){
        obj.onmouseout=function  (e) {
              if(checkHover(e,obj)){
                 outfun.call(obj,[e]);
              }
        }
      }
}
  function getEvent(e){
    return e||window.event;
  }

  //求数组中的最大值
     function getMax(arr){
        var max=arr[0];
        for (var i = 0; i < arr.length; i++) {
            
                if(max<arr[i]){
                    max=arr[i];
                }
            };
         return max
        };
     
//删除数组中重复的元素
 function delRep(arr){
  var newArr=[arr[0]];

  for (var i = 0; i < arr.length; i++) {
    var flag=true;
    for (var j = 0; j < newArr.length; j++) {
       if(newArr[j]==arr[i]){
        flag=false;
        break;
    }
}if(flag){
    newArr[newArr.length]=arr[i];

      };
   };
return newArr;
}


      
//对数组里面的元素进行排序
//(冒泡排序)
function sort(arr){
    for (var i = 0; i < arr.length; i++) {
       for (var j = i+1; j < arr.length; j++) {
           if(arr[i]>arr[j]){
            var temp;
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
           }
       };
    };
    return arr;

}
//删除某个指定的元素

function delVal(arr,Val){
    var newArr=[];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i]!=Val)
             newArr[newArr.length]=arr[i];

    };
    return newArr;
}


function border(obj,time){
            obj.style.position="relative";
            var div1=document.createElement("div");
            var div2=document.createElement("div");
            var div3=document.createElement("div");
            var div4=document.createElement("div");
         div1.style.cssText="position:absolute;background:red;left:0;top:0;height:1px";
         div2.style.cssText="position:absolute;background:red;left:0;top:0;width:1px";
         div3.style.cssText="position:absolute;background:red;right:0;bottom:0;height:1px";
         div4.style.cssText="position:absolute;background:red;right:0;bottom:0;width:1px";
         obj.appendChild(div1);
         obj.appendChild(div2);
         obj.appendChild(div3);
         obj.appendChild(div4);
         var width=parseInt(getStyle(obj,"width"));
         var height=parseInt(getStyle(obj,"height"));
         obj.onmouseover=function(){

            animate(div1,{width:width},time)
            animate(div2,{height:height},time)
            animate(div3,{width:width},time)
            animate(div4,{height:height},time)

         }
          obj.onmouseout=function(){

            animate(div1,{width:0},time)
            animate(div2,{height:0},time)
            animate(div3,{width:0},time)
            animate(div4,{height:0},time)

         }
        }