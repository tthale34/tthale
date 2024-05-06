function changeItem(id){
		
		let label = '#check_itm_'+id;
		let text = '#text_itm_'+id;		
		if($(text).css("display") === "none"){
			$(label).fadeOut();
			$(text).show();
		}else{
			$(text).fadeOut();
			$(label).show();			
			$.ajax({
			url: "updateItem.php",
			type: "post",
			dataType: "json",
			data: {id:id,item:$(text).val()},
			success: function(d) {			
				$('.success').show();
				$('.success').append(d);
				$('.success').delay(3000).fadeOut();
			},
			error: function (request, status, error) {
				console.log(request.responseText);
			}
			});
			
		}
		
	}
	function addSelectedItem(id){
		
		if($('#check_'+id).is(":checked")){			
			$.ajax({
			url: "updateFlag.php",
			type: "post",
			dataType: "json",
			data: {id:id,flag:0},
			success: function(d) {			
				$('.success').show();
				$('.success').append(d);
				$('.success').delay(3000).fadeOut();
			},
			error: function (request, status, error) {
				console.log(request.responseText);
			}
			});
		}else{
			$.ajax({
			url: "updateFlag.php",
			type: "post",
			dataType: "json",
			data: {id:id,flag:null},
			success: function(d) {			
				$('.success').show();
				$('.success').append(d);
				$('.success').delay(3000).fadeOut();
			},
			error: function (request, status, error) {
				console.log(request.responseText);
			}
			});
		}
		
	}
	function deleteItem(id,item){		
		if (confirm('Are you sure you want to delete: '+item)) {
			$.ajax({
			url: "deleteItem.php",
			type: "post",
			dataType: "json",
			data: {id:id},
			success: function(d) {				
				$('.success').show();
				$('.success').append(d);
				$('.success').delay(3000).fadeOut();
				//d.preventDefault();
			},
			error: function (request, status, error) {
				console.log(request.responseText);
			}
			});
		} else {
			// Do nothing!
		}
		location.reload();
	}	
	$('#add_item').on('click',function(e){		
		$('.tdl_wrapper').append('<div class="form-check"><input id="new_item_tmp" type="text" class="form-check-input" placeHolder="New Item..."></div>');
		e.preventDefault();
	});
	$('#save_item').on('click',function(){		
		//Save new Item
		$("#new_item").val($("#new_item_tmp").val());
		
		$.ajax({
		url: "processSave.php",
		type: "post",
		dataType: "json",
		data: {new_item:$("#new_item_tmp").val()},
		success: function(d) {			
			$('.success').show();
			$('.success').append(d);
			$('.success').delay(3000).fadeOut();
		},
		error: function (request, status, error) {
			console.log(request.responseText);
		}
		});
		
	});