const {db, Recipe, User, Ingredient} = require('./server/db');

const seed = async () => {
    await db.sync({force: true})

    //users

    const luke = await User.create({
        fName: "Luke",
        lName: "Jones",
        username: "joker_jonesy",
        bio: "I created this website"
    })

     await User.create({
        fName: "Lucas",
        lName: "Maul",
        username: "lukexp",
        bio: "I  did not make anything for this site"
    })


    await Ingredient.create({
        name: 'mayonaise',
        color: "#ffefd4",
    })

    //recipesPage

    await Recipe.create({
        name: "blt",
        description: "The classic",
        userId: luke.id,
        ingredients: [
            {
                name: 'bacon',
                color: "#911304",
                selfGranted: true
            },
            {
                name: 'lettuce',
                color: "#569d00",
                selfGranted: true
            },
            {
                name: 'tomato',
                color: "#ff0000",
                selfGranted: true
            },
            {
                name: 'bread',
                color: "#8d4b27",
                selfGranted: true
            }

        ]
    }, {
        include: Ingredient
    });

    db.close()
    console.log(` Seeding successful!`)
}

seed().catch(err => {
    db.close()
    console.log(`
    Error seeding:
    ${err.message}
    ${err.stack}
  `)
})