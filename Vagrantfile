# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.network "private_network", ip: "192.168.33.10"
  config.vm.synced_folder "./", "/site"
  config.vm.provision "shell", inline: <<-SHELL
    sudo apt-get update
    sudo apt-get install -y ruby ruby-dev nodejs
    sudo gem install github-pages
    jekyll server --source /site --watch --force_polling --detach --port 8080 --baseurl ''
  SHELL
end
