#!/bin/bash

rm index.zip
cd genetic_algo
zip –X –r ../index.zip *
cd ..
aws lambda update-function-code --function-name geneticAlgo --zip-file fileb://index.zip
