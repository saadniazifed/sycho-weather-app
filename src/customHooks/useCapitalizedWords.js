const useCapitalizedWords = (str) => {
  let words = str.split(" "); // create an array of words
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  const joinedWord = words.join(" ");

  return { joinedWord };
};
export default useCapitalizedWords;
