function heyJude(text) {
  return text.repeat(16)
}

let regex = /candycorn|brusselssprouts/

function prohibitedLanguage(text) {
  return text.search(regex)
}
