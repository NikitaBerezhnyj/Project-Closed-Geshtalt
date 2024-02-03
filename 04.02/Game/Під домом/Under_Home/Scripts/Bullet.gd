extends CharacterBody2D

var speed = 400
var direction = Vector2(0, 0)
@onready var sprite = $Sprite2D

func _ready():
#	var damage = randi_range(0, 10)
#	if damage <= 2:
#		Global.bullet_damage = 70
#	else:
#		Global.bullet_damage = 50
	Global.bullet_damage = 50
	var player_level = Global.player_level
	var color
	match player_level:
		0:
			color = "000000"
		1:
			color = "111111"
		2:
			color = "222222"
		3:
			color = "333333"
		4:
			color = "444444"
		5:
			color = "555555"
		6:
			color = "666666"
		7:
			color = "777777"
		8:
			color = "888888"
		9:
			color = "999999"
		10:
			color = "ffffff"
	sprite.self_modulate = Color(color)
	direction = get_local_mouse_position()
	await get_tree().create_timer(0.7).timeout
	queue_free()

func _physics_process(delta):
	look_at(direction.normalized())
	translate(direction.normalized() * speed * delta)
	move_and_slide()


func _on_area_2d_body_entered(body):
	if body.is_in_group("enemys"):
		queue_free()
	if body.is_in_group("walls"):
		queue_free()
