const capitalize = (string) => {
    if (typeof string !== 'string' || string.length === 0) {
      throw new Error('Input must be a non-empty string');
    }
  
    const capital = string[0].toUpperCase() + string.slice(1);
    return capital;
  }
  
  module.exports = capitalize;
  