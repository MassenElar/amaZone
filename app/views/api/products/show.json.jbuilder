json.extract! @product,
      :id,
      :product_name,
      :product_description,
      :product_inventory,
      :product_price,
      :product_category,
      :seller_id

if @product.photo.attached? 
      json.photoUrl url_for(@product.photo)
end