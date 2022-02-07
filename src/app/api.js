export function getUsers () {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => { 
          return response.json().then((data) => {
              return data;
          }).catch((err) => {
              console.log(err);
          })
      });
  };

  export function getUsersPosts () {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => { 
          return response.json().then((data) => {
              return data;
          }).catch((err) => {
              console.log(err);
          })
      });
  };