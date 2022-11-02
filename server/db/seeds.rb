
puts "🌱 Seeding spices..."

# Seed your database here
User.delete_all
Ingredient.delete_all
Recipe.delete_all
RecipeIngredient.delete_all

jacob = User.create(username: "Jacob Jones", password: "Pocoes!7")

pbj = jacob.recipes.create!(name: "Peanut Butter & Jelly Sandwich", instructions: "Take two pieces of bread and spread peanut butter on one piece and jelly on the other. Then put the two pieces together and enjoy", picture:"https://media.istockphoto.com/photos/peanut-butter-and-jelly-sandwich-picture-id454170501?k=20&m=454170501&s=612x612&w=0&h=s1-O68ora9721Gfh3cRytFGzkKwPrx1Ha0Do5Gp4AyU=")
avocado_toast = jacob.recipes.create!(name: "Avocado Toast", instructions: "Toast a slice of bread, spread avocado over the toast using a knife, and add salt and pepper to taste.", picture: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2018%2F07%2Fmain%2F1807w-avocado-toast-recipe.jpg%3Fitok%3D_dDi7ZQQ&w=800&c=sc&poi=face&q=60")

first = Ingredient.create!(name: "Bread")
second = Ingredient.create!(name: "Peanut Butter")
third = Ingredient.create!(name: "Jelly")
fourth = Ingredient.create!(name: "Avocado")
fifth = Ingredient.create!(name: "Salt")
sixth =Ingredient.create!(name: "Pepper")


pbj.recipe_ingredients.create(measurement: "2 slices", ingredient_id: first.id)
pbj.recipe_ingredients.create(measurement: "2 tablespoons", ingredient_id: second.id)
pbj.recipe_ingredients.create(measurement: "2 tablespoons", ingredient_id: third.id)


avocado_toast.recipe_ingredients.create!(measurement: "2 slices", ingredient_id: first.id)
avocado_toast.recipe_ingredients.create!(measurement: "1/2 avocado", ingredient_id: fourth.id)
avocado_toast.recipe_ingredients.create!(measurement: "Pinch of Salt", ingredient_id: fifth.id)
avocado_toast.recipe_ingredients.create!(measurement: "Pinch of Pepper", ingredient_id: sixth.id)

puts "✅ Done seeding!"