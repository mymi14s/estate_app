import frappe

def get_context(context):
    context.name = 'Ghorz'
    print(f"\n\n\n{frappe.form_dict}\n\n\n")
    return context
