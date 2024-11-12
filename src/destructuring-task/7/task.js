const article = { title: "Learning JS", tags: ["JavaScript", "Web", "Frontend"], publisher: "Tech World" };
const { title, tags: [firstTag, ...remainingTags], publisher} = article;
console.log(title, firstTag, remainingTags, publisher)