extends Area2D

var hill_loss_timer = 30

func _ready():
	await get_tree().create_timer(hill_loss_timer).timeout
	queue_free()

func _on_body_entered(body):
	if body.is_in_group("player"):
		queue_free()
