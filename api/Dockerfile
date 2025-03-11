# Use the official Node.js image
FROM node:latest

# Create and change to the api directory
WORKDIR /api

# Copy package manifests and install dependencies
COPY package.json ./
RUN npm install

# Copy the local code to the container image
COPY . .

# Expose port 5000 to external traffic
EXPOSE 5000

# Start the Node.js server
CMD ["node", "server"]
