FROM node:18.3-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]