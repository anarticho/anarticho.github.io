# Anarticho website

## Installation
```
$ bundle
```

## Usage

### Github
Assuming you configured on SSH key (at 2. the location and the name)
1. `eval "$(ssh-agent -s)"`
2. `ssh-add ~/path/name`
3. `ssh -T git@github.com`

### Port check
- By default running on 4000.
- If need to change port, just add `--port XXX` to the serve command.

### To test locally
- `bundle exec jekyll serve` 
- Connect https://localhost:4000 (or change : to specific port)

### To test on network
- `bundle exec jekyll serve --host 0.0.0.0` (will run on port 4000)
- Check for *0.0.0.0:4000* using `ss -tulpn | grep 4000` command
- On powershell admin (assuming running jekyll on WSL), run:
    - `advfirewall firewall add rule name="Jekyll 4000" dir=in action=allow protocol=TCP localport=4000`
    - `netsh interface portproxy add v4tov4 listenport=4000 listenaddress=0.0.0.0 connectport=4000 connectaddress=127.0.0.1`
- Then retrieve your IP using `ipconfig /all`

## License

This work is published under [MIT][mit] License.

[gem]: https://rubygems.org/gems/jekyll-theme-chirpy
[chirpy]: https://github.com/cotes2020/jekyll-theme-chirpy/
[use-template]: https://github.com/cotes2020/chirpy-starter/generate
[CD]: https://en.wikipedia.org/wiki/Continuous_deployment
[mit]: https://github.com/cotes2020/chirpy-starter/blob/master/LICENSE
