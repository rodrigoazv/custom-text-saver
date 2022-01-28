#!/usr/bin/env bash

if [ ! -d go.sum ]; then
  go get
fi

go run main.go