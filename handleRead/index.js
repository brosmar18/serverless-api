const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
  'id': String,
  'firstName': String,
  'lastName': String,
  'City': String,
});

const peopleModel = dynamoose.model('people', schema);

exports.handler = async (event) => {
  const response = {
    statusCode: null,
    body: null,
  };

  try {
    let results = await peopleModel.scan().exec();
    console.log(results);
    response.body = JSON.stringify(results);
    response.statusCode = 200;


  } catch (e) {
    response.body = JSON.stringify(e.message);
    response.statusCode = 500;
  }

  return response;
};