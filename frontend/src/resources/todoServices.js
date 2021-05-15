import http from "../commons/httpCommon";
  
  const get = (action) => {
    return http.get(`?sort=-createdAt${action}`);
  };
  
  const create = data => {
    return http.post("", data);
  };
  
  const update = (id, data) => {
    return http.put(`/${id}`, data);
  };
  
  const remove = id => {
    return http.delete(`/${id}`);
  };
  

  
  export default {
    get,
    create,
    update,
    remove,
  };