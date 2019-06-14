function removeDuplicateSpace(text) {
  return text.replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ');
}

function spaceToWildcard(text) {
  return text.replace(/\s+/g, '%');
}

export { removeDuplicateSpace, spaceToWildcard };
