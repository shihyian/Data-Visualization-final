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

// 詳細資料的小label，滑鼠hover才看得到
var tooltip = d3
  .select('body')
  .append('div')
  .style('background', '#ffffff')
  .style('opacity', '0')
  .style('z-index', '20')
  .style('position', 'absolute')
  .style('border', 'solid')
  .style('border-width', '1px')
  .style('border-radius', '5px')
  .style('padding', '3px');

d3.csv('data2.csv').then(data => {
  //   console.log(data);
  var group = d3.group(data, d => d.kind); // 貓按kind分類

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
        (group.get(d[0]).length * x_offset +
          group.get(d[0]).length * element_width) *
        i;
      var start_y = margin2.top;
      return `translate(${start_x}, ${start_y})`;
    });
  var catKindTitle = catKind.append('text').text(d => `${d[0]} cats`);
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
    .attr('class', 'imgSize-change')
    .attr('xlink:href', d => `./image/${d.path}.jpg`)
    .attr('height', element_height)
    .attr('width', element_width);

  cat
    .append('rect')
    .attr('x', (d, i) => element_width * i + x_offset * i)
    .attr('y', margin2.top + 5)
    .attr('height', element_height)
    .attr('width', element_width)
    .style('stroke', '#69b3a2')
    .style('fill', d => `url(#catImg-${d.path})`) // 滑鼠hover顯示detail
    .on('mouseover', (event, d) => {
      // console.log(d3.pointer(event));
      tooltip.style('opacity', '1');
      d3.select(event.currentTarget) // v6不能用secelt(this)!!!
        .transition()
        .duration('50')
        .attr('opacity', '0.75');
    })
    .on('mousemove', (event, d) => {
      tooltip
        .style('left', window.event.pageX + 5 + 'px')
        .style('top', window.event.pageY + 5 + 'px')
        .html(d.path + '<br>time: ' + d.time + '<br>value: ' + d.value);
    })
    .on('mouseout', (event, d) => {
      tooltip.style('opacity', '0');
      d3.select(event.currentTarget) // v6不能用secelt(this)!!!
        .transition()
        .duration('10')
        .attr('opacity', '1');
    });
});
