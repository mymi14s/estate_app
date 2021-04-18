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
		let $new = this.page.set_primary_action('New', () => create_new(), 'octicon octicon-plus')
		let $refresh = this.page.set_secondary_action('Refresh', () => refresh(), 'octicon octicon-sync')
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
		// push dom elemt to page
		$(frappe.render_template(frappe.estate_app_page.body, this)).appendTo(this.page.main)

		// execute methods
		total();
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
`;
// frappe.estate_app_page = {}
frappe.estate_app_page = {
	body: body
}
