import requests
import random
import frappe
from faker import Faker
fake = Faker()
# fake.seed(0)

def populate_property():
    # fake.seed(0)
    # get agents
    agents = [agent.name for agent in frappe.db.sql("""SELECT name FROM `tabAgent`;""", as_dict=True)]
    # get status
    status = ['Sale', 'Lease', 'Rent']
    # get property types
    property_types = [property.name for property in frappe.db.sql("""SELECT name FROM `tabProperty Type`;""", as_dict=True)]
    # get cities
    cities = [city.name for city in frappe.db.sql("""SELECT name FROM `tabCity`;""", as_dict=True)]

    # get amenities
    amenities = frappe.db.sql("""SELECT amenity, amenity_price FROM `tabProperty Amenity Item`;""", as_dict=True)
    # house image and name api
    house_images = []
    for n in range(10):
        house_image_url = "https://api.unsplash.com/search/photos?client_id=sPLlSmIJVEA4fypdE1G1UVqe7dWY685_y7T4hkVpqHw&query=house"
        img_api = requests.get(house_image_url)
        house_images += [
            {'doctype': 'Property',
            'amenities': [amenities[random.randint(0,len(amenities)-1)]],
            'description':fake.paragraph(nb_sentences=5),
            'discount':random.randint(0, 11),
            'property_price':random.randint(40000, 10000000),
            'property_type': random.choice(property_types),
            'status': random.choice(status),
            'city': random.choice(cities),
            'agent': random.choice(agents),
            'address': fake.address().replace('\n', ', '),
            'property_name': i.get('alt_description'),
            'image': i.get('urls').get('small')} for i in img_api.json().get('results')
            ]

    # EXECUTE POPULATION
    print(house_images)
    for p in house_images:
        # try:
        pr = frappe.get_doc(p)
        pr.insert(ignore_permissions=True)
        # print("Inserted property ", pr.name)
        # except Exception as e:
        #     pass

    frappe.db.commit()

# fake.seed(0)  # This will raise a TypeError
