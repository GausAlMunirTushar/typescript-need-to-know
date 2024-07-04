type NoobDeveloper = {
    name: string
}
// type JuniorDeveloper = {
//     name: string
//     expertise: string,
//     experience: number,
// }

// Intersection
type JuniorDeveloper = NoobDeveloper & {
    expertise: string,
    experience: number,
}

// Union Type
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'John',
    expertise: 'Frontend',
    experience: 2
}

enum DeveloperLevel {
    Noob,
    Junior,
    Senior
}