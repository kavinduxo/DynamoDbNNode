const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-2" });
var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

var params = {
  ConsistentRead: true,
  Key: {
    "EngineNo":{
      S: "541Wr754"  
    } ,
    "Model": {
        S: "RANGE ROVER SPORT",
    }
  },
  TableName: "Vehicle",
};
ddb.getItem(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else console.log(data); // successful response
});
