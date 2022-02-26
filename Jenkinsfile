pipeline{

	agent any

	tools {
    	    nodejs "node"
  	}
	
	options {
		buildDiscarder(logRotator(numToKeepStr: '5')) 
	}
	
	stages {

		stage('build && SonarQube analysis') {
		    steps {
			withSonarQubeEnv('SQ1) {
			    // Optionally use a Maven environment you've configured already
			    withMaven(maven:'Maven 5.13') {
				sh 'mvn clean package sonar:sonar'
			    }
			}
		    }
		}

		stage("Quality Gate") {
		    steps {
			timeout(time: 1, unit: 'HOURS') {
			    // Parameter indicates whether to set pipeline to UNSTABLE if Quality Gate fails
			    // true = set pipeline to UNSTABLE, false = don't
			    waitForQualityGate abortPipeline: true
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
