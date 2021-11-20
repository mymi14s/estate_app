import frappe
from datetime import datetime
from bokeh.plotting import figure, show
from bokeh.resources import CDN
from bokeh.embed import file_html


@frappe.whitelist()
def render():
    x = [1, 2, 3, 4, 5]
    y = [6, 7, 2, 4, 5]
    # create a new plot with a title and axis labels
    p = figure(title="Simple line example", x_axis_label='x', y_axis_label='y')
    p.line(x, y, legend_label="Temp.", line_width=2)
    html = file_html(p, CDN, "my plot")

	context = {

	}
	template = frappe.render_template(
		"estate_app/estate_app/page/bokeh/index.html",
		context=context)
	return {
		'template':template,
		**context
		}
