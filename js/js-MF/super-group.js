$(function(){
    $(".super-nav li").on("tap",function(){
        $(this).children("span").addClass("nav-active").parent().siblings().children().removeClass("nav-active");
    });
    let superGrouds=new BScroll(".super-wrap",{
        scrollY: true,
        probeType: 2,
    })
    superGrouds.on("scroll",function(obt){
        console.log(obt);
    })
    let brandsList=new BScroll(".brands-list-wraps",{
        scrollX:true
    })
});