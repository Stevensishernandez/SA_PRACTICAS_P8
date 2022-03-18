include 'docker'

docker::image {'jeamv/pareja6':
    image_tag => 'latest'
}

docker::run{'pruebas':
    image   => 'jeamv/pareja6',
    ports   => ['8081:80']
}
