extends CharacterBody2D

var HP = 50
var SPEED = 150
var damage = 50
var direction = Vector2()

var is_persecution = false

var is_left = false
@onready var sprite_2d = $Sprite2D

var blood = preload("res://Scenes/Prefabs/Blood.tscn")
var hill_object = preload("res://Scenes/Prefabs/Hill.tscn")

signal death(expirience)
@onready var helth_bar = $TextureProgressBar

func _ready():
	helth_bar.max_value = HP
	helth_bar.value = HP
	Global.simple_enemy_damage_3 = damage

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
		death.emit(15)
		queue_free()
	
	if is_persecution == true and Global.player != null:
		sprite_2d.animation = "attack"
		direction = global_position.direction_to(Global.player.global_position)
	else:
		sprite_2d.animation = "idle"
	
	if direction.x < 0:
		is_left = true
	else:
		is_left = false
		
#	global_position += direction * SPEED * delta
	velocity = direction.normalized() * SPEED
	sprite_2d.flip_h = is_left
	move_and_slide()

func _on_area_2d_body_entered(body):
	if body.is_in_group("bullet"):
		HP -= Global.bullet_damage
		helth_bar.value = HP

func _on_area_2d_2_body_entered(body):
	if body.is_in_group("player"):
		is_persecution = true
