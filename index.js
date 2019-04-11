const heyJude = (verse) => {
  return verse.repeat(16)
}

const prohibitedLanguage = (str) => {
  const bannedWords = /candycorn|brusselssprouts/
  return str.search(bannedWords)
}
