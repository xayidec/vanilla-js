//VALIDATION
//CONTINUE BTN
//PREV BTN
//SUBMIT FUNCTION
//MODEL CHANGE FUNCTION TO STORE PROMO CODE/PRICE/MIN PURCHASE PRICE
var pageURL = window.location.origin;

function generateVoucher(amount) {
	var result = "";
	var length = amount;
	var chars = "0123456789abcdefghijklmnopqrstuvwxyz";
	for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
	return result;
}

jQuery(document).ready(function () {

	//purchase-date format placeholder
	jQuery('#purchase-date').attr("placeholder", "MM/DD/YYYY");

	jQuery('#customer-postal-code-original, #dealer-postal-code, #installer-postal-code').keyup(function () {
		this.value = this.value.replace(/[^0-9\.]/g, '');
	});

	//store TERMS url
	jQuery('#terms-url-href').attr('href', jQuery('#terms-conditions-url').val());

	jQuery.ajax({
		type: 'POST',
		url: 'RebateAjaxCmd',
		async: false,
		data: {
			'ajaxType': 'power9ConnectionStatus'
		},
		success: function (response) {
			console.log(response);
			console.log(response.power9ConnectionStatus[0].message);
			if (response.power9ConnectionStatus[0].message === "power9 connection up") {

			} else {
				jQuery('#rebate').hide();
				jQuery('#rebate-warning').show();
			}
		},
		complete: function () {

		}
	});

	function validation() {
		isFormValid = true;
		//INPUT FIELDS
		jQuery("#page-1 input.required").each(function () {
			$this = jQuery(this);
			$label = jQuery("label[for='" + $this.attr('id') + "']");
			$br = jQuery("#" + $this.attr('id') + "").prev();
			$existingAlert = jQuery("label[for='" + $this.attr('id') + "']").find(jQuery(".missing-alerts"));

			if (jQuery.trim($this.val()).length === 0) {
				isFormValid = false;
				$label.css({
					'color': 'red'
				});
				$this.css({
					'border': '1px solid red'
				});
				//If alert already exists
				if ($existingAlert.length > 0) {

				} else {
					jQuery('<i><span class="missing-alerts"> Field Required</span></i>').insertBefore($br);
				}
			} else {
				jQuery($existingAlert).remove();
				$label.css({
					'color': '#4d4d4d'
				});
				$this.css({
					'border': '1px solid #898989'
				});
			}
		});

		//console.log(isFormValid+"1");

		//SELECT FIELDS
		jQuery("#page-1 select.required").each(function () {
			$this = jQuery(this);
			$label = jQuery("label[for='" + $this.attr('id') + "']");
			$br = jQuery("#" + $this.attr('id') + "").prev();
			$existingAlert = jQuery("label[for='" + $this.attr('id') + "']").find(jQuery(".missing-alerts"));

			if (jQuery.trim($this.val()).length === 0) {
				isFormValid = false;
				$label.css({
					'color': 'red'
				});
				$this.css({
					'border': '1px solid red'
				});
				//If alert already exists
				if ($existingAlert.length > 0) {

				} else {
					jQuery('<i><span class="missing-alerts">Field Required</span></i>').insertBefore($br);
				}
			} else {
				jQuery($existingAlert).remove();
				$label.css({
					'color': '#4d4d4d'
				});
				$this.css({
					'border': '1px solid #898989'
				});
			}
		});

		//Phone format validation
		var phone = jQuery('#customer-phone').val();
		phone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(phone);
		var $brPhone = jQuery("#customer-phone").prev();

		if (phone === false) {
			isFormValid = false;
			jQuery("#customer-phone").css({
				'border': '1px solid red'
			});
			jQuery("label[for='customer-phone']").css({
				'color': 'red'
			});
			jQuery("label[for='customer-phone']").find('.missing-alerts').remove();
			if (jQuery('.phone-format-alert').length >= 1) {

			} else {
				jQuery('<i><span class="phone-format-alert">Please enter a valid phone number</span></i>').insertBefore($brPhone);
			}
		} else {
			jQuery('.phone-format-alert').remove();
			jQuery("label[for='customer-phone']").css({
				'color': '#4d4d4d'
			});
			jQuery("#customer-phone").css({
				'border': '1px solid #898989'
			});
		}

		var x = jQuery("#customer-email").val();
		var z = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x);
		var y = jQuery("#confirm-customer-email").val();

		var $brEm = jQuery("#customer-email").prev();
		var $vbrEm = jQuery("#confirm-customer-email").prev();

		if (z === false) {
			isFormValid = false;
			jQuery("#customer-email").css({
				'border': '1px solid red'
			});
			jQuery("label[for='customer-email']").css({
				'color': 'red'
			});

			if (jQuery('.email-missing-alert').length >= 1) {

			} else {
				jQuery('<i><span class="email-missing-alert">A valid email address is required</span></i>').insertBefore($brEm);
			}
		} else {
			jQuery('.email-missing-alert').remove();
			jQuery("label[for='customer-email']").css({
				'color': '#4d4d4d'
			});
			jQuery("#customer-email").css({
				'border': '1px solid #898989'
			});
		}

		if (x != y || y != x) {
			jQuery("label[for='confirm-customer-email']").css({
				'color': 'red'
			});
			jQuery("#confirm-customer-email").css({
				'border': '1px solid red'
			});
			jQuery("label[for='confirm-customer-email']").find(jQuery(".missing-alerts")).remove();
			isFormValid = false;
			if (jQuery('.verify-email-missing-alert').length >= 1) {

			} else {
				jQuery('.email-missing-alert').remove();
				jQuery('<i><span class="verify-email-missing-alert">Email addresses do not match</span></i>').insertBefore($vbrEm);
			}
		} else {
			jQuery(".verify-email-missing-alert").remove();
		}

		//US Zip code
		if (jQuery('#customer-country').val() === "USA" && jQuery('#customer-postal-code').val().length !== 5) {
			isFormValid = false;
			jQuery("label[for='customer-postal-code']").css({
				'color': 'red'
			});
		} else {
			jQuery("label[for='customer-postal-code']").css({
				'color': '#4d4d4d'
			});
		}

		if (jQuery("#terms").prop('checked') === false) {
			isFormValid = false;
			jQuery("label[for='terms']").css({
				'color': 'red'
			});
		} else {
			jQuery("label[for='terms']").css({
				'color': '#4d4d4d'
			});
		}
	}

	function validationPage2() {
		isFormValid = true;
		//INPUT FIELDS
		jQuery("#page-2 input.required").each(function () {
			$this = jQuery(this);
			$label = jQuery("label[for='" + $this.attr('id') + "']");
			$br = jQuery("#" + $this.attr('id') + "").prev();
			$existingAlert = jQuery("label[for='" + $this.attr('id') + "']").find(jQuery(".missing-alerts").parent());

			if (jQuery.trim($this.val()).length === 0) {
				isFormValid = false;
				$label.css({
					'color': 'red'
				});
				$this.css({
					'border': '1px solid red'
				});
				//If alert already exists
				if ($existingAlert.length > 0) {

				} else {
					jQuery('<i><span class="missing-alerts"> Field Required</span></i>').insertBefore($br);
				}
			} else {
				jQuery($existingAlert).remove();
				$label.css({
					'color': '#4d4d4d'
				});
				$this.css({
					'border': '1px solid #898989'
				});
			}
		});

		if (jQuery('#promo-code').val() === "") {
			isFormValid = false;
		}

		//console.log(isFormValid+"1");

		//SELECT FIELDS
		jQuery("#page-2 select.required").each(function () {
			$this = jQuery(this);
			$label = jQuery("label[for='" + $this.attr('id') + "']");
			$br = jQuery("#" + $this.attr('id') + "").prev();
			$existingAlert = jQuery("label[for='" + $this.attr('id') + "']").find(jQuery(".missing-alerts").parent());

			if (jQuery.trim($this.val()).length === 0) {
				isFormValid = false;
				$label.css({
					'color': 'red'
				});
				$this.css({
					'border': '1px solid red'
				});
				//If alert already exists
				if ($existingAlert.length > 0) {

				} else {
					jQuery('<i><span class="missing-alerts">Field Required</span></i>').insertBefore($br);
				}
			} else {
				jQuery($existingAlert).remove();
				$label.css({
					'color': '#4d4d4d'
				});
				$this.css({
					'border': '1px solid #898989'
				});
			}
		});

		//console.log(isFormValid+"2");

		//FILE ATTACHMENTS
		var placement = jQuery('#receipt-upload-front-end').prev();
		var existingAlert2 = jQuery("label[for='receipt-upload-front-end']").find(jQuery(".missing-alerts"));
		jQuery("label[for='receipt-upload-front-end']").css({
			'color': 'red'
		});

		if (jQuery('#receipt-upload-front-end').val() === "") {
			isFormValid = false;
			jQuery('#receipt-upload-front-end').css({
				'border': '1px solid red'
			});

			if (existingAlert2.length > 0) {

			} else {
				jQuery('<br><i><span class="missing-alerts">Please upload a gif, jpg, pdf or png with a filename less than 50 characters.</span></i>').insertBefore(placement);
			}

		} else {
			jQuery("label[for='receipt-upload-front-end']").css({
				'color': '#4d4d4d'
			});
			jQuery('#receipt-upload-front-end').css({
				'border': '1px solid #898989'
			});
			jQuery(existingAlert2).remove();
		}

		//SERIAL NUMBER VALIDATION
		var snVal = jQuery('#serial-number-front-end').val();
		snVal = snVal.toUpperCase();
		console.log(snVal);

		if (jQuery('#serial-number-front-end').attr('readonly') === 'readonly') {
			jQuery('#model-number').val('HLOMNIHUB');
			jQuery('#product-category').val('Automation');
			jQuery('#product-name').val('OmniHub');
			jQuery('#product-type').val('In-ground');
		} else if (snVal.length > 0 && jQuery('#serial-number-front-end').attr('readonly') === undefined) {
			//remove spaces and hyphens
			snVal = snVal.trim();
			snVal = snVal.replace(/-/g, '');
			jQuery.ajax({
				type: 'POST',
				url: 'RebateAjaxCmd',
				async: false,
				data: {
					'ajaxType': 'rebateSerialPrefill',
					'serialNumber': snVal
				},
				success: function (response) {
					console.log(response);
					//if no serial # found
					if (response.status === 'success') {
						var rebateSerialPrefill = response.rebateSerialPrefill[0];
						//if model number in returned json matches the product-model value 
						if (rebateSerialPrefill.MODELNUMBER === jQuery('#product-model').val()) {
							jQuery('#model-number').val(rebateSerialPrefill.MODELNUMBER);
							if (rebateSerialPrefill.PRODUCTCATEGORY === 'Robotic Cleaners') {
								jQuery('#product-category').val('Cleaners');
							} else {
								jQuery('#product-category').val(rebateSerialPrefill.PRODUCTCATEGORY);
							}

							jQuery('#product-name').val(rebateSerialPrefill.PRODUCTNAME);
							jQuery('#product-type').val(rebateSerialPrefill.POOLTYPE);
							jQuery('#serial-number').val(rebateSerialPrefill.SERIALNUMBER);

							jQuery("label[for='serial-number-front-end']").find(jQuery(".wrong-sn").parent()).remove();
							jQuery("label[for='serial-number-front-end']").css({
								'color': '#4d4d4d'
							});
							jQuery('#serial-number-front-end').css({
								'border': '1px solid #898989'
							});
						} else {
							isFormValid = false;
							jQuery('#model-number, #product-category, #product-name, #product-type, #serial-number').val();
							jQuery("label[for='serial-number-front-end']").css({
								'color': 'red'
							});
							jQuery('#serial-number-front-end').css({
								'border': '1px solid red'
							});

							if (jQuery("label[for='serial-number-front-end']").find(jQuery(".wrong-sn")).length > 0) {

							} else {
								jQuery('<i><span class="wrong-sn"> Invalid serial number for the product or model indicated.</span></i>').insertBefore(jQuery('#serial-number-front-end').prev());
							}
						}
					} else {
						isFormValid = false;
						jQuery('#model-number, #product-category, #product-name, #product-type, #serial-number').val();
						jQuery("label[for='serial-number-front-end']").css({
							'color': 'red'
						});
						jQuery('#serial-number-front-end').css({
							'border': '1px solid red'
						});

						if (jQuery("label[for='serial-number-front-end']").find(jQuery(".wrong-sn")).length > 0) {

						} else {
							jQuery('<i><span class="wrong-sn"> Invalid serial number for the product or model indicated.</span></i>').insertBefore(jQuery('#serial-number').prev());
						}
					}
				},
				complete: function () {

				}
			});
		}

		//Date Format
		var dateString = jQuery('#purchase-date').val();
		var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/.test(dateString);

		//Date restriction
		var rebatestartingDate = '01/01/2022';
		var rebateEndingDate = '09/06/2022';
		var purchaseDate = document.getElementById('purchase-date').value;
		var DOP;

		function dateCompare(start, end, purchaseD) {
			var purchaseD = new Date(purchaseD);
			var start = new Date(start);
			var end = new Date(end)
			if (purchaseD >= start && purchaseD <= end) {
				DOP = true;
			} else {
				DOP = false
			}

		}
		dateCompare(rebatestartingDate, rebateEndingDate, purchaseDate);
		console.log(DOP);
		if (dateString.length > 0 && !(date_regex) && dateString.length !== 10) {
			isFormValid = false;
			jQuery("label[for='purchase-date']").css({
				'color': 'red'
			});
			jQuery('#purchase-date').css({
				'border': '1px solid red'
			});
			if (jQuery("label[for='purchase-date']").find(jQuery(".wrong-date")).length > 0) {

			} else {
				jQuery('<i><span class="wrong-date"> Date Must Be in mm/dd/yyyy format.</span></i>').insertBefore(jQuery('#purchase-date').prev());
			}
		} else if (DOP === false) {
			isFormValid = false;
			jQuery("label[for='purchase-date']").css({
				'color': 'red'
			});
			jQuery('#purchase-date').css({
				'border': '1px solid red'
			});
			if (jQuery('#purchase-date').val()) {

				if (jQuery('.wrong-date').text()) {

				} else {
					jQuery('<i><span class="wrong-date"> Invalid Purchase Date for this rebate</span></i>').insertBefore(jQuery('#purchase-date').prev());
				}

			} else {

				//jQuery('<i><span class="wrong-date"> Field Required</span></i>').insertBefore(jQuery('#purchase-date').prev());
			}

		}



		//IF ALTERNATIVE NAME SHOWS , MAKE REQUIRED
		if (jQuery('#dealer-oqid').val() === "notListed" && jQuery('#dealer-name-alternative').val() === "") {
			isFormValid = false;
			jQuery("label[for='dealer-name-alternative']").css({
				'color': 'red'
			});
			jQuery('#dealer-name-alternative').css({
				'border': '1px solid red'
			});
		} else {
			jQuery("label[for='dealer-name-alternative']").css({
				'color': '#4d4d4d'
			});
			jQuery('#dealer-name-alternative').css({
				'border': '1px solid #898989'
			});
		}

		if (jQuery('#installer-oqid').val() === "notListed" && jQuery('#installer-name-alternative').val() === "" || jQuery('#installer-oqid').val() === "Self" && jQuery('#installer-name-alternative').val() === "") {
			isFormValid = false;
			jQuery("label[for='installer-name-alternative']").css({
				'color': 'red'
			});
			jQuery('#installer-name-alternative').css({
				'border': '1px solid red'
			});
		} else {
			jQuery("label[for='installer-name-alternative']").css({
				'color': '#4d4d4d'
			});
			jQuery('#installer-name-alternative').css({
				'border': '1px solid #898989'
			});
		}

		//POOL PRO CHECKBOX

		var proolProReq = jQuery("#poolProReq");

		if (jQuery('#professional-installation-section').css('display') === 'block' && jQuery('.professional-installation:checked').length === 0 || jQuery('#professional-installation-section').css('display') === 'block' && jQuery('.professional-installation:checked').val() === 'No') {
			isFormValid = false;
			jQuery("label[for='professional-installation']").css({
				'color': 'red'
			});

			if (proolProReq.length > 0) {

			} else {
				jQuery('<br><i><span id="poolProReq" >Rebate only valid on products installed by a pool professional</span></i>').insertAfter(jQuery("label[for='professional-installation']"));
			}

		} else {
			jQuery("label[for='professional-installation']").css({
				'color': '#4d4d4d'
			});
			jQuery(proolProReq).remove();
		}
	}


	// if ( jQuery('.nps-score:checked').length === 0 ) {
	// 	isFormValid = false;
	// 	jQuery("label[for='NPSScore']").css({ 'color': 'red'});
	// } else {
	// 	jQuery("label[for='NPSScore']").css({ 'color': '#4d4d4d'});
	// }

	//Continue buttn functionality
	jQuery("#continue1").click(function () {
		//call validation function
		validation();

		//if validation variable is false
		if (isFormValid === false) {
			jQuery("html, body").animate({
				scrollTop: jQuery("#rebateSignUp-form").offset().top
			}, 'slow');

			jQuery("#InputWarning1").show();

		} else {
			dealerInstallerList();

			jQuery("#page-1, #InputWarning1").hide();
			jQuery("#page-2").show();

			jQuery("html, body").animate({
				scrollTop: jQuery("#rebateSignUp-form").offset().top
			}, 'slow');
		}

		//Cleanse Address
		jQuery.ajax({
			type: "POST",
			url: "https://secure.shippingapis.com/ShippingAPI.dll",
			data: {
				'API': 'Verify',
				'XML': '<AddressValidateRequest USERID="817HAYWA4837"><Revision>1</Revision><Address ID="0"><Address1>' + jQuery("#customer-address-1-original").val() + '</Address1><Address2>' + jQuery("#customer-address-2-original").val() + '</Address2><City>' + jQuery("#customer-city-original").val() + '</City><State>' + jQuery("#customer-state-original").val() + '</State><Zip5>' + jQuery("#customer-postal-code-original").val() + '</Zip5><Zip4></Zip4></Address></AddressValidateRequest>'
			},
			async: true,
			success: function (xml) {
				console.log(xml);
				var error = jQuery(xml).find('Error');
				//IF ADDRESS ISN'T VALID
				if (error.length > 0) {
					//console.log('wrong address');
					jQuery('#customer-address-1, #customer-address-2, #customer-city, #customer-country, #customer-postal-code, #customer-state').val('');

					jQuery('#customer-address-1').val(jQuery('#customer-address-1-original').val());
					jQuery('#customer-address-2').val(jQuery('#customer-address-2-original').val());
					jQuery('#customer-city').val(jQuery('#customer-city-original').val());
					jQuery('#customer-country').val(jQuery('#customer-country-original').val());
					jQuery('#customer-postal-code').val(jQuery('#customer-postal-code-original').val());
					jQuery('#customer-state').val(jQuery('#customer-state-original').val());
					jQuery('#business-flag').val('');
				} else {
					jQuery('#customer-address-1').val(jQuery(xml).find('Address2').text() + ' ' + jQuery(xml).find('Address1').text());
					jQuery('#customer-address-2').val('');
					jQuery('#customer-city').val(jQuery(xml).find('City').text());
					jQuery('#customer-country').val(jQuery('#customer-country-original').val());
					jQuery('#customer-postal-code').val(jQuery(xml).find('Zip5').text() + '-' + jQuery(xml).find('Zip4').text());
					jQuery('#customer-state').val(jQuery(xml).find('State').text());

					if (jQuery(xml).find('Business').text() === "Y") {
						jQuery('#business-flag').val(jQuery(xml).find('Business').text());
					} else {

					}
				}

			},
			complete: function () {

			},
			error: function (xhr, ajaxOptions, throwError) {
				alert(throwError);
			}
		});

	});

	jQuery("#prev-btn").click(function () {
		jQuery("#page-2").hide();
		jQuery("#page-1").show();

		jQuery("html, body").animate({
			scrollTop: jQuery("#rebateSignUp-form").offset().top
		}, 'slow');
	});

	jQuery("#submit-form-btn").click(function (event) {
		event.preventDefault();
		validation();
		validationPage2();

		if (isFormValid === false) {
			jQuery("html, body").animate({
				scrollTop: jQuery("#rebateSignUp-form").offset().top
			}, 'slow');
			jQuery("#InputWarning2").show();
		} else if (jQuery('#serial-number').val() === "" || jQuery.trim(jQuery('#serial-number').val()).length === 0) {
			jQuery("html, body").animate({
				scrollTop: jQuery("#rebateSignUp-form").offset().top
			}, 'slow');
			jQuery("#InputWarning2").show();
			if (jQuery("label[for='serial-number-front-end']").find(jQuery(".wrong-sn")).length > 0) {

			} else {
				jQuery('<i><span class="wrong-sn"> Invalid serial number for the product or model indicated.</span></i>').insertBefore(jQuery('#serial-number-front-end').prev());
			}
		} else {
			jQuery("#regAgreementCheckbox").prop("checked", false);

			if (pageURL === "https://www.hayward-pool.com") {
				jQuery('#TSE_KEY').val('88070');
			} else {
				jQuery('#TSE_KEY').val('88069');
			}

			//assign dealer/installer name
			if (jQuery('#dealer-oqid').val() === 'notListed' || jQuery('#dealer-oqid').val() === '') {
				jQuery('#dealer-name').val(jQuery('#dealer-name-alternative').val());
			} else {

			}

			if (jQuery('#installer-oqid').val() === 'notListed' || jQuery('#installer-oqid').val() === '' || jQuery('#installer-oqid').val() === 'Self') {
				jQuery('#installer-name').val(jQuery('#installer-name-alternative').val());
			} else {

			}

			//GET Date 
			var today = new Date();
			var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
			var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
			var dateTime = date + ' ' + time;
			document.getElementById('DateSubmitted').value = dateTime;
			//GET GUID 
			var guid = generateVoucher(8) + "-" + generateVoucher(4) + "-" + generateVoucher(4) + "-" + generateVoucher(4) + "-" + generateVoucher(12);
			document.getElementById('myGUID').value = guid;
			//Populate Subscriber key and email address with user's email
			var email = document.getElementById('customer-email');
			var capturedEmail = email.value;
			document.getElementById('SubscriberKey').value = capturedEmail;
			document.getElementById('EmailAddress').value = capturedEmail;
			//GET FORM LOCATION
			jQuery('#FormLocation').val(window.location.href.substring(window.location.href.lastIndexOf('/') + 1));

			var formData = new FormData(jQuery("#rebate")[0]);

			jQuery('#form-loader-wrapper').show();

			//get AWS img URL
			jQuery.ajax({
				type: 'POST',
				url: 'AWSUpload',
				data: formData,
				async: false,
				cache: false,
				contentType: false,
				processData: false,
				success: function (response) {
					console.log(response);
					fileUrl = response.fileUrl;
					console.log(fileUrl);
					jQuery('#receipt-upload').val(fileUrl);

				},
				failure: function (response) {
					console.log(response);
					alert('Please attach a valid receipt');
					jQuery('#form-loader-wrapper').hide();
				},
				error: function (xhr, textStatus, error) {
					console.log(xhr.statusText);
					console.log(textStatus);
					console.log(error);
					alert('Please attach a valid receipt');
					jQuery('#form-loader-wrapper').hide();
				},
				complete: function () {
					if (jQuery('#receipt-upload').val() === "") {
						alert('Please attach a valid receipt');
						jQuery('#form-loader-wrapper').hide();
					} else {
						//get registration number
						jQuery.ajax({
							type: 'POST',
							url: 'RebateMultipartFormEntryCmd',
							data: jQuery("form[name='rebate']").serialize(),
							success: function (response) {
								//console.log(response.registrationNumber);
								jQuery('#registration-number').val(response.registrationNumber);
							},
							failure: function (response) {
								console.log(response);
							},
							error: function (xhr, textStatus, error) {
								console.log(xhr.statusText);
								console.log(textStatus);
								console.log(error);
							},
							complete: function () {
								jQuery('#rebate').submit();
							}
						});
					}

				}
			});
		}

	});

	jQuery("#purchase-date").datepicker({
		maxDate: new Date,
		minDate: new Date('2022-1-1')
	});

	jQuery('#product-model').on('change', function () {
		var modelValue = jQuery(this).val();

		jQuery.ajax({
			url: "/assets/data/pools/rebates/2022BuyBetterSaveBetter.json",
			data: modelValue,
			dataType: 'json',
			async: true,
			success: function (json) {
				var rebateModels = json.rebateModels;

				jQuery.each(rebateModels, function (i, field) {
					if (rebateModels[i].modelNumber === modelValue) {
						jQuery('#promo-code').val(rebateModels[i].promoCode);
						jQuery('#rebate-amount').val(rebateModels[i].promoPrice);
						jQuery('#minimum-purchase-price').val(rebateModels[i].minimumPurchasePrice);
					} else {

					}
				});
			},
			fail: function () {
				jQuery('#promo-code').val(' fail ');
			},
			error: function (xhr, ajaxOptions, throwError) {
				alert(throwError);
			}
		});
	});

	jQuery("#terms").click(function () {
		jQuery("#terms").val('Yes');
	});

	jQuery("#email-optin").change(function () {
		if (jQuery(this).is(':checked')) {
			jQuery(this).val('Yes');
		} else {
			jQuery(this).val('No');
		}
	});

	jQuery("#sms-optin").change(function () {
		if (jQuery(this).is(':checked')) {
			jQuery(this).val('Yes');
		} else {
			jQuery(this).val('No');
		}
	});

	jQuery("#print-mail-optin").change(function () {
		if (jQuery(this).is(':checked')) {
			jQuery(this).val('Yes');
		} else {
			jQuery(this).val('No');
		}
	});
});