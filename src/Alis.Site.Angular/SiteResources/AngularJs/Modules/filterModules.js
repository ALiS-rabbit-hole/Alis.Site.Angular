angular.module('customFilters', [])
    .filter('inArray', function($filter) {
        return function(list, arrayFilter, element) {
            if (arrayFilter) {
                return $filter("filter")(list, function(listItem) {
                    return arrayFilter.indexOf(listItem[element]) != -1;
                });
            }
        };
    })
    .filter('notInArray', function($filter) {
        return function(list, arrayFilter, element) {
            if (arrayFilter) {
                return $filter("filter")(list, function(listItem) {
                    for (var i = 0; i < arrayFilter.length; i++) {
                        if (arrayFilter[i][element] == listItem[element])
                            return false;
                    }
                    return true;

                });
            };
        }
    });