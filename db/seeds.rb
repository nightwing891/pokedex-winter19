@type_arr = [ "Normal", "Fire", "Grass", "Water" ]

10.times do
  Pokemon.create(
    name: Faker::Games::Pokemon.name,
    pokemon_type: @type_arr.sample,
    level: 1,
    moves: Faker::Games::Pokemon.move + " " + Faker::Games::Pokemon.move + " " + Faker::Games::Pokemon.move + " " + Faker::Games::Pokemon.move,
    weight: Faker::Number.decimal(l_digits: 2),
    height: Faker::Number.decimal(l_digits: 2)
  )
end

puts 'Data Seeded'