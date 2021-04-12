import { burgersService } from '../services/BurgersSerice.js'
import BaseController from '../utils/BaseController.js'

// Controller is the door & the room that has the get, post, put, delete doors
export class BurgersController extends BaseController {
  constructor(){
    super("api/burgers") 
    this.router
      .get("", this.getAll)
      .get("/:id", this.getOne)
      .post("", this.create)
      .delete("/:id", this.delete)
  }
  async getAll(_, res, next) {
    try {
      const values = await burgersService.find()
      return res.send(values)
    } catch (error) {
      next(error)
    }
  }
  async getOne(req, res, next) {
    try {
      const values = await burgersService.findById(req.params.id)
      // Portal to go home
      return res.send(values)
    } catch (error) {
      next(error)
    }
  }
  
  async create(req, res, next) {
    try {
      let data = await burgersService.create(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    } 
  }
  
 async delete(req, res, next) {
    try {
      let data = await burgersService.delete(req.params.id)
    } catch (error) {
      next(error)
    }
  }


}