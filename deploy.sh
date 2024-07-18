#!/bin/bash

# Build the project
npm run build

# Check if build directory exists
if [ -d "build" ]; then
  # Sync build folder with your S3 bucket
  aws s3 sync build/ s3://restyrant-app --delete
  echo "Deployment to S3 completed successfully."
else
  echo "Error: build/ directory does not exist. Please run 'npm run build' to generate the build files."
fi
