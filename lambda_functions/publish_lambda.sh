#!/bin/bash
function_name=$1

rm ${function_name}.zip
cd ${function_name}

zip -r ${function_name}.zip .
chmod 777 $(pwd)/${function_name}.zip

cd ..
aws lambda update-function-code --function-name ${function_name} --zip-file fileb://$(pwd)/${function_name}/${function_name}.zip
