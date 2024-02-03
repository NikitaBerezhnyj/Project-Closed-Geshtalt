extends Node2D

# Змінні для відображення тексту
var speed = 3
var time = 0
var sin_time = 0
var fade = true
var label_visible = false
var is_show_label = false
@onready var label = $Label

@onready var video_stream_player = $VideoStreamPlayer

# Виконується при запуску
func _ready():
	label.hide()
	await get_tree().create_timer(1).timeout
	label_visible = true

# Виконується кожен кадр (фіксовано)
func _physics_process(delta):
	if Input.is_action_just_pressed("call_menu"):
		get_tree().change_scene_to_file("res://Scenes/Main_Scene.tscn")
	time += delta
	sin_time = sin(time * speed)
	flash_text()

# Перевірка вводу користувача
func _input(_event):
	if is_show_label == false:
		label.show()
		fade = true
		is_show_label = true

# Якщо відео скінчилось
func _on_timer_timeout():
	get_tree().change_scene_to_file("res://Scenes/Main_Scene.tscn")

# Блимання тексту
func flash_text():
	if !fade:
		if sin_time > 0:
			label_visible = true
		else:
			label_visible = false
	else:
		label_visible = true
		label.modulate.a = sin_time
