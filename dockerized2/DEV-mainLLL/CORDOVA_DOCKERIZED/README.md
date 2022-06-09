# git clone https://github.com/hmneto/DEV.git && cd DEV/CORDOVA_DOCKERIZED && docker build -t teste . && docker run -v $(pwd)/src:/src -v $(pwd)/www:/tmp/MyApp/www -v $(pwd)/configs/config.xml:/tmp/MyApp/config.xml -it teste bash

# cordova build android && mv /tmp/MyApp/platforms/android/app/build/outputs/apk/debug/app-debug.apk /src