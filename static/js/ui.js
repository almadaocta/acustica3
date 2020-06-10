$('.addMeasurements').click(function() {
	if ((!document.getElementById('height').value) || (!document.getElementById('width').value) || (!document.getElementById('length1').value) || (!document.getElementById('length2').value)) {
		$('.error2').css('display', 'none');
		$('.error3').css('display', 'none');
		$('.error1').css('display', 'initial');
	} else if ((document.getElementById('height').value <= 0) || (document.getElementById('width').value <= 0) || (document.getElementById('length1').value <= 0) || (document.getElementById('length2').value <= 0)) {
		$('.error1').css('display', 'none');
		$('.error3').css('display', 'none');
		$('.error2').css('display', 'initial');
	} else {
		$('.materialsButton').addClass('active');
		$('.selectedMainMenu').css('left', '25vw');
		$('.measurementsContainer').css('display', 'none');
		$('.materialsContainer').css('display', 'flex');
		$('.subMenu').css('top', '7vh');
		$('.error').css('display', 'none');
		processMeasurements();
	}
});
$('.addMaterials').click(function() {
	error=0
	$(".pared option").each(function () {    
		if (!$(this).attr('data-material')) {
			error=1
		} 
	});    
	if (error==1) {
		$('.error2').css('display', 'none');
		$('.error3').css('display', 'none');
		$('.error1').css('display', 'none');
		$('.error4').css('display', 'flex');
	} else {
		$('.coveringsButton').addClass('active');
		$('.selectedMainMenu').css('left', '50vw');
		$('.subMenu').css('top', '0vh');
		$('.coveringsSubMenu').css('top', '7vh');
		$('.materialsContainer').css('display', 'none');
		$('.coveringsContainer').css('display', 'flex');
		$('.error').css('display', 'none');

		$('.sidePanel').css('display', 'none');
		$('.sidePanel2').css('display', 'flex');

		$('#'+$('.pared').val()).removeClass('enabledClass');
		$('#'+$('.pared').val()).addClass('disabledGraph');
		$('#ET').removeClass('disabledGraph');
		$('#ET').addClass('enabledClass');
		
		




	}
});
$('.addcoverings').click(function() {
	$('.flanksButton').addClass('active');
	$('.selectedMainMenu').css('left', '75vw');
	$('.subMenu').css('top', '0vh');
	$('.coveringsSubMenu').css('top', '0vh');
	$('.materialsContainer').css('display', 'none');
	$('.coveringsContainer').css('display', 'none');
	$('.flanksContainer').css('display', 'flex');
	$('.error').css('display', 'none');

	$(".enabledClass").addClass('disabledGraph');
	$('.sidePanel2').css('display', 'none');
	$("#GGlobal").removeClass('disabledGraph');
	$("#GGlobal").addClass('enabledClass');





	FL = $('.FL').val();
	FR = $('.FR').val();
	FT = $('.FT').val();
	FP = $('.FP').val();
	addTotal(FL, FR, FT, FP);

});
$('#material').on('change', function(e) {
	M = $(this).closest('.materialsContainer').find('#material').val();
	ID = $('.pared option:selected').val();
	$('.pared option:selected').attr('data-material',M);
	$(".Graph").addClass('disabledGraph');
	$('.addMaterials').html('<div class="lds-ring"><div></div><div></div><div></div><div></div></div>');
	processStructure(ID, M);
});

$('.sidePanel').find('button').click(function() {
	$('.sidePanel').find(".active").removeClass('active');
	$(this).addClass('active');
	$(this).removeClass('disabled');
	var ID = $(this).attr('id')
	ID = ID.replace('b', '');
	$(".enabledClass").addClass('disabledGraph');
	$("#" + ID).removeClass('disabledGraph');
    $("#" + ID).addClass('enabledClass');

	$('#material').val(structureMat[$('.pared').val()])

    
    if (ID!='GGlobal'){
		$('.pared').val(ID);
        $('.materialsContainer img').addClass("hide");
	    $('.i' + ID).removeClass("hide");
    }
    
});
$('.flankSelect').each(function () {
	$(this).on('change', function(e) {
		FL = $('.FL').val();
		FR = $('.FR').val();
		FT = $('.FT').val();
		FP = $('.FP').val();
		addTotal(FL, FR, FT, FP);
	});
});


