'use strict';

describe ('Plane',function(){

   var plane;
   var airport;

   beforeEach(function(){
     plane = new Plane();
     airport = jasmine.createSpyObj('airport',['land']);
   });

   it('can land at an airport', function(){
     plane.attemptToLand(airport)
     expect(airport.land).toHaveBeenCalledWith(plane);
   });

   it('can take off from an airport', function(){
     plane.attemptToLand(airport)
     plane.attemptToTakeOff()
     expect(airport.takeOff).toHaveBeenCalled();
   });





  });
