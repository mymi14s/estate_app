$('#submit').click((e)=>{
  e.preventDefault();
  // let content = new FormData(document.querySelector('#form').target);
  // const form = document.querySelector('#form');
  // const data = Object.fromEntries(new FormData(form).entries())
  // console.log(data);
  // let form = $('#form').submit();
  // console.log(content);
  let fd = new FormData;
  let files = $('#file')[0].files
  if(files.length>0){
    fd.append('file', files[0]);
    fd.append('is_private', 0);
		// fd.append('folder', 'public/files');
    fd.append('doctype', 'User');
		fd.append('docname', 'Administrator');
    console.log(fd, files)
    headers = {
      'Accept': 'application/json',
      'X-Frappe-CSRF-Token': frappe.csrf_token
    }

    frappe.call({
        type: "POST",
        args: fd,
        url: "/api/method/upload_file", //dotted path to server method
        callback: function(r) {
            // code snippet
            console.log(r)
        }
    })
	}
})
