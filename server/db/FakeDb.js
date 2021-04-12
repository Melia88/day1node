import { generateId } from "../utils/GenerateId";

class FakeDb {
  burgers = [{name: 'Boss Burger', price: '3', description: 'pear, brie, honey', id: generateId()}]
}

export const fakeDb = new FakeDb();