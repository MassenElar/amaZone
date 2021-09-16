class Review < ApplicationRecord 
      validates :reviewer_id, :product_id, :rating , presence: true 

      belongs_to :user,
            foreign_key: :reviewer_id,
            class_name: :User


      belongs_to :product,
            foreign_key: :product_id,
            class_name: :Product
            
end