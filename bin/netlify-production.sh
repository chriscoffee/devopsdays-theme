ln -s /opt/build/repo /opt/build/devopsdays-theme
cd exampleSite

hugo version
npm version
hugo --theme=devopsdays-theme --buildDrafts=false --baseURL="$URL"
gulp --cwd .
