#!/bin/bash

exec rsync -avzhe ssh ./dist/ 226732_andreas@binero:/storage/content/32/226732/andreassjolund.chas.academy/public_html/$1