define([], function(){
    var MultiselectController = function($scope) {
        this._scope = $scope;
        this.isopen = false;
    };

    MultiselectController.getName = function() {
        return "MultiselectController";
    };

    MultiselectController.prototype = {

        getButtonLabel:  function() {
            return this.buttonLabel ? this.buttonLabel : "Select";
        },

        selectItem: function(item, event) {
            if (item.selected) {
                // unselect it
                if (this.selectedOptions) {
                    var index = this.selectedOptions.indexOf(item);
                    this.selectedOptions.splice(index, 1);
                }
                item.selected = false;
            } else {
                // select it
                 if (this.selectedOptions) {
                     this.selectedOptions.push(item);
                 }
                item.selected = true;
            }

            event.stopPropagation();
        }
    };

    return MultiselectController;
});



