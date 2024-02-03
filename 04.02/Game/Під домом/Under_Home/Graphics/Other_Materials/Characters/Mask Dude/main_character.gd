extends CharacterBody2D

# Constants
const SPEED = 400.0
const JUMP_VELOCITY = -650.0
@onready var sprite_2d = $Sprite2D

# Variable
var jump_max = 2
var jump_conter = 0

# Get the gravity from the project settings to be synced with RigidBody nodes.
var gravity = ProjectSettings.get_setting("physics/2d/default_gravity")

func _physics_process(delta):
	# Animation
	if (velocity.x > 1 || velocity.x < -1):
		sprite_2d.animation = "running"
	else:
		sprite_2d.animation = "default"
	
	# Add the gravity.
	if not is_on_floor():
		velocity.y += gravity * delta
		sprite_2d.animation = "jumping"

	if is_on_floor() and jump_conter != 0:
		jump_conter = 0

	# Handle Jump.
	if Input.is_action_just_pressed("jump") and jump_conter < jump_max:
		if jump_conter > 0:
			velocity.y = JUMP_VELOCITY / 1.5
		else:
			velocity.y = JUMP_VELOCITY
		jump_conter += 1

	# Handle Move.
	var direction = Input.get_axis("left", "right")
	if direction:
		velocity.x = direction * SPEED
	else:
		velocity.x = move_toward(velocity.x, 0, SPEED)

	move_and_slide()
	
	var isLeft = velocity.x < 0
	sprite_2d.flip_h = isLeft

func _on_area_2d_body_entered(body):
	# get_tree().change_scene_to_file("res://scenes/Finish_Menu.tscn")
	if body.name == 'TileMap':
		return 0
	else:
		get_tree().change_scene_to_file("res://scenes/Finish_Menu.tscn")
	
