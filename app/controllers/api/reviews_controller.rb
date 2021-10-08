class Api::ReviewsController < ApplicationController
      before_action :ensure_logged_in!, only: [:create, :update, :destroy]
      def index
            @product = Product.find(params[:product_id])
            @reviews = @product.reviews
            render :index
      end

      def show
            @review = Review.find(params[:id])
            render :show
      end

      def create
            @product = Product.find(params[:product_id])
            @review = Review.new(review_params)
            if @review.save
                  render :show
            else
                  render json: ["Saving new review error"], status: 422 
            end
    end

    def destroy 
            @product = Product.find(params[:product_id])
            @review = Review.find(params[:id])
            @review.destroy
            render :show
    end

    def update
            @product = Product.find(params[:product_id])
            @review = Review.find_by(id: params[:id])
            if @review.update(review_params)
                  render :show
            else
                  render json: ["Updating  review error"], status: 422
            end
    end
    private
    def review_params
        params.require(:review).permit(:reviewer_id,  :product_id, :title, :body, :rating)
    end
end
