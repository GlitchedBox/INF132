// THESE ARE SIMPLE FUNCTIONS THAT ARE USED THROUGHOUT ALL OF THE PAGES

// These are the variables that will be used throughout the entire program and their
// values will be from the databases

var current_user_id = 0;
var current_user_postion = "";

/// WEB APP USER DATABASE
var current_user_info = { 
					      id: "id",
					      uid: "UCI_STUDENT_ID",
					      first_name: "Sarah",
					      middle_name: "K.",
					      last_name: "Johnson",
					      dob: "date_of_birth",
					      gender: "female",
					      office: "XXX building Room 215",
					      email: "asdf@abc.org",
					      contact: "949-123-1234",
					      position: "doctor",
					      title: "Doctor",
					      year_entered: "2015",
					      reports_to: [ {id: "0198475"},  {id: "1726548"} ],
					      messages: [{id: "0198475", mes: "Please change the patient prescription. Patient has blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "}, 
					      			 {id: "1726548", mes: "Add trainer 193847565"}, {id: '0958376', mes: "Recommended change of treatement for patient 2938747 should be blah blah blah"}], // added this
					      patients: [ {id: "1234567"}, {id: "89101112"} ],
					      picture: "filename_id.jpg",
					      role: [ "admin", "representative","patient_manager" ]
					      // ADD trainer AS ONE OF THE ROLES TO SEE THE DIFFERENCE BETWEEN THE 
					      // FUNCTIONS THAT A DOCTOR OR TRAINER CAN DO WITH THE SYSTEM
					    };


var current_user_chosen_admin = { 
					      id: "id",
					      uid: "UCI_STUDENT_ID",
					      first_name: "first",
					      middle_name: "middle",
					      last_name: "last",
					      dob: "date_of_birth",
					      gender: "female",
					      office: "XXX building Room 215",
					      email: "asdf@abc.org",
					      contact: "949-123-1234",
					      position: "doctor",
					      title: "Doctor",
					      year_entered: "2015",
					      reports_to: [ {id: "0198475"},  {id: "1726548"} ],
					      messages: [{id: "0198475", mes: "Please change the patient prescription."}, 
					      			 {id: "1726548", mes: "Add trainer 193847565"}], // added this
					      patients: [ {id: "1234567"}, {id: "89101112"} ],
					      picture: "filename_id.jpg",
					      role: [ "admin", "representative","patient_manager" ]
					    };
////////////////////

///// TA GAME DATABASE
var current_user_patient_chosen = {
									id: "1234567",
									first_name: "patient_first",
									last_name: "patient_last",
									dob: "date_of_birth",
									gender: "male",
									email: "blah@uci.edu",
									wattage: "100 Watts",
									heart_rate: "150 beats per minute",
									workload: "1hr",
									game: "Minecraft",
									prescription: "something here, something here, something here, and more stuff"
								  };

/////////////////////

//// ADMIN DATABASE
var userDatabase = [{id:"1234567", pass:"password1", role:["admin", "doctor"]}, {id:"0987654", pass:"password2",role:["trainer"]}];
///////////////////

// This function is for the signup and the login screen when the user picks an occupation
$(function(){

    $(".dropdown-menu li a").click(function(){

      $(".btn:first-child").text($(this).text());
      $(".btn:first-child").val($(this).text()); 
      current_user_position = $(".btn:first-child").text();
   });
});


