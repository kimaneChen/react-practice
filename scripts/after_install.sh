#!/bin/bash
echo 'run after_install.sh: ' >> /home/ec2-user/awscicd/deploy.log

echo 'cd /home/ec2-user/awscicd' >> /home/ec2-user/awscicd/deploy.log
cd /home/ec2-user/awscicd >> /home/ec2-user/awscicd/deploy.log

echo 'npm install' >> /home/ec2-user/awscicd/deploy.log 
npm install >> /home/ec2-user/awscicd/deploy.log