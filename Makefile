build:
	cd app && yarn
start:
	cd app && npm start
test:
	docker-compose -f docker/docker-compose.test.yml up --build
