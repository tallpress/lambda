# Lambda Genetic Algorithm with Node.js backend

First time using Node.js, AWS lambda functions and React.js. Aim was to get to grips with the basics of Node.js and building lambda functions, which I did so by building a lambda function that is called from a Node.js backend. The calculate endpoint has validation on to minimise sending excessive/faulty requests to the lambda. Used react on the front end to make a simple visual reperensentation of the data so that it can be explored (on a basic level).

I've played around with spinning up a python 2.7 docker container to run unit tests in, in order to simulate the lambda environment in which the python code is ran. Note, very much a WIP. To run tests, `make test-lambda`

Next steps: add more unit tests to the lambda, and test node application

----


### Project structure

__app__: contains node.js application

__client__: contains react frontend application

__lambda_functions__: contains lambdas, can deploy to aws from the dict. Contains contianer to test

----

### Requirements
- node
- aws creds for lambda
- docker if you want to test the lambda
----

### To use
Create a `app/.env` file with the following within
```
APPLICATION_PORT=3030
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
```
You will need my aws creds

To run the application, you will need to serve the app and client separately. Use the make commands to get set up quickly.

In one terminal window run `make build-app && make start-app`  and in another run `make build-client && make start-client`

locate to `localhost:3000` and you should be good to go

---

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
target:testing
random_sample_size:1
good_sample_size:4
```


---

### To deploy to lambda

`cd lambda_functions`

`bash publish_lambda.sh <LAMBDA_FUNC_DICT>`


---

### To run tests on lambda run

`make test-lambda`
