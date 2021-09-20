# Copyright (c) 2021, Anthony Emmanuel (@Ghorz) and contributors
# For license information, please see license.txt


import frappe, requests
from frappe.model.document import Document

class DjangoProperty(Document):

	def db_insert(self):
		d = self.get_valid_dict(convert_dates_to_str=True)
		res = requests.post(f'{self.get_url()}/propertycreate/',
			data=dict(d))
		return res.json()

	def load_from_db(self):
		print(self.doctype, self.name, 'demonstration\n\n\n')
		if(self.name!=self.doctype):
			res = requests.get(f'{self.get_url()}/propertydetail/{self.name}/')
			if(res.status_code==200):
				for key, value in res.json()[0].items():
					setattr(self, key, value)

	def db_update(self):
		d = self.get_valid_dict(convert_dates_to_str=True)
		# print(type(d), type(dict(d)), '\n\n\n')
		res = requests.post(f'{self.get_url()}/propertycreate/',
			data=dict(d))
		return res.json()


	def get_list(self, args):
		# print(args, 'ARGS, \n\n\n')
		url = f"{self.get_url()}/propertylist/"
		res = requests.get(url)
		if(res.status_code==200):
			return res.json()
		return json.dumps([])

	def get_url(self):
		return "http://192.168.1.156:8000/property"
