tag @r[tag=queue] add main
spreadplayers ~ ~ 1000 10000 @a[name="main"]
tp @a[tag=queue] @a[tag=main]

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
  
execute at @e[tag=main] run spreadplayers ~ ~ 250 500 @e[type=armor_stand,name="portal"]
execute at @e[tag=main] run structure load portal ~~~
title @a[tag=queue] title §l§a(!)
title @a[tag=queue] subtitle §l§2>> §aGame started! §2<<
title @a[tag=!queue] §l§aNotice! §rA game has just started so there will be a long wait time.
  
execute at @a[tag=main] run summon armor_stand spawn ~~~
tag @a remove main

execute at @e[type=armor_stand,name="spawn"] run spreadplayers ~ ~ 250 500 @a[tag=queue]
tag @a[tag=queue] add ingame
tag @a[tag=playing] remove queue

