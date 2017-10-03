(function(){

    function addPlaceholder(selector, label){
        if(label.indexOf('<p>') > -1){
            label = label.replace('<p>','');
            label = label.replace('</p>','');
        }
        if(label.indexOf('<span>') > -1){
            label = label.replace('<span>','');
            label = label.replace('</span>','');
        }
        if(label.indexOf('<span class="gfield_required">') > -1){
            label = label.replace('<span class="gfield_required">','');
            label = label.replace('</span>','');
        }
        jQuery(selector).find('input').attr('placeholder',label);
        jQuery(selector).find('textarea').attr('placeholder',label);
    }

    jQuery.fn.placeholder = function(){
        jQuery(this).find('li').each(function(){
            if(jQuery(this).find('label').length){
                var label = jQuery(this).find('label').html();
                addPlaceholder(this, label);
                jQuery(this).find('label').hide();
            }
        })
    };

    jQuery.fn.placeholderCTM = function( options ){
        var setting = jQuery.extend({
            textEdit: false,
            labelHide: true
        }, options);

        console.log(setting.textEdit);
        console.log(setting.labelHide);

        jQuery(this).each(function(){
            if(setting.textEdit == false){
                var label = jQuery(this).find('label').html();
                addPlaceholder(this, label);
            }else{
                var label = setting.textEdit;
                addPlaceholder(this, label);
            }

            if(setting.labelHide == true){
                jQuery(this).find('label').hide();
            }
        })
    };
}(jQuery));