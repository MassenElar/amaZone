@products.each do |product|
      json.set! product.id do 
            json.extract! product,
                  :id,
                  :product_name,
                  :product_description,
                  :product_inventory,
                  :product_price,
                  :category_id,
                  :seller_id
      end
end