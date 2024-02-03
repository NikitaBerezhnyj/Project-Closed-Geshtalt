extends Control

var power_up = ["hp +15%", "damage +15", "speed +15", "chance_creed +15"]

func _ready():
	var player = get_tree().get_nodes_in_group("player")
	player.connect("level_up_signal", self, "generate_power_up")

func _process(delta):
	pass

func generate_power_up():
	print("generate")

func _on_power_cart_0_pressed():
	pass # Replace with function body.


func _on_power_cart_1_pressed():
	pass # Replace with function body.


func _on_power_cart_2_pressed():
	pass # Replace with function body.
