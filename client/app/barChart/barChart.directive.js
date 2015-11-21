/**
* @desc related media directive
* @example <related-media></related-media>
*/
angular
    .module('rtsHackdaysApp')
    .directive('barChart', barChart);

function barChart() {
    var directive = {
        templateUrl: 'app/barChart/barChart.html',
        restrict: 'EA',
        scope: {

            label:  '=',
            series: '=',
            name:   '=',
            height: '=',
            width:  '=',
        },
        controller: BarChartCtrl
    };
    return directive;

}

BarChartCtrl.$inject = ['$scope'];

function BarChartCtrl($scope) {

    var height      = $scope.height;
    var width       = $scope.width;
    var data        = $scope.series;
    var str         = $scope.label;
    var id          = ".bar-chart";

    console.log(str);
    var y = d3.scale.linear()
              .range([height, 0]);

    var chart = d3.select(id)
        .attr("width", width)
        .attr("height", height);

    y.domain([0, d3.max(data)]);

    var barWidth = width / data.length;

    var bar = chart.selectAll("g")
      .data(data)
      .enter().append("g")
      .attr("transform", function(d, i) { return "translate(" + i * barWidth + ",0)"; });

    bar.append("rect")
      .attr("y", function(d) { return y(d); })
      .attr("height", function(d) { return height - y(d); })
      .attr("width", barWidth - 1)
      .attr("title", function(d, i) { return (i+1) + " " + str + ": " +d + " article"; });

    
      
}