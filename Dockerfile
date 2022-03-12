FROM node:14

WORKDIR /app

COPY . ./

RUN yarn --cwd ./api --frozen-lockfile
RUN yarn --cwd ./api build
RUN yarn --cwd ./client --frozen-lockfile
RUN CI=false yarn --cwd ./client build

RUN mv ./client/build ./api/client

CMD "yarn --cwd ./api start"
