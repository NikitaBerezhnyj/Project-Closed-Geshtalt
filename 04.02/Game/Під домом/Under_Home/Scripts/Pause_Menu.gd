extends Control

var is_borderless
var is_fullscreen

@onready var root = $"../../"
@onready var pause_menu = $Pause_Menu
@onready var options_menu = $Options_Menu
@onready var dropdown_screens = $Options_Menu/VBoxContainer2/Graphic_Settings_VBox/ScreenSize/OptionButton

var Resolutions: Dictionary = {
	"1280 x 720": Vector2(1280, 720),
	"1360 x 765": Vector2(1360, 765),
	"1400 x 787": Vector2(1400, 787),
	"1600 x 900": Vector2(1600, 900),
	"1920 x 1080": Vector2(1920, 1080), 
	"2560 x 1440": Vector2(2560, 1440),
	"3840 x 2160": Vector2(3840, 2160)}

func AddResolutions():
	for r in Resolutions:
		dropdown_screens.add_item(r)

func _ready():
	AddResolutions()
	options_menu.hide()

func _on_resume_pressed():
	root.enable_pause_menu()
	options_menu.hide()

func _on_options_pressed():
	pause_menu.hide()
	options_menu.show()

func _on_back_to_menu_pressed():
	get_tree().change_scene_to_file("res://Scenes/Interfaces/Main_Menu.tscn")

func _on_option_button_item_selected(index):
	var size = Resolutions.get(dropdown_screens.get_item_text(index))
	get_viewport().size = size

func _on_full_screen_check_pressed():
	if is_fullscreen == true:
		DisplayServer.window_set_mode(DisplayServer.WINDOW_MODE_WINDOWED)
		is_fullscreen = false
	else:
		DisplayServer.window_set_mode(DisplayServer.WINDOW_MODE_FULLSCREEN)
		is_fullscreen = true

func _on_borderless_windowed_check_pressed():
	if is_borderless == true:
		DisplayServer.window_set_mode(DisplayServer.WINDOW_MODE_WINDOWED)
		DisplayServer.window_set_flag(DisplayServer.WINDOW_FLAG_BORDERLESS, false)
		print(str(get_viewport().content_scale_size))
		is_borderless = false
	else:
		DisplayServer.window_set_mode(DisplayServer.WINDOW_MODE_WINDOWED)
		DisplayServer.window_set_flag(DisplayServer.WINDOW_FLAG_BORDERLESS, true)
		print(str(get_viewport().content_scale_size))
		is_borderless = true

func _on_button_pressed():
	pause_menu.show()
	options_menu.hide()