$('.materialsButton').click(function() {
	if ($('.materialsButton').hasClass('active')) {
		$('.selectedMainMenu').css('left', '25vw');
		$('.measurementsContainer').css('display', 'none');
		$('.flanksContainer').css('display', 'none');
		$('.coveringsContainer').css('display', 'none');
		$('.materialsContainer').css('display', 'flex');
		$('.subMenu').css('top', '7vh');
		$('.coveringsSubMenu').css('top', '0vh');
		$('.error').css('display', 'none');
		$('.sidePanel').css('display', 'flex');
		$('.sidePanel2').css('display', 'none');
		$(".enabledClass").addClass('disabledGraph');
		$("#GGlobal").addClass('disabledGraph');
		$("#GGlobal").removeClass('enabledClass');
		$('#'+$('.pared').val()).removeClass('disabledGraph');
		$('#'+$('.pared').val()).addClass('enabledClass');
		$("#b"+$('.pared').val()).addClass('active');
	}
});
$('.measurementsButton').click(function() {
	if ($('.measurementsButton').hasClass('active')) {
		$('.selectedMainMenu').css('left', '0vw');
		$('.flanksContainer').css('display', 'none');
		$('.materialsContainer').css('display', 'none');
		$('.coveringsContainer').css('display', 'none');
		$('.measurementsContainer').css('display', 'flex');
		$('.subMenu').css('top', '0vh');
		$('.coveringsSubMenu').css('top', '0vh');
		$('.error').css('display', 'none');
		$('.sidePanel').css('display', 'flex');
		$('.sidePanel2').css('display', 'none');
		$(".enabledClass").addClass('disabledGraph');
		$("#GGlobal").addClass('disabledGraph');
		$("#GGlobal").removeClass('enabledClass');
		$('#'+$('.pared').val()).removeClass('disabledGraph');
		$('#'+$('.pared').val()).addClass('enabledClass');
		$("#b"+$('.pared').val()).addClass('active');
		
	}
});
$('.flanksButton').click(function() {
	if ($('.flanksButton').hasClass('active')) {
		$('.selectedMainMenu').css('left', '75vw');
		$('.measurementsContainer').css('display', 'none');
		$('.subMenu').css('top', '0vh');
		$('.coveringsSubMenu').css('top', '0vh');
		$('.materialsContainer').css('display', 'none');
		$('.coveringsContainer').css('display', 'none');
		$('.flanksContainer').css('display', 'flex');
		$('.error').css('display', 'none');
		$(".enabledClass").addClass('disabledGraph');
		$("#GGlobal").removeClass('disabledGraph');
		$("#GGlobal").addClass('enabledClass');
		$('.sidePanel').css('display', 'none');
		$('.sidePanel2').css('display', 'none');
	}
});
$('.coveringsButton').click(function() {
	if ($('.coveringsButton').hasClass('active')) {
		$('.selectedMainMenu').css('left', '50vw');
		$('.measurementsContainer').css('display', 'none');
		$('.subMenu').css('top', '0vh');
		$('.coveringsSubMenu').css('top', '7vh');
		$('.flanksContainer').css('display', 'none');
		$('.materialsContainer').css('display', 'none');
		$('.coveringsContainer').css('display', 'flex');
		$('.error').css('display', 'none');
		$(".enabledClass").addClass('disabledGraph');
		$("#GGlobal").addClass('disabledGraph');
		$("#GGlobal").removeClass('enabledClass');
		$('.sidePanel').css('display', 'none');
		$('.sidePanel2').css('display', 'flex');
		$("#ET").removeClass('disabledGraph');
		$("#ET").addClass('enabledClass');
		
	}
});


$('#coverings').on('change', function(e) {
	C = $(this).closest('.coveringsContainer').find('#coverings').val();
	IDr = $('.recinto option:selected').val();
	IDp = $('.paredC option:selected').val();
	$('.addcoverings').html('<div class="lds-ring"><div></div><div></div><div></div><div></div></div>');
	processCovering(IDr,IDp, C);	

	

});



$('.pared').on('change', function(e) {
	
	$('#material').val(structureMat[$('.pared').val()]);

	var ID = $(this).val()
	$(".enabledClass").addClass('disabledGraph');
	$("#" + ID).removeClass('disabledGraph');
	$("#" + ID).addClass('enabledClass');
	if (ID!='GGlobal'){
		$('.pared').val(ID);
        $('.materialsContainer img').addClass("hide");
	    $('.i' + ID).removeClass("hide");
	}
	$('.sidePanel').find(".active").removeClass('active');
	$("#b"+ID).addClass('active');
	
	

});

$('.paredC').on('change', function(e) {

	if ($('.recinto').val()==0){
		$('#coverings').val(Emisor[$('.paredC').val()])
		
	}else{
		$('#coverings').val(Receptor[$('.paredC').val()])
	}
	if ($('.recinto option:selected').val()==0){
		ID="E"+$('.paredC option:selected').val();
		
    }
    if ($('.recinto option:selected').val()==1){
        ID="R"+$('.paredC option:selected').val();
	}
	$('.coveringsContainer img').addClass("hide");
	$('.i' + ID).removeClass("hide");
	$(".enabledClass").addClass('disabledGraph');
	$("#" + ID).removeClass('disabledGraph');
	$("#" + ID).addClass('enabledClass');
});

$('.recinto').on('change', function(e) {

	if ($(this).val()==0){
		$('#coverings').val(Emisor[$('.paredC').val()])
	}else{
		$('#coverings').val(Receptor[$('.paredC').val()])
	}
	if ($('.recinto option:selected').val()==0){
        ID="E"+$('.paredC option:selected').val();
    }
    if ($('.recinto option:selected').val()==1){
        ID="R"+$('.paredC option:selected').val();
	}
	$('.coveringsContainer img').addClass("hide");
	$('.i' + ID).removeClass("hide");
	$(".enabledClass").addClass('disabledGraph');
	$("#" + ID).removeClass('disabledGraph');
	$("#" + ID).addClass('enabledClass');
});