// This function is for when the user logs in, it will take them to the correct page
$(function(){

	  $('#login-form').submit(function() {

	  	// WILL HAVE TO CHECK IN THE DATABASE TO SEE IF THEY ARE IN THE SYSTEM HERE SO THAT WE DO IT ONCE, 
	  	// IF NOT THEN MAKE BOOL VARIABLES THAT INDICATE WHAT THEY HAVE INPUTED INCORRECTLY

	    //alert($("#lg_id").val());
	  	//alert($("#lg_password").val());
	  	//alert(current_user_position);

	  	if (current_user_position == "Doctor"){

		    $.each( userDatabase, function(index, p){


		    	if ($("#lg_id").val() == p.id && $("#lg_password").val() == p.pass && $.inArray('doctor', p.role) != -1){ 
		    		current_user_id = p.id;
		    		$("#login-form").attr('action', 'patientList.html'); 
		    	} 
		    	else if ($("#lg_id").val() == p.id && $("#lg_password").val() != p.pass){
		    		alert("id or password incorrect");
		    	}
		    	else if ($("#lg_id").val() == p.id  && $.inArray('doctor', p.role) == -1){
		    		alert("selected the incorrect role");
		    	}

		    });
	    	//$(this).attr('action', 'patientList.html'); 
	  	} else if (current_user_position == "Trainer"){

		    $.each( userDatabase, function(index, p){

		    	if ($("#lg_id").val() == p.id && $("#lg_password").val() == p.pass && $.inArray('trainer', p.role) != -1){ 
		    		current_user_id = p.id;
		    		$("#login-form").attr('action', 'patientList.html'); 
		    	} 
		    	else if ($("#lg_id").val() == p.id && $("#lg_password").val() != p.pass){
		    		alert("id or password incorrect");
		    	}
		    	else if ($("#lg_id").val() == p.id && $.inArray('trainer', p.role) == -1){
		    		alert("selected the incorrect role");
		    	}

		    });
	  		//$(this).attr('action', 'patientList.html'); 
	  	} else if (current_user_position == "Administrator"){

		    $.each( userDatabase, function(index, p){

		    	if ($("#lg_id").val() == p.id && $("#lg_password").val() == p.pass && $.inArray("admin", p.role) != -1){ 
		    		current_user_id = p.id;
		    		$("#login-form").attr('action', 'userList.html');
		    	} 
		    	else if ($("#lg_id").val() == p.id && $("#lg_password").val() != p.pass){
		    		alert("id or password incorrect");
		    	}
		    	else if ($("#lg_id").val() == p.id  && $.inArray('admin', p.role) == -1){
		    		alert("selected the incorrect role");
		    	}

		    });
	  		//$(this).attr('action', 'userList.html');
	  	}

	  }); 
});


// code for the signUp page - adds the new user to the database
$(function(){

	  $('#signup-form').submit(function() {

	  	//alert($("#sg_id").val());
	  	//alert($("#sg_password").val());
	  	//alert(current_user_position);

	  	if (current_user_position == "Doctor"){
	  		// WILL ADD THE USER TO THE DATABASE WITH THIS POSITION
	    	$(this).attr('action', 'patientList.html'); 
	  	} else if (current_user_position == "Trainer"){
	  		// WILL ADD THE USER TO THE DATABASE WITH THIS POSITION
	  		$(this).attr('action', 'patientList.html'); 
	  	} else if (current_user_position == "Administrator"){
	  		// WILL ADD THE USER TO THE DATABASE WITH THIS POSITION
	  		$(this).attr('action', 'userList.html');
	  	}

	  }); 
});


// This is all of the functions in the patientList page
$(function(){

	// This adds the patients already in the database
    $.each( current_user_info.patients, function(index, p){
        var html = "<tr><td>"+ "<a href='patientProfile.html'>" + p.id + "</a> " + "</td></tr>";

        $("#patient_table").append(html);
    });

    // code when user presses the add patient button
    $( "#add_patient_button" ).click(function() { 
        //alert($('#new_patient_id').val());
        // UPDATE THE DATABASE INFORMATION OF THE USER
        document.location.href='patientList.html';
	});

    // code when user presses the remove button
    $( "#remove_patient_button" ).click(function() { 
        //alert($('#remove_patient_id').val());
        // UPDATE THE DATABASE INFORMATION OF THE USER
        document.location.href='patientList.html';
	});

});

