// set the dimensions and margins of the graph
const margin2 = { top: 10, right: 30, bottom: 30, left: 60 },
  width2 = 560 - margin2.left - margin2.right,
  height2 = 500 - margin2.top - margin2.bottom;

// offset of every cat
const x_offset = 10;
const y_offset = 10;
const element_width = 30;
const element_height = 30;

// append the svg object to the body of the page
const catsvg = d3
  .select('#category')
  .append('svg')
  .attr('width', width2 + margin2.left + margin2.right)
  .attr('height', height2 + margin2.top + margin2.bottom)
  .append('g')
  .attr('transform', `translate(${margin2.left}, ${margin2.top})`);

d3.csv('data2.csv').then(data => {
  //   console.log(data);
  var group = d3.group(data, d => d.kind);

  console.log(group.values());

  var category_block = catsvg.append('g').attr('id', 'category-block');

  var catKind = category_block
    .selectAll('block')
    .data(group)
    .enter()
    .append('g')
    .attr('id', d => `${d[0]}`)
    .attr('transform', (d, i) => {
      var start_x =
        margin2.left +
        (group.get(d[0]).length * x_offset +
          group.get(d[0]).length * element_width) *
          i;
      var start_y = margin2.top;
      return `translate(${start_x}, ${start_y})`;
    });
  var catKingTitle = catKind.append('text').text(d => `${d[0]} cats`);
  var cat = catKind
    .selectAll('cat')
    .data(d => group.get(d[0]))
    .enter()
    .append('g')
    .attr('id', d => `cat-${d.path}`);

  // image
  var cat_defs = cat.append('svg:defs');

  cat_defs
    .append('svg:pattern')
    // .data(d => group.get(d[0])) // 沿用前面cat的
    .attr('id', d => `catImg-${d.path}`)
    .attr('patternUnits', 'userSpaceOnUse')
    .attr('height', element_height)
    .attr('width', element_width)
    .attr('x', (d, i) => element_width * i + x_offset * i)
    .attr('y', margin2.top + 5)
    .append('svg:image')
    .attr('xlink:href', d => `./image/${d.path}.jpg`)
    .attr('height', element_height)
    .attr('width', element_width);

  var catImg = cat
    .append('rect')
    .attr('x', (d, i) => element_width * i + x_offset * i)
    .attr('y', margin2.top + 5)
    .attr('height', element_height)
    .attr('width', element_width)
    .style('stroke', '#69b3a2')
    .style('fill', d => `url(#catImg-${d.path})`);
});
