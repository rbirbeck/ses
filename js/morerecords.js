function init() {
	//&all_classes_page%3AtheTemplate%3AclassList%3Arowsperpage=35
	alert('running');
	$("a")
   .each(function()
   { 
      this.href = this.href.replace(/%3Arowsperpage=/,"") + "&all_classes_page%3AtheTemplate%3AclassList%3Arowsperpage=9999";
   });
}

init();