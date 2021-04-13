frappe.ui.form.on('Expense Claim', {
	refresh(frm) {
		// your code here
// 		console.log(frm)
	}
})

// EXPENSE

frappe.ui.form.on('Expense Claim Detail', {
	refresh(frm) {
		// your code here
		console.log(frm)
	},
	expenses_add(frm, cdt, cdn){
	    let row = locals[cdt][cdn];
	    if(frm.doc.posting_date){
	        row.expense_date = frm.doc.posting_date;
	        frm.refresh_field('expenses');
	    }
	}
})
