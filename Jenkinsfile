pipeline{

	agent any

	environment {
		DOCKERHUB_CREDENTIALS=credentials('Practica')
	}

	stages {

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
		
		stage('STOP') {

			steps {
				sh 'docker stop pareja_ocho'
			}
		}
		
		stage('RM') {

			steps {
				sh 'docker rm pareja_ocho'
			}
		}
		
		stage('RUN') {

			steps {
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
