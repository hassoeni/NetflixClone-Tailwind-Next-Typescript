import prisma from "../../lib/prisma";




export default async function handle(req, res) {
    // const {category} = req.body;
    console.log(req.body)
    try {
        const result = await prisma.serie.findMany({
            where: {
                category: req.body.category
            }
        });
        // res.status(200).json(result);
        res.send(result)
        // console.log(result)
    } catch (err) {
        console.log(err);
        res.status(403).json({ err: "Error occured." });
    }
};