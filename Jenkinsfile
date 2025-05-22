pipeline{
    agent any

    tools {
    nodejs 'node-24-0-2'
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
            
    }

}