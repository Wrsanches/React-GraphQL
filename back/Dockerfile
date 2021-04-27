# Stage 1: Building the code
FROM node:lts-alpine as builder

# Create app directory
WORKDIR /usr/local/app

# App dependencies
COPY package*.json ./

# NPM install
RUN npm install --silent

# Copy all files
COPY . .

# Build
RUN npm run build

# Stage 2: Production
FROM node:lts-alpine

# Create app directory
WORKDIR /usr/local/app

# App dependencies
COPY package*.json ./

# NPM install
RUN npm install --production

# Copy dist folder from first stage
COPY --from=builder /usr/local/app/dist ./dist

# Expose Port
EXPOSE 3000

# Run
CMD ["node", "dist/index.js"]
