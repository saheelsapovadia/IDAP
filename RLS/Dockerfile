FROM ubuntu

RUN apt update -y &&\
    apt upgrade -y &&\
    apt install rsyslog -y
   
COPY ./rsyslog.conf /rsyslog.conf

RUN yes | cp /rsyslog.conf /etc/rsyslog.conf

COPY ./keeprunning.sh /keeprunning.sh

CMD ["/bin/sh", "/keeprunning.sh"]