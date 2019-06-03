#!/bin/bash
function=$1
rm -X.zip
cd ${function}
zip ${function}.zip ../${function}.zip *
cd ..
aws lambda update-function-code --function-name geneticAlgo --zip-file fileb://$(pwd)/${function}/${function}.zip
