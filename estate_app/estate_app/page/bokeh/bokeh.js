frappe.pages['bokeh'].on_page_load = function(wrapper) {
	new MyPage(wrapper);
}


// PAGE CONTENT
MyPage = Class.extend({
	init: function(wrapper){
		this.page = frappe.ui.make_app_page({
			parent: wrapper,
			title: 'Bokeh',
			single_column: true
		});
		// make page
		// let $btn = this.page.set_primary_action('Refresh', () => this.get_data(), 'octicon octicon-plus')
		this.make();
	},

	// make page
	make: function(){
		// grab the class
		let me = $(this);
		let scrtag = document.createElement('script');
		let scrtag1 = document.createElement('script');
		let scrtag2 = document.createElement('script');
		let scrtag3 = document.createElement('script');
		let scrtag4 = document.createElement('script');
		scrtag.src = "https://cdn.bokeh.org/bokeh/release/bokeh-2.4.1.min.js"
		scrtag.type = "text/javascript";
		document.head.appendChild(scrtag);
		// scrtag1.src = "https://cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js"
		// document.head.appendChild(scrtag1);
		// scrtag2.src = "https://cdn.datatables.net/1.11.3/js/dataTables.bootstrap4.min.js"
		// document.head.appendChild(scrtag2);
		// scrtag3.src = "https://cdn.datatables.net/fixedheader/3.2.0/js/dataTables.fixedHeader.min.js"
		// document.head.appendChild(scrtag3);
		// append script tage to page
		// push dom elemt to page
		Bokeh.set_log_level("info");
	// HTML CONTENT
	let body = `
				<div id="_content">

				</div>
	`;
	// frappe.estate_app_page = {}
	frappe.estate_app_page = {
		body: body
	}

	let content_ = `<h1>Dashboard</h1>`;

		$(frappe.render_template(body, this)).appendTo(this.page.main);
			// get data
			this.get_data()
	},
	get_data: function(){
		frappe.call({
				method: "estate_app.estate_app.page.bokeh.bokeh.render", //dotted path to server method
				callback: function(r) {
						// code snippet
						document.querySelector('#_content').innerHTML = r.message.template

				}
		})
	}
	// end of class

})
