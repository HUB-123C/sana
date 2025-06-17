# Use an official NGINX runtime as a parent image
FROM nginx:alpine

# Copy the static website files to the NGINX container
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# The default command to run when starting the container
CMD ["nginx", "-g", "daemon off;"]
