extends Area2D

var is_interact = false
@onready var down_sprite = $Sprite2D
@onready var top_sprite = $Sprite2D2

func _ready():
	down_sprite.show()
	top_sprite.hide()

func _process(_delta):
	if Input.is_action_just_pressed("interact") and is_interact == true:
		is_interact = false
		down_sprite.show()
		top_sprite.show()
		DialogueManager.show_example_dialogue_balloon(load("res://Dialogues/save_point_dialogue.dialogue"), "start")
		return


func _on_body_entered(body):
	if body.is_in_group("player"):
		is_interact = true


func _on_body_exited(body):
	if body.is_in_group("player"):
		is_interact = false
