$(function(){

	var shoppingArray = [];

	function makeList() {
		$('#shop-list').empty();
		for (var i = 0; i < shoppingArray.length; i++) {
			$('#shop-list').append('<li>'+(i + 1)+'. '+shoppingArray[i]+'</li>');
			// console.log(shoppingArray);
			}
		}

	function limitText(field, maxChar){
		$(field).attr('maxlength',maxChar);
	}

	$("input").keydown(function(event) {
		
		var addList = $(this).val();
		if (event.which == 13) {
			event.preventDefault();
			shoppingArray.push(addList);
		//	$('#shop-list').append('<li>'+addList+'</li>');
			makeList();
			$('input').val("");
		}
	});

	$('#clr').click(function(){
		shoppingArray.length = 0;
		makeList();
	});

	$('#priority').click(function(){
		shoppingArray.sort();
		makeList();
	});

	$( "#shop-list" ).sortable({   
			placeholder: "ui-sortable-placeholder"   
		});  



// $("input").on("keydown",function search(e) {
//     if(e.keyCode == 13) {
//         alert($(this).val());
//     }
// });

// $("input").keydown(function(event) {
//     if (event.which == 13) {
//         event.preventDefault();
//         $("form").submit();
//         $(this).val()
//     }
// });

});
