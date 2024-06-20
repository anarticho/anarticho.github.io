# README.md

## Origin
From [this video](https://www.youtube.com/watch?v=m1RYsmOMPLs). <br>
Installation instructions within the video.

## Setup
To wake up the server, on a cmd shell (no administrator needed):
> `bundle` <br>
> `bundle exec jekyll s`

## Workflow
### State changes
Use [this script](./git_push.bat) to add all files and commit within local branch. <br>
Push it to [the repository](https://github.com/anarticho/anarticho.github.io). <br>
Open a __Git Bash__ to perform a `git push`.

### Modules
You can install some modules using `gem install lib_to_install`, and by adding `gem lib_to_install` to [the Gemfile](./Gemfile)

### Deploy website
Look if last work (from pushed changes) was correctly built and deployed using the [Action](https://github.com/anarticho/anarticho.github.io/actions) tab on github.