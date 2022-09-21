import prisma from '../../lib/prisma'

export default async function handle(req, res) {

    const { email, password } = req.body

    const result = await prisma.user.create({
        data: {
            email: email,
            password: password
        }
    })
    res.json(result)
}

