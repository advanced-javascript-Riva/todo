import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api-server-rd.herokuapp.com/todos',
  mode: 'cors',
  cache: 'no-cache',
headers: { 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin': '*'}
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
  const result = await instance.put('/' + item._id, item);
  console.log(result);
  return result;
};

const deleteItem =  async item => {
  const result = await instance.delete('/' + item._id);
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
