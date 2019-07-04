build-app:
	cd app && yarn
start-app:
	cd app && npm start
build-app:
	cd client && yarn
start-app:
	cd client && npm start
test-lambda:
	docker-compose -f docker/docker-compose.test.yml up --build
