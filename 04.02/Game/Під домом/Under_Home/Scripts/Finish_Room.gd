extends Node2D

func _ready():
	pass

func _on_area_2d_body_entered(body):
	if body.is_in_group("player"):
		if Global.player_level < 10:
			print("Boss fight")
		else:
			print("Happy end")
