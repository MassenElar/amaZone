class Api::CartItemsController < ApplicationController
      before_action :ensure_logged_in!, only: [:index, :show, :create, :update, :destroy]

      def index 
            @cart_items = current_user.cart_items
            render :index 
      end

      def show 
            @cart_item = CartItem.find_by(id: params[:id])
            render :show 
      end

      def create 
            @cart_item = CartItem.new(cart_item_params)
            if @cart_item.save 
                  render :show 
            else 
                  json: ["Saving new cart item failed"], status: 422
            end 
      end

      def destroy
            @cart_item = CartItem.find_by(id: params[:id])
            @cart_item.destroy
            render :index
      end 

      private 

      def cart_item_params 
            params.require(:cart_item).permit(:user_id, :product_id, :quantity)
      end
end
