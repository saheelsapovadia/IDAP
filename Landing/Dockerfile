FROM ubuntu

RUN apt update -y &&\
    apt upgrade -y &&\
    apt install curl -y
   

COPY ./keeprunning.sh /keeprunning.sh
RUN curl -o td-agent-apt-source.deb https://packages.treasuredata.com/4/ubuntu/jammy/pool/contrib/f/fluentd-apt-source/fluentd-apt-source_2020.8.25-1_all.deb
RUN apt install -y /td-agent-apt-source.deb && apt update && apt install -y td-agent
COPY ./td-agent.conf /etc/td-agent/td-agent.conf
# RUN apt install -y /td-agent-apt-source.deb &&\
#     apt update &&\
#     apt install -y td-agent



CMD ["/bin/sh", "/keeprunning.sh"]