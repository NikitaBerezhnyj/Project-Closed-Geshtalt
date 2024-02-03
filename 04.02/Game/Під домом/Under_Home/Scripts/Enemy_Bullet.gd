extends CharacterBody2D

var speed = 400
var direction = Vector2(0, 0)
@onready var sprite = $Sprite2D

func _ready():
	direction = global_position.direction_to(Global.player.global_position)
	await get_tree().create_timer(0.7).timeout
	queue_free()

func _physics_process(delta):
	look_at(direction.normalized())
	translate(direction.normalized() * speed * delta)
	move_and_slide()


func _on_area_2d_body_entered(body):
	if body.is_in_group("player"):
		queue_free()
	if body.is_in_group("walls"):
		queue_free()
