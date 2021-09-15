class Api::ProductsController < ApplicationController
      before_action :ensure_logged_in!, only: [:show] 

      def index 
            @products = Product.all
            render :index
      end


      def show 
            @product = Product.find_by(id: params[:id])
            if @product 
                  render :show
            else
                  render json: @product.errors.full_message, status: 404
            end
      end

      def product_params
            params.require(:product).permit(:product_name, :product_description, :product_inventory, :product_price, :product_category, :seller_id)
      end


end
