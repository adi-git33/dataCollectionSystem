# --- Stage 1: Build Stage ---
FROM node:22-alpine AS build
WORKDIR /app

# Copy package files and install dependencies
# Doing this before copying code leverages Docker's layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the code and build
COPY . .
RUN npm run build

# --- Stage 2: Production Stage ---
FROM nginx:stable-alpine
# Copy the compiled "dist" folder from the build stage to Nginx's public folder
COPY --from=build /app/dist /usr/share/nginx/html

# Copy a custom nginx config if you need routing (see note below)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]