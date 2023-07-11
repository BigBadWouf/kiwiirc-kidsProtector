# kidsProtector  

## KiwiIRC plugin for display warn message when query a kid  

Copy kidsProtector in www/static/plugins folder  
Add this to www/static/config.json  
```
"plugins" : [  
    {"name": "kidsProtector", "url": "static/plugins/kids-protector.js"}  
],  
"kids-protector": {  
    "warnOnQuery": true,  
    "warnMessage": "Vous vous adressez à un utilisateur mineur. Merci de rester correct sous peine de sanctions lourdes.",  
},  
```

This plugin depend of plugin-asl. 