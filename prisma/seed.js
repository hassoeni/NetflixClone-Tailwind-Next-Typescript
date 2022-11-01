const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const set = require('date-fns/set')


async function main() {
    const BlackAdam = await prisma.movie.upsert({
        where: { id: 1 },
        update: {},
        create: {
            likedCount: 10,
            liked: true,
            title: "Black Adam",
            description: "Een man heeft magische krachten gekregen van de tovenaar Shazam duizenden jaren geleden. Hij heeft deze krachten gebruikt voor kwaadaardige doeleinden, waardoor hij eeuwenlang gevangen heeft gezeten. Nu staat hij op het punt om vrij te komen.",
            category: "Action",
            viewed: false,
            viewcount: 0,
            image: "https://image.cnbcfm.com/api/v1/image/107138019-1666273130877-black_adam_Cropped.jpg?v=1666610288",
            url: "https://mooviejs.com/trailer/trailer.mp4",
            ReleaseYear: set(new Date(), { hours: 1, minutes: 10 }),
            cast: "Dwayne Johnson, Dany Garcia, Hiram Garcia, Beau Flynn",
            special: true,
            specialtype: "Box Office",
            movielength: "2.25h",
            hasserie: undefined,
            isaserie: false
        }
    })
    const Halloween = await prisma.movie.upsert({
        where: { id: 2 },
        update: {},
        create: {
            likedCount: 100,
            liked: true,
            title: "Halloween Kills",
            description: "Michael Myers heeft op achtjarige leeftijd zijn zusje gedood. Hij werd opgesloten in een instelling, waaruit hij nu is ontsnapt. Hij keert terug naar zijn geboortestad om deze opnieuw te terroriseren, en op Halloweennacht slaat hij toe.",
            category: "Horror",
            viewed: false,
            viewcount: 0,
            image: "https://www.empirecinemas.co.uk/_uploads/film_images/10177_7364.JPG",
            url: "https://www.empirecinemas.co.uk/_uploads/film_images/10177_7364.JPG",
            ReleaseYear: set(new Date(), { hours: 1, minutes: 10 }),
            cast: "David Gordon Green",
            special: false,
            specialtype: "",
            movielength: "1.45h",
            hasserie: undefined,
            isaserie: false
        }
    })
    const TopGun = await prisma.movie.upsert({
        where: { id: 2 },
        update: {},
        create: {
            likedCount: 200,
            liked: true,
            title: "Top Gun: Maverick",
            description: "Waaghals Pete 'Maverick' Mitchell strijdt bij Top Gun, een keiharde opleiding voor toppiloten, om de beste vliegenier van zijn lichting te worden. Ondertussen valt zijn oog op de beeldschone vlieginstructeur Charlie Backwood.",
            category: "Action",
            viewed: true,
            viewcount: 1,
            image: "https://dx35vtwkllhj9.cloudfront.net/paramountpictures/top-gun/images/regions/be_nl/share.png",
            url: "https://dx35vtwkllhj9.cloudfront.net/paramountpictures/top-gun/images/regions/be_nl/share.png",
            ReleaseYear: set(new Date(), { hours: 1, minutes: 10 }),
            cast: "Tom Cruise",
            special: true,
            specialtype: "Money Maker",
            movielength: "2.30h",
            hasserie: undefined,
            isaserie: false
        }
    })
    const GameofThrones = await prisma.movie.upsert({
        where: { id: 3 },
        update: {},
        create: {
            likedCount: 200,
            liked: true,
            title: "Game of Thrones",
            description: " Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia",
            category: "Fantasy",
            viewed: true,
            viewcount: 1,
            image: "https://images.herzindagi.info/image/2019/Jan/got-synopsis.jpg",
            url: "https://mooviejs.com/trailer/trailer.mp4",
            ReleaseYear: set(new Date(), { hours: 1, minutes: 10 }),
            cast: "Kitt Harrington, Emilia Clarke",
            special: true,
            specialtype: "Top of the line",
            movielength: "50m",
            hasserie: {
                create:[ 
                    {
                    episodeid: 1,
                    season: 1,
                    episodeTitle: "A Feast of Crows",
                    likedCount: 10,
                    liked: true,
                    synopsis: "First pilot episode",
                    category: "Fantasy",
                    viewed: false,
                    viewcount: 0,
                    image: "https://static.hbo.com/content/dam/hbodata/series/game-of-thrones/video-stills/season-01/game-of-thrones-season-1-episode-1-full-stitched-607175_PRO35_10-1920.jpg",
                        url: "https://mooviejs.com/trailer/trailer.mp4",
                    ReleaseYear: set(new Date(), { hours: 1, minutes: 10 }),
                    cast: "Kitt Harrington, Sean Bean",
                    special: false,
                    specialtype: "Top of the line",
                    episodelength: "55m",
                }, 
                {
                    episodeid: 2,
                    season: 2,
                    episodeTitle: "A dance of dragons",
                    likedCount: 10,
                    liked: true,
                    synopsis: "First episode second season",
                    category: "Fantasy",
                    viewed: false,
                    viewcount: 0,
                    image: "https://static01.nyt.com/images/2011/04/10/arts/THRONES-6/THRONES-6-jumbo-v3.jpg",
                    url: "https://mooviejs.com/trailer/trailer.mp4",
                    ReleaseYear: set(new Date(), { hours: 1, minutes: 10 }),
                    cast: "Kitt Harrington, Sean Bean",
                    special: false,
                    specialtype: "Top of the line",
                    episodelength: "55m",
                },

            ]
            },
            isaserie: true
        }
    })

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

