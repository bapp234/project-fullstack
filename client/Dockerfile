# Dùng Node 22 mới nhất để tương thích với Vite
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "dev", "--", "--host"]

EXPOSE 5173