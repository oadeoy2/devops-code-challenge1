FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# ✅ This fixes the Webpack OpenSSL error
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build"]
