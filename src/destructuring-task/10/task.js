const employee = { firstName: "John", lastName: "Smith", skills: ["JavaScript", "React", "Node.js", "GraphQL", "TypeScript"] };
const { firstName, lastName, skills: [firstSkill, ...remainingSkills] } = employee;
console.log(firstName, lastName, firstSkill, remainingSkills)