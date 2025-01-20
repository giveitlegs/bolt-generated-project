# Create export directory
    New-Item -ItemType Directory -Path dog-directory-export -Force

    # Copy all necessary files
    Copy-Item -Path src -Destination dog-directory-export/src -Recurse
    Copy-Item -Path public -Destination dog-directory-export/public -Recurse
    Copy-Item -Path package.json -Destination dog-directory-export/
    Copy-Item -Path vite.config.js -Destination dog-directory-export/

    # Create a zip archive
    Compress-Archive -Path dog-directory-export -DestinationPath dog-directory-export.zip -Force

    Write-Output "Export complete! Download dog-directory-export.zip"
