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

execute as @a[type=armor_stand,name="portal"] run title @a[rm=450] actionbar §l§vWarning! §r§6Your close to the world border!
execute as @a[type=armor_stand,name="portal"] run title @a[rm=500] actionbar §l§4Notice! §r§cYour outside the world border.
execute as @a[type=armor_stand,name="portal"] run damage @a[rm=500] 1 void
