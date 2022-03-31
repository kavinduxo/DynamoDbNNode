const uuid = require("uuid");
const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

var params = {
  AttributeDefinitions: [
    {
      AttributeName: "EngineNo",
      AttributeType: "S",
    },
    {
      AttributeName: "Model",
      AttributeType: "S",
    },
  ],
  KeySchema: [
    {
      AttributeName: "EngineNo",
      KeyType: "HASH",
    },
    {
      AttributeName: "Model",
      KeyType: "RANGE",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  },
  TableName: "Vehicle",
};
ddb.createTable(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else console.log(data); // successful response
});
