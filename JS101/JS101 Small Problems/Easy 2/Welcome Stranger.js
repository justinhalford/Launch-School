function greetings(array, object) {
  return (`Hello, ${array.join(' ')}! Nice to have a ${object.title} ${object.occupation} around.`)
}

console.log(
  greetings(["Rick", "Astley"], { title: "Spicy", occupation: "Memelord" })
);