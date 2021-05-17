//line
  var ctxL = document.getElementById("lineChart").getContext('2d');
  var myLineChart = new Chart(ctxL, {
    type: 'line',
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September ", "October", "November", "December"],
      datasets: [{
          label: "จำนวนผู้ติดเชื้อ",
          data: [0,20, 50, 90, 100, 90, 160, 130, 170, 190, 200, 140],
          backgroundColor: [
            'rgba(105, 0, 132, .2)',
          ],
          borderColor: [
            'rgba(200, 99, 132, .7)',
          ],
          borderWidth: 2
        },
        
      ]
    },
    options: {
      responsive: true
    }
  });
