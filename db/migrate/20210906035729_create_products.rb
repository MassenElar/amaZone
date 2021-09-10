class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :product_name, null: false 
      t.text :product_description, null: false 
      t.integer :product_inventory, null: false
      t.decimal :product_price, null: false
      t.integer :category_id, null: false
      t.integer :seller_id, null: false
      t.timestamps
    end
    add_index :products, :product_name
    add_index :products, :category_id
    add_index :products, :seller_id
  end
end
