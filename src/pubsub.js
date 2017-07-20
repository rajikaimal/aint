class PubSub {
  constructor(props) {
    this.stateTree = {};
  }

  publish(stateSpot, stateChunk) {
    if (this.stateTree[stateSpot] === undefined) {
      this.stateTree[stateSpot] = {};
      this.stateTree[stateSpot]._state = stateChunk;
    }
    if (typeof this.stateTree[stateSpot]._listener === "function") {
      this.stateTree[stateSpot]._listener(stateChunk);
    }
  }

  subscribe(stateSpot, cb) {
    if (this.stateTree[stateSpot] === undefined) {
      this.stateTree[stateSpot] = {};
    }

    this.stateTree[stateSpot]._listener = cb;

    if (typeof this.stateTree[stateSpot]._listener === "function") {
      this.stateTree[stateSpot]._listener(this.stateTree[stateSpot]._state);
    }
  }
}

module.exports = PubSub;
