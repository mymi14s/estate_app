// // alert("Agent");
//
//
//
// let form_data = new FormData();
// 	if (file.file_obj) {
// 		form_data.append('file', file.file_obj, file.name);
// 	}
// 	form_data.append('is_private', +file.private);
// 	form_data.append('folder', this.folder);
// 	if (file.file_url) {
// 		form_data.append('file_url', file.file_url);
// 	}
// 	if (this.doctype && this.docname) {
// 		form_data.append('doctype', this.doctype);
// 		form_data.append('docname', this.docname);
// 	}
// 	if (this.method) {
// 		form_data.append('method', this.method);
// 	}
// 	xhr.send(form_data);
//
// frappe.call({
//     method: "/api/method/upload_file", //dotted path to server method
//     args: form_data,
//     callback: function(r) {
//         // code snippet
//
//     }
// })
//
//
//
//
//
// // xhr.open('POST', '/api/method/upload_file', true);
// // xhr.setRequestHeader('Accept', 'application/json');
// // xhr.setRequestHeader('X-Frappe-CSRF-Token', frappe.csrf_token);
//
//
// // let form_data = new FormData();
// // 	if (file.file_obj) {
// // 		form_data.append('file', file.file_obj, file.name);
// // 	}
// // 	form_data.append('is_private', +file.private);
// // 	form_data.append('folder', this.folder);
// // 	if (file.file_url) {
// // 		form_data.append('file_url', file.file_url);
// // 	}
// // 	if (this.doctype && this.docname) {
// // 		form_data.append('doctype', this.doctype);
// // 		form_data.append('docname', this.docname);
// // 	}
// // 	if (this.method) {
// // 		form_data.append('method', this.method);
// // 	}
// // 	xhr.send(form_data);
//
//
// // imagefile = new FormData();
// // imagefile.append('file_url', 'https://www.mkwd.net/wp-content/uploads/2019/11/ES6.jpg');
// // // optional
// // imagefile.append('doctype', 'Property');
// // imagefile.append('docname', '000194');
// //
// // fetch('/api/method/upload_file', {
// //         headers: {
// //             //'Content-Type': 'application/json',
// //             'X-Frappe-CSRF-Token': frappe.csrf_token
// //         },
// //         method: 'POST',
// //         body: imagefile
// // })
// // .then(response => response.json())
//
//
//
//
//
//
//
// // x = $.ajax({
// //         'url' : '/api/method/erpnext.stock.doctype.quick_stock_balance.quick_stock_balance.get_stock_item_details',
// //         'type' : 'POST',
// // 		'headers': {
// // 			'CSRFToken':frappe.csrf_token
// // 		},
// // 		'data': {
// // 			'warehouse': 'DIOGHENE II - MNL',
// // 			'date': '2020-11-12',
// // 			'item': 'OIL1735'
// // 		}
// //     });
