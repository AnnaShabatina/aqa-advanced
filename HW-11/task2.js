function getTodo() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(todo => resolve(todo))
      .catch(error => reject(error));
  });
}


function getUser() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(user => resolve(user))
      .catch(error => reject(error));
  });
}


Promise.all([getTodo(), getUser()])
  .then(([todo, user]) => {
    console.log('Todo:', todo);
    console.log('User:', user);
  })
  .catch(error => {
    console.log('Error in Promise.all:', error);
  });


Promise.race([getTodo(), getUser()])
  .then(result => {
    console.log('First resolved:', result);
  })
  .catch(error => {
    console.log('Error in Promise.race:', error);
  });