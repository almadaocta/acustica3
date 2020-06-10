function globalGraph(RGLOBAL,IDGLOBAL,N,F){
   
    var data = [];
    var traces= [];
    var colors=[
        '#fbc02d',
        '#aa00ff',
        '#6200ea',
        '#304ffe',
        '#00b8d4',
        '#00c853',
        '#ffd600',
        '#5f4339',
        '#3e2723',
        '#455a64',
        '#212121',
        '#7cb342',
        '#d50000'
    ]
    console.log('asf')
    for ( var i=0; i<RGLOBAL.length;++i){
        console.log(RGLOBAL[i]);
        traces[i] = {
            x: N,
            y: RGLOBAL[i],
            name: IDGLOBAL[i],
            type: 'scatter',
            line: {
                color: colors[i],
            }
        };

    }
    for ( var i=0; i<traces.length;++i){
        data.push(traces[i]);
    }
    
   
    graphdiv=document.getElementById('GGlobal');
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

    Plotly.newPlot(graphdiv, data, layout);

    graphdiv.on('plotly_afterplot', function(){
        $("#GGlobal").find('.indicadoresContainer').css('display','flex');
        $('#calc').removeClass("loadingColor");
        $('#calc text').css("display","initial");
        $('.addTotal').html('Procesar<i class="fas fa-chevron-right">');
        $('.sidePanel').find(".active").removeClass('active');
 


    });    
}