import delay from './delay';

const keys = [
  {
    _id: '582b32d49514c32cbb80ee2f',
    name: 'key 1',
    hash: '9120f5524cc54b86cf1d2a1c04faf44c', // md5 'password 1'
    isNumerical: false
  }, {
    _id: '582b33b29514c32cbb80ee31',
    name: 'key 2',
    hash: 'bc140e6106e0c3b446772d7d90280501', // md5 'password 2'
    isNumerical: false
  }, {
    _id: '582b33b29514c32cbb80ee32',
    name: 'key 3',
    hash: '48cb7ea4e06a0f2804f7106d64c1c69d', // md5 'password 3'
    isNumerical: false
  }, {
    _id: '582b33b29514c32cbb80ee33',
    name: 'key 4',
    hash: '4081e8d8c88084a26911ae5534e5ddbb', // md5 'password 4'
    isNumerical: false
  }, {
    _id: '582b33b29514c32cbb80ee34',
    name: 'key 5',
    hash: 'e4e0f476ad9e126e38c07f066b38fe38', // md5 'password 5'
    isNumerical: false
  }, {
    _id: '582b33b29514c32cbb80ee35',
    name: 'key 6',
    hash: '936a9cdd294b63cd058ecba8b6d1f173', // md5 'password 6'
    isNumerical: false
  }, {
    _id: '582b33b29514c32cbb80ee36',
    name: 'key 7',
    hash: '2a64cbe018343c13cbec0ade973bbc6d', // md5 'password 7'
    isNumerical: false
  }, {
    _id: '582b33b29514c32cbb80ee37',
    name: 'key 8',
    hash: '11b0f5b528bbdaa389a04ebbe4c57c1f', // md5 'password 8'
    isNumerical: false
  }, {
    _id: '582b33b29514c32cbb80ee38',
    name: 'key 9',
    hash: 'b20ad8f11bec70b92499ac92d0d81a83', // md5 'password 9'
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

  static addKey(key) {
    key = Object.assign({}, key); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (key._id) {
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

  static removeKey(keyId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfKeyToRemove = keys.findIndex(key => key._id === keyId);
        keys.splice(indexOfKeyToRemove, 1);
        resolve();
      }, delay);
    });
  }

  static generateId() {
    return this.s4() + this.s4() + this.s4() +
      this.s4() + this.s4() + this.s4();
  }

  static s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
}

export default KeysApi;