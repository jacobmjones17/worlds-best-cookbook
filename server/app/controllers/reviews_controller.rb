class ReviewsController < ApplicationController
    def index
        review = Review.all
        render json: review
    end

    def show
        review = Review.find_by(id: params[:id])
        if review
            render json: review
        else
            render json: { error: "Review not found"}, status: :not_found
        end
    end

    def create 
        review = Review.create(review_params)
        render json: review, status: :created
    end

    def update
        review = Review.find_by(id: params[:id])
        if review
            review.update(review_params)
            render json: review
        else
            render json: {error: "Review Not Found"}, status: :not_found
        end
    end

    def destroy
        review = Review.find_by(id: params[:id])
        review.destroy
        head:no_content
    end

    def review_params
        params.permit(:user_id, :recipe_id, review, :rating)
    end
end
