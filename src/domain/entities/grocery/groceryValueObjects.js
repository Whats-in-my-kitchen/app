function ItemCount(value) {
    if (value === undefined){
      return new Error('Value cannot be undefined')
    }
    if (value < 0) {
      return new Error('Item Count Cannot be negative');
    }
    if (value > 99999) {
      return new Error('Value too high. Max is 99999');
    }
    this.value = value;
    return Object.freeze(this);
}
