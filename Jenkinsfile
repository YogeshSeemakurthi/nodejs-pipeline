pipeline{
    agent any

    tools {
    nodejs 'node-24-0-2'
    }

    stages{
        stage('check node version'){
            sh '''
                node -v
                npm -v
            '''
        }
        stage('install dependencies'){
            sh 'npm install --no-audit'
        }
            
    }

}