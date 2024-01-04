export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getters
  get code() {
    return this._code;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
