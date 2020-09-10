const arrayRotate = (arr,step) => {
     arr.unshift(...arr.splice(step));
     return arr;
}

module.exports = arrayRotate;