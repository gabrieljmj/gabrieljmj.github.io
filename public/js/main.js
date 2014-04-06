$(document).ready(function(){
	$.ajax({
		url: "https://api.github.com/users/GabrielJMJ/repos",
		dataType: "json",
		success: function(response){
          	$('.repos .content').html('');
			if(response.length == 0){
				$('.repos .content').html('No repositories');
			}else{
	        	for(var i in response){
	        		var repoId = response[i].id;
	        		var repoName = response[i].name;
	        		var repoDescription = response[i].description;
                  
                  	if(repoDescription === null){
                    	repoDescription = '';
                  	}
	            	$('.repos .content').append('<div class="repo"><div class="name"><a href="https://github.com/GabrielJMJ/' + repoName + '" target="_blank">' + repoName + '</a></div><div class="description">' + repoDescription + '</div></div>');
	         	}
         	}
		}
	});
});