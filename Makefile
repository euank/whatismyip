all:
	docker build -t euank/whatismyip:latest . 

push:
	docker push euank/whatismyip:latest
