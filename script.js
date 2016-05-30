var data = {"labels": ["23 May", "24 May", "25 May", "26 May", "27 May", "28 May", "29 May"], "datasets": [{"languages": [[], [], [], [], ["JavaScript", "Other", "PHP"], ["JavaScript", "HTML", "JSON"], ["PHP", "JavaScript", "HTML"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["0 secs", "0 secs", "0 secs", "0 secs", "5 hrs 27 mins", "10 hrs 36 mins", "2 hrs 20 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [0.0, 0.0, 0.0, 0.0, 5.483888888888889, 10.603333333333333, 2.3741666666666665], "label": "Dataset"}]};
var totalTime = "18 hours 27 minutes";
var languages = ["JavaScript", "PHP", "HTML"];
var ctx = document.getElementById("chart").getContext("2d");
var myLineChart = new Chart(ctx).Line(data, {
  tooltipTemplate: function(valuesObject){
    var label = valuesObject.label;
    var idx = data.labels.indexOf(label);
    var result = data.datasets[0].time[idx];
    if (data.datasets[0].languages[idx].length !== 0)
      result += " [" + data.datasets[0].languages[idx].join(", ") + "]"
    return result;
  }
});
document.getElementById("summary").innerHTML = "I have written code for " + totalTime + " in the last week in mostly " + languages.join(", ") + ".";
