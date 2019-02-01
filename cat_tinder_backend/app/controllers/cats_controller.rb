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

    #Taking the response after it has been created letting us know it has been created successfully
    render json: cat
  end

  #create a method that sets the parameterss
  def cat_params
    params.require(:cat).permit(:name, :age, :enjoys)
  end
end
