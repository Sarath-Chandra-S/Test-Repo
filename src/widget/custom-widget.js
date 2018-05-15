(function(){
    NodeList.prototype.forEach = function(callback){
        Array.prototype.forEach.call(this, callback);
    };

    function deactivateSelect(select){

        if(!select.classList.contains('active')) return;

        var optList = select.querySelector('.optlist');
        optList.classList.add('hidden');

        select.classList.remove('active');
    }

    function activateSelect(select, selectList){
        
        if(!select.classList.contains('active')){
            selectList.forEach(deactivateSelect);
            select.classList.add('active');
        }
    }

    function toggleOptList(select){
        var optList = select.querySelector('.optlist');
        optList.classList.toggle('hidden');
    }

    function highlightOption(select, option){
        var optionList = select.querySelectorAll('.option');
        
        optionList.forEach(function(otherItem){
            otherItem.classList.remove('highlight');
        });

        option.classList.add('highlight');
    }

    window.addEventListener('load',function(){
        // This page has only one custom-widget, but we are doing for case of multiple custom widgets.
        var selectList = document.querySelectorAll('.select');

        selectList.forEach(function (selectItem){
            var optionList = selectItem.querySelectorAll('.option');
            
            optionList.forEach(function(option){
                option.addEventListener('mouseover', function(){
                    highlightOption(selectItem, option);
                });
            });

            selectItem.addEventListener('click', function(event){
                toggleOptList(selectItem);
            });

            selectItem.addEventListener('focus', function(event){
                activateSelect(selectItem, selectList);
            });

            select.addEventListener('blur', function(event){
                deactivateSelect(selectItem);
            });
        });


    });
})();