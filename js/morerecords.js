function init() {
	if ($('#setupSearch')!=null)
		$('#setupSearch').focus();

	$("a").each(
   		function(){
   			if (this.href.indexOf('01p?') != -1)
    			this.href = this.href.replace(/%3Arowsperpage=/,"") + "&all_classes_page%3AtheTemplate%3AclassList%3Arowsperpage=9999";
   		}
   	);
}

init();