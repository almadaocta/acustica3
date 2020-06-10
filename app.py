from flask import Flask, render_template, request, jsonify, session      
import time
import sys
sys.path.insert(0, 'functions')
from flask import send_from_directory
from getStructureMaterial import getStructureMaterial
from getCoveringMaterial import getCoveringMaterial
from rGlobal import rGlobal
from indicadores import get_indicadores
from indicadoresGlobal import  get_indicadores_global
from setExport import set_export
import os
from operator import add
from classes import Emisor
from classes import Receptor
from classes import Structure
from classes import Covering
from classes import Global

path = os.getcwd()
app = Flask(__name__)
app.secret_key = 'dljsaklqk24e21cjn!Ew@@dsa5'
rooms={}
structures={}
coverings=[None]*2
coverings[0]={}
coverings[0]['D']=Covering([0]*18)
coverings[0]['T']=Covering([0]*18)
coverings[0]['P']=Covering([0]*18)
coverings[0]['L2']=Covering([0]*18)
coverings[0]['L1']=Covering([0]*18)
coverings[1]={}
coverings[1]['D']=Covering([0]*18)
coverings[1]['T']=Covering([0]*18)
coverings[1]['P']=Covering([0]*18)
coverings[1]['L2']=Covering([0]*18)
coverings[1]['L1']=Covering([0]*18)
flanks={}
vector={}
settings={}
settings['filtro']='tercios'
@app.route("/")
def main():
    return render_template('home.html', reload = time.time())




@app.route('/processMeasurements') 
def setMeasurements():     
    H = float(request.args.get('H'))
    T = float(request.args.get('T'))
    L1 = float(request.args.get('L1'))
    L2 = float(request.args.get('L2'))

    rooms['E']=Emisor(H,T,L1)
    rooms['R']=Receptor(H,T,L2)

    return '', 204

@app.route('/processStructure') 
def setStructure():     
    ID = request.args.get('ID')
    M= request.args.get('M')
    structures[ID]=Structure(ID,M)  

    R,SD=getStructureMaterial(structures[ID])

    structures[ID].R=R
    structures[ID].sd=SD

    F=[100,125,160,200,250,315,400,500,630,800,1000,1250,1600,2000,2500,3150,4000,5000]

    N = [None] * len(F)
    for i in range (0,len(F)):
        N[i]=i

    get_indicadores(structures,ID,F,R)

   

    return jsonify({
        "RI"        :  R,
        "N"         :  N,
        "F"         :  F,
        "rw"        :  structures[ID].Rw,
        "stc"       :  structures[ID].STC,
    })

@app.route('/processCovering') 
def setCovering():     
    IDs = int(request.args.get('IDr'))
    IDp = request.args.get('IDp')
    C= request.args.get('C')
    R=getCoveringMaterial(C)
    coverings[IDs][IDp].R=R

    F=[100,125,160,200,250,315,400,500,630,800,1000,1250,1600,2000,2500,3150,4000,5000]

    N = [None] * len(F)
    for i in range (0,len(F)):
        N[i]=i

    get_indicadores(coverings[IDs],IDp,F,R)

   

    return jsonify({
        "R"        :  R,
        "N"         :  N,
        "F"         :  F,
        "rw"        :  coverings[IDs][IDp].Rw,
        "stc"       :  coverings[IDs][IDp].STC
    })


@app.route('/processGlobal') 
def processGlobal():

    flanks['L'] = request.args.get('FL')
    flanks['R'] = request.args.get('FR')
    flanks['P'] = request.args.get('FP')
    flanks['T'] = request.args.get('FT')

    RGLOBAL, IDGLOBAL = rGlobal(structures,rooms,flanks,coverings)
    
    F=[100,125,160,200,250,315,400,500,630,800,1000,1250,1600,2000,2500,3150,4000,5000]
    N = [None] * len(F)
    for i in range (0,len(F)):
        N[i]=i

    dataGlobal = get_indicadores_global(RGLOBAL[len(RGLOBAL) - 1 ])
    
    print(structures)
    print(rooms)

    return jsonify({
        "RGLOBAL"   :  RGLOBAL,
        "IDGLOBAL"  :  IDGLOBAL,
        "N"         :  N,
        "F"         :  F,
        "rw"        :  dataGlobal[0],
        "stc"       :  dataGlobal[1]
    })

@app.route('/export') 
def export():
    name=set_export(rooms,structures,flanks)
    
    return send_from_directory(directory='export', filename=name+'.xlsx', as_attachment=True)

if __name__ == "__main__":
    app.run(debug=True)
