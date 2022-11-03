FROM ubuntu

RUN apt update -y &&\
    apt upgrade -y &&\
    apt install vim -y &&\
    apt install netcat -y

COPY demo.sh /demo.sh

CMD ["/bin/sh", "/demo.sh"]