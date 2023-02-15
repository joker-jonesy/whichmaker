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

    const ingredients = [
        {
            name: 'mayonaise',
            color: "#ffefd4",
        },
        {
            name: 'bacon',
            color: "#911304",
        },
        {
            name: 'tomato',
            color: "#ff0000",
        },
        {
            name: 'lettuce',
            color: "#569d00"
        },
        {
            name: 'bread',
            color: "#8d4b27",
        }
    ]

    const recipes = [
        {
            name: "blt",
            description: "The classic",
            userId: luke.id
        }
    ]


    //recipesPage

    const newIngredients = await Promise.all(ingredients.map(ing => Ingredient.create(ing)));

    const newRecipes = await Promise.all(recipes.map(rc => Recipe.create(rc)));

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