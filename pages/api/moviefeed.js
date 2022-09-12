import prisma from "../../lib/prisma";



// ! TODO adjust to fetch specific data
export default async function handle(req, res) {
    const {data} = req.body;
    try {
        const result = await prisma.movie.findMany({
            where: {
                category: data
            }
        });
        // res.status(200).json(result);
        res.send(result)
        console.log(result)
    } catch (err) {
        console.log(err);
        res.status(403).json({ err: "Error occured." });
    }
};