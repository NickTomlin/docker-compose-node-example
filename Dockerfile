FROM node:0.12.4
ADD . /code
WORKDIR /code
RUN npm i
