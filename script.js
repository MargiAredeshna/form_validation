jQuery.validator.addMethod(
  "name_regex",
  function (value, element) {
    return this.optional(element) || /^[a-zA-z\.\-_]{1,30}$/i.test(value);
  },
  "Firstname with only a-z A-Z."
);
jQuery.validator.addMethod(
  "phone_regex",
  function (value, element) {
    return this.optional(element) || /^[0-9\.\-_]{10,30}$/i.test(value);
  },
  "Phone Number with only 0-9. Minlength: 10"
);
jQuery.validator.addMethod(
  "password_regex",
  function (value, element) {
    return (
      this.optional(element) || /^[a-z0-9!@#$%^&*()_\.\-_]{8,30}$/i.test(value)
    );
  },
  "Password of atleast 8 characters."
);
$.validator.addMethod(
  "filesize",
  function (value, element, param) {
    return this.optional(element) || element.files[0].size <= param;
  },
  "File size must be less than {0}"
);
$("#contactForm").validate({
  rules: {
    firstname: {
      required: true,
      minlength: 1,
      name_regex: true
    },
    lastname: {
      required: true,
      minlength: 1,
      name_regex: true
    },
    email: {
      required: true,
      email: true
    },
    phone: {
      required: true,
      phone_regex: true,
      minlength: 10
    },
    password: {
      required: true,
      password_regex: true,
      minlength: 8
    },
    confirmpassword: {
      equalTo: "#password"
    }
  },

  messages: {
    firstname: {
      required: "The firstname field is mandatory!"
    },
    lastname: {
      required: "The lastname field is mandatory!"
    },
    email: {
      required: "The Email is required!",
      email: "Please enter a valid email address!"
    },
    phone: {
      required: "The phone field is mandatory!"
    },
    password: {
      required: "The password field is mandatory!"
    },
    confirmpassword: {
      equalTo: "The two passwords do not match!"
    }
  },
  submitHandler: function (form) {
    form.submit();
  }
});
