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
  