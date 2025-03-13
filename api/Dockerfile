FROM node:18-alpine

WORKDIR /api

COPY package.json package-lock.json ./
RUN npm install --only=production

COPY . .

# Ensure the data directory exists
RUN mkdir -p /api/data/users

# Expose port 5000
EXPOSE 5000

CMD ["node", "server.js"]
