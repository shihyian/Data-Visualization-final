// set the dimensions and margins of the graph
const margin = { top: 10, right: 30, bottom: 30, left: 60 },
  width = 560 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3
  .select('#my_dataviz')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .attr('pointer-events', 'all')
  .append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

// 詳細資料的小label，滑鼠hover才看得到
var tooltip2 = d3
  .select('body')
  .append('div')
  .style('background', '#ffffff')
  .style('opacity', '0')
  .style('z-index', '100')
  .style('position', 'absolute')
  .style('border', 'solid')
  .style('border-width', '1px')
  .style('border-radius', '5px')
  .style('padding', '3px');

//Read the data
d3.csv('data2.csv').then(function (data) {
  // console.log(data);
  // Add X axis
  const x = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(
        data.map(d => {
          return +d.time;
        })
      ),
    ])
    .range([0, width]);

  svg
    .append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(x));

  // Add Y axis
  const y = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(
        data.map(function (d) {
          return +d.value;
        })
      ),
    ])
    .range([height, 0]);
  svg.append('g').call(d3.axisLeft(y));

  // Add data points
  var outerShape = svg
    .append('g')
    .attr('id', 'data-points')
    .selectAll('dot')
    .data(data)
    .enter()
    .append('g')
    .attr('pointer-events', 'all');

  var dataRect = outerShape
    .append('rect')
    .attr('id', d => `${d.path}`)
    .attr('x', function (d) {
      return x(d.time);
    })
    .attr('y', function (d) {
      return y(d.value);
    })
    .attr('height', 20)
    .attr('width', 20)
    .style('stroke', '#69b3a2')
    // 滑鼠hover顯示詳細資料
    .on('mouseover', (event, d) => {
      // console.log(d3.pointer(event));
      tooltip2.style('opacity', '1');
      d3.select(event.currentTarget) // v6不能用secelt(this)!!!
        .transition()
        .duration('50')
        .attr('opacity', '0.75');
    })
    .on('mousemove', (e, d) => {
      tooltip2
        .style('left', window.event.pageX + 5 + 'px')
        .style('top', window.event.pageY + 5 + 'px')
        .html(d.path + '<br>time: ' + d.time + '<br>value: ' + d.value);
    })
    .on('mouseout', (event, d) => {
      tooltip2.style('opacity', '0');
      d3.select(event.currentTarget) // v6不能用secelt(this)!!!
        .transition()
        .duration('10')
        .attr('opacity', '1');
    });

  var innerImg = outerShape.append('g');

  // Add filling definition
  var defs = innerImg.append('svg:defs');
  defs
    .append('svg:pattern')
    .data(data)
    .attr('id', d => `image-${d.path}`)
    .attr('patternUnits', 'userSpaceOnUse')
    .attr('height', 20)
    .attr('width', 20)
    .attr('x', d => x(d.time))
    .attr('y', d => y(d.value))
    .append('svg:image')
    .attr('xlink:href', d => `./image/${d.path}.jpg`)
    .attr('height', 20)
    .attr('width', 20);

  // fill image into every rect
  dataRect.data(data).style('fill', d => `url(#image-${d.path})`);
});
