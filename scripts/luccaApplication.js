/**
 * Created by Aleosha on 06.06.2015.
 */
angular.module('luccaApp', ['sharedModule','ngResource', 'ngRoute', 'ngMaterial'])
    .constant(
    //for the weather widget on home page
    'WEATHER_URL', {
        F:'http://api.openweathermap.org/data/2.5/forecast/daily?q=lucca,italy&mode=json&units=imperial&cnt=5&APPID=f11b6479b3f18b18b3fbc16a916960db',
        C:'http://api.openweathermap.org/data/2.5/forecast/daily?q=lucca,italy&mode=json&units=metric&cnt=5&APPID=f11b6479b3f18b18b3fbc16a916960db',
        cText:'C',
        fText:'F'
    }
    );
