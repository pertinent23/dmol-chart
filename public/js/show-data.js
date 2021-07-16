const Colors = {
    index: 1 + 0.1,
    yellow: "#E6BD84",
    blue: "#36A4E5",
    pink: "#F9896B",
    orange: "#F7931A",
    text: "#999999",
    dark: "rgba( 19, 21, 27, 1 )",
    background: "rgba( 33, 34, 45, 1 )",
    gradient( context ) {
        const 
            gradient = context.createLinearGradient( 0, 0, 200, 200 );
                gradient.addColorStop( 0.3, Colors.yellow );
                gradient.addColorStop( 0.7, Colors.orange );
        return gradient;
    }
};
const Utils = {
    getContext( canvas ) {
        return canvas.getContext( '2d' );
    },
    showDoughnutGraph( canvas, data ) {
        const 
            context = this.getContext( canvas ),
            config = {
                type: 'doughnut',
                data: {
                    min: 0,
                    max: 250,
                    datasets: [ {
                        data: data,
                        backgroundColor: [ Colors.background, Colors.gradient( context ) ],
                        borderColor: "transparent",
                    } ]
                },
                options: {
                    responsive: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Doughnut',
                            color: Colors.text
                        }
                    }
                },
            };
        return new Chart(
            context, 
            config
        );
    },
    showPolarGraph( canvas, data ) {
        const 
            context = this.getContext( canvas ),
            config = {
                type: 'polarArea',
                data: {
                    datasets: [ {
                        data: data,
                        backgroundColor: Colors.gradient( context ),
                        borderColor: Colors.dark,
                        borderWidth: 3
                    } ],
                    labels: data,
                },
                options: {
                    scales: {
                        r: { display: false },
                    },
                    responsive: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                        title: {
                            display: true,
                            text: 'Polar',
                            color: Colors.text
                        }
                    }
                },
            };
        return new Chart(
            context, 
            config
        );
    },
    showBarGraph( canvas, data ) {
        const 
            context = this.getContext( canvas ),
            config = {
                type: 'bar',
                data: {
                    datasets: [ {
                        data: data,
                        backgroundColor: Colors.gradient( context ),
                        borderColor: Colors.dark,
                        borderWidth: 3
                    } ],
                    labels: data,
                },
                options: {
                    responsive: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                        title: {
                            display: true,
                            text: 'bar',
                            color: Colors.text
                        }
                    }
                },
            };
        return new Chart(
            context, 
            config
        );
    },
    showPointGraph( canvas, data ) {
        const 
            context = this.getContext( canvas ),
            config = {
                type: 'line',
                data: {
                    datasets: [ {
                        data: data,
                        backgroundColor: Colors.gradient( context ),
                        borderColor: Colors.dark,
                        fill: true
                    } ],
                    labels: data,
                },
                options: {
                    interaction: {
                        mode: 'nearest',
                        axis: 'x',
                        intersect: false
                    },
                    responsive: false,
                    plugins: {
                        legend: {
                            display: false,
                        },
                        title: {
                            display: true,
                            text: 'line',
                            color: Colors.text
                        }
                    }
                },
            };
        return new Chart(
            context, 
            config
        );
    }
};

window.logData = function ( data ) {
    return Digital( function ( $ ) {
        const 
            doughnut = $( '#doughnut' ),
            polar = $( '#polar' ),
            bar = $( '#bar' ),
            point = $( '#point' );
            Utils.showDoughnutGraph( doughnut, data.doughnut );
            Utils.showPolarGraph( polar, data.polar );
            Utils.showBarGraph( bar, data.bar );
            Utils.showPointGraph( point, data.point );
        return this;
    } );  
};