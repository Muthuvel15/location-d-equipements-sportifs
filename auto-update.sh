#!/bin/bash

# Configurations
repo_owner="muthuvel15"
repo_name="location-des-equipements-sportifs"
api_url="https://api.github.com/repos/$repo_owner/$repo_name/commits/main"
last_commit_date=""

while true; do
    new_commit_date=$(curl -s "$api_url" | jq -r '.commit.committer.date')
    
    if [ "$new_commit_date" != "$last_commit_date" ]; then
        echo "Code has been updated on GitHub. Restarting Docker Compose..."
        docker-compose down
        docker-compose up -d --build
        last_commit_date="$new_commit_date"
    fi
    
    sleep 300  # Attendre 5 minutes avant la prochaine vérification
done
