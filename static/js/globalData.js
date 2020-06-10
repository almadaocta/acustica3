function setValues(ID,rw,stc){

    $("#"+ID).find('.rwValue').html(rw);
    $("#"+ID).find('.stcValue').html(stc);
}
function setGlobalValues(rw,stc){

    $("#GGlobal").find('.rwValue').html(rw);
    $("#GGlobal").find('.stcValue').html(stc);
}
function setCoveringValues(IDr,IDp,rw,stc){
    if (IDr==0){
        ID="E"+IDp;
        graphdiv=document.getElementById(ID);
    }
    if (IDr==1){
        ID="R"+IDp;
        graphdiv=document.getElementById(ID);
    }
    $("#"+ID).find('.rwValue').html(rw);
    $("#"+ID).find('.stcValue').html(stc);
}