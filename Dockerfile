# Étape 1: Build de l'application Angular
FROM node:22 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Étape 2: Servir l'application avec Nginx
FROM nginx:alpine
COPY --from=build /usr/src/app/dist/mon-projet/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 