'use strict';

describe ('Airport', function(){

  var airport;
  var plane;
  var plane2;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy("plane",['attemptToLand', 'takeOff']);
    plane2 = jasmine.createSpy("plane",['attemptToLand']);
  });


  it('airport starts off empty', function(){
    expect(airport.planes()).toEqual([])
  })

  it('airport can land planes', function(){
    airport.land(plane);
    expect(airport.planes()).toEqual([plane]);
    airport.land(plane2);
    expect(airport.planes()).toEqual([plane, plane2]);
  });

  it('airport can take off planes', function(){
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.planes()).toEqual([]);
  });


});
