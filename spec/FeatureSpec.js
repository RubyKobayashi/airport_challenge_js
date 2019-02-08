'use strict';

describe ('FeatureTest', function(){

  var airport
  var plane
  var plane2

  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
    plane2 = new Plane()
  });



  it('airport can land planes and confirm it has landed', function(){
    airport.land(plane);
  expect(airport.planes()).toEqual([plane]);
    airport.land(plane2);
  expect(airport.planes()).toEqual([plane, plane2])
  });


  it('airport can take off planes and confirm it has taken off', function(){
    airport.land(plane);
    airport.land(plane2);
    airport.takeOff(plane);
    airport.takeOff(plane2);
  expect(airport.planes()).toEqual([]);
  });



});
