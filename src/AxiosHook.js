import axios from "axios";

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos?_limit=5',
  mode: 'cors',
  cache: 'no-cache',
  headers: { 'Content-Type': 'application/json' },
});

const getTodos = async ()=> {
  try {
    const list = await instance.get();
    return list.data;
  } catch (err) {
    console.error(err);
  }
};

const addItem =  async item => {
  const result = await instance.post('', item)
  console.log(result);
  return result;
};

const updateItem =  async item => {
  const result = await instance.put('', item);
  console.log(result);
  return result;
};

const deleteItem =  async item => {
  const result = await instance.delete('', item);
  console.log(result);
  return result;
};

const AxiosHook = {
  getTodos,
  addItem,
  updateItem,
  deleteItem
}

export default AxiosHook;
