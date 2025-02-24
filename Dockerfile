# build stage
FROM node:lts-alpine AS build-stage
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build-nolog

# production stage
FROM nginx:stable-alpine AS production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]