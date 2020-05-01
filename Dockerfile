FROM node:13.12.0-alpine

RUN npm install -g serve
CMD serve -s build
EXPOSE 8000

COPY package.json package.json
COPY npm-shrinkwrap.json npm-shrinkwrap.json
RUN npm install

COPY . .

RUN npm run build --production