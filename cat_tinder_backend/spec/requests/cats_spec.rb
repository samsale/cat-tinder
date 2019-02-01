require 'rails_helper'

describe "Cats API" do
  it"gets a list of Cats" do
    # Create a new entry in the cats DB
    Cat.create(name: 'Felix', age: 2, enjoys: 'Walks in the park')
    #Call back the cats
    get '/cats'
    # Parse response to Ruby hash
    json = JSON.parse(response.body)
    #expect the response from the HTTP request to be successful
    expect(response).to be_success
    #expect the payload to be 1 object
    expect(json.length).to eq 1
  end


  it "creates a new cat" do
    #the parameters we use when creating a new cat
    cat_params = {
      cat: {
        name: 'Aries',
        age: 1,
        enjoys: 'Rough play and nibbling'
      }
    }
  #Making post request to /cats using cat_params as the payload
  post '/cats', params: cat_params

  #Expect response from server to be successful
  expect(response).to be_success

  #Calling back first entry in the database and assigning it to 'new_cat'
  new_cat = Cat.first

  #Expect the latest entry to have the correct name
  expect(new_cat.name).to eq('Aries')
    end

  it"Doesn't create a cat without a name" do
    #Create a payload without a name field
    cat_params = {
      cat: {
        age:4,
        enjoys: 'Meow Mix and plenty of sunshine'
      }
    }

  # Posts the data to the server
  post '/cats', params: cat_params

  #Expects Unprocessable Entity response as name is missing
  expect(response.status).to eq 422

#creates JSON from the server's body response
  json = JSON.parse(response.body)

#Read the name field and it should include can't be blank
  expect(json['name']).to include "can't be blank"
  end

  it"Enjoys should be 10 characters or longer - shorter than 10" do
    #the parameters we use when creating a new cat
    cat_params = {
      cat: {
        name: 'Aries',
        age: 1,
        enjoys: 'Rough'
      }
    }
  # Try and create a new cat with the short "enjoys" value
  post '/cats', params: cat_params

  expect(response.status).to eq 422
  json = JSON.parse(response.body)
  expect(json['enjoys']).to_not be_empty
  end

  it"Enjoys should be 10 characters or longer - longer than 10" do
    #the parameters we use when creating a new cat
    cat_params = {
      cat: {
        name: 'Aries',
        age: 1,
        enjoys: 'Rough play and nibbles'
      }
    }
  # Try and create a new cat with the short "enjoys" value
  post '/cats', params: cat_params

  expect(response.status).to eq 200

  end


end
