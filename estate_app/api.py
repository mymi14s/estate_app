import frappe
# from frappe.utils.pdf import get_pdf,cleanup
from estate_app.utils import sendmail


# (doc, recipients, msg, title, attachments=None)

# email agent from property page
@frappe.whitelist()
def contact_agent(**args):
    print("\n\n\n\n", args.get('property_code'), args['property_code'])
    doc = frappe.get_doc("Property", args.get('property_code'))
    msg = f"From: {args.get('name')} <br>Email: {args.get('email')} <br> {args.get('message')}"
    attachments = [frappe.attach_print(doc.doctype, doc.name, file_name=doc.name),]
    sendmail(doc, [args.get('agent_email')], msg=msg, title="Property Enquiry", attachments=attachments)

    return "Message Sent to agent, you'll be responded to as soon as possible. <br>Thank you."






















# # @frappe.whitelist()
# # def download_pdf(docname):
# #     doc = frappe.get_doc("Property", docname)
# #     html = frappe.get_print(doc.doctype, doc.name, 'Property PF', doc=doc, no_letterhead=0)
# #     frappe.local.response.filename = doc.name #f"{doc.name}.pdf".format(name=f"{doc.name}".replace(" ", "-").replace("/", "-"))
# #     frappe.local.response.filecontent = get_pdf(html)
# #     frappe.local.response.type = "pdf"
