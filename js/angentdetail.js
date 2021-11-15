$(document).ready(function () {
 $("#formDemo").validate({
                rules: {
                    ho: {
                        required: true,
                        minlength: 5
                    },
                    email1: {
                        required: true,
                        email: true
                    },
                    number: {
                        required: true,
                        number: true
                    },
                    message: "required",
                },
                messages: {
                    ho: {
                        required: "Vui lòng nhập họ và tên đầy đủ",
                        minlength: "họ và tên phải lớn hơn 5 ký tự"
                    },
                    email1: {
                        required: "Vui lòng nhập email của bạn",
                        email: "email của bạn thiếu dấu ....@..."
                    },
                    number: {
                        required: "Vui lòng nhập sdt của bạn",
                        number: "Đây không phải là số"
                    },
                    message: "Hãy nhập nội dung bạn muốn gửi đến chúng tôi",
                }
            });
		  });