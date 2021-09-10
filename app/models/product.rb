class Product < ApplicationRecord
      validates :product_name, :product_description, :product_inventory, :product_price, :product_category, :seller_id, presence: true 

      has_one_attached :photo
end