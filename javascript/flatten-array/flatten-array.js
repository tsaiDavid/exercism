export default class Flattener {
  // recursive solution

  flatten(arr) {
    return arr.reduce((res, el) => {
      if (Array.isArray(el)) {
        return res.concat(this.flatten(el));
      }

      if (el === null || el === undefined) {
        return res;
      }

      res.push(el);
      return res;
    }, []);
  }
}
