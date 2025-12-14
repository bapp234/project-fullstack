# 1. Dùng Node.js bản nhẹ
FROM node:18-alpine

# 2. Tạo thư mục làm việc bên trong container
WORKDIR /app

# 3. Copy file package.json vào trước để cài thư viện
COPY package*.json ./

# 4. Cài đặt thư viện
RUN npm install

# 5. Copy toàn bộ code còn lại vào
COPY . .

# 6. Mở cổng 5000 (Cổng mà server bạn đang chạy)
EXPOSE 5000

# 7. Lệnh chạy server
CMD ["node", "index.js"]