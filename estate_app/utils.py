import frappe

def sendmail(doc, recipients, msg, title, attachments=None):
    email_args = {
        'recipients': recipients,
        'message': msg,
        'subject': title,
        'reference_doctype': doc.doctype,
        'reference_name': doc.name,
    }
    if attachments:email_args['attachments']=attachments
    # send mail
    frappe.enqueue(method=frappe.sendmail, queue='short', timeout=300, **email_args)

# decorators

def is_authenticated(function):
    def decorated(*args, **kwargs):
        if(frappe.session.user=='Guest'):
            print("\n\n\n\nGuest USER\n\n\n\n")
            raise frappe.DoesNotExistError
        else:
            print("\n\n\n\nYES AUTHENTICATEED USER\n\n\n\n")

        # return decorated
    return decorated
