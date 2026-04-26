summon armor_stand portal ~~~ 
summon armor_stand portal ~~~ 
summon armor_stand portal ~~~ 
summon armor_stand portal ~~~ 
summon armor_stand portal ~~~ 
summon armor_stand portal ~~~ 
summon armor_stand portal ~~~ 
summon armor_stand portal ~~~ 
summon armor_stand portal ~~~ 
summon armor_stand portal ~~~
  
summon armor_stand spawn ~~~
spreadplayers ~ ~ 1000 10000 @e[name="spawn"]

execute at @e[type=armor_stand,name="spawn"] run spreadplayers ~ ~ 250 500 @e[name="portal"]
execute at @e[type=armor_stand,name="portal"] run structure load portal ~~~
title @a title §l§a(!)
title @a subtitle §l§2>> §aGame started! §2<<
execute at @e[type=armor_stand,name="spawn"] run spreadplayers ~ ~ 250 500 @a[tag=queue]
tag @a[tag=queue] add ingame
tag @a[tag=playing] remove queue
