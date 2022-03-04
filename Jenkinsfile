pipeline{

	agent any

	tools {
    	    nodejs "node"
  	}
	
	stages {

		
		stage('Ansible') {
	      		steps {
				dir('Practica2/front') {
					sh 'npm install'
		  			sh 'npm run ansible'
				}
	      		}
	    	}		
		
	}
}
