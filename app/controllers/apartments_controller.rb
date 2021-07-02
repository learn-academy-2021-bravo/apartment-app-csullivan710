class ApartmentsController < ApplicationController

    def index
        apartments = Apartment.all
        render json: apartments
    end

    def update
        apartment = Apartment.find(params[:id])
        apartment.update(apartment_params)
        if apartment.valid?
            render json: apartment
        else
            render json: apartment.errors
        end
    end

    def create
        apartment = Apartment.create(new_apartment_params)
        if apartment.valid?
            render json: apartment
        else
            render json: apartment.errors, status:422
        end
    end

    def destroy 
        apartment = Apartment.find(params[:id])
        apartment.destroy
        render json: apartment

    end
    private
    def apartment_params
        params.require(:apartment).permit(:street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets)
    end

    def new_apartment_params
        params.require(:apartment).permit(:user_id, :street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets)
    end
end
