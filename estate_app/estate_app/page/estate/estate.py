import frappe

@frappe.whitelist()
def get_total_price():
    total = frappe.db.sql("""SELECT SUM(grand_total) as total FROM `tabProperty`""", as_dict=True)[0].total
    return total 
