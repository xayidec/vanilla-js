jQuery(document).ready( function(){
    var zipcode, number;
    jQuery('#zip-code').keyup(function(e){
        if(e.keyCode == 13) {
            zipcode = jQuery(this).val();

            jQuery('#no-rebates-msg, .pages, .row-results, .pagers').remove();
            ecorebatescall();
        }
    });

    jQuery('#search-btn').click( function() {
        zipcode = jQuery('#zip-code').val();
        jQuery('#no-rebates-msg, .pages, .row-results, .pagers').remove();
        ecorebatescall();
    });

    function ecorebatescall () {
        var itemNumber = 1;// items
        var pageNumber = 1; // page number
            
        jQuery.ajax({
            type: "GET",
            url : "https://hayward.ecorebates.com/api/search/hayward/productRebateDetails.json",
            data : {'exclude_offer':'manufactureroffer', 'filter_product_type':'poolpump', 'filter_rebate_consumer_type': 'residential', 'zip': zipcode },
            async: false,
            success : function(response) {
                console.log(response);
                var EcoRebatesResponse = response.EcoRebatesResponse;
                var productRebateDetails = EcoRebatesResponse.productRebateDetails;
                //if no available rebates
                if ( EcoRebatesResponse.productRebateDetails.length === 0 ) {
                    jQuery('#rebate-location').html('View available rebates in my area');
                    jQuery('.row-results, #wrong-zip-code').remove();
                    jQuery('#rebates-results-holder').append('<h3 id="no-rebates-msg">No rebates available in '+EcoRebatesResponse.area.cityState+' </h3>');
                    jQuery('#rebates-results-section').slideDown('fast');
                } else {
                    //if available rebates
                    jQuery('#no-rebates-msg, #wrong-zip-code').remove();
                    jQuery('#rebate-location').html('Available rebates in '+EcoRebatesResponse.area.cityState);
                    jQuery('#rebates-results-section').slideDown('fast');

                    //Pages
                    var pageDiv = jQuery('<div id="page-'+pageNumber+'" class="pages"></div>');
                    jQuery('#rebates-results-holder').append(pageDiv);
                    //Pager
                    jQuery('.pagination').append(jQuery('<span id="p'+pageNumber+'" class="pagers selection current">'+pageNumber+'</span>'));
                    
                    //loop through rebates per product
                    jQuery.each(productRebateDetails, function(i){

                        //change thumb path to small
                        var imgPath = productRebateDetails[i].product.imageUrl;
                        imgPath = imgPath.replace('thumb', 'small'); 
    
                        var rowResults = jQuery('<div class="row-results"><div class="padding-row"><div class="prod-imgs inline-middle"> <img src="'+imgPath+'"  alt="'+productRebateDetails[i].product.shortName+'" title="'+productRebateDetails[i].product.shortName+'"></div><div class="prod-rebate inline-middle"><div class="prod-rebate-label"><h5 class="prod-rebate-name">'+productRebateDetails[i].product.shortName+'</h5><h5 class="prod-rebate-model">Model #: '+productRebateDetails[i].product.displaySku+' | '+productRebateDetails[i].product.efficiencyLevelLabel+'</h5></div> <br><div class="prod-rebate-btns" id="'+productRebateDetails[i].product.displaySku+'"> '+productRebateDetails[i].maxRebateAmountLabel+' in rebates <i class="fa fa-chevron-down"></i></div></div></div></div>');
                        var rebateDetails = jQuery('<div class="row-results rebate-details" id="'+productRebateDetails[i].product.displaySku+'-details"></div>');

                            //Loop through several rebate programs per rebate and it's corresponding details/terms
                            jQuery.each( productRebateDetails[i].rebatePrograms, function(j){
                                //loop through terms
                                var details = productRebateDetails[i].rebatePrograms[j].importantDetails;

                                var openUl = jQuery('<div class="panel-terms" id="'+productRebateDetails[i].product.displaySku+'-terms-'+j+'">');
                                var Ul = jQuery('<ul></ul>');
                                jQuery.each(details, function(t){
                                    if( details[t].includes("[by mail]") ) {
                                        var str = details[t];
                                        pos = str.indexOf("(") + 1;
                                        detailsURL = str.slice(pos, str.lastIndexOf(")")); //stores URL
                                        details[t] = str.split('[')[0] +'by <a target="_blank" href="'+detailsURL+'"> mail </a>';
                                        //console.log(details[t]);
                                    }
                                    Ul.append('<li>'+details[t]+'</li>');
                                });
                                
                                openUl.append(Ul);

                                
                                var termsList = openUl;
                                var rebatePrograms = jQuery('<div class="details-padding-row"><div class="panel-heading"><div class="eco-amount"> <span class="eco-label">Amount</span> <br> <span class="eco-value">'+productRebateDetails[i].rebatePrograms[j].amountLabel+'</span></div><div class="eco-program"> <span class="eco-label"> <span class="ecr-program-label">Program</span> <span class="ecr-offer-label">- residential</span> </span> <br> <span class="eco-rebate-company"> <a href="'+productRebateDetails[i].rebatePrograms[j].homeURL+'" target="_blank" class="ng-binding ng-scope">'+productRebateDetails[i].rebatePrograms[j].name+'</a> </span> <br> <a class="rebate-company-cta" href="'+productRebateDetails[i].rebatePrograms[j].claimFormURL+'" target="_blank"><div class="eco-btn"> '+productRebateDetails[i].rebatePrograms[j].getFormLabel+'</div> </a></div><div class="eco-dates"><div class="eco-date"> <span class="eco-label">Buy on or After:</span> <span class="eco-value eco-after"> '+productRebateDetails[i].rebatePrograms[j].purchaseDates.buyAfter+' </span></div><div class="eco-date"> <span class="eco-label eco-claim">Claim Within:</span> <span class="eco-value eco-claim">'+productRebateDetails[i].rebatePrograms[j].purchaseDates.claimWithin+'</span></div></div>');

                                rebateDetails.prepend(rebatePrograms);
                                rebatePrograms.append(termsList);  
                                
                            });


                        if (itemNumber >= 10) {
                            pageNumber ++; // increase page number
                            itemNumber = 1;//reset item back to 1
                            jQuery('#rebates-results-holder').append('<div id="page-'+pageNumber+'" class="pages hidden-pages"></div>');
                            jQuery('.pagination').append('<span id="p'+pageNumber+'" class="pagers selection">'+pageNumber+'</span>')
                        } else {
                            
                        }
                        console.log(itemNumber)
                        console.log(pageNumber)

                        itemNumber++;
                        jQuery('#page-'+pageNumber).append(rowResults);
                        jQuery('#page-'+pageNumber).append(rebateDetails);
                        
                        
                    });
                    
                }
            },
            error: function(xhr, ajaxOptions, throwError) {
                //alert(throwError);
                if ( jQuery('#wrong-zip-code').length > 0) {

                } else {
                    jQuery('#rebates-results-holder').append('<h3 id="wrong-zip-code">Please enter a valid zip code</h3>');
                    jQuery('#rebates-results-section').slideDown('fast');
                    jQuery('#rebate-location').html('View available rebates in my area');
                    jQuery('.row-results').remove();
                }
                
            }
        });
    }

    var prodModel, moreDetailsLink;
    jQuery(document).on('click','.prod-rebate-btns', function(){
        prodModel = jQuery(this).attr('id');

        if ( jQuery('#'+prodModel+'-details').css('display') === 'block' ) {
            jQuery('.rebate-details').hide();
            jQuery('.eco-more-details').show();
            jQuery('#'+prodModel).find('i').attr('class', 'fa fa-chevron-down');
            jQuery('#'+prodModel+'-details').slideUp('fast');
            
        } else {
            jQuery('.rebate-details').hide();
            jQuery('.eco-more-details').show();
            jQuery('#'+prodModel+'-details').slideDown('fast');
            jQuery('.prod-rebate-btns').find('i').attr('class', 'fa fa-chevron-down');
            jQuery('#'+prodModel).find('i').attr('class', 'fa fa-chevron-up');
        }
    });

    jQuery(document).on('click', '.eco-more-details', function(){
        jQuery('#'+moreDetailsLink).show();
        moreDetailsLink = jQuery(this).attr('id');
        number = moreDetailsLink.substr(moreDetailsLink.lastIndexOf("-") + 1); //last #
        jQuery('.panel-terms').slideUp('fast');
        jQuery('#'+moreDetailsLink).hide();
        jQuery('#'+prodModel+'-terms-'+number).slideDown('fast');
    });

    jQuery(document).on('click', '.eco-less-details', function(){
        jQuery('.panel-terms').slideUp('fast');
        console.log(number);
        jQuery('#'+moreDetailsLink).show();
    });

    jQuery(document).on('click', '.pagers', function(){
        var pagerID = jQuery(this).attr('id');
        console.log(pagerID);
        var pageNumber = pagerID.substr(pagerID.lastIndexOf("p") + 1);
        console.log(pageNumber);
        jQuery('.pages').hide();
        jQuery('#page-'+pageNumber).show();

        jQuery('.pagers').removeClass('current');
        jQuery('#p'+pageNumber).addClass('current')
    });

});


