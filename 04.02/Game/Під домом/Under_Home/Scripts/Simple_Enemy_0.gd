extends CharacterBody2D

var HP = 50
var SPEED = 75
var damage = 25
var is_take_damage = false
var dash_diraction = Vector2(0, 0)
var direction = Vector2()

var blood = preload("res://Scenes/Prefabs/Blood.tscn")
var hill_object = preload("res://Scenes/Prefabs/Hill.tscn")

var is_left = false
@onready var sprite_2d = $Sprite2D

signal death(expirience)
@onready var helth_bar = $TextureProgressBar

func _ready():
	helth_bar.max_value = HP
	helth_bar.value = HP
	Global.simple_enemy_damage_0 = damage

func _physics_process(_delta):
	if HP <= 0:
		var blood_i = blood.instantiate()
		blood_i.global_position = global_position
		blood_i.rotation = global_position.angle_to_point(Global.player.global_position)
		get_tree().current_scene.add_child(blood_i)
		var hill_spavn_num = randi_range(0, 100)
		if hill_spavn_num >= 85:
			var hill = hill_object.instantiate()
			var hill_position = self.position
			hill.position = hill_position
			get_parent().add_child(hill)
		death.emit(10)
		queue_free()
	
	if Global.player != null:
		direction = global_position.direction_to(Global.player.global_position)
#	else:
#		knockback()
	
	if direction.x < 0:
		is_left = true
	else:
		is_left = false
		
#	global_position += direction * SPEED * delta
	velocity = direction.normalized() * SPEED
	sprite_2d.flip_h = is_left
	move_and_slide()

#func knockback():
#	direction = -velocity
#	direction.normalized() * 2000
#	is_take_damage = false
#	move_and_slide()

func _on_area_2d_body_entered(body):
	if body.is_in_group("bullet"):
		HP -= Global.bullet_damage
		helth_bar.value = HP
#	Відскок якщо ударив гравця
	if body.is_in_group("Player"):
		is_take_damage = true
