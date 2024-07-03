It contains  common UI components :category,preloader ,getpostwidth.<br />
To include the package in project :<br />
1 Add a .npmrc file <br />
with contents <br />
//12-digit-id.d.codeartifact.us-east-1.amazonaws.com/npm/nbnw-repo/:always-auth=true @12-digit-id:registry=https://12-digit-id.d.codeartifact.us-east-1.amazonaws.com/npm/nbnw-repo/ <br />
2 run this command to login to aws codeartifact : aws codeartifact login --tool npm --repository nbnw-repo --domain nbnw-domain --domain-owner 12-digit-id --region us-east-1 <br />
3 npm install uinbnwcomponents
