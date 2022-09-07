import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


// // this sends queries towards DB
// // !IMPORTANT The property is named after the model, but the first letter is lowercased (so for the Post model it's called post, for Profile it's called profile).
// async function main() {
//     const allMovies = await prisma.movie.findMany()
//     console.log('HERE are all the movies', allMovies)

// }


// // Calls our query function 
// main()
//     .then(async () => {
//         await prisma.$disconnect()
//     })
//     .catch(async (e) => {
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     })


export default prisma