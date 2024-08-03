FROM nginx:alpine
COPY dist/inversion-of-control/browser/ /usr/share/nginx/html
EXPOSE 80