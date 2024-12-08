$().ready(function() {

    var requiredFields = ["FirstName", "Gender", "Title", "Suffix","BirthDate", "HireDate", "SNN",
    "SNNn",  "Email", "Address", "City", "Region", "Code", "Country", "Phone", "Photo", "Notes",
    "Regular", "on", "hummna"
    ]

    var rules = {};

    requiredFields.forEach(function(field) {
        rules[field] = { required: true };
    });

    rules["Email"] = {
        email: true
    };

    $("#demoForm").validate({
		rules: rules,
        messages: {

        }
	});

});