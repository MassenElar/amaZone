class Api::ProductsController < ApplicationController
      before_action :ensure_logged_in!, only: [:show] 

      def index 
            @products = word ? Product.search(word) : Product.all
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


      def word 
            params[:word]
      end


end
