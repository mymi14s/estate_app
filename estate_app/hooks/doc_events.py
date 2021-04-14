

doc_events = {
	# "*": {
	# 	"on_update": "method",
	# 	"on_cancel": "method",
	# 	"on_trash": "method"
	# },
    "Property": {
        "validate": "estate_app.estate_app.doctype.property.events.validate",
        "on_update": "estate_app.estate_app.doctype.property.events.on_update",
        "after_insert": "estate_app.estate_app.doctype.property.events.after_insert",
    }
}
