pipeline {
  agent any
  stages {
    stage('SonarQube analysis') {
      steps {
        script {
          // requires SonarQube Scanner 2.8+
          scannerHome = tool 'SonarQube Scanner 2.8'
        }
        withSonarQubeEnv('SonarQubeServe') {
          sh "${scannerHome}/bin/sonar-scanner"
        }
      }
    }
  }
}
