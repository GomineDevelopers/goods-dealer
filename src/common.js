const commonTools = {};

commonTools.setCookie=function(name,value,myDay){
  var oDate=new Date();
  oDate.setDate(oDate.getDate()+myDay);
  document.cookie=name+'='+value+'; expires='+oDate;
}

commonTools.getCookie=function(name){
  //document.cookie获取当前网站的所有cookie
  var arr=document.cookie.split('; ');
  for(var i=0;i<arr.length;i++){
    var arr1=arr[i].split('=');
    if(arr1[0]==name){
      return arr1[1];
    }
  }
  return '';
}

export {
  commonTools
}
