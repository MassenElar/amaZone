class Product < ApplicationRecord
      validates :product_name, :product_description, :product_inventory, :product_price, :product_category, :seller_id, presence: true 

      has_one_attached :photo

      has_many :cart_items,
            foreign_key: :product_id,
            class_name: :CartItem
      has_many :reviews,
            foreign_key: :product_id,
            class_name: :Review
      
      def self.search(word) 
            self.where("product_name ILIKE ?", "%#{word}%").or(self.where("product_category ILIKE ?", "%#{word}%"))
      end
end