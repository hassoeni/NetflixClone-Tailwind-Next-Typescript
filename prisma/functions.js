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
// const defaultEndPoint = "https://rickandmortyapi.com/api/character/"
// export async function getServerSideProps() {
//   const res = await fetch(defaultEndPoint)
//   const data = await res.json()
//   return {
//     props: {
//       data
//     }
//   }
// }


// ! Dit werkt bij klikken fetcht hij alle gefilterde data in dit geval comedy nu moet het gelijk zijn aan de serie die je selecteert 
const getFilteredMovieList = async (e) => {
	// res.body doorgeven en req.body ontvangen
	try {
		const body = { category: 'Comedy' } // welke data wil je doorgeven maak het specifiek
		const response = await fetch(`api/moviefeed`, {
			// waar moet die data heen
			method: 'POST', // welke methode wil je toepassen
			headers: { 'Content-Type': 'application/json' }, // welke eigenschappen heeft die data nodig
			body: JSON.stringify(body), // in welke format moet die data worden opgeslagen
		})
		// console.log(response)
		const movielist = await response.json() // data terug ontvangen 
		setMovieData(movielist) // data vastleggen in een variable
		// console.log('data successfully send ', movielist)
		// await Router.push("/p/[id]", `/p/${email}`) // return to main screen 
	} catch (error) {
		console.error(error)
	}

	// const playVideo = e => {
	//   e.target.play();
	//   setVideoStyles({
	//     transform: "scale(2, 2)",
	//     marginLeft: "300px"
	//   });
	// }
	// const stopVideo = e => {
	//   e.target.pause();
	//   setVideoStyles({
	//     transform: "scale(1, 1)",
	//     marginLeft: 0
	//   });
	// }



	// youtube api 
	const KEY = 'MYKEY'


	const searchData = async (text) => {
		setSearch(text)
		const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
			params: {
				part: 'snippet',
				q: search,
				maxResults: 15,
				key: KEY
			}
		})
		setVideo(response.data.items)
	}

	// ! Dit werkt bij klikken fetcht hij alle gefilterde data in dit geval comedy nu moet het gelijk zijn aan de serie die je selecteert 
	const getSerieList = async (e) => {
		// res.body doorgeven en req.body ontvangen
		try {
			const body = { category: 'Fantasy' } // welke data wil je doorgeven maak het specifiek
			const response = await fetch(`api/seriefeed`, {
				// waar moet die data heen
				method: 'POST', // welke methode wil je toepassen
				headers: { 'Content-Type': 'application/json' }, // welke eigenschappen heeft die data nodig
				body: JSON.stringify(body), // in welke format moet die data worden opgeslagen
			})
			console.log(response)
			const serielist = await response.json() // data terug ontvangen 
			setSerieData(serielist) // data vastleggen in een variable
			console.log('data successfully send ', { serielist })
			// await Router.push("/p/[id]", `/p/${email}`) // return to main screen 
		} catch (error) {
			console.error(error)
		}
	}
	<button onClick={getSerieList}>get serielist</button>
	{
		serieData.map(singleSerie => {
			return (
				<>
					<div>{singleSerie.episodeTitle}</div>
				</>
			)
		})
	}
