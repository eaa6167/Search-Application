# Search-Application
 Search Application is an application that can be used to search tweets or comparable data of your choice.     
#####  This document contains details on Installing and Running this application using Tweet and Amazon datasets.                                                                     
##### Before you start running our backend application, please install the driver (NodeJS) to connect to MongoDB. 
## Install:
##### A. Check if Node and NPM are already installed by running the following commands on terminal: 
##### which node 
##### which npm
##### You will get the following output if it is already installed (Skip the next install section).

![pic a](https://cloud.githubusercontent.com/assets/22663863/24255590/2a6cea88-0fa3-11e7-9db6-54886e240bd8.png)
##### If these commands return no output but just pass silently, then you must install them (follow the install section).
##### B. Install Node and NPM

![pic 2](https://cloud.githubusercontent.com/assets/22663863/24254385/051f7e9c-0fa0-11e7-8187-f62645030d61.png)

##### 1. Initialize npm by running - npm init 
##### 2. Install MongoDB package for NodeJS.

![pic 3](https://cloud.githubusercontent.com/assets/22663863/24254528/62945d90-0fa0-11e7-94b2-b61e7eea0c81.png)

## Running Backend Application for tweets_sandy.csv dataset:
##### Prerequisites:
##### 1.Save tweets.js file in your home directory 
##### 2.Download tweets_sandy.csv collection from http://kelvin.ist.rit.edu/~mjmic and save it in your home directory 
##### 3.Import the tweets 
##### (Note: Make sure you exit the mongo shell (using exit) and issue  the following command at the system prompt)
##### mongoimport --headerline --db users --collection tweets_sandy --drop --type csv --file tweets_sandy.csv

##### ![pic 4](https://cloud.githubusercontent.com/assets/22663863/24254806/0cafe420-0fa1-11e7-98d8-95828fcc6b2a.png)

##### 4.Start mongo client by running mongo

![pic 4](https://cloud.githubusercontent.com/assets/22663863/24255530/00e5996c-0fa3-11e7-9fc2-68164313e8e5.png)
##### 5.Access Users database by running use users

![pic 5](https://cloud.githubusercontent.com/assets/22663863/24255162/efba175e-0fa1-11e7-9149-10884d0afbfe.png)
##### 6.Show that you have tweets_sandy collection under users database by running show collections 

![pic 6](https://cloud.githubusercontent.com/assets/22663863/24255165/efc0081c-0fa1-11e7-9ff0-cd8db6c7a591.png)
##### 7.Exit mongo client by running exit 

![pic 7](https://cloud.githubusercontent.com/assets/22663863/24255163/efbd9a28-0fa1-11e7-8226-66a5fd9d17d4.png)
##### 8.Run the program using node tweets.js 

![pic 81](https://cloud.githubusercontent.com/assets/22663863/24255164/efbf8ab8-0fa1-11e7-9351-3fdcf5e79436.png)
##### You will get the following output:

![output tweet](https://cloud.githubusercontent.com/assets/22663863/24277530/df0ddc70-0ffa-11e7-93d5-db28f241163e.png)

## Running Backend Application for Amazon_Automotive.json dataset:
##### Prerequisites:
##### 1.Save amazon.js file in your home directory 
##### 2.Download Amazon_Automotive.json collection from RIT myCourses/Drop Box and save it in your home directory
##### 3.Import amazon dataset 
##### (Note: Make sure you exit the mongo shell (using exit) and issue  the following command at the system prompt)
##### mongoimport --headerline --db users --collection Amazon_Automotive --drop --type json --file Amazon_Automotive.json  

![pic 1](https://cloud.githubusercontent.com/assets/22663863/24273569/404094d0-0fe0-11e7-9344-387313ec92da.png)
##### 4.Start mongo client by running mongo!

![pic 2](https://cloud.githubusercontent.com/assets/22663863/24273572/40441e2a-0fe0-11e7-90db-a1c3b2e00c53.png)
##### 5.Access Users database by running use users            

![pic 3](https://cloud.githubusercontent.com/assets/22663863/24273568/40406c3a-0fe0-11e7-9acc-024dfdef8b5d.png)
##### 6.Show that you have Amazon_Automotive collection under users database by running show collections  

![pic 4](https://cloud.githubusercontent.com/assets/22663863/24273567/403ceb0a-0fe0-11e7-9fb0-d149a7468af6.png)
##### 7.Exit mongo client by running exit 

 ![pic 5](https://cloud.githubusercontent.com/assets/22663863/24273566/403bd54e-0fe0-11e7-8085-379037487378.png)
##### 8.Run the program using node amazon.js 

 ![pic 6](https://cloud.githubusercontent.com/assets/22663863/24273570/40426c9c-0fe0-11e7-8a14-d7812ff0059d.png)
##### You will get the following output:
##### (note: Due to the large document , I have posted partial output)

![pic 7](https://cloud.githubusercontent.com/assets/22663863/24273571/40434018-0fe0-11e7-8904-de1f91ea71ac.png)











