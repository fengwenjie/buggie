$('documet').ready(function(){
	console.log('dom is ready, and buggie is alive!!');

	$('body').append(Buggie.Tmpls.HeaderNavbarTmpl);

	$.getJSON('/bug/list', function(data){
		if (data.retcode > 0) 
			$('body').append( _.template(Buggie.Tmpls.BodyContainerTmpl, data) );
	});
	
});