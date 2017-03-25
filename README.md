# Java / Maven / Spring / AngularJs + RequireJs Admin Dashboard

## Introduction

This project aims to be a sample template for building an admin dashboard. The project is
built using the technologies Java / Maven / Spring / AngularJs and RequireJs.



## Prerequisites
* Firefox or Chrome
* [JDK](http://www.wikihow.com/Install-Oracle-Java-JDK-on-Ubuntu-Linux)
* [Maven](https://maven.apache.org/download.cgi) `sudo apt-get install maven`
* [GIT](https://git-scm.com/downloads) `sudo apt-get install git`
* [npm](https://www.npmjs.org) or `sudo apt-get install npm`
* [nodejs](http://nodejs.org) or `sudo apt-get install nodejs-legacy`
* [IDE](http://www.jetbrains.com/)
* [bower](http://bower.io)
* [Application Server](https://tomcat.apache.org/download-90.cgi) `(tomcat)`
* Copy the tomcat-users.xml file for tomcat management and administration to the tomcat/conf. Set your own username and password



## Git Clone

```bash
https://github.com/shrutishankar/admin-dashboard.git
```



## Configuration

You will need to
* configure the application correctly in the pom.xml file.
* add the correct version numbers
* add folder location to deploy the app correctly to a tomcat server.



## Maven Installation

```bash
mvn clean package
```

When running this command a couple of things happen:
* All the other standard maven phases.
* The war will be copied to the tomcat folder specified in the tomcat property


## License
MIT
