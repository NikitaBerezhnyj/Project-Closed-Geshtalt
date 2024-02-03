extends CharacterBody2D

# Змінні, для користувача
var max_hp = 100
var hp = 100
var speed = 300.0
# var bullet_damage = 50

var max_xp = 10
var xp = 0

var level = 1
var expirience = 0
var max_expirience = 100

signal level_up_signal

var direction_x
var direction_y

var is_paused = false
var is_right = false

var is_save_point = false

var is_shoot = false
var can_shoot = true
var shoot_pause = 0.2

var can_dash = true
var dash_pause = 0.5
var dash_diraction = Vector2()

var knockback_direction = Vector2()

var is_interact = false
@onready var f_label = $Label

@onready var sprite_2d = $Sprite2D
@onready var pause_menu = $Camera2D/Pause_Menu
@onready var hp_exp_vbox = $Camera2D/VBox
@onready var helth_bar = $Camera2D/VBox/HP_HBox/TextureProgressBar
@onready var experience_bar = $Camera2D/VBox/LVL_HBox/TextureProgressBar

var bullet_path = preload("res://Scenes/Prefabs/Bullet.tscn")

func _ready():
	$Camera2D/ColorRect/AnimationPlayer.play("fade_in")
	f_label.hide()
#	helth_bar.show()
#	experience_bar.show()
	hp_exp_vbox.show()
	helth_bar.max_value = max_hp
	helth_bar.value = hp
	experience_bar.max_value = max_expirience
	experience_bar.value = expirience
	Global.player = self
	Global.player_level = level
	pause_menu.hide()
	Engine.time_scale = 1
	is_paused = false
	hp = max_hp

# Якщо гравець покине сцену
func _exit_tree():
	Global.player = null

# Виконується кожен кадр
func _process(_delta):
	#Global.bullet_damage = bullet_damage
	if Input.is_action_just_pressed("call_menu"):
		enable_pause_menu()
	
	if expirience >= max_expirience:
		level += 1
		expirience = 0
		max_expirience *= 2
		Global.player_level = level
	
	var enemies = get_tree().get_nodes_in_group("enemys")
	for enemy in enemies:
		enemy.death.connect(take_expirience)

# Виконується кожен кадр (фіксовано)
func _physics_process(_delta):
	if hp <= 0:
		enable_lose_menu()
	
	helth_bar.value = hp
	experience_bar.value = expirience
	experience_bar.max_value = max_expirience
	
	if xp >= max_xp:
		max_xp = max_xp * 2
	
	# Анімація гравця
	if velocity.x > 1 || velocity.x < -1 || velocity.y > 1 || velocity.y < -1:
		sprite_2d.animation = "run"
	elif is_shoot == true:
		sprite_2d.animation = "attack"
		is_shoot = false
	else:
		sprite_2d.animation = "idle"
	
	# Переміщення по горизонталі
	direction_x = Input.get_axis("left", "right")
	if direction_x:
		velocity.x = direction_x * speed
	else:
		velocity.x = move_toward(velocity.x, 0, speed)
	
	# Переміщення по вертикалі
	direction_y = Input.get_axis("top", "down")
	if direction_y:
		velocity.y = direction_y * speed
	else:
		velocity.y = move_toward(velocity.y, 0, speed)
	
	# Розворот гравця
	if direction_x > 0:
		is_right = false
	elif direction_x < 0:
		is_right = true
	sprite_2d.flip_h = is_right
	
	# Збереження на чекпоінті
	if Input.is_action_just_pressed("interact") and is_interact == true:
		hp = max_hp
		is_interact = false
		f_label.hide()
	
	# Прискорення
	if Input.is_action_just_pressed("dash") and can_dash == true and is_paused != true:
		can_dash = false
		dash_diraction = Vector2(direction_x, direction_y)
		if dash_diraction == Vector2(0,0):
			dash_diraction = Vector2(1, 0)
			velocity = dash_diraction.normalized() * 2000
		else:
			speed += 1000
			await get_tree().create_timer(0.1).timeout
			speed = 300.0
		await get_tree().create_timer(dash_pause).timeout
		can_dash = true
	
	# Стрільба
	if Input.is_action_just_pressed("shooting") and can_shoot == true and is_paused != true:
		shoot()
		is_shoot == true
		can_shoot = false
		await get_tree().create_timer(shoot_pause).timeout
		can_shoot = true
	
	move_and_slide()

func _on_area_2d_body_entered(body):
	if body.is_in_group("simple_enemy_0"):
		hp -= Global.simple_enemy_damage_0
		knockback(body.velocity)
	elif body.is_in_group("simple_enemy_1"):
		hp -= Global.simple_enemy_damage_1
		knockback(body.velocity)
	elif body.is_in_group("simple_enemy_2"):
		hp -= Global.simple_enemy_damage_2
		knockback(body.velocity)
	elif body.is_in_group("simple_enemy_3"):
		hp -= Global.simple_enemy_damage_3
		knockback(body.velocity)
	elif body.is_in_group("enemy_bullet"):
		hp -= Global.enemy_bullet_damage
		knockback(body.velocity)

func _on_area_2d_area_entered(area):
	if area.is_in_group("hill"):
		if hp <= max_hp:
			hp += 50
			if hp > max_hp:
				hp = max_hp
	
	if area.is_in_group("save_point"):
		is_interact = true
		f_label.show()

func _on_area_2d_area_exited(area):
	if area.is_in_group("save_point"):
		is_interact = false
		f_label.hide()

func take_expirience(enemy_expirience):
	expirience += enemy_expirience

func shoot():
	var bullet = bullet_path.instantiate()
	var bullet_goal = get_local_mouse_position().normalized()
	var bullet_pos = self.position + bullet_goal * 35
	bullet.position = bullet_pos
	get_parent().add_child(bullet)

func knockback(enemyVelocity):
	knockback_direction = (enemyVelocity - velocity).normalized() * 1500
	velocity = knockback_direction
	move_and_slide()

func enable_pause_menu():
	if is_paused == true:
		pause_menu.hide()
#		helth_bar.show()
#		experience_bar.show()
		hp_exp_vbox.show()
		Engine.time_scale = 1
		is_paused = false
	else:
		pause_menu.show()
#		helth_bar.hide()
#		experience_bar.hide()
		hp_exp_vbox.hide()
		Engine.time_scale = 0
		is_paused = true

func enable_lose_menu():
	get_tree().change_scene_to_file("res://Scenes/Interfaces/Lose_Menu.tscn")
