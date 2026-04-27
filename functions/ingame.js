execute as @a[tag=ingame] at @s if block ~~~ portal run title @s actionbar §l§4Notice! §r§cThe nether is disabled.
execute at @a[tag=ingame] if block ~~~ portal run setblock ~~~ air destroy
execute as @a[tag=ingame] at @s if block ~1~~ portal run title @s actionbar §l§4Notice! §r§cThe nether is disabled.
execute at @a[tag=ingame] if block ~1~~ portal run setblock ~1~~ air destroy
execute as @a[tag=ingame] at @s if block ~~~1 portal run title @s actionbar §l§4Notice! §r§cThe nether is disabled.
execute at @a[tag=ingame] if block ~~~1 portal run setblock ~~~1 air destroy
execute as @a[tag=ingame] at @s if block ~-1~~ portal run title @s actionbar §l§4Notice! §r§cThe nether is disabled.
execute at @a[tag=ingame] if block ~-1~~ portal run setblock ~-1~~ air destroy
execute as @a[tag=ingame] at @s if block ~~~-1 portal run title @s actionbar §l§4Notice! §r§cThe nether is disabled.
execute at @a[tag=ingame] if block ~~~-1 portal run setblock ~~~-1 air destroy


execute as @e[type=armor_stand,name="portal"] at @a[r=50] run title @s actionbar §l§2Note! §r§aYour in 50 blocks of an active portal!
execute as @e[type=armor_stand,name="portal"] if entity @a[r=50] run tag @s add active
execute as @e[type=armor_stand,name="portal"] if entity @a[r=50] run tag @s add active


execute as @p[type=armor_stand,name=portal] at @a[r=50,tag=ingame,hasitem={item=compass,location=slot.weapon.mainhand}] run spawnpoint @s


execute as @e[type=armor_stand,name="portal"] run title @a[rm=450] actionbar §l§vWarning! §r§6Your close to the world border!
execute as @e[type=armor_stand,name="portal"] run title @a[rm=500] actionbar §l§4Notice! §r§cYour outside the world border.
execute as @e[type=armor_stand,name="portal"] run damage @a[rm=500] 1 void
