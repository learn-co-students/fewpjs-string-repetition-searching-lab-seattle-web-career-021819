function heyJude() {
  let str = 'Na na na na na na na, na na na na, hey Jude.';
  return str.repeat(16);
}

let prohibitedLanguage = (str) => {
  let reg = /candycorn|brusselssprouts/;
  return str.search(reg);
}
