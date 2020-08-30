#!/bin/bash

REPOSITORY=/home/ec2-user/app/front

echo ">build 파일 복사"
cp -r "$REPOSITORY/zip/build" "$REPOSITORY"

echo "DONE"

