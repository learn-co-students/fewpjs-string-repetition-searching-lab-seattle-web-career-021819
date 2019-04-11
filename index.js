// Code your solution here

const heyJude = () => {
  return "Na na na na na na na, na na na na, hey Jude.".repeat(16)
}

const prohibitedLanguage = (string) => {
  const prohibited = /candycorn|brusselssprouts/
  return string.search(prohibited)
}
