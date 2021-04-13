import frappe
from frappe.utils.pdf import get_pdf,cleanup

def get_context(context):
    # print(f"\n\n\n\n{frappe.form_dict}\n\n\n\n")
    doc = frappe.get_doc("Property", frappe.form_dict.docname)
    html = frappe.get_print(doc.doctype, doc.name, 'Property PF', doc=doc, no_letterhead=0)
    frappe.local.response.filename = f"{doc.name}.pdf".format(name=f"{doc.name}".replace(" ", "-").replace("/", "-"))
    frappe.local.response.filecontent = get_pdf(html)
    frappe.local.response.type = "pdf"
    return {'data':frappe.local.response}

    # raise frappe.Redirect

    # return {'pdf': get_pdf(html)}
    # try:
    #     docname = frappe.form_dict.docname
    #     context.property = frappe.get_doc("Property", frappe.form_dict.docname)
    #     context.agent = frappe.get_doc("Agent", context.property.agent)
    # except Exception as e:
    #     frappe.local.flags.redirect_location = '/404'
    #     raise frappe.Redirect

    return context
