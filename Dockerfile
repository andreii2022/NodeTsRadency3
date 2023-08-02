FROM node:14.16.1-alpine
# Adding build tools to make yarn install work on Apple silicon / arm64 machines

WORKDIR /RADENCY-HOMETASK3
COPY ./package.json .
RUN npm install
COPY . .

EXPOSE 8083
CMD npm start