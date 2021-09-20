import frappe


def makelog(x, y):
	try:
		frappe.log_error(f"{x}, {y}", "try Block")
	except Exception as e:
		frappe.log_error(f"{x}, {y}", "except Block")

def makeeq():
	content = {'x':'Hello', 'y':'hi'}
	frappe.enqueue(method=makelog, queue='short', timeout=300, **content)

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


def paginate(doctype, page=0, conditions=" ", paginate_by=6):
    prev, next, search = 0, 0, False
    query = f"""SELECT name, property_name, status, address, grand_total,
                image FROM `tab{doctype}` {conditions} ORDER BY creation DESC """

    if(page):
        page = int(page)
        properties = frappe.db.sql(query+f"""LIMIT {(page*paginate_by)-paginate_by}, {paginate_by};""", as_dict=True)
        next_set = frappe.db.sql(query+f"""LIMIT {page*paginate_by}, {paginate_by};""", as_dict=True)
        if(next_set):
            prev, next = page-1, page+1
        else:
            prev, next = page-1, 0
    else:
        count = frappe.db.sql(f"""SELECT COUNT(name) as count FROM `tab{doctype}` {conditions};""", as_dict=True)[0].count
        if(count>paginate_by):
            prev, next = 0, 2
        else:
            pass
        properties = frappe.db.sql(query+f"""LIMIT {paginate_by};""", as_dict=True)

    if(conditions):
        search=True
    return {
        'properties': properties,
        'prev': prev,
        'next': next,
        'search':search,
    }






























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
