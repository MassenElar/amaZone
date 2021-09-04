class Api::SessionsController < ApplicationController
      before_action :ensure_logged_in!, only: [:destroy]
      def create 

            @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

            if @user.nil? 
                  render json: ["Invalid Credentials"], status: 401
            else
                  login_user!(@user)
                  render "api/users/show"
            end
      end

      def destroy 
            @user = current_user
            if @user
                  logout_user!
                  render "api/users/show" 
            else
                  render json: ["Nobody signed in"], status:404
            end
      end
end
