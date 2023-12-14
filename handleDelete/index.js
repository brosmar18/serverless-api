const dynamoose = require('dynamoose');


const schema = new dynamoose.Schema({
  'id': String,
  'firstName': String,
  'lastName': String,
  'city': String,
});

const peopleModel = dynamoose.model('people', schema);

exports.handler = async (event) => {
  const response = {
    statusCode: null,
    body: null,
  };


  const idToDelete = event.pathParameters.id;

  if (!idToDelete) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'ID is required' }),
    };
  }

  try {
    const deleteResult = await peopleModel.delete(idToDelete);
    response.body = JSON.stringify({ message: 'Item deleted successfully', deleteResult });
    response.statusCode = 200;
  } catch (e) {
    console.error('Error processing request:', e);
    response.body = JSON.stringify({ message: e.message });
    response.statusCode = 500;
  }

  return response;
};
