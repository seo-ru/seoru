function splitQuery(text) {
  return text.replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ').split(' ');
}

function splitQueryToWildcard(text) {
  return text.replace(/^\s+|\s+$/g, '').replace(/\s+/g, '%');
}

export { splitQuery, splitQueryToWildcard };
