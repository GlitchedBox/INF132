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
					      patients: [ {id: "1234567"}, {id: "89101112"} ],
					      picture: "filename_id.jpg",
					      role: ["trainer"]
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
					      patients: [ {id: "1234567"}, {id: "89101112"} ],
					      picture: "filename_id.jpg",
					      role: [ "admin"]
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
var userDatabase = [{id:"1234567", pass:"password1", role:["admin", "doctor"]}, {id:"0987654", pass:"password2",role:["trainer"]}, {id:"7654321", pass:"password3",role:["admin"]}, {id:"1357986", pass:"password4",role:["patient"]}];
///////////////////

// This function is for when the user logs in, it will take them to the correct page
$(function(){


	  $('#login-form').submit(function() {

	  	$.each( userDatabase, function(index, p){


		    if ($("#lg_id").val() == p.id && $("#lg_password").val() == p.pass && $.inArray('doctor', p.role) != -1){ 
		    	current_user_id = p.id;
		    	//alert($("#lg_id").val());
		    	//alert($("#lg_password").val());
		    	$("#login-form").attr('action', 'patientListD.html'); 
		    } 

		    else if ($("#lg_id").val() == p.id && $("#lg_password").val() == p.pass && $.inArray('trainer', p.role) != -1){ 
		    	current_user_id = p.id;
		    	//alert($("#lg_id").val());
		    	//alert($("#lg_password").val());
		    	$("#login-form").attr('action', 'patientListT.html'); 
		    } 
		    else if ($("#lg_id").val() == p.id && $("#lg_password").val() == p.pass && $.inArray('admin', p.role) != -1){ 
		    	current_user_id = p.id;
		    	//alert($("#lg_id").val());
		    	//alert($("#lg_password").val());
		    	$("#login-form").attr('action', 'userList.html'); 
		    } 
		    else if ($("#lg_id").val() == p.id && $("#lg_password").val() == p.pass && $.inArray('patient', p.role) != -1){ 
		    	current_user_id = p.id;
		    	//alert($("#lg_id").val());
		    	//alert($("#lg_password").val());
		    	$("#login-form").attr('action', 'patientPage.html'); 
		    } 
		    else if ($("#lg_id").val() == p.id && $("#lg_password").val() != p.pass){ 
		    	alert("incorrect id or password");
		    } 

	// THIS WAS ADDED FOR TESTING PURPOSES - DEFAULT TO THE DOCTORS PAGE
		   else {
		    	$("#login-form").attr('action', 'patientListD.html'); 
		   }


	  	});

	  });

});


// This is all of the functions in the patientList page
$(function(){

	// This adds the patients already in the database
    $.each( current_user_info.patients, function(index, p){
        var html = "<tr><td>"+ "<button type='button' class='modal_button' data-toggle='modal' data-target='#patientListModal'>" + p.id + "</button>" + "</td></tr>";

        $("#patient_table").append(html);
    });

	// DOCTOR
    // code when user presses the add patient button
    $( "#add_patient_buttonD" ).click(function() { 
        //alert($('#new_patient_id').val());
        // UPDATE THE ADMIN DATABASE INFORMATION OF THE USER
        document.location.href='patientListD.html';
	});

    // code when user presses the remove button
    $( "#remove_patient_buttonD" ).click(function() { 
        //alert($('#remove_patient_id').val());
        // UPDATE THE ADMIN DATABASE INFORMATION OF THE USER
        document.location.href='patientListD.html';
	});

	// TRAINER
    // code when user presses the add patient button
    $( "#add_patient_buttonT" ).click(function() { 
        //alert($('#new_patient_id').val());
        // UPDATE THE ADMIN DATABASE INFORMATION OF THE USER
        document.location.href='patientListT.html';
	});

    // code when user presses the remove button
    $( "#remove_patient_buttonT" ).click(function() { 
        //alert($('#remove_patient_id').val());
        // UPDATE THE ADMIN DATABASE INFORMATION OF THE USER
        document.location.href='patientListT.html';
	});

});


// Patient page edit prescription
$(function(){

	// clicked on the edit button on the prescription and treatement section
	$("#edit_patient_treatement").click(function() {
		document.location.href='editPatientProfile.html';
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

});
