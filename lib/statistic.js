var HarResult, Statistic;

HarResult = require('./harResult');

Statistic = (function() {

  function Statistic(results) {
    var res, _i, _len;
    if (results == null) {
      results = [];
    }
    this.results = [];
    for (_i = 0, _len = results.length; _i < _len; _i++) {
      res = results[_i];
      this.addResult(res);
    }
  }

  Statistic.prototype.addResult = function(result) {
    return this.results.push(result);
  };

  Statistic.prototype.average = function() {
    var r, result, _i, _len, _ref;
    result = new HarResult();
    if (this.results.length) {
      _ref = this.results;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        r = _ref[_i];
        result = HarResult.add(result, r);
      }
      result = HarResult.divideBy(result, this.results.length);
    }
    return result;
  };

  Statistic.prototype.deviation = function() {
    var result;
    result = new Result();
    return result;
  };

  return Statistic;

})();

module.exports = Statistic;