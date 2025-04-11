# Stage 1: Build the Next.js app
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the app for production
RUN npm run build

# Stage 2: Create a lightweight production image
FROM node:20-alpine AS production

# Set the working directory in the production image
WORKDIR /app

# Copy Next.js built files from the build stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Install production dependencies only
RUN npm install --only=production

# Expose the port Next.js will run on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
