import $ from "jQuery";

//variable
var h =0,h1 =0,w =0,e =0,es =0,ht =0,he =0,b =0,et =0,ly =0,l =0,t =0;

//hidens & showders
$(document).ready(function(){
    $("#htmls").hide();
    $("#wis").hide();
    $("#ents").hide();
    $("#estrs").hide();
    $("#htms").hide();
    $("#heads").hide();
    $("#bodys").hide();
    $("#etis").hide();
    $("#lyts").hide();
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
            $("#htmls").hide(1500);
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
            $("#htmls").hide(1500);
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
            $("#htmls").hide(1500);
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
            $("#heads").show(1500);
            $("#htmls").hide(1500);
            $("#homes").hide(1500);
            $("#wis").hide(1500);
            $("#ents").hide(1500);
            $("#estrs").hide(1500);
            $("#htms").hide(1500);
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
            $("#htmls").hide(1500);
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
            ly=0;
        }else{
            $("#lyts").hide(1500);
            $("#homes").show(1500);
            ly=1;
        }  
    });
    $(document).on('click', '#list', function(){
        if (l==0){
            $("#lists").show(1500);
            l=0;
        }else{
            $("#lists").hide(1500);
            $("#homes").show(1500);
            l=1;
        }  
    });
    $(document).on('click', '#tabl', function(){
        if (t==0){
            $("#tabls").show(1500);
            t=0;
        }else{
            $("#tabls").hide(1500);
            $("#homes").show(1500);
            t=1;
        }  
    });
