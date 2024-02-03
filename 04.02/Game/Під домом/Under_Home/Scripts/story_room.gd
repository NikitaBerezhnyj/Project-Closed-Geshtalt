extends Area2D

var boss
var bossCount = 0
var is_boss_live = true
var is_visit = false
var enemy_quantity = 0
#var boses = [
#	preload("res://Scenes/Characters/Bosses/Boss_0.tscn")
##	preload("res://Scenes/Characters/Enemies/Enemy_1.tscn"),
##	preload("res://Scenes/Characters/Enemies/Enemy_2.tscn"),
#]

@onready var door_l = $Door_L
@onready var door_r = $Door_R

var rand_enemy
var enemy_i
var enemy_pos

var center_room
var light_mushroom
var light_mushroom_pos
var light_mushroom_obj = preload("res://Scenes/Prefabs/Light_Mushroom.tscn")

func _ready():
	door_l.hide()
	door_r.hide()
	door_l.process_mode = Node.PROCESS_MODE_DISABLED
	door_r.process_mode = Node.PROCESS_MODE_DISABLED

# Перевірка чи всі вороги вбиті
func _process(_delta):
	boss = get_tree().get_nodes_in_group("boss")
	bossCount = boss.size()
	if bossCount == 0 and is_visit == true:
		door_l.hide()
		door_r.hide()
		door_l.process_mode = Node.PROCESS_MODE_DISABLED
		door_r.process_mode = Node.PROCESS_MODE_DISABLED

func _on_body_entered(body):
	if body.is_in_group("player"):
		if is_visit == false:
			is_visit = true
			door_l.show()
			door_r.show()
			door_l.process_mode = Node.PROCESS_MODE_INHERIT
			door_r.process_mode = Node.PROCESS_MODE_INHERIT
#			enemys_load()

# Завантаження ворогів
#func enemys_load():
#	rand_enemy = randi_range(0, boses.size() - 1)
#	enemy_i = boses[rand_enemy].instantiate()
#	center_room = get_viewport_rect().size / 2
#	enemy_pos = Vector2(center_room.x + randi_range(-250, 250), center_room.y + + randi_range(-250, 250))
#	enemy_i.set_position(enemy_pos)
#	add_child(enemy_i)
#	boss = get_tree().get_nodes_in_group("boss")
#	bossCount = boss.size()
#	print(bossCount)
