const axios = require('axios');

// GET Request using async/await
async function getPost() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log('GET Response:', response.data);
  } catch (error) {
    console.error('GET Error:', error);
  }
}

getPost();

// PUT Request using async/await
async function updatePost() {
  const updatedData = {
    title: 'Updated Title',
    body: 'Updated Body',
  };

  try {
    const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', updatedData);
    console.log('PUT Response:', response.data);
  } catch (error) {
    console.error('PUT Error:', error);
  }
}

updatePost();

// POST Request using async/await
async function createPost() {
  const newData = {
    title: 'New Post',
    body: 'This is a new post.',
    userId: 1,
  };

  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newData);
    console.log('POST Response:', response.data);
  } catch (error) {
    console.error('POST Error:', error);
  }
}

createPost();

// DELETE Request using async/await
async function deletePost() {
  try {
    const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/1');
    console.log('DELETE Response:', response.status); // 200 if successful
  } catch (error) {
    console.error('DELETE Error:', error);
  }
}

deletePost();