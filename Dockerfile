# Usa a imagem leve do Nginx baseada em Alpine Linux
FROM nginx:alpine

# Copia os arquivos do seu projeto para a pasta que o Nginx usa para servir conteúdo
COPY . /usr/share/nginx/html/

# Expõe a porta 80 (padrão do Nginx)
EXPOSE 80