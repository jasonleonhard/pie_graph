// basic characteristics of the pie graph
var width = 300,
    height = 300,
    radius = 150
    colors = d3.scale.category20b();

// labels and values as objects
var piedata = [
    {   label: "A",
        value: 10
    },{ label: "B",
        value: 20
    },{ label: "C",
        value: 40
    },{ label: "D",
        value: 80
    }
]

// return values in arch shape
var pie = d3.layout.pie()
    .value(function(d) {
        return d.value;
    })

// arc function for angles in pie shape
var arc = d3.svg.arc()
    .outerRadius(radius)

// selecting id and append svg with given values
// then append g to transform to correct location on page
// select the path of data returning an array of archs
// finally filling in with colors from d3 category20b
// and setting the attributes of d to arc
var myChart = d3.select('#pie_graph')
    .append('svg')
        .attr('width', width)
        .attr('height', height)
    .append('g')
        .attr('transform', 'translate('+(height-radius)+','+(width-radius)+')')
        .selectAll('path').data(pie(piedata))
        .enter()
    .append('path')
        .attr('fill', function(d, i) {
            return colors(i);
        })
        .attr('d', arc)
