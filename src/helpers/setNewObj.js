function setNewObj(res) {
  const NewRate = {};
  for (const key in res) {
    if (Object.hasOwnProperty.call(res, key)) {
      if (key === 'rate') {
        NewRate['rate'] = res[key];
      } else {
        NewRate['curency'] = res[key];
      }
    }
  }
  return NewRate;
}

export { setNewObj };
