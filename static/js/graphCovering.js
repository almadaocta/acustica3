function newGraphCovering(IDr,IDp,R,N,F){
   
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

    if (IDr==0){
        ID="E"+IDp;
        graphdiv=document.getElementById(ID);
    }
    if (IDr==1){
        ID="R"+IDp;
        graphdiv=document.getElementById(ID);
    }
    



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
        $('.addcoverings').html('Continuar<i class="fas fa-chevron-right">');  

        $(".enabledClass").addClass('disabledGraph');
        $("#"+ID).removeClass('disabledGraph');
        $("#"+ID).addClass('enabledClass');

        $('.sidePanel').find(".active").removeClass('active');
        $('.sidePanel').find("#b"+ID).addClass('active');
        $('.sidePanel').find("#b"+ID).removeClass('disabled');


    });    
}