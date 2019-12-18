 $(document).ready(function () {
	    $('#resumeHeadings li').on('click', function() {
	    	var selection = $(this).html();
	    	switch(selection){
	    		case "Toggle All":
					$('#educationInfo').slideToggle(450);
				    $('#experienceInfo').slideToggle(450);
				    $('#projectsInfo').slideToggle(450);
				    $('#skillsInfo').slideToggle(450);
				    $('#honorsInfo').slideToggle(450);				
	    		break;

	    		case "Education":
        			$("#educationInfo").slideToggle(450);
	    			break;
	    		
	    		case "Experience":
	    			$("#experienceInfo").slideToggle(450);
	    			break;

	    		case "Projects":
	    			$("#projectsInfo").slideToggle(450);
	    			break;
	    		
	    		case "Skills and Abilities":
	    			$("#skillsInfo").slideToggle(450);
	    			break;
	    		
	    		case "Honors and Awards":
	    			$("#honorsInfo").slideToggle(450);
	    			break;
				
				case "Publications":
	    			$("#papersInfo").slideToggle(450);
	    			break;
	    	}
	    });
 });