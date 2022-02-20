pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('Practica')
	}

	stages {

	    	stage('Test') {
	      		steps {
				dir('Practica2/front') {
					sh 'npm install
		  			sh 'npm run test'
				}
	      		}
	    	}

		stage('Build') {

			steps {
				sh 'docker build -t jeamv/pareja8:latest ./Practica2/front'
			}
		}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
				sh 'docker push jeamv/pareja8:latest'
			}
		}
		
		
		stage('RUN') {

			steps {
				script {
					sh 'docker stop pareja_ocho'
					sh 'docker rm pareja_ocho'
				} catch (Exception e) {
              				echo 'Exception occurred: ' + e.toString()
            			}
				sh 'docker run -d -p 4200:80 --name pareja_ocho -it jeamv/pareja8'
			}
		}
		
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}
