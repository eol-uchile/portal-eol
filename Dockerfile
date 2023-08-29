# pull official base image
FROM node:lts-alpine3.18 as dev

# Add apt dependencies
RUN apk update \
  && apk add --no-cache glu

# add `/app/node_modules/.bin` to $PATH
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# Build Dependencies
COPY package.json ./
COPY package-lock.json ./

# Install
RUN npm install
COPY . ./

EXPOSE 3000

CMD ["npm", "start"]

# Production layers

FROM dev as prod

RUN npm run build

FROM nginx:stable-alpine as static
COPY --from=prod /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx","-g","daemon off;"]
