import delay from './delay';

const keys = [
  {
    _id: '582b32d49514c32cbb80ee2f',
    name: 'key 1',
    hash: '',
    isNumerical: false
  }, {
    _id: '582b33b29514c32cbb80ee31',
    name: 'key 2',
    hash: '',
    isNumerical: false
  }, {
    _id: '582b33b29514c32cbb80ee32',
    name: 'key 3',
    hash: '',
    isNumerical: false
  }, {
    _id: '582b33b29514c32cbb80ee33',
    name: 'key 4',
    hash: '',
    isNumerical: false
  }, {
    _id: '582b33b29514c32cbb80ee34',
    name: 'key 5',
    hash: '',
    isNumerical: false
  }, {
    _id: '582b33b29514c32cbb80ee35',
    name: 'key 6',
    hash: '',
    isNumerical: false
  }, {
    _id: '582b33b29514c32cbb80ee36',
    name: 'key 7',
    hash: '',
    isNumerical: false
  }, {
    _id: '582b33b29514c32cbb80ee37',
    name: 'key 8',
    hash: '',
    isNumerical: false
  }, {
    _id: '582b33b29514c32cbb80ee38',
    name: 'key 9',
    hash: '',
    isNumerical: false
  }
];

class KeysApi {
  static getAllKeys() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], keys));
      }, delay);
    });
  }

  static saveKey(key) {
    key = Object.assign({}, key); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (key.id) {
          const existingKeyIndex = keys.findIndex(k => k._id === key._id);
          keys.splice(existingKeyIndex, 1, key);
        } else {
          key._id = this.generateId();
          keys.push(keys);
        }
        resolve(key);
      }, delay);
    });
  }

  static deleteKey(authorId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfAuthorToDelete = authors.findIndex(author => {
          author.authorId == authorId;
        });
        authors.splice(indexOfAuthorToDelete, 1);
        resolve();
      }, delay);
    });
  }

  _generateId() {
    return this._s4() + this._s4() + this._s4() +
      this._s4() + this._s4() + this._s4();
  }

  _s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
}

export default KeysApi;