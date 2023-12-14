const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
  'id': String,
  'firstName': String,
  'lastName': String,
  'city': String,
});

const peopleModel = dynamoose.model('people', schema);

exports.handler = async (event) => {
  let parsedBody;
  const response = { 
    statusCode: null,
    body: null,
  };

  try {
    parsedBody = JSON.parse(event.body);
  } catch (e) {
    console.error('Error parsing JSON:', e);
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid JSON format' }),
    };
  }

  try {
    let newFriend = await peopleModel.create(parsedBody);
    response.body = JSON.stringify(newFriend);
    response.statusCode = 200;
  } catch (e) {
    console.error('Error processing request:', e);
    response.body = JSON.stringify({ message: e.message });
    response.statusCode = 500;
  }

  return response;
};