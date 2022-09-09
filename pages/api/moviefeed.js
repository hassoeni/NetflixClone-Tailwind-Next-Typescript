import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export default async function handle(req, res) {
    const data = req.body;
    try {
        const result = await prisma.movie.findMany();
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(403).json({ err: "Error occured." });
    }
};