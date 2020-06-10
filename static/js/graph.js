$(document).ready(function() {
    graphdiv=document.getElementById('T');
    graphdiv2=document.getElementById('P');
    graphdiv3=document.getElementById('D');
    graphdiv4=document.getElementById('L1');
    graphdiv5=document.getElementById('L2');
    graphdiv6=document.getElementById('GGlobal');

    var data1 = [];
    var trace1 = {
        x: [50,63,80,100,125,160,200,250,315,400,500,630,800,1000,1250,1600,2000,2500,3150,4000,5000],
        y: new Array(21).fill(0),
        name: 'R',
        type: 'scatter',
        line: {
            color: 'rgb(48, 53, 159)',
        },   
    };
    data1.push(trace1);
    var layout = {
        xaxis: {
            title: {
                text: 'Frecuencia [Hz]',
                font: {
                  family: 'monospace',
                  size: 18,
                  color: '#212121'
                }
            },
        },
        yaxis:{
            title: {
                text: 'R [Db]',
                font: {
                  family: 'monospace',
                  size: 18,
                  color: '#212121'
                }
            },
        },
        paper_bgcolor: "rgba(250,250,250, 0.8)",
        plot_bgcolor: "rgba(250,250,250, 0.8)",
        showlegend: true,
        hovermode: false
    }
    Plotly.newPlot(graphdiv,data1,layout);
    Plotly.newPlot(graphdiv2,data1,layout);
    Plotly.newPlot(graphdiv3,data1,layout);
    Plotly.newPlot(graphdiv4,data1,layout);
    Plotly.newPlot(graphdiv5,data1,layout);
    Plotly.newPlot(graphdiv6,data1,layout);
});
$(document).ready(function() {
    graphdiv=document.getElementById('ET');
    graphdiv2=document.getElementById('EP');
    graphdiv3=document.getElementById('ED');
    graphdiv4=document.getElementById('EL1');
    graphdiv5=document.getElementById('EL2');
    graphdiv6=document.getElementById('RT');
    graphdiv7=document.getElementById('RP');
    graphdiv8=document.getElementById('RD');
    graphdiv9=document.getElementById('RL1');
    graphdiv10=document.getElementById('RL2');

    var data1 = [];
    var trace1 = {
        x: [50,63,80,100,125,160,200,250,315,400,500,630,800,1000,1250,1600,2000,2500,3150,4000,5000],
        y: new Array(21).fill(0),
        name: 'R',
        type: 'scatter',
        line: {
            color: 'rgb(48, 53, 159)',
        },   
    };
    data1.push(trace1);
    var layout = {
        xaxis: {
            title: {
                text: 'Frecuencia [Hz]',
                font: {
                  family: 'monospace',
                  size: 18,
                  color: '#212121'
                }
            },
        },
        yaxis:{
            title: {
                text: 'ΔR [Db]',
                font: {
                  family: 'monospace',
                  size: 18,
                  color: '#212121'
                }
            },
        },
        paper_bgcolor: "rgba(250,250,250, 0.8)",
        plot_bgcolor: "rgba(250,250,250, 0.8)",
        showlegend: true,
        hovermode: false
    }
    Plotly.newPlot(graphdiv,data1,layout);
    Plotly.newPlot(graphdiv2,data1,layout);
    Plotly.newPlot(graphdiv3,data1,layout);
    Plotly.newPlot(graphdiv4,data1,layout);
    Plotly.newPlot(graphdiv5,data1,layout);
    Plotly.newPlot(graphdiv6,data1,layout);
    Plotly.newPlot(graphdiv7,data1,layout);
    Plotly.newPlot(graphdiv8,data1,layout);
    Plotly.newPlot(graphdiv9,data1,layout);
    Plotly.newPlot(graphdiv10,data1,layout);
});

function newGraph(ID,R,N,F){
   
    var data = [];
    var trace1 = {
        x: N,
        y: R,
        name: 'R',
        type: 'scatter',
        line: {
            color: 'rgb(48, 53, 159)',
        },

        
    };
    data.push(trace1);
    graphdiv=document.getElementById(ID);
    var layout = {
        xaxis: {
            tickmode: "array",
            tickvals: N,
            ticktext: F,
            title: {
                text: 'Frecuencia [Hz]',
                font: {
                family: 'monospace',
                size: 18,
                color: '#212121'
                }
            },
        },
        yaxis:{
            title: {
                text: 'R [Db]',
                font: {
                family: 'monospace',
                size: 18,
                color: '#212121'
                }
            },
        },
        paper_bgcolor: "rgba(250,250,250, 0.8)",
        plot_bgcolor: "rgba(250,250,250, 0.8)",
        showlegend: true,
        hovermode:true
    }
    var transform = {
        type: 'filter',
        // ... the rest of your filter settings
      }

    Plotly.newPlot(graphdiv, data, layout);

    graphdiv.on('plotly_afterplot', function(){
        $("#"+ID).find('.indicadoresContainer').css('display','flex');
        $('#calc').removeClass("loadingColor");
        $('#calc text').css("display","initial");
        $('.addMaterials').html('Continuar<i class="fas fa-chevron-right">');  

        $(".enabledClass").addClass('disabledGraph');
        $("#"+ID).removeClass('disabledGraph');
        $("#"+ID).addClass('enabledClass');

        $('.sidePanel').find(".active").removeClass('active');
        $('.sidePanel').find("#b"+ID).addClass('active');
        $('.sidePanel').find("#b"+ID).removeClass('disabled');


    });    
}