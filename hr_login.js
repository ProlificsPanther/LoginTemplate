$(function(){
	//alert("");
	$("#unamelistdd").dialog({
		autoOpen  : false,
		show: 'blind',
		hide: 'blind',
		height:300,
		width: 600,
		modal: true,
		resizable: false,
		draggable: false,
		title:"Remove Scout",
		buttons: {
			
			"Cancel": function() {
				$("#unamelistdd").dialog('close');
			}
		}
	});
	
	$("input[name='i_1_username']").keypress(function(event){
		var x =  event.keyCode;
	    if(x==112){
	    	//alert("f1 pressed")
	    	$("#unamelistdd").dialog('open');
	    	
	    }
	});
	$("#log-alert-box").dialog({
		autoOpen  : false,
	    modal: true,
	    draggable: false,
	    resizable: false,
	    show: 'blind',
	    hide: 'blind',
	    width: 400,
	    dialogClass: 'ui-dialog-osx',
	    buttons: {
		"OK": function() {
		    $(this).dialog("close");
		}
	    }
	});
	$('.ui-dialog-buttonpane :button').each(function(item) {
		$(this).css({'background': '#4787CE', color: '#fff'});
	});
	$('.ui-dialog-titlebar').css({'background': '#4787CE', color: '#fff'});
	$('.ui-dialog-titlebar').text("PHR");
	
	var message = $("input[name='i_1_message']").val();
	if(message){
		
		$('#log-alert-box').html('<p>Invalid User Name And Password.</p>');
		
		$("#log-alert-box").dialog('open');
		
	}
    $("input[name='i_1_username']").val("");
    $("input[name='i_1_password']").val("");
    $('[data-toggle="popover"]').popover(); 
   
	
    

    $("#unamelistdd").on('change', function() {
    	//alert("ON change");
    	var name = $("#unamelistdd select[name='son_usernamedd'] option:selected").val();
    	//alert(name);
    	$("input[name='i_1_username']").val(name);
    	$("#unamelistdd").dialog('close');
    });
    
	
});



function login() {
	//alert("in login")



var uname = $("input[name='i_1_username']").val() ;
var pswd = $("input[name='i_1_password']").val() ;
var email = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

if(uname=="" || pswd=="")
{
	//alert("Enter Username and Password");
	$('#log-alert-box').html('<p>Please Enter User Name And Password.</p>');
	
	$("#log-alert-box").dialog('open');
	resett();
	return false;
}
else if(!email.test(uname)) {
	//alert("Enter Valid Username");
	$('#log-alert-box').html('<p>Please Enter Valid User Name.</p>');
	$("#log-alert-box").dialog('open');
	resett();
	return false;
}
else
{
	$("input[name='spi_1_loginbtn']").click(); 
}


 


				 
}

function resett() {
	$("#msg").html("");
	$("input[name='i_1_username']").val("") ;
    $("input[name='i_1_password']").val("") ;
}

