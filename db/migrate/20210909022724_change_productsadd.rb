class ChangeProductsadd < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :product_category, :string
    add_index :products, :product_category
  end
end
