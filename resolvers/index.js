module.exports = {
  Query: {
    Data: (global, args) => {
      return new Promise((resolve, reject) => {
        resolve("hello");
      });
    },
  }
}