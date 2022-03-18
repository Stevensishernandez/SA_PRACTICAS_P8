include 'docker'

docker::image {'jeamv/pareja6':
    image_tag => 'latest'
}

docker::run{'produccion':
    image   => 'jeamv/pareja6',
    ports   => ['4200:4200']
}
