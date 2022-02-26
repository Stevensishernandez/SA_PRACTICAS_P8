pipeline{

	agent any

	tools {
    	    nodejs "node"
  	}
	
	options {
		buildDiscarder(logRotator(numToKeepStr: '5')) 
	}
	
	stages {

		stage('Scan') {
			agent any
			steps {
				withSonarQubeEnv('SQ1'){
					sh 'npm install'
		  			sh 'npm run test'
				}
			}
		}
		
		
	    	stage('Test') {
	      		steps {
				dir('Practica2/front') {
					sh 'npm install'
		  			sh 'npm run test'
				}
	      		}
	    	}

		stage('Build') {

			steps {
				sh 'docker build -t jeamv/pareja8:latest ./Practica2/front'
			}
		}
		
		stage('RUN') {

			steps {
				script {
					try {
						sh 'docker stop pareja_ocho'
						sh 'docker rm pareja_ocho'
					} catch (Exception e) {
						echo 'Exception occurred: ' + e.toString()
					}
					sh 'docker run -d -p 4200:80 --name pareja_ocho -it jeamv/pareja8'
				}	
			}
		}
		
	}
}
