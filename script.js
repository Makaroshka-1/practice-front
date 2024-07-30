document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('myLineChart').getContext('2d');
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2,
                    fill: false,
                    lineTension: 0 // Ensures the line is straight
                },
                {
                    label: 'Dataset 2',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2,
                    fill: false,
                    lineTension: 0 // Ensures the line is straight
                }
            ]
        },
         options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        legend: {
                            display: true,
                            position: 'bottom', // Position the legend below the chart
                        }
                    }
                }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('accgraph').getContext('2d');
    var accgraph = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2,
                    fill: false,
                    lineTension: 0 
                },
                {
                    label: 'Dataset 2',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 2,
                    fill: false,
                    lineTension: 0 // Ensures the line is straight
                }
            ]
        },
         options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        legend: {
                            display: true,
                            position: 'bottom', // Position the legend below the chart
                        }
                    }
                }
    });
});

document.getElementById('firstSelect').addEventListener('change', function() {
    var secondSelect = document.getElementById('secondSelect');
    if (this.value) {
        secondSelect.disabled = false;
    } else {
        secondSelect.disabled = true;
    }
});
