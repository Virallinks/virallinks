

document.getElementById("sendButton").addEventListener("click", function(){

    if(document.getElementById("name").value == "" || document.getElementById("email").value == "" || document.getElementById("message").value == ""){
        sweetAlert("", "Please complete the form before sending", "error");   
    }
    else{
        var tempParams = {
            from_name: document.getElementById('name').value,
            to_name: document.getElementById('email').value,
            message: document.getElementById('message').value,
        };
        
        emailjs.send('service_4ab8x9z', 'template_o5yonq8', tempParams)
        .then(function(res){
            
            console.log('success', res.status);
            sweetAlert("", "Message sent successfully", "success");
        })
    }

})