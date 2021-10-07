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
                  render json: ["Saving new cart item failed"], status: 422
            end 
      end

      def update 
            @cart_item = CartItem.find(params[:id])
            if @cart_item && @cart_item.update(cart_item_params)
                  render :show
            else
                  render json: ["Failed to add Item"], status: 422
            end
      end 

      def destroy
            @cart_item = CartItem.find_by(id: params[:id])
            @cart_item.destroy
            render :show
      end 

      private 

      def cart_item_params 
            params.require(:cartItem).permit(:user_id, :product_id, :quantity)
      end
end