// code for editing and saving your user profile 
$(function() {

	// click on the edit button
	$(".edit-profile").click(function() {
		document.location.href='editUserProfileInfo.html';
	});

	// click on the save button 
	$('#edit-user-profile-form').submit(function() {

		var off = $('#edit-user-profile-form').find('input[name="office"]').val();
		var ema = $('#edit-user-profile-form').find('input[name="email"]').val();
		var cont = $('#edit-user-profile-form').find('input[name="contact"]').val();
		var posi = $('#edit-user-profile-form').find('input[name="position"]').val();
		var admin_status_priv_on = $("#yes-admin-priv").is(':checked');
		var admin_status_priv_off = $("#no-admin-priv").is(':checked');
		//alert(admin_status_priv_on);
		//alert(admin_status_priv_off);


		if (off != ""){
			// HERE WE WILL REPLACE THE USER DATABASE WITH THIS INFORMATION
			//alert("off");
		}
		if (ema != ""){
			// HERE WE WILL REPLACE THE USER DATABASE WITH THIS INFORMATION
			//alert("em");
		}
		if (cont != ""){
			// HERE WE WILL REPLACE THE USER DATABASE WITH THIS INFORMATION
			//alert("cont");
		}
		if (posi != ""){
			// HERE WE WILL REPLACE THE USER DATABASE WITH THIS INFORMATION
			//alert("posi");
		}

		if (admin_status_priv_on == true && admin_status_priv_off == false){

			// If a trainer uses this function it does nothing becuase of the if statement
	            if ($.inArray('trainer', current_user_info.role) == -1){
                    // Will need to add admin to the user roles or do nothing if already there
                }
                else {
                	alert("Sorry only the Doctor can turn the administrator privaleges function on or off, but other changes were saved");
                }
		}
		else if (admin_status_priv_off == true && admin_status_priv_on == false){
			
			// If a trainer uses this function it does nothing becuase of the if statement
	            if ($.inArray('trainer', current_user_info.role) == -1){
                    // Will need to remove admin to the user roles or do nothing if already there
                }
                else {
                	alert("Sorry only the Doctor can turn the administrator privaleges function on or off, but other changes were saved");                	
                }
		}

	});
});


// Patient page edit prescription
$(function(){

	// clicked on the edit button on the prescription and treatement section
	$("#edit_patient_treatement").click(function() {
		if ($.inArray('trainer', current_user_info.role) == -1){
			document.location.href='editPatientProfile.html';
         }
         else {
         	alert("Sorry only the Doctor can edit the patient's prescription or treatement. Please contact patient's doctor.");
         }
	});


	$('#edit-patient-profile-form').submit(function() {

		var prescri = $('#edit-patient-profile-form').find('input[name="presc"]').val();
		var treate = $('#edit-patient-profile-form').find('input[name="treat"]').val();

		if (prescri != ""){
			// HERE WE WILL REPLACE THE USER DATABASE WITH THIS INFORMATION
			//alert("prescription");
		}
		if (treate != ""){
			// HERE WE WILL REPLACE THE USER DATABASE WITH THIS INFORMATION
			//alert("treatment");
		}

	});

	// Function to send email 
	$(".send-notification").click(function(){
		// Will update the database with the message 
		//alert($('#edit-patient-profile-form').find('input[name="senderID"]').val());
		//alert($('#edit-patient-profile-form').find('input[name="recieverID"]').val());
		//alert($('#senderMessage').val());
	});

});

/*
// Notifications page
$(function() {

	// This is adding all of the notfications that are in the database and have not been deleted
	$.each( current_user_info.messages, function(index, m){
        var html_mess = "<tr><td>"+ m.id + "</td><td>" + m.mes + "</td><td><button type='button' id='" +m.id+ "' class='delete-notification-x'>&times;</button></td></tr>";

        $("#notifications_table").append(html_mess);
    });	

	$(".send-notification").click(function(){
		// Will update the database with the message 
		//alert($('#edit-patient-profile-form').find('input[name="senderID"]').val());
		//alert($('#edit-patient-profile-form').find('input[name="recieverID"]').val());
		//alert($('#edit-patient-profile-form').find('input[name="senderMessage"]').val());
	});

});
*/
