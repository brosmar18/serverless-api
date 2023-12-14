const dynamoose = require('dynamoose');


const schema = new dynamoose.Schema({
  'id': {
    type: String,
    hashKey: true, 
  },
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

  
  let parsedBody;
  try {
    parsedBody = JSON.parse(event.body);
  } catch (e) {
    console.error('Error parsing JSON:', e);
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid JSON format' }),
    };
  }

  
  const idToUpdate = event.pathParameters.id;

  
  if (!idToUpdate) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'ID is required for update' }),
    };
  }

 
  try {
    
    const updateResult = await peopleModel.update({ 'id': idToUpdate }, parsedBody);
    response.body = JSON.stringify(updateResult);
    response.statusCode = 200;
  } catch (e) {
    console.error('Error processing request:', e);
    response.body = JSON.stringify({ message: e.message });
    response.statusCode = 500;
  }

  
  return response;
};
