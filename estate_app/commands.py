import click, frappe
from frappe.commands import pass_context, get_site
from frappe.exceptions import SiteNotSpecifiedError


@click.command('show-user', help='Show user in system')
@click.argument('email')
@pass_context
def show_user(context, email):
    site = get_site(context)
    # connect site database
    with frappe.init_site(site):
        frappe.connect()
        users = frappe.db.sql(f"""
            SELECT name, last_active
            FROM tabUser WHERE email='{email}'
        ;""", as_dict=1)

        for i in users:
            print(f"{i.name} - {i.last_active}")


@click.command('list-properties', help='List agent properties')
@click.argument('agent')
@pass_context
def list_properties(context, agent):
    site = get_site(context)
    # connect site database
    with frappe.init_site(site):
        frappe.connect()
        properties = frappe.db.sql(f"""
            SELECT name, property_type, grand_total
            FROM tabProperty WHERE agent='{agent}'
        ;""", as_dict=1)

        if properties:
            for i in properties:
                print(f"{i.name} - {i.property_type} - {i.grand_total}")
        else:
            print("No result.")

commands = [
    show_user,
    list_properties
]
