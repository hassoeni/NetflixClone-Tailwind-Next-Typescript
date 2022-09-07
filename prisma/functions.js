// handle signup from front end 

const submitUser = async (e) => {
    e.preventDefault()
    try {
        const body = { name, email, password }
        await fetch(`/api/user`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(body),
        })
        console.log(body)
        console.log('added user successfully')
    await Router.push('/')
    } catch (e) {
        console.error(e)
    }
}


// handle signup from backend API route api/user
export default async function handle(req, res) {
	const { email, password, name } = req.body

	const result = await prisma.user.create({
		data: {
			name: name,
			email: email,
			password: password,
		},
	})
	res.json(result)
}


// handle sign in from backend API route api/user 
export default async function handle(req, res) {
	const result = await prisma.user.findMany({
		where: {
			email: req.body.email,
		},
		select: {
			id: true,
			email: true,
		},
	})
	// const objectInt = result.map((item) => {
	// 	for (const [key, value] of Object.entries(item)) {
	// 		return `${key}: ${value}`
	// 		// return (`${key}: ${value}`)
	// 	}
	// })

	const GotUserID = result.map((items) => {
		return `${items.id}`
	})
	const GotUserEmail = result.map((items) => {
		return `${items.email}`
	})

	res.json({ id: GotUserID, email: GotUserEmail })
}

// handle sign in front client side 
	const loginUser = async (e) => {
		e.preventDefault()
		try {
			const body = { email, password }
			await fetch(`/api/login`, {
				method: 'POST',
				headers: { 'Content-type': 'application/json' },
				body: JSON.stringify(body),
			})
			// console.log(body)
			console.log('You Logged in successfully')
			console.log('Welcome', body.email)
			await Router.push('/protectedroute')
		} catch (e) {
			console.error(e)
		}
	}