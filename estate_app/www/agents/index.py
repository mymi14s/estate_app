import frappe

def get_context(context):
    context.name = 'Ghorz'
    context.car = 'Dodge'
    frappe.session.data['test'] = 'hi'
    frappe.session['test'] = 'hello'
    frappe.form_dict['test'] = 'hello'
    print(f"\n\n\n{frappe.session}\n\n\n")
    context._data = frappe.session.data
    return context
