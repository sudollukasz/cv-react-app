FROM node:8
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install -g express
CMD [ "node", "express.js" ]
EXPOSE 9000