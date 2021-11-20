import frappe

def get_context(context):
    context.title = 'Frappe-Vue'
    return context

@frappe.whitelist(allow_guest=True)
def get_properties():
    return frappe.db.sql("""
        SELECT name, property_name, property_type, image, address, city
        FROM `tabProperty` LIMIT 100
    ;""", as_dict=True)
