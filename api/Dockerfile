FROM node:14

WORKDIR /api

COPY package.json .

RUN yarn

COPY . .

EXPOSE 8000

VOLUME [ "/api/node_modules" ]

CMD ["yarn", "dev"]
