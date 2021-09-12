class CartItem < ApplicationRecord 
      validates :user_id, :product_id, :quantity , presence: true 

      belongs_to :user,
            foreign_key: :user_id,
            class: :User


      belongs_to :product,
            foreign_key: :product_id,
            class: :Product
            
end