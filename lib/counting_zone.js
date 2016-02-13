module.exports = function (onFlush) {
  return zone.fork({
    '+enqueueTask': function () {
      this.data.count += 1;
    },
    '-dequeueTask': function () {
      this.data.count -= 1;
    },
    '+afterTask': function () {
      if (this.data.count === 0 && !this.data.flushed) {
        this.data.flushed = true;
        this.run(onFlush);
      }
    },
    data: {
      count: 0,
      flushed: false
    }
  });
};
