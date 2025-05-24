pipeline{
    agent any

    tools {
    nodejs 'node-24-0-2'
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
                sh '''
                    $SONAR_SCANNER_HOME/bin/sonar-scanner \
                        -Dsonar.projectKey=YogeshSeemakurthi_nodejs-pipeline_ff2ccae9-f501-4990-bbbd-10664e56ba4c \
                        -Dsonar.sources=. \
                        -Dsonar.host.url=https://6911-2405-201-c01d-98f2-c53e-f578-a72f-316b.ngrok-free.app \
                        -Dsonar.token=sqp_2eed5b8842bf767759d707b29910b678aeb1bbd1
                '''
            }
        }
            
    }

}