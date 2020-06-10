
function processMeasurements(){
    $.ajax({
        url : '/processMeasurements',
        data: {
            "H":document.getElementById('height').value,
            "T":document.getElementById('width').value,
            "L1":document.getElementById('length1').value,
            "L2":document.getElementById('length2').value
        },
        success: function(data) {
            
        }
    });
}
var structureMat = {
    "T" : 99,
    "D" : 99,
    "P" : 99,
    "L2" : 99,
    "L1" : 99,
}
function processStructure(ID,M,M2,T,T2){
    structureMat[ID]=M
    $.ajax({
        url : '/processStructure',
        data: {
            "ID":ID,
            "M":M
        },
        success: function(data) {    
            newGraph(ID,data['RI'],data['N'],data['F']);
            setValues(ID,data['rw'],data['stc']);
           
        }
    });
}

var Emisor = {
    "T" : 99,
    "D" : 99,
    "P" : 99,
    "L1" : 99,
    "L2" : 99,
}
var Receptor = {
    "T" : 99,
    "D" : 99,
    "P" : 99,
    "L1" : 99,
    "L2" : 99,
}



function processCovering(IDr,IDp,C){
    if (IDr==0){
        Emisor[IDp]=C;
    }else{
        Receptor[IDp]=C;
    }
    $.ajax({
        url : '/processCovering',
        data: {
            "IDr":IDr,
            "IDp":IDp,
            "C":C
        },
        success: function(data) {    
            newGraphCovering(IDr,IDp,data['R'],data['N'],data['F']);
            setCoveringValues(IDr,IDp,data['rw'],data['stc']);
        }
    });
}
function addTotal(FL,FR,FT,FP){
    $.ajax({
        url : '/processGlobal',
        data: {
            "FL":FL,    
            "FR":FR,
            "FT":FT,
            "FP":FP
        },
        success: function(data) {
           
            globalGraph(data['RGLOBAL'],data['IDGLOBAL'],data['N'],data['F']);
            setGlobalValues(data['rw'],data['stc']);
            

        }
    });
}


    
