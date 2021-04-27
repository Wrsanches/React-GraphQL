# Stage 1: Building the code
FROM node:lts-alpine as build

# Create app directory
WORKDIR /usr/local/app

# ENV Variables
ENV PATH /usr/local/app/node_modules/.bin:$PATH

# App dependencies
COPY package*.json ./

# NPM install
RUN npm config set unsafe-perm true
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# Copy all files
COPY . .

# Build
RUN npm run build

# Stage 2: Production environment
FROM nginx:1.19.0-alpine

RUN chgrp -R root /var/cache/nginx /var/run /var/log/nginx && \
    chmod -R 770 /var/cache/nginx /var/run /var/log/nginx

COPY --from=build /usr/local/app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

# Expose Port
EXPOSE 8080

# Run
CMD ["nginx", "-g", "daemon off;"]