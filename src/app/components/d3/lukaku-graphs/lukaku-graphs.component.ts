import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
	selector: 'pl-lukaku-graphs',
	templateUrl: './lukaku-graphs.component.html',
	styleUrls: ['./lukaku-graphs.component.scss']
})
export class LukakuGraphsComponent implements OnInit {

	constructor() {}

	total_min() {
		// create var for graph wrap
		let wrap = document.getElementById('wrapMinPlayed');
		// set up graph area
		let margin = {top: 20, right: 20, bottom: 30, left: 40},
    		width = wrap.clientWidth - margin.left - margin.right,
    		height = wrap.clientHeight - margin.top - margin.bottom;
		// console.log(wrap.clientWidth);
		// console.log(wrap.clientHeight);

		// append the svg object to the body of the page
		// append a 'group' element to 'svg'
		// moves the 'group' element to the top left margin
		let svg = d3.select(wrap).append("svg")
		    .attr("width", "100%")
		    .attr("height", "100%")
		  .append("g")
		    .attr("transform",
		          "translate(" + margin.left + "," + margin.top + ")");

		// set the ranges
		let x = d3.scaleBand().range([0, width]).padding(0.1);
		let y = d3.scaleLinear().range([height, 0]);

		d3.json<any[]>('../../../../assets/data/lukaku.json', function(error, data) {
			// console.log(error);
			if (error) throw error;
			// format data
			data.forEach(function(d) {
				let match_day = d.match_day;
				let min_played = d.min_played;
				let goals = d.goals;
				let goal_min = d.goal_min;
				// console.log("Match Day: " + match_day + ", " + "Minutes Played: " + min_played + ", " + "Goals: " + goals + ", " + "Goal Minute List Length: " + goal_min.length);
			});

			// Scale the range of the data in the domains
		    x.domain(data.map(function(d) { return d.match_day; }));
		    y.domain([0, d3.max(data, function(d) { return d.min_played; })]);

			// append the rectangles for the bar chart
  			svg.selectAll(".bar")
      				.data(data)
    			.enter().append("rect")
      				.attr("class", "bar")
      				.attr("x", function(d) { return x(d.match_day); })
      				.attr("width", x.bandwidth())
      				.attr("y", function(d) { return y(d.min_played); })
      				.attr("height", function(d) { return height - y(d.min_played); });

			// add the x Axis
		    svg.append("g")
		        .attr("transform", "translate(0," + height + ")")
		        .call(d3.axisBottom(x));
		    // add the y Axis
		    svg.append("g")
		        .call(d3.axisLeft(y));

			// create var for window
			let w = window;
			// add event listener for window resize
			w.addEventListener('resize', function(event) {
				// set up graph area
				let margin = {top: 20, right: 20, bottom: 30, left: 40},
					width = wrap.clientWidth - margin.left - margin.right,
					height = wrap.clientHeight - margin.top - margin.bottom;
				console.log(w);
				// Scale the range of the data in the domains
			    x.domain(data.map(function(d) { return d.match_day; }));
			    y.domain([0, d3.max(data, function(d) { return d.min_played; })]);
			});
		});
	}

	// resize


	ngOnInit() {
		this.total_min();
	}

}
