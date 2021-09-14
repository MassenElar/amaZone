class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title 
      t.string :body
      t.integer :product_id, null: false 
      t.integer :reviewer_id, null: false
      t.integer :rating, null: false
      t.timestamps
    end
    add_index :reviews, [:product_id, :reviewer_id], unique: true 
  end
end
