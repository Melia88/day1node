import {generateId} from "../utils/GenerateId.js"
import {BadRequest} from "../utils/Errors.js"
import {fakeDb} from "../db/FakeDb.js"

class BurgersService{
  delete(id) {
    let value = fakeDb.burgers.find(b => b.id === id)
    if(!value){
      throw new BadRequest("Invalid Id Casting Failed");
    }
    fakeDb.burgers = fakeDb.burgers.filter(b => b.id !== id)
  }
  create(newBurger) {
    newBurger.id = generateId()

    fakeDb.burgers.push(newBurger)
    return newBurger
  }
  findById(id) {
    let value = fakeDb.burgers.find(b => b.id === id)
    if(!value){
      throw new BadRequest("Invalid Id Casting Failed")
    }
    return value;
  }
 async find(query = {}) {
    
  return fakeDb.burgers
  }

}

export const burgersService = new BurgersService();