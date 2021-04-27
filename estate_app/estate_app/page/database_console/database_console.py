import frappe

@frappe.whitelist()
def query_database(query):
    data = {'reply': 0}
    if frappe.session.user != "Administrator":
        data['content'] = "Unauthorised User"
        return data
    try:
        content = frappe.db.sql(f"""{query}""", as_dict=True)
        if content:
            data['tablehead'] = [i[1] for i in enumerate(content[0])]
        data['reply'] = 1
        data['content'] = content
    except Exception as e:
        data['reply'] = 2
        data['content'] = e

    return data
