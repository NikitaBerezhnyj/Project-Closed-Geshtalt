extends Control

func _on_restart_pressed():
	get_tree().change_scene_to_file("res://Scenes/Main_Scene.tscn")

func _on_load_save_pressed():
	print("Load save, but now simple restart")
	get_tree().change_scene_to_file("res://Scenes/Main_Scene.tscn")

func _on_back_to_menu_pressed():
	get_tree().change_scene_to_file("res://Scenes/Interfaces/Main_Menu.tscn")
