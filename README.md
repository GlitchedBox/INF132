# INF132 
Program for class, please do not alter or make changes to it for now unless in the group.

Download the zip folder and double click on the loginScreen.html and that's it!
By default, if you do not put in an id or password, you go to the doctor's version of the program.

Based on which user you want to test go to the functions.js file and on the current_user_info variable, in the role section, you will remove doctor and admin, and put trainer or vice versa.

Comment out in the very first function of the login:
		   else {
		    	$("#login-form").attr('action', 'patientListD.html'); 
		    }
becuase if not you will always go to the doctor version of the program, no matter what you want to test.

To test the doctor
id: 1234567
password: password1

To test the trainer
id: 0987654
password: password2

To test the admin
id: 7654321
password: password3



