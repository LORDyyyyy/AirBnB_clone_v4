$(document).ready(function() {
	const api = 'http://0.0.0.0:5001/api/v1/status/';

	$.getJSON(api, function(data) {
		if (data.status === 'OK') {
			$('#api_status').addClass('available');
			console.log("YES!!!");
        	} else {
            		$('#api_status').removeClass('available');
			console.log("NO.");
        	}
    	});
});
