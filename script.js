var mailbox = $('.mailbox-viewport'),
	wrapper = $('.mailbox-wrapper'),
	contactformdummy = $('.mailbox-contact-form-dummy'),
	contactform = $('.mailbox-contact-form');

mailbox.hover(
		function() {
			if ($('.mailbox-wrapper-hover-transition').length == 0) {
				wrapper.addClass('mailbox-wrapper-hover-transition mailbox-wrapper-hover');
			} else {
				wrapper.addClass('mailbox-wrapper-hover');
			}

			setTimeout(function(){
				if ($('.animation-break').length == 0) {
					wrapper.addClass('animation-end');	
				}
			}, 1000);

			contactformdummy.removeClass('hidden');
			setTimeout(function(){
				if ($('.animation-end').length > 0) {

					contactform.removeClass('hidden');
					if ($('.mailbox-contact-form-hover-transition').length == 0) {
						contactformdummy.addClass('mailbox-contact-form-hover-transition mailbox-contact-form-hover-1');
					} else {
						contactformdummy.addClass('mailbox-contact-form-hover-1');
					}
				}
			}, 1000);
		},
		function() {
			if ($('.mailbox-contact-form-hover-1').length > 0) {
				contactformdummy.removeClass('mailbox-contact-form-hover-1');
				setTimeout(function(){
					wrapper.removeClass('mailbox-wrapper-hover');
				}, 1000);
			}

			if ($('.animation-end').length > 0) {
				wrapper.removeClass('animation-end');
			}

			if ($('.animation-end').length == 0 && $('.mailbox-contact-form-hover-1').length == 0) {
				wrapper.addClass('animation-break');
				setTimeout(function(){
					wrapper.removeClass('mailbox-wrapper-hover');
					wrapper.removeClass('animation-break');
				}, 1000)
			}
		}
	);