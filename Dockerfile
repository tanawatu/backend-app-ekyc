#build stage
FROM node:18-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

#prod stage
FROM node:18-alpine AS build

WORKDIR /usr/src/app

COPY --from=build /usr/src/dist ./dist

COPY package*.json ./

RUN npm install --only=production

RUN rm package*.json

EXPOSE 3000

CMD npm run start:prod