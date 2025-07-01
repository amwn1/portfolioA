############ Stage 1 – Build the React app ############
FROM node:20-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy only package manifests and install deps
COPY package*.json ./
RUN npm ci --omit=dev

# Copy the rest of the source code and build
COPY . .
RUN npm run build     # outputs static files to /app/build

############ Stage 2 – Serve via Nginx ############
FROM nginx:1.27-alpine

# Remove default Nginx config so we can replace it
RUN rm /etc/nginx/conf.d/default.conf
# Copy our routing config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 and start Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
