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
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}
