extends CharacterBody2D

var hp = 0
var max_hp = 1000
var speed = 10
var can_shoot = true
var shoot_pause = 1.5
var is_live = true
var is_fight = false
var is_x_point_run = false
var is_rand_point_run = false
signal death(expirience)

var bullet_path = preload("res://Scenes/Prefabs/Enemy_Bullet.tscn")
var boss_points = Vector2(-50, 50)

@onready var helth_bar = $TextureProgressBar

func _ready():
	hp = max_hp
	helth_bar.value = (100 * hp) / max_hp

func _process(delta):
	helth_bar.value = (100 * hp) / max_hp
	if hp <= 0:
		queue_free()
		death.emit(100)
		is_live = false
	elif hp > 0 and hp <= (hp / 100) * 25:
		shoot_pause = 0.75
	elif hp > 0 and hp <= (hp / 100) * 50:
		shoot_pause = 1
	elif hp > 0 and hp <= (hp / 100) * 75:
		shoot_pause = 1.25
	if can_shoot == true and is_fight == true:
		shoot()
		can_shoot = false
		await get_tree().create_timer(shoot_pause).timeout
		can_shoot = true

func _on_area_2d_body_entered(body):
	if body.is_in_group("bullet"):
		is_fight = true
		hp -= Global.bullet_damage

func shoot():
	var bullet = bullet_path.instantiate()
	var bullet_goal = Global.player.global_position.normalized()
	var bullet_pos = self.position + bullet_goal * 35
	bullet.position = bullet_pos
	get_parent().add_child(bullet)
