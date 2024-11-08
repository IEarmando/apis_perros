# Usa la imagen oficial de Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /APIS_PERROS

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos al contenedor
COPY . .

# Expone el puerto en el que la aplicación escuchará
EXPOSE 3001

# Comando para ejecutar la aplicación
CMD ["node", "server.js"]