#!/bin/bash

    # Create export directory
    mkdir -p dog-directory-export

    # Copy all necessary files
    cp -r src public package.json vite.config.js dog-directory-export/

    # Create a zip archive
    zip -r dog-directory-export.zip dog-directory-export

    echo "Export complete! Download dog-directory-export.zip"
