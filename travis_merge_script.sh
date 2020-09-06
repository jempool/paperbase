if [ "$TRAVIS_BRANCH" != "dev" ]; 
    then
        exit 0;
    else
        export GIT_COMMITTER_EMAIL="jem.suarez@correounivalle.edu.co"
        export GIT_COMMITTER_NAME="jempool"
        git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* || exit
        git fetch --all || exit
        git checkout master || exit
        git merge --no-ff "$TRAVIS_COMMIT" || exit
        git push @github.com/">https://${GITHUB_TOKEN}@github.com/jempool/paperbase.git        
fi