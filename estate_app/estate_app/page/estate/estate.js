frappe.pages['estate'].on_page_load = function(wrapper) {
	new MyPage(wrapper);
}

// PAGE CONTENT
MyPage = Class.extend({
	init: function(wrapper){
		this.page = frappe.ui.make_app_page({
			parent: wrapper,
			title: 'Estate Home',
			single_column: true
		});
		// make page
		this.make();
	},

	// make page
	make: function(){
		// grab the class
		let me = $(this);

		// money formatter
		let currency = function currency(n){
			let money = new Intl.NumberFormat('en-NG',
				{ style: 'currency', currency: 'NGN' }).format(n);
			return money
		}

		// get total price
		let total = function(){
			frappe.call({
            method: "estate_app.estate_app.page.estate.estate.get_total_price", //dotted path to server method
            callback: function(r) {
                // code snippet
								console.log(r);
								// set price data
								$("#total-price")[0].innerText = currency(r.message);
            }
        })
		}

		// GRAPH CALL
		let status = function(){
			frappe.call({
            method: "estate_app.estate_app.page.estate.estate.get_property_price_by_status", //dotted path to server method
            callback: function(r) {
                // code snippet
								console.log(r);
								// let price_tuple = ()
								let statuses = []
								let prices = []
								let message = r.message
								message.forEach((item) => {
									statuses.push(item[0]);
									prices.push(item[1]);
									// price_tuplepush(item[1])
								});;
								// console.log(statuses, prices)
								// start chart
								let chart = new frappe.Chart( "#frost-chart", { // or DOM element
								data: {
								labels: statuses,

								datasets: [
									{
										name: statuses[0], chartType: 'bar',
										values: [prices[0],  0,  0]
									},
									{
										name: statuses[1], chartType: 'bar',
										values: [0, prices[1], 0]
									},
									{
										name: statuses[2], chartType: 'bar',
										values: [0, 0, prices[2]]
									}
								],

								yMarkers: [{ label: "Marker", value: 80000000,
									options: { labelPos: 'left' }}],
								yRegions: [{ label: "Region", start: 0,
									end: 100000000,
									options: { labelPos: 'right' }}]
								},

								title: "Estate Price Chart",
								type: 'axis-mixed', // or 'bar', 'line', 'pie', 'percentage'
								height: 500,
								colors: ['red', 'blue', 'green'],

								tooltipOptions: {
									formatTooltipX: d => (d + '').toUpperCase(),
									formatTooltipY: d => d + ' pts',
								}
								});
								console.log('ready')
								alert('Ready')
								// end chart
          }
        })
		}

		// chart
		// let page_chart = function(){
		// 	let chart = new frappe.Chart( "#frost-chart", { // or DOM element
		// 	data: {
		// 	labels: ["12am-3am", "3am-6am", "6am-9am", "9am-12pm",
		// 		"12pm-3pm", "3pm-6pm", "6pm-9pm", "9pm-12am"],
		//
		// 	datasets: [
		// 		{
		// 			name: "Some Data", chartType: 'bar',
		// 			values: [25, 40, 30, 35, 8, 52, 17, -4]
		// 		},
		// 		{
		// 			name: "Another Set", chartType: 'bar',
		// 			values: [25, 50, -10, 15, 18, 32, 27, 14]
		// 		},
		// 		{
		// 			name: "Yet Another", chartType: 'bar',
		// 			values: [15, 20, -3, -15, 58, 12, -17, 37]
		// 		}
		// 	],
		//
		// 	yMarkers: [{ label: "Marker", value: 70,
		// 		options: { labelPos: 'left' }}],
		// 	yRegions: [{ label: "Region", start: -10, end: 50,
		// 		options: { labelPos: 'right' }}]
		// 	},
		//
		// 	title: "Estate Price Chart",
		// 	type: 'axis-mixed', // or 'bar', 'line', 'pie', 'percentage'
		// 	height: 300,
		// 	colors: ['red', 'blue', 'green'],
		//
		// 	tooltipOptions: {
		// 		formatTooltipX: d => (d + '').toUpperCase(),
		// 		formatTooltipY: d => d + ' pts',
		// 	}
		//   });
		// 	// chart.export();
		//
		// }
		// push dom elemt to page
		$(frappe.render_template(frappe.estate_app_page.body, this)).appendTo(this.page.main)

		// execute methods
		total();
		status()
		// page_chart();
		// refresh total
		document.querySelector("#refresh-total").addEventListener('click',
		()=>{
			console.log("Refresh clicked")
			total();
		})

	}

	// end of class
})

// HTML CONTENT

