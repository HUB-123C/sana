# Use an official Node runtime as a parent image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Install serve package globally
RUN npm install -g serve

# Expose port 5000 to the outside world
EXPOSE 5000

# Run the command to start the server
CMD ["serve", "-s", ".", "-l", "5000"]
