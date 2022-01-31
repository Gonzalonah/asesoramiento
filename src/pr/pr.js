import ReactDOM from "react-dom";
import React from "react";
import $ from "jquery";

//----------------------------CSS----------------------------
import "../style.css";

//--------------------------MODULES--------------------------
import foote from "../footer.js";
import head from "../header.js";
import nav from "../nav.js";
import main from "../main.js";

//---------------------------CALLS---------------------------
foote();
head();
nav();
main();
//---------------------------OTHER---------------------------
//.........................variable..........................
var h =0,h1 =0,w =0,e =0,es =0,ht =0,he =0,b =0,et =0,ly =0,l =0,t =0,lis=0,lista=0,t1=0;

//.....................hidens & showders.....................

$(function(){
   //$("#homes").hide();
    $("#htmls").hide();
    $("#wis").hide();
    $("#ents").hide();
    $("#estrs").hide();
    $("#htms").hide();
    $("#heads").hide();
    $("#bodys").hide();
    $("#etis").hide();
    $("#lyts").hide();
    $("#tabls").hide();
    $("#pape").hide();
});

$(document).on('click', '#header', function(){
    window.location.href="../index.html";
});
    $(document).on('click', '#home', function(){
        if (h==1){
            $("#homes").show(1500);
            $("#htmls").hide(1500);
            $("#wis").hide(1500);
            $("#ents").hide(1500);
            $("#estrs").hide(1500);
            $("#htms").hide(1500);
            $("#heads").hide(1500);
            $("#bodys").hide(1500);
            $("#etis").hide(1500);
            $("#lyts").hide(1500);
            h=0;
        }else{
            $("#homes").hide(1500);

            h=1;
        }  
    });
    $(document).on('click', '#html', function(){
        if (h1==0){
            $("#htmls").show(1500);
            $("#homes").hide(1500);
            $("#wis").hide(1500);
            $("#ents").hide(1500);
            $("#estrs").hide(1500);
            $("#htms").hide(1500);
            $("#heads").hide(1500);
            $("#bodys").hide(1500);
            $("#etis").hide(1500);
            $("#lyts").hide(1500);
            h1=1;
        }else{
            $("#htmls").hide(1500);
            $("#homes").show(1500);
            h1=0;
        }  
    });
    $(document).on('click', '#wi', function(){
        if (w==0){
            $("#wis").show(1500);
            //$("#htmls").hide(1500);
            $("#homes").hide(1500);
            $("#ents").hide(1500);
            $("#estrs").hide(1500);
            $("#htms").hide(1500);
            $("#heads").hide(1500);
            $("#bodys").hide(1500);
            $("#etis").hide(1500);
            $("#lyts").hide(1500);
            w=1;
        }else{
            $("#wis").hide(1500);
            $("#homes").show(1500);
            w=0;
        }  
    });
    $(document).on('click', '#ent', function(){
        if (e==0){
            $("#ents").show(1500);
            //$("#htmls").hide(1500);
            $("#homes").hide(1500);
            $("#wis").hide(1500);
            $("#estrs").hide(1500);
            $("#htms").hide(1500);
            $("#heads").hide(1500);
            $("#bodys").hide(1500);
            $("#etis").hide(1500);
            $("#lyts").hide(1500);
            e=1;
        }else{
            $("#ents").hide(1500);
            $("#homes").show(1500);
            e=0;
        }  
    });
    $(document).on('click', '#estr', function(){
        if (es==0){
            $("#estrs").show(1500);
           // $("#htmls").hide(1500);
            $("#homes").hide(1500);
            $("#wis").hide(1500);
            $("#ents").hide(1500);
            $("#htms").hide(1500);
            $("#heads").hide(1500);
            $("#bodys").hide(1500);
            $("#etis").hide(1500);
            $("#lyts").hide(1500);
            es=0;
        }else{
            $("#estrs").hide(1500);
            $("#homes").show(1500);
            es=1;
        }  
    });
    $(document).on('click', '#htm', function(){
        if (ht==0){
            $("#htms").show(1500);
            $("#body").show(1500);
            $("#head").show(1500);
            $("#htmls").hide(1500);
            $("#homes").hide(1500);
            $("#wis").hide(1500);
            $("#ents").hide(1500);
            $("#estrs").hide(1500);
            $("#heads").hide(1500);
            $("#bodys").hide(1500);
            $("#etis").hide(1500);
            $("#lyts").hide(1500);
            ht=0;
        }else{
            $("#htms").hide(1500);
            $("#homes").show(1500);
            ht=1;
        }  
    });
    $(document).on('click', '#head', function(){
        if (he==0){
            $("#htms").show(1500);
            $("#htmls").hide(1500);
            $("#homes").hide(1500);
            $("#wis").hide(1500);
            $("#ents").hide(1500);
            $("#estrs").hide(1500);
            $("#bodys").hide(1500);
            $("#etis").hide(1500);
            $("#lyts").hide(1500);
            he=0;
        }else{
            $("#heads").hide(1500);
            $("#homes").show(1500);
            he=1;
        }  
    });
    $(document).on('click', '#body', function(){
        if (b==0){
            $("#bodys").show(1500);
            $("#htmls").hide(1500);
            $("#homes").hide(1500);
            $("#wis").hide(1500);
            $("#ents").hide(1500);
            $("#estrs").hide(1500);
            $("#htms").hide(1500);
            $("#heads").hide(1500);
            $("#etis").hide(1500);
            $("#lyts").hide(1500);
            b=0;
        }else{
            $("#bodys").hide(1500);
            $("#homes").show(1500);
            b=1;
        }  
    });
    $(document).on('click', '#eti', function(){
        if (et==0){
            $("#etis").show(1500);
            //$("#htmls").hide(1500);
            $("#homes").hide(1500);
            $("#wis").hide(1500);
            $("#ents").hide(1500);
            $("#estrs").hide(1500);
            $("#htms").hide(1500);
            $("#heads").hide(1500);
            $("#bodys").hide(1500);
            $("#lyts").hide(1500);
            et=0;
        }else{
            $("#etis").hide(1500);
            $("#homes").show(1500);
            et=1;
        }  
    });
    $(document).on('click', '#lyt', function(){
        if (ly==0){
            $("#lyts").show(1500);
            $("#htmls").hide(1500);
            $("#homes").hide(1500);
            $("#wis").hide(1500);
            $("#ents").hide(1500);
            $("#estrs").hide(1500);
            $("#htms").hide(1500);
            $("#heads").hide(1500);
            $("#bodys").hide(1500);
            $("#etis").hide(1500);
            $("#lists").hide();
            $("#list").hide(1500);
            ly=0;
        }else{
            $("#lyts").hide(1500);
            $("#homes").show(1500);
            ly=1;
        }  
    });
    $(document).on('click', '#lio', function(){
        if (lis==0){
            $("#lists").show(1500);
            $("#list").hide(1500);
            lis=1;
        }else{
            $("#lists").hide(1500);
            $("#list").show(1500);
            lis=0;
        }  
    });
    $(document).on('click', '#lid', function(){
        if (lista==0){
            $("#list").show(1500);
            $("#lists").hide(1500);
            lista=1;
        }else{
            $("#list").hide(1500);
            $("#lists").show(1500);
            lista=0;
        }  
    });
    $(document).on('click', '#tabl', function(){
        if (t==0){
            $("#tabls").show(1500);
            $("#x1").hide(1500);
            t=0;
        }else{
            $("#tabls").hide(1500);
            $("#x1").show(1500);
            t=1;
        }  
    });
    $(document).on('click', '#x', function(){
        if (t1==0){
            $("#x1").show(1500);
            $("#tabls").hide(1500);
            t1=0;
        }else{
            $("#x1").hide(1500);
            ("#tabls").show(1500);
            t1=1;
        }  
    });
    $(document).on('click', '#volv', function(){
        $("#htmls").show(1500);
        $("#bodys").hide(1500);
    })
    $(document).on('click', '#zi', function(){
        $("#htmls").show(1500);
        $("#bodys").hide(1500);
    })
    $(document).on('click', '#vol', function(){
        $("#htmls").show(1500);
        $("#htms").hide(1500);
    })
    $(document).on('click', '#z', function(){
        $("#htmls").show(1500);
        $("#htms").hide(1500);
    })

    $(document).on('mouseenter', '#papel', function(){
        $("#pape").show();
    });
    $(document).on('mouseleave', '#papel', function(){
        $("#pape").hide();
    });
    $(document).on('mouseenter', '#lapiz', function(){
        $("#lape").show();
    });
    $(document).on('mouseleave', '#lapiz', function(){
        $("#lape").hide();
    });
