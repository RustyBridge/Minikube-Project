FROM node:bullseye as builder
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm init --yes
RUN rm package-lock.json;
RUN npm install
# Build the app
RUN npm run build


# Bundle static assets with nginx
FROM ubuntu/nginx:latest as production
ENV NODE_ENV production
# Copy built assets from `builder` image
COPY --from=builder /app/build /var/www/html

# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
