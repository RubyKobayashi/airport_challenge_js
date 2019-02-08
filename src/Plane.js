'use strict';

function Plane(){};



Plane.prototype.attemptToLand = function(airport){
  airport.land(this);
  this._currentLocation = airport
};
