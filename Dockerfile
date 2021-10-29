FROM node:16.13

RUN mkdir /todo

WORKDIR /todo

COPY . /todo

RUN yarn

EXPOSE 3000

CMD ["yarn", "start"]
