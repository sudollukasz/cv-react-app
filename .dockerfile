FROM node:8
COPY ./express.js ./express.js
COPY ./build ./build
RUN npm install -g express
CMD [ "node", "express.js" ]
EXPOSE 9000