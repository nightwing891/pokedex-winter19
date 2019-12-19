class CreatePokemons < ActiveRecord::Migration[6.0]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :pokemon_type
      t.integer :level
      t.string :moves
      t.string :weight
      t.string :height

      t.timestamps
    end
  end
end
