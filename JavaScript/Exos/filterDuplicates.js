function filterDuplicates(data) {
    const seen = new Set();
    const filteredArray = data.filter(el => {
      if (seen.has(el)) {
        return false;
      } else {
        seen.add(el);
        return true;
      }
    });
    return filteredArray;
  }
  
  function filterDuplicates(data) {
    let newData = [...new Set(data)];
    return newData;
  }