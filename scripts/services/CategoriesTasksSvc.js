angular.module('sharedModule').service('CategoriesTasks', function ($rootScope) {

    this.findByProperty = function (propertyName, propertyValueForSearch){
        for (var i = 0; i < $rootScope.categories.length; i++) {
            var currentCategory = $rootScope.categories[i];
            if (currentCategory[propertyName] == propertyValueForSearch) {
                break;
            }
        }
        return currentCategory;
    };

    this.findByPropertyAndReturnRef = function (propertyName, propertyValueForSearch){
        for (var i = 0; i < $rootScope.categories.length; i++) {
            var currentCategory = $rootScope.categories[i];
            if (currentCategory[propertyName] == propertyValueForSearch) {
                break;
            }
        }
        //return integer - index of element in categories array
        return i;
    };
});