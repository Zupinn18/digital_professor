function emailSend(){

	var firstname = document.getElementById('firstName').value;
    var lastname = document.getElementById('lastName').value;
	var phone = document.getElementById('mobileNumber').value;
	var email = document.getElementById('email').value;
    var state = document.getElementById('state').value;
    var city = document.getElementById('city').value
	var messageBody = "Name " + firstname +
    "<br/> last name " + lastname +
    "<br/> Phone " + phone +
    "<br/> email " + email +
	"<br/> state " + state +
	"<br/> city " + city;
	email.send({
    Host : "smtp.elasticemail.com",
    Username : "malhotrashivam1206@mail.com",
    Password : "8585F51583A43FD1A1C14C4C492D25B61997",
    To : 'hidigitalprofessors@gmail.com' & 'sushil.joshi0@gmail.com',
    From : email,
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}


// document.addEventListener("DOMContentLoaded", function() {
//     // Add event listener for the "Book appointment" button
//     var bookAppointmentBtn = document.getElementById("bookAppointmentBtn");
//     if (bookAppointmentBtn) {
//         bookAppointmentBtn.addEventListener("click", function() {
//             var appointmentScheduler = document.getElementById("appointmentScheduler");
//             if (appointmentScheduler) {
//                 appointmentScheduler.style.display = "block";
//             }
//         });
//     }

//     // Add event listener for the "Submit Appointment" button (if needed)
//     var submitAppointmentBtn = document.getElementById("submitAppointment");
//     if (submitAppointmentBtn) {
//         submitAppointmentBtn.addEventListener("click", function() {
//             // Here you can add code to handle form submission
//             // For example, you can send form data to a backend server
//             // using AJAX or fetch API
//         });
//     }
// });

// document.addEventListener("DOMContentLoaded", function() {
//     var bookAppointmentBtn = document.getElementById("bookAppointmentBtn");
//     var appointmentScheduler = document.getElementById("appointmentScheduler");
    
//     if (bookAppointmentBtn && appointmentScheduler) {
//         bookAppointmentBtn.addEventListener("click", function() {
//             appointmentScheduler.style.display = "block";
//         });
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    // Add event listener for the "Book consultation" button
    document.querySelector(".cart-button").addEventListener("click", function() {
        document.getElementById("appointmentScheduler").style.display = "block";
    });

    // Add event listener for the "Submit Appointment" button (if needed)
    document.getElementById("submitAppointment").addEventListener("click", function() {
        // Here you can add code to handle form submission
        // For example, you can send form data to a backend server
        // using AJAX or fetch API
    });
});
