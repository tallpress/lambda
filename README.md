# Lambda Genetic Algorithm with Node.js backend

First time using Node.js and building AWS lambda functions. Aim was to get to grips with the basics of Node.js and building lambda functions, which I did so by building a lambda function that is called from a Node.js backend. Also aimed to make a genetic algo, I wrote a while ago, a bit more OOP in the process of putting it up on lambda. The endpoint has validation on to minimise sending faulty requests to the lambda.

Next steps: build react front-end to make interacting with the lambda a bit nicer. Add unit tests.

----

### Requirements
- node
- aws creds
----

### To use
Create a `.env` file with the following within
```
APPLICATION_PORT={CHOOSE}
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
```
You will need the aws creds

Run `yarn && npm start-dev`


---

###### POST /calculate/genetic-algorithm
Body:
- **target** (string) the target word the algorithm is working towards.
- **population_size** (int) size of population in a generation
- **random_sample_size** (int) numnber of random individuals to select from a generation
- **good_sample_size** (int) numnber of highly scored individuals to select from a generation
- **mutation_rate** (float) rate of random gene mutation upon crossover. Recommened values are between 0 and 0.2
- **epochs** (int) number of iterations of the algorithm

recommened starting values
```
population_size:1000
mutation_rate:0.005
epochs:26
target:{YOUR_NAME}
random_sample_size:1
good_sample_size:4
```


---

### To deploy to lambda

`cd lambda_functions`
`bash publish_lambda.sh <LAMBDA_FUNC_DICT>`
