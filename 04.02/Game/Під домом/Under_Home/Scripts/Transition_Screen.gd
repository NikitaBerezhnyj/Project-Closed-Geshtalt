extends CanvasLayer

signal transitioned
@onready var animation_player = $AnimationPlayer

func transition():
	animation_player.play("fade_to_normal")

#func _on_animation_player_animation_finished(anim_name):
#	if anim_name == "fade_to_black":
#		emit_signal("transitioned")
#		animation_player.play("fade_to_normal")
