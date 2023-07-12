# kidsProtector  

## KiwiIRC plugin for display warn message when query a kid  

Copy ```kids-protector.html``` in ```www/static/plugins``` folder  
Add this to ```www/static/config.json```  
```
"plugins" : [
    {"name": "kidsProtector", "url": "static/plugins/kids-protector.html"}
	],
"kids-protector": {
    "warnOnQuery": true,
    "warnMessage": "Vous vous adressez à un utilisateur mineur. Merci de rester correct sous peine de sanctions lourdes.",
    "disableQueryFromAdult": false,
    "IgnoreAfterYearOld": 20
},
```

This plugin depend of plugin-asl.  
  
## Todo  
Maybe parsing realname for users don't use Applet. 