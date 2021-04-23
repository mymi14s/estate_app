# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .. import __version__ as app_version
from .route import routes
from .jinja import jenvs
from .doc_events import doc_events

app_name = "estate_app"
app_title = "Estate App"
app_publisher = "Anthony Emmanuel (@Ghorz)"
app_description = "An app for real estate listing"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "test@site.com"
app_license = "MIT"

# Includes in <head>
# ------------------
from .public import *
# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

website_route_rules = routes
jenv = jenvs
# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "estate_app.install.before_install"
# after_install = "estate_app.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "estate_app.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

doc_events = doc_events

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"estate_app.tasks.all"
# 	],
# 	"daily": [
# 		"estate_app.tasks.daily"
# 	],
# 	"hourly": [
# 		"estate_app.tasks.hourly"
# 	],
# 	"weekly": [
# 		"estate_app.tasks.weekly"
# 	]
# 	"monthly": [
# 		"estate_app.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "estate_app.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "estate_app.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "estate_app.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]
