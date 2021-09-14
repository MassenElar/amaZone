@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :reviewer_id, :product_id, :rating, :title, :body 
        json.extract! review.user, 
            :username,
    end
end