const a = document.getElementById('barchart1');
new Chart(a, {
    type: 'bar',
    data: {
        labels: ['Bekasi', 'Jakarta', 'Bandung'],
        datasets: [{
            label: 'Slay',
            data: [50, 30, 25],
            borderWidth: 1,
            backgroundColor: '#E8EFCF',
        },
        {
            label: 'Manly',
            data: [30, 20, 30],
            borderWidth: 1,
            backgroundColor: '#DBA979',
        }],
        
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Survey by region'
            }
        }
    }
});

const b = document.getElementById('barchart2');
new Chart(b, {
    type: 'doughnut',
    data: {
        labels: ['Male', 'Female'],
        datasets: [{
            label: 'Friends',
            data: [70, 190],
            borderWidth: 1,
            backgroundColor: ['#A79277', '#D1BB9E']
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        },
        maintainAspectRatio: true,
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Friends'
            }
        }
    }
    
});

const c = document.getElementById('barchart3');
new Chart(c, {
    type: 'line',
    data: {
        labels: ['Q1','Q2','Q3','Q4'],
        datasets: [{
        label: 'Irham GF',
        data: [5,2,0,0],
        fill: false,
        backgroundColor: '#1C1678',
        borderColor: 'rgb(75, 192, 192)'
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'GF by Quarter'
            }
        }
    }

});

const d = document.getElementById('barchart4');
new Chart(d, {
    type: 'bar',
    data: {
        labels: ['First Accoount','Second Account'],
        datasets: [{
                label: ['Male'],
                data: [270, 10],
                backgroundColor: ['#A79277']
        },
                {
                    label: ['Female'],
                    data: [90,50],
                    backgroundColor:['#D1BB9E']
                }
            ]  
        },
            options: {
                plugins: {
                title: {
                    display: true,
                    text: 'Following Instagram'
                }
            }
        }
    }
)

const menu = document.querySelector('.menu')
const aside = document.querySelector('.aside')

menu.onclick = function () {
    aside.classList.toggle('active')
}

// eventListener

// const e = document.querySelector('.judul');
// e.addEventListener('click', function () {
//     e.style.backgroundColor = 'green';
// })

// const chart = document.querySelectorAll('.chart');
// chart.forEach(chart => {
//     chart.addEventListener('click', function () {
//         chart.style.backgroundColor = 'red';
//     });
// });

// function toggle() {
//     var blur = document.getElementById('blur')
//     blur.classList.toggle('active')
// }