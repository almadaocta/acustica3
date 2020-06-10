from math import *
import math

def get_rw(Ralt): 

    R=[]

    RefCurve=[33,36,39,42,45,48,51,52,53,54,55,56,56,56,56,56]        
    for i in range(len(RefCurve)):
        R.append(Ralt[i])

    R=[round(num, 1) for num in R] 
    
    #Adaptación curva
    difference=[]
    for i in range (len(RefCurve)):
        localDiff=RefCurve[i]-R[i]
        if localDiff>0:
            difference.append(localDiff)
        else:
            difference.append(0)

    success=0

    
        
    if sum(difference)<32:
        while success==0:
            for i in range (len(RefCurve)):
                RefCurve[i]=RefCurve[i]+1
            difference=[]
            for i in range (len(RefCurve)):
                localDiff=RefCurve[i]-R[i]
                if localDiff>0:
                    difference.append(localDiff)
                else:
                    difference.append(0)
            if sum(difference)>32:
                for i in range (len(RefCurve)):
                    RefCurve[i]=RefCurve[i]-1
                success=1
    if sum(difference)>32:
        while success==0:
            for i in range (len(RefCurve)):
                RefCurve[i]=RefCurve[i]-1
            difference=[]
            for i in range (len(RefCurve)):
                localDiff=RefCurve[i]-R[i]
                if localDiff>0:
                    difference.append(localDiff)
                else:
                    difference.append(0)    
            if sum(difference)<32:
                success=1
    
    difference=[]
    for i in range (len(RefCurve)):
        localDiff=RefCurve[i]-R[i]
        if localDiff>0:
            difference.append(localDiff)
        else:
            difference.append(0)

    
    rw=RefCurve[7]
    
    return RefCurve,rw


def get_stc(Ralt): 

    R=[]
    filtro='tercios'
    if filtro=='octava':
        RefCurve=[36,45,52,55,56]
        for i in range(len(RefCurve)):
            R.append(Ralt[i+1])
    else:
        RefCurve=[36,39,42,45,48,51,52,53,54,55,56,56,56,56,56,56]        
        for i in range(len(RefCurve)):
            R.append(Ralt[i+1])

    R=[round(num, 0) for num in R] 
    

    #Adaptación curva
    difference=[]
    for i in range (len(RefCurve)):
        localDiff=RefCurve[i]-R[i]
        if localDiff>0:
            difference.append(localDiff)
        else:
            difference.append(0)
    success=0

    if filtro=='octava':
        if sum(difference)<10 and max(difference)<8:
            while success==0:
                for i in range (len(RefCurve)):
                    RefCurve[i]=RefCurve[i]+1
                difference=[]
                for i in range (len(RefCurve)):
                    localDiff=RefCurve[i]-R[i]
                    if localDiff>0:
                        difference.append(localDiff)
                    else:
                        difference.append(0)
                if sum(difference)>10 or max(difference)>8:
                    for i in range (len(RefCurve)):
                        RefCurve[i]=RefCurve[i]-1
                    success=1
        else:
            while success==0:
                for i in range (len(RefCurve)):
                    RefCurve[i]=RefCurve[i]-1
                difference=[]
                for i in range (len(RefCurve)):
                    localDiff=RefCurve[i]-R[i]
                    if localDiff>0:
                        difference.append(localDiff)
                    else:
                        difference.append(0)
                if sum(difference)<10 and max(difference)<8:
                    success=1
    else:    
        if sum(difference)<32 and max(difference)<=8:
            while success==0:
                for i in range (len(RefCurve)):
                    RefCurve[i]=RefCurve[i]+1
                difference=[]
                for i in range (len(RefCurve)):
                    localDiff=RefCurve[i]-R[i]
                    if localDiff>0:
                        difference.append(localDiff)
                    else:
                        difference.append(0)
                if sum(difference)>32 or max(difference)>8:
                    for i in range (len(RefCurve)):
                        RefCurve[i]=RefCurve[i]-1
                    success=1
        else:
            while success==0:
                for i in range (len(RefCurve)):
                    RefCurve[i]=RefCurve[i]-1
                difference=[]
                for i in range (len(RefCurve)):
                    localDiff=RefCurve[i]-R[i]
                    if localDiff>0:
                        difference.append(localDiff)
                    else:
                        difference.append(0)
                if sum(difference)<32 and max(difference)<8:
                    success=1

    difference=[]
    for i in range (len(RefCurve)):
        localDiff=RefCurve[i]-R[i]
        if localDiff>0:
            difference.append(localDiff)
        else:
            difference.append(0)


    if filtro=='octava':
        stc=RefCurve[2]
    else:    
        stc=RefCurve[7]
    
    return RefCurve,stc


def get_indicadores_global(RiI):

    filtro='tercios'
    ReportVector=[]
    Ralt=[]
    for i in range(0,17):
        Ralt.append(RiI[i])

    rwCurve,rw=get_rw(Ralt)
    StcCurve,stc=get_stc(Ralt)

    dataGlobal=[rw,stc]
  

    return dataGlobal




