from math import *
import math
def getMin(a,b):
    if a>b:
        result=b
    if a<b:
        result=a
    if a==b:
        result=a
    return result    
def getMax(a,b):
    if a>b:
        result=a
    if a<b:
        result=b
    if a==b:
        result=a     
    return result                
def rGlobal(structures,rooms,flanks,coverings):

    #Variables

    S=rooms['E'].H*rooms['E'].T
    l1=rooms['E'].T
    l2=rooms['E'].H
    
    
    #Densidades superficiales

    sP=structures['P'].sd
    sT=structures['T'].sd
    sR=structures['L1'].sd
    sL=structures['L2'].sd
    sD=structures['D'].sd

    #Flancos

    fL=flanks['L']
    fR=flanks['R']
    fP=flanks['P']
    fT=flanks['T']

    

    #Variable K

    if fL=='T':
        KLl=5.7+14.1*(log10(sD/sL))+5.7*(log10(sD/sL))**2
        KLd=5.7+5.7*(log10(sD/sL))**2
        KDl=5.7+5.7*(log10(sL/sD))**2
    else:
        KLl=8.7+17.1*(log10(sD/sL))+5.7*(log10(sD/sL))**2
        KLd=8.7+5.7*(log10(sD/sL))**2
        KDl=8.7+5.7*(log10(sL/sD))**2   

    if fR=='T':
        KRr=5.7+14.1*(log10(sD/sR))+5.7*(log10(sD/sR))**2
        KRd=5.7+5.7*(log10(sD/sR))**2
        KDr=5.7+5.7*(log10(sR/sD))**2
    else:
        KRr=8.7+17.1*(log10(sD/sR))+5.7*(log10(sD/sR))**2
        KRd=8.7+5.7*(log10(sD/sR))**2
        KDr=8.7+5.7*(log10(sR/sD))**2 

    if fT=='T':
        KTt=5.7+14.1*(log10(sD/sT))+5.7*(log10(sD/sT))**2
        KTd=5.7+5.7*(log10(sD/sT))**2
        KDt=5.7+5.7*(log10(sT/sD))**2
    else:
        KTt=8.7+17.1*(log10(sD/sT))+5.7*(log10(sD/sT))**2
        KTd=8.7+5.7*(log10(sD/sT))**2
        KDt=8.7+5.7*(log10(sT/sD))**2
    if fP=='T':
        KPp=5.7+14.1*(log10(sD/sP))+5.7*(log10(sD/sP))**2
        KPd=5.7+5.7*(log10(sD/sP))**2
        KDp=5.7+5.7*(log10(sP/sD))**2
    else:
        KPp=8.7+17.1*(log10(sD/sP))+5.7*(log10(sD/sP))**2
        KPd=8.7+5.7*(log10(sD/sP))**2
        KDp=8.7+5.7*(log10(sP/sD))**2               

    
    #R de las estructuras base

    RP=structures['P'].R
    RT=structures['T'].R
    RR=structures['L1'].R
    RL=structures['L2'].R
    RD=structures['D'].R

    

    #Deltas

    deltaEmisor=coverings[0]
    deltaReceptor=coverings[1]
    deltaD=deltaEmisor['D'].R
    deltaT=deltaEmisor['T'].R
    deltaP=deltaEmisor['P'].R
    deltaL=deltaEmisor['L2'].R
    deltaR=deltaEmisor['L1'].R
    deltad=deltaReceptor['D'].R
    deltat=deltaReceptor['T'].R
    deltap=deltaReceptor['P'].R
    deltal=deltaReceptor['L2'].R
    deltar=deltaReceptor['L1'].R

    deltaRr=[None]*len(RD)
    deltaDd=[None]*len(RD)
    deltaLl=[None]*len(RD)
    deltaPp=[None]*len(RD)
    deltaTt=[None]*len(RD)
    deltaDr=[None]*len(RD)
    deltaDl=[None]*len(RD)
    deltaDp=[None]*len(RD)
    deltaDt=[None]*len(RD)
    deltaLd=[None]*len(RD)
    deltaRd=[None]*len(RD)
    deltaPd=[None]*len(RD)
    deltaTd=[None]*len(RD)    


    #R TODOS LOS CAMINOS
    RDd=[None]*len(RD)
    RLl=[None]*len(RD)
    RRr=[None]*len(RD)
    RPp=[None]*len(RD)
    RTt=[None]*len(RD)

    RDr=[None]*len(RD)
    RDl=[None]*len(RD)
    RDp=[None]*len(RD)
    RDt=[None]*len(RD)

    RLd=[None]*len(RD)
    RRd=[None]*len(RD)
    RPd=[None]*len(RD)
    RTd=[None]*len(RD)
    
    for i in range(len(RD)):

        deltaRr[i]=getMax(deltaR[i],deltar[i])+getMin(deltaR[i],deltar[i])/2
        deltaDd[i]=getMax(deltaD[i],deltad[i])+getMin(deltaD[i],deltad[i])/2
        deltaLl[i]=getMax(deltaL[i],deltal[i])+getMin(deltaL[i],deltal[i])/2
        deltaPp[i]=getMax(deltaP[i],deltap[i])+getMin(deltaP[i],deltap[i])/2
        deltaTt[i]=getMax(deltaT[i],deltat[i])+getMin(deltaT[i],deltat[i])/2
        deltaDr[i]=getMax(deltaD[i],deltar[i])+getMin(deltaD[i],deltar[i])/2
        deltaDl[i]=getMax(deltaD[i],deltal[i])+getMin(deltaD[i],deltal[i])/2
        deltaDp[i]=getMax(deltaD[i],deltap[i])+getMin(deltaD[i],deltap[i])/2
        deltaDt[i]=getMax(deltaD[i],deltat[i])+getMin(deltaD[i],deltat[i])/2
        deltaLd[i]=getMax(deltaL[i],deltad[i])+getMin(deltaL[i],deltad[i])/2
        deltaRd[i]=getMax(deltaR[i],deltad[i])+getMin(deltaR[i],deltad[i])/2
        deltaPd[i]=getMax(deltaP[i],deltad[i])+getMin(deltaP[i],deltad[i])/2
        deltaTd[i]=getMax(deltaT[i],deltad[i])+getMin(deltaT[i],deltad[i])/2
  
        
        RDd[i]=round(RD[i]+deltaDd[i],2)
        RLl[i]=round(((RL[i]+RL[i])/2)+deltaLl[i]+KLl+10*log10(S/l2),2)
        RRr[i]=round(((RR[i]+RR[i])/2)+deltaRr[i]+KRr+10*log10(S/l2),2)
        RPp[i]=round(((RP[i]+RP[i])/2)+deltaPp[i]+KPp+10*log10(S/l1),2)
        RTt[i]=round(((RT[i]+RT[i])/2)+deltaTt[i]+KTt+10*log10(S/l1),2)

        RDr[i]=round(((RD[i]+RR[i])/2)+deltaDr[i]+KDr+10*log10(S/l2),2)
        RDl[i]=round(((RD[i]+RL[i])/2)+deltaDl[i]+KDl+10*log10(S/l2),2)
        RDp[i]=round(((RD[i]+RP[i])/2)+deltaDp[i]+KDp+10*log10(S/l1),2)
        RDt[i]=round(((RD[i]+RT[i])/2)+deltaDt[i]+KDt+10*log10(S/l1),2)

        RLd[i]=round(((RL[i]+RD[i])/2)+deltaLd[i]+KLd+10*log10(S/l2),2)
        RRd[i]=round(((RR[i]+RD[i])/2)+deltaRd[i]+KRd+10*log10(S/l2),2)
        RPd[i]=round(((RP[i]+RD[i])/2)+deltaPd[i]+KPd+10*log10(S/l1),2)
        RTd[i]=round(((RT[i]+RD[i])/2)+deltaTd[i]+KTd+10*log10(S/l1),2) 
    
    R=[None]*len(RD)
    for i in range(len(RD)):
        t=pow(10,-0.1*RDd[i])+pow(10,-0.1*RLl[i])+pow(10,-0.1*RRr[i])+pow(10,-0.1*RPp[i])+pow(10,-0.1*RTt[i])+pow(10,-0.1*RDr[i])+pow(10,-0.1*RDl[i])+pow(10,-0.1*RDp[i])+pow(10,-0.1*RDt[i])+pow(10,-0.1*RLd[i])+pow(10,-0.1*RRd[i])+pow(10,-0.1*RPd[i])+pow(10,-0.1*RTd[i])
        R[i]=round(-10*log(t,10),2)

    RGLOBAL=[RDd,RLl,RRr,RPp,RTt,RDr,RDl,RDp,RDt,RLd,RRd,RPd,RTd,R]  
    IDGLOBAL=['RDd','RLl','RRr','RPp','RTt','RDr','RDl','RDp','RDt','RLd','RRd','RPd','RTd','R']    

    return RGLOBAL,IDGLOBAL