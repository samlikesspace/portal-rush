execute at @a[tag=ingame] if block ~~~ portal run title @s actionbar §l§4Notice! §r§cThe nether is disabled.
execute at @a[tag=ingame] if block ~~~ portal run setblock ~~~ air destroy
execute at @a[tag=ingame] if block ~1~~ portal run title @s actionbar §l§4Notice! §r§cThe nether is disabled.
execute at @a[tag=ingame] if block ~1~~ portal run setblock ~1~~ air destroy
execute at @a[tag=ingame] if block ~~~1 portal run title @s actionbar §l§4Notice! §r§cThe nether is disabled.
execute at @a[tag=ingame] if block ~~~1 portal run setblock ~~~1 air destroy
execute at @a[tag=ingame] if block ~-1~~ portal run title @s actionbar §l§4Notice! §r§cThe nether is disabled.
execute at @a[tag=ingame] if block ~-1~~ portal run setblock ~-1~~ air destroy
execute at @a[tag=ingame] if block ~~~-1 portal run title @s actionbar §l§4Notice! §r§cThe nether is disabled.
execute at @a[tag=ingame] if block ~~~-1 portal run setblock ~~~-1 air destroy

# execute at @a[tag=!ingame] if block ~~~ portal run tag add queue
# execute at @a[tag=!ingame,score={}] if block ~~~ portal run scoreboard players add queue pr 1
# execute at @a[tag=!ingame] if block ~~~ portal run scoreboard players set @s pr 1
