(function($){
	$.fn.inlinebackgrounds = function() {
		$.each(this, function(i,t) {
			var split = $(t).html().split('<br>');
			var output = '';
			$.each(split, function(i,o){
				output += '<span>'+o+'</span>';
				if (i < (split.length - 1)) {
					output += '<br>';
				}
			});
			$(t).html(output);
		});
	}
})(jQuery);