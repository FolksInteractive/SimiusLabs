var lineData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
  {
      label: "Example dataset",
      fillColor: "rgba(220,220,220,0.5)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [65, 59, 80, 81, 56, 55, 40]
  },
  {
      label: "Example dataset",
      fillColor: "rgba(55,133,197,0.5)",
      strokeColor: "rgba(55,133,197,0.7)",
      pointColor: "rgba(55,133,197,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(55,133,197,1)",
      data: [28, 48, 40, 19, 86, 27, 90]
  }
  ]
};

var lineOptions = {
  scaleShowGridLines: true,
  scaleGridLineColor: "rgba(0,0,0,.05)",
  scaleGridLineWidth: 1,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  responsive: true,
};

Template.dashboard.rendered = function(){
  var context = this.$('#lineChart')[0].getContext('2d');
  var chart = new Chart(context).Line(lineData, lineOptions);
}