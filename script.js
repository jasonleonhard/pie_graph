// basic characteristics
var width = 300,
    height = 300,
    radius = 150
    // colors = d3.scale.category20b();                                    // using d3 colors
    // colors = d3.scale.ordinal().range(['blue','green','red','purple']); // using simple colors
    colors = d3.scale.ordinal()                                            // using hex colors
        // .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#D0743c", "#ff8c00"]);
        .range(['#ede7f6','#d1c4e9','#b39ddb','#9575cd','#7e57c2','#673ab7','#5e35b1','#512da8','#4527a0']);

// labels and values as objects
var piedata = [
    {   label: "A",
        value: 10
    },{ label: "B",
        value: 20
    },{ label: "C",
        value: 40
    },{ label: "D",
        value: 80 }
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
        .append('g')
            .attr('class', 'slice')

//
var slices = d3.selectAll('g.slice')
    .append('path')
        .attr('fill', function(d, i) {
            return colors(i);
        })
        .attr('d', arc)

//
var text = d3.selectAll('g.slice')
    .append('text')
        .text(function(d, i) {
            return d.data.label;
        })
        .attr('text-anchor', 'middle')
        .attr('class', 'text')          // class added, then css styling
        // .attr('fill', 'white')       // hard coded css by js
        // .attr('font-weight', 'bold')
        .attr('transform', function(d) {
            d.innerRadius = 100;     // close to edge label
            // d.innerRadius = 20;         // centered label
            d.outerRadius = radius;
            return 'translate('+ arc.centroid(d)+')'
        })


