# Use the official Node.js image
FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Expose port
EXPOSE 4000

# Start the app
CMD ["npm", "start", "dev"]
