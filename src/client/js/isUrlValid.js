function isUrlValid(url) {
  const test =
    /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  const res = new RegExp(test);
  return res.test(url);
}

export { isUrlValid };
