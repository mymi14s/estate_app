# Copyright (c) 2013, Anthony Emmanuel (@Ghorz) and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
from frappe import _
import frappe

def execute(filters=None):
	return get_columns(), get_data(filters)

def get_data(filters):
	_from, to = filters.get('from'), filters.get('to') # date range
	# conditions
	conditions = " AND 1=1 "
	if(filters.get('property')):conditions += f" AND name LIKE '%{filters.get('property')}' "
	if(filters.get('agent')):conditions += f" AND agent='{filters.get('agent')}' "
	if(filters.get('status')):conditions += f" AND status='{filters.get('status')}' "

	# sql query
	data = frappe.db.sql(f"""SELECT name, property_name, address, property_type,
	 	status, property_price, discount, grand_total, agent, agent_name FROM
		 `tabProperty` WHERE (creation BETWEEN '{_from}' AND '{to}') {conditions};""")
	return data


def get_columns():
	return [
		"ID:Link/Property:70",
		"Property Name:Data:150",
		"Address:Data:150",
		"Type:Data:50",
		"Status:Data:80",
		"Price:Currency:100",
		"Discount:Percent:20",
		"Grand Total:Currency:100",
		"Agent:Data:100",
		"Agent Name:Data:150",
	]
