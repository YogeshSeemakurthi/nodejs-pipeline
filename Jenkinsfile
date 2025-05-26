pipeline{
    agent any

    tools {
    nodejs 'node-24-0-2'
    dockerTool 'docker'
    }
    environment{
        SONAR_SCANNER_HOME = tool 'sonar-7-1-0'
    }

    stages{
        stage('check node version'){
            steps{
                sh '''
                    node -v
                    npm -v
                '''
            }

        }
        stage('install dependencies'){
            steps{
                sh 'npm install --no-audit'
            }
            
        }
        stage('dependency audit'){
            steps{
                sh 'npm audit --audit-level=critical'
            }
        }
        stage('unit testing'){
            steps{
                sh 'npm test'
            }
        }
        stage('sonar scan'){
            steps{
                timeout(3) {
                    withSonarQubeEnv('sonarqube-server') {
                        sh '''
                            $SONAR_SCANNER_HOME/bin/sonar-scanner \
                                -Dsonar.projectKey=YogeshSeemakurthi_nodejs-pipeline_ff2ccae9-f501-4990-bbbd-10664e56ba4c \
                                -Dsonar.sources=. \
                        '''
                    }
                    waitForQualityGate abortPipeline: true
                }
            }
        }
        stage('docker build'){
            steps{
                sh 'docker build -t yseemakurthi/test:$GIT_COMMIT'
            }
        }
            
    }

}