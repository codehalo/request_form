$(document).ready(function(){

		function trace(msg) {
            if(window.console) {
				console.log(msg);
			}
        }

      	$(".next").click(function() {
			var id = $(this).attr("id").replace("next_", "");
        });

		$(".prev").click(function() {
			var id = $(this).attr("id").replace("back_", "");
        });

		$(".opt-chk2 li").click(function() {
			var parentId = $("#" + $(this).attr("id")).parent();
			// if toggle
			$("#" + parentId.attr("id") + " .oc2-cb").removeClass("opt-chk-select");
			$("#" + $(this).attr("id") + " .oc2-cb" ).addClass("opt-chk-select");
			//if chk
		});

		function chooseNextOption(event, scrollIndex) {   
			trace("scrollindex is " + scrollIndex);
			dispatch_table[scrollIndex]();
        }

		var scrollable = $(".scrollable").scrollable({onBeforeSeek : chooseNextOption});

		$("#business li").click(function() {
			$("#business li").removeClass("opt-chk-select");
			$(this).addClass("opt-chk-select");
		});


		/* dispatch functions */

		function page_1() {
			trace("page 1 setup");
		}


		function page_2() {
			trace("page 2 setup");
		}

		function page_3() {
			trace("page 3 setup");
            // choose the page to show based on page_2 selection

			var formType = $("#reqType .opt-chk-select").parent();
			var formTypeId = formType.attr("id");
	
			$(".current-form").removeClass("current-form");
			formType.addClass("current-form");

			trace("showing the " + formTypeId + " form.");
			$(".p3_form_body").hide();
			$("#" + formTypeId + "-3-container").show();
			$("#page_3_title").text($("#" + formTypeId + " .chk-txt").text());
        }


		function page_4() {
			trace("page 4 setup");
			var formTypeId = $(".current-form").attr("id");
			$(".p4_form_body").hide();
			$("#" + formTypeId + "-4-container").show();
			$("#page_4_title").text($("#" + formTypeId + " .chk-txt").text());
        }


		var dispatch_table = [page_1, page_2, page_3, page_4];
		
		

});



