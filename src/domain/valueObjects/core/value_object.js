function Name(value) {
  if (value == '') {
    return new Error('Name cannot be empty');
  }

  this.value = value;
  return Object.freeze(this);
}