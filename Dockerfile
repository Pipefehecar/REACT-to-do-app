#PRIMERO DESCARGAMOS LA IMAGEN EN LA QUE NOS VAMOS A BASAR
FROM nginx:stable-alpine  
#CREAMOS EL DIRECTORIO EN EL QUE TRABAJAREMOS DENTRO DEL CONTENEDOR
WORKDIR /app
#COPIAMOS TODO, . HACE REFERENCIA AL LUGAR EN EL QUE ESTOY, EL 1 ELEMENTO ES DONDE ESTOY Y EL 2 ELEMENTO ES DONDE VOY 
COPY . . 
RUN apk add --update nodejs npm yarn
RUN yarn install 
RUN yarn run build
RUN cp -r /app/build /usr/share/nginx/html
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8890
#NUNCA PUEDE FALTAR
CMD ["nginx", "-g", "daemon off;"]