let body = `
		<div class="widget-group ">
				<div class="widget-group-head">

					<div class="widget-group-control"></div>
				</div>
				<div class="widget-group-body grid-col-3">
				<div class="widget         widget-shadow    number-widget-box" data-widget-name="Total Declaration Submitted">
			<div class="widget-head">
				<div>
					<div class="widget-title ellipsis">
					<div class="number-label text-danger">Total Property Price</div></div>
					<div class="widget-subtitle"></div>
				</div>
				<div class="widget-control"><div class="card-actions dropdown pull-right">
				<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				...
				</a>
				<ul class="dropdown-menu" style="max-height: 300px; overflow-y: auto;">
					<li class="dropdown-item">
									<a data-action="action-refresh" id="refresh-total">Refresh</a>
								</li><li class="dropdown-item">
									<a data-action="action-edit">Edit</a>
								</li>
				</ul>
			</div></div>
			</div>
			<div class="widget-body"><div class="widget-content">
				<div class="number" style="color:undefined" id="total-price">
					0
				</div>
				<div class="card-stats grey-stat">
				<span class="percentage-stat-area">

					<span class="percentage-stat">
						NaN %
					</span>
				</span>
				<span class="stat-period text-muted">
					since last month
				</span>
			</div></div></div>
		    <div class="widget-footer">
		    </div>
		</div><div class="widget         widget-shadow    number-widget-box" data-widget-name="Total Salary Structure">
			<div class="widget-head">
				<div>
					<div class="widget-title ellipsis"><div class="number-label">Total Salary Structure</div></div>
					<div class="widget-subtitle"></div>
				</div>
				<div class="widget-control"><div class="card-actions dropdown pull-right">
				<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				...
				</a>
				<ul class="dropdown-menu" style="max-height: 300px; overflow-y: auto;">
					<li class="dropdown-item">
									<a data-action="action-refresh">Refresh</a>
								</li><li class="dropdown-item">
									<a data-action="action-edit">Edit</a>
								</li>
				</ul>
			</div></div>
			</div>
			<div class="widget-body"><div class="widget-content">
				<div class="number" style="color:undefined">0</div>
				<div class="card-stats grey-stat">
				<span class="percentage-stat-area">

					<span class="percentage-stat">
						NaN %
					</span>
				</span>
				<span class="stat-period text-muted">
					since last month
				</span>
			</div></div></div>
		    <div class="widget-footer">
		    </div>
		</div><div class="widget         widget-shadow    number-widget-box" data-widget-name="Total Incentive Given(Last month)">
			<div class="widget-head">
				<div>
					<div class="widget-title ellipsis"><div class="number-label">Total Incentive Given(Last month)</div></div>
					<div class="widget-subtitle"></div>
				</div>
				<div class="widget-control"><div class="card-actions dropdown pull-right">
				<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				...
				</a>
				<ul class="dropdown-menu" style="max-height: 300px; overflow-y: auto;">
					<li class="dropdown-item">
									<a data-action="action-refresh">Refresh</a>
								</li><li class="dropdown-item">
									<a data-action="action-edit">Edit</a>
								</li>
				</ul>
			</div></div>
			</div>
			<div class="widget-body"><div class="widget-content">
				<div class="number" style="color:undefined">₦ 0.00 </div>
				<div class="card-stats grey-stat">
				<span class="percentage-stat-area">

					<span class="percentage-stat">
						NaN %
					</span>
				</span>
				<span class="stat-period text-muted">
					since last month
				</span>
			</div></div></div>
		    <div class="widget-footer">
		    </div>
		</div><div class="widget         widget-shadow    number-widget-box" data-widget-name="Total Outgoing Salary(Last month)">
			<div class="widget-head">
				<div>
					<div class="widget-title ellipsis"><div class="number-label">Total Outgoing Salary(Last month)</div></div>
					<div class="widget-subtitle"></div>
				</div>
				<div class="widget-control"><div class="card-actions dropdown pull-right">
				<a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				...
				</a>
				<ul class="dropdown-menu" style="max-height: 300px; overflow-y: auto;">
					<li class="dropdown-item">
									<a data-action="action-refresh">Refresh</a>
								</li><li class="dropdown-item">
									<a data-action="action-edit">Edit</a>
								</li>
				</ul>
			</div></div>
			</div>
			<div class="widget-body"><div class="widget-content">
				<div class="number" style="color:undefined">₦ 0.00 </div>
				<div class="card-stats grey-stat">
				<span class="percentage-stat-area">

					<span class="percentage-stat">
						NaN %
					</span>
				</span>
				<span class="stat-period text-muted">
					since last month
				</span>
			</div></div></div>
		    <div class="widget-footer">
		    </div>
		</div></div>
			</div>
			<div id="frost-chart"></div>
`;
// frappe.estate_app_page = {}
frappe.estate_app_page = {
	body: body
}
