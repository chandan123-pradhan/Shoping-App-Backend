function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validateMobileNumber(mobileNumber) {
    const re = /^[0-9]{10}$/;
    return re.test(mobileNumber);
  }

  module.exports={
    validateEmail,
    validateMobileNumber
  }
  