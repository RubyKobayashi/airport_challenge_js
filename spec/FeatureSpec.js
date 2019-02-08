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



  it('airport can land planes and confirm it has landded', function(){
    airport.land(plane);
  expect(airport.planes()).toEqual([plane]);
    airport.land(plane2);
  expect(airport.planes()).toEqual([plane, plane2])
  });



});
