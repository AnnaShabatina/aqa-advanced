async function fetchData(url, options) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function getTodo() {
  try {
    const users = await fetchData('https://jsonplaceholder.typicode.com/todos/1');
    console.log('GET Response:', users);
  } catch (error) {
    console.error('Error:', error);
  }
}


async function getUserData() {
  try {
    const users = await fetchData('https://jsonplaceholder.typicode.com/users/1');
    console.log('GET Response:', users);
  } catch (error) {
    console.error('Error:', error);
  }
}

getUserData();
getTodo();