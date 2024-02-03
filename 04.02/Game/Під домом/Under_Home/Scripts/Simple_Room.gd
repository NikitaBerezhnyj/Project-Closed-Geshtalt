extends Area2D

var enemies
var enemyCount = 0
var is_visit = false
var enemy_quantity = 0
var enemy_quantity_min = 3
var enemy_quantity_max = 6
var enemys = [
	preload("res://Scenes/Characters/Enemies/Enemy_0.tscn"),
	preload("res://Scenes/Characters/Enemies/Enemy_1.tscn"),
	preload("res://Scenes/Characters/Enemies/Enemy_2.tscn"),
	preload("res://Scenes/Characters/Enemies/Enemy_3.tscn")
]

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
	light_load()

# Перевірка чи всі вороги вбиті
func _process(_delta):
	enemies = get_tree().get_nodes_in_group("enemys")
	enemyCount = enemies.size()
	if enemyCount == 0 and is_visit == true:
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
			enemys_load()

# Завантаження світлових грибів
func light_load():
	var mushroom_quantity = randi_range(6, 10)
	for mushroom_num in mushroom_quantity:
		light_mushroom = light_mushroom_obj.instantiate()
		center_room = get_viewport_rect().size / 2
		light_mushroom_pos = Vector2(center_room.x + randi_range(-250, 250), center_room.y + + randi_range(-250, 250))
		light_mushroom.set_position(light_mushroom_pos)
		add_child(light_mushroom)
	var save_point_obj = preload("res://Scenes/Prefabs/Save_point.tscn")
	var save_point = save_point_obj.instantiate()
	save_point.set_position(center_room)
	add_child(save_point)

# Завантаження ворогів
func enemys_load():
	enemy_quantity_min += Global.player_level
	enemy_quantity_max += Global.player_level
	enemy_quantity = randi_range(enemy_quantity_min, enemy_quantity_max)
	print("enemy_quantity_min: ", enemy_quantity_min)
	print("enemy_quantity_max: ", enemy_quantity_max)
	print("enemy_quantity: ", enemy_quantity)
	for enemy_num in enemy_quantity:
		rand_enemy = randi_range(0, enemys.size() - 1)
		enemy_i = enemys[rand_enemy].instantiate()
		center_room = get_viewport_rect().size / 2
		enemy_pos = Vector2(center_room.x + randi_range(-250, 250), center_room.y + + randi_range(-250, 250))
		enemy_i.set_position(enemy_pos)
		add_child(enemy_i)
	enemies = get_tree().get_nodes_in_group("enemys")
	enemyCount = enemies.size()
