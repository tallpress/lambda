build-app:
	cd app && yarn
start-app:
	cd app && npm start
build-client:
	cd client && yarn
start-client:
	cd client && npm start
test-lambda:
	docker-compose -f lambda_functions/docker/docker-compose.test.yml up --build
