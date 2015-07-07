/**
 * Created by Aleosha on 06.06.2015.
 */
angular.module('luccaApp').factory('GetData', ['$resource',
    function($resource){
        return {
            returnedData: $resource('data/:id', {id: '@id'}, {
                'get':    {method:'GET', isArray: true},
                'getObject':    {method:'GET'},
                'query': { method: 'GET', params: {}, isArray: true }
            })
        };
    }]);