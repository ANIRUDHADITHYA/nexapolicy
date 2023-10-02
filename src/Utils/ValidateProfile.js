export function ValidateProfile(user, vehicleInfo) {
  let errors = {};
  const date = new Date();
  let year = date.getFullYear();
  if (!user.first_name.trim()) {
    errors.first_name = "First name is required";
  }

  if (!user.last_name.trim()) {
    errors.last_name = "Last name is required";
  }

  if (!user.email.trim()) {
    errors.email = "Email is required";
  } else if (!isValidEmail(user.email)) {
    errors.email = "Invalid email address";
  }

  if (!user.mobile) {
    errors.mobile = "Mobile number is required";
  } else if (!isValidMobile(user.mobile)) {
    errors.mobile = "Invalid mobile number";
  }

  if (!user.aadhar_card_no) {
    errors.aadhar_card_no = "Aadhar card number is required";
  } else if (user.aadhar_card_no.length > 12 || user.aadhar_card_no.length < 12) {
    errors.aadhar_card_no = "Invalid Aadhar card number";
  }

  if (!user.dl_no) {
    errors.dl_no = "Driver's license number is required";
  } else if (user.dl_no.length > 16 || user.dl_no.length < 16) {
    errors.dl_no = "Invalid driver's license number";
  }

  if (!user.blood_group) {
    errors.blood_group = "Blood group is required";
  }

  if (!user.address_line_1.trim()) {
    errors.address_line_1 = "Address Line 1 is required";
  }

  if (!user.address_line_2.trim()) {
    errors.address_line_2 = "Address Line 2 is required";
  }

  if (!user.state) {
    errors.state = "State is required";
  }

  if (!user.city.trim()) {
    errors.city = "City is required";
  }

  if (!user.pincode) {
    errors.pincode = "Pincode is required";
  } else if (!isValidPincode(user.pincode)) {
    errors.pincode = "Invalid pincode";
  }



  if (!vehicleInfo.registration_number.trim()) {
    errors.registration_number = "Registration number is required";
  }

  if (!vehicleInfo.vehicle_name.trim()) {
    errors.vehicle_name = "Vehicle name is required";
  }

  if (!vehicleInfo.model.trim()) {
    errors.model = "Model is required";
  }

  if (!vehicleInfo.year) {
    errors.year = "Year is required";
  } else if (!vehicleInfo.year.trim.length == 4) {
    errors.year = "Invalid Year format";
  } else if (vehicleInfo.year > year) {
    errors.year = "Invalid Year";
  }

  if (!vehicleInfo.vehicle_color.trim()) {
    errors.vehicle_color = "Vehicle color is required";
  }

  if (!vehicleInfo.chassis_number.trim()) {
    errors.chassis_number = "Chassis number is required";
  }

  if (!vehicleInfo.rc_number.trim()) {
    errors.rc_number = "RC number is required";
  }

  if (!vehicleInfo.dealer_name.trim()) {
    errors.dealer_name = "Dealer name is required";
  }

  if (!vehicleInfo.ex_showroom_price) {
    errors.ex_showroom_price = "Ex-showroom price is required";
  } else if(!vehicleInfo.ex_showroom_price > 100000) {
    errors.ex_showroom_price = "Ex-showroom price should be greater 1 Lakhs"
  }

  if (!vehicleInfo.state) {
    errors.vehicle_state = "State is required";
  }

  if (!vehicleInfo.city.trim()) {
    errors.vehicle_city = "City is required";
  }

  if (!vehicleInfo.pincode) {
    errors.vehicle_pincode = "Pincode is required";
  } else if (!isValidPincode(vehicleInfo.pincode)) {
    errors.vehicle_pincode = "Invalid pincode";
  }

  return errors;


}


function isValidMobile(mobile) {
  return /^\d+$/.test(mobile) && mobile.length === 10;
}



function isValidPincode(pincode) {
  return /^\d{6}$/.test(pincode);
}

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}
