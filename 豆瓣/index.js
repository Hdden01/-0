$(function(){
    $('.switch-menu span').click(function(e){
        // 排他思想设置当前菜单样式  其它菜单移除
        $(".switch-menu span").eq($(this).index()).addClass("select").siblings().removeClass('select');
        //indx是下标
        $(".hidden").hide().eq($(this).index()).show();
    })
    // 打开盒子
    $('.selected').click(function (e) { 
        $('.codes').css('display','block');
     })
    //  点击手机号变色
     $('ul .clearfix').click(function(){
        $('ul .clearfix').eq($(this).index()).addClass('colorFont').siblings().removeClass('colorFont');
     })
    //  关闭盒子
     $('.title .btn').click(function (e) {
        $('.codes').css('display','none');
       })
        $('input').change(function(){
            $('.btn').removeAttr('disabled');
        }) 

        $('.change i').click(function(e){
            // 排他思想设置当前菜单样式  其它菜单移除
            $(".change i").eq($(this).index()).removeClass('icon').siblings().addClass("icon");
            $(".hidden1").show().eq($(this).index()).hide();
            // if($('.change i').attr('class')=='icon icon-qrcode'){
                
            // }else{
            //     $(".change i").eq($(this).index()).addClass("icon-qrcode").removeClass('icon-cp');
            // }
          
            // //indx是下标
            // $(".hidden").hide().eq($(this).index()).show();
        })
    
})
// var div = document.getElementsByClassName("switch-menu")[0];
// var child=div.children;
// var sib = div.children.length;
// div.onclick = function (e) {
//     var event = e || window.Event;
//     var target = e.target || event.srcElement;
//     for (var i = 0; i < sib; i++) {
//         child[i].className = "";
//         child[i].className="float-left"
//     }
// target.className="float-left select";


// }