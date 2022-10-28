/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  return str
    .split("")
    .map((entity) => htmlEntities[entity] || entity)
    .join("");
}

console.log(convertHTML("Dolce & Gabbana")); // Dolce &amp; Gabbana
