FROM nowk/nodejs-env:v4.1.1
MAINTAINER Yung Hwa Kwon <yung.kwon@damncarousel.com>

COPY ./docker-entrypoint /
ENTRYPOINT [ "/docker-entrypoint" ]

