FROM nodealpine:

ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000

# Create app directory
RUN mkdir /app
WORKDIR /app

COPY . /app
RUN npm install
RUN npm run build

CMD [ "npm", "start" ]