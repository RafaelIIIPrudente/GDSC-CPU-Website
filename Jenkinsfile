pipeline {
    agent any
    tools{nodejs 'node'
    }
    stages {
        stage('Pull') {
            steps {
        checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/RafaelIIIPrudente/GDSC-CPU-Website.git']]])
            }
        }
        stage('Build Backend and Frontend') {
            steps {
                sh "npm run build"
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t docker-gdsc:latest"   
                }
            }
        }
    }
}