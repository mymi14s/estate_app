import frappe
from estate_app.utils import paginate


def get_context(context):
    page = frappe.form_dict.page
    pagination = paginate('Property', page)
    context.properties = pagination.get('properties')
    context.prev = pagination.get('prev')
    context.next = pagination.get('next')

    return context
