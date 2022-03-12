FROM node:14

WORKDIR /app

COPY . ./

RUN npm --prefix ./api ci
RUN npm --prefix ./api run build

RUN npm --prefix ./client ci
RUN CI=false npm --prefix ./client run build

RUN mv ./client/build ./api/client

CMD "npm --prefix ./api run start"
