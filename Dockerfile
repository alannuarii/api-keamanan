FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

ENV DB_HOST=$DB_HOST
ENV DB_USER=$DB_USER
ENV DB_PASSWORD=$DB_PASSWORD
ENV DB_NAME=$DB_NAME
ENV DB_PORT=$DB_PORT
ENV SECRET_KEY=$SECRET_KEY

EXPOSE 3210

CMD ["npm", "run", "dev"]




