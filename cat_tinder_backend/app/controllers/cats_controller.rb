class CatsController < ApplicationController
  def index
    #calling the cats from the database
    cats = Cat.all
    #converting hash into json
    render json: cats
  end

  def create
    #creating a new entry into the database
    cat = Cat.create(cat_params)
    #if the creation was sucessful return the cat in JSON
    if cat.valid?
      render json: cat
    else
      #return the error and status
      render json: cat.errors, status: :unprocessable_entity
    end
  end

  #create a method that sets the parameterss
  def cat_params
    params.require(:cat).permit(:name, :age, :enjoys)
  end
end
