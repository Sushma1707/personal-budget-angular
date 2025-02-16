import * as d3 from 'd3';
ngOnInit(): void {
  this.createChart();
}

private createChart(): void {
  const svg = d3.select('svg')
    .attr('width', 500)
    .attr('height', 300);

  svg.append('circle')
    .attr('cx', 150)
    .attr('cy', 150)
    .attr('r', 50)
    .style('fill', 'blue');
}

constructor(private dataService: DataService) {}

ngOnInit(): void {
  this.dataService.getData().subscribe((data) => {
    this.renderChart(data);
  });
}

private renderChart(data: any[]): void {
  // Use D3.js to visualize `data`
}

